import type { ReactElement } from 'react';
import { ArrowUpRight, Cpu, Layers, Rocket } from 'lucide-react';

interface FrameworkCardProps {
  title: string;
  description: string;
  tag: string;
  icon: ReactElement;
}

const frameworks: FrameworkCardProps[] = [
  {
    title: 'Andromeda™',
    description: 'Landing Next.js + n8n scripts para publicar sin tocar el código fuente.',
    tag: 'PATENT PENDING',
    icon: <Rocket size={18} />,
  },
  {
    title: 'EF-Élite™',
    description: 'Motor de diagnóstico que detecta fricción en cada micro-interacción de tu funnel.',
    tag: 'PROPRIETARY',
    icon: <Cpu size={18} />,
  },
  {
    title: 'Pipelines AI™',
    description: 'Orquestra AI content swapper + renderer + publisher en un pipeline único.',
    tag: 'LAB ONLY',
    icon: <Layers size={18} />,
  },
];

export default function FrameworkCards() {
  return (
    <section className="py-24 bg-[#1f2234] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-3 mb-10">
          <p className="text-[#E63946] font-mono text-xs tracking-[0.3em]">FRAMEWORKS PROPIETARIOS</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">Blueprints operativos del laboratorio.</h2>
          <p className="text-white/60 font-mono text-sm max-w-3xl">Cada framework encapsula décadas-hombre de iteraciones. Se entregan con scripts, dashboards y playbooks listos para desplegar.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {frameworks.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden border border-white/10 rounded-xl bg-[#2B2D42]/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E63946]/60"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#E63946]/70 to-transparent" />
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 text-white/80">
                  <div className="p-2 rounded-lg border border-white/10 bg-white/5 text-white/80 group-hover:text-[#E63946] transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-white/50">FRAMEWORK</p>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full border border-[#E63946]/50 text-[#E63946] text-[10px] font-black tracking-widest">{item.tag}</span>
              </div>
              <p className="text-white/60 font-mono text-sm leading-relaxed mb-6">{item.description}</p>
              <div className="relative h-32 border border-white/10 rounded-lg overflow-hidden bg-black/30">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_60%,rgba(230,57,70,0.25)_60%)] bg-[length:100%_6px] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 animate-scan-line bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100" />
                <div className="flex h-full items-center justify-center text-white/40 font-mono text-xs">Diagrama de flujo (placeholder)</div>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#E63946] transition-colors" aria-label={`Ver framework ${item.title}`}>
                Ver arquitectura <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
