import { Activity } from "lucide-react";

const SystemBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 border border-signalRed/40 bg-signalRed/10 rounded-full animate-pulse">
      <Activity size={16} className="text-signalRed" aria-label="Estado del sistema activo" />
      <span className="font-mono text-xs tracking-wider text-moneyGreen font-bold">
        SISTEMA ACTIVO · GENERANDO INGRESOS 24/7
      </span>
    </div>
  );
};

export default SystemBadge;
