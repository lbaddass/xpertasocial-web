export type Option = { value: string; label: string };

export const SERVICIOS = [
  { value: "web", label: "Sitio web o landing page" },
  { value: "ecommerce", label: "Tienda en línea (Shopify o a medida)" },
  { value: "google-ads", label: "Google Ads" },
  { value: "meta-ads", label: "Meta Ads (Facebook e Instagram)" },
  { value: "amazon-ads", label: "Amazon Ads" },
  { value: "seo", label: "SEO, GEO y AEO" },
  { value: "sistema", label: "Sistema integrado (varias piezas)" },
  { value: "no-se", label: "Aún no lo sé" },
] as const satisfies readonly Option[];

export const PRESUPUESTOS = [
  { value: "lt5k", label: "Menos de $5,000 MXN" },
  { value: "5-15k", label: "$5,000 a $15,000 MXN" },
  { value: "15-40k", label: "$15,000 a $40,000 MXN" },
  { value: "gt40k", label: "Más de $40,000 MXN" },
  { value: "nd", label: "Aún no lo defino" },
] as const satisfies readonly Option[];

export const URGENCIAS = [
  { value: "ya", label: "Lo antes posible" },
  { value: "mes", label: "Este mes" },
  { value: "trimestre", label: "En los próximos 3 meses" },
  { value: "explorando", label: "Solo estoy explorando" },
] as const satisfies readonly Option[];

export const CANALES = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "llamada", label: "Llamada" },
  { value: "correo", label: "Correo" },
] as const satisfies readonly Option[];

export function labelOf(list: readonly Option[], value?: string): string {
  return list.find((o) => o.value === value)?.label ?? value ?? "";
}

/**
 * Enlace a /diagnostico con el servicio y el plan precargados.
 * Úsalo en los botones "Lo quiero" / "Pedir auditoría" en lugar de wa.me:
 *   diagnosticoHref("google-ads", "Google Ads · Performance")
 */
export function diagnosticoHref(servicio?: string, plan?: string): string {
  const qs = new URLSearchParams();
  if (servicio) qs.set("servicio", servicio);
  if (plan) qs.set("plan", plan);
  const q = qs.toString();
  return `/diagnostico${q ? `?${q}` : ""}#formulario`;
}
