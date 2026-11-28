import React from 'react';

export interface CapabilitiesStripProps {
  labels: string[];
}

const DEFAULT_LABELS = [
  'TECHNICAL SEO',
  'GENERATIVE SEARCH',
  'ANSWER OPTIMIZATION',
  'NEXT.JS',
  'SHOPIFY',
  'PERFORMANCE ENGINEERING',
];

export default function CapabilitiesStrip({ labels }: CapabilitiesStripProps) {
  const displayLabels = labels && labels.length > 0 ? labels : DEFAULT_LABELS;

  return (
    <section
      aria-label="Core Capabilities"
      className="w-full bg-secondary border-y border-border py-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Centered Flex Row / Mobile Horizontal Scroll */}
        <div className="flex items-center md:justify-center overflow-x-auto scrollbar-none py-1 gap-4 sm:gap-6 md:gap-8 whitespace-nowrap">
          {displayLabels.map((label, index) => (
            <React.Fragment key={`${label}-${index}`}>
              <div className="flex items-center gap-2 group cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-neon/50 group-hover:bg-neon group-hover:scale-125 transition-all duration-200" />
                <span className="font-mono text-xs uppercase tracking-widest text-secondary group-hover:text-primary transition-colors duration-200">
                  {label}
                </span>
              </div>
              {index < displayLabels.length - 1 && (
                <span
                  aria-hidden="true"
                  className="text-border text-sm select-none"
                >
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
