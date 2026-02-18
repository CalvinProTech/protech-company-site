# SEO Gap Report — protechroof.net

**Date:** 2026-02-17

---

## 1. Technical SEO Gaps

### GAP-01: City Page Canonical URLs Are Wrong (45 pages)

**Severity:** CRITICAL
**File:** `src/lib/metadata.ts:72`

`createLocationMetadata()` generates canonicals as `/locations/${citySlug}` instead of `/locations/${stateSlug}/${citySlug}`.

**Impact:**
- Google sees canonical pointing to a URL that 404s (`/locations/tampa` doesn't exist — real URL is `/locations/florida/tampa`)
- Search engines may ignore the canonical or deindex pages
- Affects ALL 45 city pages — the highest-value local SEO pages on the site

**Root Cause:** `LocationForMetadata` interface lacks `stateSlug` field.

### GAP-02: States-Served Copy Says "4" Instead of "14" (7 locations)

**Severity:** HIGH
**Impact:** Brand credibility, search snippet accuracy, potential Google Business Profile mismatch

| File | Line | Current Text |
|------|------|-------------|
| `src/app/layout.tsx` | 27 | "...across Florida, Texas, Kentucky, and Ohio" |
| `src/app/about/page.tsx` | 12 | "...across 4 states" |
| `src/app/about/page.tsx` | 25 | `{ value: '4', label: 'States Served' }` |
| `src/app/reviews/page.tsx` | 13 | "...across 4 states" |
| `src/app/contact/page.tsx` | 20 | "...serving FL, TX, KY, and OH" |
| `src/app/free-estimate/page.tsx` | 24 | "...Licensed in FL, TX, KY, and OH" |
| `src/app/gallery/page.tsx` | 11 | "...across Florida, Texas, Kentucky, and Ohio" |

### GAP-03: Gutters & Siding Slug Inconsistency

**Severity:** MEDIUM
**Impact:** Potential filtering bugs in gallery and reviews when matching `gutters-and-siding` (data) to `gutters-siding` (routing).

- `constants.ts` → `gutters-siding` (matches the URL `/services/gutters-siding`)
- `services.ts` → `gutters-and-siding` (used for data lookup)
- `projects.ts`, `testimonials.ts`, `GalleryGrid.tsx`, `ReviewsContent.tsx` → `gutters-and-siding`

Pages still render because the page file hard-codes the lookup, but data cross-referencing between constants and service data will fail.

### GAP-04: Missing Organization Schema

**Severity:** MEDIUM
**Impact:** Reduced Knowledge Panel eligibility, weaker brand entity signals

No `Organization` or `Corporation` JSON-LD on the homepage. Should include:
- Name, URL, logo, founding date
- Contact point (phone, email)
- Social profiles (if any)
- Area served (14 states)
- sameAs links

### GAP-05: Missing AggregateRating Schema

**Severity:** LOW-MEDIUM
**Impact:** Missing star rating rich snippets on SERPs

4.9 stars / 500+ reviews is referenced everywhere in copy but never output as structured data in `AggregateRating` format. Adding this to LocalBusinessSchema would enable rich rating snippets.

---

## 2. Content Gaps

### GAP-06: No Blog Content

**Severity:** MEDIUM
**Impact:** Zero topical authority, no informational keyword coverage

Blog infrastructure exists (`/blog`, `/blog/[slug]`, MDX pipeline) but `/src/content/blog/` has no posts. Missing opportunity for:
- "how much does a roof replacement cost" (14K monthly searches)
- "roof repair vs replacement" (8K)
- "signs you need a new roof" (6K)
- "how to file a roof insurance claim" (4K)
- Storm prep / seasonal maintenance guides

### GAP-07: Tampa Intro Claims 2,000+ Projects (vs 1,000+ Global)

**Severity:** LOW
**File:** `src/lib/locations.ts:46`
**Impact:** Credibility risk if users compare city-specific and global claims

---

## 3. Local SEO Gaps

### GAP-08: No Service x City Pages (270 potential pages)

**Severity:** MEDIUM (high-value opportunity)
**Pattern:** `/services/[service]/[city]` or `/locations/[state]/[city]/[service]`

These pages target the highest-intent local queries: "roof replacement Tampa", "storm damage repair Atlanta", etc. Currently the city pages cover services generally, but dedicated service+city pages would:
- Rank for long-tail service+city keywords
- Provide city-specific service content (pricing, code requirements, common issues)
- 6 services x 45 cities = 270 additional pages

### GAP-09: No Surrounding City / Neighborhood Pages

**Severity:** LOW-MEDIUM

Each city in `locations.ts` lists 3-5 surrounding cities (e.g., Tampa lists St. Petersburg, Clearwater, Brandon, Lakeland, Wesley Chapel). None of these have dedicated pages, missing "roofing near [smaller city]" queries.

### GAP-10: No "Near Me" / Service Area Map Page

**Severity:** LOW

A dedicated `/service-areas` page with an interactive map showing all 14 states and 45 cities could capture "roofing near me" and "roofers in my area" searches.

---

## 4. Missing Page Types

| Page Type | Status | SEO Value |
|-----------|--------|-----------|
| Service x City combo pages | NOT BUILT | HIGH |
| Surrounding city pages | NOT BUILT | MEDIUM |
| Blog posts (informational) | NOT BUILT | MEDIUM |
| FAQ topic pages (`/faqs/insurance-claims`) | NOT BUILT | LOW-MEDIUM |
| Comparison pages (`/compare/metal-vs-shingle`) | NOT BUILT | LOW-MEDIUM |
| Gallery category pages (`/gallery/roof-replacement`) | NOT BUILT | LOW |
| Individual review pages | NOT BUILT | LOW |
| State resource pages (codes, permits) | NOT BUILT | LOW |

---

## 5. On-Page SEO Observations

### Strengths
- Every page has unique `<title>` and `<meta description>`
- H1 tags present on all pages
- Breadcrumbs with BreadcrumbSchema on all sub-pages
- Service pages have FAQ schema
- City pages have LocalBusiness + FAQ schema
- Strong internal linking with hub-and-spoke architecture
- No dead internal links found

### Weaknesses
- Meta descriptions on 6 pages reference only 4 states (stale copy)
- City canonicals are broken (45 pages)
- No blog content to build topical authority
- No image alt text audit performed (likely needs attention in gallery)
- Title tag lengths not validated (some may exceed 60 chars)
