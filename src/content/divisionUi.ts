import type { Division, solutionOptions } from "@/config/catalog";
import type { Accent } from "@/components/site/ui";

type Solution = (typeof solutionOptions)[number];

/** Presentación de cada división: color de acento y opción del formulario que preselecciona. */
export const divisionUi: Record<Division["id"], { accent: Accent; solution: Solution; short: string; cta: string }> = {
  "amazon-ads": { accent: "amber", solution: "Amazon Ads", short: "Vende más en Amazon", cta: "Cotizar Amazon Ads" },
  "google-ads": { accent: "lime", solution: "Google Ads", short: "Prospectos en semanas", cta: "Cotizar Google Ads" },
  web: { accent: "cyan", solution: "Sitio web o landing page", short: "Sitios que convierten", cta: "Cotizar mi sitio" },
  "seo-geo-aeo": { accent: "pink", solution: "SEO, GEO y AEO", short: "Tráfico propio y visibilidad en IA", cta: "Cotizar SEO" },
};

/** Enlace al formulario con la solución preseleccionada. */
export function quoteHref(solution: Solution): string {
  return `/diagnostico?solucion=${encodeURIComponent(solution)}`;
}
