# Site Audit — protechroof.net

**Date:** 2026-02-17
**Total Routes:** ~100 (56 in sitemap.xml)
**Framework:** Next.js 16.1.6 / React 19 / Tailwind CSS 4

---

## Route-by-Route Crawl

### Static Pages

| URL | Title | Meta Description | H1 | Canonical | Int. Links |
|-----|-------|-----------------|-----|-----------|------------|
| `/` | ProTech Roofing \| Licensed Roofing Contractor | Expert roofing services across 14 states... | Protect Your Home with America's Most Trusted Roofers | `https://protechroof.net/` | ~15 |
| `/about` | About ProTech Roofing \| Our Story, Team & Values | ...quality roofing across **4 states** | About ProTech Roofing | `https://protechroof.net/about` | ~8 |
| `/contact` | Contact Us \| ProTech Roofing | ...serving **FL, TX, KY, and OH** | Contact ProTech Roofing | `https://protechroof.net/contact` | ~12 |
| `/free-estimate` | Free Roofing Estimate \| ProTech Roofing | ...Licensed in **FL, TX, KY, and OH** | Get Your Free Roofing Estimate | `https://protechroof.net/free-estimate` | ~10 |
| `/financing` | Roofing Financing Options \| Affordable Monthly Payments \| ProTech Roofing | Affordable roofing with flexible financing... | Affordable Roofing with Flexible Financing | `https://protechroof.net/financing` | ~12 |
| `/reviews` | Customer Reviews \| 4.9 Star Rating \| ProTech Roofing | ...across **4 states** | Customer Reviews | `https://protechroof.net/reviews` | ~10 |
| `/gallery` | Project Gallery \| Before & After Roofing Photos \| ProTech Roofing | ...across **Florida, Texas, Kentucky, and Ohio** | Project Gallery | `https://protechroof.net/gallery` | ~8 |
| `/blog` | Roofing Blog \| Tips, Guides & Industry News \| ProTech Roofing | Read expert roofing tips... | Roofing Blog | `https://protechroof.net/blog` | ~10 |
| `/locations` | Service Areas & Locations \| ProTech Roofing | ...across 14 states including FL, GA, TX... | Find Your Local ProTech Roofers | `https://protechroof.net/locations` | ~50 |
| `/privacy-policy` | Privacy Policy \| ProTech Roofing | Read the ProTech Roofing privacy policy... | Privacy Policy | `https://protechroof.net/privacy-policy` | ~6 |
| `/terms-of-service` | Terms of Service \| ProTech Roofing | Read the ProTech Roofing terms of service... | Terms of Service | `https://protechroof.net/terms-of-service` | ~6 |

### Service Pages (6)

| URL | Title | Meta Description | H1 | Canonical | Int. Links |
|-----|-------|-----------------|-----|-----------|------------|
| `/services` | Roofing Services \| ProTech Roofing | Explore our full range of roofing services... | Professional Roofing Services | `https://protechroof.net/services` | ~10 |
| `/services/roof-replacement` | Roof Replacement Services \| ProTech Roofing | Premium roof replacement with lifetime warranty... | Roof Replacement | OK | ~15 |
| `/services/roof-repair` | Roof Repair Services - Fast Leak Fixes \| ProTech Roofing | Fast, reliable roof repair... | Roof Repair | OK | ~15 |
| `/services/storm-damage` | Storm Damage Roof Repair & Insurance Claims \| ProTech | Storm damage specialists... | Storm Damage | OK | ~15 |
| `/services/commercial-roofing` | Commercial Roofing Services - Flat Roof Experts \| ProTech | Expert commercial roofing... | Commercial Roofing | OK | ~15 |
| `/services/roof-inspection` | Roof Inspection Services - Thermal & Drone \| ProTech Roofing | Comprehensive roof inspections... | Roof Inspection | OK | ~15 |
| `/services/gutters-siding` | Gutters & Siding Installation \| ProTech Roofing | Seamless gutters, gutter guards... | Gutters & Siding | OK | ~15 |

### State Pages (14)

All follow template: `Roofing Services in [State] | ProTech Roofing`

| URL | State | Cities Listed | Canonical | Status |
|-----|-------|---------------|-----------|--------|
| `/locations/florida` | Florida | 5 | OK | OK |
| `/locations/georgia` | Georgia | 3 | OK | OK |
| `/locations/texas` | Texas | 5 | OK | OK |
| `/locations/kentucky` | Kentucky | 2 | OK | OK |
| `/locations/ohio` | Ohio | 3 | OK | OK |
| `/locations/delaware` | Delaware | 2 | OK | OK |
| `/locations/maryland` | Maryland | 3 | OK | OK |
| `/locations/virginia` | Virginia | 3 | OK | OK |
| `/locations/connecticut` | Connecticut | 3 | OK | OK |
| `/locations/pennsylvania` | Pennsylvania | 3 | OK | OK |
| `/locations/north-carolina` | North Carolina | 3 | OK | OK |
| `/locations/south-carolina` | South Carolina | 3 | OK | OK |
| `/locations/west-virginia` | West Virginia | 3 | OK | OK |
| `/locations/tennessee` | Tennessee | 4 | OK | OK |

