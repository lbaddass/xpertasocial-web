import Link from "next/link";
import { ArrowRight, Layers, Zap, TrendingUp } from "lucide-react";



export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-neonBlue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-neonPink/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-10 z-10">
          <div className="space-y-2">
            <div className="font-mono text-neonBlue text-xs tracking-[0.3em] uppercase">
              &gt; SYSTEM STATUS: ONLINE 🟢
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              ¡DEJE DE PERDER DINERO EN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-white">MARKETING DIGITAL!</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed">
            No construya un rascacielos sin cimientos. <br />
            <span className="text-white">Usamos IA y automatización para diseñar la infraestructura que su negocio necesita para escalar.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center pt-4">
            <Link
              href="/diagnostico"
              className="inline-flex items-center justify-center gap-3 bg-neonBlue text-black px-8 py-4 font-bold rounded-sm hover:shadow-[0_0_20px_-5px_rgba(0,229,255,0.4)] transition-all"
            >
              DISEÑAR ESTRATEGIA <ArrowRight size={18} />
            </Link>
            <Link
              href="/diagnostico#audit"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 font-mono text-sm rounded-sm hover:border-neonPink hover:text-neonPink transition-all"
            >
              AUDITORÍA GRATIS
            </Link>
          </div>
        </div>
      </div>

      {/* The Three Floors Methodology */}
      <div className="py-20 bg-carbon/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Los 3 Pisos de la Arquitectura Digital</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Para que su negocio venda solo, necesita tres niveles bien construidos. Empezamos desde los cimientos y subimos escalón por escalón.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Floor 1 */}
            <Link href="/piso-1-infraestructura" className="group p-8 border border-white/10 bg-carbon hover:border-neonBlue/50 transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-neonBlue/10">
                <Layers className="text-neonBlue" size={24} />
              </div>
              <div className="text-xs font-mono text-neonBlue mb-2">PISO 1</div>
              <h3 className="text-xl font-bold text-white mb-3">Infraestructura</h3>
              <p className="text-white/60 text-sm mb-4">Dónde aterrizan tus clientes (Web/Funnel).</p>
              <div className="text-white/40 text-xs border-t border-white/5 pt-4">
                La máquina que convierte clics en dinero mientras duermes.
              </div>
            </Link>

            {/* Floor 2 */}
            <Link href="/piso-2-contenido-ia" className="group p-8 border border-white/10 bg-carbon hover:border-neonPink/50 transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-neonPink/10">
                <Zap className="text-neonPink" size={24} />
              </div>
              <div className="text-xs font-mono text-neonPink mb-2">PISO 2</div>
              <h3 className="text-xl font-bold text-white mb-3">Contenido IA</h3>
              <p className="text-white/60 text-sm mb-4">Qué ven antes de comprarte (Visual/Ads).</p>
              <div className="text-white/40 text-xs border-t border-white/5 pt-4">
                El atajo para verse como marca millonaria y evitar la fatiga creativa.
              </div>
            </Link>

            {/* Floor 3 */}
            <Link href="/piso-3-sistemas" className="group p-8 border border-white/10 bg-carbon hover:border-neonLime/50 transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-neonLime/10">
                <TrendingUp className="text-neonLime" size={24} />
              </div>
              <div className="text-xs font-mono text-neonLime mb-2">PISO 3</div>
              <h3 className="text-xl font-bold text-white mb-3">Sistemas de Crecimiento</h3>
              <p className="text-white/60 text-sm mb-4">Cómo te mantienes visible (Ads/Management).</p>
              <div className="text-white/40 text-xs border-t border-white/5 pt-4">
                El equipo de marketing que trabaja por ti 24/7.
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Client Stage Selector */}
      <div className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">¿En qué escalón estás tú?</h2>
          
          <div className="space-y-4">
            <Link href="/piso-1-infraestructura#landing" className="block p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-all flex items-center justify-between group">
              <div>
                <h4 className="text-lg font-bold text-white mb-1">¿Apenas empiezas?</h4>
                <p className="text-white/60 text-sm">Validar idea rápido.</p>
              </div>
              <div className="text-right flex items-center gap-4">
                <span className="text-neonBlue font-mono text-sm hidden md:block">SOLUCIÓN: LANDING EXPRESS</span>
                <ArrowRight className="text-white/30 group-hover:text-white transition-colors" />
              </div>
            </Link>

            <Link href="/piso-2-contenido-ia#viral" className="block p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-all flex items-center justify-between group">
              <div>
                <h4 className="text-lg font-bold text-white mb-1">¿Ya tienes tracción?</h4>
                <p className="text-white/60 text-sm">Meter ads en serio.</p>
              </div>
              <div className="text-right flex items-center gap-4">
                <span className="text-neonPink font-mono text-sm hidden md:block">SOLUCIÓN: EMBUDO + VIRAL TESTING</span>
                <ArrowRight className="text-white/30 group-hover:text-white transition-colors" />
              </div>
            </Link>

            <Link href="/piso-3-sistemas#ventas" className="block p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-all flex items-center justify-between group">
              <div>
                <h4 className="text-lg font-bold text-white mb-1">¿Buscas Automatización?</h4>
                <p className="text-white/60 text-sm">Que el negocio venda solo.</p>
              </div>
              <div className="text-right flex items-center gap-4">
                <span className="text-neonLime font-mono text-sm hidden md:block">SOLUCIÓN: SISTEMA VENTAS/LEADS</span>
                <ArrowRight className="text-white/30 group-hover:text-white transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-1">3.8x - 12.5x</div>
            <div className="text-xs font-mono text-white/40 uppercase tracking-widest">ROI Promedio Estimado</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">40%</div>
            <div className="text-xs font-mono text-white/40 uppercase tracking-widest">Ahorro vs Mercado Tradicional</div>
          </div>
        </div>
      </div>
    </div>
  );
}
