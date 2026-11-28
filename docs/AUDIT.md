# Audit — XpertaSocial website (2026-11-24)

Read-only baseline taken before the 2.0 redesign. Live checks used `https://xpertasocial.com`. The working tree on `main` (`6595913`) was clean.

## What exists

Next.js 16.0.10 App Router, React 19.2.0, TypeScript strict, Tailwind CSS 3.4. Source lives in `src/`. There is no `node_modules` checkout in the workspace; dependencies are declared in `package.json` and `package-lock.json` (npm).

The public site is a Spanish, single-locale marketing site. `html lang` is hardcoded to `en`. One metadata pair is shared by every route: title “XpertaSocial | Growth Engineering Systems”, description “Automated revenue infrastructure. Not an agency.” No canonicals, no hreflang, no XML sitemap. `robots.txt` is a Cloudflare content-signals file, not an application robots file. `/sitemap.xml` returns the Next.js 404.

Visual system: carbon black, neon cyan and lime, Space Grotesk plus IBM Plex Mono, a blueprint grid, light/dark theme toggle. The logo is a wordmark in the navbar (“XPERTASOCIAL”). No logo file, photography set, or icon set exists in `public/` beyond the default Next SVGs. `favicon.ico` is served in production but is not in this repository.

Information architecture today: homepage, three “pisos” (infrastructure, creative lab, growth systems), an AI service catalog, a Facebook Ads journal with four unnamed case narratives, Identity Lab, corporate and personal profiles, a diagnostic form, a design-system preview, and a demo page that says it is under construction. Navigation and footer are Spanish. The diagnostic form logs to the console and does not deliver a lead.

Kept as product infrastructure, not marketing: `/login`, `/admin`, `/admin/report/[id]`, NextAuth, and the API routes `trigger-job`, `check-report`, and `debug/upload-test`. Those routes talk to Google Cloud Run and Cloudflare R2. Environment names in code: `NEXTAUTH_SECRET`, `GCP_SERVICE_ACCOUNT_KEY_BASE64`, `GCP_PROJECT_ID`, `GCP_REGION`, `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET_NAME`. Analytics IDs are hardcoded in `src/app/layout.tsx` and `src/lib/gtag.ts` (GA4 and GTM) and load without consent. `@vercel/analytics` is mounted globally.

Hosting is Vercel, in front of Cloudflare. `next.config.ts` has no redirects, headers, or trailing-slash setting.

## Live URL baseline

Fetched 2026-11-24. Full table: `docs/url-inventory.csv`.

Every marketing URL returns 200 with the same title and description and an empty canonical. `/perfil` is linked from the footer and returns 404. `/admin` returned HTTP 500 on an unauthenticated request. There is no sitemap to crawl.

Case narratives on `/facebook-ads` name sectors and outcomes without a client, a period, or an evidence source. They are not reused. The footer publishes a phone number and personal social profiles. Those facts were not in the verified inputs for this build, so the new pages omit them and list them for review.

## What is reused

- Next.js App Router, React, TypeScript, Tailwind, Lucide, the npm lockfile, and the Vercel project.
- Admin, login, NextAuth, and the Cloud Run / R2 API routes. They stay on their current URLs.
- The Space Grotesk wordmark idea. Color shifts from cyan to the specified neon green. IBM Plex Mono is replaced by Geist Mono for the marketing UI. Geist Sans is added for body text.
- Vercel Analytics stays, because its purpose is known.

## What is replaced, and why

The marketing routes are replaced. They share one title, mix agency-style service floors with personal profiles, and do not match the visibility / web / growth engineering architecture. The old diagnostic pretends nothing was sent only by staying silent; the new one refuses to show success when no destination is configured.

Legacy marketing URLs permanently redirect. See the inventory. `/` redirects to the default locale, or to `/en/` when the visitor has already chosen English. Admin and API URLs are not redirected.

## Risks

- Admin and the root layout share one document shell. The redesign must not put the marketing footer on `/admin` or break NextAuth’s matcher.
- Next.js 16 page `params` are async. New routes have to await them.
- Hardcoded GA/GTM will keep firing if the old layout is left in place. The new shell gates them on consent and env variables.
- No logo file means the wordmark is the brand mark until a file is supplied.
- Shopify’s public Plus page (fetched 2026-11-24) now sells an Enterprise surface. Plus copy stays inside what that page actually describes.
- `/admin` already returns 500 in production for an anonymous request. This redesign does not change that app.

## Migration approach

Build the bilingual site under `src/app/[locale]` with static generation and trailing slashes. Point legacy paths at the new URLs from middleware. Leave `src/app/admin`, `src/app/login`, and `src/app/api` in place. Old marketing page files are removed only when their redirects exist, so no indexed URL 404s.

## Performance baseline

Lighthouse mobile was not run during this audit. A Chrome Lighthouse pass against the live origin was still outstanding at the time this file was written; the result is recorded in `docs/PROGRESS.md` and the final report as the measured number or as not run, with the reason. No field Core Web Vitals data was available from this repository.
