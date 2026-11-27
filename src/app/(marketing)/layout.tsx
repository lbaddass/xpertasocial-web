import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { FloatingWhatsApp, MobileCtaBar } from "@/components/site/MobileCtaBar";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-dvh flex-col bg-void font-sans text-white selection:bg-neonBlue selection:text-black">
      {/* Retícula técnica de la identidad original */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 bg-grid-pattern bg-grid opacity-60" />
      <Header />
      <main id="contenido" className="relative flex-1">
        {children}
      </main>
      <Footer />
      <MobileCtaBar />
      <FloatingWhatsApp />
    </div>
  );
}
