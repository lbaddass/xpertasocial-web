import type { ReactElement } from 'react';
import { Activity, Cpu, Layers, ShieldCheck, Sparkles, Zap } from 'lucide-react';

interface ValueItem {
  title: string;
  description: string;
  metric: string;
  icon: ReactElement;
}

const values: ValueItem[] = [
  {
    title: '0.3s Page Loads',
    description: 'Next.js 14 + Edge caching tuned for conversion spikes.',
    metric: '0.3s',
    icon: <Zap size={18} />,
  },
  {
    title: '47x Content Output',
    description: 'IA clona formatos virales y los publica en 3 plataformas.',
    metric: '47x',
    icon: <Sparkles size={18} />,
  },
  {
    title: 'Hardening & Tracking',
    description: 'Eventos GA/Meta, n8n webhooks y firewall de bots preconfigurado.',
    metric: '24/7',
    icon: <ShieldCheck size={18} />,
  },
  {
    title: 'Blueprint Stack',
    description: 'Landing, CRM, pipelines de video y publisher en un solo hub.',
    metric: '1 HUB',
    icon: <Layers size={18} />,
  },
  {
    title: 'Content Factory',
    description: '50 short-form videos renderizados en batch con prompts dirigidos.',
    metric: '50/24h',
    icon: <Cpu size={18} />,
  },
  {
    title: 'Observability',
    description: 'Latency monitor + alertas cuando tu embudo cae bajo el SLO.',
    metric: '99.9%',
    icon: <Activity size={18} />,
  },
];

export default function ValueGrid() {
  return (
    <section className="bg-[#1f2234] py-24 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-4 mb-10">
          <p className="text-[#E63946] font-mono text-xs tracking-[0.3em]">SISTEMAS VS SERVICIOS</p>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Infraestructura lista para producir.</h2>
          <p className="text-white/60 font-mono text-sm max-w-3xl">No vendemos horas. Entregamos un Content Factory: detección de tendencias, clonación, render y publicación automática.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#2B2D42]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E63946]/60"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(248,249,250,0.04)_25%,transparent_25%,transparent_50%,rgba(248,249,250,0.04)_50%,rgba(248,249,250,0.04)_75%,transparent_75%,transparent)] bg-[length:12px_12px] opacity-20" />
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-2 text-white/80">
                  <span className="text-[#E63946] font-mono text-lg font-black">{item.metric}</span>
                  <span className="text-white/60 font-mono text-xs uppercase">Modo Operativo</span>
                </div>
                <div className="p-2 rounded-lg border border-white/10 text-white/70 group-hover:text-[#E63946] transition-colors" aria-hidden>
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">{item.title}</h3>
              <p className="text-white/60 font-mono text-sm leading-relaxed relative z-10">{item.description}</p>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#E63946]/70 to-transparent translate-x-[-120%] group-hover:translate-x-0 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
