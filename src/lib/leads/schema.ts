/**
 * Validación del lead. Se usa igual en el navegador y en el servidor.
 * Sin dependencias: las reglas son pocas y explícitas.
 */
import {
  decisionMakerOptions,
  investmentOptions,
  sectorOptions,
  solutionOptions,
  timelineOptions,
} from "@/config/catalog";

export const trackingKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "landing_page",
  "referrer",
] as const;

export type TrackingKey = (typeof trackingKeys)[number];

export interface LeadInput {
  name: string;
  company: string;
  sector: string;
  website: string;
  solution: string;
  investment: string;
  timeline: string;
  decisionMaker: string;
  email: string;
  phone: string;
  privacy: boolean;
  tracking: Partial<Record<TrackingKey, string>>;
}

export type LeadErrors = Partial<Record<keyof Omit<LeadInput, "tracking">, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function str(v: unknown, max = 200): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function oneOf(value: string, options: readonly string[]): boolean {
  return options.includes(value);
}

/** Normaliza datos crudos (FormData u objeto JSON) a LeadInput. */
export function normalizeLead(raw: Record<string, unknown>): LeadInput {
  const trackingRaw = (raw.tracking && typeof raw.tracking === "object" ? raw.tracking : {}) as Record<string, unknown>;
  const tracking: Partial<Record<TrackingKey, string>> = {};
  for (const key of trackingKeys) {
    const v = str(trackingRaw[key], 500);
    if (v) tracking[key] = v;
  }
  return {
    name: str(raw.name, 120),
    company: str(raw.company, 160),
    sector: str(raw.sector, 80),
    website: str(raw.website, 300),
    solution: str(raw.solution, 80),
    investment: str(raw.investment, 80),
    timeline: str(raw.timeline, 80),
    decisionMaker: str(raw.decisionMaker, 40),
    email: str(raw.email, 200).toLowerCase(),
    phone: str(raw.phone, 40),
    privacy: raw.privacy === true || raw.privacy === "on" || raw.privacy === "true",
    tracking,
  };
}

export function validateLead(lead: LeadInput): LeadErrors {
  const e: LeadErrors = {};
  if (lead.name.length < 2) e.name = "Escribe tu nombre.";
  if (lead.company.length < 2) e.company = "Escribe el nombre de tu empresa.";
  if (!oneOf(lead.sector, sectorOptions)) e.sector = "Elige un sector.";
  if (lead.website && !/^(https?:\/\/)?[^\s.]+\.[^\s]{2,}$/i.test(lead.website)) e.website = "Revisa la dirección del sitio.";
  if (!oneOf(lead.solution, solutionOptions)) e.solution = "Elige la solución que buscas.";
  if (!oneOf(lead.investment, investmentOptions)) e.investment = "Elige un rango (puedes elegir “Aún no lo sé”).";
  if (!oneOf(lead.timeline, timelineOptions)) e.timeline = "Elige una fecha aproximada.";
  if (!oneOf(lead.decisionMaker, decisionMakerOptions)) e.decisionMaker = "Indica si tomas la decisión.";
  if (!EMAIL_RE.test(lead.email)) e.email = "Escribe un correo válido.";
  const digits = lead.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) e.phone = "Escribe un teléfono o WhatsApp de 10 dígitos o con lada internacional.";
  if (!lead.privacy) e.privacy = "Necesitamos tu aceptación del aviso de privacidad.";
  return e;
}
