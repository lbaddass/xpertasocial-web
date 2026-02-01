// lib/gtag.ts

declare global {
  interface Window {
    gtag(param1: string, param2: any, param3?: any): void;
  }
}

// IMPORTANT: In a real-world application, store this in an environment variable
// (e.g., NEXT_PUBLIC_GA_ID)
export const GA_TRACKING_ID = 'G-Y4VM4XNER6';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  if (typeof window.gtag !== 'function') {
    return;
  }
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
    if (typeof window.gtag !== 'function') {
        return;
    }
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
