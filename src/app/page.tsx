import {
  ArrowRight,
  BarChart3,
  Globe,
  Layers,
  Search,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import PageNav from "@/components/layout/PageNav";
import MockDashboard from "@/components/ui/MockDashboard";

const catalogLevels = [
  {
    title: "Nivel 1",
    subtitle: "Micro-servicios de entrada",
    description: "Venta impulsiva con entregables rápidos y claros.",
  },
  {
    title: "Nivel 2",
    subtitle: "Servicios funcionales",
    description: "Resultados tangibles para justificar inversión.",
  },
  {
    title: "Nivel 3",
    subtitle: "Automatización invisible",
    description: "Orden y margen con procesos que escalan solos.",
  },
  {
    title: "Nivel 4",
    subtitle: "Desarrollos personalizados",
    description: "Tickets altos cuando ya hay confianza.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden isolate">
      <PageNav />
      {/* Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-neonBlue/10 blur-[120px] rounded-full pointer-events-none animate-float-slow" aria-hidden="true" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-neonPink/10 blur-[120px] rounded-full pointer-events-none animate-glow-pulse" aria-hidden="true" />

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-10 sm:pt-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-10 z-10">
          <div className="space-y-2 animate-rise">
            <div className="font-mono text-neonBlue text-xs tracking-[0.3em] uppercase">
              &gt; SYSTEM STATUS: ONLINE 🟢
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white tracking-tight">
              EL MKT NO ES MAGIA. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-black dark:to-white">
                ES ARQUITECTURA.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-black/80 dark:text-white/80 font-light mt-4">
              Deje de construir rascacielos sin cimientos.
            </p>
          </div>

          <div className="text-lg text-black/60 dark:text-white/60 max-w-3xl font-light leading-relaxed space-y-6 text-left md:text-center animate-fade-in">
            <p>
              Muchos negocios fracasan no por su producto, sino por intentar
              vender sin <strong>infraestructura</strong>.
            </p>
            <ul className="list-disc list-inside text-black/50 dark:text-white/50 space-y-2 md:inline-block text-left mx-auto">
              <li>Ads sin landing pages optimizadas.</li>
              <li>Ventas sin sistemas de pago.</li>
              <li>Tráfico sin retención.</li>
            </ul>
            <p>
              En <span className="text-black dark:text-white font-bold">XPERTASOCIAL</span> no
              somos una agencia. Somos un Hub de{" "}
              <span className="text-neonBlue font-mono">
                Ingeniería de Crecimiento
              </span>
              . Diseñamos la arquitectura digital para que cada clic se
              convierta en dinero.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center pt-4 animate-rise">
            <TrackedLink
              href="/diagnostico"
              event={{ action: 'click', category: 'Hero CTA', label: 'Diseñar Estrategia' }}
              className="inline-flex items-center justify-center gap-3 bg-neonBlue text-black px-8 py-4 font-bold rounded-sm hover:shadow-[0_0_24px_-6px_rgba(0,229,255,0.5)] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue/70"
            >
              DISEÑAR ESTRATEGIA <ArrowRight size={18} />
            </TrackedLink>
            <TrackedLink
              href="/diagnostico#audit"
              event={{ action: 'click', category: 'Hero CTA', label: 'Auditoría Online Gratis' }}
              className="inline-flex items-center justify-center gap-3 border border-black/20 dark:border-white/20 text-black dark:text-white px-8 py-4 font-mono text-sm rounded-sm hover:border-neonPink hover:text-neonPink transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonPink/70"
            >
              AUDITORÍA ONLINE GRATIS
            </TrackedLink>
          </div>
        </div>
      </div>

      {/* The Three Floors Methodology */}
      <div className="py-20 bg-gray-50 dark:bg-carbon/50 border-y border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-rise">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
              Los 3 Pisos de la Arquitectura Digital
            </h2>
            <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto">
              Para que su negocio venda solo, construimos tres niveles
              secuenciales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Floor 1 */}
            <TrackedLink
              href="/piso-1-infraestructura"
              event={{ action: 'click', category: 'Methodology', label: 'Piso 1' }}
              className="group p-8 border border-black/10 dark:border-white/10 bg-white dark:bg-carbon hover:border-neonBlue/50 transition-all flex flex-col rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-neonBlue/10">
                <Layers className="text-neonBlue" size={24} />
              </div>
              <div className="text-xs font-mono text-neonBlue mb-2">
                PISO 1: INFRAESTRUCTURA (CIMIENTOS)
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <h4 className="text-black dark:text-white font-bold text-sm mb-1">
                    El Problema:
                  </h4>
                  <p className="text-black/60 dark:text-white/60 text-xs">
                    El tráfico de anuncios llega a un &quot;callejón sin
                    salida&quot; (Instagram/WhatsApp).
                  </p>
                </div>
                <div>
                  <h4 className="text-black dark:text-white font-bold text-sm mb-1">
                    La Solución:
                  </h4>
                  <p className="text-black/60 dark:text-white/60 text-xs">
                    Construimos{" "}
                    <strong>
                      &quot;La máquina que convierte clics en dinero&quot;
                    </strong>
                    . Ya sea una Landing Express para validar ideas en 48h o un
                    E-commerce completo, creamos activos propios donde usted
                    tiene el control total.
                  </p>
                </div>
              </div>
            </TrackedLink>

            {/* Floor 2 */}
            <TrackedLink
              href="/piso-2-contenido-ia"
              event={{ action: 'click', category: 'Methodology', label: 'Piso 2' }}
              className="group p-8 border border-black/10 dark:border-white/10 bg-white dark:bg-carbon hover:border-neonPink/50 transition-all flex flex-col rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-neonPink/10">
                <Zap className="text-neonPink" size={24} />
              </div>
              <div className="text-xs font-mono text-neonPink mb-2">
                PISO 2: CONTENIDO IA (COMBUSTIBLE)
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <h4 className="text-black dark:text-white font-bold text-sm mb-1">
                    El Problema:
                  </h4>
                  <p className="text-black/60 dark:text-white/60 text-xs">
                    La &quot;Fatiga Creativa&quot;. Los algoritmos castigan los
                    anuncios repetitivos.
                  </p>
                </div>
                <div>
                  <h4 className="text-black dark:text-white font-bold text-sm mb-1">
                    La Solución:
                  </h4>
                  <p className="text-black/60 dark:text-white/60 text-xs">
                    Usamos <strong>Algorítmica Creativa</strong>. Generamos 50
                    variaciones visuales con IA (Viral Testing) para probar en 2
                    días lo que a su competencia le toma 3 meses.
                  </p>
                </div>
              </div>
            </TrackedLink>

            {/* Floor 3 */}
            <TrackedLink
              href="/piso-3-sistemas"
              event={{ action: 'click', category: 'Methodology', label: 'Piso 3' }}
              className="group p-8 border border-black/10 dark:border-white/10 bg-white dark:bg-carbon hover:border-neonLime/50 transition-all flex flex-col rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-neonLime/10">
                <TrendingUp className="text-neonLime" size={24} />
              </div>
              <div className="text-xs font-mono text-neonLime mb-2">
                PISO 3: SISTEMAS DE CRECIMIENTO (CONSISTENCIA)
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <h4 className="text-black dark:text-white font-bold text-sm mb-1">
                    El Problema:
                  </h4>
                  <p className="text-black/60 dark:text-white/60 text-xs">
                    La inconsistencia hace que su marca parezca
                    &quot;abandonada&quot;.
                  </p>
                </div>
                <div>
                  <h4 className="text-black dark:text-white font-bold text-sm mb-1">
                    La Solución:
                  </h4>
                  <p className="text-black/60 dark:text-white/60 text-xs">
                    Su equipo de marketing externo 24/7. Desde Branding hasta
                    sistemas de Ventas/Leads, automatizamos su presencia para
                    generar confianza y ROI constante.
                  </p>
                </div>
              </div>
            </TrackedLink>
          </div>
        </div>
      </div>

      {/* Ads & Platforms Section */}
      <div className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-rise">
            <div className="inline-block px-3 py-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full">
              <span className="text-xs font-mono text-black dark:text-white tracking-widest uppercase">
                INGENIERÍA DE TRÁFICO & PLATAFORMAS
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
              Deje de quemar presupuesto. <br />
              <span className="text-neonBlue">Empiece a comprar datos.</span>
            </h2>
            <p className="text-black/60 dark:text-white/60 max-w-3xl mx-auto text-lg">
              La mayoría de las agencias &quot;corren anuncios&quot;. Nosotros
              desplegamos <strong>Arquitectura de Adquisición</strong>. No
              dependemos de la &quot;suerte&quot;. Utilizamos el sistema
              algorítmico propietario <strong>Andromeda</strong> para orquestar
              campañas, asegurando que cada peso invertido genere datos
              medibles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Google Ads */}
            <div className="bg-gray-100 dark:bg-carbon border border-black/10 dark:border-white/10 p-6 rounded-2xl hover:border-black/30 dark:hover:border-white/30 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4 text-black dark:text-white">
                <Search size={24} />
                <h4 className="font-bold">Captura de Intención</h4>
              </div>
              <p className="text-sm font-bold text-black dark:text-white mb-2">
                El Cliente te busca a ti.
              </p>
              <p className="text-xs text-black/60 dark:text-white/60 leading-relaxed">
                Capturamos la demanda existente. Cuando alguien busca su
                servicio exacto, su infraestructura debe aparecer primero.
                Integramos <strong>Google Ads</strong> con análisis de logs y
                Technical SEO.
              </p>
            </div>

            {/* Meta */}
            <div className="bg-gray-100 dark:bg-carbon border border-black/10 dark:border-white/10 p-6 rounded-2xl hover:border-black/30 dark:hover:border-white/30 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4 text-black dark:text-white">
                <Globe size={24} />
                <h4 className="font-bold">Descubrimiento Algorítmico</h4>
              </div>
              <p className="text-sm font-bold text-black dark:text-white mb-2">
                Tú encuentras al Cliente.
              </p>
              <p className="text-xs text-black/60 dark:text-white/60 leading-relaxed">
                Combatimos la &quot;Fatiga Creativa&quot;. Mientras su
                competencia usa 1 foto, nuestro sistema{" "}
                <strong>Andromeda</strong> prueba 50 variaciones visuales para
                encontrar la creatividad que vende 10x más.
              </p>
            </div>

            {/* TikTok */}
            <div className="bg-gray-100 dark:bg-carbon border border-black/10 dark:border-white/10 p-6 rounded-2xl hover:border-black/30 dark:hover:border-white/30 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4 text-black dark:text-white">
                <Smartphone size={24} />
                <h4 className="font-bold">Alcance Masivo</h4>
              </div>
              <p className="text-sm font-bold text-black dark:text-white mb-2">
                Visibilidad Explosiva.
              </p>
              <p className="text-xs text-black/60 dark:text-white/60 leading-relaxed">
                Con un alcance de video del <strong>15.4%</strong>, TikTok es el
                motor de viralidad actual. Diseñamos estructuras de video
                vertical nativo que no parecen anuncios, sino contenido
                orgánico.
              </p>
            </div>

            {/* Analytics */}
            <div className="bg-gray-100 dark:bg-carbon border border-black/10 dark:border-white/10 p-6 rounded-2xl hover:border-black/30 dark:hover:border-white/30 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4 text-black dark:text-white">
                <BarChart3 size={24} />
                <h4 className="font-bold">Auditoría de Datos</h4>
              </div>
              <p className="text-sm font-bold text-black dark:text-white mb-2">
                La Verdad Financiera.
              </p>
              <p className="text-xs text-black/60 dark:text-white/60 leading-relaxed">
                Sin métricas de vanidad. Usamos{" "}
                <strong>GA4, Google Tag Manager y Looker Studio</strong> para
                rastrear el viaje completo: desde el clic hasta el dinero en el
                banco.
              </p>
            </div>
          </div>

          <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-8 rounded-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="space-y-6 flex-1">
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  ¿Cómo lo hacemos diferente? El Sistema Andromeda
                </h3>
                <p className="text-black/60 dark:text-white/60">
                  Nuestro algoritmo propietario de pruebas masivas.
                </p>
                <ol className="space-y-4 text-sm text-black/70 dark:text-white/70 list-decimal list-inside font-mono">
                  <li>
                    <strong>Validación (Viral Testing):</strong> Lanzamos
                    paquetes de 50 variaciones creativas.
                  </li>
                  <li>
                    <strong>Selección Natural:</strong> Dejamos que los datos
                    eliminen el 90% de los anuncios débiles.
                  </li>
                  <li>
                    <strong>Escalamiento:</strong> Inyectamos presupuesto solo
                    en el 10% de los ganadores.
                  </li>
                </ol>
                <div className="pt-4">
                  <p className="text-neonBlue font-bold text-sm mb-4">
                    RESULTADO: ROI Promedio estimado de 3.8x a 12.5x
                  </p>
                  <TrackedLink
                    href="/diagnostico"
                    event={{ action: 'click', category: 'Andromeda CTA', label: 'Simular Campaña' }}
                    className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 font-bold rounded-sm hover:bg-neonBlue transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue/70"
                  >
                    SIMULAR CAMPAÑA <ArrowRight size={18} />
                  </TrackedLink>
                </div>
              </div>

              {/* Visual Dashboard */}
              <div className="flex-1 w-full animate-fade-in">
                <MockDashboard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Catalog Section */}
      <div className="py-20 px-6 bg-gray-50 dark:bg-carbon/60 border-y border-black/5 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-1 text-xs font-mono uppercase tracking-[0.3em] text-neonBlue">
                Catálogo escalonado
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
                Microservicios IA + Automatización
              </h2>
              <p className="text-black/60 dark:text-white/60 max-w-2xl">
                Un modelo Lego: se vende barato, se amplía caro. Ordenamos la
                oferta por tickets de entrada accesibles, upsells naturales y
                entregables concretos.
              </p>
            </div>
            <div className="shrink-0">
              <TrackedLink
                href="/catalogo-ia"
                event={{ action: 'click', category: 'Catalog CTA', label: 'Ver Catálogo Completo' }}
                className="inline-flex items-center gap-3 bg-neonBlue text-black px-6 py-3 font-bold rounded-sm hover:bg-white transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue/70"
              >
                VER CATÁLOGO COMPLETO <ArrowRight size={18} />
              </TrackedLink>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalogLevels.map((level) => (
              <div
                key={level.title}
                className="border border-black/10 dark:border-white/10 bg-white dark:bg-carbon p-6 rounded-2xl hover:border-neonBlue/60 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-xs font-mono text-neonBlue uppercase tracking-[0.3em]">
                  {level.title}
                </div>
                <h3 className="mt-3 text-lg font-bold text-black dark:text-white">
                  {level.subtitle}
                </h3>
                <p className="mt-2 text-sm text-black/60 dark:text-white/60">
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Stage Selector */}
      <div className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            ¿En qué escalón estás tú?
          </h2>

          <div className="space-y-4">
            <TrackedLink
              href="/piso-1-infraestructura#landing"
              event={{ action: 'click', category: 'Client Stage', label: 'Apenas empiezas' }}
              className="block p-6 border border-black/10 dark:border-white/10 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-between group hover:-translate-y-0.5"
            >
              <div>
                <h4 className="text-lg font-bold text-black dark:text-white mb-1">
                  ¿Apenas empiezas?
                </h4>
                <p className="text-black/60 dark:text-white/60 text-sm">Validar idea rápido.</p>
              </div>
              <div className="text-right flex items-center gap-4">
                <span className="text-neonBlue font-mono text-sm hidden md:block">
                  SOLUCIÓN: LANDING EXPRESS
                </span>
                <ArrowRight className="text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </div>
            </TrackedLink>

            <TrackedLink
              href="/piso-2-contenido-ia#viral"
              event={{ action: 'click', category: 'Client Stage', label: 'Ya tienes tracción' }}
              className="block p-6 border border-black/10 dark:border-white/10 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-between group hover:-translate-y-0.5"
            >
              <div>
                <h4 className="text-lg font-bold text-black dark:text-white mb-1">
                  ¿Ya tienes tracción?
                </h4>
                <p className="text-black/60 dark:text-white/60 text-sm">Meter ads en serio.</p>
              </div>
              <div className="text-right flex items-center gap-4">
                <span className="text-neonPink font-mono text-sm hidden md:block">
                  SOLUCIÓN: EMBUDO + VIRAL TESTING
                </span>
                <ArrowRight className="text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </div>
            </TrackedLink>

            <TrackedLink
              href="/piso-3-sistemas#ventas"
              event={{ action: 'click', category: 'Client Stage', label: 'Buscas Automatización' }}
              className="block p-6 border border-black/10 dark:border-white/10 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-between group hover:-translate-y-0.5"
            >
              <div>
                <h4 className="text-lg font-bold text-black dark:text-white mb-1">
                  ¿Buscas Automatización?
                </h4>
                <p className="text-black/60 dark:text-white/60 text-sm">
                  Que el negocio venda solo.
                </p>
              </div>
              <div className="text-right flex items-center gap-4">
                <span className="text-neonLime font-mono text-sm hidden md:block">
                  SOLUCIÓN: SISTEMA VENTAS/LEADS
                </span>
                <ArrowRight className="text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </div>
            </TrackedLink>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-12 border-t border-black/5 dark:border-white/5">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 text-center">
          <div>
            <div className="text-3xl font-bold text-black dark:text-white mb-1">
              3.8x - 12.5x
            </div>
            <div className="text-xs font-mono text-black/40 dark:text-white/40 uppercase tracking-widest">
              ROI Promedio Estimado
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black dark:text-white mb-1">40%</div>
            <div className="text-xs font-mono text-black/40 dark:text-white/40 uppercase tracking-widest">
              Ahorro vs Mercado Tradicional
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-black dark:text-white mb-1">Riesgo Cero</div>
            <div className="text-xs text-black/40 dark:text-white/40 max-w-[200px]">
              Si no mejoramos resultados en el 1er mes, tu factura inicial es
              gratis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
