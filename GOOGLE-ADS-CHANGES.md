# Google Ads Optimization — Site Changes & Campaign Guide

## Summary

- **147 static pages** now generated (up from ~100)
- **8 pilot cities** with dedicated landing pages + 5 service subpages each
- **40 city-service pages** total (8 cities × 5 services)
- **/certifications** landing page targeting "GAF certified" keywords
- **UTM parameter capture** on all 6 forms for campaign attribution
- **QuickQuoteForm** added to every city-service page for inline lead capture

---

## Part 1: Code Changes

### 1A. Conversion Tracking Env Vars

**File:** `.env.local.example`

- Added missing `NEXT_PUBLIC_GOOGLE_ADS_CALLBACK_LABEL=`
- Added documentation comments explaining where to find each ID

No code changes needed in `analytics.ts` or `GoogleAnalytics.tsx` — they were already wired up. The only blocker was the env vars being empty in production.

---

### 1B. Gutters-Siding Added to Existing Pilot Cities

**Files modified:**
- `src/lib/city-services.ts` — added `'gutters-siding'` to `CITY_SERVICE_SLUGS`
- `src/lib/city-services.ts` — added 4 new `CityServiceData` entries

**New page files (4):**
- `src/app/locations/tampa-fl/gutters-siding/page.tsx`
- `src/app/locations/houston-tx/gutters-siding/page.tsx`
- `src/app/locations/louisville-ky/gutters-siding/page.tsx`
- `src/app/locations/columbus-oh/gutters-siding/page.tsx`

**URLs created:**
- `/locations/tampa-fl/gutters-siding`
- `/locations/houston-tx/gutters-siding`
- `/locations/louisville-ky/gutters-siding`
- `/locations/columbus-oh/gutters-siding`

---

### 1C. 4 New Pilot Cities Expanded

**Cities added:** Atlanta GA, Charlotte NC, Jacksonville FL, Nashville TN

**Files modified:**
- `src/lib/locations.ts` — added 4 cities to `PILOT_CITY_STATE_SLUGS`
- `src/lib/city-services.ts` — added 20 new `CityServiceData` entries (5 services × 4 cities)
- `next.config.ts` — added 4 permanent redirects

**Redirects added:**
| Old Path | New Path |
|---|---|
| `/locations/georgia/atlanta` | `/locations/atlanta-ga` |
| `/locations/north-carolina/charlotte` | `/locations/charlotte-nc` |
| `/locations/florida/jacksonville` | `/locations/jacksonville-fl` |
| `/locations/tennessee/nashville` | `/locations/nashville-tn` |

**New page files (24):**

Each city gets 1 landing page + 5 service pages:

```
src/app/locations/atlanta-ga/page.tsx
src/app/locations/atlanta-ga/roof-replacement/page.tsx
src/app/locations/atlanta-ga/roof-repair/page.tsx
src/app/locations/atlanta-ga/storm-damage/page.tsx
src/app/locations/atlanta-ga/insurance-claims/page.tsx
src/app/locations/atlanta-ga/gutters-siding/page.tsx

src/app/locations/charlotte-nc/page.tsx
src/app/locations/charlotte-nc/roof-replacement/page.tsx
src/app/locations/charlotte-nc/roof-repair/page.tsx
src/app/locations/charlotte-nc/storm-damage/page.tsx
src/app/locations/charlotte-nc/insurance-claims/page.tsx
src/app/locations/charlotte-nc/gutters-siding/page.tsx

src/app/locations/jacksonville-fl/page.tsx
src/app/locations/jacksonville-fl/roof-replacement/page.tsx
src/app/locations/jacksonville-fl/roof-repair/page.tsx
src/app/locations/jacksonville-fl/storm-damage/page.tsx
src/app/locations/jacksonville-fl/insurance-claims/page.tsx
src/app/locations/jacksonville-fl/gutters-siding/page.tsx

src/app/locations/nashville-tn/page.tsx
src/app/locations/nashville-tn/roof-replacement/page.tsx
src/app/locations/nashville-tn/roof-repair/page.tsx
src/app/locations/nashville-tn/storm-damage/page.tsx
src/app/locations/nashville-tn/insurance-claims/page.tsx
src/app/locations/nashville-tn/gutters-siding/page.tsx
```

**URLs created (24):**
- `/locations/atlanta-ga` + `/roof-replacement`, `/roof-repair`, `/storm-damage`, `/insurance-claims`, `/gutters-siding`
- `/locations/charlotte-nc` + same 5 service subpages
- `/locations/jacksonville-fl` + same 5 service subpages
- `/locations/nashville-tn` + same 5 service subpages

