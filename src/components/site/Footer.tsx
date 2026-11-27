import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { conditions } from "@/config/catalog";
import { site } from "@/config/site";
import { PhoneLink, WhatsAppLink } from "./ContactLinks";
import { Wordmark } from "./Wordmark";

const services = [
  { href: "/#amazon-ads", label: "Amazon Ads" },
  { href: "/#google-ads", label: "Google Ads" },
  { href: "/diseno-paginas-web", label: "Diseño de páginas web" },
  { href: "/#seo-geo-aeo", label: "SEO, GEO y AEO" },
  { href: "/#sistemas", label: "Sistemas integrados" },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group flex items-center gap-2 text-sm text-white/65 transition hover:text-white">
      <span aria-hidden="true" className="h-0.5 w-3 bg-neonBlue/60 transition-all group-hover:w-5 group-hover:bg-neonBlue" />
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-void pb-24 md:pb-0">
      <div className="mx-auto grid max-w-content gap-12 px-5 py-16 sm:px-6 md:grid-cols-[1.3fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="group inline-flex">
            <Wordmark />
          </Link>
          <p className="mt-6 max-w-sm text-xl font-semibold leading-snug text-white">
            Publicidad, sitios web, medición y posicionamiento conectados en un solo sistema de ventas.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
            {site.city} · {site.coverage}
          </p>
        </div>

        <nav aria-label="Servicios">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">Servicios</h2>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.href}>
                <FooterLink href={s.href}>{s.label}</FooterLink>
              </li>
            ))}
            <li>
              <FooterLink href="/aviso-de-privacidad">Aviso de privacidad</FooterLink>
            </li>
          </ul>
        </nav>

        <div className="rounded-lg border border-neonBlue/20 bg-panel p-6 shadow-glow-sm">
          <h2 className="text-lg font-bold text-white">Atención inmediata</h2>
          <p className="mt-1 text-sm text-white/60">Respuesta en 1 día hábil. Un solo contacto que conoce tu cuenta.</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <WhatsAppLink placement="footer" className="flex items-center gap-3 text-white transition hover:text-neonLime">
                <MessageCircle aria-hidden="true" size={16} className="text-neonLime" />
                WhatsApp {site.phoneDisplay}
              </WhatsAppLink>
            </li>
            <li className="flex items-center gap-3 text-white">
              <Phone aria-hidden="true" size={16} className="text-neonBlue" />
              <PhoneLink placement="footer" className="transition hover:text-neonBlue" />
            </li>
            {site.email ? (
              <li>
                <a className="flex items-center gap-3 text-white transition hover:text-neonBlue" href={`mailto:${site.email}`}>
                  <Mail aria-hidden="true" size={16} className="text-neonBlue" />
                  {site.email}
                </a>
              </li>
            ) : null}
          </ul>
          <Link
            href="/diagnostico"
            className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-neonBlue px-4 py-3 text-sm font-bold text-black transition hover:shadow-glow"
          >
            Solicitar diagnóstico sin costo
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-content px-5 py-6 text-xs leading-relaxed text-white/60 sm:px-6">
          {conditions.tax} {conditions.validity} XpertaSocial gestiona campañas de Amazon Ads y Google Ads de forma independiente; no
          es agencia oficial ni socio de Amazon ni de Google. © {new Date().getFullYear()} {site.name}. Growth Engineering Systems.
        </p>
      </div>
    </footer>
  );
}
