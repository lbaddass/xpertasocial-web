import { ArrowRight, Calendar, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import PageNav from "@/components/layout/PageNav";

export default function DiagnosticPage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <PageNav />
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
          DIAGNÓSTICO <span className="text-neonBlue">&</span> ESTRATEGIA
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
          Dos caminos para comenzar. Elige el que mejor se adapte a tu etapa
          actual.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Option 1: Free Audit (Lead Magnet) */}
          <div
            id="audit"
            className="bg-carbon border border-white/10 p-8 md:p-12 flex flex-col relative overflow-hidden group hover:border-white/30 transition-all"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldCheck size={64} />
            </div>

            <div className="mb-8">
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-sm mb-4">
                <span className="text-xs font-mono text-white tracking-widest uppercase">
                  OPCIÓN A: SIN COSTO
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Auditoría Online Gratuita
              </h2>
              <p className="text-white/60 leading-relaxed">
                Analizamos tu presencia digital actual para detectar
                &quot;vulnerabilidades expuestas&quot; y fugas de dinero en tus
                campañas.
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-white/80">
                <ShieldCheck
                  size={16}
                  className="text-neonBlue mt-0.5 shrink-0"
                />
                Análisis de velocidad y conversión web
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <ShieldCheck
                  size={16}
                  className="text-neonBlue mt-0.5 shrink-0"
                />
                Revisión de estructura de campañas (Ads)
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <ShieldCheck
                  size={16}
                  className="text-neonBlue mt-0.5 shrink-0"
                />
                Reporte de oportunidades perdidas
              </li>
            </ul>

            <Link
              href="mailto:auditoria@xpertasocial.com?subject=Solicitud%20de%20Auditoría%20Gratuita"
              className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white font-bold py-4 rounded-sm hover:bg-white hover:text-black transition-all"
            >
              <Mail size={18} /> SOLICITAR POR CORREO
            </Link>
          </div>

          {/* Option 2: Strategy Session (High Ticket) */}
          <div className="bg-neonBlue text-black p-8 md:p-12 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Calendar size={64} />
            </div>

            <div className="mb-8">
              <div className="inline-block px-3 py-1 bg-black/10 border border-black/10 rounded-sm mb-4">
                <span className="text-xs font-mono text-black tracking-widest uppercase">
                  OPCIÓN B: ACCIÓN INMEDIATA
                </span>
              </div>
              <h2 className="text-3xl font-bold text-black mb-4">
                Diseñar mi Estrategia
              </h2>
              <p className="text-black/70 leading-relaxed">
                Sesión estratégica para arquitectar tu crecimiento. Diseñamos la
                ruta exacta para que impulses tus ventas sin desperdiciar
                dinero.
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-black/80">
                <ArrowRight size={16} className="text-black mt-0.5 shrink-0" />
                Plan de Arquitectura Digital completo
              </li>
              <li className="flex items-start gap-3 text-sm text-black/80">
                <ArrowRight size={16} className="text-black mt-0.5 shrink-0" />
                Propuesta económica transparente
              </li>
              <li className="flex items-start gap-3 text-sm text-black/80">
                <ArrowRight size={16} className="text-black mt-0.5 shrink-0" />
                Garantía de Resultados (Risk-Free)
              </li>
            </ul>

            <Link
              href="https://calendly.com/"
              target="_blank"
              className="w-full flex items-center justify-center gap-2 bg-black text-white font-bold py-4 rounded-sm hover:bg-white hover:text-black transition-all shadow-xl"
            >
              <Calendar size={18} /> AGENDAR SESIÓN
            </Link>

            <p className="text-xs text-center mt-4 text-black/50">
              * Si nuestra estrategia no mejora tus resultados en el primer mes,
              tu factura inicial no tendrá costo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
