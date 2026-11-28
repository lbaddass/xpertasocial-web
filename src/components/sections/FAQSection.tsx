'use client';

import React, { useState, useRef, KeyboardEvent } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FAQItem } from '@/lib/localization/types';

export interface FAQSectionProps {
  headline: string;
  items: FAQItem[];
  subheadline?: string;
}

export default function FAQSection({ headline, items, subheadline }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    const total = items.length;
    let targetIndex = currentIndex;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      targetIndex = (currentIndex + 1) % total;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      targetIndex = (currentIndex - 1 + total) % total;
    } else if (e.key === 'Home') {
      e.preventDefault();
      targetIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      targetIndex = total - 1;
    }

    if (targetIndex !== currentIndex) {
      buttonRefs.current[targetIndex]?.focus();
    }
  };

  const defaultItems: FAQItem[] = [
    {
      question: 'How is Generative Engine Optimization (GEO) different from traditional SEO?',
      answer:
        'Traditional SEO optimizes for keyword rank positions on search result pages via backlinks and metadata. GEO optimizes for neural knowledge synthesis inside LLMs (ChatGPT, Perplexity, Gemini, Claude). We structure your digital assets into citation-ready entity graphs, authoritative RAG source corpuses, and disambiguated schema schemas so AI engines cite your brand directly when answering user queries.',
    },
    {
      question: 'Why does XpertaSocial build exclusively with Next.js App Router and Shopify?',
      answer:
        'Next.js 15 App Router represents the pinnacle of web performance engineering, offering React Server Components (RSC), Edge-runtime caching, sub-50ms TTFB, and zero client layout shift. For transactional commerce, Shopify provides the most resilient global checkout infrastructure. Combined, they create an impenetrable technical foundation that maximizes both organic crawl efficiency and conversion revenue.',
    },
    {
      question: 'Can you migrate an existing WordPress or monolithic site without losing rank?',
      answer:
        'Yes. Our migration protocol includes 1:1 algorithmic URL parity, automated 301 canonical redirects, server log validation, and structured entity graph preservation. In over 95% of our headless migrations, brands experience an immediate crawl velocity lift and significant PageSpeed improvements within 14 days of DNS cutover.',
    },
    {
      question: 'What deliverables are included in the Technical Architecture Audit?',
      answer:
        'Our audit goes far beyond automated scoring tools. You receive a forensic analysis of server log crawl budgets, Edge caching efficiency, DOM depth, JSON-LD schema entity resolution, Core Web Vitals diagnostic telemetry, and an AI retrieval citation presence benchmark across OpenAI, Perplexity, and Google Search Generative Experience.',
    },
    {
      question: 'How quickly do we see measurable indexing and citation results?',
      answer:
        'Technical remediations (Core Web Vitals, server cache, rendering pipelines) take effect immediately upon deployment. Search engines reflect crawl budget recovery within 7 to 21 days. AI citation synthesis and knowledge graph authority typically mature over 30 to 60 days as LLM retrieval indices refresh their source corpuses.',
    },
  ];

  const displayItems = items && items.length > 0 ? items : defaultItems;

  return (
    <section
      aria-labelledby="faq-section-heading"
      className="relative bg-primary py-20 md:py-28 border-b border-border overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-elevated border border-border text-xs font-mono tracking-widest uppercase text-neon">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CLARITY & SPECIFICATIONS</span>
          </div>
          <h2
            id="faq-section-heading"
            className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-primary leading-tight"
          >
            {headline}
          </h2>
          {subheadline && (
            <p className="text-secondary text-base sm:text-lg font-sans">
              {subheadline}
            </p>
          )}
        </div>

        {/* WAI-ARIA Accessible Accordion List */}
        <div className="space-y-4">
          {displayItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-neon/40 bg-elevated/90 shadow-[0_0_20px_rgba(163,255,102,0.06)]'
                    : 'border-border bg-elevated/40 hover:border-border/80'
                }`}
              >
                <h3>
                  <button
                    ref={(el) => {
                      buttonRefs.current[index] = el;
                    }}
                    id={`faq-question-${index}`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => toggleItem(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon rounded-xl group"
                  >
                    <span className="font-heading text-base sm:text-lg font-bold text-primary group-hover:text-neon transition-colors pr-4">
                      {item.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-neon/10 border-neon/50 text-neon'
                          : 'text-secondary group-hover:text-primary group-hover:border-neon/40'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </button>
                </h3>

                {/* CSS Grid Smooth Height Transition */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  data-open={isOpen}
                  className={`accordion-content px-6 transition-[grid-template-rows] duration-300 ease-out grid ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="accordion-inner overflow-hidden">
                    <div className="pb-6 pt-1 text-secondary text-sm sm:text-base leading-relaxed font-sans border-t border-border/50">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
