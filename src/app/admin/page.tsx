import { getManifest } from "@/lib/manifest-parser";
import DashboardClient from "@/components/dashboard/DashboardClient";
import { ShieldCheck } from "lucide-react";

export default function AdminDashboard() {
  const manifest = getManifest();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              {manifest.project}
            </h1>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
            Torre de Control de Inteligencia. Selecciona un agente para iniciar el despliegue en Cloud Run.
          </p>
        </header>

        {/* Cliente Interactivo */}
        <DashboardClient targets={manifest.targets} />

        {/* Footer Info */}
        <div className="mt-16 text-xs text-slate-400 font-mono">
          System v{manifest.version} • Active Targets: {manifest.targets.length}
        </div>
      </div>
    </main>
  );
}
