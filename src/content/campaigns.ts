import { conditions, getDivision, integratedSystems, webIncludedInAllProjects, type Plan } from "@/config/catalog";
import type { Accent, FaqItem } from "@/components/site/ui";

/**
 * Páginas de destino para campañas de Meta (tráfico o interacción).
 * Reglas: información clara arriba, planes con precio y un solo tipo de acción (WhatsApp con el plan escrito).
 * Se publican con noindex: son destinos de campaña, no páginas para buscadores.
 */

export interface PlanGroup {
  title?: string;
  /** Nombre que aparece en el mensaje de WhatsApp ("quiero el plan {division} – {plan}"). */
  division: string;
  plans: Plan[];
  note?: string;
  accent: Accent;
}

export interface Campaign {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  highlight: string;
  sub: string;
  priceAnchor: string;
  bullets: string[];
  heroMessage: string;
  groups: PlanGroup[];
  included?: { title: string; items: string[] };
  steps: { title: string; text: string }[];
  faq: FaqItem[];
  accent: Accent;
}

const web = getDivision("web");
const google = getDivision("google-ads");
const meta = getDivision("meta-ads");
const webPlan = (id: string) => web.plans.find((p) => p.id === id)!;
const systemPlan = (id: string) => integratedSystems.find((p) => p.id === id)!;
const maintenance = web.extras!.find((p) => p.id === "web-maintenance")!;
const googleKit = google.extras!.find((p) => p.id === "google-kit")!;

const projectSteps = [
  { title: "Elige tu plan", text: "Toca el botón del plan y se abre WhatsApp con el mensaje listo. Te respondemos en 1 día hábil." },
  { title: "Todo por escrito", text: `Recibes alcance, precio y plazo por escrito. ${conditions.projectPayments}` },
  { title: "Entrega y medición", text: "Publicamos, probamos WhatsApp y formularios, y te entregamos accesos a tu nombre." },
];

const projectFaqBase: FaqItem[] = [
  { q: "¿Cómo se paga?", a: `${conditions.projectPayments} Precios en MXN más IVA.` },
  {
    q: "¿Qué necesito para empezar?",
    a: "Tu logotipo, textos base y fotos de tu negocio. Si no los tienes completos, te damos una guía de qué enviar. El plazo corre desde que recibimos todo.",
  },
  { q: "¿El dominio y las cuentas son míos?", a: "Sí. Quedan a tu nombre desde el primer día y el sitio se entrega a tu nombre al liquidar el proyecto." },
];

