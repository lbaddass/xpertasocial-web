"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { solutionOptions } from "@/config/catalog";
import { whatsappUrl } from "@/config/site";
import { track } from "@/lib/analytics";

/**
 * Formulario corto que termina en WhatsApp.
 * No depende del servidor: arma el mensaje con los datos y abre la conversación,
 * así ningún contacto se pierde aunque no haya CRM configurado.
 */

type Solution = (typeof solutionOptions)[number];

const STORAGE_KEY = "xs_attribution";

function readAttribution(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const fromUrl: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "gclid", "fbclid"]) {
    const v = params.get(key);
    if (v) fromUrl[key] = v;
  }
  let stored: Record<string, string> = {};
  try {
    stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    stored = {};
  }
  const merged = { landing_page: window.location.pathname, ...stored, ...fromUrl };
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {
    /* almacenamiento no disponible */
  }
  return merged;
}

function buildLeadMessage(
  data: { name: string; company: string; solution: string; plan?: string; message?: string },
  origin?: Record<string, string>,
) {
  const lines = [
    `Hola, soy ${data.name} de ${data.company}.`,
    data.plan ? `Me interesa: ${data.plan}.` : `Me interesa: ${data.solution}.`,
    data.message ? `Detalle: ${data.message}` : "",
    origin?.utm_campaign || origin?.utm_source
      ? `(Origen: ${[origin.utm_source, origin.utm_campaign].filter(Boolean).join(" / ")})`
      : "",
  ];
  return lines.filter(Boolean).join("\n");
}

const fieldClass =
  "mt-2 block w-full rounded-md border border-white/15 bg-void px-3.5 py-3 text-base text-white placeholder:text-white/35 transition focus:border-neonBlue focus:outline-none focus:ring-2 focus:ring-neonBlue/25 aria-[invalid=true]:border-red-400 [&>option]:bg-panel";
const labelClass = "font-mono text-[11px] uppercase tracking-[0.2em] text-white/70";

type Errors = Partial<Record<"name" | "company" | "solution", string>>;

export function LeadForm({ source, defaultSolution, plan }: { source: string; defaultSolution?: Solution; plan?: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const started = useRef(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  useEffect(() => {
    readAttribution();
    // Preselección: ?solucion=… o la prop de la página.
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

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const solution = String(fd.get("solution") || "");
    const message = String(fd.get("message") || "").trim().slice(0, 400);
    const planFromUrl = new URLSearchParams(window.location.search).get("plan") || undefined;

    const found: Errors = {};
    if (name.length < 2) found.name = "Escribe tu nombre.";
    if (company.length < 2) found.company = "Escribe el nombre de tu negocio.";
    if (!(solutionOptions as readonly string[]).includes(solution)) found.solution = "Elige qué necesitas.";
    setErrors(found);
    if (Object.keys(found).length) {
      track("form_error", { form: source, fields: Object.keys(found).join(",") });
      (form.elements.namedItem(Object.keys(found)[0]) as HTMLElement | null)?.focus();
      return;
    }

    const url = whatsappUrl(buildLeadMessage({ name, company, solution, plan: plan ?? planFromUrl, message }, readAttribution()));
    track("generate_lead", { form: source, method: "whatsapp", solution });
    // Debe abrirse dentro del mismo gesto del usuario para que el navegador no lo bloquee.
    const win = window.open(url, "_blank", "noopener");
    if (!win) window.location.href = url;
    setSentUrl(url);
  }

  if (sentUrl) {
    return (
      <div
        role="status"
        className="rounded-xl border border-neonLime/40 bg-panel p-8 shadow-[0_0_30px_-10px_rgba(200,255,0,0.45)]"
        data-testid="lead-success"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neonLime">&gt; Abriendo WhatsApp</p>
        <h3 className="mt-3 text-2xl font-bold text-white">Envía el mensaje para que te atendamos.</h3>
        <p className="mt-3 leading-relaxed text-white/70">Ya lo escribimos por ti. Te respondemos en 1 día hábil o antes.</p>
        <a
          href={sentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-md bg-neonLime px-6 font-bold text-black transition hover:shadow-[0_0_24px_-6px_rgba(200,255,0,0.7)]"
        >
          <MessageCircle aria-hidden="true" size={18} />
          ¿No se abrió? Toca aquí
        </a>
      </div>
    );
  }

  const p = `${source}-`;
  const e = errors;

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      onFocusCapture={onFirstInteraction}
      className="relative rounded-xl border border-white/10 bg-panel/90 p-6 shadow-glow-sm backdrop-blur sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${p}name`} className={labelClass}>
            Nombre
          </label>
          <input
            id={`${p}name`}
            name="name"
            autoComplete="name"
            required
            aria-invalid={e.name ? true : undefined}
            aria-describedby={e.name ? `${p}name-error` : undefined}
            className={fieldClass}
          />
          {e.name ? (
            <p id={`${p}name-error`} className="mt-1.5 text-sm text-red-400">
              {e.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor={`${p}company`} className={labelClass}>
            Negocio o empresa
          </label>
          <input
            id={`${p}company`}
            name="company"
            autoComplete="organization"
            required
            aria-invalid={e.company ? true : undefined}
            aria-describedby={e.company ? `${p}company-error` : undefined}
            className={fieldClass}
          />
          {e.company ? (
            <p id={`${p}company-error`} className="mt-1.5 text-sm text-red-400">
              {e.company}
            </p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${p}solution`} className={labelClass}>
            ¿Qué necesitas?
          </label>
          <select
            id={`${p}solution`}
            name="solution"
            defaultValue=""
            required
            aria-invalid={e.solution ? true : undefined}
            aria-describedby={e.solution ? `${p}solution-error` : undefined}
            className={fieldClass}
          >
            <option value="" disabled>
              Elige una opción
            </option>
            {solutionOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {e.solution ? (
            <p id={`${p}solution-error`} className="mt-1.5 text-sm text-red-400">
              {e.solution}
            </p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${p}message`} className={labelClass}>
            Cuéntanos en una línea <span className="normal-case tracking-normal text-white/60">(opcional)</span>
          </label>
          <textarea
            id={`${p}message`}
            name="message"
            rows={2}
            maxLength={400}
            placeholder="Ej.: tengo una constructora y quiero un sitio para recibir cotizaciones"
            className={fieldClass}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-neonLime px-7 text-lg font-bold text-black transition hover:shadow-[0_0_28px_-6px_rgba(200,255,0,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neonLime"
      >
        <MessageCircle aria-hidden="true" size={20} />
        Continuar en WhatsApp
      </button>
      <p className="mt-3 text-center text-xs leading-relaxed text-white/60">
        Se abre WhatsApp con tu mensaje listo para enviar. Respuesta en 1 día hábil. Consulta el{" "}
        <Link href="/aviso-de-privacidad" className="underline underline-offset-2 hover:text-neonBlue">
          aviso de privacidad
        </Link>
        .
      </p>
    </form>
  );
}
