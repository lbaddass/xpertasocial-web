/**
 * Catálogo comercial. ÚNICA fuente de precios, nombres, alcances y condiciones.
 * Origen: "XpertaSocial — Catálogo de servicios 2026" (PDF, precios de referencia vigentes a
 * noviembre de 2026). Complementado con las reglas de entrega de la especificación v1.1
 * (revisiones, garantía, plazos desde la recepción de materiales).
 *
 * Para retirar un precio sin borrar el producto, usa `PENDING`: la UI mostrará "Cotizar".
 */

export type Currency = "MXN" | "USD";

export type Price =
  | { kind: "free" }
  | { kind: "quote" }
  | { kind: "pending" }
  | { kind: "fixed"; amount: number; currency: Currency; period?: "month" | "once" }
  | { kind: "from"; amount: number; currency: Currency; period?: "month" | "once" }
  | { kind: "range"; min: number; max: number; currency: Currency };

export const PENDING: Price = { kind: "pending" };

export interface Plan {
  id: string;
  name: string;
  price: Price;
  /** Texto corto debajo del precio (límites de inversión, productos, etc.). */
  note?: string;
  /** Para qué tipo de cliente o necesidad. */
  idealFor?: string;
  features?: string[];
  recommended?: boolean;
  badge?: string;
}

export interface Division {
  id: "amazon-ads" | "google-ads" | "web" | "seo-geo-aeo";
  number: string;
  name: string;
  eyebrow: string;
  headline: string;
  summary: string;
  currency: Currency;
  plans: Plan[];
  extras?: Plan[];
  footnote: string;
  /** Página dedicada, cuando exista. */
  href?: string;
}

const mxn = (amount: number, period?: "month" | "once"): Price => ({ kind: "fixed", amount, currency: "MXN", period });
const fromMxn = (amount: number, period?: "month" | "once"): Price => ({ kind: "from", amount, currency: "MXN", period });
const usd = (amount: number, period?: "month" | "once"): Price => ({ kind: "fixed", amount, currency: "USD", period });
const fromUsd = (amount: number, period?: "month" | "once"): Price => ({ kind: "from", amount, currency: "USD", period });

// ---------------------------------------------------------------------------
// Diagnósticos de entrada
// ---------------------------------------------------------------------------

export const entryDiagnostics: Plan[] = [
  {
    id: "diagnostic-call",
    name: "Llamada de diagnóstico",
    price: { kind: "free" },
    note: "30 minutos · por videollamada o teléfono",
    features: ["Revisión rápida de tu situación y objetivos", "Recomendación de por dónde empezar"],
  },
  {
    id: "audit-amazon",
    name: "Auditoría de Amazon Ads",
    price: usd(149, "once"),
    note: "Se descuenta de tu primer mes al contratar",
    features: [
      "Gasto sin ventas y términos que desperdician presupuesto",
      "Estructura de campañas y fichas prioritarias",
    ],
    badge: "Más solicitada",
  },
  {
    id: "audit-google",
    name: "Auditoría de Google Ads",
    price: mxn(1500, "once"),
    note: "Se descuenta de tu primer mes al contratar",
    features: [
      "Medición de conversiones, palabras y presupuesto",
      "Revisión de la página a la que llegan tus anuncios",
    ],
  },
  {
    id: "audit-seo-ai",
    name: "Auditoría SEO y visibilidad en IA",
    price: mxn(1500, "once"),
    note: "Se descuenta de cualquier plan de posicionamiento",
    features: ["Rastreo, indexación y errores técnicos", "Cómo te describen los principales asistentes de IA"],
  },
];

// ---------------------------------------------------------------------------
// Divisiones
// ---------------------------------------------------------------------------

