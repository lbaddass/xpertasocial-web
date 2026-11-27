// Solo servidor: lo importa únicamente src/app/api/leads/route.ts.
import type { LeadInput } from "./schema";

/**
 * Entrega de leads. Regla: ningún lead se pierde en silencio.
 *
 * Destinos, en orden (cada uno opcional, activado por variables de entorno):
 *  1. CRM: HubSpot (HUBSPOT_PRIVATE_APP_TOKEN) y/o webhook genérico (LEAD_WEBHOOK_URL).
 *  2. Respaldo: Cloudflare R2 (R2_* ya usado por el panel interno) en `leads/AAAA-MM-DD/<id>.json`.
 *  3. Notificación por correo vía Resend (RESEND_API_KEY + LEAD_NOTIFY_EMAIL + LEAD_FROM_EMAIL).
 *  4. Registro en consola solo si LEAD_DESTINATION=log o fuera de producción.
 *
 * Éxito = al menos un destino durable (CRM, webhook o R2) confirmó. Si ninguno confirmó, la API
 * responde 503 y el formulario ofrece WhatsApp; el lead completo queda en los logs del servidor.
 */

export interface StoredLead extends LeadInput {
  id: string;
  receivedAt: string;
  userAgent?: string;
}

export interface DeliveryReport {
  delivered: boolean;
  durable: string[];
  failed: string[];
  notified: boolean;
}

type Attempt = { name: string; durable: boolean; run: () => Promise<void> };

const TIMEOUT_MS = 8000;

async function postJson(url: string, body: unknown, headers: Record<string, string> = {}): Promise<Response> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", ...headers },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  return res;
}

function leadSummary(lead: StoredLead): string {
  const t = Object.entries(lead.tracking)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  return [
    `Nombre: ${lead.name}`,
    `Empresa: ${lead.company}`,
    `Sector: ${lead.sector}`,
    `Sitio actual: ${lead.website || "—"}`,
    `Solución: ${lead.solution}`,
    `Inversión: ${lead.investment}`,
    `Fecha deseada: ${lead.timeline}`,
    `¿Decide?: ${lead.decisionMaker}`,
    `Correo: ${lead.email}`,
    `Teléfono/WhatsApp: ${lead.phone}`,
    `Recibido: ${lead.receivedAt} (id ${lead.id})`,
    t ? `\nAtribución:\n${t}` : "",
  ].join("\n");
}

function hubspotAttempt(token: string, lead: StoredLead): Attempt {
  return {
    name: "hubspot",
    durable: true,
    run: async () => {
      const [firstname, ...rest] = lead.name.split(" ");
      const res = await postJson(
        "https://api.hubapi.com/crm/v3/objects/contacts",
        {
          properties: {
            email: lead.email,
            firstname,
            lastname: rest.join(" "),
            phone: lead.phone,
            company: lead.company,
            website: lead.website,
            hs_lead_status: "NEW",
          },
        },
        { authorization: `Bearer ${token}` },
      );
      // 409 = el contacto ya existe: el CRM ya lo tiene; los detalles viajan por R2 y correo.
      if (!res.ok && res.status !== 409) throw new Error(`HubSpot ${res.status}`);
    },
  };
}

function webhookAttempt(url: string, lead: StoredLead): Attempt {
  return {
    name: "webhook",
    durable: true,
    run: async () => {
      const res = await postJson(url, { type: "lead", lead });
      if (!res.ok) throw new Error(`Webhook ${res.status}`);
    },
  };
}

function r2Attempt(lead: StoredLead): Attempt {
  return {
    name: "r2",
    durable: true,
    run: async () => {
      const { uploadFile } = await import("@/lib/r2");
      const day = lead.receivedAt.slice(0, 10);
      await uploadFile(`leads/${day}/${lead.id}.json`, JSON.stringify(lead, null, 2), "application/json");
    },
  };
}

function logAttempt(lead: StoredLead): Attempt {
  return {
    name: "log",
    durable: true,
    run: async () => {
      console.info("[lead]", JSON.stringify(lead));
    },
  };
}

async function sendEmail(lead: StoredLead, report: DeliveryReport): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;
  if (!key || !to || !from) return false;
  const status = report.failed.length
    ? `⚠️ Falló: ${report.failed.join(", ")}. Guardado en: ${report.durable.join(", ") || "ningún destino"}.`
    : `Guardado en: ${report.durable.join(", ")}.`;
  try {
    const res = await postJson(
      "https://api.resend.com/emails",
      {
        from,
        to: [to],
        reply_to: lead.email,
        subject: `Nuevo lead: ${lead.company} — ${lead.solution}`,
        text: `${status}\n\n${leadSummary(lead)}`,
      },
      { authorization: `Bearer ${key}` },
    );
    return res.ok;
  } catch {
    return false;
  }
}

function r2Configured(): boolean {
  return Boolean(
    process.env.R2_ACCOUNT_ID && process.env.R2_ACCESS_KEY_ID && process.env.R2_SECRET_ACCESS_KEY && process.env.R2_BUCKET_NAME,
  );
}

export function logDestinationEnabled(): boolean {
  return process.env.LEAD_DESTINATION === "log" || process.env.NODE_ENV !== "production";
}

export async function deliverLead(lead: StoredLead): Promise<DeliveryReport> {
  const attempts: Attempt[] = [];
  if (process.env.HUBSPOT_PRIVATE_APP_TOKEN) attempts.push(hubspotAttempt(process.env.HUBSPOT_PRIVATE_APP_TOKEN, lead));
  if (process.env.LEAD_WEBHOOK_URL) attempts.push(webhookAttempt(process.env.LEAD_WEBHOOK_URL, lead));
  if (r2Configured()) attempts.push(r2Attempt(lead));
  if (logDestinationEnabled()) attempts.push(logAttempt(lead));

  const results = await Promise.allSettled(attempts.map((a) => a.run()));
  const report: DeliveryReport = { delivered: false, durable: [], failed: [], notified: false };
  results.forEach((r, i) => {
    const a = attempts[i];
    if (r.status === "fulfilled") {
      if (a.durable) report.durable.push(a.name);
    } else {
      report.failed.push(a.name);
      console.error(`[lead] destino ${a.name} falló para ${lead.id}:`, r.reason);
    }
  });
  report.delivered = report.durable.length > 0;
  report.notified = await sendEmail(lead, report);

  if (!report.delivered) {
    // Último recurso: el lead completo queda en los logs del servidor para recuperarlo a mano.
    console.error("[lead:UNDELIVERED]", JSON.stringify(lead));
  }
  return report;
}
