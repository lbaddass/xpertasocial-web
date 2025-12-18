"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Menu, PhoneCall, X } from "lucide-react";

const navSections = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Piso 1: Infraestructura",
    link: "/piso-1-infraestructura",
  },
  {
    label: "Piso 2: Creative Lab",
    link: "/piso-2-contenido-ia",
  },
  {
    label: "Piso 3: Growth Systems",
    link: "/piso-3-sistemas",
  },
  {
    label: "Facebook Ads: Bitácora",
    link: "/facebook-ads",
  },
  {
    label: "Diagnóstico",
    link: "/diagnostico",
  },
  {
    label: "Perfil Corporativo",
    link: "/perfil-corporativo",
  },
  {
    label: "Identity Lab",
    link: "/identity-lab",
  },
];

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const menuItems = useMemo(() => navSections, []);

  return (
    <>
      <button
        type="button"
        aria-label="Abrir menú"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white p-4 shadow-lg shadow-neonBlue/20 hover:border-neonBlue/60 hover:text-neonBlue transition-colors"
      >
        <Menu size={22} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl text-white">
          <div className="absolute top-6 right-6 flex items-center gap-3">
            <Link
              href="/diagnostico"
              onClick={closeMenu}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] hover:border-neonBlue/60 hover:text-neonBlue"
            >
              Contactar <ArrowRight size={14} />
            </Link>
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={closeMenu}
              className="rounded-full border border-white/10 bg-white/10 p-3 hover:border-neonBlue/60 hover:text-neonBlue"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex h-full flex-col justify-between px-8 pb-10 pt-16 md:px-16 md:pt-24">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-mono tracking-[0.3em] text-neonBlue">MENÚ</p>
                <h2 className="mt-2 text-3xl md:text-5xl font-bold">XPERTASOCIAL</h2>
              </div>

              <div className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.link}
                    href={item.link}
                    onClick={closeMenu}
                    className="block text-2xl md:text-4xl font-semibold tracking-tight hover:text-neonBlue transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 text-sm text-white/70 md:text-base">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-neonBlue" />
                <span>Dubai Digital Park, A1 Building, Dubai, UAE</span>
              </div>
              <a
                href="mailto:hola@xpertasocial.com"
                className="flex items-center gap-2 hover:text-neonBlue"
              >
                <Mail size={16} className="text-neonBlue" /> hola@xpertasocial.com
              </a>
              <a
                href="tel:+525516833133"
                className="flex items-center gap-2 hover:text-neonBlue"
              >
                <PhoneCall size={16} className="text-neonBlue" /> +52 55 1683 3133
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
