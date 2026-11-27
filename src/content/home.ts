import type { FaqItem } from "@/components/site/ui";
import { conditions } from "@/config/catalog";

/** Etapas del sistema (Catálogo 2026, "Por qué XpertaSocial"). */
export const systemStages = [
  { n: "01", title: "Descubrimiento", text: "Diagnóstico de cuentas, sitio, medición y competencia." },
  { n: "02", title: "Infraestructura", text: "Landing pages, sitio, tienda y medición confiable." },
  { n: "03", title: "Conversión", text: "Campañas, formularios, WhatsApp y seguimiento de prospectos." },
  { n: "04", title: "Escala", text: "Optimización con datos y nuevos canales de adquisición." },
];

/** ¿Por dónde empezar? */
export const startHere = [
  {
    situation: "Vendes en Amazon México o EE. UU. y tu publicidad gasta sin vender lo suficiente",
    solution: "Amazon Ads",
    detail: "Sponsored Products, Brands y Display",
    href: "/#amazon-ads",
  },
  {
    situation: "Necesitas prospectos o ventas en semanas, no en meses",
    solution: "Google Ads",
    detail: "con medición de conversiones",
    href: "/#google-ads",
  },
  {
    situation: "Quieres más clientes y mensajes desde Facebook e Instagram",
    solution: "Meta Ads",
    detail: "campañas de mensajes, tráfico y prospectos",
    href: "/#meta-ads",
  },
  {
    situation: "Tienes tráfico o anuncios, pero tu sitio no convierte o no existe",
    solution: "Web, E-commerce y Conversión",
    detail: "sitios, landing pages y tiendas",
    href: "/diseno-paginas-web",
  },
  {
    situation: "Quieres depender menos de la publicidad pagada y aparecer en Google y en respuestas de IA",
    solution: "SEO, GEO y AEO",
    detail: "posicionamiento acumulativo",
    href: "/#seo-geo-aeo",
  },
  {
    situation: "Quieres resolverlo todo de una vez",
    solution: "Sistemas integrados",
    detail: "un solo proyecto, un solo responsable",
    href: "/#sistemas",
  },
];

/** Metodología mensual (Catálogo 2026, "Cómo trabajamos"). */
export const method = [
  { title: "Diagnóstico", text: "Revisamos tus cuentas, sitio, medición y competencia. Identificamos dónde se pierde dinero y dónde está la oportunidad más rápida." },
  { title: "Arquitectura", text: "Diseñamos la estructura: campañas, páginas, eventos de conversión y la ruta que sigue un prospecto hasta convertirse en cliente." },
  { title: "Ejecución", text: "Implementamos y verificamos que cada conversión se registre antes de invertir más." },
  { title: "Optimización", text: "Ajustes semanales o quincenales según tu plan: pujas, términos, anuncios, páginas y presupuesto." },
  { title: "Escala", text: "Cuando un canal ya es rentable, sumamos el siguiente: más campañas, posicionamiento orgánico o nuevos marketplaces." },
];

export const reportIncludes = [
  "Inversión, conversiones y costo por resultado",
  "Qué cambió respecto al mes anterior",
  "Qué funcionó, qué no y por qué",
  "Plan de acción del próximo mes",
];

export const weNeedFromYou = [
  "Acceso a tus cuentas como usuario, no como dueño",
  "Tu margen o valor aproximado por cliente",
  "Retroalimentación sobre la calidad de los prospectos",
  "Una persona de contacto para aprobaciones",
];

/** Compromisos: Catálogo 2026 + especificación v1.1. Sustituyen cualquier "garantía de riesgo cero". */
export const commitments = [
  { title: "Tus cuentas son tuyas", text: "Dominio, Google Ads, Meta, Amazon y Analytics quedan a tu nombre desde el primer día. Si un día te vas, te llevas todo." },
  { title: "Tu inversión, directo a la plataforma", text: "El presupuesto de anuncios lo pagas tú a Google, Meta o Amazon. Nunca pasa por nosotros." },
  { title: "Todo por escrito antes de iniciar", text: "Alcance, precio y plazo acordados por escrito antes de cobrar el anticipo." },
  { title: "Medición verificada", text: "Probamos formularios, WhatsApp y llamadas antes de la entrega, para que cada contacto quede registrado." },
  { title: "Reportes que se entienden", text: "Qué se gastó, qué generó y qué haremos el próximo mes, en lenguaje de negocio." },
  { title: "Sin promesas infladas", text: "No garantizamos posiciones ni ventas. Garantizamos trabajo técnico medible y transparente." },
  { title: "Revisiones y garantía", text: `${conditions.revisions} ${conditions.warranty}` },
  { title: "La auditoría se descuenta", text: "Si contratas dentro de los 30 días siguientes, lo que pagaste por la auditoría se descuenta del primer mes." },
  { title: "Respuesta en 1 día hábil", text: "Un solo contacto que conoce tu cuenta, por WhatsApp o llamada." },
];

/** Experiencia declarada por el propietario (Catálogo 2026). Sin nombres de marcas ni cifras. */
export const amazonExperience = {
  title: "Publicidad en el ecosistema de Amazon, a nivel marca global",
  text: "Experiencia gestionando campañas de video en streaming, display y DSP dentro de Amazon Ads para marcas globales de tecnología, bebidas y entretenimiento, en cuentas de Canadá y Estados Unidos. Esa misma disciplina de medición la aplicamos a negocios de México y LATAM.",
};

export const generalFaq: FaqItem[] = [
  { q: "¿La inversión en anuncios está incluida?", a: "No. Pagas tu presupuesto directamente a Google, Meta o Amazon con tu propia tarjeta. Nuestra tarifa es solo por la gestión." },
  { q: "¿Garantizan resultados?", a: "No prometemos ventas, posiciones ni cifras específicas, porque dependen de tu producto, precio, competencia y presupuesto. Sí garantizamos trabajo documentado, medición correcta y reportes honestos." },
  { q: "¿En cuánto tiempo veo resultados?", a: "Google Ads, Meta Ads y Amazon Ads generan datos desde la primera semana, y las campañas suelen necesitar de 4 a 8 semanas para estabilizarse. El SEO es más lento y acumulativo." },
  { q: "¿Hay plazo forzoso?", a: "Los planes mensuales tienen un mínimo de 3 meses, el tiempo necesario para optimizar con datos. Después continúan mes a mes con aviso de 30 días." },
  { q: "¿De quién son las cuentas y el sitio?", a: "Tuyos. Trabajamos con acceso de usuario en tus propias cuentas y el sitio se entrega a tu nombre al liquidar el proyecto." },
  { q: "¿Trabajan con empresas fuera de México?", a: "Sí. Atendemos negocios de México y LATAM, y marcas que venden en Amazon Estados Unidos." },
  { q: "¿Puedo contratar solo un servicio?", a: "Sí. Cada división funciona por separado. Te recomendaremos sumar otra solo cuando los datos muestren que hace falta." },
  { q: "¿Por qué unos precios están en dólares?", a: "Los planes de Amazon Ads se cotizan en USD porque atienden marketplaces de varios países. El resto de los servicios se cotiza en pesos, antes de IVA." },
];
