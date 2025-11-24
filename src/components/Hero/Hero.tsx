import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SystemBadge from "./SystemBadge";
import RevenueCounter from "./RevenueCounter";
import DashboardMockup from "./DashboardMockup";
import MouseTracker from "./MouseTracker";
import TypewriterHeadline from "./TypewriterHeadline";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-grafito text-techWhite">
      <MouseTracker />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <SystemBadge />
            <div className="space-y-4">
              <TypewriterHeadline />
              <p className="font-mono text-sm md:text-base text-techWhite/70 max-w-2xl leading-relaxed border-l-2 border-signalRed pl-4">
                Sistemas quirúrgicos para clínicas de alto ticket: Next.js + n8n + IA que publican, miden y convierten mientras duermes.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-techWhite/60 font-mono">
                <span className="text-moneyGreen font-black text-xl">47</span> videos publicados este mes · Competencia no descansa
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="https://wa.me/525660213375?text=Hola%20José%2C%20vengo%20de%20la%20landing.%20Quiero%20conocer%20m%C3%A1s%20sobre%20el%20sistema%20Revenue%20Engine."
                className="group inline-flex items-center justify-center gap-3 bg-signalRed text-techWhite px-8 py-4 font-bold rounded-md shadow-glow-red hover:-translate-y-0.5 transition-all"
              >
                Hablar con José Luis por WhatsApp
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#casos"
                className="inline-flex items-center justify-center gap-3 border border-techCyan/40 text-techCyan px-8 py-4 font-mono text-sm rounded-md hover:border-techCyan hover:text-techWhite transition-all"
              >
                Ver caso de éxito primero
              </Link>
            </div>

            <RevenueCounter />
          </div>

          <div className="relative">
            <DashboardMockup />
            <div className="absolute -z-10 inset-0 blur-3xl bg-moneyGreen/20" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
