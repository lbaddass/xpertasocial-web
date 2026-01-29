// src/app/api/trigger-job/route.ts
import { NextResponse } from 'next/server';
import { getManifest } from '@/lib/manifest-parser';
import { getGCPClient, getCloudRunJobUrl } from '@/lib/gcp-auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { targetId } = body;

    // 1. Validar que el target existe en el manifiesto
    const manifest = getManifest();
    const target = manifest.targets.find(t => t.id === targetId);

    if (!target) {
      return NextResponse.json({ error: 'Invalid Target ID' }, { status: 400 });
    }

    // 2. Obtener cliente GCP
    const auth = await getGCPClient();

    // --- MODO SIMULACIÓN (Si no hay credenciales) ---
    if (!auth) {
        console.log(`[SIMULATION] Triggering Job for ${target.name} (${target.job_config.gcp_job_name})`);
        
        // Simular latencia de red
        await new Promise(r => setTimeout(r, 1500));
        
        return NextResponse.json({ 
            success: true, 
            mode: 'SIMULATION',
            message: `Job ${target.job_config.gcp_job_name} simulated successfully.`,
            jobId: `sim-${Date.now()}`
        });
    }
    // -----------------------------------------------

    // 3. Ejecutar Job real en Cloud Run
    const client = await auth.getClient();
    const region = process.env.GCP_REGION || 'us-central1';
    const jobName = target.job_config.gcp_job_name;
    const url = await getCloudRunJobUrl(region, jobName);

    // Cloud Run Jobs requiere un POST
    const res = await client.request({
        url,
        method: 'POST',
        // Opcional: Pasar overrides de variables de entorno al contenedor
        data: {
            overrides: {
                containerOverrides: [
                    {
                        env: [
                            { name: "TARGET_ID", value: targetId },
                            { name: "EXECUTION_MODE", value: "PRODUCTION" }
                        ]
                    }
                ]
            }
        }
    });

    return NextResponse.json({ 
        success: true, 
        data: res.data,
        message: `Job ${jobName} triggered successfully in GCP.`
    });

  } catch (error: any) {
    console.error('Trigger Error:', error);
    return NextResponse.json(
        { error: error.message || 'Internal Server Error' }, 
        { status: 500 }
    );
  }
}
