/**
 * Datos de contacto y de la empresa. Única fuente para el sitio.
 * Un valor `null` significa "pendiente del propietario" (TODO_OWNER): la UI no lo muestra.
 */
export const site = {
  name: "XpertaSocial",
  tagline: "Growth Engineering Systems",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://xpertasocial.com",
  city: "Ciudad de México",
  coverage: "Atención en México y LATAM",

  /** Contacto de conversión confirmado por el propietario (27 nov 2026): WhatsApp y llamadas. */
  phoneE164: "+525660213375",
  phoneDisplay: "+52 1 56 6021 3375",
  whatsappNumber: "525660213375",

  /** Correo comercial confirmado por el propietario (27 nov 2026). */
  email: "xpertasocial@gmail.com" as string | null,
  /** TODO_OWNER: razón social o nombre fiscal para el aviso de privacidad. */
  legalName: null as string | null,
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hola, vi su sitio y quiero cotizar un proyecto con XpertaSocial.";
