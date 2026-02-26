# ProTech Roofing - Pre-Campaign Site Audit

**Date**: 2026-02-26
**Branch**: dev
**Build**: PASSES (116 static pages, 0 errors)
**Lint**: 0 warnings, 0 errors

---

## CRITICAL Issues

### 1. Estimate Form Only Allows 4 States (Should Be 14)
- **File**: `src/lib/schemas.ts:17`
- **Issue**: `STATE_OPTIONS = ['FL', 'TX', 'KY', 'OH']` but we operate in 14 states
- **Impact**: Customers from GA, DE, MD, VA, CT, PA, NC, SC, WV, TN cannot select their state on the estimate form — conversion killer for ad traffic
- **Fix**: Expanded to all 14 states
- **Status**: [x] DONE

### 2. No Google Ads Conversion Tracking
- **Files**: `src/lib/analytics.ts`, `src/components/analytics/GoogleAnalytics.tsx`
- **Issue**: GA4 and GTM load correctly, custom events push to dataLayer, but no `gtag('event', 'conversion', {...})` calls exist
- **Impact**: Can't measure ROI, Google can't optimize bids, Smart Bidding won't work
- **Fix**: Added `fireGoogleAdsConversion()` to form submissions + phone clicks; added Google Ads config to GA script
- **Status**: [x] DONE (code ready — need to set env vars in Vercel: `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ESTIMATE_LABEL`, `NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL`, `NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL`)

### 3. InstantEstimateWidget Has No Analytics Event
- **File**: `src/components/forms/InstantEstimateWidget.tsx`
- **Issue**: Primary homepage CTA doesn't fire any `trackFormSubmit()` on completion
- **Impact**: Blind to highest-value conversion
- **Fix**: Added `trackFormSubmit('instant-estimate', ...)` on successful result
- **Status**: [x] DONE

### 4. 30 Missing Hero Images
- **File**: `src/lib/locations.ts`
- **Issue**: 30/45 city pages reference hero images that don't exist in `public/images/hero/`
- **Affected**: GA, DE, MD, VA, CT, PA, NC, SC, WV, TN (all cities)
- **Impact**: Broken/missing hero backgrounds on city landing pages
- **Fix**: Set all 30 missing references to `/images/hero/default.jpg` — no broken images
- **Status**: [x] DONE (fallback applied — city-specific images still desired, see "Assets Needed" below)

---

## MODERATE Issues

### 5. Hardcoded Phone Numbers (3 locations)
- `src/app/locations/page.tsx:37` — was `tel:18663082640`
- `src/app/services/page.tsx:32` — was `tel:18663082640`
- `src/components/forms/FormSuccess.tsx:42` — was `tel:18663082640`
- **Fix**: Replaced all with `SITE_CONFIG.defaultPhoneRaw` / `SITE_CONFIG.defaultPhone`
- **Status**: [x] DONE

### 6. Missing Google Ads Env Vars in Example
- **File**: `.env.local.example`
- **Fix**: Added `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ESTIMATE_LABEL`, `NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL`, `NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL`
- **Status**: [x] DONE

### 7. Sitemap `lastModified` Hardcoded
- **File**: `src/app/sitemap.ts`
- **Issue**: All static routes used `new Date('2025-02-19')`
- **Fix**: Changed to `new Date()` — updates on each build
- **Status**: [x] DONE

---

## LOW Priority / Enhancements

### 8. FAQ Schemas Missing on Service Pages
- **Issue**: FAQ schema only on `/financing` — service pages miss rich snippet opportunities
- **Status**: [ ] TODO (deferred — requires adding FAQ data per service)

### 9. Blog Articles Use Wrong OG Type
- **Issue**: Blog posts inherited `og:type: 'website'` instead of `'article'`
- **Fix**: Added `type` param to `createPageMetadata()`, blog posts now use `type: 'article'`
- **Status**: [x] DONE

### 10. Lint Cleanup
- `src/components/sections/Hero.tsx` — removed unused `cn` import
- `src/components/sections/ServiceCards.tsx` — removed unused `cn` import
- `src/components/ui/Button.tsx` — suppressed unused `disabled` destructure (needed to prevent DOM passthrough)
- **Status**: [x] DONE

---

## Assets Needed From You

### Hero Images (30 cities)
City-specific hero images for these locations (optimized JPG, ~1920x1080):
- **Georgia**: Atlanta, Savannah, Augusta
- **Delaware**: Wilmington, Dover
- **Maryland**: Baltimore, Frederick, Annapolis
- **Virginia**: Virginia Beach, Richmond, Norfolk
- **Connecticut**: Hartford, New Haven, Stamford
- **Pennsylvania**: Philadelphia, Pittsburgh, Allentown
- **North Carolina**: Charlotte, Raleigh, Greensboro
- **South Carolina**: Charleston, Columbia, Greenville
- **West Virginia**: Charleston, Huntington, Morgantown
- **Tennessee**: Nashville, Memphis, Knoxville, Chattanooga

File naming convention: `public/images/hero/{city-slug}.jpg`

### Google Ads Configuration (from Google Ads account)
Set these in Vercel environment variables:
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` — e.g., `AW-XXXXXXXXXX`
- `NEXT_PUBLIC_GOOGLE_ADS_ESTIMATE_LABEL` — estimate form conversion label
- `NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL` — contact form conversion label
- `NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL` — phone click conversion label

To get these: Google Ads > Tools > Conversions > New conversion action > Website > set up manually

---

## What's Already Solid

| Area | Status |
|------|--------|
| Build | Clean, 0 errors, 0 lint warnings |
| SEO Metadata | 97/97 pages have proper titles, descriptions, OG tags, canonical URLs |
| Structured Data | 8 JSON-LD schema types |
| Sitemap | 100+ routes with correct priorities |
| Robots.txt | Properly configured |
| Heading Hierarchy | Single H1 per page, proper nesting |
| Forms | react-hook-form + zod, loading/error/success states, rate limiting |
| API Security | Rate limiting, input validation, no secrets leaked |
| Accessibility | Skip links, ARIA labels, semantic HTML, focus management |
| Mobile | Responsive, sticky CTAs, MobileBottomBar |
| Performance | Image optimization, lazy loading, dynamic imports |
| CTAs | Phone visible everywhere, multiple estimate CTAs |
| Trust Signals | 5.0 rating, 100 reviews, 20+ years, 1000+ roofs |
