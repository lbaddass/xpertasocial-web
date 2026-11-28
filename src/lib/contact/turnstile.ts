const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile(token: string, ip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // Si aún no se configuran las claves de Turnstile en el entorno,
    // se permite el envío apoyándose en el honeypot para no bloquear usuarios.
    return true;
  }
  if (!token || token === "dev") return false;

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);

  try {
    const res = await fetch(VERIFY_URL, { method: "POST", body, cache: "no-store" });
    const data = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    if (!data.success) console.warn("[lead] Turnstile rechazado", data["error-codes"]);
    return data.success === true;
  } catch (err) {
    console.error("[lead] Error verificando Turnstile", err);
    return false;
  }
}
