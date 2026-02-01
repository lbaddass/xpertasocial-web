"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Menu } from "lucide-react";
import SideMenu from "./SideMenu";
import NavDropdown from "./NavDropdown";
import ThemeSwitcher from "../ui/ThemeSwitcher";

const navSections = [
  {
    label: "Catálogo IA",
    link: "/catalogo-ia",
  },
  {
    label: "Pisos",
    subLinks: [
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
    ]
  },
  {
    label: "Facebook Ads",
    link: "/facebook-ads",
  },
  {
    label: "Diagnóstico",
    link: "/diagnostico",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="relative py-4" aria-label="Primary">
        <div className="pointer-events-none absolute -inset-x-6 -top-10 h-24 bg-[radial-gradient(circle_at_top,_rgba(0,224,255,0.15),_transparent_45%)] blur-2xl animate-glow-pulse" />

        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group relative flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue/70">
            <div className="absolute -left-2 h-12 w-12 rounded-full bg-gradient-to-br from-neonBlue/20 via-white/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col justify-center">
              <div className="font-mono text-sm md:text-base tracking-[0.25em] font-bold text-black dark:text-white group-hover:text-neonBlue transition-colors">
                XPERTA<span className="text-neonBlue">SOCIAL</span>
              </div>
              <span className="text-[10px] font-mono text-black/50 dark:text-white/50 tracking-[0.28em] flex items-center gap-2">
                GROWTH SYSTEMS
                <span className="flex items-center gap-1 rounded-full bg-black/5 dark:bg-white/5 px-2 py-1 text-[9px] text-neonBlue">
                  <Sparkles size={12} /> LIVE
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navSections.map((item) => (
              <div key={item.label} className="relative group">
                {item.subLinks ? (
                  <NavDropdown label={item.label} subLinks={item.subLinks} />
                ) : (
                  <Link
                    href={item.link!}
                    className="text-sm font-mono tracking-widest uppercase text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
                  >
                      {item.label}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-neonBlue group-hover:w-full transition-all duration-300"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/diagnostico"
              className="group hidden sm:inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black dark:text-white transition-all hover:border-neonBlue/60 hover:text-neonBlue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
            >
              Contactar
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <ThemeSwitcher />

            {/* Mobile Menu Button */}
            <button
                type="button"
                aria-label="Abrir menú"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                onClick={toggleMenu}
                className="lg:hidden text-black dark:text-white hover:text-neonBlue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
            >
                <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
      <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
}
