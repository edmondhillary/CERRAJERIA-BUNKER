# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview
- Frontend-only React SPA built with Vite.
- Routing is client-side with `react-router-dom` and route rendering via `useRoutes`.
- Styling is SCSS-based, with global styles composed from `src/styles/base/*` and imported once from `src/main.jsx`.
- SEO is a first-class concern: pages mount a reusable SEO component (`PageSEO`) that injects meta tags, canonical URLs, OpenGraph tags, and JSON-LD structured data.

## Setup and common commands
- Install dependencies:
  - `npm ci`
- Start local dev server:
  - `npm run dev`
- Build production bundle:
  - `npm run build`
- Preview production build locally:
  - `npm run preview`
- Lint codebase:
  - `npm run lint`

## Tests
- There is currently no test runner or test script in `package.json`.
- Single-test execution is not available until a test framework (for example, Vitest/Jest) is added.

## Runtime architecture (big picture)
1. App bootstrap (`src/main.jsx`)
   - Wraps app with:
     - `HelmetProvider` (for async-safe head/SEO management)
     - `BrowserRouter` (for client-side routing)
   - Renders `App` and imports global stylesheet entry (`src/styles/main.scss`).

2. App shell (`src/app/App.jsx`)
   - Mounts global analytics tracking via `useAnalytics`.
   - Wraps route content inside `MainLayout`.

3. Routing (`src/app/AppRouter.jsx`)
   - Central route table for all pages.
   - Service detail pages are dynamic: `/servicios/:serviceSlug`.
   - Unknown routes redirect to `/404`.

4. Shared layout (`src/components/layout/MainLayout/MainLayout.jsx`)
   - Persistent `Header`, `Footer`, and mobile sticky CTA around page content.
   - Scroll restoration happens here (`useScrollToTop`), so route-level pages don’t handle it individually.

5. Content/data-driven layer (`src/data/*.js`)
   - Business identity/contact data lives in `src/data/business.js`.
   - Navigation links come from `src/data/navigation.js`.
   - Service pages are driven by `src/data/services.js` (slug, SEO text, hero/card media, FAQ, etc.).
   - Site-wide SEO defaults in `src/data/seo.js`.
   - Most page content composition pulls from these modules instead of hardcoding in components.

6. SEO + structured data pipeline
   - `PageSEO` (`src/hooks/usePageSEO.jsx`) computes title, description, canonical URL, robots, OG tags, and JSON-LD.
   - Helpers live in `src/utils/seoHelpers.js` and `src/utils/schemaBuilders.js`.
   - Service and home pages pass FAQ schema payloads into `PageSEO`.

## Development notes specific to this codebase
- If adding a new service page, update `src/data/services.js`; routing for details already works through `:serviceSlug`.
- Header/footer/nav/service cards are mostly data-driven; update data modules first, then component structure only if behavior/layout changes.
- `useAnalytics` currently sends route changes to `window.gtag` with a hardcoded GA measurement ID; preserve this behavior unless analytics requirements change.
- ESLint config targets `js/jsx` only (`eslint.config.js`), not TypeScript.
- `Footer` references `business.address.full`, but `business.js` only defines structured address fields (`street`, `city`, `region`, `country`). If touching footer/business data, resolve this mismatch explicitly.
