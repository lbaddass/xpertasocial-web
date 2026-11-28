'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import type { Dictionary } from '@/lib/localization/types';

export interface HeroSectionProps {
  dictionary: {
    hero: Dictionary['hero'];
    capabilities: Dictionary['capabilities'];
  };
}

export default function HeroSection({ dictionary }: HeroSectionProps) {
  const { hero, capabilities } = dictionary;
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodeDetails: Record<string, { title: string; metric: string; desc: string }> = {
    search: {
      title: 'Search Discovery',
      metric: '0.1s Crawl Latency',
      desc: 'Technical SEO, Core Web Vitals, Structured Schema Graph.',
    },
    ai: {
      title: 'AI Discovery',
      metric: '94% Citation Rate',
      desc: 'Generative Search Optimization for Perplexity, ChatGPT & Gemini.',
    },
    conversion: {
      title: 'Conversion Infrastructure',
      metric: '<400ms TTFB',
      desc: 'Next.js App Router, Edge runtime & High-yield Shopify architectures.',
    },
  };

  const defaultServiceLabels = [
    'TECHNICAL SEO',
    'AEO & GEO',
    'NEXT.JS ARCHITECTURE',
    'HEADLESS SHOPIFY',
  ];

  const displayLabels =
    hero.serviceLabels && hero.serviceLabels.length > 0
      ? hero.serviceLabels
      : capabilities?.labels?.slice(0, 4) || defaultServiceLabels;

  return (
    <section
      aria-label="Hero Section"
      className="relative min-h-[92vh] flex items-center justify-center bg-primary overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border"
    >
      {/* Background Ambient Lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-muted-green/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-grid opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            {/* Eyebrow Label */}
            <div className="animate-slide-up stagger-1">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-elevated border border-border shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-neon font-semibold">
                  {hero.eyebrow}
                </span>
              </div>
            </div>

            {/* H1 Heading */}
            <h1 className="animate-slide-up stagger-2 font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.05]">
              {hero.title}{' '}
              {hero.titleHighlight && (
                <span className="text-gradient-neon block sm:inline">
                  {hero.titleHighlight}
                </span>
              )}
            </h1>

            {/* Subtitle */}
            <p className="animate-slide-up stagger-3 text-secondary text-lg sm:text-xl font-normal leading-relaxed max-w-2xl font-sans">
              {hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="animate-slide-up stagger-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href={hero.ctaPrimary.href}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-neon text-bg-primary font-heading font-semibold text-base rounded-md hover:bg-neon-secondary hover:shadow-[0_0_24px_rgba(163,255,102,0.35)] active:scale-[0.98] transition-all duration-200"
              >
                <span>{hero.ctaPrimary.text}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={hero.ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-border bg-elevated/60 text-primary font-heading font-medium text-base rounded-md hover:border-neon/60 hover:text-neon hover:bg-elevated transition-all duration-200"
              >
                <span>{hero.ctaSecondary.text}</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </Link>
            </div>

            {/* Service Labels Row */}
            <div className="animate-slide-up stagger-5 pt-4 border-t border-border/60">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-secondary/70 mr-1">
                  CORE SPECIALIZATIONS:
                </span>
                {displayLabels.map((label, idx) => (
                  <span
                    key={`${label}-${idx}`}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary/80 border border-border/80 font-mono text-xs text-secondary hover:text-neon hover:border-neon/40 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-neon/60" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Desktop & Mobile): Interactive SVG Visualization */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[480px] lg:max-w-[520px] aspect-square rounded-2xl border border-border/80 bg-secondary/70 p-4 sm:p-6 backdrop-blur-md shadow-2xl flex flex-col justify-between">
              {/* Terminal-style Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border/60 text-secondary font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neon/80" />
                  <span className="text-secondary/80 ml-2 tracking-wider">TOPOLOGY: INTEGRATED HUB</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-neon font-mono">
                  <Activity className="w-3.5 h-3.5" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Main SVG Visualization */}
              <div className="relative flex-1 flex items-center justify-center my-2">
                <svg
                  viewBox="0 0 500 480"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full max-h-[380px]"
                  aria-label="Interactive architecture visualization of XpertaSocial node network"
                  role="img"
                >
                  <defs>
                    {/* Linear Gradients for Connection Lines */}
                    <linearGradient id="lineGrad1" x1="250" y1="240" x2="250" y2="70" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#A3FF66" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#C5FF9A" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="lineGrad2" x1="250" y1="240" x2="100" y2="380" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#A3FF66" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#315B37" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="lineGrad3" x1="250" y1="240" x2="400" y2="380" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#A3FF66" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#315B37" stopOpacity="0.3" />
                    </linearGradient>

                    {/* Radial Glow for Nodes */}
                    <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#A3FF66" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#080B09" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Outer Orbital Orbit Ring */}
                  <circle
                    cx="250"
                    cy="240"
                    r="190"
                    stroke="#27332B"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                    className="opacity-60"
                  />
                  <circle
                    cx="250"
                    cy="240"
                    r="120"
                    stroke="#27332B"
                    strokeWidth="1"
                    strokeDasharray="2 4"
                    className="opacity-40"
                  />

                  {/* Inter-Node Outer Triangle Connectors */}
                  <path
                    d="M 250 70 L 400 380 L 100 380 Z"
                    stroke="#27332B"
                    strokeWidth="1"
                    strokeDasharray="6 6"
                    className="opacity-40"
                  />

                  {/* Radiating Animated Connection Lines from Central Hub */}
                  {/* Line 1: Center -> Search Discovery (Top) */}
                  <line
                    x1="250"
                    y1="240"
                    x2="250"
                    y2="85"
                    stroke="url(#lineGrad1)"
                    strokeWidth="2"
                    strokeDasharray="8 6"
                    className="connection-line"
                  />

                  {/* Line 2: Center -> AI Discovery (Bottom-Left) */}
                  <line
                    x1="250"
                    y1="240"
                    x2="110"
                    y2="370"
                    stroke="url(#lineGrad2)"
                    strokeWidth="2"
                    strokeDasharray="8 6"
                    className="connection-line"
                  />

                  {/* Line 3: Center -> Conversion Infra (Bottom-Right) */}
                  <line
                    x1="250"
                    y1="240"
                    x2="390"
                    y2="370"
                    stroke="url(#lineGrad3)"
                    strokeWidth="2"
                    strokeDasharray="8 6"
                    className="connection-line"
                  />

                  {/* ======================================================== */}
                  {/* NODE 1: SEARCH DISCOVERY (TOP) */}
                  {/* ======================================================== */}
                  <g
                    className="cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => setActiveNode(activeNode === 'search' ? null : 'search')}
                    onMouseEnter={() => setActiveNode('search')}
                  >
                    <circle cx="250" cy="70" r="32" fill="#151D17" stroke={activeNode === 'search' ? '#A3FF66' : '#27332B'} strokeWidth="2" />
                    <circle cx="250" cy="70" r="40" fill="none" stroke="#A3FF66" strokeWidth="1" strokeDasharray="3 3" className="opacity-40 animate-spin" style={{ transformOrigin: '250px 70px', animationDuration: '18s' }} />
                    <circle cx="250" cy="70" r="6" fill="#A3FF66" />
                    <text x="250" y="32" textAnchor="middle" fill="#F5F7F4" fontSize="11" fontFamily="var(--font-heading)" fontWeight="600" letterSpacing="1px">
                      SEARCH DISCOVERY
                    </text>
                    <text x="250" y="118" textAnchor="middle" fill="#9AA59C" fontSize="9" fontFamily="var(--font-mono)">
                      SEO & ENTITY GRAPH
                    </text>
                  </g>

                  {/* ======================================================== */}
                  {/* NODE 2: AI DISCOVERY (BOTTOM-LEFT) */}
                  {/* ======================================================== */}
                  <g
                    className="cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => setActiveNode(activeNode === 'ai' ? null : 'ai')}
                    onMouseEnter={() => setActiveNode('ai')}
                  >
                    <circle cx="100" cy="380" r="32" fill="#151D17" stroke={activeNode === 'ai' ? '#A3FF66' : '#27332B'} strokeWidth="2" />
                    <circle cx="100" cy="380" r="40" fill="none" stroke="#C5FF9A" strokeWidth="1" strokeDasharray="3 3" className="opacity-40 animate-spin" style={{ transformOrigin: '100px 380px', animationDuration: '22s' }} />
                    <circle cx="100" cy="380" r="6" fill="#C5FF9A" />
                    <text x="100" y="426" textAnchor="middle" fill="#F5F7F4" fontSize="11" fontFamily="var(--font-heading)" fontWeight="600" letterSpacing="1px">
                      AI DISCOVERY
                    </text>
                    <text x="100" y="440" textAnchor="middle" fill="#9AA59C" fontSize="9" fontFamily="var(--font-mono)">
                      AEO · GEO · CITATIONS
                    </text>
                  </g>

                  {/* ======================================================== */}
                  {/* NODE 3: CONVERSION INFRASTRUCTURE (BOTTOM-RIGHT) */}
                  {/* ======================================================== */}
                  <g
                    className="cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => setActiveNode(activeNode === 'conversion' ? null : 'conversion')}
                    onMouseEnter={() => setActiveNode('conversion')}
                  >
                    <circle cx="400" cy="380" r="32" fill="#151D17" stroke={activeNode === 'conversion' ? '#A3FF66' : '#27332B'} strokeWidth="2" />
                    <circle cx="400" cy="380" r="40" fill="none" stroke="#A3FF66" strokeWidth="1" strokeDasharray="3 3" className="opacity-40 animate-spin" style={{ transformOrigin: '400px 380px', animationDuration: '20s' }} />
                    <circle cx="400" cy="380" r="6" fill="#A3FF66" />
                    <text x="400" y="426" textAnchor="middle" fill="#F5F7F4" fontSize="11" fontFamily="var(--font-heading)" fontWeight="600" letterSpacing="1px">
                      CONVERSION INFRA
                    </text>
                    <text x="400" y="440" textAnchor="middle" fill="#9AA59C" fontSize="9" fontFamily="var(--font-mono)">
                      NEXT.JS & SHOPIFY
                    </text>
                  </g>

                  {/* ======================================================== */}
                  {/* CENTRAL NODE: XPERTASOCIAL CORE */}
                  {/* ======================================================== */}
                  <g className="cursor-pointer">
                    <circle cx="250" cy="240" r="54" fill="url(#centerGlow)" />
                    <circle cx="250" cy="240" r="44" fill="#101611" stroke="#A3FF66" strokeWidth="2" />
                    <circle cx="250" cy="240" r="48" fill="none" stroke="#A3FF66" strokeWidth="1" strokeDasharray="4 2" className="animate-spin" style={{ transformOrigin: '250px 240px', animationDuration: '14s' }} />
                    <text x="250" y="236" textAnchor="middle" fill="#A3FF66" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700" letterSpacing="1.5px">
                      XPERTASOCIAL
                    </text>
                    <text x="250" y="252" textAnchor="middle" fill="#9AA59C" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.8px">
                      CORE ENGINE
                    </text>
                  </g>
                </svg>
              </div>

              {/* Bottom Interactive Spec Panel */}
              <div className="pt-3 border-t border-border/60 bg-elevated/40 rounded px-3 py-2 min-h-[58px] flex items-center justify-between text-xs">
                {activeNode && nodeDetails[activeNode] ? (
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-semibold text-primary">
                        {nodeDetails[activeNode].title}
                      </span>
                      <span className="font-mono text-neon text-[11px] font-bold">
                        {nodeDetails[activeNode].metric}
                      </span>
                    </div>
                    <p className="text-secondary text-[11px] line-clamp-1 mt-0.5">
                      {nodeDetails[activeNode].desc}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-full text-secondary text-[11px]">
                    <span className="flex items-center gap-1.5 font-mono">
                      <Sparkles className="w-3.5 h-3.5 text-neon" />
                      Hover nodes to inspect architecture telemetry
                    </span>
                    <span className="font-mono text-[10px] text-neon/80 uppercase">
                      READY
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
