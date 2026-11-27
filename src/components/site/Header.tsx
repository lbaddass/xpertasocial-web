import Link from "next/link";
import { Wordmark } from "./Wordmark";

const nav = [
  { href: "/#soluciones", label: "Soluciones" },
  { href: "/diseno-paginas-web", label: "Sitios web" },
  { href: "/#sistemas", label: "Sistemas integrados" },
  { href: "/#proceso", label: "Cómo trabajamos" },
  { href: "/#preguntas", label: "Preguntas" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/85">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-mint focus:px-3 focus:py-2 focus:text-ink"
      >
        Saltar al contenido
      </a>
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="XpertaSocial, inicio" className="rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint">
          <Wordmark />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm text-white/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="rounded transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/diagnostico"
            className="inline-flex h-10 items-center rounded-full bg-mint px-4 text-sm font-semibold text-ink transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          >
            Cotizar mi proyecto
          </Link>
          <details className="group relative lg:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/20 text-white [&::-webkit-details-marker]:hidden"
              aria-label="Abrir menú"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav aria-label="Menú móvil" className="absolute right-0 top-12 w-64 rounded-card border border-white/10 bg-ink-800 p-2 shadow-card">
              <ul className="flex flex-col text-sm text-white">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block rounded-lg px-3 py-3 hover:bg-white/5">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
