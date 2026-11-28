import type { Attribution } from "./schema";

const KEY = "xs_attribution";
const TTL = 30 * 24 * 60 * 60 * 1000; // 30 días
const CLICK_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
] as const;

const clip = (v: string) => v.slice(0, 300);

function read(): Attribution | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const { ts, data } = JSON.parse(raw) as { ts: number; data: Attribution };
    if (Date.now() - ts > TTL) {
      window.localStorage.removeItem(KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function write(data: Attribution) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {
    /* modo privado o storage bloqueado: seguimos sin atribución */
  }
}

/** Guarda el último toque con parámetros de campaña, o el primero si nunca hubo ninguno. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  try {
    const url = new URL(window.location.href);
    const found: Attribution = {};
    for (const p of CLICK_PARAMS) {
      const v = url.searchParams.get(p);
      if (v) found[p] = clip(v);
    }
    if (Object.keys(found).length > 0 || !read()) {
      const ref = document.referrer.startsWith(window.location.origin) ? "" : document.referrer;
      write({ ...found, landing_page: clip(url.pathname + url.search), referrer: clip(ref) });
    }
  } catch {
    /* ignorar */
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  return read() ?? {};
}
