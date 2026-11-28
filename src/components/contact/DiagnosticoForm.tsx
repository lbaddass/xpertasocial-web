"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { submitLead } from "@/app/diagnostico/actions";
import { getAttribution } from "@/lib/contact/attribution";
import { pushDataLayer } from "@/lib/contact/datalayer";
import {
  CANALES,
  PRESUPUESTOS,
  SERVICIOS,
  URGENCIAS,
  labelOf,
  type Option,
} from "@/lib/contact/options";
import { toE164 } from "@/lib/contact/phone";
import { STEP_FIELDS, collectFieldErrors, leadSchema } from "@/lib/contact/schema";
import { leadWhatsappUrl } from "@/lib/contact/whatsapp";
import { SuccessPanel } from "./SuccessPanel";

/* Ajusta estas clases a los tokens de tu proyecto. */
const ACCENT = "#c6ff00";
const cls = {
  card: "relative rounded-2xl border border-cyan-400/15 bg-[#0e1114]/95 p-6 shadow-[0_0_48px_-16px_rgba(34,211,238,0.35)] sm:p-8",
  label: "mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-white/60",
  input:
    "w-full rounded-md border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#c6ff00]/70 focus:ring-2 focus:ring-[#c6ff00]/20 aria-[invalid=true]:border-red-400/70",
  hint: "mt-1.5 text-xs text-white/45",
  error: "mt-1.5 text-xs text-red-300",
  primary:
    "inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#c6ff00] px-4 py-3 text-sm font-semibold text-black shadow-[0_0_24px_-6px_rgba(198,255,0,0.7)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6ff00] disabled:cursor-not-allowed disabled:opacity-60",
  secondary:
    "inline-flex items-center justify-center rounded-md border border-white/15 px-4 py-3 text-sm text-white/80 transition hover:border-white/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
  chipOn: "border-[#c6ff00] bg-[#c6ff00]/10 text-white",
  chipOff: "border-white/10 bg-black/30 text-white/75 hover:border-white/25",
};

type Values = {
  servicio: string;
  nombre: string;
  empresa: string;
  sitio: string;
  mensaje: string;
  email: string;
  telefono: string;
  presupuesto: string;
  urgencia: string;
  canal: string;
  consentimiento: boolean;
  website: string;
};

const EMPTY: Values = {
  servicio: "",
  nombre: "",
  empresa: "",
  sitio: "",
  mensaje: "",
  email: "",
  telefono: "",
  presupuesto: "",
  urgencia: "",
  canal: "whatsapp",
  consentimiento: false,
  website: "",
};

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type Props = { defaultServicio?: string; plan?: string };