export const campaigns: Campaign[] = [
  {
    slug: "pagina-web",
    metaTitle: "Página web con precio fijo para tu negocio",
    metaDescription: "Landing pages y sitios web con precio fijo, adaptados a celular y conectados a WhatsApp. Desde $2,000 MXN + IVA.",
    eyebrow: "Páginas web para negocios",
    headline: "Tu página web lista para vender,",
    highlight: "con precio fijo.",
    sub: "Landing pages y sitios para negocios en México, conectados a WhatsApp desde el primer día. Eliges tu plan y empezamos.",
    priceAnchor: "Desde $2,000 MXN + IVA",
    bullets: ["Precio fijo, sin cotizaciones eternas", "Adaptada a celular con botón de WhatsApp", "Dominio y cuentas a tu nombre"],
    heroMessage: "Hola, vi su anuncio y quiero una página web para mi negocio. Mi negocio es: ",
    accent: "cyan",
    groups: [
      {
        division: web.name,
        accent: "cyan",
        plans: [webPlan("web-landing-express"), webPlan("web-landing-pro"), webPlan("web-corporate")],
        note: `Mantenimiento opcional: ${maintenance.name.toLowerCase()} $1,500 MXN/mes + IVA, sin permanencia. ${web.footnote}`,
      },
    ],
    included: { title: "Incluido en todos los planes", items: webIncludedInAllProjects },
    steps: projectSteps,
    faq: [
      {
        q: "¿En cuánto tiempo queda lista?",
        a: "La Landing Page Express queda en 3 a 5 días hábiles y el Sitio corporativo en 8 a 12 días hábiles, contados desde que recibimos todos los materiales.",
      },
      ...projectFaqBase,
      { q: "¿Incluye hosting y dominio?", a: "No. Se contratan a tu nombre y te ayudamos a elegirlos; así nunca dependes de nosotros para conservarlos." },
    ],
  },
  {
    slug: "tienda-en-linea",
    metaTitle: "Tienda en línea Shopify con precio fijo",
    metaDescription: "Tu tienda Shopify con pagos, envíos y hasta 30 productos cargados por $9,000 MXN + IVA. Lista para anunciarte en Meta y Google.",
    eyebrow: "Tiendas en línea",
    headline: "Vende en línea todos los días,",
    highlight: "con tu propia tienda.",
    sub: "Tiendas Shopify con pagos y envíos configurados, adaptadas a celular y listas para tus campañas en Facebook, Instagram y Google.",
    priceAnchor: "Desde $9,000 MXN + IVA",
    bullets: ["Pagos y envíos configurados", "Hasta 30 productos cargados", "Lista para anunciarte en Meta y Google"],
    heroMessage: "Hola, vi su anuncio y quiero una tienda en línea. Vendo: ",
    accent: "cyan",
    groups: [
      {
        division: "Tienda en línea",
        accent: "cyan",
        plans: [webPlan("web-shopify"), systemPlan("system-ecommerce"), webPlan("web-ecommerce-advanced")],
        note: "La suscripción de Shopify, las apps y la fotografía no están incluidas. Lo que exceda el alcance del plan se cotiza aparte.",
      },
    ],
    steps: projectSteps,
    faq: [
      { q: "¿Qué incluye la Tienda Shopify de $9,000?", a: "Hasta 30 productos cargados, pagos y envíos configurados, diseño adaptado a celular y medición de compras en Google Analytics." },
      { q: "¿Tengo que pagarle a Shopify?", a: "Sí. La suscripción de Shopify y sus apps se pagan aparte, directamente a Shopify y a tu nombre." },
      ...projectFaqBase,
    ],
  },
  {
    slug: "anuncios",
    metaTitle: "Anuncios en Facebook, Instagram y Google",
    metaDescription: "Gestión de Meta Ads desde $2,500 MXN/mes y Google Ads desde $3,000 MXN/mes + IVA. La inversión la pagas tú directo a la plataforma.",
    eyebrow: "Anuncios en Meta y Google",
    headline: "Anuncios que traen clientes,",
    highlight: "no solo likes.",
    sub: "Gestionamos tus campañas en Facebook, Instagram y Google, medimos cada mensaje y cada contacto, y te decimos en lenguaje claro qué funcionó.",
    priceAnchor: "Desde $2,500 MXN/mes + IVA",
    bullets: ["Tu presupuesto lo pagas directo a Meta o Google", "Reporte mensual claro", "Cuentas a tu nombre"],
    heroMessage: "Hola, vi su anuncio y quiero anunciarme en Facebook/Instagram o Google. Mi negocio es: ",
    accent: "pink",
    groups: [
      { title: "Meta Ads · Facebook e Instagram", division: meta.name, accent: "pink", plans: meta.plans, note: meta.footnote },
      {
        title: "Google Ads · Búsqueda",
        division: google.name,
        accent: "lime",
        plans: [...google.plans, googleKit],
        note: "La inversión publicitaria se paga directamente a Google. Mínimo 3 meses en planes mensuales.",
      },
    ],
    steps: [
      { title: "Elige tu plan", text: "Toca el botón del plan y se abre WhatsApp con el mensaje listo. Te respondemos en 1 día hábil." },
      { title: "Configuramos y medimos", text: "Revisamos tu cuenta, configuramos la medición de mensajes y contactos, y lanzamos las campañas." },
      { title: "Optimizamos cada mes", text: "Ajustamos públicos, anuncios y presupuesto con datos, y te enviamos un reporte claro." },
    ],
    faq: [
      { q: "¿La inversión en anuncios está incluida?", a: "No. Pagas tu presupuesto directamente a Meta o Google con tu propia tarjeta. Nuestra tarifa es solo por la gestión." },
      { q: "¿Hay plazo forzoso?", a: conditions.monthlyPlans },
      {
        q: "¿En cuánto tiempo veo resultados?",
        a: "Las campañas generan datos desde la primera semana y suelen necesitar de 4 a 8 semanas para estabilizarse. No prometemos ventas ni cifras específicas.",
      },
      { q: "¿Necesito página web?", a: "Ayuda mucho, pero no siempre. Podemos llevar los anuncios directo a WhatsApp o a una landing desde $2,000 MXN + IVA." },
    ],
  },
  {
    slug: "presencia-digital",
    metaTitle: "Presencia digital profesional para tu negocio",
    metaDescription: "Landing profesional, WhatsApp, formulario, SEO técnico básico y Google Analytics desde $4,500 MXN + IVA.",
    eyebrow: "Presencia digital",
    headline: "Que tu negocio se vea profesional",
    highlight: "y te encuentren.",
    sub: "Todo lo básico en un solo paquete: página profesional, WhatsApp, formulario, posicionamiento técnico y medición. Un solo responsable.",
    priceAnchor: "Desde $4,500 MXN + IVA",
    bullets: ["Página profesional adaptada a celular", "WhatsApp y formulario de contacto", "Medición con Google Analytics"],
    heroMessage: "Hola, vi su anuncio y quiero el paquete de presencia digital. Mi negocio es: ",
    accent: "lime",
    groups: [
      {
        division: "Sistema integrado",
        accent: "lime",
        plans: [systemPlan("system-presence"), systemPlan("system-capture")],
        note: `${conditions.projectPayments} Precios en MXN más IVA. La gestión mensual de anuncios se contrata aparte.`,
      },
      {
        title: "¿Solo necesitas una página?",
        division: web.name,
        accent: "cyan",
        plans: [webPlan("web-landing-express")],
      },
    ],
    steps: projectSteps,
    faq: [
      {
        q: "¿Qué diferencia hay entre Presencia digital y Sistema de captación?",
        a: "Presencia digital es la base para verte profesional. Sistema de captación suma el kit de Google Ads, Tag Manager y la medición de prospectos para empezar a anunciarte.",
      },
      ...projectFaqBase,
    ],
  },
];

export function getCampaign(slug: string): Campaign | undefined {
  return campaigns.find((c) => c.slug === slug);
}