---

### 1D. QuickQuoteForm on City-Service Pages

**Files modified:**
- `src/components/templates/CityServicePageTemplate.tsx` — imported `QuickQuoteForm`, added it in a sticky sidebar layout between the intro section and benefits grid
- `src/lib/schemas.ts` — added `'quick-quote-city-service'` to `CALLBACK_SOURCES`

**What changed visually:** Every city-service page (e.g. `/locations/tampa-fl/roof-replacement`) now has a "Get a Free [Service] Quote" form in a right sidebar next to the intro text, instead of just link CTAs to `/free-estimate`. This gives paid traffic an inline conversion path.

---

### 1E. Certifications Landing Page

**New file:** `src/app/certifications/page.tsx`

**File modified:** `src/components/layout/Footer.tsx` — added "Certifications" link in Services column

**URL created:** `/certifications`

**Page sections:**
1. Hero — "GAF Master Elite Certified Roofing Contractor" with trust badges
2. 4 certification detail sections (GAF Master Elite, Owens Corning Preferred, NRCA, BBB)
3. Licensed in 14 States grid (dynamically derived from locations data)
4. "What Our Certifications Mean for You" — 3 benefit cards
5. FAQ section with 5 certification-related questions (has FAQSchema for Google)
6. CTA Banner → `/free-estimate`

**Keywords targeted:** "GAF certified roofer", "certified roofing contractor", "licensed roofer [state]"

---

### 1F. UTM Parameter Capture

**New file:** `src/lib/utm.ts`
- `captureUtmParams()` — reads `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid` from URL, stores in `sessionStorage`
- `getUtmParams()` — retrieves stored params

**Files modified:**
- `src/components/analytics/AnalyticsProvider.tsx` — calls `captureUtmParams()` on mount
- `src/components/forms/ContactForm.tsx` — sends `_utm` in payload
- `src/components/forms/EstimateForm.tsx` — sends `_utm` in payload
- `src/components/forms/QuickQuoteForm.tsx` — sends `_utm` in payload
- `src/components/forms/FloatingCallbackWidget.tsx` — sends `_utm` in payload
- `src/components/forms/ExitIntentPopup.tsx` — sends `_utm` in payload
- `src/components/forms/InstantEstimateWidget.tsx` — sends `_utm` in payload

**What this enables:** Every form submission now includes UTM data (source, medium, campaign, term, gclid) so you can see which Google Ads campaign/keyword generated each lead in your API/CRM.

---

## Part 2: Google Ads Campaign Restructure

### Step 1: Pause Everything

Pause all 43 existing keywords in the "Leads-Search" campaign. Start fresh.

### Step 2: Create 3 New Campaigns

#### Campaign 1: Roof Replacement (50% of budget)

| Ad Group | Keywords (Phrase Match) | Final URL |
|---|---|---|
| Tampa | `"roof replacement tampa"`, `"new roof tampa fl"`, `"reroof tampa"` | `https://protechroof.net/locations/tampa-fl/roof-replacement` |
| Houston | `"roof replacement houston"`, `"new roof houston tx"`, `"reroof houston"` | `https://protechroof.net/locations/houston-tx/roof-replacement` |
| Atlanta | `"roof replacement atlanta"`, `"new roof atlanta ga"`, `"reroof atlanta"` | `https://protechroof.net/locations/atlanta-ga/roof-replacement` |
| Charlotte | `"roof replacement charlotte"`, `"new roof charlotte nc"`, `"reroof charlotte"` | `https://protechroof.net/locations/charlotte-nc/roof-replacement` |
| Jacksonville | `"roof replacement jacksonville"`, `"new roof jacksonville fl"` | `https://protechroof.net/locations/jacksonville-fl/roof-replacement` |
| Nashville | `"roof replacement nashville"`, `"new roof nashville tn"`, `"reroof nashville"` | `https://protechroof.net/locations/nashville-tn/roof-replacement` |
| Louisville | `"roof replacement louisville"`, `"new roof louisville ky"` | `https://protechroof.net/locations/louisville-ky/roof-replacement` |
| Columbus | `"roof replacement columbus"`, `"new roof columbus oh"` | `https://protechroof.net/locations/columbus-oh/roof-replacement` |

#### Campaign 2: Roof Repair (30% of budget)

