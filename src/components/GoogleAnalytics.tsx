"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import * as gtag from "@/lib/gtag";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = new URL(pathname, window.location.origin);
    searchParams.forEach((value, key) => {
        url.searchParams.append(key, value);
    });
    gtag.pageview(url);
  }, [pathname, searchParams]);

  return null;
}
