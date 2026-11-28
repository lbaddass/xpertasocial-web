import type { Attribution, LeadData } from "./schema";

export type LeadRecord = Omit<LeadData, "website" | "consentimiento"> & {
  id: string;
  folio: string;
  createdAt: string;
  telefonoE164: string;
  attribution: Attribution;
  pageUrl?: string;
  ip?: string;
  userAgent?: string;
};
