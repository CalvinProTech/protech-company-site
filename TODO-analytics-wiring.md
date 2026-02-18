# Analytics Event Wiring — TODO

> **Status:** Infrastructure complete, event tracking not wired.
> GA4/GTM/CallRail scripts load correctly. All 5 helper functions exist in `src/lib/analytics.ts`. None are called from components.

## 1. Form Submit Tracking

- [ ] **EstimateForm** (`src/components/forms/EstimateForm.tsx`) — call `trackFormSubmit('estimate', data)` in `onSubmit` after successful API response
- [ ] **ContactForm** (`src/components/forms/ContactForm.tsx`) — call `trackFormSubmit('contact', data)` in `onSubmit` after successful API response

## 2. Phone Click Tracking

- [ ] **Header** (`src/components/layout/Header.tsx`) — add `onClick` to desktop and mobile phone `<a>` tags calling `trackPhoneClick(location, page)`
- [ ] **MobileBottomBar** (`src/components/layout/MobileBottomBar.tsx`) — add `onClick` to phone button calling `trackPhoneClick(location, page)`

## 3. CTA Click Tracking

- [ ] **Hero** (`src/components/sections/Hero.tsx`) — add `onClick` to CTA links calling `trackCTAClick(buttonText, page, section)`
- [ ] **CTABanner** (`src/components/sections/CTABanner.tsx`) — add `onClick` to CTA links calling `trackCTAClick(buttonText, page, section)`

## 4. Scroll Depth Tracking

- [ ] Implement scroll listener (25%, 50%, 75%, 100%) calling `trackScrollDepth(page, depth)` — likely in a shared hook or AnalyticsProvider

## 5. Project View Tracking

- [ ] Gallery project cards — call `trackProjectView(projectId, city)` on click/view

## 6. Google Search Console

- [ ] Add `verification: { google: 'YOUR_CODE' }` to root layout metadata in `src/app/layout.tsx`

---

**Impact:** Without these, GA4 tracks pageviews only. Form submissions, phone calls, and CTA clicks — the core lead-gen conversions — are invisible to attribution.
