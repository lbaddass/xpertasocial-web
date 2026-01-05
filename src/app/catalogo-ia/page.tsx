import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import PageNav from "@/components/layout/PageNav";

const catalogPrinciples = [
  { label: "Moneda", value: "MXN" },
  { label: "Ticket de entrada", value: "$1,500 – $4,000" },
  { label: "Upsell máximo", value: "$80,000+" },
  { label: "Unidad de venta", value: "Resultado concreto" },
  { label: "IA hacia el cliente", value: "Cero IA explícita" },
  { label: "Sesgo de entrega", value: "Rápido > Perfecto" },
];

const catalogLevels = [
  {
    title: "Nivel 1 — Micro-servicios de entrada",
    description: "Venta impulsiva. Poco riesgo. Alto volumen.",
    groups: [
      {
        title: "Web / Conversión",
        items: [
          {
            name: "Landing Express IA",
            price: "$2,000 – $3,500",
            delivers: "Página simple que genera contactos.",
            detail: "Copy asistido + estructura.",
          },
          {
            name: "Copy de Venta IA (1 página)",
            price: "$1,500 – $2,500",
            delivers: "Texto listo para web o WhatsApp.",
          },
        ],
      },
      {
        title: "Ads / Contenido",
        items: [
          {
            name: "Anuncios Express IA (Meta)",
            price: "$1,500 – $3,000",
            delivers: "2 copies + 2 visuales.",
          },
          {
            name: "Reescritura de anuncios con IA",
            price: "$1,000 – $2,000",
            delivers: "Mejora de anuncios existentes.",
          },
        ],
      },
      {
        title: "WhatsApp / Atención",
        items: [
          {
            name: "Mensaje Automático WhatsApp",
            price: "$1,500 – $2,500",
            delivers: "Respuesta automática básica.",
          },
          {
            name: "Guiones de Venta IA (WhatsApp)",
            price: "$1,500 – $3,000",
            delivers: "Scripts para cerrar más rápido.",
          },
        ],
      },
    ],
  },
  {
    title: "Nivel 2 — Servicios funcionales",
    description: "Aquí ya empiezas a justificar precio.",
    groups: [
      {
        title: "Funnels / Leads",
        items: [
          {
            name: "Funnel Básico IA",
            price: "$6,000 – $10,000",
            delivers: "Landing + formulario + seguimiento simple.",
          },
          {
            name: "Calificación Automática de Leads",
            price: "$5,000 – $9,000",
            delivers: "Clasifica leads antes de responder.",
          },
        ],
      },
      {
        title: "Web",
        items: [
          {
            name: "Mini Web IA (3 secciones)",
            price: "$5,000 – $8,000",
            delivers: "Web ligera enfocada a conversión.",
          },
          {
            name: "Web Optimizada para Conversión",
            price: "$8,000 – $15,000",
            delivers: "Estructura UX orientada a ventas.",
          },
        ],
      },
      {
        title: "Contenido",
        items: [
          {
            name: "Calendario de Contenido IA (30 días)",
            price: "$3,000 – $6,000",
            delivers: "Plan editorial para redes.",
          },
          {
            name: "Generador de Posts Automático",
            price: "$5,000 – $9,000",
            delivers: "Posts listos para publicar.",
          },
        ],
      },
    ],
  },
  {
    title: "Nivel 3 — Automatización invisible",
    description: "Aquí tú ganas margen. La agencia vende orden.",
    groups: [
      {
        title: "Operación",
        items: [
          {
            name: "Automatización de Leads (CRM / Sheets)",
            price: "$8,000 – $15,000",
            delivers: "Leads ordenados en un solo tablero.",
          },
          {
            name: "Seguimiento Automático WhatsApp / Email",
            price: "$6,000 – $12,000",
            delivers: "Nutrición automática post-contacto.",
          },
          {
            name: "Dashboard Simple de Resultados",
            price: "$6,000 – $12,000",
            delivers: "KPIs claros en un panel simple.",
          },
        ],
      },
      {
        title: "IA aplicada",
        items: [
          {
            name: "Asistente IA Interno (FAQ)",
            price: "$10,000 – $20,000",
            delivers: "Responde dudas repetitivas 24/7.",
          },
          {
            name: "Clasificador IA de Mensajes",
            price: "$8,000 – $18,000",
            delivers: "Prioriza y etiqueta mensajes entrantes.",
          },
        ],
      },
    ],
  },
  {
    title: "Nivel 4 — Desarrollos personalizados",
    description: "Ticket alto cuando ya confían.",
    groups: [
      {
        title: "IA + Automatización avanzada",
        items: [
          {
            name: "Bot IA de Ventas (WhatsApp)",
            price: "Desde $15,000",
            delivers: "Escalable hasta $40,000+.",
          },
          {
            name: "Sistema de Ventas Automatizado",
            price: "Desde $20,000",
            delivers: "Escalable hasta $60,000+.",
          },
          {
            name: "Infraestructura IA Operativa",
            price: "Desde $25,000",
            delivers: "Escalable hasta $80,000+.",
          },
        ],
      },
    ],
  },
];