export const divisions: Division[] = [
  {
    id: "amazon-ads",
    number: "01",
    name: "Amazon Ads",
    eyebrow: "División 01 · Amazon Ads",
    headline: "Aparece primero en Amazon sin desperdiciar presupuesto.",
    summary:
      "Gestión de publicidad en Amazon México y Estados Unidos para marcas que venden en el marketplace. Empezamos por la búsqueda (Sponsored Ads) y, cuando tu marca está lista, escalamos a video y streaming.",
    currency: "USD",
    plans: [
      {
        id: "amazon-arranque",
        name: "Arranque",
        price: usd(450, "month"),
        note: "Hasta 3,000 USD de inversión mensual · 1 a 15 productos",
        features: ["Sponsored Products", "Carga de términos negativos", "Optimización semanal de pujas", "Reporte mensual claro"],
      },
      {
        id: "amazon-crecimiento",
        name: "Crecimiento",
        price: usd(850, "month"),
        note: "Hasta 15,000 USD de inversión mensual · hasta 50 productos",
        recommended: true,
        features: [
          "Todo lo de Arranque",
          "Sponsored Brands y Display",
          "Defensa de marca y competidores",
          "Recomendaciones de fichas",
          "Llamada mensual de resultados",
        ],
      },
      {
        id: "amazon-escala",
        name: "Escala",
        price: fromUsd(1500, "month"),
        note: "Desde, u 8 % de la inversión · varios marketplaces",
        features: [
          "Todo lo de Crecimiento",
          "México, EE. UU. y más marketplaces",
          "Estrategia por temporada y lanzamientos",
          "Reporte quincenal",
        ],
      },
    ],
    extras: [
      {
        id: "amazon-dsp",
        name: "DSP y video en streaming",
        price: { kind: "quote" },
        idealFor: "Campañas en Prime Video, Fire TV, Twitch, display y video dentro y fuera de Amazon.",
      },
      { id: "amazon-audit", name: "Auditoría de cuenta", price: usd(149, "once") },
      { id: "amazon-listing", name: "Optimización de ficha de producto", price: fromUsd(49, "once") },
    ],
    footnote:
      "Planes mensuales con mínimo de 3 meses y pago por adelantado. La inversión publicitaria se paga directamente a Amazon. XpertaSocial gestiona campañas de Amazon Ads de forma independiente; no es una agencia oficial ni socio de Amazon.",
  },
  {
    id: "google-ads",
    number: "02",
    name: "Google Ads",
    eyebrow: "División 02 · Google Ads y Performance",
    headline: "Captura a quien ya te está buscando.",
    summary:
      "Campañas en Google orientadas a prospectos y ventas reales, no a clics. Todo empieza por medir bien: si no sabemos qué anuncio trajo a cada cliente, no hay manera de mejorar.",
    currency: "MXN",
    plans: [
      {
        id: "google-essential",
        name: "Essential",
        price: mxn(3000, "month"),
        note: "Inversión en Google de hasta $15,000 MXN/mes",
        features: ["1 a 2 campañas de búsqueda", "Palabras clave y negativas", "Optimización cada 15 días", "Reporte mensual"],
      },
      {
        id: "google-performance",
        name: "Performance",
        price: mxn(4000, "month"),
        note: "Inversión en Google de hasta $40,000 MXN/mes",
        recommended: true,
        features: [
          "Hasta 4 campañas: Search, Performance Max y remarketing",
          "Optimización semanal",
          "Pruebas de anuncios A/B",
          "Reporte y llamada mensual",
        ],
      },
      {
        id: "google-advanced",
        name: "Advanced Growth",
        price: mxn(5000, "month"),
        note: "Inversión de hasta $80,000 MXN/mes; arriba, 7 % de la inversión",
        features: [
          "Estructura multicampaña, incluidas YouTube y Demand Gen",
          "AI Max for Search cuando convenga",
          "Recomendaciones de conversión en tu landing",
          "Reporte quincenal",
        ],
      },
    ],
    extras: [
      { id: "google-account", name: "Creación y estructura de cuenta", price: fromMxn(2000, "once") },
      { id: "google-conversions", name: "Seguimiento de conversiones + Enhanced Conversions", price: fromMxn(1500, "once") },
      { id: "google-ga4", name: "Google Analytics 4 + Tag Manager", price: fromMxn(1500, "once") },
      { id: "google-remarketing", name: "Audiencias de remarketing", price: fromMxn(1000, "once") },
      {
        id: "google-kit",
        name: "Kit de arranque Google Ads",
        price: mxn(4500, "once"),
        idealFor: "Las cuatro configuraciones juntas ($6,000 por separado). Cuenta lista para medir llamadas, formularios y WhatsApp.",
        badge: "Ahorra $1,500",
      },
    ],
    footnote:
      "Meta Ads y TikTok Ads para remarketing se cotizan según alcance. La inversión publicitaria se paga directamente a Google. Mínimo 3 meses en planes mensuales.",
  },
  {
    id: "web",
    number: "03",
    name: "Web, E-commerce y Conversión",
    eyebrow: "División 03 · Web, E-commerce y Conversión",
    headline: "Páginas hechas para vender, no solo para verse bien.",
    summary:
      "Sitios rápidos, adaptados a celular y conectados desde el primer día con WhatsApp, formularios y medición. Elegimos la tecnología según tu operación: Next.js, Shopify o WordPress.",
    currency: "MXN",
    href: "/diseno-paginas-web",
    plans: [
      { id: "web-landing-express", name: "Landing Page Express", price: fromMxn(2000, "once"), idealFor: "Una oferta, un objetivo, lista en días" },
      { id: "web-landing-pro", name: "Landing Page Pro", price: fromMxn(4000, "once"), idealFor: "Campañas de Google o Meta con varias secciones y pruebas" },
      { id: "web-catalog", name: "Catálogo digital", price: fromMxn(3500, "once"), idealFor: "Productos o servicios en web, indexable y fácil de actualizar" },
      { id: "web-catalog-interactive", name: "Catálogo interactivo", price: fromMxn(6000, "once"), idealFor: "Filtros, búsqueda y cotización por WhatsApp" },
      { id: "web-corporate", name: "Sitio corporativo", price: fromMxn(7500, "once"), idealFor: "Empresas de servicios con varias páginas", recommended: true },
      { id: "web-shopify", name: "Tienda Shopify", price: fromMxn(9000, "once"), idealFor: "Venta en línea con pagos y envíos" },
      { id: "web-nextjs", name: "Sitio a medida en Next.js", price: fromMxn(12000, "once"), idealFor: "Alto rendimiento, funciones propias y escalabilidad" },
      { id: "web-ecommerce-advanced", name: "E-commerce avanzado", price: fromMxn(15000, "once"), idealFor: "Catálogos grandes, integraciones y automatizaciones" },
      { id: "web-custom", name: "Rediseño, migración, CRM y API", price: { kind: "quote" }, idealFor: "Modernizar lo que ya tienes o conectar tu operación" },
    ],
    extras: [
      {
        id: "web-maintenance",
        name: "Mantenimiento y optimización",
        price: mxn(1500, "month"),
        idealFor: "Opcional, sin permanencia.",
        features: ["Actualizaciones, respaldos y monitoreo", "Hasta 2 horas de cambios al mes", "Mejoras de conversión con base en datos"],
      },
    ],
    footnote:
      "No incluyen dominio, hosting, licencias, apps de Shopify ni fotografía. El precio final depende de páginas, contenido y funciones.",
  },
  {
    id: "seo-geo-aeo",
    number: "04",
    name: "SEO, GEO y AEO",
    eyebrow: "División 04 · Search Intelligence",
    headline: "Que te encuentren en Google y te entiendan los asistentes de IA.",
    summary:
      "Cada vez más personas preguntan a ChatGPT, Gemini o a los resúmenes de IA de Google antes de comprar. Trabajamos tu sitio para que buscadores y motores de respuesta lo puedan entender, rastrear y citar.",
    currency: "MXN",
    plans: [
      { id: "seo-audit", name: "Auditoría SEO técnica", price: fromMxn(1500, "once"), idealFor: "Errores de rastreo, velocidad e indexación, priorizados" },
      { id: "seo-ai-audit", name: "Auditoría de visibilidad en IA", price: fromMxn(1500, "once"), idealFor: "Cómo te describen los principales asistentes" },
      { id: "seo-local", name: "SEO local", price: fromMxn(1800, "once"), idealFor: "Perfil de Negocio en Google optimizado y consistencia de datos" },
      { id: "seo-setup", name: "Configuración SEO del sitio", price: fromMxn(2500, "once"), idealFor: "Search Console, sitemap, metadatos y estructura" },
      { id: "seo-geo-aeo-initial", name: "Optimización inicial GEO + AEO", price: fromMxn(3000, "once"), idealFor: "Schema, preguntas frecuentes y contenido citable" },
      { id: "seo-monthly", name: "Gestión mensual SEO + GEO + AEO", price: fromMxn(4000, "month"), idealFor: "Contenido, mejoras técnicas, monitoreo y reporte" },
    ],
    footnote:
      "El posicionamiento orgánico es acumulativo: los primeros cambios suelen notarse en semanas y los resultados de fondo en meses. Nadie puede garantizar el primer lugar en Google ni una recomendación de una IA; garantizamos el trabajo técnico, su documentación y la medición de avances. Mínimo 3 meses en planes mensuales.",
  },
];

