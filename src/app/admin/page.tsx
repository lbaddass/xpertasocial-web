import { getManifest } from "@/lib/manifest-parser";
import DashboardClient from "@/components/dashboard/DashboardClient";
import { ShieldCheck } from "lucide-react";

export default function AdminDashboard() {
  const manifest = getManifest();

  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          {/* The ShieldCheck icon is already handled in the new SideNav, but we can keep a title here */}
          <h1 className="text-3xl font-bold text-white">
            Agentes de IA Desplegables
          </h1>
        </div>
        <p className="text-white/60 max-w-2xl">
          Torre de Control de Inteligencia. Selecciona un agente para iniciar el despliegue en Cloud Run.
        </p>
      </header>

      {/* Cliente Interactivo */}
      <DashboardClient targets={manifest.targets} />

      {/* Footer Info */}
      <div className="mt-16 text-xs text-white/40 font-mono">
        System v{manifest.version} • Active Targets: {manifest.targets.length}
      </div>
    </div>
  );
}
