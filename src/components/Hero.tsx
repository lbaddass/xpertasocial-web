'use client';

import { useEffect, useState } from 'react';
import { Activity, ArrowRight, Database, Play } from 'lucide-react';
import { useRouter } from 'next/navigation';

const gridLines = Array.from({ length: 12 }, (_, index) => index);

export default function Hero() {
  const router = useRouter();
  const [gridOffset, setGridOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = ((event.clientX - innerWidth / 2) / innerWidth) * 10;
      const offsetY = ((event.clientY - innerHeight / 2) / innerHeight) * 10;
      setGridOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDiagnostic = () => {
    // Router navigation for the diagnostic flow + simple analytics beacon
    router.push('/diagnostico');
    window.dispatchEvent(new CustomEvent('cta:diagnostico')); // stub analytics hook
  };

  const handleDemo = () => {
    router.push('#speed-demo');
    window.dispatchEvent(new CustomEvent('cta:demo')); // stub analytics hook
  };

  return (
    <section className="relative overflow-hidden bg-[#2B2D42] text-[#F8F9FA]">
      {/* Blueprint grid with parallax offset */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          transform: `translate3d(${gridOffset.x}px, ${gridOffset.y}px, 0)`,
          transition: 'transform 150ms ease-out',
        }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(248,249,250,0.08),transparent_55%)]" />
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-[repeat(12,minmax(0,1fr))]">
          {gridLines.map((index) => (
            <div key={`col-${index}`} className="border border-white/5" />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-20 pb-28">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 rounded-full backdrop-blur-sm animate-fade-in">
          <Database size={16} className="text-[#E63946]" />
          <span className="font-mono text-xs tracking-[0.25em] text-white/70">GROWTH ENGINEERING HUB</span>
          <span className="flex items-center gap-1 text-[10px] text-white/60">
            <Activity size={12} /> LATENCIA 0.3s
          </span>
        </div>

        <div className="mt-10 space-y-6 animate-rise">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
            Infraestructura automatizada que convierte tráfico en ingresos predecibles.
          </h1>
          <p className="max-w-3xl text-base sm:text-lg text-white/70 border-l-2 border-[#E63946] pl-4 font-mono">
            Sistemas Next.js + IA + n8n diseñados para clínicas de alto ticket. Detectamos formatos ganadores, los clonamos con tu marca y los publicamos en automático.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              aria-label="Diagnosticar mi sistema"
              onClick={handleDiagnostic}
              className="group relative px-8 py-4 bg-[#F8F9FA] text-[#2B2D42] font-bold rounded-lg overflow-hidden transition-all"
            >
              <span className="absolute inset-0 bg-[#E63946] opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="flex items-center gap-2">
                Diagnosticar Mi Sistema
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </div>
            </button>
            <button
              aria-label="Ver demo de automatización"
              onClick={handleDemo}
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:border-[#E63946] transition-colors"
            >
              Ver Demo de Automatización
            </button>
          </div>
        </div>

        {/* Demo video placeholder */}
        <div className="mt-14 grid lg:grid-cols-[2fr,1fr] gap-6 items-center">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E63946]/20 via-transparent to-white/5" />
            <div className="aspect-video flex items-center justify-center">
              <button
                aria-label="Reproducir demo"
                onClick={handleDemo}
                className="h-16 w-16 rounded-full bg-white text-[#2B2D42] flex items-center justify-center shadow-lg shadow-[#E63946]/40 border border-white/60 hover:scale-105 transition-transform"
              >
                <Play size={28} />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-black/60 backdrop-blur flex justify-between text-xs font-mono text-white/70">
              <span>Demo: Content Factory™ → 50 videos en 24h</span>
              <span className="text-[#E63946]">Latency 0.3s</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Tiempo de despliegue', value: '48h', detail: 'Infraestructura lista en Vercel Edge' },
              { label: 'Batch de videos IA', value: '50', detail: 'Short-form optimizados para TikTok/IG/Shorts' },
              { label: 'Landing Page', value: 'Next.js 14', detail: 'Optimizada para conversión + tracking' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between border border-white/10 rounded-lg px-4 py-3 bg-white/5 hover:border-[#E63946]/60 transition-all"
              >
                <div>
                  <p className="text-xs text-white/50 font-mono">{item.label}</p>
                  <p className="text-sm text-white/80">{item.detail}</p>
                </div>
                <span className="text-2xl font-black text-[#E63946] font-mono">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