| Ad Group | Keywords (Phrase Match) | Final URL |
|---|---|---|
| Tampa | `"roof repair tampa"`, `"roof leak repair tampa"`, `"emergency roof repair tampa"` | `https://protechroof.net/locations/tampa-fl/roof-repair` |
| Houston | `"roof repair houston"`, `"roof leak repair houston"`, `"emergency roof repair houston"` | `https://protechroof.net/locations/houston-tx/roof-repair` |
| Atlanta | `"roof repair atlanta"`, `"roof leak repair atlanta"`, `"emergency roof repair atlanta"` | `https://protechroof.net/locations/atlanta-ga/roof-repair` |
| Charlotte | `"roof repair charlotte"`, `"roof leak repair charlotte"` | `https://protechroof.net/locations/charlotte-nc/roof-repair` |
| Jacksonville | `"roof repair jacksonville"`, `"roof leak repair jacksonville"` | `https://protechroof.net/locations/jacksonville-fl/roof-repair` |
| Nashville | `"roof repair nashville"`, `"roof leak repair nashville"` | `https://protechroof.net/locations/nashville-tn/roof-repair` |
| Louisville | `"roof repair louisville"`, `"roof leak repair louisville"` | `https://protechroof.net/locations/louisville-ky/roof-repair` |
| Columbus | `"roof repair columbus"`, `"roof leak repair columbus"` | `https://protechroof.net/locations/columbus-oh/roof-repair` |

#### Campaign 3: Gutters (20% of budget)

| Ad Group | Keywords (Phrase Match) | Final URL |
|---|---|---|
| Tampa | `"gutter installation tampa"`, `"seamless gutters tampa"`, `"gutter replacement tampa"` | `https://protechroof.net/locations/tampa-fl/gutters-siding` |
| Houston | `"gutter installation houston"`, `"seamless gutters houston"` | `https://protechroof.net/locations/houston-tx/gutters-siding` |
| Atlanta | `"gutter installation atlanta"`, `"seamless gutters atlanta"` | `https://protechroof.net/locations/atlanta-ga/gutters-siding` |
| Charlotte | `"gutter installation charlotte"`, `"seamless gutters charlotte"` | `https://protechroof.net/locations/charlotte-nc/gutters-siding` |
| Jacksonville | `"gutter installation jacksonville"`, `"seamless gutters jacksonville"` | `https://protechroof.net/locations/jacksonville-fl/gutters-siding` |
| Nashville | `"gutter installation nashville"`, `"seamless gutters nashville"` | `https://protechroof.net/locations/nashville-tn/gutters-siding` |
| Louisville | `"gutter installation louisville"`, `"seamless gutters louisville"` | `https://protechroof.net/locations/louisville-ky/gutters-siding` |
| Columbus | `"gutter installation columbus"`, `"seamless gutters columbus"` | `https://protechroof.net/locations/columbus-oh/gutters-siding` |

### Step 3: Campaign Settings

- **Match types:** Phrase match only — budget is too small for Broad match
- **Location targeting:** Each ad group targets its city + 30mi radius
- **Location option:** "People IN your targeted locations" (NOT "People who show interest in")
- **Negative keywords (campaign-level):** free, DIY, how to, jobs, salary, hiring, tutorial, class, cheap, cost calculator, wiki, youtube
- **Bid strategy:** Start with Maximize Clicks (with a max CPC cap of $8-12), then switch to Target CPA once you have 15+ conversions

### Step 4: Conversion Setup

1. In Google Ads: **Goals → Conversions → + New conversion action → Website**
2. Create 3 conversion actions:
   - **Form Submission** (estimate + contact forms)
   - **Phone Click** (tel: link clicks)
   - **Callback Request** (quick quote / exit intent / floating widget)
3. Each action gives you a **Conversion ID** (shared across all) and a **Label** (unique per action)
4. Set these in **Vercel → Settings → Environment Variables**:

```
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ESTIMATE_LABEL=xxxxxxxxxxxx
NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL=xxxxxxxxxxxx
NEXT_PUBLIC_GOOGLE_ADS_CALLBACK_LABEL=xxxxxxxxxxxx
NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL=xxxxxxxxxxxx
```

5. Redeploy after setting env vars

### Step 5: Ad Copy Template

**Headline 1:** `{Service} in {City}, {ST}` (e.g. "Roof Replacement in Tampa, FL")
**Headline 2:** `GAF Master Elite Contractor`
**Headline 3:** `Free Estimate — Call Today`
**Description 1:** `Licensed & insured. Lifetime warranty. {City}'s trusted roofing experts. Get your free inspection today.`
**Description 2:** `GAF & Owens Corning certified. 1,000+ roofs completed. Financing from $0 down. Call now.`

