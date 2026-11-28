'use client';

import React, { useState, useRef, KeyboardEvent } from 'react';
import Link from 'next/link';
import {
  Code2,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Gauge,
  Layers,
  Terminal,
} from 'lucide-react';
import type { Dictionary, WebEngDictionary, WebEngTabContent } from '@/lib/localization/types';

export interface WebEngineeringProps {
  dictionary?: Dictionary['webEng'];
  headline?: string;
  subheadline?: string;
}

type TabKey = 'nextjs' | 'shopify';

export default function WebEngineering({
  dictionary,
  headline: propHeadline,
  subheadline: propSubheadline,
}: WebEngineeringProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('nextjs');
  const tabListRef = useRef<HTMLDivElement>(null);

  const headline = propHeadline || dictionary?.headline || 'Web Engineering Systems';
  const subheadline =
    propSubheadline ||
    dictionary?.subheadline ||
    'High-velocity frontend engines and resilient digital storefronts built with modern production infrastructure.';

  const defaultTabs: Record<TabKey, WebEngTabContent> = {
    nextjs: {
      title: 'Next.js 15+ Enterprise Architecture',
      badge: 'SERVER-FIRST HYBRID RUNTIME',
      description:
        'Architected for sub-second page delivery, zero layout shift, and automated Edge rendering. Optimized for rigorous SEO requirements and high-frequency content updates.',
      capabilities: [
        'React Server Components (RSC) streaming architecture',
        'Incremental Static Regeneration (ISR) with Edge caching',
        'Dynamic OpenGraph and schema injection pipelines',
        '100/100 Core Web Vitals performance benchmarks',
      ],
      codeSnippet: `// app/[locale]/layout.tsx
export async function generateMetadata({ params }) {
  const meta = await getTelemetryData(params.slug);
  return {
    title: meta.title,
    alternates: { canonical: meta.canonicalUrl },
    openGraph: { type: 'website', images: [meta.ogImage] }
  };
}

export default async function Layout({ children }) {
  return (
    <ServerSuspense fallback={<TerminalSkeleton />}>
      <EdgeRuntimeStream data={runtimeConfig}>
        {children}
      </EdgeRuntimeStream>
    </ServerSuspense>
  );
}`,
      ctaText: 'EXPLORE NEXT.JS ENGINEERING',
      ctaHref: '/services/nextjs-engineering',
    },
    shopify: {
      title: 'Headless & Custom Shopify Platforms',
      badge: 'HIGH-CONVERTING COMMERCE INFRA',
      description:
        'Engineered for maximum transactional throughput. Combining headless Hydrogen / Liquid speed with resilient checkout workflows and frictionless mobile UX.',
      capabilities: [
        'Sub-second Global TTFB with Edge storefront CDN',
        'Zero-flicker headless cart drawer & 1-click checkout',
        'Multi-currency & localized catalog synchronizers',
        'Algolia & AI-powered real-time catalog discovery',
      ],
      storefrontFeatures: [
        'Speed Score: 99/100 Mobile PageSpeed',
        'Cart Latency: <120ms Client State Sync',
        'Conversion Lift: +28% Average Benchmark',
        'API Architecture: GraphQL Storefront API v2025',
      ],
      ctaText: 'EXPLORE SHOPIFY PLATFORMS',
      ctaHref: '/services/shopify-commerce',
    },
  };

  const tabsData = dictionary?.tabs || defaultTabs;
  const currentTab = tabsData[activeTab] || defaultTabs[activeTab];

  const tabKeys: TabKey[] = ['nextjs', 'shopify'];

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, currentKey: TabKey) => {
    const currentIndex = tabKeys.indexOf(currentKey);
    let targetIndex = currentIndex;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      targetIndex = (currentIndex + 1) % tabKeys.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      targetIndex = (currentIndex - 1 + tabKeys.length) % tabKeys.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      targetIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      targetIndex = tabKeys.length - 1;
    }

    if (targetIndex !== currentIndex) {
      const nextTab = tabKeys[targetIndex];
      setActiveTab(nextTab);
      const buttons = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      buttons?.[targetIndex]?.focus();
    }
  };

  return (
    <section
      aria-labelledby="web-eng-heading"
      className="relative bg-primary py-20 md:py-28 border-b border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-elevated border border-border text-xs font-mono tracking-widest uppercase text-neon">
            <span>PILLAR 02 // CONVERSION INFRASTRUCTURE</span>
          </div>
          <h2
            id="web-eng-heading"
            className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-primary leading-tight"
          >
            {headline}
          </h2>
          <p className="text-secondary text-base sm:text-lg font-sans leading-relaxed">
            {subheadline}
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pb-8 border-b border-border">
          <div
            ref={tabListRef}
            role="tablist"
            aria-label="Web Engineering Platforms"
            className="inline-flex p-1.5 rounded-lg bg-secondary border border-border self-start sm:self-auto"
          >
            <button
              id="tab-nextjs"
              type="button"
              role="tab"
              aria-selected={activeTab === 'nextjs'}
              aria-controls="panel-nextjs"
              tabIndex={activeTab === 'nextjs' ? 0 : -1}
              onClick={() => setActiveTab('nextjs')}
              onKeyDown={(e) => handleKeyDown(e, 'nextjs')}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-md font-heading font-medium text-sm transition-all duration-200 outline-none ${
                activeTab === 'nextjs'
                  ? 'bg-elevated text-neon border border-neon/40 shadow-sm'
                  : 'text-secondary hover:text-primary hover:bg-elevated/40'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>NEXT.JS</span>
            </button>

            <button
              id="tab-shopify"
              type="button"
              role="tab"
              aria-selected={activeTab === 'shopify'}
              aria-controls="panel-shopify"
              tabIndex={activeTab === 'shopify' ? 0 : -1}
              onClick={() => setActiveTab('shopify')}
              onKeyDown={(e) => handleKeyDown(e, 'shopify')}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-md font-heading font-medium text-sm transition-all duration-200 outline-none ${
                activeTab === 'shopify'
                  ? 'bg-elevated text-neon border border-neon/40 shadow-sm'
                  : 'text-secondary hover:text-primary hover:bg-elevated/40'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>SHOPIFY</span>
            </button>
          </div>

          <div className="font-mono text-xs text-secondary/70 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span>ACTIVE RUNTIME: {activeTab.toUpperCase()}</span>
          </div>
        </div>

        {/* Tab Panel with Animate Content Swap */}
        <div
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          key={activeTab}
          className="pt-10 transition-all duration-300 animate-slide-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Details & Capabilities */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-2.5 py-1 rounded bg-secondary border border-border font-mono text-[11px] text-neon uppercase tracking-wider">
                {currentTab.badge}
              </div>

              <h3 className="font-heading text-2xl sm:text-4xl font-bold text-primary">
                {currentTab.title}
              </h3>

              <p className="text-secondary text-base leading-relaxed font-sans">
                {currentTab.description}
              </p>

              <div className="pt-4 border-t border-border/80">
                <h4 className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                  CORE INFRASTRUCTURE CAPABILITIES:
                </h4>
                <ul className="space-y-3" role="list">
                  {currentTab.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3 text-secondary text-sm">
                      <CheckCircle2 className="w-4 h-4 text-neon shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <Link
                  href={currentTab.ctaHref}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-neon text-bg-primary font-heading font-semibold text-sm rounded-md hover:bg-neon-secondary hover:shadow-[0_0_20px_rgba(163,255,102,0.3)] transition-all duration-200"
                >
                  <span>{currentTab.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Element */}
            <div className="lg:col-span-6">
              {activeTab === 'nextjs' ? (
                /* Next.js Code-Style Card */
                <div className="rounded-xl border border-border bg-secondary overflow-hidden shadow-2xl">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-elevated border-b border-border text-xs font-mono text-secondary">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                      <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                      <span className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                      <span className="ml-2 text-primary font-semibold">src/app/edge-runtime.tsx</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-neon text-[11px]">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>NODE v22 / NEXT 15</span>
                    </div>
                  </div>

                  {/* Code Body */}
                  <div className="p-5 font-mono text-xs leading-relaxed text-[#C5FF9A] overflow-x-auto bg-[#080B09]">
                    <pre className="text-secondary/90">
                      <code>{currentTab.codeSnippet}</code>
                    </pre>
                  </div>

                  {/* Terminal Footer Telemetry */}
                  <div className="px-4 py-3 bg-elevated/60 border-t border-border flex items-center justify-between text-[11px] font-mono text-secondary">
                    <span className="flex items-center gap-1.5 text-neon">
                      <Zap className="w-3.5 h-3.5" />
                      Lighthouse Performance: 100/100
                    </span>
                    <span>SSR: 32ms</span>
                  </div>
                </div>
              ) : (
                /* Shopify Storefront-Style Card */
                <div className="rounded-xl border border-border bg-secondary overflow-hidden shadow-2xl">
                  {/* Storefront Architecture Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-elevated border-b border-border text-xs font-mono text-secondary">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <ShoppingBag className="w-4 h-4 text-neon" />
                      <span>SHOPIFY HYDROGEN STOREFRONT</span>
                    </div>
                    <span className="text-neon text-[11px] font-mono">GLOBAL EDGE CDN</span>
                  </div>

                  {/* Storefront Mock Metrics Grid */}
                  <div className="p-6 bg-primary space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-elevated border border-border">
                        <div className="flex items-center gap-2 text-xs font-mono text-secondary mb-1">
                          <Gauge className="w-4 h-4 text-neon" />
                          <span>PAGESPEED</span>
                        </div>
                        <div className="text-2xl font-heading font-bold text-neon">99 / 100</div>
                        <div className="text-[11px] text-secondary mt-1">Mobile Core Web Vitals</div>
                      </div>

                      <div className="p-4 rounded-lg bg-elevated border border-border">
                        <div className="flex items-center gap-2 text-xs font-mono text-secondary mb-1">
                          <Zap className="w-4 h-4 text-neon" />
                          <span>TTFB LATENCY</span>
                        </div>
                        <div className="text-2xl font-heading font-bold text-neon">&lt;110ms</div>
                        <div className="text-[11px] text-secondary mt-1">Edge Cached Worldwide</div>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="p-4 rounded-lg bg-elevated border border-border space-y-2.5">
                      <div className="text-xs font-mono uppercase text-secondary/80 tracking-wider">
                        PLATFORM BENCHMARKS:
                      </div>
                      <div className="space-y-1.5">
                        {currentTab.storefrontFeatures?.map((feature, i) => (
                          <div key={i} className="flex items-center justify-between text-xs font-mono">
                            <span className="text-secondary">{feature.split(':')[0]}</span>
                            <span className="text-neon font-semibold">{feature.split(':')[1]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Storefront Footer */}
                  <div className="px-4 py-3 bg-elevated/60 border-t border-border flex items-center justify-between text-[11px] font-mono text-secondary">
                    <span className="flex items-center gap-1.5 text-neon">
                      <Shield className="w-3.5 h-3.5" />
                      Shopify Plus API v2025
                    </span>
                    <span className="text-secondary/70">Sub-second Checkout</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
