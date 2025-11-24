import { Box, GitPullRequest, Zap } from "lucide-react";

const FrameworkCards = () => {
  return (
    <section className="py-24 bg-grafitoMedium/80 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-bold mb-12 flex items-center gap-2">
          <Box size={20} className="text-techCyan" />
          PROPRIETARY IP FRAMEWORKS
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-white/10 bg-black/60 backdrop-blur-md rounded-2xl p-6 hover:border-techCyan/50 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <Zap className="text-signalRed" size={24} />
              <span className="font-mono text-[10px] border border-techCyan/40 text-techCyan px-2 py-0.5 rounded-full">AI CORE</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Andromeda™</h3>
            <p className="font-mono text-xs text-white/50">
              Motor de generación creativa que detecta patrones virales y replica estructuras ganadoras para el sector salud y seguridad.
            </p>
          </div>

          <div className="border border-white/10 bg-black/60 backdrop-blur-md rounded-2xl p-6 hover:border-techCyan/50 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <GitPullRequest className="text-signalRed" size={24} />
              <span className="font-mono text-[10px] border border-techCyan/40 text-techCyan px-2 py-0.5 rounded-full">METRICS</span>
            </div>
            <h3 className="text-lg font-bold mb-2">EF-Élite Protocol</h3>
            <p className="font-mono text-xs text-white/50">
              Sistema de medición de eficiencia financiera. Rastrea el viaje del dólar desde el clic hasta la cuenta bancaria.
            </p>
          </div>

          <div className="border border-white/10 bg-black/60 backdrop-blur-md rounded-2xl p-6 hover:border-techCyan/50 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <Box className="text-signalRed" size={24} />
              <span className="font-mono text-[10px] border border-techCyan/40 text-techCyan px-2 py-0.5 rounded-full">AUTO</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Pipelines AI</h3>
            <p className="font-mono text-xs text-white/50">
              Infraestructura de automatización (n8n) para calificación de leads y seguimiento omnicanal sin intervención humana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkCards;
