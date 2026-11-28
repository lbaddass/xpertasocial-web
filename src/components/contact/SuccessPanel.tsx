"use client";

import { useEffect, useRef } from "react";
import { pushDataLayer } from "@/lib/contact/datalayer";

const CAL_URL = process.env.NEXT_PUBLIC_CAL_URL;

const canalTexto: Record<string, string> = {
  whatsapp: "por WhatsApp",
  llamada: "con una llamada",
  correo: "por correo",
};

type Props = {
  nombre: string;
  email: string;
  canal: string;
  folio: string;
  whatsappUrl: string;
};

export function SuccessPanel({ nombre, email, canal, folio, whatsappUrl }: Props) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [primerNombre] = nombre.trim().split(/\s+/);
  const calUrl = CAL_URL
    ? `${CAL_URL}?${new URLSearchParams({ name: nombre.trim(), email: email.trim() }).toString()}`
    : null;

  useEffect(() => {
    headingRef.current?.focus();
    headingRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <div
      role="status"
      className="rounded-2xl border border-[#c6ff00]/30 bg-[#0e1114]/95 p-6 shadow-[0_0_48px_-16px_rgba(198,255,0,0.4)] sm:p-8"
    >
      <span
        aria-hidden
        className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#c6ff00]/15 text-[#c6ff00]"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      <h2 ref={headingRef} tabIndex={-1} className="text-xl font-semibold text-white outline-none">
        Listo, {primerNombre}. Recibimos tu solicitud.
      </h2>
      <p className="mt-3 text-sm leading-6 text-white/70">
        Te contactamos {canalTexto[canal] ?? ""} en máximo 1 día hábil y enviamos una copia a{" "}
        <span className="text-white">{email}</span>. Tu folio es{" "}
        <span className="font-mono text-white">{folio}</span>.
      </p>

      <p className="mt-6 text-sm text-white/60">Si quieres adelantarte:</p>
      <div className={`mt-3 grid gap-2 ${calUrl ? "sm:grid-cols-2" : ""}`}>
        {calUrl ? (
          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => pushDataLayer({ event: "contact_click", channel: "agenda", location: "success" })}
            className="inline-flex items-center justify-center rounded-md bg-[#c6ff00] px-4 py-3 text-sm font-semibold text-black transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6ff00]"
          >
            Agendar la llamada de 30 min
          </a>
        ) : null}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => pushDataLayer({ event: "contact_click", channel: "whatsapp", location: "success" })}
          className="inline-flex items-center justify-center rounded-md border border-white/15 px-4 py-3 text-sm text-white/85 transition hover:border-white/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
        >
          Continuar por WhatsApp
        </a>
      </div>
    </div>
  );
}
