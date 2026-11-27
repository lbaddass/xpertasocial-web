"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { ArrowRight, Menu, MessageCircle } from "lucide-react";
import { WhatsAppLink } from "./ContactLinks";
import { Wordmark } from "./Wordmark";

const nav = [
  { href: "/#soluciones", label: "Soluciones" },
  { href: "/diseno-paginas-web", label: "Sitios web" },
  { href: "/#sistemas", label: "Sistemas" },
  { href: "/#proceso", label: "Método" },
  { href: "/#preguntas", label: "FAQ" },
];

export function Header() {
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-void/80 backdrop-blur-xl">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-neonBlue focus:px-3 focus:py-2 focus:text-black"
      >
        Saltar al contenido
      </a>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-[radial-gradient(circle_at_top,_rgba(0,224,255,0.15),_transparent_45%)] blur-2xl" />
      <div className="relative mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-5 sm:px-6">
        <Link href="/" aria-label="XpertaSocial, inicio" className="group rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-neonBlue">
          <Wordmark />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => {
              const isActive = !item.href.startsWith("/#") && pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative font-mono text-xs uppercase tracking-widest transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neonBlue ${
                      isActive ? "text-neonBlue" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-neonBlue transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppLink
            placement="header"
            className="hidden h-10 items-center gap-2 rounded-full border border-white/15 px-4 font-mono text-xs uppercase tracking-wider text-white/80 transition duration-200 hover:border-neonLime hover:text-neonLime active:scale-[0.98] md:inline-flex"
          >
            <MessageCircle aria-hidden="true" size={15} />
            WhatsApp
          </WhatsAppLink>
          <Link
            href="/diagnostico"
            aria-current={pathname === "/diagnostico" ? "page" : undefined}
            className="group inline-flex h-10 items-center gap-2 rounded-full bg-neonBlue px-4 text-sm font-bold text-black transition duration-200 hover:shadow-glow active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neonBlue"
          >
            Cotizar
            <ArrowRight aria-hidden="true" size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <details ref={mobileMenuRef} className="relative lg:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/15 text-white transition hover:border-neonBlue/50 [&::-webkit-details-marker]:hidden"
              aria-label="Abrir menú"
            >
              <Menu aria-hidden="true" size={18} />
            </summary>
            <nav aria-label="Menú móvil" className="absolute right-0 top-12 w-64 rounded-lg border border-white/10 bg-panel p-2 shadow-2xl backdrop-blur-xl">
              <ul className="flex flex-col">
                {nav.map((item) => {
                  const isActive = !item.href.startsWith("/#") && pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          if (mobileMenuRef.current) mobileMenuRef.current.open = false;
                        }}
                        className={`block rounded-md px-3 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-white/5 hover:text-neonBlue ${
                          isActive ? "bg-white/5 text-neonBlue" : "text-white/80"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
