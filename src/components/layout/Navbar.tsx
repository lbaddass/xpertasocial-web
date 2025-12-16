"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown, ExternalLink } from "lucide-react";
import NavDropdown from "./NavDropdown";

const navStructure = [
  {
    label: "PISO 1: INFRAESTRUCTURA",
    concept: "Activos Propios",
    items: [
      { label: "Landing Express ($1,900)", link: "/piso-1-infraestructura#landing" },
      { label: "Embudo de Campaña ($2,900)", link: "/piso-1-infraestructura#embudo" },
      { label: "Sitio Negocio (PyMES)", link: "/piso-1-infraestructura#sitio" },
      { label: "E-Commerce (Tienda)", link: "/piso-1-infraestructura#ecommerce" },
      { label: "Facebook Ads: Bitácora", link: "/facebook-ads" },
    ],
  },
  {
    label: "PISO 2: CREATIVE LAB",
    concept: "Combustible IA",
    items: [
      { label: "Product Starter (Catálogo)", link: "/piso-2-contenido-ia#product" },
      { label: "Viral Testing (Ads)", link: "/piso-2-contenido-ia#viral" },
      { label: "Identity Lab (Branding)", link: "/identity-lab" },
    ],
  },
  {
    label: "PISO 3: GROWTH SYSTEMS",
    concept: "Marketing 24/7",
    items: [
      { label: "Plan: Reconocimiento", link: "/piso-3-sistemas#reconocimiento" },
      { label: "Plan: Interacción", link: "/piso-3-sistemas#interaccion" },
      { label: "Plan: Ventas & Leads", link: "/piso-3-sistemas#ventas" },
    ],
  },
];

const quickLinks = [
  {
    label: "Facebook Ads",
    description: "Bitácora de evolución",
    href: "/facebook-ads",
  },
  {
    label: "Diagnóstico",
    description: "Auditoría y hoja de ruta",
    href: "/diagnostico",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMobileSection = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-carbon/90 backdrop-blur-xl h-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 h-full flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="group flex flex-col justify-center">
          <div className="font-mono text-sm md:text-base tracking-[0.2em] font-bold text-white group-hover:text-neonBlue transition-colors">
            XPERTA<span className="text-neonBlue">SOCIAL</span>
          </div>
          <span className="text-[9px] font-mono text-white/40 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-1">
            GROWTH ENGINEERING HUB
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          {navStructure.map((section) => (
            <NavDropdown
              key={section.label}
              label={section.label}
              concept={section.concept}
              items={section.items}
            />
          ))}
          <Link
            href="/facebook-ads"
            className="flex items-center gap-1 text-[11px] font-mono tracking-widest text-neonBlue hover:text-white transition-colors uppercase"
          >
            Facebook Ads
            <ExternalLink size={12} />
          </Link>
          <Link
            href="/perfil-corporativo"
            className="text-[11px] font-mono tracking-widest text-white/60 hover:text-neonBlue transition-colors uppercase"
          >
            ENGINEERING
          </Link>
        </div>

        {/* Action Area */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/facebook-ads"
            className="group flex items-center gap-2 text-xs font-bold bg-neonBlue/90 text-black px-5 py-3 rounded-sm border border-neonBlue/60 hover:bg-white hover:border-white transition-colors"
          >
            Facebook Ads
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/diagnostico#audit"
            className="text-xs font-mono text-white/60 hover:text-white underline decoration-white/30 hover:decoration-white transition-all"
          >
            Auditoría Gratis
          </Link>
          <Link
            href="/diagnostico"
            className="group flex items-center gap-2 text-xs font-bold bg-black text-white px-6 py-3 rounded-sm border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all"
          >
            DISEÑAR ESTRATEGIA
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white hover:text-neonBlue transition-colors">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-carbon/95 backdrop-blur-xl flex flex-col overflow-y-auto pt-24 pb-10 px-6 animate-in fade-in duration-200">
          <div className="max-w-3xl mx-auto flex flex-col gap-5">
            {navStructure.map((section) => (
              <div key={section.label} className="border border-white/10 rounded-lg bg-black/30">
                <button
                  onClick={() => toggleMobileSection(section.label)}
                  className="w-full flex items-center justify-between px-4 py-4 text-left"
                >
                  <span className="text-sm font-bold font-mono text-white tracking-wider">{section.label}</span>
                  <ChevronDown
                    size={18}
                    className={`text-neonBlue transition-transform ${
                      mobileExpanded === section.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileExpanded === section.label ? "max-h-[500px] opacity-100 pt-1 pb-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-3 border-t border-white/5 pt-3">
                    <div className="text-[10px] text-neonBlue/60 uppercase tracking-[0.3em] px-4">
                      {section.concept}
                    </div>
                    {section.items.map((item) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-white/80 hover:text-white px-4 py-2"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/perfil-corporativo"
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-white/10 bg-black/30 px-4 py-4 text-center text-sm font-bold font-mono text-white tracking-wider hover:text-neonBlue"
            >
              ENGINEERING PROFILE
            </Link>

            <div className="space-y-3 rounded-lg border border-white/10 bg-black/30 p-4">
              <span className="text-[10px] text-white/50 tracking-[0.3em] uppercase">Direcciones Rápidas</span>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col rounded-md bg-white/5 px-4 py-3 text-white hover:bg-white/10 transition-colors"
                >
                  <span className="text-sm font-semibold">{link.label}</span>
                  <span className="text-xs text-white/60">{link.description}</span>
                </Link>
              ))}
            </div>

            <div className="pt-2 space-y-4">
              <Link
                href="/diagnostico"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-white text-black font-bold py-4 rounded-sm hover:bg-neonBlue transition-colors"
              >
                DISEÑAR ESTRATEGIA <ArrowRight size={18} />
              </Link>
              <Link
                href="/diagnostico#audit"
                onClick={() => setIsOpen(false)}
                className="block text-center text-xs font-mono text-white/60 hover:text-white underline"
              >
                Solicitar Auditoría Gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
