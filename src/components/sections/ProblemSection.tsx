import React from 'react';
import { Search, Brain, Target, AlertTriangle } from 'lucide-react';

export interface ProblemCardItem {
  title: string;
  description: string;
}

export interface ProblemSectionProps {
  headline: string;
  cards: ProblemCardItem[];
}

export default function ProblemSection({ headline, cards }: ProblemSectionProps) {
  const cardConfig = [
    {
      icon: Search,
      accentBorder: 'hover:border-[#A3FF66]/60 border-t-[#A3FF66]',
      iconBg: 'bg-[#A3FF66]/10 text-[#A3FF66] border-[#A3FF66]/30',
      badge: 'PROBLEM 01 // DISCOVERY BLIND SPOT',
      glow: 'group-hover:shadow-[0_0_30px_rgba(163,255,102,0.12)]',
    },
    {
      icon: Brain,
      accentBorder: 'hover:border-[#3B82F6]/60 border-t-[#3B82F6]',
      iconBg: 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/30',
      badge: 'PROBLEM 02 // AI SYNTHESIS GAP',
      glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]',
    },
    {
      icon: Target,
      accentBorder: 'hover:border-[#F59E0B]/60 border-t-[#F59E0B]',
      iconBg: 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30',
      badge: 'PROBLEM 03 // INFRASTRUCTURE LEAK',
      glow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]',
    },
  ];

  return (
    <section
      aria-labelledby="problem-section-headline"
      className="relative bg-primary py-20 md:py-28 border-b border-border overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-neon/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-elevated border border-border text-xs font-mono tracking-widest uppercase text-neon">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>THE STRATEGIC REALITY</span>
          </div>
          <h2
            id="problem-section-headline"
            className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-primary leading-tight"
          >
            {headline}
          </h2>
          <p className="text-secondary text-base sm:text-lg font-sans">
            Traffic without technical architecture is pure capital waste. Most digital stacks fail quietly at three critical failure points.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const config = cardConfig[index % cardConfig.length];
            const Icon = config.icon;

            return (
              <article
                key={`${card.title}-${index}`}
                className={`group relative bg-elevated/70 border border-border rounded-xl p-6 sm:p-8 flex flex-col justify-between border-t-4 ${config.accentBorder} ${config.glow} transition-all duration-300 hover:-translate-y-1.5`}
              >
                <div>
                  {/* Top Badge & Icon Area */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center border ${config.iconBg} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider uppercase text-secondary/60 bg-secondary/80 px-2 py-1 rounded border border-border/50">
                      {config.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary mb-4 leading-snug group-hover:text-neon transition-colors duration-200">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary text-sm sm:text-base leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Architectural Note */}
                <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-secondary/60">
                  <span>ROOT CAUSE: SYSTEMIC</span>
                  <span className="text-neon/70 group-hover:text-neon transition-colors">
                    REMEDIABLE →
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
