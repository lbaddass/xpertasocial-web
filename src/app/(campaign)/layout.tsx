import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { MotionProvider } from "@/components/motion/primitives";
import { PhoneLink, WhatsAppLink } from "@/components/site/ContactLinks";
import { Wordmark } from "@/components/site/Wordmark";

/**
 * Layout de páginas de campaña: sin menú de navegación (menos fugas), solo marca + WhatsApp.
 */
export default function CampaignLayout({ children }: { children: React.ReactNode }) {
  return (
    <MotionProvider>
      <div className="relative flex min-h-dvh flex-col bg-void font-sans text-white selection:bg-neonBlue selection:text-black">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 bg-grid-pattern bg-grid opacity-60" />
      <header className="sticky top-0 z-40 border-b border-white/10 bg-void/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-content items-center justify-between gap-4 px-5 sm:px-6">
          <Link href="/" aria-label="XpertaSocial, inicio" className="group">
            <Wordmark />
          </Link>
          <WhatsAppLink
            placement="lp_header"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-neonLime/40 bg-neonLime/10 px-4 text-sm font-semibold text-neonLime transition hover:bg-neonLime hover:text-black"
          >
            <MessageCircle aria-hidden="true" size={16} />
            WhatsApp
          </WhatsAppLink>
        </div>
      </header>
      <main id="contenido" className="relative flex-1">
        {children}
      </main>
      <footer className="relative border-t border-white/10 pb-28 md:pb-0">
        <div className="mx-auto flex max-w-content flex-col gap-3 px-5 py-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            {site.name} · {site.city} · <PhoneLink placement="lp_footer" className="hover:text-white" />
            {site.email ? (
              <>
                {" "}·{" "}
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </>
            ) : null}
          </p>
          <p>
            <Link href="/aviso-de-privacidad" className="underline underline-offset-2 hover:text-white">
              Aviso de privacidad
            </Link>{" "}
            · No somos agencia oficial ni socio de Meta, Google ni Amazon.
          </p>
        </div>
      </footer>
      </div>
    </MotionProvider>
  );
}