export function DiagnosticoForm({ defaultServicio = "", plan: planProp = "" }: Props) {
  const [step, setStep] = useState<1 | 2>(1);
  const [values, setValues] = useState<Values>({ ...EMPTY, servicio: defaultServicio });
  const [plan, setPlan] = useState(planProp);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<{ message: string; whatsappUrl?: string } | null>(
    null,
  );
  const [token, setToken] = useState(SITE_KEY ? "" : "dev");
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState<{ folio: string; whatsappUrl: string } | null>(null);

  const started = useRef(false);
  const firstRender = useRef(true);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  // Prellenado desde la URL (?servicio=google-ads&plan=...) sin volver dinámica la página.
  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const s = qs.get("servicio");
    const p = qs.get("plan");
    if (s && SERVICIOS.some((o) => o.value === s)) setValues((v) => ({ ...v, servicio: s }));
    if (p) setPlan(p.slice(0, 80));
  }, []);

  // Al cambiar de paso, el foco va al encabezado para lectores de pantalla y teclado.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step]);

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    if (!started.current) {
      started.current = true;
      pushDataLayer({ event: "lead_form_start", servicio: values.servicio || undefined, plan });
    }
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => {
      if (!e[key]) return e;
      const next = { ...e };
      delete next[key];
      return next;
    });
  }

  function validate(fields: readonly string[]) {
    const r = leadSchema.safeParse({ ...values, plan });
    if (r.success) return {};
    const all = collectFieldErrors(r.error.issues);
    return Object.fromEntries(Object.entries(all).filter(([k]) => fields.includes(k)));
  }

  function focusField(key: string) {
    requestAnimationFrame(() => document.getElementById(`f-${key}`)?.focus());
  }

  function goToStep2() {
    const e = validate(STEP_FIELDS[1]);
    if (Object.keys(e).length) {
      setErrors(e);
      focusField(Object.keys(e)[0]);
      return;
    }
    setErrors({});
    setStep(2);
    pushDataLayer({ event: "lead_form_step", step: 2, servicio: values.servicio, plan });
  }

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (step === 1) return goToStep2();
    if (pending) return;

    const e = validate([...STEP_FIELDS[1], ...STEP_FIELDS[2]]);
    if (Object.keys(e).length) {
      setErrors(e);
      const first = Object.keys(e)[0];
      if ((STEP_FIELDS[1] as readonly string[]).includes(first)) setStep(1);
      focusField(first);
      return;
    }
    if (!token) {
      setFormError({ message: "Estamos verificando tu conexión. Intenta de nuevo en un momento." });
      return;
    }

    setFormError(null);
    setPending(true);
    try {
      const res = await submitLead({ ...values, plan }, token, getAttribution());
      if (res.ok) {
        pushDataLayer({
          event: "generate_lead",
          lead_id: res.leadId,
          event_id: res.leadId, // mismo ID que Meta CAPI para deduplicar
          servicio: values.servicio,
          plan,
          presupuesto: values.presupuesto,
          canal: values.canal,
          user_data: {
            email: values.email.trim().toLowerCase(),
            phone_number: toE164(values.telefono) || undefined,
          },
        });
        setSuccess({ folio: res.folio, whatsappUrl: res.whatsappUrl });
        return;
      }
      setErrors(res.fieldErrors ?? {});
      const firstField = res.fieldErrors ? Object.keys(res.fieldErrors)[0] : undefined;
      if (firstField && (STEP_FIELDS[1] as readonly string[]).includes(firstField)) setStep(1);
      setFormError({ message: res.error, whatsappUrl: res.whatsappUrl });
      turnstileRef.current?.reset();
      if (SITE_KEY) setToken("");
    } catch {
      setFormError({
        message: "Se perdió la conexión al enviar. Revisa tu internet o envíalo por WhatsApp.",
        whatsappUrl: leadWhatsappUrl({ ...values, plan }),
      });
    } finally {
      setPending(false);
    }
  }

  if (success) {
    return (
      <SuccessPanel
        nombre={values.nombre}
        email={values.email}
        canal={values.canal}
        folio={success.folio}
        whatsappUrl={success.whatsappUrl}
      />
    );
  }

  const phoneRequired = values.canal === "whatsapp" || values.canal === "llamada";

  return (
    <form onSubmit={handleSubmit} noValidate className={cls.card} aria-busy={pending}>
      {/* Progreso */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-white/50">
          <span>Paso {step} de 2</span>
          <span>{step === 1 ? "Tu proyecto" : "Cómo contactarte"}</span>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1.5" aria-hidden>
          <span className="h-1 rounded-full" style={{ background: ACCENT }} />
          <span
            className="h-1 rounded-full transition-colors"
            style={{ background: step === 2 ? ACCENT : "rgba(255,255,255,0.1)" }}
          />
        </div>
      </div>

      <h2 ref={headingRef} tabIndex={-1} className="mb-5 text-lg font-semibold text-white outline-none">
        {step === 1 ? "Cuéntanos qué necesitas" : "¿Cómo te contactamos?"}
      </h2>

      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="f-website">No llenar</label>
        <input
          id="f-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      {step === 1 ? (
        <div className="space-y-5">
          <ChoiceGroup
            name="servicio"
            legend="¿Qué necesitas?"
            options={SERVICIOS}
            value={values.servicio}
            onChange={(v) => update("servicio", v)}
            error={errors.servicio}
          />
          {plan ? (
            <p className="-mt-2 text-xs text-white/55">
              Plan de interés: <span className="text-white/80">{plan}</span>{" "}
              <button
                type="button"
                className="underline underline-offset-2 hover:text-white"
                onClick={() => setPlan("")}
              >
                Quitar
              </button>
            </p>
          ) : null}

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="f-nombre" label="Nombre" error={errors.nombre}>
              <input
                id="f-nombre"
                className={cls.input}
                autoComplete="name"
                value={values.nombre}
                onChange={(e) => update("nombre", e.target.value)}
                aria-invalid={!!errors.nombre}
                aria-describedby={errors.nombre ? "f-nombre-error" : undefined}
              />
            </Field>
            <Field id="f-empresa" label="Negocio o empresa" error={errors.empresa}>
              <input
                id="f-empresa"
                className={cls.input}
                autoComplete="organization"
                value={values.empresa}
                onChange={(e) => update("empresa", e.target.value)}
                aria-invalid={!!errors.empresa}
                aria-describedby={errors.empresa ? "f-empresa-error" : undefined}
              />
            </Field>
          </div>

          <Field
            id="f-sitio"
            label="Sitio web o tienda actual"
            optional
            hint="Si ya tienes uno, nos ayuda a preparar el diagnóstico."
            error={errors.sitio}
          >
            <input
              id="f-sitio"
              className={cls.input}
              inputMode="url"
              autoComplete="url"
              placeholder="tuempresa.com"
              value={values.sitio}
              onChange={(e) => update("sitio", e.target.value)}
              aria-invalid={!!errors.sitio}
              aria-describedby={errors.sitio ? "f-sitio-error" : "f-sitio-hint"}
            />
          </Field>

          <Field id="f-mensaje" label="Cuéntanos en una línea" optional error={errors.mensaje}>
            <textarea
              id="f-mensaje"
              rows={3}
              className={`${cls.input} resize-y`}
              placeholder="Ej.: tengo una constructora y quiero un sitio para recibir cotizaciones"
              value={values.mensaje}
              onChange={(e) => update("mensaje", e.target.value)}
              aria-invalid={!!errors.mensaje}
              aria-describedby={errors.mensaje ? "f-mensaje-error" : undefined}
            />
          </Field>

          <button type="submit" className={cls.primary}>
            Continuar
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          <p className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-xs text-white/60">
            {labelOf(SERVICIOS, values.servicio)} para{" "}
            <span className="text-white/85">{values.empresa}</span>.{" "}
            <button
              type="button"
              onClick={() => setStep(1)}
              className="underline underline-offset-2 hover:text-white"
            >
              Editar
            </button>
          </p>

          <ChoiceGroup
            name="canal"
            legend="Prefiero que me contacten por"
            options={CANALES}
            value={values.canal}
            onChange={(v) => update("canal", v)}
            error={errors.canal}
            columns="grid-cols-3"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="f-email" label="Correo" error={errors.email}>
              <input
                id="f-email"
                type="email"
                className={cls.input}
                autoComplete="email"
                inputMode="email"
                placeholder="nombre@empresa.com"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "f-email-error" : undefined}
              />
            </Field>
            <Field
              id="f-telefono"
              label="WhatsApp o teléfono"
              optional={!phoneRequired}
              hint="10 dígitos. Si no es de México, incluye la lada."
              error={errors.telefono}
            >
              <input
                id="f-telefono"
                type="tel"
                className={cls.input}
                autoComplete="tel"
                inputMode="tel"
                placeholder="55 1234 5678"
                value={values.telefono}
                onChange={(e) => update("telefono", e.target.value)}
                aria-invalid={!!errors.telefono}
                aria-describedby={errors.telefono ? "f-telefono-error" : "f-telefono-hint"}
              />
            </Field>
          </div>

          <ChoiceGroup
            name="presupuesto"
            legend="Presupuesto aproximado (proyecto o gestión mensual)"
            options={PRESUPUESTOS}
            value={values.presupuesto}
            onChange={(v) => update("presupuesto", v)}
            error={errors.presupuesto}
          />

          <ChoiceGroup
            name="urgencia"
            legend="¿Cuándo quieres empezar?"
            options={URGENCIAS}
            value={values.urgencia}
            onChange={(v) => update("urgencia", v)}
            error={errors.urgencia}
          />

          <div>
            <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-white/65">
              <input
                id="f-consentimiento"
                type="checkbox"
                checked={values.consentimiento}
                onChange={(e) => update("consentimiento", e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#c6ff00]"
                aria-invalid={!!errors.consentimiento}
                aria-describedby={errors.consentimiento ? "f-consentimiento-error" : undefined}
              />
              <span>
                Autorizo a XpertaSocial a usar estos datos para contactarme sobre mi solicitud,
                según el{" "}
                <Link
                  href="/aviso-de-privacidad"
                  target="_blank"
                  className="underline underline-offset-2 hover:text-white"
                >
                  aviso de privacidad
                </Link>
                .
              </span>
            </label>
            {errors.consentimiento ? (
              <p id="f-consentimiento-error" className={cls.error}>
                {errors.consentimiento}
              </p>
            ) : null}
          </div>

          {formError ? (
            <div
              role="alert"
              className="rounded-md border border-red-400/30 bg-red-500/10 px-3 py-2.5 text-sm text-red-100"
            >
              {formError.message}
              {formError.whatsappUrl ? (
                <>
                  {" "}
                  <a
                    href={formError.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-2"
                  >
                    Enviar por WhatsApp
                  </a>
                </>
              ) : null}
            </div>
          ) : null}

          <div className="flex gap-3">
            <button type="button" className={cls.secondary} onClick={() => setStep(1)}>
              Atrás
            </button>
            <button type="submit" className={cls.primary} disabled={pending}>
              {pending ? (
                <>
                  <span
                    aria-hidden
                    className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black"
                  />
                  Enviando solicitud…
                </>
              ) : (
                "Enviar solicitud"
              )}
            </button>
          </div>
        </div>
      )}

      {/* Turnstile en modo "solo si hace falta": casi nadie ve un reto. */}
      {SITE_KEY ? (
        <div className="mt-4 flex justify-center empty:hidden">
          <Turnstile
            ref={turnstileRef}
            siteKey={SITE_KEY}
            onSuccess={setToken}
            onExpire={() => setToken("")}
            onError={() => setToken("")}
            options={{ theme: "dark", language: "es", appearance: "interaction-only", size: "flexible" }}
          />
        </div>
      ) : null}

      <p className="mt-4 text-center text-xs leading-5 text-white/45">
        Respuesta en 1 día hábil. ¿Prefieres hablar ya?{" "}
        <a
          href={leadWhatsappUrl({ ...values, plan })}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-white"
          onClick={() => pushDataLayer({ event: "contact_click", channel: "whatsapp", location: "form" })}
        >
          Escríbenos por WhatsApp
        </a>
      </p>
    </form>
  );
}

