# ProTech Roofing Marketing Playbook

**Company:** ProTech Roofing
**Website:** https://protechroof.net
**Phone:** 1-866-308-2640
**Email:** sales@protechroof.net
**Coverage:** 14 states, 45 cities

---

## Table of Contents

1. [Google Business Profile](#1-google-business-profile)
2. [Google Search Console](#2-google-search-console)
3. [Google Analytics 4](#3-google-analytics-4)
4. [Local SEO](#4-local-seo)
5. [Content Marketing](#5-content-marketing)
6. [Google Ads](#6-google-ads)
7. [Social Proof](#7-social-proof)
8. [Social Media](#8-social-media)

---

## 1. Google Business Profile

### 1.1 Multi-Location Setup Strategy

ProTech Roofing operates across 14 states with 45 city-level service areas. Google Business Profile (GBP) requires a separate listing for each location where you have a physical presence or a defined service area.

**Recommended approach:**

- Create a **Business Group** (formerly called an Organization) in Google Business Profile Manager at https://business.google.com to manage all locations under one umbrella.
- For each city where ProTech has a physical office, storefront, or staffed warehouse, create a **storefront listing** with the street address visible.
- For cities served remotely (no physical office), create a **service-area business (SAB) listing** with the address hidden and the service radius defined. Use the 50-mile service radius already defined in the site's location data.

**Priority locations to list first (pilot cities):**

| City | State | Service Radius | Surrounding Cities |
|------|-------|----------------|-------------------|
| Tampa | FL | 50 miles | St. Petersburg, Clearwater, Brandon, Lakeland, Wesley Chapel |
| Houston | TX | 50 miles | Sugar Land, Katy, The Woodlands, Pearland, Pasadena |
| Louisville | KY | 50 miles | Jeffersontown, Elizabethtown, Shepherdsville, New Albany |
| Columbus | OH | 50 miles | Dublin, Westerville, Grove City, Reynoldsburg, Hilliard |

**Then expand to the remaining 41 cities across all 14 states:**

| State | Cities |
|-------|--------|
| Florida | Orlando, Miami, Jacksonville, Fort Lauderdale |
| Georgia | Atlanta, Savannah, Augusta |
| Texas | Dallas, San Antonio, Austin, Fort Worth |
| Virginia | Virginia Beach, Richmond, Norfolk |
| Pennsylvania | Philadelphia, Pittsburgh, Allentown |
| North Carolina | Charlotte, Raleigh, Greensboro |
| South Carolina | Charleston, Columbia, Greenville |
| Tennessee | Nashville, Memphis, Knoxville, Chattanooga |
| Connecticut | Hartford, New Haven, Stamford |
| Maryland | Baltimore, Frederick, Annapolis |
| Delaware | Wilmington, Dover |
| West Virginia | Charleston, Huntington, Morgantown |
| Kentucky | Lexington |
| Ohio | Cincinnati, Cleveland |

### 1.2 Category Selection

**Primary category:** Roofing Contractor

**Additional categories (add all that apply):**
- Roof Repair Service
- Commercial Roofing Contractor
- Storm Damage Restoration Service
- Gutter Installation Service
- Siding Contractor
- Building Inspection Service (for roof inspection service)

### 1.3 Profile Optimization Checklist

For every GBP listing, complete the following:

- [ ] Business name: "ProTech Roofing" (consistent across all listings; do not add city names)
- [ ] Phone: 1-866-308-2640 (or city-specific CallRail tracking number if available)
- [ ] Website: `https://protechroof.net/locations/[state-slug]/[city-slug]` (link to the corresponding city page, not the homepage)
- [ ] Hours: Set accurate business hours; include "emergency service available 24/7" in the description
- [ ] Services: Add each service with descriptions pulled from the site's service data:
  - Roof Replacement
  - Roof Repair
  - Storm Damage Restoration
  - Commercial Roofing
  - Roof Inspection
  - Gutters & Siding
  - Insurance Claims Assistance
- [ ] Description: Use the city-specific `intro` text from `src/lib/locations.ts` as the foundation, trimmed to 750 characters
- [ ] Attributes: Enable "Veteran-led" (if applicable), "Free estimates", "Licensed", "Insured"
- [ ] Opening date: Add the year ProTech began operating in that market

### 1.4 Photo Guidelines

Upload a minimum of 20 photos per listing. Prioritize the following categories:

| Category | Quantity | Details |
|----------|----------|---------|
| Logo | 1 | Official ProTech Roofing logo, square format, minimum 250x250px |
| Cover photo | 1 | Best completed project in that city/region, 1024x575px minimum |
| Completed projects | 8-10 | Before/after pairs from the city or surrounding area |
| Team/crew photos | 3-4 | Crew on job sites, wearing branded gear, helmets visible |
| Truck/equipment | 2-3 | Branded trucks, on-site fabrication equipment, drone equipment |
| Interior shots | 2-3 | Office, showroom, or material samples (if applicable) |

**Photo specs:**
- Format: JPG or PNG
- Size: Between 10KB and 5MB each
- Resolution: Minimum 720px on the shortest side
- Remove EXIF data that contains personal information, but retain GPS coordinates for photos taken at job sites (this helps with local ranking)
- Add a new photo at least once per month per listing

### 1.5 Google Posts Strategy

Publish one post per listing per week, rotating through these four post types:

| Week | Post Type | Content Example |
|------|-----------|-----------------|
| Week 1 | **Project Showcase** | Before/after of a completed job in the service area with material details |
| Week 2 | **Seasonal Tip** | "Spring Storm Prep: 3 Things to Check on Your Roof Before April" |
| Week 3 | **Offer / CTA** | "Free Roof Inspection This Month -- Schedule at protechroof.net/free-estimate" |
| Week 4 | **Review Spotlight** | Feature a recent 5-star review from a local customer with their permission |

**Post guidelines:**
- Keep text between 150-300 words
- Always include a high-quality image (1200x900px recommended)
- Always include a CTA button: "Learn more" linking to the relevant page, or "Call now" with the phone number
- Posts expire after 6 months; set calendar reminders to maintain consistency

### 1.6 Q&A Management

Seed each listing with 5-8 frequently asked questions and answer them from the business account. Pull from the FAQ data already on the site (defined in `src/lib/services.ts`):

1. "How much does a roof replacement cost?" -- Answer with the $8,000-$25,000 range
2. "Do you offer free estimates?" -- Yes, schedule at protechroof.net/free-estimate
3. "Do you work with insurance companies?" -- Yes, full insurance claim assistance included
4. "What areas do you serve near [city]?" -- List the surrounding cities from the location data
5. "How long does a roof replacement take?" -- Most residential jobs complete in 1-2 days
6. "Do you offer financing?" -- Yes, visit protechroof.net/financing for details
7. "Are you licensed and insured?" -- Yes, include the license number for that state
8. "Do you provide emergency roof repair?" -- Yes, 24-hour emergency response

**Monitor Q&A weekly.** Answer all new questions within 24 hours. Flag and report any spam or competitor-submitted questions.

### 1.7 Review Response Protocol

- Respond to every review within 24 hours
- For 5-star reviews: Thank the reviewer by name, mention the specific service and city, and invite them to refer friends
- For 4-star reviews: Thank them, ask privately what could have been improved
- For 1-3 star reviews: Thank them, apologize for the experience, provide a direct phone number or email (sales@protechroof.net) to resolve offline. Never argue publicly.

---

## 2. Google Search Console

### 2.1 Setup Steps

**Step 1: Add the property**
1. Go to https://search.google.com/search-console
2. Click "Add property"
3. Choose "URL prefix" and enter `https://protechroof.net`
4. Also add `https://www.protechroof.net` as a separate property if www redirects are active

**Step 2: Verify ownership**

The site supports HTML meta tag verification. To implement this:

1. In Google Search Console, select the "HTML tag" verification method
2. Copy the `content` value from the provided meta tag (it looks like a long alphanumeric string)
3. Add the verification code to your environment variables:
   ```
   NEXT_PUBLIC_GSC_VERIFICATION=your-verification-code-here
   ```
4. Ensure the root layout (`src/app/layout.tsx`) renders this as a meta tag in the `<head>`. If not yet implemented, add it to the metadata export in the layout:
   ```typescript
   // In src/app/layout.tsx metadata export:
   verification: {
     google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
   },
   ```
5. Deploy the change to Vercel and verify in Search Console

**Step 3: Submit sitemap**
1. In Search Console, go to "Sitemaps" in the left sidebar
2. Enter `sitemap.xml` and click Submit
3. The site's dynamic `sitemap.ts` (at `src/app/sitemap.ts`) automatically generates all routes including:
   - 10 static pages (home, about, contact, free-estimate, financing, reviews, gallery, blog, locations, services)
   - 14 state pages (`/locations/[state]`)
   - 45 city pages (`/locations/[state]/[city]` and pilot city pages)
   - City-service combination pages
   - 7 service pages (`/services/[slug]`)
   - Gallery project pages
   - 6 blog posts
4. Verify the sitemap shows a "Success" status and the expected number of URLs

### 2.2 Keyword Monitoring

Set up the following keyword groups to monitor weekly in the Performance report:

**High-intent commercial keywords (track for each city):**

| Keyword Pattern | Example | Target Page |
|-----------------|---------|-------------|
| `roofing contractor [city]` | roofing contractor Tampa | /locations/florida/tampa |
| `roof replacement [city]` | roof replacement Houston | /locations/texas/houston |
| `roof repair near me` | (location-based) | /services/roof-repair |
| `storm damage roof repair [city]` | storm damage roof repair Dallas | /locations/texas/dallas |
| `roof inspection [city]` | roof inspection Columbus | /locations/ohio/columbus |
| `commercial roofing [city]` | commercial roofing Atlanta | /locations/georgia/atlanta |
| `gutter installation [city]` | gutter installation Charlotte | /services/gutters-siding |
| `roofing insurance claim help` | (national) | /services/insurance-claims |

**Informational keywords (blog targets):**

| Keyword | Target Blog Post |
|---------|-----------------|
| how much does roof replacement cost | /blog/how-much-does-roof-replacement-cost |
| metal roof vs shingles | /blog/metal-roof-vs-shingle-roof |
| roof repair vs replacement | /blog/roof-repair-vs-replacement |
| spring roof maintenance | /blog/spring-roof-maintenance-checklist |
| signs you need a new roof | /blog/5-signs-roof-needs-replacement |
| what to do after storm damage | /blog/what-to-do-after-storm-damage |

### 2.3 Indexing Requests

After any major content update (new blog post, new city page, updated service page), request indexing:

1. Go to the "URL Inspection" tool in Search Console
2. Enter the full URL of the new or updated page
3. Click "Request Indexing"
4. Limit to 10-20 requests per day to avoid rate limits

**Priority pages to monitor for index coverage:**
- All 45 city pages (these are your money pages)
- All 7 service pages
- The homepage
- Blog posts

### 2.4 Performance Reports -- Weekly Review

Run these reports every Monday:

1. **Queries report (last 28 days):** Sort by impressions, then by clicks. Identify queries with high impressions but low CTR -- these are candidates for title tag and meta description improvements in `src/lib/metadata.ts`.

2. **Pages report (last 28 days):** Sort by clicks. Verify that city pages and service pages are the top performers. Investigate any pages with declining traffic.

3. **Countries/Devices:** Confirm mobile traffic is dominant (typical for roofing searches). Monitor Core Web Vitals pass rates in the "Experience" tab.

4. **Crawl stats:** Check under Settings > Crawl Stats to ensure Googlebot can access all pages without 5xx errors. The Vercel deployment in `iad1` region should maintain fast crawl times.

### 2.5 Common Issues to Watch For

| Issue | Where to Check | Action |
|-------|---------------|--------|
| Pages not indexed | Coverage > Excluded | Review "Discovered -- currently not indexed" pages; improve internal linking |
| Duplicate content | Coverage > Excluded | Check for canonical tag issues in `src/lib/metadata.ts` |
| Mobile usability errors | Experience > Mobile Usability | Fix any tap target or viewport issues |
| Core Web Vitals failures | Experience > Core Web Vitals | Optimize LCP (images), CLS (layout shifts), INP (interaction delays) |
| 404 errors | Pages > Not found | Add redirects in `next.config.ts` or fix broken internal links |

---

## 3. Google Analytics 4

### 3.1 Where to Find Your GA4 ID

Your GA4 Measurement ID is stored in the environment variable `NEXT_PUBLIC_GA_ID` and loaded by the component at `src/components/analytics/GoogleAnalytics.tsx`. The ID format is `G-XXXXXXXXXX`.

**To find or create it:**
1. Go to https://analytics.google.com
2. Click the gear icon (Admin) in the bottom-left
3. Under "Property," click "Data Streams"
4. Select your web stream for `protechroof.net`
5. Copy the Measurement ID (starts with `G-`)
6. Set it in your `.env.local` file as `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
7. If you also use Google Tag Manager, set `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`

Both are loaded via `src/components/analytics/AnalyticsProvider.tsx`, which dynamically imports the `GoogleAnalytics` component as a client-side component.

### 3.2 Conversion Goals Setup

The site fires custom events through `dataLayer.push()` (defined in `src/lib/analytics.ts`). Configure the following as conversion events in GA4:

| Event Name | Trigger | How to Mark as Conversion |
|------------|---------|--------------------------|
| `form_submit_estimate` | User submits the free estimate form | GA4 > Admin > Events > Mark as key event |
| `form_submit_contact` | User submits the contact form | GA4 > Admin > Events > Mark as key event |
| `click_phone` | User clicks a phone number link | GA4 > Admin > Events > Mark as key event |
| `click_cta` | User clicks a call-to-action button | GA4 > Admin > Events > Create as custom event if needed |
| `scroll_depth` | User scrolls to 25%, 50%, 75%, 100% | Already tracked; use for engagement analysis |
| `view_project` | User views a gallery project | Already tracked; use for engagement analysis |

**Steps to mark conversions:**
1. Go to GA4 > Admin > Events
2. Wait for events to appear (they show up after first being fired on the live site)
3. Toggle the "Mark as key event" switch for: `form_submit_estimate`, `form_submit_contact`, and `click_phone`
4. These will now appear in all conversion reports

**Event parameters to note:**

The `form_submit_estimate` and `form_submit_contact` events include `form_type` and additional form data. The `click_phone` event includes `location` and `page`. The `click_cta` event includes `button_text`, `page`, and `section`. Use these parameters to create custom dimensions in GA4 for deeper analysis.

### 3.3 Custom Dimensions (Recommended)

Register these custom event-scoped dimensions in GA4 > Admin > Custom definitions:

| Dimension Name | Event Parameter | Scope |
|----------------|-----------------|-------|
| Form Type | `form_type` | Event |
| Phone Click Location | `location` | Event |
| CTA Button Text | `button_text` | Event |
| CTA Section | `section` | Event |
| Project ID | `project_id` | Event |
| Project City | `city` | Event |
| Scroll Depth Percent | `depth_percent` | Event |

### 3.4 Key Reports to Monitor

**Weekly reports:**

| Report | Location in GA4 | What to Look For |
|--------|-----------------|------------------|
| Conversions summary | Reports > Engagement > Conversions | Total estimate submissions, contact form submissions, phone clicks per week |
| Landing pages | Reports > Engagement > Landing Page | Which city/service pages drive the most leads |
| Traffic acquisition | Reports > Acquisition > Traffic Acquisition | Organic vs. paid vs. direct vs. referral split |
| Geographic performance | Reports > User > Demographics > City | Which cities generate the most traffic and conversions |
| Device breakdown | Reports > Tech > Overview | Mobile vs. desktop conversion rates |

**Monthly reports:**

| Report | What to Look For |
|--------|------------------|
| Month-over-month conversion trend | Are estimate submissions growing? |
| Top 10 landing pages by conversion rate | Double down on what works; fix underperformers |
| Organic search traffic trend | Is SEO effort translating to traffic growth? |
| Bounce rate by page type | City pages vs. blog posts vs. service pages |
| CallRail integration | Cross-reference phone calls from CallRail with `click_phone` events |

### 3.5 Audiences to Create

Set up these audiences for remarketing and analysis:

| Audience | Definition | Use Case |
|----------|-----------|----------|
| Estimate Requesters | Users who triggered `form_submit_estimate` | Exclude from acquisition ads; target with follow-up content |
| High-Intent Visitors | Users who visited `/free-estimate` OR `/contact` but did not convert | Retarget with Google Ads display remarketing |
| City-Specific Visitors | Users whose landing page contains `/locations/florida/` | City-specific remarketing and reporting |
| Blog Readers | Users with 2+ `page_view` events on `/blog/*` pages | Nurture with content remarketing |
| Gallery Browsers | Users who triggered 3+ `view_project` events | Show social proof ads featuring completed projects |

---

## 4. Local SEO

### 4.1 Citation Building

Create consistent business listings on the following platforms. Prioritize Tier 1 first, then Tier 2, then Tier 3.

**Tier 1 -- Critical (complete within 30 days):**

| Platform | URL | Notes |
|----------|-----|-------|
| Google Business Profile | business.google.com | See Section 1; this is your most important listing |
| Yelp | biz.yelp.com | Create one listing per city with a physical presence; SABs can have one listing |
| Better Business Bureau (BBB) | bbb.org | Apply for accreditation; costs ~$500-$900/year but builds significant trust |
| Angi (formerly Angie's List) | angi.com | Claim your profile; respond to all reviews |
| HomeAdvisor | homeadvisor.com | Claim the free listing; consider the paid lead program cautiously |
| Facebook Business | business.facebook.com | One main page plus location pages if managing multiple offices |
| Apple Maps | mapsconnect.apple.com | Often overlooked; significant for iPhone users |
| Bing Places | bingplaces.com | Import directly from Google Business Profile |

**Tier 2 -- Important (complete within 60 days):**

| Platform | URL | Notes |
|----------|-----|-------|
| Nextdoor | business.nextdoor.com | High-trust neighborhood platform; claim business page |
| Thumbtack | thumbtack.com | Create a profile; good for local lead generation |
| Houzz | houzz.com | Gallery-focused; upload before/after project photos |
| Porch.com | porch.com | Roofing-specific lead platform |
| BuildZoom | buildzoom.com | Aggregates license data; claim and enhance your profile |
| Manta | manta.com | Basic business directory |
| Yellow Pages / YP.com | yp.com | Still relevant for local SEO signals |

**Tier 3 -- Supplementary (complete within 90 days):**

| Platform | Notes |
|----------|-------|
| Chamber of Commerce | Join local chapters in key cities; get a backlink from their member directory |
| Industry directories | NRCA member directory, state roofing association directories |
| Data aggregators | Submit to Neustar/Localeze, Foursquare, Data.com to propagate NAP data |

### 4.2 NAP Consistency

NAP = Name, Address, Phone. Every citation must use identical formatting:

```
ProTech Roofing
[Street Address if applicable]
[City], [State Abbreviation] [ZIP]
1-866-308-2640
https://protechroof.net
```

**Rules:**
- Business name is always "ProTech Roofing" -- never "Pro Tech," "Protech," or "ProTech Roofing LLC"
- Phone format: 1-866-308-2640 (with dashes, not parentheses or dots)
- Website: Always use `https://protechroof.net` (no www, no trailing slash)
- Run a NAP audit quarterly using Moz Local, BrightLocal, or Whitespark to identify inconsistencies

### 4.3 Review Generation Strategy

**Target:** Collect 10 new Google reviews per month across all locations (ramp to 25/month within 6 months).

**Systematic review collection process:**

1. **Post-project email sequence:**
   - The site already sends confirmation emails via Resend (see `src/lib/email.ts`). Add a follow-up email 3 days after project completion:
     - Subject: "How did we do on your roof, [First Name]?"
     - Include a direct link to the Google review page for the nearest GBP listing
     - Keep the ask simple: one sentence + one button

2. **On-site request:**
   - Project managers should verbally ask satisfied customers before leaving the job site
   - Hand them a printed card with a QR code linking to the Google review page

3. **Text message follow-up (if consent is given):**
   - Send an SMS 24 hours after project completion with the review link
   - Use a tool like Podium, Birdeye, or NiceJob to automate this

4. **Review link format:**
   - Find your Place ID at https://developers.google.com/maps/documentation/places/web-service/place-id
   - Direct review link: `https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID`

**What to avoid:**
- Never offer discounts or incentives in exchange for reviews (violates Google guidelines)
- Never review-gate (only sending happy customers to Google)
- Never create fake reviews or ask employees to post reviews

---

## 5. Content Marketing

### 5.1 Blog Cadence

**Current state:** The site has 6 blog posts in `src/content/blog/`:
1. How Much Does a Roof Replacement Cost
2. Metal Roof vs Shingle Roof
3. Roof Repair vs Replacement
4. Spring Roof Maintenance Checklist
5. 5 Signs Your Roof Needs Replacement
6. What to Do After Storm Damage

**Target cadence:** Publish 2 new blog posts per month, increasing to 4 per month after 6 months.

**Content creation workflow:**
1. Writer drafts the post as an MDX file in `src/content/blog/`
2. Include frontmatter: title, slug, date, author, category, excerpt, featuredImage, readingTime
3. Review for keyword optimization and internal linking
4. Deploy; request indexing in Google Search Console
5. Share on social media (see Section 8)

### 5.2 Keyword Targeting Strategy

Organize content around three intent levels:

**High-intent (bottom-of-funnel) -- target with city/service pages:**

| Keyword | Monthly Search Volume (est.) | Target Page |
|---------|------------------------------|-------------|
| roofing contractor near me | 40,000+ | City pages |
| roof replacement cost | 22,000 | /blog/how-much-does-roof-replacement-cost |
| roof repair near me | 18,000 | City pages + /services/roof-repair |
| emergency roof repair | 8,000 | /services/roof-repair |
| roofing insurance claim | 5,000 | /services/insurance-claims |

**Mid-intent (middle-of-funnel) -- target with blog posts:**

| Keyword | Monthly Search Volume (est.) | Blog Topic |
|---------|------------------------------|------------|
| metal roof vs shingles | 12,000 | Existing post |
| how long does a roof last | 8,000 | New post idea |
| signs you need a new roof | 6,500 | Existing post |
| roof repair vs replacement | 5,000 | Existing post |
| best roofing material for [climate] | 3,500 | New post idea |

**Low-intent (top-of-funnel) -- target with educational content:**

| Keyword | Monthly Search Volume (est.) | Blog Topic |
|---------|------------------------------|------------|
| how to maintain a roof | 4,000 | Existing post (spring maintenance) |
| roof ventilation explained | 2,500 | New post idea |
| what to expect during roof replacement | 2,000 | New post idea |
| how to prepare for a roof inspection | 1,500 | New post idea |
| types of roofing materials | 6,000 | New post idea |

### 5.3 Content Clusters

Organize blog content into topic clusters, each with a pillar page and supporting posts:

**Cluster 1: Roof Replacement**
- Pillar: /services/roof-replacement (existing)
- Support: How Much Does Roof Replacement Cost (existing)
- Support: Metal Roof vs Shingle Roof (existing)
- Support: 5 Signs Your Roof Needs Replacement (existing)
- NEW: "What to Expect During a Roof Replacement: Day-by-Day Timeline"
- NEW: "Types of Roofing Materials: A Homeowner's Guide"
- NEW: "How Long Does a New Roof Last? Lifespan by Material"

**Cluster 2: Roof Repair**
- Pillar: /services/roof-repair (existing)
- Support: Roof Repair vs Replacement (existing)
- NEW: "How to Find and Fix a Roof Leak: Step-by-Step Guide"
- NEW: "10 Common Causes of Roof Leaks and How to Prevent Them"
- NEW: "Emergency Roof Repair: What to Do While Waiting for a Contractor"

**Cluster 3: Storm Damage & Insurance**
- Pillar: /services/storm-damage + /services/insurance-claims (existing)
- Support: What to Do After Storm Damage (existing)
- NEW: "How to File a Roofing Insurance Claim: Complete Guide"
- NEW: "Hail Damage to Roof: What It Looks Like and What to Do"
- NEW: "Will My Insurance Rates Go Up After a Roof Claim?"
- NEW: "How to Handle a Denied Roofing Insurance Claim"

**Cluster 4: Seasonal Maintenance**
- Pillar: /services/roof-inspection (existing)
- Support: Spring Roof Maintenance Checklist (existing)
- NEW: "Fall Roof Maintenance Checklist: Prepare for Winter"
- NEW: "How to Prevent Ice Dams on Your Roof"
- NEW: "When Is the Best Time of Year to Replace Your Roof?"

**Cluster 5: Commercial Roofing**
- Pillar: /services/commercial-roofing (existing)
- NEW: "TPO vs EPDM Roofing: Which Is Right for Your Commercial Building?"
- NEW: "Commercial Roof Maintenance Programs: What They Include and Why They Matter"
- NEW: "Flat Roof Replacement Cost: What Business Owners Need to Know"

**Internal linking rules:**
- Every supporting blog post links back to its pillar service page
- Service pages link to their supporting blog posts in a "Learn More" section
- City pages link to relevant service pages and blog posts

### 5.4 Seasonal Content Calendar

| Month | Content Theme | Blog Post Ideas | GBP Post Theme |
|-------|--------------|-----------------|----------------|
| January | Winter roof care | "How to Prevent Ice Dams on Your Roof" | Winter emergency repair services |
| February | Pre-spring prep | "Spring Roof Maintenance Checklist" (update existing) | Schedule your pre-spring inspection |
| March | Storm season prep | "How to Prepare Your Roof for Severe Weather Season" | Free storm damage inspections |
| April | Storm damage response | "What to Do After Hail Damage: A Homeowner's Guide" | Recent storm response showcase |
| May | Insurance claims | "How to File a Roofing Insurance Claim" | Insurance claim success story |
| June | Summer roofing | "Best Roofing Materials for Hot Climates" | Beat-the-heat cool roof options |
| July | Energy efficiency | "How a New Roof Can Lower Your Energy Bills" | Energy-efficient roofing showcase |
| August | Back-to-school budgeting | "Roof Replacement Financing: Options for Every Budget" | Financing promotion |
| September | Fall prep | "Fall Roof Maintenance Checklist" | Schedule your fall inspection |
| October | Pre-winter | "Is Your Roof Ready for Winter? 7 Warning Signs" | Winter prep special |
| November | Year-end projects | "Tax Benefits of Roof Replacement for Homeowners" | Year-end project showcase |
| December | Year in review | "ProTech Roofing Year in Review: [Year] by the Numbers" | Holiday wishes + review collection push |

---

## 6. Google Ads

### 6.1 Quick-Start for Roofing Lead Generation

**Account structure recommendation:**

```
Account: ProTech Roofing
  |
  |-- Campaign: Search - Roof Replacement [City]
  |-- Campaign: Search - Roof Repair [City]
  |-- Campaign: Search - Storm Damage [City]
  |-- Campaign: Search - Brand Defense
  |-- Campaign: Local Services Ads (LSA)
  |-- Campaign: Display - Remarketing
  |-- Campaign: Performance Max - Local
```

### 6.2 Search Campaigns

**Campaign 1: Roof Replacement (highest value)**

| Setting | Value |
|---------|-------|
| Bidding | Maximize conversions (switch to Target CPA after 30 conversions) |
| Location targeting | 50-mile radius around each active city |
| Ad schedule | Mon-Sat, 6am-9pm (adjust based on data) |
| Daily budget | $50-$150 per city (start with top 4 pilot cities) |

**Ad group structure (per city):**

| Ad Group | Keywords | Match Type |
|----------|----------|------------|
| Roof Replacement - Exact | [roof replacement Tampa], [Tampa roof replacement], [replace roof Tampa] | Exact |
| Roof Replacement - Phrase | "roof replacement near me", "roof replacement cost", "new roof installation" | Phrase |
| Roofing Contractor - Exact | [roofing contractor Tampa], [Tampa roofer], [best roofer Tampa] | Exact |

**Negative keywords (apply at campaign level):**
- DIY, how to, jobs, hiring, salary, classes, training, school, free, cheap, used

**Ad copy template:**

```
Headline 1: Roof Replacement in [City] | 5.0 Stars
Headline 2: Lifetime Warranty - Free Estimate
Headline 3: Licensed & Insured | 20+ Yrs Experience
Description 1: Get a new roof installed in 1-2 days. Premium materials from GAF & Owens Corning. Financing available. Call 1-866-308-2640.
Description 2: 1,000+ roofs installed. Rated 5.0 on Google. Free inspection + detailed estimate. Schedule today at protechroof.net.
```

**Landing pages:** Direct each ad group to the corresponding city page (`/locations/[state]/[city]`) or service page (`/services/roof-replacement`). Never send paid traffic to the homepage.

**Campaign 2: Roof Repair**

Same structure as above, with keywords focused on:
- [roof repair Tampa], [roof leak repair Tampa], [emergency roof repair Tampa]
- "roof repair near me", "fix roof leak", "roof leak repair"

Daily budget: $30-$80 per city

**Campaign 3: Storm Damage**

Deploy this campaign seasonally, ramping up spend immediately after major weather events.

Keywords:
- [storm damage roof repair Tampa], [hail damage roof Tampa]
- "roof storm damage help", "roofing insurance claim"

Daily budget: $40-$120 per city (increase to $200+ during active storm periods)

**Campaign 4: Brand Defense**

Low-cost campaign bidding on brand terms to prevent competitors from capturing your traffic.

Keywords: [ProTech Roofing], [protechroof], [ProTech roof]
Daily budget: $10-$20

### 6.3 Google Local Services Ads (LSA)

**Why LSA matters for roofers:**
- LSA ads appear above standard search ads with a "Google Guaranteed" badge
- Pay per lead, not per click ($30-$80 per lead for roofing in most markets)
- Builds trust through Google's vetting process

**Setup steps:**
1. Go to https://ads.google.com/local-services-ads
2. Complete the business verification (license verification, insurance verification, background check)
3. Set your service areas to match your 45 cities
4. Set a weekly budget per service area (start at $500/week for the top 4 cities)
5. Enable services: Roof Replacement, Roof Repair, Storm Damage, Roof Inspection
6. Upload headshots and team photos for the profile
7. Connect your Google Business Profile reviews (your 5.0 rating is a major competitive advantage)

### 6.4 Display Remarketing Campaign

Target users who visited the site but did not convert.

| Setting | Value |
|---------|-------|
| Audience | "High-Intent Visitors" (from GA4 -- see Section 3.5) |
| Placements | Google Display Network, YouTube |
| Ad format | Responsive display ads with before/after project images |
| Frequency cap | 3 impressions per user per day |
| Daily budget | $20-$50 |
| Duration | 30-day remarketing window |

**Ad messaging for remarketing:**
- "Still thinking about your roof? Get your free estimate today."
- "Your neighbors chose ProTech -- 5.0 stars, 1,000+ roofs installed."
- "Storm damage? We handle your insurance claim from start to finish."

### 6.5 Budget Guidance

**Starting budget (4 pilot cities):**

| Campaign | Monthly Budget |
|----------|---------------|
| Search - Roof Replacement | $6,000-$18,000 ($50-$150/day x 4 cities) |
| Search - Roof Repair | $3,600-$9,600 ($30-$80/day x 4 cities) |
| Search - Storm Damage | $4,800-$14,400 ($40-$120/day x 4 cities, seasonal) |
| Brand Defense | $1,200-$2,400 ($10-$20/day) |
| Local Services Ads | $8,000-$12,000 ($500/week x 4 cities) |
| Display Remarketing | $600-$1,500 |
| **Total Starting** | **$24,200-$57,900/month** |

**Scaling strategy:**
- Start with 4 pilot cities (Tampa, Houston, Louisville, Columbus)
- After 60 days, evaluate cost per lead (CPL) by city and campaign
- Target CPL of $40-$80 for estimate requests, $20-$40 for phone calls
- Expand to additional cities one state at a time, starting with the highest-population metros
- Reallocate budget from underperforming cities to top performers monthly

---

## 7. Social Proof

### 7.1 Review Collection Strategy

**Monthly targets by platform:**

| Platform | Monthly New Reviews Target | Priority |
|----------|---------------------------|----------|
| Google Business Profile | 10 (ramp to 25) | Highest |
| Facebook | 3-5 | High |
| Yelp | 2-3 (organic only -- never ask directly for Yelp reviews) | Medium |
| Angi / HomeAdvisor | 2-3 | Medium |
| BBB | 1-2 | Medium |
| Houzz | 1-2 | Low |

**Automated review collection sequence:**

| Timing | Channel | Message |
|--------|---------|---------|
| Day 0 (project complete) | In person | Project manager verbally asks; hands QR card |
| Day 1 | SMS | "Hi [Name], thanks for choosing ProTech. We'd appreciate a quick Google review: [link]" |
| Day 3 | Email | Follow-up email with review link + thank you message |
| Day 14 | Email | Second follow-up only if no review posted: "Your feedback helps us serve [city] better" |

**Review response SLA:**
- 5-star reviews: Respond within 24 hours
- 4-star reviews: Respond within 12 hours + internal follow-up to understand what could improve
- 1-3 star reviews: Respond within 4 hours + immediate escalation to management

### 7.2 Before/After Gallery Promotion

The site has a gallery at `/gallery` with project pages at `/gallery/[slug]`. Leverage this content across channels:

**Photo documentation process for every project:**
1. Take 5-10 "before" photos from multiple angles before tear-off (include drone shot if possible)
2. Take progress photos during installation
3. Take 5-10 "after" photos from the same angles as the "before" shots
4. Record a 30-60 second walkthrough video of the completed project
5. Get a signed photo release from the homeowner

**Where to publish each project:**
- Website gallery: Add to `src/lib/projects.ts` with full details
- Google Business Profile: Upload to the corresponding city listing
- Social media: Create a carousel post with before/after images
- Google Ads: Use as creative for display remarketing
- Email: Include a "Recent Project Spotlight" section in any marketing emails

### 7.3 Review Platform Diversification

**Why it matters:** Google is the primary review platform, but diversifying builds credibility and captures different audiences.

**Platform-specific tactics:**

| Platform | Strategy |
|----------|----------|
| **Google** | Primary focus. Direct most customers here. Use the direct review link with Place ID. |
| **Facebook** | Share every 5-star Google review as a Facebook post with a screenshot. Ask Facebook followers to leave their own recommendation. |
| **Yelp** | Do NOT directly ask for Yelp reviews (Yelp penalizes solicited reviews). Instead, make sure your Yelp profile is complete with photos and service details. Yelp reviews will come organically from active Yelp users. |
| **BBB** | Request reviews from commercial clients and larger residential projects. BBB reviews carry weight with older demographics. |
| **Angi** | After completing jobs sourced from Angi, follow up within the Angi platform for reviews. |
| **Houzz** | Upload project photos to Houzz; satisfied customers who find you there will review. Focus on high-end projects. |
| **Nextdoor** | Encourage customers to recommend ProTech in their neighborhood feed. Nextdoor recommendations drive referrals. |

### 7.4 Testimonial Amplification

The site currently has testimonials in `src/lib/testimonials.ts`. Use these across marketing channels:

- **Homepage:** Already displayed. Rotate quarterly.
- **City pages:** Show testimonials from customers in that specific city or state.
- **Google Ads:** Pull quotes for ad copy: "ProTech handled our entire insurance claim and had a tarp on our roof within four hours." -- Sarah M., Orlando
- **Social media:** Create quote-card graphics with the customer's name, city, and rating.
- **Email signature:** Rotate a one-line testimonial in the email signatures of all team members.

---

## 8. Social Media

### 8.1 Platform Prioritization

| Platform | Priority | Primary Use | Audience |
|----------|----------|-------------|----------|
| **Facebook** | Highest | Community engagement, reviews, before/after content, ads | Homeowners 35-65 |
| **Instagram** | High | Visual portfolio, before/after reels, stories | Homeowners 25-45 |
| **YouTube** | High | Educational content, project walkthroughs, trust building | All ages researching |
| **Nextdoor** | Medium | Neighborhood recommendations, local engagement | Local homeowners |
| **LinkedIn** | Low | Commercial roofing outreach, hiring, industry authority | Property managers, B2B |
| **TikTok** | Low | Short-form video, trending roofing content | Younger homeowners 25-40 |

### 8.2 Posting Cadence

| Platform | Frequency | Best Times to Post |
|----------|-----------|-------------------|
| Facebook | 4-5 posts/week | Tue-Thu, 9am-12pm and 6pm-8pm |
| Instagram | 3-4 posts/week + daily stories | Tue-Fri, 11am-1pm and 7pm-9pm |
| YouTube | 2 videos/month | Publish Tue or Wed, 2pm-4pm |
| Nextdoor | 2-3 posts/month | Mon or Tue morning |
| LinkedIn | 1-2 posts/week | Tue-Thu, 8am-10am |

### 8.3 Content Ideas by Category

**Category 1: Project Showcases (40% of posts)**
- Before/after photo carousels with project details (materials, timeline, cost range)
- Drone footage of completed roofs
- Time-lapse videos of full roof replacements
- "Transformation Tuesday" series featuring dramatic before/after comparisons

**Category 2: Educational Content (25% of posts)**
- "Did You Know?" roofing facts and statistics
- Seasonal maintenance tips (mapped to the content calendar in Section 5.4)
- Quick explainer videos: "What is an architectural shingle?" "What does a roof inspection include?"
- Myth-busting: "5 Roofing Myths That Could Cost You Thousands"
- Insurance claim tips: "3 Things to Do Within 24 Hours of Storm Damage"

**Category 3: Social Proof (20% of posts)**
- Customer testimonial graphics with quote, name, city, and star rating
- Screenshot of a new 5-star Google review with a thank-you caption
- "Customer Spotlight" featuring a homeowner's story and their new roof
- Milestone posts: "1,000 roofs installed and counting"

**Category 4: Team & Culture (10% of posts)**
- Crew photos on job sites
- Employee spotlights: "Meet [Name], our project manager in [City]"
- Safety training and certification moments
- Community involvement (sponsorships, charity work)

**Category 5: Promotions & CTAs (5% of posts)**
- Free inspection offers (seasonal)
- Financing options highlight
- "Limited availability this month -- schedule your estimate now"
- Blog post promotion linking to new articles on the site

### 8.4 Hashtag Strategy

**Branded hashtags (use on every post):**
- #ProTechRoofing
- #ProtechRoof

**Local hashtags (rotate by city):**
- #TampaRoofing #HoustonRoofer #LouisvilleContractor #ColumbusRoofing
- #[City]HomeImprovement #[City]Contractor

**Industry hashtags:**
- #RoofReplacement #RoofRepair #StormDamage #NewRoof #RoofingContractor
- #BeforeAndAfter #HomeImprovement #CurbAppeal

**Seasonal hashtags:**
- #StormSeason #HurricanePrep #WinterRoofCare #SpringMaintenance

### 8.5 YouTube Channel Strategy

YouTube is a high-value long-term investment for a roofing company. Video content ranks in Google search results and builds trust.

**Video types to produce:**

| Video Type | Length | Frequency | Example Title |
|------------|--------|-----------|---------------|
| Project walkthroughs | 3-5 min | 2/month | "Full Roof Replacement in Tampa: Start to Finish" |
| Educational explainers | 5-8 min | 2/month | "Metal Roof vs Shingles: Which Is Right for Your Home?" |
| Storm response | 2-3 min | As needed | "Dallas Hail Storm 2025: How to File Your Roof Insurance Claim" |
| Customer testimonials | 1-2 min | 1/month | "Why Sarah Chose ProTech Roofing After Hurricane Damage" |
| Quick tips (Shorts) | 30-60 sec | 2/week | "How to Spot Hail Damage on Your Roof in 30 Seconds" |

**YouTube SEO:**
- Title: Include the target keyword and city name
- Description: 200+ words with links to relevant pages on protechroof.net
- Tags: Target keyword variations and city names
- Thumbnails: Custom-designed with text overlay and before/after imagery
- End screens: Point to the free estimate page or the next related video
- Add chapters (timestamps) for longer videos

### 8.6 Social Media Advertising

**Facebook/Instagram Ads (recommended starting campaigns):**

| Campaign | Objective | Audience | Budget |
|----------|-----------|----------|--------|
| Brand Awareness | Reach | Homeowners 30-65, 50mi radius of each city, interests: home improvement | $15-$30/day per city |
| Lead Generation | Leads | Lookalike audience based on past converters from GA4 | $25-$50/day per city |
| Remarketing | Conversions | Website visitors (last 30 days) who did not submit a form | $10-$20/day |
| Review Promotion | Engagement | Local audience 25-65 | $5-$10/day |

**Creative best practices for roofing ads:**
- Lead with a compelling before/after image
- Include the 5.0 Google rating and "100+ reviews" in the ad copy
- Use the free estimate offer as the CTA
- Video ads outperform static images; use 15-30 second project clips
- Test multiple headlines: price-focused ("Starting at $8,000") vs. trust-focused ("5.0 Stars, 1,000+ Roofs") vs. urgency-focused ("Storm Damage? Call Now")

---

## Appendix A: Tool Recommendations

| Category | Recommended Tools |
|----------|-------------------|
| Review management | Podium, Birdeye, or NiceJob |
| Citation management | BrightLocal, Whitespark, or Moz Local |
| Social media scheduling | Buffer, Hootsuite, or Later |
| Keyword research | Ahrefs, SEMrush, or Ubersuggest |
| Rank tracking | BrightLocal (local), Ahrefs or SEMrush (organic) |
| Google Ads management | Google Ads Editor (free), Optmyzr (automation) |
| Video editing | Adobe Premiere Pro, DaVinci Resolve (free), or CapCut (for Shorts) |
| Graphic design | Canva (for social graphics and review cards) |
| Email marketing | Resend (already integrated), or Mailchimp for newsletter campaigns |
| CRM | Follow Up Boss, JobNimbus, or AccuLynx (roofing-specific) |

## Appendix B: KPI Dashboard

Track these metrics monthly. Review in a team meeting on the first Monday of each month.

| KPI | Target | Data Source |
|-----|--------|-------------|
| Estimate form submissions | 100+/month (across all cities) | GA4 `form_submit_estimate` event |
| Contact form submissions | 50+/month | GA4 `form_submit_contact` event |
| Phone calls from website | 200+/month | CallRail |
| Organic search traffic | 10% month-over-month growth | Google Search Console + GA4 |
| Google Ads cost per lead | Under $60 | Google Ads |
| LSA cost per lead | Under $50 | Google Local Services Ads |
| New Google reviews | 10+/month (ramp to 25) | Google Business Profile |
| Average Google rating | Maintain 5.0 | Google Business Profile |
| Social media followers (FB + IG) | 5% month-over-month growth | Platform analytics |
| Blog posts published | 2+/month | Content calendar |
| Pages indexed in Google | 100% of sitemap URLs | Google Search Console |
| Core Web Vitals pass rate | 100% of URLs | Google Search Console |

---

*Last updated: February 2026*
*Maintained by: ProTech Roofing Marketing Team*
