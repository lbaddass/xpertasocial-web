import type { Metadata } from "next";
import { Calendar, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import PageNav from "@/components/layout/PageNav";
import { DiagnosticoForm } from "@/components/contact/DiagnosticoForm";

export const metadata: Metadata = {
  title: "Solicita un diagnóstico | XpertaSocial",
  description:
    "Cuéntanos qué necesitas: sitio web, tienda, Google Ads, Amazon Ads o SEO. Te respondemos en un día hábil con una recomendación de por dónde empezar.",
};

export default function DiagnosticPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-20 pb-20">
      <PageNav />
      <main
        id="contenido"
        className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1fr_minmax(0,560px)] lg:items-start"
      >
        {/* Columna izquierda: encabezado, beneficios y llamada de diagnóstico */}
        <div className="space-y-8">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-neon">
              DIAGNÓSTICO &amp; ESTRATEGIA
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
              Solicita un diagnóstico{" "}
              <span className="text-neon">técnico y comercial</span>
            </h1>
            <p className="mt-4 text-lg font-light leading-relaxed text-white/65">
              Cuéntanos qué necesitas: sitio web, tienda en línea, Google Ads,
              Meta Ads, Amazon Ads o posicionamiento SEO / GEO / AEO. Te
              respondemos en máximo 1 día hábil con una recomendación clara de
              por dónde empezar.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0e1114]/90 p-6 sm:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 py-1">
              <Calendar size={14} className="text-neon" />
              <span className="font-mono text-xs uppercase tracking-widest text-white">
                Llamada de diagnóstico · 30 min sin costo
              </span>
            </div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Qué revisamos contigo
            </h2>
            <ul className="mt-5 space-y-3.5 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <ShieldCheck size={17} className="mt-0.5 shrink-0 text-neon" />
                <span>
                  Velocidad, arquitectura web y puntos de fuga en tu conversión
                  actual.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-neon" />
                <span>
                  Visibilidad en buscadores tradicionales (SEO) y motores de IA
                  (GEO / AEO).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={17} className="mt-0.5 shrink-0 text-neon" />
                <span>
                  Prioridades de ejecución según tu presupuesto, urgencia y
                  etapa del negocio.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Columna derecha: formulario multi-paso */}
        <section
          id="formulario"
          aria-label="Formulario de diagnóstico"
          className="scroll-mt-24"
        >
          <div id="audit" className="scroll-mt-24" />
          <DiagnosticoForm />
        </section>
      </main>
    </div>
  );
}
