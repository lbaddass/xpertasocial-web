// src/lib/localization/types.ts

export interface HeroDictionary {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  ctaPrimary: {
    text: string;
    href: string;
  };
  ctaSecondary: {
    text: string;
    href: string;
  };
  serviceLabels?: string[];
  visualization?: {
    searchDiscovery?: string;
    aiDiscovery?: string;
    conversionInfra?: string;
    hub?: string;
  };
}

export interface CapabilitiesDictionary {
  labels: string[];
}

export interface ProblemCard {
  title: string;
  description: string;
}

export interface ProblemDictionary {
  headline: string;
  cards: ProblemCard[];
}

export interface VisibilityService {
  id: string;
  name: string;
  tag: string;
  valueProp: string;
  deliverables: string[];
  ctaText: string;
  ctaHref: string;
}

export interface VisibilityDictionary {
  headline: string;
  subheadline?: string;
  services: VisibilityService[];
}

export interface WebEngTabContent {
  title: string;
  badge: string;
  description: string;
  capabilities: string[];
  codeSnippet?: string;
  storefrontFeatures?: string[];
  ctaText: string;
  ctaHref: string;
}

export interface WebEngDictionary {
  headline: string;
  subheadline?: string;
  tabs: {
    nextjs: WebEngTabContent;
    shopify: WebEngTabContent;
  };
}

export interface GrowthLayer {
  id: string;
  name: string;
  label: string;
  description: string;
  subItems: string[];
}

export interface GrowthDictionary {
  headline: string;
  subheadline?: string;
  layers: GrowthLayer[];
}

export interface MethodologyStep {
  stepNumber: string;
  title: string;
  description: string;
  tag?: string;
}

export interface MethodologyDictionary {
  headline: string;
  subheadline?: string;
  steps: MethodologyStep[];
}

export interface CaseStudiesDictionary {
  headline: string;
  emptyState: string;
  demonstrationBadge?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQDictionary {
  headline: string;
  subheadline?: string;
  items: FAQItem[];
}

export interface FinalCtaDictionary {
  headline: string;
  subheadline: string;
  ctaPrimary: {
    text: string;
    href: string;
  };
  ctaSecondary: {
    text: string;
    href: string;
  };
}

export interface Dictionary {
  hero: HeroDictionary;
  capabilities: CapabilitiesDictionary;
  problem: ProblemDictionary;
  visibility: VisibilityDictionary;
  webEng: WebEngDictionary;
  growth: GrowthDictionary;
  methodology: MethodologyDictionary;
  caseStudies: CaseStudiesDictionary;
  faq: FAQDictionary;
  finalCta: FinalCtaDictionary;
}
