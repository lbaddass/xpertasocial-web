"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  Rocket,
  Globe2,
} from "lucide-react";
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
    badge: "Live",
  },
  {
    label: "Diagnóstico",
    description: "Auditoría y hoja de ruta",
    href: "/diagnostico",
    badge: "Gratis",
  },
  {
    label: "Perfil de Ingeniería",
    description: "Nuestra arquitectura de sistemas",
    href: "/perfil-corporativo",
    badge: "DOC",
  },
];

const signals = [
  { label: "Growth Engineering", detail: "Sistemas listos en 3 pisos", icon: ShieldCheck },
  { label: "IA + Creatividad", detail: "Laboratorio de experimentos diarios", icon: Sparkles },
  { label: "Launch Stack", detail: "De landing a sistemas 24/7", icon: Rocket },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMobileSection = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <nav className="relative">
      <div className="pointer-events-none absolute -inset-x-6 -top-14 h-32 bg-[radial-gradient(circle_at_top,_rgba(0,224,255,0.15),_transparent_45%)] blur-2xl" />

      <div className="flex items-center justify-between py-5">
        {/* Brand Identity */}
        <Link href="/" className="group relative flex items-center gap-3">
          <div className="absolute -left-2 h-12 w-12 rounded-full bg-gradient-to-br from-neonBlue/20 via-white/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex flex-col justify-center">
            <div className="font-mono text-sm md:text-base tracking-[0.25em] font-bold text-white group-hover:text-neonBlue transition-colors">
              XPERTA<span className="text-neonBlue">SOCIAL</span>
            </div>
            <span className="text-[10px] font-mono text-white/50 tracking-[0.28em] flex items-center gap-2">
              GROWTH SYSTEMS
              <span className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[9px] text-neonBlue">
                <Sparkles size={12} /> LIVE
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7 h-full">
          {navStructure.map((section) => (
            <div key={section.label} className="relative group">
              <div className="absolute inset-0 -z-10 rounded-full bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
              <NavDropdown
                label={section.label}
                concept={section.concept}
                items={section.items}
              />
            </div>
          ))}
          <Link
            href="/facebook-ads"
            className="flex items-center gap-1 text-[11px] font-mono tracking-widest text-neonBlue hover:text-white transition-colors uppercase"
          >
            Facebook Ads
            <ExternalLink size={12} />
          </Link>
        </div>

        {/* Action Area */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="tel:+525516833133"
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:border-neonBlue/60 hover:text-white transition-colors"
            >
              <PhoneCall size={16} className="text-neonBlue" />
              Llamar ahora
            </Link>
            <Link
              href="/diagnostico#audit"
              className="text-xs font-mono text-white/60 hover:text-white underline decoration-white/30 hover:decoration-neonBlue transition-all"
            >
              Auditoría Gratis
            </Link>
          </div>
          <Link
            href="/diagnostico"
            className="group flex items-center gap-2 text-xs font-bold bg-gradient-to-r from-neonBlue via-white to-neonBlue text-black px-6 py-3 rounded-full shadow-glow-money-strong hover:from-white hover:via-neonBlue hover:to-white transition-all"
          >
            DISEÑAR ESTRATEGIA
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden rounded-full border border-white/10 bg-white/5 p-2 text-white hover:text-neonBlue transition-colors"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Signals bar */}
      <div className="hidden lg:grid grid-cols-3 gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
        {signals.map((signal) => (
          <div key={signal.label} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-neonBlue shadow-glow-money">
              <signal.icon size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">{signal.label}</p>
              <p className="text-[11px] text-white/60">{signal.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick nav bar */}
      <div className="mt-3 hidden lg:flex items-center gap-3 overflow-x-auto rounded-xl border border-white/10 bg-white/5 px-3 py-2">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-white/80 transition-all hover:-translate-y-0.5 hover:border-neonBlue/40 hover:bg-white/10"
          >
            <div className="flex items-center gap-1 rounded-full bg-neonBlue/10 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.25em] text-neonBlue">
              {link.badge}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white group-hover:text-neonBlue">{link.label}</span>
              <span className="text-xs text-white/60">{link.description}</span>
            </div>
            <Globe2 size={16} className="text-white/40 group-hover:text-neonBlue" />
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-carbon/95 backdrop-blur-xl flex flex-col overflow-y-auto pt-24 pb-10 px-6 animate-in fade-in duration-200">
          <div className="max-w-3xl mx-auto flex flex-col gap-5">
            {navStructure.map((section) => (
              <div key={section.label} className="border border-white/10 rounded-lg bg-black/30 shadow-xl">
                <button
                  onClick={() => toggleMobileSection(section.label)}
                  className="w-full flex items-center justify-between px-4 py-4 text-left"
                >
                  <span className="text-sm font-bold font-mono text-white tracking-wider flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-neonBlue" />
                    {section.label}
                  </span>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col gap-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white hover:border-neonBlue/50 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-neonBlue">
                    {link.badge}
                  </div>
                  <span className="text-sm font-semibold">{link.label}</span>
                  <span className="text-xs text-white/60">{link.description}</span>
                </Link>
              ))}
              <Link
                href="/perfil-corporativo"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-gradient-to-r from-white/10 via-black to-white/10 px-4 py-4 text-white hover:border-neonBlue/60"
              >
                <div>
                  <p className="text-sm font-bold">Engineering Profile</p>
                  <p className="text-xs text-white/60">Arquitectura, principios y entregables</p>
                </div>
                <ArrowRight size={18} className="text-neonBlue" />
              </Link>
            </div>

            <div className="flex flex-col gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
              <span className="flex items-center gap-2 text-[10px] text-white/50 tracking-[0.3em] uppercase">
                <Sparkles size={14} className="text-neonBlue" />
                Llamar o agendar
              </span>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="tel:+525516833133"
                  className="flex items-center gap-2 rounded-full bg-neonBlue/10 px-4 py-2 text-sm font-semibold text-neonBlue"
                >
                  <PhoneCall size={16} />
                  55 1683 3133
                </Link>
                <Link
                  href="/diagnostico"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-semibold"
                >
                  Diseñar estrategia
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
