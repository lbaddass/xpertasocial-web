'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Check, Layers, Cpu, Database, TrendingUp, Sparkles, Zap } from 'lucide-react';
import type { Dictionary, GrowthDictionary, GrowthLayer } from '@/lib/localization/types';

export interface GrowthArchitectureProps {
  dictionary?: Dictionary['growth'];
  headline?: string;
  subheadline?: string;
}

const DEFAULT_LAYERS: GrowthLayer[] = [
  {
    id: 'layer-discovery',
    name: 'DISCOVERY',
    label: 'LAYER 01',
    description: 'Capturing intent signals across algorithmic search and generative neural networks.',
    subItems: ['Entity Schema Graph', 'Perplexity & ChatGPT GEO', 'Technical Crawl Optimization'],
  },
  {
    id: 'layer-visibility',
    name: 'VISIBILITY',
    label: 'LAYER 02',
    description: 'Securing top-tier ranking dominance and authoritative answer synthesis.',
    subItems: ['Direct Snippet Capture', 'Knowledge Corpus Seeding', 'Topic Cluster Architecture'],
  },
  {
    id: 'layer-infrastructure',
    name: 'INFRASTRUCTURE',
    label: 'LAYER 03',
    description: 'High-speed edge frontend systems engineered for flawless performance.',
    subItems: ['Next.js App Router RSC', 'Sub-50ms TTFB Edge Cache', 'Shopify Hydrogen / Custom'],
  },
  {
    id: 'layer-conversion',
    name: 'CONVERSION',
    label: 'LAYER 04',
    description: 'Converting high-intent traffic into qualified enterprise revenue.',
    subItems: ['Micro-Friction Checkout', 'Dynamic Personalization', 'Real-time Lead Telemetry'],
  },
  {
    id: 'layer-optimization',
    name: 'OPTIMIZATION',
    label: 'LAYER 05',
    description: 'Continuous algorithmic telemetry and iterative revenue compounding.',
    subItems: ['Attribution Log Analysis', 'Synthetic Intent Testing', 'Conversion Rate Lift'],
  },
];