---

## Files Changed Summary

### New Files (30)
| File | Purpose |
|---|---|
| `src/lib/utm.ts` | UTM parameter capture/retrieval |
| `src/app/certifications/page.tsx` | Certifications landing page |
| `src/app/locations/tampa-fl/gutters-siding/page.tsx` | City-service page |
| `src/app/locations/houston-tx/gutters-siding/page.tsx` | City-service page |
| `src/app/locations/louisville-ky/gutters-siding/page.tsx` | City-service page |
| `src/app/locations/columbus-oh/gutters-siding/page.tsx` | City-service page |
| `src/app/locations/atlanta-ga/page.tsx` | City landing page |
| `src/app/locations/atlanta-ga/roof-replacement/page.tsx` | City-service page |
| `src/app/locations/atlanta-ga/roof-repair/page.tsx` | City-service page |
| `src/app/locations/atlanta-ga/storm-damage/page.tsx` | City-service page |
| `src/app/locations/atlanta-ga/insurance-claims/page.tsx` | City-service page |
| `src/app/locations/atlanta-ga/gutters-siding/page.tsx` | City-service page |
| `src/app/locations/charlotte-nc/page.tsx` | City landing page |
| `src/app/locations/charlotte-nc/roof-replacement/page.tsx` | City-service page |
| `src/app/locations/charlotte-nc/roof-repair/page.tsx` | City-service page |
| `src/app/locations/charlotte-nc/storm-damage/page.tsx` | City-service page |
| `src/app/locations/charlotte-nc/insurance-claims/page.tsx` | City-service page |
| `src/app/locations/charlotte-nc/gutters-siding/page.tsx` | City-service page |
| `src/app/locations/jacksonville-fl/page.tsx` | City landing page |
| `src/app/locations/jacksonville-fl/roof-replacement/page.tsx` | City-service page |
| `src/app/locations/jacksonville-fl/roof-repair/page.tsx` | City-service page |
| `src/app/locations/jacksonville-fl/storm-damage/page.tsx` | City-service page |
| `src/app/locations/jacksonville-fl/insurance-claims/page.tsx` | City-service page |
| `src/app/locations/jacksonville-fl/gutters-siding/page.tsx` | City-service page |
| `src/app/locations/nashville-tn/page.tsx` | City landing page |
| `src/app/locations/nashville-tn/roof-replacement/page.tsx` | City-service page |
| `src/app/locations/nashville-tn/roof-repair/page.tsx` | City-service page |
| `src/app/locations/nashville-tn/storm-damage/page.tsx` | City-service page |
| `src/app/locations/nashville-tn/insurance-claims/page.tsx` | City-service page |
| `src/app/locations/nashville-tn/gutters-siding/page.tsx` | City-service page |

### Modified Files (12)
| File | Change |
|---|---|
| `.env.local.example` | Added `CALLBACK_LABEL` + comments |
| `src/lib/city-services.ts` | Added `gutters-siding` to slugs + 24 data entries |
| `src/lib/locations.ts` | Expanded `PILOT_CITY_STATE_SLUGS` to 8 cities |
| `src/lib/schemas.ts` | Added `quick-quote-city-service` to `CALLBACK_SOURCES` |
| `src/components/templates/CityServicePageTemplate.tsx` | Added QuickQuoteForm sidebar |
| `src/components/analytics/AnalyticsProvider.tsx` | Calls `captureUtmParams()` on mount |
| `src/components/layout/Footer.tsx` | Added Certifications link |
| `src/components/forms/ContactForm.tsx` | Sends UTM params in payload |
| `src/components/forms/EstimateForm.tsx` | Sends UTM params in payload |
| `src/components/forms/QuickQuoteForm.tsx` | Sends UTM params in payload |
| `src/components/forms/FloatingCallbackWidget.tsx` | Sends UTM params in payload |
| `src/components/forms/ExitIntentPopup.tsx` | Sends UTM params in payload |
| `src/components/forms/InstantEstimateWidget.tsx` | Sends UTM params in payload |
| `next.config.ts` | Added 4 redirects for new pilot cities |

---

## Next Steps After Deploy

1. Set Google Ads conversion env vars in Vercel and redeploy
2. Pause all 43 existing keywords in Google Ads
3. Create the 3 campaigns with the structure above
4. Set up conversion tracking in Google Ads dashboard
5. Monitor for 2 weeks, then optimize bids based on CPA data
