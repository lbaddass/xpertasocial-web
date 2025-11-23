'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

function formatTime(totalSeconds: number): { days: string; hours: string; minutes: string } {
  const days = Math.max(Math.floor(totalSeconds / 86400), 0);
  const hours = Math.max(Math.floor((totalSeconds % 86400) / 3600), 0);
  const minutes = Math.max(Math.floor((totalSeconds % 3600) / 60), 0);
  return {
    days: days.toString().padStart(2, '0'),
    hours: hours.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
  };
}

export default function FinalCTA() {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(4 * 86400 + 12 * 3600 + 35 * 60);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const time = formatTime(secondsLeft);

  return (
    <section className="py-20 bg-[#1f2234] text-white border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-6">
        <p className="text-[#E63946] font-mono text-xs tracking-[0.3em]">SLOTS LIMITADOS</p>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">Agendemos tu diagnóstico técnico.</h2>
        <p className="text-white/60 font-mono text-sm max-w-3xl mx-auto">Desplegamos tu Content Factory con un equipo de ingeniería dedicado. Sin promesas vacías: métricas, velocidad y automatización.</p>

        <div className="flex items-center justify-center gap-4 font-mono text-lg bg-[#2B2D42] border border-white/10 rounded-xl px-6 py-4 w-fit mx-auto">
          <span className="text-white/60">PRÓXIMOS SLOTS DISPONIBLES EN:</span>
          <div className="flex items-center gap-3 text-2xl font-black">
            <span>{time.days}D</span>
            <span className="text-[#E63946]">·</span>
            <span>{time.hours}H</span>
            <span className="text-[#E63946]">·</span>
            <span>{time.minutes}M</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            aria-label="Reservar diagnóstico"
            onClick={() => router.push('/diagnostico')}
            className="relative px-8 py-4 rounded-lg bg-[#E63946] text-white font-bold uppercase tracking-wide shadow-[0_0_25px_rgba(230,57,70,0.45)] hover:shadow-[0_0_35px_rgba(230,57,70,0.65)] transition-shadow"
          >
            <span className="absolute inset-0 rounded-lg border border-white/20 animate-pulse opacity-60" aria-hidden />
            <div className="flex items-center gap-2">
              Agendar Diagnóstico
              <ArrowRight size={18} />
            </div>
          </button>
          <button
            aria-label="Ver frameworks"
            onClick={() => router.push('/frameworks')}
            className="px-8 py-4 rounded-lg border border-white/20 text-white font-semibold hover:border-[#E63946] transition-colors"
          >
            Ver frameworks
          </button>
        </div>

        <p className="text-xs text-white/50 font-mono">Operado por José Luis García Orobio · Growth Engineering Hub</p>
      </div>
    </section>
  );
}