/* ---------- piezas de UI ---------- */

function Field({
  id,
  label,
  optional,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={cls.label}>
        {label}
        {optional ? (
          <span className="ml-1.5 normal-case tracking-normal text-white/35">(opcional)</span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className={cls.error}>
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className={cls.hint}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}

function ChoiceGroup({
  name,
  legend,
  options,
  value,
  onChange,
  error,
  columns = "sm:grid-cols-2",
}: {
  name: string;
  legend: string;
  options: readonly Option[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
  columns?: string;
}) {
  return (
    <fieldset aria-describedby={error ? `f-${name}-error` : undefined}>
      <legend className={cls.label}>{legend}</legend>
      <div className={`grid grid-cols-1 gap-2 ${columns}`}>
        {options.map((o, i) => {
          const checked = value === o.value;
          return (
            <label
              key={o.value}
              className={`flex cursor-pointer items-center gap-3 rounded-md border px-3 py-2.5 text-sm transition focus-within:ring-2 focus-within:ring-[#c6ff00]/40 ${
                checked ? cls.chipOn : cls.chipOff
              } ${error && !value ? "border-red-400/50" : ""}`}
            >
              <input
                id={i === 0 ? `f-${name}` : undefined}
                type="radio"
                name={name}
                value={o.value}
                checked={checked}
                onChange={() => onChange(o.value)}
                className="sr-only"
              />
              <span
                aria-hidden
                className={`h-3.5 w-3.5 shrink-0 rounded-full border transition ${
                  checked ? "border-[#c6ff00] bg-[#c6ff00]" : "border-white/30"
                }`}
              />
              {o.label}
            </label>
          );
        })}
      </div>
      {error ? (
        <p id={`f-${name}-error`} className={cls.error}>
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
