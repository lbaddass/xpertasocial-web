import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import PageNav from "@/components/layout/PageNav";

const strategicKeys = [
  "La IA es tu motor, no tu pitch: No vendemos \"humo\", vendemos sistemas que funcionan 24/7.",
  "Capital Raise: Estos precios representan un 75% a 85% de descuento sobre la tarifa comercial. El objetivo es fondear el escalamiento de nuestros nodos MCP.",
  "Valor Exponencial: Usamos protocolos de contexto (MCP) y APIs de última generación para que tu negocio tenga memoria y criterio propio.",
];

const implementationLevels = [
  {
    title: "Nivel 1: Micro-servicios de Entrada (Impulso Rápido)",
    description: "Venta impulsiva, bajo riesgo, alto impacto inmediato.",
    items: [
      {
        service: "Landing Express IA",
        value: "Diseño optimizado con A/B Testing predictivo vía GPT-4o Vision.",
        price: "$45 USD",
      },
      {
        service: "Respondedor de Reseñas / Comentarios",
        value: "Sentiment Analysis con n8n para filtrar crisis y agradecer ventas.",
        price: "$65 USD",
      },
      {
        service: "Copy de Venta Infinito (1 pág)",
        value: "Redacción psicológica usando Modelos de Lenguaje entrenados en conversión.",
        price: "$55 USD",
      },
      {
        service: "Perfilador de Leads [WhatsApp]",
        value: "Calificación básica mediante filtros de lenguaje natural.",
        price: "$85 USD",
      },
    ],
  },
  {
    title: "Nivel 2: Servicios Funcionales (Ahorro de Tiempo)",
    description: "Aquí es donde el cliente empieza a recuperar sus horas de vida.",
    items: [
      {
        service: "Mini Web IA (3 secciones)",
        value: "Estructura SEO dinámica que se adapta según la búsqueda del usuario.",
        price: "$250 USD",
      },
      {
        service: "Clon de Voz para Recordatorios",
        value: "Confirmación de citas/pagos con tu propia voz (o profesional) vía ElevenLabs.",
        price: "$350 USD",
      },
      {
        service: "Generador de Contenido Omnicanal",
        value: "De 1 idea a 10 formatos (Reels, LinkedIn, Blog) con Anthropic API.",
        price: "$290 USD",
      },
      {
        service: "Web Optimizada para Conversión",
        value: "Embudos que cambian el mensaje según el origen del tráfico.",
        price: "$450 USD",
      },
    ],
  },
  {
    title: "Nivel 3: Automatización Invisible (Margen y Orden)",
    description: "La agencia vende orden, el cliente compra libertad.",
    items: [
      {
        service: "Cerebro de Datos MCP",
        value: "Conectamos tu Excel/SQL a un chat privado para preguntarle a tus datos.",
        price: "$750 USD",
      },
      {
        service: "Seguimiento Automático 365",
        value: "Secuencias de nutrición infinitas que aprenden del comportamiento del lead.",
        price: "$600 USD",
      },
      {
        service: "Asistente Interno [Wiki IA]",
        value: "Toda la normativa de tu empresa en un bot que responde dudas del equipo.",
        price: "$850 USD",
      },
      {
        service: "Dashboard Predictivo de Resultados",
        value: "Visualización de KPIs que te dice cuánto vas a vender el próximo mes.",
        price: "$900 USD",
      },
    ],
  },
  {
    title: "Nivel 4: Desarrollos Personalizados (Infraestructura)",
    description: "Ticket alto para clientes que buscan dominancia total.",
    items: [
      {
        service: "Bot IA de Ventas Avanzado",
        value: "Negocia, objeta y cierra ventas solo, integrado a tu CRM vía Python/Node.js.",
        price: "Desde $1,200 USD",
      },
      {
        service: "Ecosistema White Label para Agencias",
        value: "Creamos tu propia suite de herramientas para que las revendas a tus clientes.",
        price: "Desde $2,500 USD",
      },
      {
        service: "Infraestructura IA Operativa",
        value: "Despliegue de servidores locales con MCP para privacidad total de datos.",
        price: "Desde $3,000 USD",
      },
    ],
  },
];

const launchPackages = [
  {
    name: "Pack Clínica Pro",
    description: "Agendador Express + Recordatorio de Voz + Triaje IA.",
    price: "Precio Capital Raise: $550 USD (Valor real: $1,800 USD).",
  },
  {
    name: "Pack E-commerce Scaler",
    description: "Landing de Producto + Recuperador de Carritos + Vendedor 24/7.",
    price: "Precio Capital Raise: $850 USD (Valor real: $2,400 USD).",
  },
  {
    name: "Pack Inmobiliario High-Ticket",
    description: "Calificador de Leads + Dossier Automático + Agente Multilingüe.",
    price: "Precio Capital Raise: $950 USD (Valor real: $3,000 USD).",
  },
];

