"use client";

import { track } from "@/lib/analytics";
import { defaultWhatsappMessage, site, whatsappUrl } from "@/config/site";

interface WhatsAppLinkProps {
  children: React.ReactNode;
  className?: string;
  message?: string;
  /** Dónde está el enlace (para medición). */
  placement: string;
}

export function WhatsAppLink({ children, className, message = defaultWhatsappMessage, placement }: WhatsAppLinkProps) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track("click_whatsapp", { placement })}
    >
      {children}
    </a>
  );
}

export function PhoneLink({ className, placement }: { className?: string; placement: string }) {
  return (
    <a href={`tel:${site.phoneE164}`} className={className} onClick={() => track("click_phone", { placement })}>
      {site.phoneDisplay}
    </a>
  );
}
