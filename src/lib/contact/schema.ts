import { z } from "zod";
import { CANALES, PRESUPUESTOS, SERVICIOS, URGENCIAS, type Option } from "./options";
import { phoneDigits } from "./phone";

const oneOf = (list: readonly Option[], message: string) =>
  z.string().refine((v) => list.some((o) => o.value === v), message);

const optionalText = (max: number) =>
  z.string().trim().max(max, `Máximo ${max} caracteres.`).default("");

export const leadSchema = z
  .object({
    servicio: oneOf(SERVICIOS, "Elige qué necesitas."),
    nombre: z.string().trim().min(2, "Escribe tu nombre.").max(80, "Máximo 80 caracteres."),
    empresa: z
      .string()
      .trim()
      .min(2, "Escribe el nombre de tu negocio.")
      .max(120, "Máximo 120 caracteres."),
    sitio: optionalText(200),
    mensaje: optionalText(600),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .max(160, "Máximo 160 caracteres.")
      .email("Escribe un correo válido, por ejemplo nombre@empresa.com."),
    telefono: optionalText(25),
    presupuesto: oneOf(PRESUPUESTOS, "Elige un rango aproximado."),
    urgencia: oneOf(URGENCIAS, "Elige cuándo quieres empezar."),
    canal: oneOf(CANALES, "Elige cómo prefieres que te contactemos."),
    plan: z.string().trim().max(80).default(""),
    consentimiento: z
      .boolean()
      .refine((v) => v === true, "Necesitamos tu autorización para contactarte."),
    // Honeypot: invisible para personas; si trae algo, es un bot.
    website: z.string().default(""),
  })
  .superRefine((d, ctx) => {
    const n = phoneDigits(d.telefono).length;
    const needsPhone = d.canal === "whatsapp" || d.canal === "llamada";
    if (needsPhone && n === 0) {
      ctx.addIssue({
        code: "custom",
        path: ["telefono"],
        message: "Para contactarte por WhatsApp o llamada necesitamos tu número.",
      });
    } else if (n > 0 && (n < 10 || n > 15)) {
      ctx.addIssue({
        code: "custom",
        path: ["telefono"],
        message: "Escribe tu número a 10 dígitos o con lada internacional.",
      });
    }
  });

export type LeadInput = z.input<typeof leadSchema>;
export type LeadData = z.output<typeof leadSchema>;

const attr = z.string().max(300).optional();
export const attributionSchema = z.object({
  utm_source: attr,
  utm_medium: attr,
  utm_campaign: attr,
  utm_term: attr,
  utm_content: attr,
  gclid: attr,
  gbraid: attr,
  wbraid: attr,
  fbclid: attr,
  landing_page: attr,
  referrer: attr,
});
export type Attribution = z.infer<typeof attributionSchema>;

export const STEP_FIELDS = {
  1: ["servicio", "nombre", "empresa", "sitio", "mensaje"],
  2: ["email", "telefono", "presupuesto", "urgencia", "canal", "consentimiento"],
} as const;

/** Primer mensaje de error por campo. Funciona con Zod 3 y Zod 4. */
export function collectFieldErrors(
  issues: readonly { path: readonly PropertyKey[]; message: string }[],
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of issues) {
    const key = String(issue.path[0] ?? "_form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