// ---------------------------------------------------------------------------
// Sistemas integrados (paquetes de implementación)
// ---------------------------------------------------------------------------

export const integratedSystems: Plan[] = [
  {
    id: "system-presence",
    name: "Presencia digital",
    price: fromMxn(4500, "once"),
    idealFor: "Negocios que necesitan verse profesionales ya",
    features: ["Landing page profesional", "WhatsApp y formulario", "SEO técnico básico", "Google Analytics"],
  },
  {
    id: "system-capture",
    name: "Sistema de captación",
    price: { kind: "range", min: 8000, max: 12000, currency: "MXN" },
    idealFor: "Servicios profesionales, administración, inmobiliarias",
    recommended: true,
    features: [
      "Landing o sitio multipágina",
      "Kit de arranque Google Ads",
      "GA4, Tag Manager y conversiones",
      "Formularios, WhatsApp y medición de prospectos",
      "SEO on-page inicial",
    ],
  },
  {
    id: "system-search",
    name: "Visibilidad en búsqueda e IA",
    price: { kind: "range", min: 10000, max: 16000, currency: "MXN" },
    idealFor: "Empresas que quieren tráfico propio",
    features: ["Auditoría SEO técnica", "Investigación de palabras clave", "Arquitectura de contenidos", "GEO, AEO y Schema", "Plan editorial de 3 meses"],
  },
  {
    id: "system-ecommerce",
    name: "Motor e-commerce",
    price: { kind: "range", min: 12000, max: 25000, currency: "MXN" },
    idealFor: "Marcas que venden productos en línea",
    features: ["Tienda Shopify con colecciones, pagos y envíos", "Medición de compras y conversiones", "SEO técnico inicial", "Lista para campañas de Google y Meta"],
  },
  {
    id: "system-integral",
    name: "Crecimiento integral",
    price: fromMxn(18000, "once"),
    idealFor: "Proyecto a la medida",
    features: ["Sitio Next.js o Shopify", "SEO, GEO y AEO", "Google Ads configurado y medido", "Integración con CRM y automatización de prospectos", "Estrategia de conversión"],
  },
];

