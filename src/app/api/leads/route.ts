import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { deliverLead } from "@/lib/leads/deliver";
import { normalizeLead, validateLead } from "@/lib/leads/schema";

export const dynamic = "force-dynamic";

/** Campo trampa. Una persona nunca lo ve ni lo llena. */
const HONEYPOT_FIELD = "empresa_web";

// Límite simple por IP en memoria de la instancia (5 envíos / 10 min). No es global entre
// instancias serverless; basta como freno básico junto con el honeypot y Turnstile.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

async function verifyTurnstile(token: unknown, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Integración lista; se activa al definir la clave.
  if (typeof token !== "string" || !token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
      signal: AbortSignal.timeout(5000),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  // Bots: respondemos como si todo hubiera ido bien, sin guardar nada.
  if (typeof raw[HONEYPOT_FIELD] === "string" && raw[HONEYPOT_FIELD] !== "") {
    return NextResponse.json({ ok: true, id: randomUUID() });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const lead = normalizeLead(raw);
  const errors = validateLead(lead);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "validation", fields: errors }, { status: 422 });
  }

  if (!(await verifyTurnstile(raw.turnstileToken, ip))) {
    return NextResponse.json({ ok: false, error: "captcha" }, { status: 400 });
  }

  const stored = {
    ...lead,
    id: randomUUID(),
    receivedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent")?.slice(0, 300) ?? undefined,
  };

  const report = await deliverLead(stored);
  if (!report.delivered) {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 503 });
  }
  return NextResponse.json({ ok: true, id: stored.id });
}
