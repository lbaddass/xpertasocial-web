import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let limiter: Ratelimit | null | undefined;

function getLimiter(): Ratelimit | null {
  if (limiter !== undefined) return limiter;
  // Acepta tanto las variables de Upstash como las que inyecta el Marketplace de Vercel.
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
  if (!url || !token) {
    limiter = null;
    return limiter;
  }
  limiter = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(5, "10 m"), // 5 envíos por IP cada 10 minutos
    prefix: "xs-lead",
  });
  return limiter;
}

/** true = permitido. Si Upstash no está configurado o falla, no bloquea. */
export async function checkRateLimit(identifier: string): Promise<boolean> {
  const l = getLimiter();
  if (!l) return true;
  try {
    const { success } = await l.limit(identifier);
    return success;
  } catch (err) {
    console.error("[lead] Rate limit no disponible", err);
    return true;
  }
}
