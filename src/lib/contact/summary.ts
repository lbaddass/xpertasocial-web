import { CANALES, PRESUPUESTOS, SERVICIOS, URGENCIAS, labelOf } from "./options";
import type { LeadRecord } from "./types";

export function formatFecha(iso: string): string {
  return new Intl.DateTimeFormat("es-MX", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Mexico_City",
  }).format(new Date(iso));
}

export function leadSummaryRows(lead: LeadRecord): [string, string][] {
  const rows: [string, string][] = [
    ["Folio", lead.folio],
    ["Servicio", labelOf(SERVICIOS, lead.servicio)],
    ["Plan de interés", lead.plan],
    ["Nombre", lead.nombre],
    ["Empresa", lead.empresa],
    ["Sitio actual", lead.sitio],
    ["Correo", lead.email],
    ["Teléfono", lead.telefonoE164],
    ["Presupuesto", labelOf(PRESUPUESTOS, lead.presupuesto)],
    ["Cuándo empezar", labelOf(URGENCIAS, lead.urgencia)],
    ["Contactar por", labelOf(CANALES, lead.canal)],
    ["Mensaje", lead.mensaje],
  ];
  return rows.filter(([, v]) => Boolean(v));
}

export function attributionRows(lead: LeadRecord): [string, string][] {
  return Object.entries(lead.attribution).filter(([, v]) => Boolean(v)) as [string, string][];
}
