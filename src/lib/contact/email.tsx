import { Resend } from "resend";
import { LeadConfirmationEmail } from "@/emails/LeadConfirmationEmail";
import { LeadNotificationEmail } from "@/emails/LeadNotificationEmail";
import { SERVICIOS, labelOf } from "./options";
import type { LeadRecord } from "./types";

/**
 * Manda el aviso interno (crítico) y la confirmación al prospecto (no crítica).
 * Lanza error solo si falla el aviso interno.
 */
export async function sendLeadEmails(lead: LeadRecord): Promise<{ confirmOk: boolean }> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.LEADS_FROM_EMAIL;
  const to = (process.env.LEADS_TO_EMAIL ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (!key || !from || to.length === 0) throw new Error("Resend no está configurado");

  const resend = new Resend(key);

  const internal = await resend.emails.send({
    from,
    to,
    replyTo: lead.email,
    subject: `Nuevo lead ${lead.folio}: ${lead.empresa} (${labelOf(SERVICIOS, lead.servicio)})`,
    react: <LeadNotificationEmail lead={lead} />,
  });
  if (internal.error) throw new Error(`Resend (interno): ${internal.error.message}`);

  const confirm = await resend.emails.send({
    from,
    to: [lead.email],
    replyTo: to[0],
    subject: "Recibimos tu solicitud de diagnóstico",
    react: <LeadConfirmationEmail lead={lead} />,
  });
  if (confirm.error) console.warn("[lead] No se envió la confirmación", confirm.error.message);

  return { confirmOk: !confirm.error };
}
