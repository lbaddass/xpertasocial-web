# Decisions

## D1. Keep the existing Next.js 16 app and add locale routes

- Decision: rebuild marketing pages inside this repository under `src/app/[locale]`, on branch `redesign/v2`.
- Alternatives: a new repository; a `pages/` router site.
- Reason: the audit found a compatible App Router app. Admin, auth, and the Cloud Run integration stay where they are.

## D2. Locale memory uses a cookie set from the URL the visitor chose

- Decision: `/` redirects with 307 to `/es/` unless a `locale` cookie is `en`. Middleware sets that cookie when a request is already under `/es/` or `/en/`. The language control links to the same path in the other locale. Browser `Accept-Language` is ignored.
- Alternatives: always send `/` to Spanish; negotiate from the browser.
- Reason: the brief forbids language redirects from the browser alone, and it requires the explicit choice to persist.

## D3. Legacy redirects follow the inventory, in the remembered locale

- Decision: permanent redirects use the path map in `docs/url-inventory.csv`. The locale prefix follows the `locale` cookie, default `es`.
- Alternatives: always redirect to Spanish.
- Reason: an English visitor who already chose English should not land on Spanish after following an old bookmark.

## D4. No image logo, wordmark only

- Decision: the header uses the existing “XPERTASOCIAL” wordmark. No logo image is invented.
- Alternatives: draw a new symbol and call it the logo.
- Reason: `public/` has no brand mark. The live logo is type.

## D5. Analytics IDs move to environment variables and wait for consent

- Decision: GA4 and GTM render only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` or `NEXT_PUBLIC_GTM_ID` is set, and only after the visitor accepts analytics. Consent mode defaults to denied.
- Alternatives: keep the hardcoded IDs from `src/app/layout.tsx`.
- Reason: the brief’s analytics inputs were blank, and the current tags load before any choice.

## D6. Lead delivery

- Decision: `LeadDestination` implementations are a webhook (`LEAD_WEBHOOK_URL`), Resend email (`RESEND_API_KEY` + `LEAD_NOTIFY_EMAIL`), and a logger enabled only when `LEAD_DESTINATION=log` or when `NODE_ENV` is not `production`. Production with none of those set returns an error and does not claim success.
- Alternatives: keep `console.info` and show a thank-you state.
- Reason: the current form is a stub. Pretending a lead was delivered is the failure the brief calls out.

## D7. JavaScript budget

- Decision: marketing routes should stay at or under 160 KB gzipped for the shared first-load JavaScript reported by `next build`. The budget is checked at the optimization gate. Motion is CSS. No animation library is added for the marketing UI.
- Alternatives: Framer Motion, already a dependency, used on the new pages.
- Reason: the existing dependency is only imported by the personal page that is being redirected. CSS covers the specified motion.

## D8. Content collection without MDX

- Decision: insights and case studies are typed TypeScript modules. Draft articles are flagged `draft: true` and omitted from `generateStaticParams`, the sitemap, and the index.
- Alternatives: add `@next/mdx`.
- Reason: the same typed-frontmatter result without a new compiler, and missing fields fail typecheck.

## D9. Shopify Plus copy is bounded by the public Plus page fetched on 2026-11-24

- Decision: the Plus page talks about higher-volume commerce, checkout and Shop Pay, B2B, headless storefronts on Shopify’s APIs, migrations, and AI-assisted selling that Shopify was describing on that page. It does not repeat Shopify’s conversion or speed statistics. It does not claim a feature is exclusive unless this audit could read it on that page. Hydrogen is named as Shopify’s own headless toolkit, separate from a Next.js storefront.
- Alternatives: repeat a 2024 feature list (Launchpad, unlimited staff) from memory.
- Reason: the brief requires current Shopify documentation. The help-center article was behind a bot check. The marketing page was readable.

## D10. Company facts from the old footer stay off the new pages

- Decision: phone number, founder name, and personal social profiles found in the old footer are not rendered and are not put in JSON-LD.
- Alternatives: treat the live footer as verification.
- Reason: the verified-facts input was blank. The final report lists them for the owner.

## D11. Trailing slashes

- Decision: `trailingSlash: true`. Canonicals, hreflang, sitemap, and internal links use the trailing slash.
- Alternatives: no trailing slash.
- Reason: the brief asks for one consistent form so canonicals match served URLs.

## D12. Privacy page is noindex until legal review

- Decision: `/privacy/` ships with a visible “pending legal review” notice, `noindex`, and is absent from the sitemap.
- Alternatives: omit the page.
- Reason: every form must link to it, and the legal text was not provided.

## D13. Root document language

- Decision: the root layout sets `<html lang>` from the `x-locale` request header that middleware attaches. Unknown routes fall back to `es`.
- Alternatives: client-side lang swap.
- Reason: Next.js requires `<html>` in the root layout, and the brief requires the correct lang per locale.

## D14. In-memory rate limit

- Decision: the lead route limits posts per IP in process memory (5 per 10 minutes).
- Alternatives: Upstash or Vercel KV.
- Reason: no rate-limit credentials were provided. The limit is real on a single instance and is documented as insufficient across multiple serverless instances.

## D15. Preview indexing

- Decision: pages are `noindex` when `VERCEL_ENV` is `preview`. Any other value, including an unset local production build, is indexable. Draft insights and the privacy page are `noindex` in every environment.
- Alternatives: noindex whenever `VERCEL_ENV !== 'production'`.
- Reason: local `next start` is how the QA suite checks indexable canonicals. Preview deployments on Vercel set `VERCEL_ENV=preview`.
