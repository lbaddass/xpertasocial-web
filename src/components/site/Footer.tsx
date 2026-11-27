import Link from "next/link";
import { conditions } from "@/config/catalog";
import { site } from "@/config/site";
import { PhoneLink, WhatsAppLink } from "./ContactLinks";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white/75">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Publicidad, sitios web, medición y posicionamiento conectados en un solo sistema de ventas.
          </p>
          <p className="mt-4 text-sm">
            {site.city} · {site.coverage}
          </p>
        </div>

        <nav aria-label="Servicios">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Servicios</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-white" href="/#amazon-ads">Amazon Ads</Link></li>
            <li><Link className="hover:text-white" href="/#google-ads">Google Ads</Link></li>
            <li><Link className="hover:text-white" href="/diseno-paginas-web">Diseño de páginas web</Link></li>
            <li><Link className="hover:text-white" href="/#seo-geo-aeo">SEO, GEO y AEO</Link></li>
            <li><Link className="hover:text-white" href="/#sistemas">Sistemas integrados</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Contacto</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <WhatsAppLink placement="footer" className="hover:text-white">
                WhatsApp {site.phoneDisplay}
              </WhatsAppLink>
            </li>
            <li>
              <PhoneLink placement="footer" className="hover:text-white" />
            </li>
            {site.email ? (
              <li>
                <a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            ) : null}
            <li><Link className="hover:text-white" href="/diagnostico">Solicitar diagnóstico</Link></li>
            <li><Link className="hover:text-white" href="/aviso-de-privacidad">Aviso de privacidad</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-content px-4 py-6 text-xs leading-relaxed text-white/55 sm:px-6">
          {conditions.tax} {conditions.validity} XpertaSocial gestiona campañas de Amazon Ads de forma independiente;
          no es agencia oficial ni socio de Amazon ni de Google. © {new Date().getFullYear()} {site.name}.
        </p>
      </div>
    </footer>
  );
}
