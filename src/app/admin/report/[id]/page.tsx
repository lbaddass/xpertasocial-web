import { getReport } from "@/lib/r2";
import ReportVisualizer from "@/components/dashboard/ReportVisualizer";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { AgentReport } from "@/types/report"; // Asegúrate que la interfaz coincida

// Forzamos renderizado dinámico porque el reporte cambia
export const dynamic = 'force-dynamic';

interface PageProps {
  params: { id: string };
}

export default async function ReportPage({ params }: PageProps) {
  const { id } = params;
  
  // Intentar obtener el reporte de R2
  const reportData = await getReport(id) as AgentReport | null;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Navegación */}
        <div className="mb-8">
          <Link href="/admin" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Dashboard
          </Link>
        </div>

        {/* Lógica de carga / error */}
        {!reportData ? (
          <div className="flex flex-col items-center justify-center h-96 text-center">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 max-w-md">
                <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mx-auto mb-4" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Procesando Inteligencia...</h2>
                <p className="text-slate-500 mb-6">
                  El reporte <strong>{id}</strong> aún no está disponible en R2. El agente podría estar ejecutando tareas complejas.
                </p>
                <button className="text-indigo-600 font-medium hover:underline" onClick={() => {/* En Server Component esto sería un refresh manual */}}>
                   Recarga la página en unos segundos
                </button>
            </div>
          </div>
        ) : (
          <ReportVisualizer report={reportData} />
        )}
        
      </div>
    </main>
  );
}
