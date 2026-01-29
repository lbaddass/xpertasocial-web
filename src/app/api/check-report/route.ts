import { NextResponse } from 'next/server';
import { getReport } from '@/lib/r2';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const jobId = searchParams.get('jobId');

  if (!jobId) {
    return NextResponse.json({ error: 'Missing jobId' }, { status: 400 });
  }

  try {
    // Intentamos leer el reporte de R2
    const report = await getReport(jobId);

    if (report) {
      return NextResponse.json({ status: 'READY', jobId });
    } else {
      // Si retorna null, es que el archivo aún no existe
      return NextResponse.json({ status: 'PENDING' });
    }
  } catch (error) {
    console.error('Check Report Error:', error);
    return NextResponse.json({ status: 'ERROR' }, { status: 500 });
  }
}
