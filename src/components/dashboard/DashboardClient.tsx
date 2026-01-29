"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PersonaTarget } from "@/lib/manifest-parser";
import PersonaCard from "@/components/dashboard/PersonaCard";
import { Loader2 } from "lucide-react";

interface DashboardClientProps {
  targets: PersonaTarget[];
}

export default function DashboardClient({ targets }: DashboardClientProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [pollingJobId, setPollingJobId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState("");
  const router = useRouter();

  // Efecto de Polling: Vigila si hay un JobID activo
  useEffect(() => {
    if (!pollingJobId) return;

    const interval = setInterval(async () => {
      try {
        setStatusMessage("Esperando reporte del agente...");
        const res = await fetch(`/api/check-report?jobId=${pollingJobId}`);
        const data = await res.json();

        if (data.status === 'READY') {
          setStatusMessage("¡Reporte generado! Redirigiendo...");
          clearInterval(interval);
          router.push(`/admin/report/${pollingJobId}`);
        }
      } catch (e) {
        console.error("Polling error", e);
      }
    }, 3000); // Revisar cada 3 segundos

    // Cleanup al desmontar
    return () => clearInterval(interval);
  }, [pollingJobId, router]);

  const handleSelect = async (id: string) => {
    if (isLoading) return;
    
    setIsLoading(true);
    setActiveId(id);
    setStatusMessage("Iniciando contenedor en Cloud Run...");

    try {
        const res = await fetch('/api/trigger-job', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetId: id })
        });
        
        const data = await res.json();
        
        if (!res.ok) throw new Error(data.error);
        
        // En lugar de alert, iniciamos el polling con el JobID retornado
        // Nota: Asegúrate de que tu /api/trigger-job devuelva un `jobId` en la respuesta (Fase 5 lo hacía)
        const jobId = data.jobId || data.data?.metadata?.name || `sim-${Date.now()}`; 
        
        // Hack temporal: Si el trigger no devolvió un ID limpio (modo simulación a veces varía), usamos uno fallback
        // En producción real, Cloud Run devuelve el nombre de la ejecución.
        
        console.log("Job Triggered, waiting for:", jobId);
        setPollingJobId(jobId);
        
    } catch (e: any) {
        alert(`❌ Error: ${e.message}`);
        setIsLoading(false);
        setActiveId(null);
    }
  };

  return (
    <div>
      {/* Barra de Estado Global si hay carga */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full bg-indigo-600 text-white p-2 text-center text-sm font-medium z-50 flex items-center justify-center gap-2 animate-in slide-in-from-top">
          <Loader2 className="w-4 h-4 animate-spin" />
          {statusMessage}
        </div>
      )}

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-500 ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}>
        {targets.map((target) => (
          <div key={target.id} className={activeId === target.id ? 'ring-4 ring-indigo-500 rounded-2xl scale-105 transition-transform' : ''}>
            <PersonaCard target={target} onSelect={handleSelect} />
          </div>
        ))}
      </div>
    </div>
  );
}