// ---------------------------------------------------------------------------
// Condiciones
// ---------------------------------------------------------------------------

export const conditions = {
  validity: "Precios de referencia vigentes a noviembre de 2026; la cotización final depende del alcance.",
  tax: "Precios en MXN antes de IVA, salvo los planes de Amazon Ads (USD).",
  monthlyPlans: "Planes mensuales: pago por adelantado y mínimo de 3 meses. Después continúan mes a mes con aviso de 30 días.",
  projectPayments: "Proyectos: 50 % de anticipo y 50 % a la entrega.",
  exclusions: "No incluyen inversión publicitaria, dominio, hosting, licencias ni herramientas de terceros.",
  auditsCredit: "Las auditorías pagadas se descuentan del primer mes al contratar dentro de los 30 días siguientes.",
  // Complemento de la especificación v1.1 (reglas de entrega de proyectos web).
  revisions: "Dos rondas de revisión incluidas.",
  timelineStart: "El plazo corre desde la recepción completa de materiales.",
  warranty: "30 días de garantía sobre defectos de implementación.",
} as const;

/** Plazo de referencia del Sitio corporativo (especificación v1.1). */
export const corporateSiteTimeline = "8 a 12 días hábiles";

export const webIncludedInAllProjects = [
  "Diseño adaptado a celular",
  "Botón de WhatsApp y formulario de contacto",
  "SEO técnico básico y velocidad optimizada",
  "Google Analytics configurado",
];

