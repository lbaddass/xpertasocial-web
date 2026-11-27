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

export function track(event: SiteEvent, params: Record<string, string | number | undefined> = {}): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
