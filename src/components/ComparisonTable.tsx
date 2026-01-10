import { Check, X } from "lucide-react";

const rows = [
  { bad: "Wordpress lento (3.5s+)", good: "Next.js Edge: 0.3s promedio" },
  {
    bad: "Diseños de plantilla genéricos",
    good: "Blueprint propietario Inter Tight + JetBrains Mono",
  },
  {
    bad: "Dependencia en agencias",
    good: "Automatización n8n + publisher a TikTok/IG/Shorts",
  },
  {
    bad: "Sin tracking avanzado",
    good: "Eventos GA/Meta + Webhooks para CRM/BI",
  },
  {
    bad: "Edición manual de videos",
    good: "IA content swapper + renderer 50 videos/24h",
  },
  {
    bad: "Landing sin diagnóstico",
    good: "Flow de auditoría técnica + demo guiada",
  },
];

export default function ComparisonTable() {
  return (
    <section className="bg-[#2B2D42] text-white py-24 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-3 mb-12">
          <p className="text-[#E63946] font-mono text-xs tracking-[0.3em]">
            NO SOMOS UNA AGENCIA
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Infraestructura vs servicios tradicionales.
          </h2>
          <p className="text-white/60 font-mono text-sm">
            Comparativa directa entre un stack heredado y el Content Factory de
            XpertaSocial.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1f2234]">
          <div className="grid grid-cols-2 text-xs font-mono uppercase tracking-[0.2em] text-white/60 border-b border-white/10">
            <div className="px-6 py-3 border-r border-white/10">
              Agencias Tradicionales ❌
            </div>
            <div className="px-6 py-3">XpertaSocial ✅</div>
          </div>
          <div className="divide-y divide-white/5">
            {rows.map((row, index) => (
              <div
                key={row.bad}
                className={`grid md:grid-cols-2 hover:bg-white/5 transition-colors ${index % 2 === 0 ? "bg-white/0" : "bg-white/5"}`}
              >
                <div className="flex items-center gap-3 px-6 py-4 border-b md:border-b-0 md:border-r border-white/5">
                  <X size={16} className="text-[#E63946]" />
                  <span className="font-mono text-sm text-white/70">
                    {row.bad}
                  </span>
                </div>
                <div className="flex items-center gap-3 px-6 py-4">
                  <Check size={16} className="text-green-500" />
                  <span className="font-mono text-sm">{row.good}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
