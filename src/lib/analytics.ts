"use client";

/**
 * Eventos de medición del sitio comercial.
 * La configuración completa (Consent Mode v2, IDs por entorno, conversiones de Google Ads) se hace en
 * la Sesión 4. Aquí solo se emiten los eventos con nombres estables.
 */
export type SiteEvent =
  | "generate_lead"
  | "click_whatsapp"
  | "click_phone"
  | "form_start"
  | "form_error"
  | "view_service"
  | "select_product";

/** Equivalencias con los eventos estándar de Meta Pixel. */
const metaEvent: Partial<Record<SiteEvent, string>> = {
  generate_lead: "Lead",
  click_whatsapp: "Contact",
  click_phone: "Contact",
};

type Fbq = (command: "track", event: string, params?: Record<string, unknown>) => void;

export function track(event: SiteEvent, params: Record<string, string | number | undefined> = {}): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  const mapped = metaEvent[event];
  if (typeof fbq === "function" && mapped) {
    fbq("track", mapped, { content_name: String(params.placement ?? params.form ?? "") });
  }
}
