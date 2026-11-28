import { createHash } from "node:crypto";
import { phoneDigits } from "./phone";
import type { LeadRecord } from "./types";

const sha256 = (v: string) => createHash("sha256").update(v.trim().toLowerCase()).digest("hex");

type MetaArgs = {
  lead: LeadRecord;
  fbp?: string;
  fbc?: string;
};

/**
 * Envía el evento Lead a la Conversions API de Meta.
 * El event_id es el mismo ID del lead que se manda al dataLayer, para que
 * Meta deduplique el evento del píxel (navegador) y el del servidor.
 */
export async function sendMetaLead({ lead, fbp, fbc }: MetaArgs): Promise<"sent" | "skipped"> {
  const pixelId = process.env.META_PIXEL_ID;
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !token) return "skipped";

  const version = process.env.META_GRAPH_VERSION ?? "v23.0";
  const nowSec = Math.floor(Date.now() / 1000);

  // Si no existe la cookie _fbc pero llegó con fbclid, la construimos.
  const clickId =
    fbc || (lead.attribution.fbclid ? `fb.1.${Date.now()}.${lead.attribution.fbclid}` : undefined);

  const [firstname] = lead.nombre.split(/\s+/);
  const phone = phoneDigits(lead.telefonoE164);

  const user_data: Record<string, unknown> = {
    em: [sha256(lead.email)],
    fn: [sha256(firstname)],
    country: [sha256("mx")],
    client_ip_address: lead.ip,
    client_user_agent: lead.userAgent,
    fbp,
    fbc: clickId,
  };
  if (phone) user_data.ph = [sha256(phone)];
  for (const k of Object.keys(user_data)) if (user_data[k] === undefined) delete user_data[k];

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: "Lead",
        event_time: nowSec,
        event_id: lead.id,
        action_source: "website",
        event_source_url: lead.pageUrl,
        user_data,
        custom_data: { content_name: lead.servicio, content_category: lead.plan || undefined },
      },
    ],
  };
  if (process.env.META_TEST_EVENT_CODE) payload.test_event_code = process.env.META_TEST_EVENT_CODE;

  const res = await fetch(
    `https://graph.facebook.com/${version}/${pixelId}/events?access_token=${encodeURIComponent(token)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    },
  );
  if (!res.ok) throw new Error(`Meta CAPI ${res.status}: ${(await res.text()).slice(0, 300)}`);
  return "sent";
}
