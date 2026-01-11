import { ArrowRight, CheckCircle2, Zap, TrendingUp, Shield, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

const strategicKeys = [
  "La IA es tu motor, no tu pitch: No vendemos \"humo\", vendemos sistemas que funcionan 24/7.",
  "Capital Raise: Estos precios representan un 75% a 85% de descuento sobre la tarifa comercial. El objetivo es fondear el escalamiento de nuestros nodos MCP.",
  "Valor Exponencial: Usamos protocolos de contexto (MCP) y APIs de última generación para que tu negocio tenga memoria y criterio propio.",
];

const implementationLevels = [
  {
    title: "Nivel 1: Micro-servicios de Entrada",
    subtitle: "Impulso Rápido",
    description: "Venta impulsiva, bajo riesgo, alto impacto inmediato.",
    icon: "⚡",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/40",
    items: [
      {
        service: "Landing Express IA",
        value: "Diseño optimizado con A/B Testing predictivo vía GPT-4o Vision.",
        price: "$45",
        highlight: "ROI en 72hrs",
      },
      {
        service: "Respondedor de Reseñas / Comentarios",
        value: "Sentiment Analysis con n8n para filtrar crisis y agradecer ventas.",
        price: "$65",
        highlight: "Reputación 24/7",
      },
      {
        service: "Copy de Venta Infinito (1 pág)",
        value: "Redacción psicológica usando Modelos de Lenguaje entrenados en conversión.",
        price: "$55",
        highlight: "+40% conversión",
      },
      {
        service: "Perfilador de Leads [WhatsApp]",
        value: "Calificación básica mediante filtros de lenguaje natural.",
        price: "$85",
        highlight: "Ahorra 15hrs/sem",
      },
    ],
  },
  {
    title: "Nivel 2: Servicios Funcionales",
    subtitle: "Ahorro de Tiempo",
    description: "Aquí es donde el cliente empieza a recuperar sus horas de vida.",
    icon: "🎯",
    color: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/40",
    items: [
      {
        service: "Mini Web IA (3 secciones)",
        value: "Estructura SEO dinámica que se adapta según la búsqueda del usuario.",
        price: "$250",
        highlight: "Tráfico orgánico x3",
      },
      {
        service: "Clon de Voz para Recordatorios",
        value: "Confirmación de citas/pagos con tu propia voz (o profesional) vía ElevenLabs.",
        price: "$350",
        highlight: "-85% inasistencias",
      },
      {
        service: "Generador de Contenido Omnicanal",
        value: "De 1 idea a 10 formatos (Reels, LinkedIn, Blog) con Anthropic API.",
        price: "$290",
        highlight: "10x contenido, 1x tiempo",
      },
      {
        service: "Web Optimizada para Conversión",
        value: "Embudos que cambian el mensaje según el origen del tráfico.",
        price: "$450",
        highlight: "Personalización real-time",
      },
    ],
  },
  {
    title: "Nivel 3: Automatización Invisible",
    subtitle: "Margen y Orden",
    description: "La agencia vende orden, el cliente compra libertad.",
    icon: "🧠",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/40",
    items: [
      {
        service: "Cerebro de Datos MCP",
        value: "Conectamos tu Excel/SQL a un chat privado para preguntarle a tus datos.",
        price: "$750",
        highlight: "Decisiones en segundos",
      },
      {
        service: "Seguimiento Automático 365",
        value: "Secuencias de nutrición infinitas que aprenden del comportamiento del lead.",
        price: "$600",
        highlight: "Leads que nunca olvidas",
      },
      {
        service: "Asistente Interno [Wiki IA]",
        value: "Toda la normativa de tu empresa en un bot que responde dudas del equipo.",
        price: "$850",
        highlight: "Onboarding instantáneo",
      },
      {
        service: "Dashboard Predictivo de Resultados",
        value: "Visualización de KPIs que te dice cuánto vas a vender el próximo mes.",
        price: "$900",
        highlight: "Forecasting IA",
      },
    ],
  },
  {
    title: "Nivel 4: Desarrollos Personalizados",
    subtitle: "Infraestructura",
    description: "Ticket alto para clientes que buscan dominancia total.",
    icon: "🚀",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/40",
    items: [
      {
        service: "Bot IA de Ventas Avanzado",
        value: "Negocia, objeta y cierra ventas solo, integrado a tu CRM vía Python/Node.js.",
        price: "Desde $1,200",
        highlight: "Vendedor que nunca duerme",
      },
      {
        service: "Ecosistema White Label para Agencias",
        value: "Creamos tu propia suite de herramientas para que las revendas a tus clientes.",
        price: "Desde $2,500",
        highlight: "Tu propia IA as a Service",
      },
      {
        service: "Infraestructura IA Operativa",
        value: "Despliegue de servidores locales con MCP para privacidad total de datos.",
        price: "Desde $3,000",
        highlight: "Soberanía de datos 100%",
      },
    ],
  },
];

const launchPackages = [
  {
    name: "Pack Clínica Pro",
    icon: "🏥",
    description: "Agendador Express + Recordatorio de Voz + Triaje IA.",
    price: "$550 USD",
    realValue: "$1,800 USD",
    savings: "70% OFF",
    benefits: ["Reduce inasistencias 85%", "Triaje 24/7", "ROI en 30 días"],
  },
  {
    name: "Pack E-commerce Scaler",
    icon: "🛒",
    description: "Landing de Producto + Recuperador de Carritos + Vendedor 24/7.",
    price: "$850 USD",
    realValue: "$2,400 USD",
    savings: "65% OFF",
    benefits: ["Recupera 40% carritos", "Vende mientras duermes", "Escala sin contratar"],
  },
  {
    name: "Pack Inmobiliario High-Ticket",
    icon: "🏢",
    description: "Calificador de Leads + Dossier Automático + Agente Multilingüe.",
    price: "$950 USD",
    realValue: "$3,000 USD",
    savings: "68% OFF",
    benefits: ["Solo leads calificados", "Cierra en 3 idiomas", "Presentaciones auto-generadas"],
  },
];

const socialProof = [
  { metric: "5,000+", label: "Horas automatizadas" },
  { metric: "180%", label: "ROI promedio" },
  { metric: "24/7", label: "Operación continua" },
  { metric: "72hrs", label: "Deploy promedio" },
];

export default function CatalogoIaPage() {
  const [expandedLevel, setExpandedLevel] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10 animate-pulse" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-400 mb-6 backdrop-blur-sm">
            <Sparkles size={16} className="animate-pulse" />
            Capital Raise Edition
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              Infraestructura IA
            </span>
            <br />
            a precio de semilla
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl mb-8 leading-relaxed">
            Microservicios de nivel enterprise a <span className="text-cyan-400 font-bold">75-85% de descuento</span>.
            <br className="hidden sm:block" />
            Solo durante nuestra fase de levantamiento de capital.
          </p>

          {/* Social Proof Grid - Mobile First */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-3xl">
            {socialProof.map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">{item.metric}</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs - Stacked on Mobile */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-4 text-base sm:text-lg font-bold rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Agendar diagnóstico <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
            </button>
            
            <button className="border-2 border-white/20 text-white px-8 py-4 text-base sm:text-lg font-mono rounded-lg hover:border-pink-500 hover:text-pink-400 hover:bg-pink-500/10 transition-all">
              Auditoría gratis
            </button>
          </div>
        </div>
      </section>

      {/* Strategic Keys */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="text-cyan-400" size={32} />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Nuestra Clave Estratégica</h2>
          </div>
          
          <div className="grid gap-4">
            {strategicKeys.map((key, idx) => (
              <div key={idx} className="group bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-5 sm:p-6 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all">
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="text-cyan-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{key}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Levels - Accordion Mobile */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="text-pink-400" size={32} />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Niveles de Implementación</h2>
          </div>

          <div className="space-y-4">
            {implementationLevels.map((level, idx) => (
              <div key={idx} className={`bg-gradient-to-r ${level.color} border ${level.borderColor} rounded-xl overflow-hidden backdrop-blur-sm`}>
                {/* Level Header - Clickable on Mobile */}
                <button
                  onClick={() => setExpandedLevel(expandedLevel === idx ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl sm:text-4xl">{level.icon}</span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{level.title}</h3>
                        <p className="text-sm sm:text-base text-cyan-400 font-mono">{level.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 mt-2">{level.description}</p>
                  </div>
                  <ChevronDown 
                    className={`text-white ml-4 flex-shrink-0 transition-transform ${expandedLevel === idx ? 'rotate-180' : ''}`} 
                    size={24} 
                  />
                </button>

                {/* Services Grid - Expands on Mobile */}
                <div className={`transition-all duration-300 overflow-hidden ${expandedLevel === idx ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 sm:max-h-full sm:opacity-100'}`}>
                  <div className="p-5 sm:p-6 pt-0 space-y-4">
                    {level.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-4 sm:p-5 hover:border-white/30 hover:bg-white/5 transition-all group">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                          <div className="flex-1">
                            <h4 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                              {item.service}
                            </h4>
                            <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-mono">
                              <Zap size={12} />
                              {item.highlight}
                            </div>
                          </div>
                          <div className="text-right sm:text-left">
                            <div className="text-2xl sm:text-3xl font-bold text-cyan-400">{item.price}</div>
                            <div className="text-xs text-gray-500 font-mono">USD</div>
                          </div>
                        </div>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Packages - Cards */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Paquetes <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Lanzamiento Express</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">Combos listos para sectores específicos. Plug & Play.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {launchPackages.map((pack, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedPackage(selectedPackage === idx ? null : idx)}
                className={`relative group cursor-pointer bg-gradient-to-br from-black to-gray-900 border-2 rounded-2xl p-6 sm:p-8 transition-all hover:scale-105 hover:shadow-2xl ${
                  selectedPackage === idx 
                    ? 'border-pink-500 shadow-lg shadow-pink-500/50' 
                    : 'border-white/10 hover:border-pink-500/50'
                }`}
              >
                {/* Discount Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  {pack.savings}
                </div>

                <div className="text-5xl sm:text-6xl mb-4">{pack.icon}</div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{pack.name}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">{pack.description}</p>

                {/* Benefits */}
                <div className="space-y-2 mb-6">
                  {pack.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-pink-400 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-xs text-gray-500 line-through mb-1">{pack.realValue}</div>
                      <div className="text-3xl sm:text-4xl font-black text-pink-400">{pack.price}</div>
                    </div>
                    <button className="bg-pink-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-pink-400 transition-colors flex items-center gap-2">
                      Contratar <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Warning Banner */}
          <div className="mt-10 bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-pink-500/40 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <Clock className="text-pink-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">⚠️ DISPONIBILIDAD LIMITADA</h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Esta oferta de "Levantamiento de Capital" es limitada a los <span className="text-pink-400 font-bold">primeros 5 contratos por sector</span>. 
                  Una vez alcanzado el hito de liquidez, los precios volverán a su tarifa estándar de mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-pink-500/10 border border-white/20 rounded-2xl p-8 sm:p-12 text-center backdrop-blur-sm">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Infraestructura lista para <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">escalar</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Elige tu nivel y asegura precio preferencial antes del cierre de capital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-4 text-lg font-bold rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 transition-all">
              <span className="flex items-center justify-center gap-2">
                Diseñar estrategia <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 text-lg font-mono rounded-lg hover:border-pink-500 hover:text-pink-400 hover:bg-pink-500/10 transition-all">
              Volver al home
            </button>
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-gradient-to-t from-black via-black/95 to-transparent p-4 backdrop-blur-lg border-t border-white/10 z-50">
        <button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-black py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform">
          Asegurar mi precio <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