export default function CatalogoIaPage() {
  return (
    <div className="min-h-screen pt-20 pb-24">
      <PageNav />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-16">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-mono uppercase tracking-[0.3em] text-neonBlue">
            Catálogo IA + Automatización
          </div>
          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              🚀 Catálogo 2026: Microservicios IA para Liquidez Inmediata
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-4xl">
              Infraestructura de alto nivel a precio de &ldquo;Capital Seed&rdquo;. Solo disponible durante la fase de
              levantamiento de capital para nuestra división de infraestructura.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/diagnostico"
              className="inline-flex items-center gap-2 bg-neonBlue text-black px-6 py-3 text-base font-bold rounded-sm hover:bg-white transition-all"
            >
              Agendar diagnóstico <ArrowRight size={18} />
            </Link>
            <Link
              href="/diagnostico#audit"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 font-mono text-sm rounded-sm hover:border-neonPink hover:text-neonPink transition-all"
            >
              Auditoría online gratis
            </Link>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-20">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">💡 Nuestra Clave Estratégica</h2>
        </div>
        <div className="border border-neonBlue/40 bg-gradient-to-r from-neonBlue/10 via-white/5 to-transparent p-6 sm:p-8">
          <ul className="space-y-4 text-base sm:text-lg text-white/70">
            {strategicKeys.map((key) => (
              <li key={key} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-neonBlue mt-1" />
                <span>{key}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">📊 Niveles de Implementación</h2>
        </div>
        {implementationLevels.map((level) => (
          <div key={level.title} className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{level.title}</h3>
              <p className="text-base sm:text-lg text-white/60 mt-2">{level.description}</p>
            </div>
            <div className="border border-white/10 bg-carbon/40">
              <div className="hidden md:grid grid-cols-[1.2fr_2fr_0.8fr] gap-6 px-6 py-4 text-xs font-mono uppercase tracking-[0.25em] text-white/50 border-b border-white/10">
                <span>Servicio</span>
                <span>Valor Exponencial (Tech)</span>
                <span>Precio Lanzamiento</span>
              </div>
              <div className="divide-y divide-white/10">
                {level.items.map((item) => (
                  <div key={item.service} className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr_0.8fr] gap-4 px-6 py-5">
                    <div>
                      <div className="text-sm font-mono uppercase tracking-[0.2em] text-white/40 md:hidden">
                        Servicio
                      </div>
                      <div className="text-lg font-semibold text-white">{item.service}</div>
                    </div>
                    <div>
                      <div className="text-sm font-mono uppercase tracking-[0.2em] text-white/40 md:hidden">
                        Valor Exponencial (Tech)
                      </div>
                      <p className="text-base sm:text-lg text-white/70">{item.value}</p>
                    </div>
                    <div>
                      <div className="text-sm font-mono uppercase tracking-[0.2em] text-white/40 md:hidden">
                        Precio Lanzamiento
                      </div>
                      <p className="text-base sm:text-lg text-neonBlue font-semibold">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mt-20">
        <div className="border border-white/10 bg-carbon/70 p-6 sm:p-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">📦 Paquetes de &ldquo;Lanzamiento Express&rdquo;</h2>
            <p className="text-white/60 mt-2 text-base sm:text-lg">
              Combos listos para sectores específicos.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {launchPackages.map((pack) => (
              <div key={pack.name} className="border border-white/10 bg-carbon p-6 sm:p-7 space-y-3">
                <h3 className="text-xl font-bold text-white">{pack.name}</h3>
                <p className="text-base sm:text-lg text-white/70">{pack.description}</p>
                <p className="text-base sm:text-lg font-semibold text-neonBlue">{pack.price}</p>
              </div>
            ))}
          </div>
          <div className="border border-neonPink/40 bg-neonPink/10 p-5 text-sm sm:text-base text-white/70">
            ⚠️ DISPONIBILIDAD: Esta oferta de &ldquo;Levantamiento de Capital&rdquo; es limitada a los primeros 5
            contratos por sector. Una vez alcanzado el hito de liquidez, los precios volverán a su tarifa estándar de
            mercado.
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mt-20">
        <div className="border border-white/10 bg-carbon/40 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Infraestructura lista para escalar</h2>
              <p className="text-white/60 mt-2 text-base sm:text-lg">
                Elige tu nivel y asegura precio preferencial antes del cierre de capital.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/diagnostico"
                className="inline-flex items-center gap-2 bg-neonBlue text-black px-5 py-3 text-base font-bold rounded-sm hover:bg-white transition-all"
              >
                Diseñar estrategia <ArrowRight size={18} />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 font-mono text-sm rounded-sm hover:border-neonPink hover:text-neonPink transition-all"
              >
                Volver al home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
