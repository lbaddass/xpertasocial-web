"use client";

import Link, { LinkProps } from "next/link";
import * as gtag from "@/lib/gtag";

interface TrackedLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  event: {
    action: string;
    category: string;
    label: string;
  };
}

export default function TrackedLink({ children, event, ...props }: TrackedLinkProps) {
  const handleTrack = () => {
    gtag.event({
      action: event.action,
      category: event.category,
      label: event.label,
      value: 0, // value can be dynamic if needed
    });
  };

  return (
    <Link {...props} onClick={handleTrack}>
      {children}
    </Link>
  );
}
