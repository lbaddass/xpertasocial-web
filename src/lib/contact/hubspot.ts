import { attributionRows, leadSummaryRows } from "./summary";
import type { LeadRecord } from "./types";

const BASE = "https://api.hubapi.com";
const NOTE_TO_CONTACT = 202; // associationTypeId definido por HubSpot (nota → contacto)

type HsResponse = { ok: boolean; status: number; json: any; text: string };

async function call(path: string, method: string, body: unknown): Promise<HsResponse> {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) throw new Error("HUBSPOT_PRIVATE_APP_TOKEN no configurado");
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });
  const text = await res.text();
  let json: any = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    /* respuesta no JSON */
  }
  return { ok: res.ok, status: res.status, json, text };
}

function compact(o: Record<string, string | undefined>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(o).filter(([, v]) => v !== undefined && v !== ""),
  ) as Record<string, string>;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function noteHtml(lead: LeadRecord): string {
  const rows = leadSummaryRows(lead)
    .map(([k, v]) => `<strong>${esc(k)}:</strong> ${esc(v)}`)
    .join("<br>");
  const attr = attributionRows(lead)
    .map(([k, v]) => `${esc(k)}: ${esc(v)}`)
    .join("<br>");
  return `<p><strong>Solicitud de diagnóstico desde xpertasocial.com</strong></p><p>${rows}</p>${
    attr ? `<p><em>Origen</em><br>${attr}</p>` : ""
  }`;
}

/**
 * Crea el contacto (o actualiza uno existente por correo) y le asocia una nota
 * con el detalle de la solicitud. Solo usa propiedades estándar de HubSpot,
 * así que no necesitas crear propiedades personalizadas.
 */
export async function upsertHubSpotLead(
  lead: LeadRecord,
): Promise<{ contactId: string; created: boolean }> {
  const [firstname, ...rest] = lead.nombre.split(/\s+/);
  const base = compact({
    email: lead.email,
    firstname,
    lastname: rest.join(" "),
    company: lead.empresa,
    phone: lead.telefonoE164,
    website: lead.sitio,
  });

  const create = await call("/crm/v3/objects/contacts", "POST", {
    properties: { ...base, lifecyclestage: "lead", hs_lead_status: "NEW" },
  });

  let contactId: string;
  let created = true;

  if (create.ok) {
    contactId = String(create.json.id);
  } else if (create.status === 409) {
    // El contacto ya existe: HubSpot devuelve su ID en el mensaje.
    const match = /Existing ID:\s*(\d+)/.exec(create.json?.message ?? create.text);
    if (!match) throw new Error(`HubSpot 409 sin ID: ${create.text.slice(0, 300)}`);
    contactId = match[1];
    created = false;
    // No tocamos lifecyclestage para no degradar a clientes existentes.
    const update = await call(`/crm/v3/objects/contacts/${contactId}`, "PATCH", {
      properties: compact({ company: lead.empresa, phone: lead.telefonoE164, website: lead.sitio }),
    });
    if (!update.ok) console.warn("[lead] HubSpot no actualizó el contacto", update.status);
  } else {
    throw new Error(`HubSpot ${create.status}: ${create.text.slice(0, 500)}`);
  }

  const note = await call("/crm/v3/objects/notes", "POST", {
    properties: { hs_timestamp: lead.createdAt, hs_note_body: noteHtml(lead) },
    associations: [
      {
        to: { id: contactId },
        types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: NOTE_TO_CONTACT }],
      },
    ],
  });
  if (!note.ok) console.warn("[lead] HubSpot no creó la nota", note.status, note.text.slice(0, 300));

  return { contactId, created };
}
