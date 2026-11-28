import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, ShieldCheck, Cpu, Terminal } from 'lucide-react';

export interface CaseStudiesSectionProps {
  headline: string;
  emptyState: string;
  locale: string;
}

interface DemoCaseStudy {
  id: string;
  projectName: string;
  industry: string;
  badgeText: string;
  challenge: string;
  solution: string;
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export default function CaseStudiesSection({
  headline,
  emptyState,
  locale,
}: CaseStudiesSectionProps) {
  const contactHref = locale === 'es' ? '/es/contacto' : '/en/contact';

  const demoProjects: DemoCaseStudy[] = [
    {
      id: 'apex-b2b',
      projectName: 'Apex B2B Commerce',
      industry: 'Enterprise Industrial Distribution',
      badgeText: 'Demonstration Project',
      challenge:
        'Legacy monolithic stack suffering 4.2s TTFB, zero indexation in generative search engines (ChatGPT/Perplexity), and 65% mobile cart bounce.',
      solution:
        'Engineered a headless Next.js 15 App Router architecture atop Shopify Plus with Edge-rendered entity schema and Algolia neural discovery.',
      techStack: ['Next.js 15', 'Shopify Plus', 'Edge Caching', 'JSON-LD Graph', 'Tailwind CSS'],
      metrics: [
        { label: 'TTFB Latency', value: '<240ms' },
        { label: 'Perplexity Citations', value: '+310%' },
        { label: 'Core Web Vitals', value: '100/100' },
      ],
    },
    {
      id: 'neuropulse-health',
      projectName: 'NeuroPulse Health Systems',
      industry: 'Biomedical Telehealth & Clinical SaaS',
      badgeText: 'Demonstration Project',
      challenge:
        'Critical entity confusion in Google Knowledge Graph and lack of medical authoritative answer box (AEO) visibility.',
      solution:
        'Deployed Wikidata-backed entity disambiguation, structured clinical schema hierarchies, and sub-millisecond edge documentation routes.',
      techStack: ['Next.js App Router', 'AEO Architecture', 'TypeScript', 'Semantic Graph'],
      metrics: [
        { label: 'Featured Snippets', value: '84% Win' },
        { label: 'Crawl Budget Gain', value: '4.2x' },
        { label: 'Lighthouse Score', value: '99/100' },
      ],
    },
    {
      id: 'vanguard-capital',
      projectName: 'Vanguard Asset Management',
      industry: 'Institutional Alternative Investments',
      badgeText: 'Demonstration Project',
      challenge:
        'Outdated CMS failing financial enterprise security audits with severe vulnerability risks and unoptimized global investor reach.',
      solution:
        'Static-edge compiled Next.js architecture with zero client-side attack surface, strict CSP headers, and automated bilingual localization.',
      techStack: ['Next.js Enterprise', 'Cloudflare Workers', 'GraphQL', 'Strict CSP'],
      metrics: [
        { label: 'Global Edge Speed', value: '38ms' },
        { label: 'Security Grade', value: 'A+ SSL' },
        { label: 'Organic Inbound Lift', value: '+142%' },
      ],
    },
  ];

  return (
    <section
      aria-labelledby="case-studies-heading"
      className="relative bg-secondary py-20 md:py-28 border-b border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-elevated border border-border text-xs font-mono tracking-widest uppercase text-neon">
              <Terminal className="w-3.5 h-3.5" />
              <span>PRODUCTION BENCHMARKS</span>
            </div>
            <h2
              id="case-studies-heading"
              className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-primary leading-tight"
            >
              {headline}
            </h2>
          </div>

          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-neon hover:text-neon-secondary self-start md:self-auto"
          >
            <span>REQUEST AUDIT DOSSIER</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Elegant Demonstration / NDA Transparency Notice */}
        <div className="mb-12 p-4 sm:p-5 rounded-lg bg-elevated/70 border border-border flex items-start sm:items-center gap-3.5 text-xs sm:text-sm text-secondary">
          <ShieldCheck className="w-5 h-5 text-neon shrink-0 mt-0.5 sm:mt-0" />
          <p className="font-sans leading-relaxed">
            <span className="font-semibold text-primary font-mono text-xs uppercase mr-1">
              DATA PRIVACY PROTOCOL:
            </span>
            {emptyState ||
              'Client names and proprietary metrics are protected under active commercial non-disclosure agreements (NDAs). The demonstration implementations below reflect identical architecture and engineering methodologies deployed across our live client portfolio.'}
          </p>
        </div>

        {/* 3-Column Demonstration Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {demoProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-elevated border border-border rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-neon/40 hover:shadow-[0_0_24px_rgba(163,255,102,0.08)] transition-all duration-300"
            >
              <div>
                {/* Header: Industry & Demonstration Project Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[10px] tracking-wider uppercase text-secondary/70 truncate">
                    {project.industry}
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-neon/10 border border-neon/30 text-[10px] font-mono font-medium text-neon tracking-wide shrink-0">
                    {project.badgeText}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-heading text-2xl font-bold text-primary mb-4 group-hover:text-neon transition-colors duration-200">
                  {project.projectName}
                </h3>

                {/* Challenge & Solution */}
                <div className="space-y-3 mb-6 text-xs sm:text-sm text-secondary leading-relaxed font-sans">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary block mb-1">
                      CHALLENGE:
                    </span>
                    <p>{project.challenge}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-neon block mb-1">
                      ENGINEERED SOLUTION:
                    </span>
                    <p>{project.solution}</p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-border/70 my-6 bg-secondary/50 rounded-lg px-2">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xs sm:text-sm font-heading font-bold text-neon">
                        {m.value}
                      </div>
                      <div className="text-[9px] font-mono text-secondary/70 uppercase truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tech Stack Tags & CTA Link */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-secondary border border-border/60 text-[10px] font-mono text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={contactHref}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-primary group-hover:text-neon transition-colors"
                >
                  <span>REQUEST COMPARATIVE ARCHITECTURE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
