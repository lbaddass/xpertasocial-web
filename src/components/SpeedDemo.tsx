'use client';

import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { Gauge, Zap, XCircle } from 'lucide-react';

export default function SpeedDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        if (prev < 65) return prev + 8;
        if (prev < 90) return prev + 2;
        return prev + 1;
      });
    }, 150);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="speed-demo" className="py-20 bg-[#1f2234] text-white border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-[#E63946] font-mono text-xs tracking-[0.3em]">TU SITIO VS NUESTRA INFRA</p>
          <h2 className="text-3xl font-black tracking-tight mb-3">Benchmark de carga.</h2>
          <p className="text-white/60 font-mono text-sm mb-6">Simulamos la diferencia entre un stack Wordpress saturado y nuestra infraestructura Next.js + Edge caching.</p>
          <button className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-[#E63946] transition-colors" aria-label="Probar mi velocidad actual">
            <Gauge size={16} /> Probar mi velocidad actual
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <DemoCard
            title="WordPress: 3.5s ❌"
            accentClass="border-red-500/50"
            icon={<XCircle className="text-red-500" size={18} />}
            progress={Math.min(progress, 75)}
            stuck
          />
          <DemoCard
            title="Next.js: 0.3s ✅"
            accentClass="border-[#E63946]/60"
            icon={<Zap className="text-[#E63946]" size={18} />}
            progress={progress}
          />
        </div>
      </div>
    </section>
  );
}

interface DemoCardProps {
  title: string;
  progress: number;
  icon: ReactElement;
  accentClass: string;
  stuck?: boolean;
}

function DemoCard({ title, progress, icon, accentClass, stuck = false }: DemoCardProps) {
  const safeProgress = stuck ? Math.min(progress, 72) : Math.min(progress, 100);

  return (
    <div className={`relative border border-white/10 rounded-xl bg-[#2B2D42] p-5 overflow-hidden ${accentClass}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-white/70 font-mono text-sm">
          {icon}
          <span>{title}</span>
        </div>
        <span className="text-xs text-white/50">Simulado</span>
      </div>
      <div className="h-36 bg-black/30 rounded-lg border border-white/10 flex items-center justify-center font-mono text-white/50">
        {stuck ? 'Cargando...' : 'Carga instantánea'}
      </div>
      <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className={`h-full ${stuck ? 'bg-red-500' : 'bg-[#E63946]'} transition-all duration-200`}
          style={{ width: `${safeProgress}%` }}
        />
      </div>
      <p className="mt-2 text-xs font-mono text-white/60">{stuck ? 'Se atasca en 72% (bloqueado por plugins)' : 'Edge cache + optimización de assets'}</p>
    </div>
  );
}
