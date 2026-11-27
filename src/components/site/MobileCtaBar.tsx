import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WhatsAppLink } from "./ContactLinks";

/** Barra fija de conversión en móvil: WhatsApp + cotizar siempre a un toque. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-void/90 p-3 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <WhatsAppLink
          placement="mobile_bar"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-neonLime/40 bg-neonLime/10 font-semibold text-neonLime"
        >
          <MessageCircle aria-hidden="true" size={18} />
          WhatsApp
        </WhatsAppLink>
        <Link href="/diagnostico" className="inline-flex h-12 items-center justify-center rounded-md bg-neonBlue font-bold text-black">
          Cotizar proyecto
        </Link>
      </div>
    </div>
  );
}

/** Botón flotante de WhatsApp en escritorio. */
export function FloatingWhatsApp() {
  return (
    <WhatsAppLink
      placement="floating"
      className="fixed bottom-6 right-6 z-40 hidden h-14 items-center gap-2 rounded-full border border-neonLime/40 bg-void/90 pl-4 pr-5 font-semibold text-neonLime shadow-[0_0_30px_-8px_rgba(200,255,0,0.5)] backdrop-blur transition hover:bg-neonLime hover:text-black md:inline-flex"
    >
      <MessageCircle aria-hidden="true" size={20} />
      <span>¿Hablamos?</span>
    </WhatsAppLink>
  );
}
