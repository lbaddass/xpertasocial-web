"use server";

import { cookies, headers } from "next/headers";
import { sendLeadEmails } from "@/lib/contact/email";
import { upsertHubSpotLead } from "@/lib/contact/hubspot";
import { sendMetaLead } from "@/lib/contact/meta-capi";
import { toE164 } from "@/lib/contact/phone";
import { checkRateLimit } from "@/lib/contact/rate-limit";
import { attributionSchema, collectFieldErrors, leadSchema } from "@/lib/contact/schema";
import { verifyTurnstile } from "@/lib/contact/turnstile";
import type { LeadRecord } from "@/lib/contact/types";
import { leadWhatsappUrl } from "@/lib/contact/whatsapp";

export type SubmitLeadResult =
  | { ok: true; leadId: string; folio: string; whatsappUrl: string }
  | { ok: false; error: string; fieldErrors?: Record<string, string>; whatsappUrl?: string };

export async function submitLead(
  input: unknown,
  turnstileToken: string,
  attribution: unknown,
): Promise<SubmitLeadResult> {
  const h = await headers();
  const c = await cookies();
  const ip =
    h.get("cf-connecting-ip") ??
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    h.get("x-real-ip") ??
    undefined;

  if (!(await checkRateLimit(ip ?? "anon"))) {
    return {
      ok: false,
      error:
        "Recibimos varias solicitudes desde tu conexión. Espera unos minutos o escríbenos por WhatsApp.",
    };
  }

  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      error: "Revisa los campos marcados.",
      fieldErrors: collectFieldErrors(parsed.error.issues),
    };
  }
  const data = parsed.data;

  // Honeypot: respondemos "éxito" al bot sin registrar nada.
  if (data.website) {
    return { ok: true, leadId: "ok", folio: "XS-OK", whatsappUrl: leadWhatsappUrl(data) };
  }

  if (!(await verifyTurnstile(turnstileToken, ip))) {
    return {
      ok: false,
      error: "No pudimos verificar que eres una persona. Recarga la página e intenta de nuevo.",
    };
  }

  const id = crypto.randomUUID();
  const folio = `XS-${id.slice(0, 6).toUpperCase()}`;
  const { website: _hp, consentimiento: _c, ...rest } = data;

  const lead: LeadRecord = {
    ...rest,
    id,
    folio,
    createdAt: new Date().toISOString(),
    telefonoE164: toE164(data.telefono),
    attribution: attributionSchema.safeParse(attribution).data ?? {},
    pageUrl: h.get("referer") ?? undefined,
    ip,
    userAgent: h.get("user-agent") ?? undefined,
  };

  const whatsappUrl = leadWhatsappUrl(lead, folio);

  // Las tres integraciones corren en paralelo; ninguna bloquea a las demás.
  const [crm, mail, meta] = await Promise.allSettled([
    upsertHubSpotLead(lead),
    sendLeadEmails(lead),
    sendMetaLead({ lead, fbp: c.get("_fbp")?.value, fbc: c.get("_fbc")?.value }),
  ]);

  if (crm.status === "rejected") console.error(`[lead ${folio}] HubSpot`, crm.reason);
  if (mail.status === "rejected") console.error(`[lead ${folio}] Correo`, mail.reason);
  if (meta.status === "rejected") console.error(`[lead ${folio}] Meta CAPI`, meta.reason);

  // El lead cuenta como registrado si quedó en el CRM o llegó el aviso por correo.
  if (crm.status === "rejected" && mail.status === "rejected") {
    console.error(`[lead ${folio}] SIN REGISTRAR`, JSON.stringify(lead));
    return {
      ok: false,
      error:
        "No pudimos registrar tu solicitud en este momento. Envíala por WhatsApp y te respondemos igual.",
      whatsappUrl,
    };
  }

  return { ok: true, leadId: id, folio, whatsappUrl };
}
