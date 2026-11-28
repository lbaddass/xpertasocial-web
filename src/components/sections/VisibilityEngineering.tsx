import React from 'react';
import Link from 'next/link';
import { Search, MessageSquare, Sparkles, Check, ArrowRight } from 'lucide-react';
import type { Dictionary, VisibilityService } from '@/lib/localization/types';

export interface VisibilityEngineeringProps {
  dictionary?: Dictionary['visibility'];
  headline?: string;
  subheadline?: string;
  services?: VisibilityService[];
}

export default function VisibilityEngineering({
  dictionary,
  headline: propHeadline,
  subheadline: propSubheadline,
  services: propServices,
}: VisibilityEngineeringProps) {
  const headline = propHeadline || dictionary?.headline || 'Visibility Engineering';
  const subheadline =
    propSubheadline ||
    dictionary?.subheadline ||
    'Precision discovery architectures engineered for algorithmic dominance across traditional and generative engines.';

  const defaultServices: VisibilityService[] = [
    {
      id: 'seo',
      name: 'TECHNICAL SEO',
      tag: 'INDEXATION ARCHITECTURE',
      valueProp:
        'Crawl budget optimization, edge schema markup, Core Web Vitals sub-millisecond tuning and deep semantic taxonomy.',
      deliverables: [
        'Edge-rendered JSON-LD schema graphs',
        'Sub-50ms TTFB Core Web Vitals audit',
        'Log-file algorithmic crawl telemetry',
        'Dynamic canonical & rendering pipelines',
      ],
      ctaText: 'EXPLORE TECHNICAL SEO',
      ctaHref: '/services/technical-seo',
    },
    {
      id: 'aeo',
      name: 'ANSWER ENGINE (AEO)',
      tag: 'DIRECT RESPONSE OPTIMIZATION',
      valueProp:
        'Synthesizing authoritative domain entities to capture direct answer boxes, featured snippets, and voice assistants.',
      deliverables: [
        'Zero-click snippet capture framework',
        'Entity disambiguation via Wikidata & schema',
        'Micro-content structuring for voice queries',
        'Algorithmic intent matching matrices',
      ],
      ctaText: 'EXPLORE ANSWER ENGINES',
      ctaHref: '/services/aeo',
    },
    {
      id: 'geo',
      name: 'GENERATIVE SEARCH (GEO)',
      tag: 'AI DISCOVERY & CITATION',
      valueProp:
        'Positioning brands within ChatGPT Search, Perplexity, Gemini and Claude knowledge retrieval vectors.',
      deliverables: [
        'RAG source-corpus insertion strategy',
        'Perplexity & ChatGPT citation engineering',
        'Synthetic prompt affinity benchmarking',
        'AI retrieval knowledge graph seeding',
      ],
      ctaText: 'EXPLORE GENERATIVE SEARCH',
      ctaHref: '/services/geo',
    },
  ];

  const services = propServices || dictionary?.services || defaultServices;

  const getServiceIcon = (id: string, name: string) => {
    const key = (id || name).toLowerCase();
    if (key.includes('aeo') || key.includes('answer')) {
      return MessageSquare;
    }
    if (key.includes('geo') || key.includes('generative')) {
      return Sparkles;
    }
    return Search;
  };

  return (
    <section
      aria-labelledby="visibility-engineering-headline"
      className="relative bg-secondary py-20 md:py-28 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-elevated border border-border text-xs font-mono tracking-widest uppercase text-neon">
            <span>PILLAR 01 // DISCOVERY MATRICES</span>
          </div>
          <h2
            id="visibility-engineering-headline"
            className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-primary leading-tight"
          >
            {headline}
          </h2>
          {subheadline && (
            <p className="text-secondary text-base sm:text-lg font-sans leading-relaxed">
              {subheadline}
            </p>
          )}
        </div>

        {/* 3-Column Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = getServiceIcon(service.id, service.name);

            return (
              <article
                key={service.id || service.name}
                className="group relative bg-elevated border border-border rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-neon/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(163,255,102,0.06)]"
              >
                <div>
                  {/* Top Bar with Icon and Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary border border-border flex items-center justify-center text-neon group-hover:border-neon/40 group-hover:scale-105 transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider text-secondary/70 uppercase px-2 py-1 bg-secondary rounded border border-border/50">
                      {service.tag}
                    </span>
                  </div>

                  {/* Service Name */}
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3 group-hover:text-neon transition-colors duration-200">
                    {service.name}
                  </h3>

                  {/* Value Proposition */}
                  <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6 font-sans">
                    {service.valueProp}
                  </p>

                  {/* Deliverables List */}
                  <div className="pt-4 border-t border-border/60">
                    <span className="font-mono text-xs uppercase text-secondary/80 tracking-wider block mb-3">
                      ENGINEERING DELIVERABLES:
                    </span>
                    <ul className="space-y-2.5" role="list">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-secondary">
                          <Check className="w-4 h-4 text-neon shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Link */}
                <div className="mt-8 pt-6 border-t border-border/60">
                  <Link
                    href={service.ctaHref}
                    className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-neon hover:text-neon-secondary tracking-wider uppercase group-hover:translate-x-1 transition-all duration-200"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
