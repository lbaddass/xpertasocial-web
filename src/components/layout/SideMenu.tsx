"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

const navSections = [
  { label: "Home", link: "/" },
  { label: "Catálogo IA", link: "/catalogo-ia" },
  { label: "Piso 1: Infraestructura", link: "/piso-1-infraestructura" },
  { label: "Piso 2: Creative Lab", link: "/piso-2-contenido-ia" },
  { label: "Piso 3: Growth Systems", link: "/piso-3-sistemas" },
  { label: "Facebook Ads: Bitácora", link: "/facebook-ads" },
  { label: "Diagnóstico", link: "/diagnostico" },
  { label: "Perfil Corporativo", link: "/perfil-corporativo" },
  { label: "Identity Lab", link: "/identity-lab" },
];

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const [mounted, setMounted] = useState(false);

  // Evitar errores de hidratación en SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  // Bloquear el scroll del fondo cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // No renderizar hasta que el cliente esté montado
  if (!mounted) return null;

  const menuContent = (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col h-[100dvh] w-screen transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } bg-white dark:bg-carbon text-black dark:text-white`}
    >
      {/* Header fijo */}
      <div className="flex justify-between items-center p-6 border-b border-black/10 dark:border-white/10 shrink-0">
        <h2 className="font-mono text-lg font-bold tracking-widest">MENÚ</h2>
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={onClose}
          className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Contenido con scroll independiente */}
      <div className="p-6 flex-1 overflow-y-auto">
        <div className="space-y-6 pb-6">
          {navSections.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              onClick={onClose}
              className="block text-2xl font-semibold tracking-tight hover:text-neonBlue transition-colors relative group w-fit"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-neonBlue group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer (Botón) anclado al fondo pero respetando el flujo */}
      <div className="p-6 shrink-0 border-t border-black/10 dark:border-white/10">
        <Link
          href="/diagnostico"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full rounded-md border border-neonBlue bg-neonBlue/10 px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-neonBlue transition-all hover:bg-neonBlue/20 group"
        >
          Contactar
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );

  // Inyectar el menú directamente en el <body>
  return createPortal(menuContent, document.body);
}
