# Implementation Plan — protechroof.net SEO Fixes

**Date:** 2026-02-17

---

## P0 — Must Fix Now (broken / actively hurting SEO)

### P0-1: Fix City Page Canonical URLs

**Impact:** 45 city pages have canonicals pointing to non-existent URLs. Google may deindex or ignore these pages.

**Files to change:**
1. `src/lib/metadata.ts`
   - Add `stateSlug: string` to `LocationForMetadata` interface (line 58-63)
   - Fix line 72: change `path: \`/locations/${location.citySlug}\`` to `path: \`/locations/${location.stateSlug}/${location.citySlug}\``
   - Fix line 73: update OG image path similarly

**Effort:** 1 file, ~3 lines changed
**Risk:** Low — only changes canonical/OG URL generation

---

### P0-2: Fix "4 States" → "14 States" Across 6 Files

**Impact:** Brand messaging contradicts actual service area. Confuses users and search engines.

**Files to change:**

1. **`src/app/layout.tsx:27`** — Update default description
   - FROM: `'...across Florida, Texas, Kentucky, and Ohio...'`
   - TO: `'...across 14 states including FL, GA, TX, KY, OH, and more...'`

2. **`src/app/about/page.tsx:12`** — Update meta description
   - FROM: `'...across 4 states...'`
   - TO: `'...across 14 states...'`

3. **`src/app/about/page.tsx:25`** — Update stats block
   - FROM: `{ value: '4', label: 'States Served' }`
   - TO: `{ value: '14', label: 'States Served' }`

4. **`src/app/reviews/page.tsx:13`** — Update meta description
   - FROM: `'...across 4 states.'`
   - TO: `'...across 14 states.'`

5. **`src/app/contact/page.tsx:20`** — Update meta description
   - FROM: `'...serving FL, TX, KY, and OH...'`
   - TO: `'...serving 14 states including FL, GA, TX, and more...'`

6. **`src/app/free-estimate/page.tsx:24`** — Update meta description
   - FROM: `'...Licensed in FL, TX, KY, and OH...'`
   - TO: `'...Licensed across 14 states...'`

7. **`src/app/gallery/page.tsx:11`** — Update meta description
   - FROM: `'...across Florida, Texas, Kentucky, and Ohio...'`
   - TO: `'...across 14 states including Florida, Texas, Georgia, and more...'`

**Effort:** 7 files, 8 line changes
**Risk:** None — copy-only changes

---

## P1 — High Impact This Week

### P1-1: Standardize Gutters & Siding Slug

**Impact:** Prevents potential data cross-referencing bugs between routing (`gutters-siding`) and service data (`gutters-and-siding`).

**Decision needed:** Standardize on `gutters-siding` (matches URL) or `gutters-and-siding` (matches data). Recommend `gutters-siding` since the URL already uses it.

**Files to change:**
1. `src/lib/services.ts:372` — Change slug from `"gutters-and-siding"` to `"gutters-siding"`
2. `src/lib/projects.ts` — Update all `serviceType: "gutters-and-siding"` to `"gutters-siding"`
3. `src/lib/testimonials.ts` — Update all `serviceType: "gutters-and-siding"` to `"gutters-siding"`
4. `src/app/gallery/GalleryGrid.tsx` — Update mapping key
5. `src/app/reviews/ReviewsContent.tsx` — Update mapping key
6. `src/app/gallery/[project]/page.tsx` — Update mapping key

**Effort:** 6 files, ~10 line changes
**Risk:** Low — data key normalization only

---

### P1-2: Fix Tampa Project Count

**Impact:** Tampa intro claims "2,000+ projects" while global stat is "1,000+". Credibility risk.

**File:** `src/lib/locations.ts:46`
**Action:** Change "more than 2,000 residential and commercial projects" to "over 1,000 residential and commercial projects" (or update global stat if 2,000 is accurate).

**Effort:** 1 file, 1 line
**Risk:** None

---

### P1-3: Add Organization Schema to Homepage

**Impact:** Enables Knowledge Panel eligibility, strengthens brand entity signals.

**Files to create/change:**
1. Create `src/components/seo/OrganizationSchema.tsx` — New JSON-LD component
2. Add to `src/app/page.tsx` or `src/app/layout.tsx`

Schema should include: name, url, logo, foundingDate, contactPoint, areaServed, description.

**Effort:** 1 new file + 1 edit
**Risk:** None

---

## P2 — Medium Impact This Month

### P2-1: Add AggregateRating to LocalBusinessSchema

**Impact:** Enables star rating rich snippets in SERPs.

**File:** `src/components/seo/LocalBusinessSchema.tsx`
**Action:** Add `aggregateRating` property with `ratingValue: 4.9`, `reviewCount: 500`, `bestRating: 5`.

**Effort:** 1 file, ~10 lines
**Risk:** Low — must ensure Google guidelines compliance (ratings must reflect real reviews)

---

### P2-2: Publish Initial Blog Posts (4-6 articles)

**Impact:** Build topical authority, capture informational search traffic.

**Suggested first posts:**
1. "How Much Does a Roof Replacement Cost in 2026?" (~14K monthly searches)
2. "Roof Repair vs. Replacement: How to Decide" (~8K)
3. "7 Signs You Need a New Roof" (~6K)
4. "How to File a Roof Insurance Claim After Storm Damage" (~4K)
5. "Metal Roof vs. Shingles: Which Is Right for Your Home?" (~5K)
6. "Spring Roof Maintenance Checklist" (~2K)

**Files:** Create 4-6 `.mdx` files in `src/content/blog/`
**Effort:** Content creation (outside of code changes)
**Risk:** None

---

### P2-3: Add Service x City Combination Pages

**Impact:** Captures high-intent "service + city" queries. 270 potential pages.

**Architecture decision needed:**
- Option A: `/locations/[state]/[city]/[service]` (city-first hierarchy)
- Option B: `/services/[service]/[state]/[city]` (service-first hierarchy)
- Option C: Programmatic SEO with template + data generation

**Effort:** Template creation + data mapping + 270 thin page files or dynamic routing
**Risk:** Medium — must ensure unique content per page to avoid thin content penalty

---

### P2-4: Create Surrounding City Pages

**Impact:** Capture "roofing near [smaller city]" queries for cities in service radius.

Each city in `locations.ts` already lists 3-5 surrounding cities. Creating lightweight pages for these ~150+ surrounding cities would expand local coverage significantly.

**Effort:** Template + data expansion
**Risk:** Medium — thin content risk if not enough unique content per page

---

## Execution Order

```
Week 1 (P0):
  1. Fix canonical URLs in metadata.ts        [30 min]
  2. Fix "4 states" copy across 7 files       [30 min]
  3. Build + deploy to verify                 [15 min]

Week 1 (P1):
  4. Standardize gutters slug                 [30 min]
  5. Fix Tampa project count                  [5 min]
  6. Add OrganizationSchema                   [1 hr]

Week 2 (P2):
  7. Add AggregateRating to LocalBusiness     [30 min]
  8. Plan blog content calendar               [2 hrs]
  9. Write + publish first 2 blog posts       [content effort]

Week 3-4 (P2):
  10. Architect service x city pages          [4 hrs]
  11. Write + publish remaining blog posts    [content effort]
  12. Evaluate surrounding city page ROI      [research]
```

---

## Summary

| Priority | Count | Total Files | Risk |
|----------|-------|-------------|------|
| **P0** | 2 items | 8 files | Low |
| **P1** | 3 items | 8 files | Low |
| **P2** | 4 items | TBD | Low-Medium |
