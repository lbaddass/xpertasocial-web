'use client';

import { useEffect, useRef, useState } from 'react';
import { Code, Tool, TrendingUp } from 'lucide-react';

const phases = [
  {
    id: '01',
    title: 'Diagnóstico Técnico',
    description: 'Auditamos velocidad, tracking y stack actual para definir el gap con tu competencia.',
    icon: <Tool size={18} />,
  },
  {
    id: '02',
    title: 'Content Factory',
    description: 'Scrape de competidores, IA content swapper, render batch y publicación automatizada.',
    icon: <Code size={18} />,
  },
  {
    id: '03',
    title: 'Optimización Continua',
    description: 'Feedback loop con analytics y despliegues atómicos para mantener 0.3s y CTR alto.',
    icon: <TrendingUp size={18} />,
  },
];

export default function Methodology() {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = lineRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const visible = Math.min(Math.max((viewHeight - rect.top) / (viewHeight + rect.height), 0), 1);
      setProgress(Math.round(visible * 100));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 bg-[#2B2D42] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[#E63946] font-mono text-xs tracking-[0.3em]">MODO OPERATIVO</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Metodología anti-plantillas.</h2>
          </div>
          <div className="text-sm text-white/70 font-mono">Progreso: <span className="text-[#E63946]">{progress}%</span></div>
        </div>

        <div className="relative" ref={lineRef}>
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10 overflow-hidden">
            <div
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-[#E63946] via-[#E63946]/70 to-transparent"
              style={{ height: `${progress}%` }}
            />
          </div>

          <div className="space-y-10">
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                className="relative md:flex md:items-center md:gap-10 group"
              >
                <div className="flex items-center gap-4 md:w-1/2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full border border-white/20 bg-white/5 text-white/80 group-hover:border-[#E63946] group-hover:text-[#E63946] transition-colors">
                    {phase.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-white/50">FASE {phase.id}</p>
                    <h3 className="text-2xl font-bold">{phase.title}</h3>
                  </div>
                </div>
                <div className="md:w-1/2 mt-3 md:mt-0 text-white/70 font-mono text-sm leading-relaxed group-hover:text-white transition-colors">
                  {phase.description}
                </div>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -z-10 h-10 w-10 rounded-full bg-[#E63946]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-50 transition-opacity" />
                {index < phases.length - 1 && (
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -bottom-10 w-[2px] h-10 bg-white/10" aria-hidden />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
