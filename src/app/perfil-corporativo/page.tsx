import { Code, Terminal, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CorporateProfilePage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="text-xs font-mono text-white tracking-widest uppercase">GROWTH ENGINEERING PROFILE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            NO SOMOS <span className="text-white/40 line-through decoration-neonBlue decoration-2">MARKETEROS</span>. <br />
            SOMOS <span className="text-neonBlue">INGENIEROS</span>.
          </h1>
          <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed">
            &quot;El marketing digital tradicional está roto. Se basa en la intuición y la &apos;creatividad&apos;. 
            Nosotros lo tratamos como un problema de ingeniería: medible, predecible y escalable.&quot;
          </p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-carbon border border-white/10 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Terminal size={120} />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-sm shrink-0 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder for Profile Image - Using a div for now */}
              <div className="w-full h-full flex items-center justify-center bg-white/5">
                <span className="font-mono text-xs text-white/30">[ IMG: J.L.G.O ]</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white">José Luis García Orobio</h2>
                <p className="text-neonBlue font-mono text-sm tracking-widest uppercase">Principal Growth Architect</p>
              </div>
              
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Con experiencia en desarrollo de software y sistemas complejos, José Luis fundó XPERTASOCIAL para cerrar la brecha entre la ingeniería de datos y el marketing comercial.
                </p>
                <p>
                  Su enfoque rechaza las &quot;métricas de vanidad&quot; (likes, seguidores) y se centra exclusivamente en la arquitectura de ingresos y la eficiencia algorítmica.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                  <Code size={14} /> <span>FULL STACK DEV</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                  <Globe size={14} /> <span>SYSTEMS ARCHITECT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Methodologies */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4">METODOLOGÍAS PROPIETARIAS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-neonBlue font-mono">01. EF-ÉLITE FRAMEWORK</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Marco de trabajo enfocado en la eficiencia financiera. Utilizamos scripts de Python para &quot;Deep Recon&quot; de la competencia y análisis de vulnerabilidades en el mercado antes de gastar un solo centavo en publicidad.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-neonBlue font-mono">02. ANDROMEDA ALGORITHM</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Sistema algorítmico de escalado para Meta Ads. Automatiza la toma de decisiones de presupuesto basándose en ROAS (Retorno de Inversión) en tiempo real, eliminando el error humano.
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white/5 border border-white/10 p-8 text-center space-y-6">
          <h3 className="text-2xl font-bold text-white">Social-tech funded by growth</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            Nuestra misión final no es solo el lucro. Utilizamos el éxito comercial de nuestros clientes para financiar programas de enseñanza de ciencia, ingeniería y matemáticas en comunidades vulnerables.
          </p>
          <div className="pt-4">
            <Link
              href="/diagnostico"
              className="inline-flex items-center gap-2 text-sm font-bold text-black bg-white px-6 py-3 rounded-sm hover:bg-neonBlue transition-colors"
            >
              TRABAJAR CON NOSOTROS <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
