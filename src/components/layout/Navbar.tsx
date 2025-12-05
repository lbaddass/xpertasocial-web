"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMobileSection = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-carbon/90 backdrop-blur-xl h-20">
      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
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
            href="/perfil-corporativo"
            className="text-[11px] font-mono tracking-widest text-white/60 hover:text-neonBlue transition-colors uppercase"
          >
            ENGINEERING
          </Link>
        </div>

        {/* Action Area */}
        <div className="hidden lg:flex items-center gap-6">
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
        <div className="fixed inset-0 top-20 bg-carbon z-40 flex flex-col overflow-y-auto pb-20 animate-in slide-in-from-right-10 duration-200">
          <div className="flex flex-col p-6 space-y-2">
            {navStructure.map((section) => (
              <div key={section.label} className="border-b border-white/5">
                <button
                  onClick={() => toggleMobileSection(section.label)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm font-bold font-mono text-white tracking-wider">{section.label}</span>
                  <ChevronDown
                    size={16}
                    className={`text-neonBlue transition-transform ${
                      mobileExpanded === section.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileExpanded === section.label ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 space-y-3 border-l border-neonBlue/20 ml-2">
                    <div className="text-[10px] text-neonBlue/60 uppercase tracking-widest mb-2">
                      {section.concept}
                    </div>
                    {section.items.map((item) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-white/70 hover:text-white py-1"
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
              className="py-4 text-sm font-bold font-mono text-white tracking-wider border-b border-white/5 hover:text-neonBlue"
            >
              ENGINEERING PROFILE
            </Link>

            <div className="pt-8 space-y-4">
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
                className="block text-center text-xs font-mono text-white/50 hover:text-white underline"
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
