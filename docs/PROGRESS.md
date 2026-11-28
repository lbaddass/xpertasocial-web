# Progress

## Done

- Phase 1 discovery. See `docs/AUDIT.md` and `docs/url-inventory.csv`.
- Branch: `redesign/v2`.

## Current phase

Phase 1 complete. Next work is Phase 2 foundation.

## Next steps

1. Tokens, fonts, locale routing, header, footer, UI primitives.
2. Homepage, then the rest of the routes.
3. Forms, consent, analytics.
4. SEO, redirects, tests, Lighthouse, final report.

## Known issues

- Live `/admin` returned HTTP 500 during the audit. Unchanged by this project so far.
- Live `/perfil` is a footer link and a 404. It is in the redirect map.
- Lighthouse mobile baseline: not run yet.
- No verified case studies, company facts, CRM, notification email, or legal copy were supplied.

## Commands

```bash
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

QA, once Playwright is added:

```bash
npm run test:e2e
```
