# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js 16 + Turbopack)
npm run build    # Production build
npm run lint     # ESLint (next/core-web-vitals + typescript)
npm start        # Start production server
```

No test framework is configured.

## Tech Stack

- **Next.js 16.1.6** (Turbopack) with **React 19.2.3** and **TypeScript 5**
- **Tailwind CSS 4** — configured via `@theme inline` in `globals.css` (no `tailwind.config.js`)
- **motion v12+** for animations
- **react-hook-form** + **zod v4** for form validation
- **next-mdx-remote** + **gray-matter** for blog content
- **lucide-react** for icons
- Deployed on **Vercel** (region: `iad1`)

## Architecture

### Template-Driven Pages

The site uses a template pattern for repetitive page types. Pages in `src/app/` are thin wrappers that import data from `src/lib/` and pass it to templates:

- **CityPageTemplate** — 15 city landing pages at `/locations/[state]/[city]`
- **ServicePageTemplate** — 6 service pages at `/services/[slug]`
- **StatePageTemplate** — 4 state overview pages at `/locations/[state]`

Data files in `src/lib/` (locations.ts, services.ts, projects.ts, testimonials.ts, faqs.ts) serve as the single source of truth. Blog posts are MDX files in `src/content/blog/`.

### Layout Hierarchy

```
RootLayout → SkipToContent → Header → main#main-content → Footer → MobileBottomBar → AnalyticsProvider
```

Analytics (Google Analytics + CallRail) are loaded via dynamic import in a `'use client'` AnalyticsProvider wrapper.

### SEO

- JSON-LD schemas in `src/components/seo/` (LocalBusiness, Article, Service, FAQ, Breadcrumb)
- Metadata helpers in `src/lib/metadata.ts` (createPageMetadata, createLocationMetadata, createServiceMetadata)
- Dynamic `sitemap.ts` generates 56 routes; `robots.ts` disallows `/api/`

### Forms & API

- Forms use react-hook-form with zod v4 validation (schemas in `src/lib/schemas.ts`)
- API routes: `POST /api/contact`, `POST /api/estimate` — submit to Salesforce Web-to-Lead
- Non-blocking analytics logging via Next.js `after()` hook

## Conventions

### Imports

- Always use the `@/` path alias (maps to `./src/*`)
- No barrel files — import directly: `import Button from '@/components/ui/Button'`

### Components

- **Server Components by default.** Only add `'use client'` when necessary.
- `ssr: false` in `next/dynamic` is NOT allowed in Server Components — must wrap in a `'use client'` component
- React 19: `forwardRef` is not needed (ref is a regular prop); use `use()` instead of `useContext()`

### Tailwind CSS 4

- Custom theme defined via `@theme inline` in `src/app/globals.css` — colors, spacing, radius, shadows
- Use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional classes

### Zod v4

- Enum error syntax: `z.enum(VALUES, 'error string')` — NOT `z.enum(VALUES, { error: '...' })`

### TypeScript

- Always add explicit type annotations to uninitialized variables: `let posts: BlogPost[]` not `let posts;`
- Strict mode enabled

### Formatting (Prettier)

- Semicolons, single quotes, 2-space tabs, ES5 trailing commas, Tailwind class sorting

## Environment Variables

Copy `.env.local.example` to `.env.local`. Required for full functionality:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `SALESFORCE_ENDPOINT` | Web-to-Lead endpoint |
| `SALESFORCE_OID` | Salesforce org ID |
| `CALLRAIL_ACCOUNT_ID` | CallRail tracking |
| `GOOGLE_MAPS_API_KEY` | Google Maps embeds |

## Known Gotchas

- BlogPost type nests slug in `frontmatter.slug`, not `post.slug`
- Location route pattern is `/locations/[state]/[city]`, not `/locations/[city-state]`
- Accordion `defaultOpenId` type is `string | null`, not just `string`
