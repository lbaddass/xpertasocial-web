export const phoneDigits = (raw?: string) => (raw ?? "").replace(/\D/g, "");

/** Normaliza a E.164. Un número de 10 dígitos se asume de México (+52). */
export function toE164(raw?: string): string {
  const d = phoneDigits(raw);
  if (!d) return "";
  if (d.length === 10) return `+52${d}`;
  if (d.length === 13 && d.startsWith("521")) return `+52${d.slice(3)}`;
  return `+${d}`;
}
