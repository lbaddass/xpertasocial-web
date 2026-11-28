"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/contact/attribution";

/** Va una sola vez en app/layout.tsx. No renderiza nada. */
export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