const packages = [
  {
    name: "Arranque Digital",
    price: "$4,000 – $6,000",
    includes: ["Landing Express", "Copy IA"],
  },
  {
    name: "Consigue Mensajes",
    price: "$6,000 – $9,000",
    includes: ["Landing", "Mensajes WhatsApp", "Creativos"],
  },
  {
    name: "Ventas Semi-Automáticas",
    price: "$12,000 – $18,000",
    includes: ["Funnel", "Seguimiento", "Dashboard básico"],
  },
];

const strategicKeys = [
  "La IA es tu motor, no tu pitch.",
  "El cliente compra rapidez, orden y menos trabajo.",
  "El upgrade es natural: \"¿Quieres que también responda solo?\"",
  "Escala con: \"¿Quieres que los leads se ordenen?\"",
];

export default function CatalogoIaPage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <PageNav />

      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono uppercase tracking-[0.3em] text-neonBlue">
            Catálogo IA + Automatización
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Microservicios escalonados para liquidez rápida
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl">
            Un catálogo diseñado para tickets de entrada bajos y escalamiento progresivo por personalización. Se vende por resultados, no por tecnología.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/diagnostico"
              className="inline-flex items-center gap-2 bg-neonBlue text-black px-6 py-3 font-bold rounded-sm hover:bg-white transition-all"
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

      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Principios del catálogo</h2>
          <p className="text-white/60 mt-2">Reglas duras para proteger margen y acelerar cierre.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {catalogPrinciples.map((principle) => (
            <div key={principle.label} className="border border-white/10 bg-carbon/60 p-5">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-white/40">
                {principle.label}
              </div>
              <div className="mt-3 text-lg font-semibold text-white">{principle.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 space-y-16">
        {catalogLevels.map((level) => (
          <div key={level.title} className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{level.title}</h2>
              <p className="text-white/60 mt-2">{level.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {level.groups.map((group) => (
                <div key={group.title} className="border border-white/10 bg-carbon/40 p-6">
                  <div className="text-xs font-mono uppercase tracking-[0.25em] text-neonBlue">
                    {group.title}
                  </div>
                  <div className="mt-5 space-y-4">
                    {group.items.map((item) => (
                      <div key={item.name} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        <p className="text-sm text-white/50 font-mono">{item.price}</p>
                        <p className="text-sm text-white/70 mt-2">{item.delivers}</p>
                        {item.detail && <p className="text-xs text-white/50 mt-2">{item.detail}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-20">
        <div className="border border-white/10 bg-carbon/70 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Paquetes comerciales</h2>
          <p className="text-white/60 mt-2">Combos listos para vender y escalar.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pack) => (
              <div key={pack.name} className="border border-white/10 bg-carbon p-6">
                <div className="text-sm font-mono text-neonBlue uppercase tracking-[0.3em]">Paquete</div>
                <h3 className="mt-3 text-xl font-bold text-white">{pack.name}</h3>
                <p className="text-white/60 font-mono text-sm mt-1">{pack.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {pack.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-neonBlue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-20">
        <div className="border border-neonBlue/40 bg-gradient-to-r from-neonBlue/10 via-white/5 to-transparent p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Clave estratégica</h2>
          <ul className="mt-6 space-y-3 text-white/70">
            {strategicKeys.map((key) => (
              <li key={key} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-neonBlue mt-0.5" />
                <span>{key}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/diagnostico"
              className="inline-flex items-center gap-2 bg-neonBlue text-black px-5 py-3 font-bold rounded-sm hover:bg-white transition-all"
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
      </section>
    </div>
  );
}
