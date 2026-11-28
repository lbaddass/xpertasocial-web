'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Compass, CheckCircle } from 'lucide-react';
import type { Dictionary, MethodologyDictionary, MethodologyStep } from '@/lib/localization/types';

export interface MethodologySectionProps {
  dictionary?: Dictionary['methodology'];
  headline?: string;
  subheadline?: string;
}

const DEFAULT_STEPS: MethodologyStep[] = [
  {
    stepNumber: '01',
    title: 'Audit & Semantic Disambiguation',
    description:
      'Exhaustive deep-crawl across server logs, entity graphs, Core Web Vitals, and competitor AI citation presence.',
    tag: 'DIAGNOSTIC PHASE',
  },
  {
    stepNumber: '02',
    title: 'Architectural Remediation',
    description:
      'Eliminating technical crawl bottlenecks, configuring Next.js edge caching, and deploying structured JSON-LD entity schema.',
    tag: 'FOUNDATION PHASE',
  },
  {
    stepNumber: '03',
    title: 'Knowledge Seeding & AI Citations',
    description:
      'Injecting authoritative source data into generative search retrieval sets (ChatGPT, Perplexity, Google SGE/Overviews).',
    tag: 'AUTHORITY PHASE',
  },
  {
    stepNumber: '04',
    title: 'Conversion Compounding & Telemetry',
    description:
      'Continuous algorithmic monitoring, real-time CRO micro-adjustments, and transactional funnel optimization.',
    tag: 'EXPANSION PHASE',
  },
];

export default function MethodologySection({
  dictionary,
  headline: propHeadline,
  subheadline: propSubheadline,
}: MethodologySectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const headline = propHeadline || dictionary?.headline || 'Engineered Execution Methodology';
  const subheadline =
    propSubheadline ||
    dictionary?.subheadline ||
    'A deterministic, four-stage protocol transforming fragmented web presence into an authoritative growth engine.';

  const steps = dictionary?.steps || DEFAULT_STEPS;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      aria-labelledby="methodology-heading"
      className="relative bg-primary py-20 md:py-28 border-b border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-elevated border border-border text-xs font-mono tracking-widest uppercase text-neon">
            <Compass className="w-3.5 h-3.5" />
            <span>FOUR-STAGE PROTOCOL</span>
          </div>
          <h2
            id="methodology-heading"
            className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-primary leading-tight"
          >
            {headline}
          </h2>
          <p className="text-secondary text-base sm:text-lg font-sans leading-relaxed">
            {subheadline}
          </p>
        </div>

        {/* ========================================================== */}
        {/* DESKTOP TIMELINE (4 Horizontal Steps with Gradient Line)  */}
        {/* ========================================================== */}
        <div className="hidden md:block relative">
          {/* Gradient Connection Line */}
          <div
            className="absolute top-[28px] left-[5%] right-[5%] h-[3px] bg-gradient-to-r from-neon via-neon-secondary to-muted-green z-0 rounded-full"
            aria-hidden="true"
          />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.stepNumber}
                style={{
                  transitionDelay: `${idx * 160}ms`,
                }}
                className={`flex flex-col transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {/* Node Pill with Step Number */}
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 rounded-full bg-elevated border-2 border-neon flex items-center justify-center shadow-[0_0_18px_rgba(163,255,102,0.25)]">
                    <span className="font-mono text-xl font-bold text-neon">
                      {step.stepNumber}
                    </span>
                  </div>
                </div>

                {/* Step Content Card */}
                <div className="flex-1 bg-elevated/70 border border-border rounded-xl p-6 flex flex-col justify-between hover:border-neon/30 transition-all duration-300">
                  <div>
                    {step.tag && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neon block mb-2">
                        {step.tag}
                      </span>
                    )}

                    <h3 className="font-heading text-xl font-bold text-primary mb-3 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-secondary text-sm leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-1.5 text-xs font-mono text-secondary/70">
                    <CheckCircle className="w-3.5 h-3.5 text-neon" />
                    <span>SYSTEM VERIFIED</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================== */}
        {/* MOBILE TIMELINE (Vertical Flow with Left Gradient Rail)   */}
        {/* ========================================================== */}
        <div className="block md:hidden relative pl-6 border-l-2 border-neon/40 space-y-8 ml-3">
          {steps.map((step, idx) => (
            <div
              key={`mobile-${step.stepNumber}`}
              style={{
                transitionDelay: `${idx * 140}ms`,
              }}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[35px] top-1.5 w-6 h-6 rounded-full bg-elevated border-2 border-neon flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-neon" />
              </div>

              {/* Step Card */}
              <div className="bg-elevated border border-border rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-2xl font-bold text-neon">
                    {step.stepNumber}
                  </span>
                  {step.tag && (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-secondary px-2 py-0.5 rounded bg-primary border border-border">
                      {step.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  {step.title}
                </h3>

                <p className="text-secondary text-sm leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
