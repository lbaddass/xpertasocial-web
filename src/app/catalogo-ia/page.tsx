"use client";

import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Shield,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const strategicKeys = [
  'La IA es tu motor, no tu pitch: No vendemos "humo", vendemos sistemas que funcionan 24/7.',
  "Capital Raise: Estos precios representan un 75% a 85% de descuento sobre la tarifa comercial. El objetivo es fondear el escalamiento de nuestros nodos MCP.",
  "Valor Exponencial: Usamos protocolos de contexto (MCP) y APIs de última generación para que tu negocio tenga memoria y criterio propio.",
];

const implementationLevels = [
  {
    title: "Nivel 1: Micro-servicios de Entrada",
    subtitle: "Impulso Rápido",
    description: "Venta impulsiva, bajo riesgo, alto impacto inmediato.",
    ascii: `
┌─────────────────┐
│  >_ IMPULSO     │
│  ⚡ RÁPIDO      │
└─────────────────┘`,
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/40",
    items: [
      {
        service: "Landing Express IA",
        value:
          "Diseño optimizado con A/B Testing predictivo vía GPT-4o Vision.",
        price: "$45",
        highlight: "ROI en 72hrs",
      },
      {
        service: "Respondedor de Reseñas / Comentarios",
        value:
          "Sentiment Analysis con n8n para filtrar crisis y agradecer ventas.",
        price: "$65",
        highlight: "Reputación 24/7",
      },
      {
        service: "Copy de Venta Infinito (1 pág)",
        value:
          "Redacción psicológica usando Modelos de Lenguaje entrenados en conversión.",
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
    description:
      "Aquí es donde el cliente empieza a recuperar sus horas de vida.",
    ascii: `
┌─────────────────┐
│  🎯 TIEMPO      │
│  >> LIBERTAD    │
└─────────────────┘`,
    color: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/40",
    items: [
      {
        service: "Mini Web IA (3 secciones)",
        value:
          "Estructura SEO dinámica que se adapta según la búsqueda del usuario.",
        price: "$250",
        highlight: "Tráfico orgánico x3",
      },
      {
        service: "Clon de Voz para Recordatorios",
        value:
          "Confirmación de citas/pagos con tu propia voz (o profesional) vía ElevenLabs.",
        price: "$350",
        highlight: "-85% inasistencias",
      },
      {
        service: "Generador de Contenido Omnicanal",
        value:
          "De 1 idea a 10 formatos (Reels, LinkedIn, Blog) con Anthropic API.",
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
    ascii: `
┌─────────────────┐
│  🧠 CEREBRO     │
│  :: INVISIBLE   │
└─────────────────┘`,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/40",
    items: [
      {
        service: "Cerebro de Datos MCP",
        value:
          "Conectamos tu Excel/SQL a un chat privado para preguntarle a tus datos.",
        price: "$750",
        highlight: "Decisiones en segundos",
      },
      {
        service: "Seguimiento Automático 365",
        value:
          "Secuencias de nutrición infinitas que aprenden del comportamiento del lead.",
        price: "$600",
        highlight: "Leads que nunca olvidas",
      },
      {
        service: "Asistente Interno [Wiki IA]",
        value:
          "Toda la normativa de tu empresa en un bot que responde dudas del equipo.",
        price: "$850",
        highlight: "Onboarding instantáneo",
      },
      {
        service: "Dashboard Predictivo de Resultados",
        value:
          "Visualización de KPIs que te dice cuánto vas a vender el próximo mes.",
        price: "$900",
        highlight: "Forecasting IA",
      },
    ],
  },
  {
    title: "Nivel 4: Desarrollos Personalizados",
    subtitle: "Infraestructura",
    description: "Ticket alto para clientes que buscan dominancia total.",
    ascii: `
┌─────────────────┐
│  🚀 DOMINANCIA  │
│  // TOTAL       │
└─────────────────┘`,
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/40",
    items: [
      {
        service: "Bot IA de Ventas Avanzado",
        value:
          "Negocia, objeta y cierra ventas solo, integrado a tu CRM vía Python/Node.js.",
        price: "Desde $1,200",
        highlight: "Vendedor que nunca duerme",
      },
      {
        service: "Ecosistema White Label para Agencias",
        value:
          "Creamos tu propia suite de herramientas para que las revendas a tus clientes.",
        price: "Desde $2,500",
        highlight: "Tu propia IA as a Service",
      },
      {
        service: "Infraestructura IA Operativa",
        value:
          "Despliegue de servidores locales con MCP para privacidad total de datos.",
        price: "Desde $3,000",
        highlight: "Soberanía de datos 100%",
      },
    ],
  },
];

const launchPackages = [
  {
    name: "Pack Clínica Pro",
    ascii: `
╔══════════════╗
║   🏥 SALUD   ║
║   >> PRO     ║
╚══════════════╝`,
    description: "Agendador Express + Recordatorio de Voz + Triaje IA.",
    price: "$550 USD",
    realValue: "$1,800 USD",
    savings: "70% OFF",
    benefits: ["Reduce inasistencias 85%", "Triaje 24/7", "ROI en 30 días"],
  },
  {
    name: "Pack E-commerce Scaler",
    ascii: `
╔══════════════╗
║   🛒 VENTA   ║
║   :: 24/7    ║
╚══════════════╝`,
    description:
      "Landing de Producto + Recuperador de Carritos + Vendedor 24/7.",
    price: "$850 USD",
    realValue: "$2,400 USD",
    savings: "65% OFF",
    benefits: [
      "Recupera 40% carritos",
      "Vende mientras duermes",
      "Escala sin contratar",
    ],
  },
  {
    name: "Pack Inmobiliario High-Ticket",
    ascii: `
╔══════════════╗
║   🏢 LUXURY  ║
║   // HIGH-$  ║
╚══════════════╝`,
    description:
      "Calificador de Leads + Dossier Automático + Agente Multilingüe.",
    price: "$950 USD",
    realValue: "$3,000 USD",
    savings: "68% OFF",
    benefits: [
      "Solo leads calificados",
      "Cierra en 3 idiomas",
      "Presentaciones auto-generadas",
    ],
  },
];

const socialProof = [
  { metric: "5,000+", label: "Horas automatizadas" },
  { metric: "180%", label: "ROI promedio" },
  { metric: "24/7", label: "Operación continua" },
  { metric: "72hrs", label: "Deploy promedio" },
];

const asciiHeader = `
╔═══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║    ██╗███╗   ██╗███████╗██████╗  █████╗     ██╗ █████╗           ║
║    ██║████╗  ██║██╔════╝██╔══██╗██╔══██╗    ██║██╔══██╗          ║
║    ██║██╔██╗ ██║█████╗  ██████╔╝███████║    ██║███████║          ║
║    ██║██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║    ██║██╔══██║          ║
║    ██║██║ ╚████║██║     ██║  ██║██║  ██║    ██║██║  ██║          ║
║    ╚═╝╚═╝  ╚═══╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝    ╚═╝╚═╝  ╚═╝          ║
║                                                                   ║
║              > CAPITAL_RAISE_EDITION_2026.exe                     ║
║              > SYSTEMS_ONLINE :: 24/7/365                         ║
║              > DISCOUNT_ACTIVE :: 75-85% OFF                      ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝`;

export default function CatalogoIaPage() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* ASCII Header */}
      <section className="pt-24 pb-8 px-4 overflow-x-hidden">
        <pre className="text-[8px] sm:text-xs text-cyan-400 whitespace-pre leading-tight">
          {asciiHeader}
        </pre>
      </section>

      {/* Hero Section - Hacker Style */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Terminal Badge */}
          <div className="inline-flex items-center gap-2 border border-cyan-500/50 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-widest text-cyan-400 mb-6">
            <Sparkles size={14} className="animate-pulse" />
            <span>&gt;_ CAPITAL_RAISE.sh --execute</span>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <div className="text-green-400 text-sm mb-2">
              <span className="animate-pulse">█</span> root@xpertasocial:~#
              ./deploy_infrastructure.sh
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              <span className="text-cyan-400">INFRAESTRUCTURA_IA</span>
              <br />
              <span className="text-pink-400">[SEED_PRICE]</span>
            </h1>
            <div className="text-sm sm:text-base text-gray-400 font-mono">
              <span className="text-green-400">$</span> echo
              &quot;Microservicios enterprise | Descuento: 75-85% | Status:
              ONLINE&quot;
              <br />
              <span className="text-green-400">$</span> Fase:
              LEVANTAMIENTO_CAPITAL --limit PRIMEROS_5_CONTRATOS
            </div>
          </div>

          {/* Social Proof Grid - Terminal Style */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {socialProof.map((item, idx) => (
              <div
                key={idx}
                className="border border-green-500/30 bg-black/80 p-4"
              >
                <div className="text-xs text-green-500 mb-1">
                  &gt; {item.label.toUpperCase()}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">
                  {item.metric}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs - Terminal Commands */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/diagnostico"
              className="group border-2 border-cyan-500 bg-cyan-500/10 text-cyan-400 px-6 py-4 text-base font-bold hover:bg-cyan-500 hover:text-black transition-all"
            >
              <span className="flex items-center justify-center gap-2">
                &gt;_ AGENDAR_DIAGNOSTICO.exe{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>

            <Link
              href="/diagnostico#audit"
              className="border-2 border-pink-500/50 text-pink-400 px-6 py-4 text-base hover:border-pink-500 hover:bg-pink-500/10 transition-all"
            >
              :: AUDITORIA_GRATIS --start
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic Keys - Terminal Output */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-green-500/5 border-y border-green-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-cyan-400" size={24} />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              [STRATEGIC_KEYS.json]
            </h2>
          </div>

          <div className="space-y-3">
            {strategicKeys.map((key, idx) => (
              <div
                key={idx}
                className="border-l-4 border-cyan-500 bg-black/60 p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xs mt-1">
                    [{String(idx + 1).padStart(2, "0")}]
                  </span>
                  <p className="text-sm sm:text-base text-gray-300">{key}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Levels - Code Blocks */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="text-pink-400" size={24} />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              &gt; NIVELES_IMPLEMENTACION[]
            </h2>
          </div>

          <div className="space-y-6">
            {implementationLevels.map((level, idx) => (
              <div key={idx} className="border border-green-500/30 bg-black/80">
                {/* Level Header */}
                <button
                  onClick={() =>
                    setExpandedLevel(expandedLevel === idx ? null : idx)
                  }
                  className="w-full text-left p-4 sm:p-6 hover:bg-green-500/5 transition-colors"
                  aria-expanded={expandedLevel === idx}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <pre className="text-[8px] sm:text-[10px] text-cyan-400 mb-2 whitespace-pre leading-tight hidden sm:block">
                        {level.ascii}
                      </pre>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-400 text-xs">
                          [NIVEL_{idx + 1}]
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {level.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-pink-400 mb-1">
                        {`// ${level.subtitle}`}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {level.description}
                      </p>
                    </div>
                    <ChevronDown
                      className={`text-cyan-400 transition-transform ${
                        expandedLevel === idx ? "rotate-180" : ""
                      }`}
                      size={20}
                    />
                  </div>
                </button>

                {/* Services */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedLevel === idx
                      ? "max-h-[2000px]"
                      : "max-h-0 sm:max-h-full"
                  }`}
                >
                  <div className="border-t border-green-500/20 p-4 space-y-3">
                    {level.items.map((item, itemIdx) => (
                      <div
                        key={item.service}
                        className="border border-cyan-500/20 bg-black/60 p-4 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                          <div className="flex-1">
                            <div className="text-xs text-green-400 mb-1">
                              &gt; service_
                              {String(itemIdx + 1).padStart(2, "0")}.deploy()
                            </div>
                            <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                              {item.service}
                            </h4>
                            <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 px-2 py-1 text-xs">
                              <Zap size={10} />
                              {item.highlight}
                            </div>
                          </div>
                          <div className="border border-pink-500/30 bg-pink-500/10 px-4 py-2">
                            <div className="text-xs text-pink-400">PRICE:</div>
                            <div className="text-xl sm:text-2xl font-bold text-pink-400">
                              {item.price}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400 border-l-2 border-green-500/30 pl-3">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Packages - ASCII Cards */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-pink-500/5 border-y border-pink-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-xl sm:text-3xl font-bold text-white mb-2">
              <span className="text-pink-400">[PAQUETES_EXPRESS]</span>.init()
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              {"// Combos plug & play para sectores específicos"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {launchPackages.map((pack, idx) => (
              <button
                key={pack.name}
                onClick={() =>
                  setSelectedPackage(selectedPackage === idx ? null : idx)
                }
                className={`text-left cursor-pointer border-2 bg-black/80 p-6 transition-all hover:scale-105 ${
                  selectedPackage === idx
                    ? "border-pink-500 shadow-lg shadow-pink-500/50"
                    : "border-green-500/30 hover:border-pink-500/50"
                }`}
              >
                {/* Discount Badge */}
                <div className="absolute -top-3 -right-3 border-2 border-pink-500 bg-pink-500/20 text-pink-400 px-3 py-1 text-xs font-bold animate-pulse">
                  {pack.savings}
                </div>

                <pre className="text-[8px] sm:text-[10px] text-cyan-400 mb-4 whitespace-pre leading-tight">
                  {pack.ascii}
                </pre>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {pack.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-4">
                  {pack.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 mb-4 border-l-2 border-cyan-500/30 pl-3">
                  {pack.benefits.map((benefit, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-start gap-2 text-xs text-gray-300"
                    >
                      <span className="text-cyan-400">&gt;</span>
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="border-t border-green-500/20 pt-4">
                  <div className="text-xs text-gray-500 line-through mb-1">
                    {`// value: ${pack.realValue}`}
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="text-2xl sm:text-3xl font-bold text-pink-400">
                      {pack.price}
                    </div>
                    <button className="border-2 border-pink-500 bg-pink-500/10 text-pink-400 px-4 py-2 text-xs font-bold hover:bg-pink-500 hover:text-black transition-colors">
                      CONTRATAR &gt;&gt;
                    </button>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Warning Banner */}
          <div className="mt-8 border-2 border-pink-500/50 bg-pink-500/10 p-4">
            <div className="flex items-start gap-3">
              <Clock className="text-pink-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <div className="text-xs text-pink-400 font-bold mb-1">
                  [!] DISPONIBILIDAD_LIMITADA --alert
                </div>
                <p className="text-xs sm:text-sm text-gray-300">
                  Oferta limitada a los{" "}
                  <span className="text-pink-400 font-bold">
                    primeros 5 contratos/sector
                  </span>
                  . Post-liquidez: precios retornan a tarifa estándar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Terminal */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto border-2 border-cyan-500/50 bg-black/90 p-8">
          <div className="text-center">
            <pre className="text-xs text-green-400 mb-4">
              {`> INFRASTRUCTURE_READY.status
> OUTPUT: [ONLINE] | [SCALABLE] | [SECURED]`}
            </pre>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              <span className="text-cyan-400">INFRAESTRUCTURA</span> lista para{" "}
              <span className="text-pink-400">ESCALAR</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-6">
              {"// Asegura precio preferencial antes del cierre de capital"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/diagnostico"
                className="border-2 border-cyan-500 bg-cyan-500/10 text-cyan-400 px-6 py-3 font-bold hover:bg-cyan-500 hover:text-black transition-all"
              >
                &gt;_ DISEÑAR_ESTRATEGIA.sh
              </Link>
              <Link
                href="/"
                className="border-2 border-green-500/30 text-green-400 px-6 py-3 hover:border-green-500 hover:bg-green-500/10 transition-all"
              >
                :: cd /home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA - Mobile Terminal */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-black/95 p-3 border-t-2 border-cyan-500/50 backdrop-blur-lg z-50">
        <Link
          href="/diagnostico"
          className="block w-full border-2 border-cyan-500 bg-cyan-500/20 text-cyan-400 py-3 text-center font-bold hover:bg-cyan-500 hover:text-black transition-all"
        >
          &gt;_ ASEGURAR_PRECIO.now()
        </Link>
      </div>
    </div>
  );
}