// ---------------------------------------------------------------------------
// Formato
// ---------------------------------------------------------------------------

const nf = new Intl.NumberFormat("es-MX", { maximumFractionDigits: 0 });

function money(amount: number, currency: Currency): string {
  return currency === "USD" ? `${nf.format(amount)} USD` : `$${nf.format(amount)}`;
}

function periodSuffix(period?: "month" | "once"): string {
  return period === "month" ? "/mes" : "";
}

/** Precio legible: "Desde $7,500", "$4,000/mes", "450 USD/mes", "Sin costo", "Cotizar". */
export function formatPrice(price: Price): string {
  switch (price.kind) {
    case "free":
      return "Sin costo";
    case "quote":
      return "A cotizar";
    case "pending":
      return "Cotizar";
    case "fixed":
      return `${money(price.amount, price.currency)}${periodSuffix(price.period)}`;
    case "from":
      return `Desde ${money(price.amount, price.currency)}${periodSuffix(price.period)}`;
    case "range":
      return `${money(price.min, price.currency)}–${nf.format(price.max)}${price.currency === "USD" ? " USD" : ""}`;
  }
}

/** Nota fiscal para mostrar junto al precio. Vacía cuando no hay monto. */
export function taxNote(price: Price): string {
  if (price.kind === "free" || price.kind === "quote" || price.kind === "pending") return "";
  return price.currency === "USD" ? "" : "MXN + IVA";
}

export function getDivision(id: Division["id"]): Division {
  const d = divisions.find((x) => x.id === id);
  if (!d) throw new Error(`Unknown division ${id}`);
  return d;
}

/** Opciones del formulario de diagnóstico, derivadas del catálogo. */
export const solutionOptions = [
  "Sitio web o landing page",
  "Tienda en línea (Shopify o a medida)",
  "Google Ads",
  "Amazon Ads",
  "SEO, GEO y AEO",
  "Sistema integrado (varias piezas)",
  "Aún no lo sé",
] as const;

export const investmentOptions = [
  "Menos de $10,000 MXN",
  "$10,000 – $25,000 MXN",
  "$25,000 – $50,000 MXN",
  "Más de $50,000 MXN",
  "Aún no lo sé",
] as const;

export const timelineOptions = [
  "Lo antes posible",
  "En las próximas 4 semanas",
  "En 1 a 3 meses",
  "Sin fecha definida",
] as const;

export const decisionMakerOptions = ["Sí", "Comparto la decisión", "No"] as const;

export const sectorOptions = [
  "Construcción",
  "Contratista especializado",
  "Servicios industriales B2B",
  "Despacho profesional",
  "Comercio o marca de productos",
  "Vendedor en Amazon",
  "Otro",
] as const;
