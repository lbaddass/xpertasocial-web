import { SERVICIOS, labelOf } from "./options";

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "525660213375";

export function whatsappUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/** Mensaje prellenado con lo que la persona ya escribió en el formulario. */
export function leadWhatsappUrl(
  lead: { nombre?: string; empresa?: string; servicio?: string; plan?: string; mensaje?: string },
  folio?: string,
): string {
  const lines = [
    `Hola, soy ${lead.nombre || "un cliente potencial"}${lead.empresa ? ` de ${lead.empresa}` : ""}.`,
    folio
      ? `Acabo de enviar el formulario de diagnóstico (folio ${folio}).`
      : "Quiero solicitar un diagnóstico.",
    lead.servicio ? `Me interesa: ${labelOf(SERVICIOS, lead.servicio)}.` : "",
    lead.plan ? `Plan: ${lead.plan}.` : "",
    lead.mensaje ? `Contexto: ${lead.mensaje}` : "",
  ].filter(Boolean);
  return whatsappUrl(lines.join("\n"));
}
