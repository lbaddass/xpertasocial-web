import { formatPrice, taxNote, type Division, type Plan, type solutionOptions } from "@/config/catalog";
import type { Accent } from "@/components/site/ui";

type Solution = (typeof solutionOptions)[number];

/** Presentación de cada división: color de acento y opción del formulario que preselecciona. */
export const divisionUi: Record<Division["id"], { accent: Accent; solution: Solution; short: string; cta: string }> = {
  "amazon-ads": { accent: "amber", solution: "Amazon Ads", short: "Vende más en Amazon", cta: "Cotizar Amazon Ads" },
  "google-ads": { accent: "lime", solution: "Google Ads", short: "Prospectos en semanas", cta: "Cotizar Google Ads" },
  "meta-ads": { accent: "pink", solution: "Meta Ads (Facebook e Instagram)", short: "Clientes desde Facebook e Instagram", cta: "Cotizar Meta Ads" },
  web: { accent: "cyan", solution: "Sitio web o landing page", short: "Sitios que convierten", cta: "Cotizar mi sitio" },
  "seo-geo-aeo": { accent: "violet", solution: "SEO, GEO y AEO", short: "Tráfico propio y visibilidad en IA", cta: "Cotizar SEO" },
};

/** Enlace al formulario con la solución preseleccionada. */
export function quoteHref(solution: Solution): string {
  return `/diagnostico?solucion=${encodeURIComponent(solution)}`;
}

/** Mensaje de WhatsApp para un plan concreto: el cliente solo tiene que enviarlo. */
export function planMessage(divisionName: string, plan: Plan): string {
  const note = taxNote(plan.price);
  const price = `${formatPrice(plan.price)}${note ? ` ${note}` : ""}`;
  return `Hola, quiero el plan ${divisionName} – ${plan.name} (${price}). Mi negocio es: `;
}

/** Etiqueta del botón de un plan. */
export function planCtaLabel(plan: Plan): string {
  if (plan.price.kind === "quote" || plan.price.kind === "pending") return "Pedir propuesta por WhatsApp";
  return plan.price.kind === "fixed" ? "Lo quiero" : "Quiero este plan";
}