### City Pages (45) — CANONICAL BUG

All 45 city pages use `createLocationMetadata()` which generates **wrong canonicals**.

**Bug:** `src/lib/metadata.ts:72` outputs `path: /locations/${citySlug}` (missing state slug).

Example: Tampa canonical = `https://protechroof.net/locations/tampa` instead of `https://protechroof.net/locations/florida/tampa`

| State | Cities (all have pages) | Canonical Status |
|-------|------------------------|-----------------|
| FL | Tampa, Orlando, Miami, Jacksonville, Fort Lauderdale | WRONG |
| GA | Atlanta, Savannah, Augusta | WRONG |
| TX | Dallas, Houston, San Antonio, Austin, Fort Worth | WRONG |
| KY | Louisville, Lexington | WRONG |
| OH | Columbus, Cincinnati, Cleveland | WRONG |
| DE | Wilmington, Dover | WRONG |
| MD | Baltimore, Frederick, Annapolis | WRONG |
| VA | Virginia Beach, Richmond, Norfolk | WRONG |
| CT | Hartford, New Haven, Stamford | WRONG |
| PA | Philadelphia, Pittsburgh, Allentown | WRONG |
| NC | Charlotte, Raleigh, Greensboro | WRONG |
| SC | Charleston, Columbia, Greenville | WRONG |
| WV | Charleston, Huntington, Morgantown | WRONG |
| TN | Nashville, Memphis, Knoxville, Chattanooga | WRONG |

---

## Schema Markup Audit

| Schema Type | Where Applied | Status |
|-------------|--------------|--------|
| LocalBusiness | Homepage + 45 city pages | OK |
| Breadcrumb | All multi-level pages | OK |
| Service | 6 service pages | OK |
| FAQ | City pages + financing page | OK |
| Article | Blog posts (not yet used) | PENDING |
| **Organization** | **Not implemented** | **MISSING** |
| **AggregateRating** | **Not implemented** | **MISSING** |

---

## Brand Claim Consistency

### CRITICAL: "States Served" Mismatch

| File | Line | Claim | Correct? |
|------|------|-------|----------|
| `src/lib/constants.ts` | 13 | **14 states** | SOURCE OF TRUTH |
| `src/app/page.tsx` | 24 | 14 states | OK |
| `src/app/locations/page.tsx` | — | 14 states | OK |
| `src/app/layout.tsx` | 27 | **"Florida, Texas, Kentucky, and Ohio"** (4 states) | WRONG |
| `src/app/about/page.tsx` | 12 | **"4 states"** (meta desc) | WRONG |
| `src/app/about/page.tsx` | 25 | **"4"** (stats block) | WRONG |
| `src/app/reviews/page.tsx` | 13 | **"4 states"** (meta desc) | WRONG |
| `src/app/contact/page.tsx` | 20 | **"FL, TX, KY, and OH"** (4 states) | WRONG |
| `src/app/free-estimate/page.tsx` | 24 | **"FL, TX, KY, and OH"** (4 states) | WRONG |
| `src/app/gallery/page.tsx` | 11 | **"Florida, Texas, Kentucky, and Ohio"** (4 states) | WRONG |

### MINOR: Project Count Discrepancy

| File | Line | Claim | Issue |
|------|------|-------|-------|
| `src/lib/constants.ts` | 12 | **1,000+** roofs | SOURCE OF TRUTH |
| `src/lib/locations.ts` | 46 | **2,000+** (Tampa intro) | Exceeds global claim |

### Gutters Slug Mismatch

| File | Slug Value | Status |
|------|-----------|--------|
| `src/lib/constants.ts:35` | `gutters-siding` | Used for routing |
| `src/lib/services.ts:372` | `gutters-and-siding` | Used for data lookup |
| `src/lib/projects.ts` | `gutters-and-siding` | serviceType filter |
| `src/lib/testimonials.ts` | `gutters-and-siding` | serviceType filter |
| `src/app/gallery/GalleryGrid.tsx` | `gutters-and-siding` | Display mapping |
| `src/app/reviews/ReviewsContent.tsx` | `gutters-and-siding` | Display mapping |

---

## Internal Links

### Dead Links: NONE FOUND
All internal `<Link href>` references resolve to existing pages.

### Hub-and-Spoke Structure: STRONG
- Homepage links to all service pages, locations hub, gallery, blog
- Service pages cross-link to related services + `/free-estimate`
- City pages link to services, related cities, gallery projects, FAQs
- Breadcrumbs on all sub-pages
- Footer + Header navigation covers all primary routes

### Blog Status
- Hub page exists at `/blog`
- Shows "Coming Soon" — no MDX content in `/src/content/blog/`
- Dynamic `[slug]/page.tsx` route ready for content
