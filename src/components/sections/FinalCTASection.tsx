import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Terminal, Shield, Zap } from 'lucide-react';
import type { Dictionary, FinalCtaDictionary } from '@/lib/localization/types';

export interface FinalCTASectionProps {
  dictionary?: Dictionary['finalCta'];
  headline?: string;
  subheadline?: string;
  ctaPrimary?: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
}

export default function FinalCTASection({
  dictionary,
  headline: propHeadline,
  subheadline: propSubheadline,
  ctaPrimary: propCtaPrimary,
  ctaSecondary: propCtaSecondary,
}: FinalCTASectionProps) {
  const headline =
    propHeadline ||
    dictionary?.headline ||
    'Ready to Transform Your Digital Discovery Architecture?';

  const subheadline =
    propSubheadline ||
    dictionary?.subheadline ||
    'Stop burning budget on unindexed traffic. Deploy the modern web engineering stack engineered for search visibility, AI retrieval dominance, and permanent conversion yield.';

  const ctaPrimary =
    propCtaPrimary ||
    dictionary?.ctaPrimary || {
      text: 'SCHEDULE AN ARCHITECTURAL AUDIT',
      href: '/audit',
    };

  const ctaSecondary =
    propCtaSecondary ||
    dictionary?.ctaSecondary || {
      text: 'VIEW TECHNICAL SPECIFICATIONS',
      href: '/architecture',
    };

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative bg-secondary py-24 sm:py-32 lg:py-40 border-t border-border overflow-hidden"
    >
      {/* Radial Gradient Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[500px] bg-neon/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Technical Grid Background */}
      <div
        className="absolute inset-0 bg-grid opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Technical Coordinate Corner Markers */}
      <div
        className="absolute top-8 left-8 hidden sm:flex items-center gap-2 font-mono text-[10px] text-secondary/40 select-none"
        aria-hidden="true"
      >
        <span className="w-1.5 h-1.5 bg-neon/60 rounded-full" />
        <span>SYS.LOC // 34.0522° N, 118.2437° W</span>
      </div>
      <div
        className="absolute bottom-8 right-8 hidden sm:flex items-center gap-2 font-mono text-[10px] text-secondary/40 select-none"
        aria-hidden="true"
      >
        <span>DEPLOYMENT READY // v2.0</span>
        <span className="w-1.5 h-1.5 bg-neon/60 rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Eyebrow Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-elevated border border-border text-xs font-mono tracking-widest uppercase text-neon mb-8 shadow-sm">
          <Terminal className="w-3.5 h-3.5" />
          <span>PRODUCTION READINESS INITIATIVE</span>
        </div>

        {/* H2 Headline */}
        <h2
          id="final-cta-heading"
          className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.1] mb-6"
        >
          {headline}
        </h2>

        {/* Subtitle / Supporting text */}
        <p className="text-secondary text-base sm:text-xl font-sans max-w-2xl mx-auto leading-relaxed mb-10">
          {subheadline}
        </p>

        {/* Two CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href={ctaPrimary.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-neon text-bg-primary font-heading font-semibold text-base rounded-md hover:bg-neon-secondary hover:shadow-[0_0_30px_rgba(163,255,102,0.4)] active:scale-[0.98] transition-all duration-200"
          >
            <span>{ctaPrimary.text}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href={ctaSecondary.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 border border-border bg-elevated/70 text-primary font-heading font-medium text-base rounded-md hover:border-neon hover:text-neon hover:bg-elevated transition-all duration-200"
          >
            <span>{ctaSecondary.text}</span>
            <ChevronRight className="w-4 h-4 opacity-70" />
          </Link>
        </div>

        {/* Technical Trust Strip */}
        <div className="mt-14 pt-8 border-t border-border/60 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-mono text-secondary/70">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-neon" />
            <span>ENTERPRISE NDA PROTECTED</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-neon" />
            <span>NEXT.JS & EDGE RUNTIME</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span>ACCEPTING Q1 ENGAGEMENTS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
