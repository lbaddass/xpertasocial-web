"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pushDataLayer } from "@/lib/contact/datalayer";
import { whatsappUrl } from "@/lib/contact/whatsapp";

const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "+525660213375";
const PHONE_DISPLAY = process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "56 6021 3375";
const CAL_URL = process.env.NEXT_PUBLIC_CAL_URL;

type Item = { key: string; label: string; desc: string; href: string; external?: boolean };

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const items: Item[] = [
    {
      key: "formulario",
      label: "Pedir diagnóstico",
      desc: "Formulario de 1 minuto, respuesta en 1 día hábil",
      href: "/diagnostico#formulario",
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      desc: "Escríbenos ahora",
      href: whatsappUrl("Hola, vi su sitio y quiero cotizar un proyecto con XpertaSocial."),
      external: true,
    },
    ...(CAL_URL
      ? [{ key: "agenda", label: "Agendar llamada", desc: "30 min, sin costo", href: CAL_URL, external: true }]
      : []),
    { key: "llamar", label: "Llamar", desc: PHONE_DISPLAY, href: `tel:${PHONE}` },
  ];

  const track = (channel: string) => {
    pushDataLayer({ event: "contact_click", channel, location: "floating" });
    setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className="fixed right-4 z-50 flex flex-col items-end gap-3 sm:right-6"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))" }}
    >
      {open ? (
        <div
          id={panelId}
          className="w-72 overflow-hidden rounded-xl border border-white/10 bg-[#0e1114]/95 shadow-2xl backdrop-blur"
        >
          <p className="border-b border-white/10 px-4 py-3 text-sm font-medium text-white">
            ¿Cómo prefieres contactarnos?
          </p>
          <ul className="py-1">
            {items.map((item) => {
              const content = (
                <>
                  <span className="block text-sm text-white">{item.label}</span>
                  <span className="block text-xs text-white/50">{item.desc}</span>
                </>
              );
              const className =
                "block px-4 py-2.5 transition hover:bg-white/5 focus-visible:bg-white/5 focus-visible:outline-none";
              return (
                <li key={item.key}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                      onClick={() => track(item.key)}
                    >
                      {content}
                    </a>
                  ) : item.href.startsWith("tel:") ? (
                    <a href={item.href} className={className} onClick={() => track(item.key)}>
                      {content}
                    </a>
                  ) : (
                    <Link href={item.href} className={className} onClick={() => track(item.key)}>
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          if (!open) pushDataLayer({ event: "contact_menu_open" });
          setOpen((o) => !o);
        }}
        className="inline-flex items-center gap-2 rounded-full border border-[#c6ff00]/50 bg-[#0e1114] px-4 py-2.5 text-sm font-semibold text-[#c6ff00] shadow-[0_0_24px_-6px_rgba(198,255,0,0.6)] transition hover:border-[#c6ff00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6ff00]"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path
              d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {open ? "Cerrar" : "¿Hablamos?"}
      </button>
    </div>
  );
}