export default function GrowthArchitecture({
  dictionary,
  headline: propHeadline,
  subheadline: propSubheadline,
}: GrowthArchitectureProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [activatedSteps, setActivatedSteps] = useState<number>(0);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const headline = propHeadline || dictionary?.headline || 'The 5-Layer Growth Architecture';
  const subheadline =
    propSubheadline ||
    dictionary?.subheadline ||
    'An interconnected digital engineering blueprint that turns algorithmic discovery into permanent enterprise revenue.';

  const layers = dictionary?.layers || DEFAULT_LAYERS;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    const interval = setInterval(() => {
      setActivatedSteps((prev) => {
        if (prev < layers.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 280);

    return () => clearInterval(interval);
  }, [isIntersecting, layers.length]);

  return (
    <section
      ref={containerRef}
      aria-labelledby="growth-arch-headline"
      className="relative bg-secondary py-20 md:py-32 border-b border-border overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon/5 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-elevated border border-border text-xs font-mono tracking-widest uppercase text-neon">
            <Layers className="w-3.5 h-3.5" />
            <span>SYSTEM BLUEPRINT // END-TO-END</span>
          </div>
          <h2
            id="growth-arch-headline"
            className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-primary leading-tight"
          >
            {headline}
          </h2>
          <p className="text-secondary text-base sm:text-lg font-sans">
            {subheadline}
          </p>
        </div>

        {/* ========================================================== */}
        {/* DESKTOP VIEW: HORIZONTAL CONNECTED ARCHITECTURE DIAGRAM */}
        {/* ========================================================== */}
        <div className="hidden lg:block relative mb-8">
          {/* Horizontal SVG Connection Line */}
          <div className="absolute top-[28px] left-[6%] right-[6%] h-[2px] z-0 pointer-events-none">
            <svg
              className="w-full h-8 overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 1000 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Inactive Path */}
              <line
                x1="0"
                y1="10"
                x2="1000"
                y2="10"
                stroke="#27332B"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              {/* Dynamic Animated Green Flow Path */}
              <line
                x1="0"
                y1="10"
                x2={isIntersecting ? `${(activatedSteps / layers.length) * 1000}` : '0'}
                y2="10"
                stroke="#A3FF66"
                strokeWidth="2.5"
                className="transition-all duration-700 ease-out"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* 5 Layer Nodes Grid */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {layers.map((layer, index) => {
              const isStepActive = index < activatedSteps;
              const isCurrentStep = index === activatedSteps - 1;

              return (
                <div
                  key={layer.id || layer.name}
                  className={`flex flex-col transition-all duration-500 ${
                    isStepActive ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4'
                  }`}
                >
                  {/* Top Connector Node Circle */}
                  <div className="flex items-center justify-center mb-6">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isStepActive
                          ? 'bg-elevated border-neon text-neon shadow-[0_0_20px_rgba(163,255,102,0.35)]'
                          : 'bg-primary border-border text-secondary'
                      }`}
                    >
                      <span className="font-mono text-xs font-bold">0{index + 1}</span>
                    </div>
                  </div>

                  {/* Node Content Card */}
                  <div
                    className={`flex-1 rounded-xl p-5 border bg-elevated/80 flex flex-col justify-between transition-all duration-300 ${
                      isStepActive
                        ? 'border-neon/40 shadow-lg'
                        : 'border-border'
                    } ${isCurrentStep ? 'ring-1 ring-neon/50' : ''}`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neon">
                          {layer.label}
                        </span>
                        {isStepActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-ping" />
                        )}
                      </div>

                      <h3 className="font-heading text-lg font-bold text-primary mb-2">
                        {layer.name}
                      </h3>

                      <p className="text-secondary text-xs leading-relaxed font-sans mb-4">
                        {layer.description}
                      </p>
                    </div>

                    {/* Sub-Items List */}
                    <div className="pt-3 border-t border-border/60">
                      <ul className="space-y-1.5" role="list">
                        {layer.subItems.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-1.5 text-[11px] font-mono text-secondary"
                          >
                            <span className="w-1 h-1 rounded-full bg-neon/70 shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================== */}
        {/* MOBILE VIEW: VERTICAL FLOW WITH DOWNWARD CONNECTORS */}
        {/* ========================================================== */}
        <div className="block lg:hidden space-y-4">
          {layers.map((layer, index) => {
            const isStepActive = index < activatedSteps;

            return (
              <React.Fragment key={`mobile-${layer.id || layer.name}`}>
                <div
                  className={`rounded-xl border p-6 bg-elevated transition-all duration-500 ${
                    isStepActive
                      ? 'border-neon/40 shadow-[0_0_20px_rgba(163,255,102,0.1)] opacity-100'
                      : 'border-border opacity-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-neon">
                      {layer.label}
                    </span>
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-primary text-secondary border border-border">
                      0{index + 1} / 05
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-primary mb-2">
                    {layer.name}
                  </h3>

                  <p className="text-secondary text-sm leading-relaxed mb-4 font-sans">
                    {layer.description}
                  </p>

                  <div className="pt-3 border-t border-border/60">
                    <div className="text-[11px] font-mono uppercase text-secondary/80 mb-2">
                      ARCHITECTURE SUB-SYSTEMS:
                    </div>
                    <ul className="space-y-1.5" role="list">
                      {layer.subItems.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-mono text-secondary">
                          <Check className="w-3.5 h-3.5 text-neon shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Downward Connector Arrow */}
                {index < layers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                        isStepActive
                          ? 'border-neon/50 text-neon bg-elevated'
                          : 'border-border text-secondary/40 bg-secondary'
                      }`}
                    >
                      <ArrowDown className="w-4 h-4 animate-bounce" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
