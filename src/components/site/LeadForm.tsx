"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import {
  decisionMakerOptions,
  investmentOptions,
  sectorOptions,
  solutionOptions,
  timelineOptions,
} from "@/config/catalog";
import { track } from "@/lib/analytics";
import { normalizeLead, trackingKeys, validateLead, type LeadErrors, type TrackingKey } from "@/lib/leads/schema";
import { WhatsAppLink } from "./ContactLinks";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const STORAGE_KEY = "xs_attribution";

type Status = "idle" | "sending" | "success" | "error";

function readAttribution(): Partial<Record<TrackingKey, string>> {
  const params = new URLSearchParams(window.location.search);
  const fromUrl: Partial<Record<TrackingKey, string>> = {};
  for (const key of trackingKeys) {
    const v = params.get(key);
    if (v) fromUrl[key] = v;
  }
  let stored: Partial<Record<TrackingKey, string>> = {};
  try {
    stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    stored = {};
  }
  // Primer contacto de la sesión: se conservan UTM/gclid de la página de entrada.
  const merged = {
    landing_page: window.location.pathname,
    referrer: document.referrer || undefined,
    ...stored,
    ...fromUrl,
  };
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {
    /* almacenamiento no disponible */
  }
  return merged;
}

const fieldClass =
  "mt-2 block w-full rounded-md border border-white/15 bg-void px-3.5 py-3 text-base text-white placeholder:text-white/35 transition focus:border-neonBlue focus:outline-none focus:ring-2 focus:ring-neonBlue/25 aria-[invalid=true]:border-red-400 [&>option]:bg-panel";

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
        {label} {optional ? <span className="normal-case tracking-normal text-white/60">(opcional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Select({ id, name, options, error }: { id: string; name: string; options: readonly string[]; error?: string }) {
  return (
    <select
      id={id}
      name={name}
      defaultValue=""
      required
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className={fieldClass}
    >
      <option value="" disabled>
        Elige una opción
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

export function LeadForm({ source, defaultSolution }: { source: string; defaultSolution?: (typeof solutionOptions)[number] }) {
  const formRef = useRef<HTMLFormElement>(null);
  const started = useRef(false);
  const leadSent = useRef(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<LeadErrors>({});
  const [errorMessage, setErrorMessage] = useState("");
  // Guarda UTM/gclid de la página de entrada en cuanto carga el formulario.
  useEffect(() => {
    readAttribution();
  }, []);

  // Preselecciona la solución: ?solucion=… (desde los CTA de cada servicio) o la prop de la página.
  useEffect(() => {
    const el = formRef.current?.elements.namedItem("solution") as HTMLSelectElement | null;
    if (!el) return;
    const fromUrl = new URLSearchParams(window.location.search).get("solucion");
    const value = fromUrl && (solutionOptions as readonly string[]).includes(fromUrl) ? fromUrl : defaultSolution;
    if (value) el.value = value;
  }, [defaultSolution]);

  function onFirstInteraction() {
    if (started.current) return;
    started.current = true;
    track("form_start", { form: source });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const raw: Record<string, unknown> = Object.fromEntries(data.entries());
    raw.privacy = data.get("privacy") === "on";
    raw.tracking = readAttribution();
    raw.turnstileToken = data.get("cf-turnstile-response") ?? undefined;

    const lead = normalizeLead(raw);
    const found = validateLead(lead);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      track("form_error", { form: source, fields: Object.keys(found).join(",") });
      const first = Object.keys(found)[0];
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(raw),
      });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; id?: string; fields?: LeadErrors; error?: string };
      if (res.ok && body.ok) {
        if (!leadSent.current) {
          leadSent.current = true;
          track("generate_lead", { form: source, solution: lead.solution, lead_id: body.id });
        }
        setStatus("success");
        return;
      }
      if (body.fields) setErrors(body.fields);
      track("form_error", { form: source, fields: body.error ?? `http_${res.status}` });
      setErrorMessage(
        res.status === 429
          ? "Recibimos varios envíos seguidos. Espera unos minutos o escríbenos por WhatsApp."
          : res.status === 422
            ? "Revisa los campos marcados."
            : "No pudimos registrar tu solicitud. Escríbenos por WhatsApp y te atendemos de inmediato.",
      );
      setStatus("error");
    } catch {
      track("form_error", { form: source, fields: "network" });
      setErrorMessage("No hay conexión con el servidor. Escríbenos por WhatsApp y te atendemos de inmediato.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl border border-neonLime/40 bg-panel p-8 shadow-[0_0_30px_-10px_rgba(200,255,0,0.45)]" data-testid="lead-success">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neonLime">&gt; Solicitud registrada</p>
        <h3 className="mt-3 text-2xl font-bold text-white">Recibimos tu solicitud.</h3>
        <p className="mt-3 leading-relaxed text-white/70">
          Te contactamos en un día hábil por WhatsApp o correo para agendar la llamada de diagnóstico. Si es urgente, escríbenos ahora.
        </p>
        <WhatsAppLink
          placement={`${source}_success`}
          message="Hola, acabo de enviar el formulario de diagnóstico en su sitio."
          className="mt-6 inline-flex min-h-12 items-center rounded-md bg-neonLime px-6 font-bold text-black transition hover:shadow-[0_0_24px_-6px_rgba(200,255,0,0.7)]"
        >
          Escribir por WhatsApp →
        </WhatsAppLink>
      </div>
    );
  }

  const e = errors;
  const p = `${source}-`;

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      onFocusCapture={onFirstInteraction}
      className="relative rounded-xl border border-white/10 bg-panel/90 p-6 shadow-glow-sm backdrop-blur sm:p-8"
      aria-describedby={`${p}nota`}
    >
      {TURNSTILE_SITE_KEY ? <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer /> : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${p}name`} label="Nombre" error={e.name}>
          <input id={`${p}name`} name="name" autoComplete="name" required aria-invalid={e.name ? true : undefined} aria-describedby={e.name ? `${p}name-error` : undefined} className={fieldClass} />
        </Field>
        <Field id={`${p}company`} label="Empresa" error={e.company}>
          <input id={`${p}company`} name="company" autoComplete="organization" required aria-invalid={e.company ? true : undefined} aria-describedby={e.company ? `${p}company-error` : undefined} className={fieldClass} />
        </Field>
        <Field id={`${p}sector`} label="Sector" error={e.sector}>
          <Select id={`${p}sector`} name="sector" options={sectorOptions} error={e.sector} />
        </Field>
        <Field id={`${p}website`} label="Sitio actual" optional error={e.website}>
          <input id={`${p}website`} name="website" inputMode="url" placeholder="tuempresa.com" aria-invalid={e.website ? true : undefined} aria-describedby={e.website ? `${p}website-error` : undefined} className={fieldClass} />
        </Field>
        <Field id={`${p}solution`} label="Solución que buscas" error={e.solution}>
          <Select id={`${p}solution`} name="solution" options={solutionOptions} error={e.solution} />
        </Field>
        <Field id={`${p}investment`} label="Rango de inversión" error={e.investment}>
          <Select id={`${p}investment`} name="investment" options={investmentOptions} error={e.investment} />
        </Field>
        <Field id={`${p}timeline`} label="¿Para cuándo lo necesitas?" error={e.timeline}>
          <Select id={`${p}timeline`} name="timeline" options={timelineOptions} error={e.timeline} />
        </Field>
        <Field id={`${p}decisionMaker`} label="¿Tomas la decisión?" error={e.decisionMaker}>
          <Select id={`${p}decisionMaker`} name="decisionMaker" options={decisionMakerOptions} error={e.decisionMaker} />
        </Field>
        <Field id={`${p}email`} label="Correo" error={e.email}>
          <input id={`${p}email`} name="email" type="email" autoComplete="email" required aria-invalid={e.email ? true : undefined} aria-describedby={e.email ? `${p}email-error` : undefined} className={fieldClass} />
        </Field>
        <Field id={`${p}phone`} label="Teléfono o WhatsApp" error={e.phone}>
          <input id={`${p}phone`} name="phone" type="tel" autoComplete="tel" placeholder="55 1234 5678" required aria-invalid={e.phone ? true : undefined} aria-describedby={e.phone ? `${p}phone-error` : undefined} className={fieldClass} />
        </Field>
      </div>

      {/* Trampa para bots: oculta a personas y a lectores de pantalla. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${p}hp`}>No llenar</label>
        <input id={`${p}hp`} name="empresa_web" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6">
        <label className="flex gap-3 text-sm leading-relaxed text-white/75">
          <input
            type="checkbox"
            name="privacy"
            required
            aria-invalid={e.privacy ? true : undefined}
            aria-describedby={e.privacy ? `${p}privacy-error` : undefined}
            className="mt-1 h-4 w-4 flex-none accent-[#00E5FF]"
          />
          <span>
            Acepto el{" "}
            <Link href="/aviso-de-privacidad" className="font-semibold text-neonBlue underline underline-offset-2" target="_blank">
              aviso de privacidad
            </Link>{" "}
            y que XpertaSocial me contacte sobre esta solicitud.
          </span>
        </label>
        {e.privacy ? (
          <p id={`${p}privacy-error`} className="mt-1.5 text-sm text-red-400">
            {e.privacy}
          </p>
        ) : null}
      </div>

      {TURNSTILE_SITE_KEY ? <div className="cf-turnstile mt-6" data-sitekey={TURNSTILE_SITE_KEY} data-language="es" /> : null}

      {status === "error" && errorMessage ? (
        <div role="alert" className="mt-6 rounded-md border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-200" data-testid="lead-error">
          {errorMessage}{" "}
          <WhatsAppLink placement={`${source}_error`} className="font-semibold underline">
            Abrir WhatsApp
          </WhatsAppLink>
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-neonBlue px-7 font-bold text-black transition hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neonBlue disabled:opacity-60"
        >
          {status === "sending" ? "Enviando…" : "Solicitar diagnóstico"}
        </button>
        <p id={`${p}nota`} className="font-mono text-xs uppercase tracking-wider text-white/50">
          Respuesta en 1 día hábil. Sin compromiso de contratación.
        </p>
      </div>
    </form>
  );
}
