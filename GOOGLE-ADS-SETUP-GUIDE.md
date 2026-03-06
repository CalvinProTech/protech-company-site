# Google Ads Setup Guide — Step by Step

Follow these steps in order. Each step builds on the previous one.

---

## Phase 1: Clean Up the Existing Campaign

### Step 1: Pause All Existing Keywords

1. Log into [Google Ads](https://ads.google.com)
2. Click **Campaigns** in the left sidebar
3. Click into the **"Leads-Search"** campaign
4. Click **Keywords** → **Search keywords**
5. Check the top checkbox to select all 43 keywords
6. Click **Edit** → **Pause**
7. Confirm — all 43 keywords should now show "Paused"

> Do NOT delete them yet — just pause. You can delete later once the new campaigns are running.

---

## Phase 2: Set Up Conversion Tracking

You need this before creating campaigns so Google Ads knows what a "conversion" is.

### Step 2: Create Conversion Actions

1. In Google Ads, click **Goals** in the left sidebar
2. Click **Conversions** → **Summary**
3. Click the blue **+ New conversion action** button
4. Select **Website**
5. Enter your domain: `protechroof.net` → click **Scan**
6. Click **+ Add a conversion action manually**
7. Create these 3 conversion actions one at a time:

**Action 1: Form Submission**
- Category: `Submit lead form`
- Conversion name: `Form Submission`
- Value: `Don't use a value`
- Count: `One` (one conversion per click)
- Click-through window: `30 days`
- View-through window: `1 day`
- Attribution: `Data-driven`
- Click **Done**

**Action 2: Phone Click**
- Category: `Phone call leads`
- Conversion name: `Phone Click`
- Value: `Don't use a value`
- Count: `One`
- Same windows as above
- Click **Done**

**Action 3: Callback Request**
- Category: `Submit lead form`
- Conversion name: `Callback Request`
- Value: `Don't use a value`
- Count: `One`
- Same windows as above
- Click **Done**

8. Click **Save and continue**

### Step 3: Get Your Conversion ID and Labels

1. After saving, you'll see an **Install tag** screen
2. Select **Use Google Tag Manager** (easiest way to see your IDs)
3. You'll see:
   - **Conversion ID:** `AW-XXXXXXXXXX` (same for all 3 actions)
   - **Conversion Label:** a unique string per action (like `AbCdEfGhIjKl`)
4. Write down each label next to its action name:
   - Form Submission label: `__________`
   - Phone Click label: `__________`
   - Callback Request label: `__________`

> If you missed this screen, go to **Goals → Conversions → Summary**, click any action, then click **Tag setup** to see the ID and label.

### Step 4: Set Env Vars in Vercel

1. Go to [Vercel Dashboard](https://vercel.com) → your project
2. Click **Settings** → **Environment Variables**
3. Add or update these variables (set for Production, Preview, and Development):

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` | `AW-XXXXXXXXXX` (your Conversion ID) |
| `NEXT_PUBLIC_GOOGLE_ADS_ESTIMATE_LABEL` | The Form Submission label |
| `NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL` | The Form Submission label (same — both are form submits) |
| `NEXT_PUBLIC_GOOGLE_ADS_CALLBACK_LABEL` | The Callback Request label |
| `NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL` | The Phone Click label |

4. Click **Save** for each
5. Go to **Deployments** → click the `...` on your latest deployment → **Redeploy**
6. Wait for the deploy to finish

### Step 5: Verify Conversions Are Firing

1. Install the [Google Tag Assistant](https://tagassistant.google.com/) Chrome extension
2. Go to `https://protechroof.net/free-estimate`
3. Submit a test form
4. In Tag Assistant, you should see a `conversion` event fire with your Conversion ID
5. Back in Google Ads, go to **Goals → Conversions → Summary** — within a few hours, the status should change from "Unverified" to "Recording"

---

## Phase 3: Create New Campaigns

### Step 6: Create Campaign 1 — Roof Replacement

1. In Google Ads, click **Campaigns** → **+ New campaign**
2. **Campaign objective:** `Leads`
3. **Conversion goals:** Make sure your 3 conversions from Step 2 are checked
4. **Campaign type:** `Search`
5. **Campaign name:** `Roof Replacement`
6. Click **Continue**

**Budget & Bidding:**
7. **Budget:** Set daily budget based on your monthly budget × 50%
   - $500/mo → $8/day
   - $1,000/mo → $16/day
   - $1,500/mo → $25/day
8. **Bidding:** Select `Maximize clicks`
9. Check **Set a maximum cost per click bid limit** → set to `$10`
10. Click **Next**

**Campaign Settings:**
11. **Networks:** UNCHECK both "Search partners" and "Display Network"
12. **Locations:** Skip for now (you'll set per ad group)
13. **Languages:** English
14. Click **Next**

### Step 7: Create Ad Groups for Campaign 1

Create one ad group per city. Here's how to do the first one (Tampa):

**Ad Group: Tampa**

1. **Ad group name:** `Tampa - Roof Replacement`
2. **Keywords** (paste these exactly, with quotes):
```
"roof replacement tampa"
"new roof tampa"
"new roof tampa fl"
"reroof tampa"
"roof replacement tampa fl"
"roofing contractor tampa"
```

3. Click **Next** to create the ad

**Responsive Search Ad for Tampa:**

| Field | Value |
|---|---|
| Final URL | `https://protechroof.net/locations/tampa-fl/roof-replacement` |
| Headline 1 | `Roof Replacement in Tampa, FL` |
| Headline 2 | `GAF Master Elite Contractor` |
| Headline 3 | `Free Estimate — Call Today` |
| Headline 4 | `Lifetime Workmanship Warranty` |
| Headline 5 | `Licensed & Insured in Florida` |
| Description 1 | `Tampa's trusted roofing experts. GAF & Owens Corning certified. Lifetime warranty on every install. Get your free inspection today.` |
| Description 2 | `Over 1,000 roofs completed. Financing from $0 down, up to 144 months. Call now for a free estimate.` |

4. Click **Next** → Review → **Publish campaign**

**Now repeat for each city.** Go to the campaign, click **Ad groups** → **+** to add a new ad group:

| Ad Group Name | Keywords | Final URL |
|---|---|---|
| Houston - Roof Replacement | `"roof replacement houston"`, `"new roof houston"`, `"new roof houston tx"`, `"reroof houston"`, `"roofing contractor houston"` | `https://protechroof.net/locations/houston-tx/roof-replacement` |
| Atlanta - Roof Replacement | `"roof replacement atlanta"`, `"new roof atlanta"`, `"new roof atlanta ga"`, `"reroof atlanta"`, `"roofing contractor atlanta"` | `https://protechroof.net/locations/atlanta-ga/roof-replacement` |
| Charlotte - Roof Replacement | `"roof replacement charlotte"`, `"new roof charlotte"`, `"new roof charlotte nc"`, `"reroof charlotte"`, `"roofing contractor charlotte"` | `https://protechroof.net/locations/charlotte-nc/roof-replacement` |
| Jacksonville - Roof Replacement | `"roof replacement jacksonville"`, `"new roof jacksonville"`, `"new roof jacksonville fl"`, `"roofing contractor jacksonville"` | `https://protechroof.net/locations/jacksonville-fl/roof-replacement` |
| Nashville - Roof Replacement | `"roof replacement nashville"`, `"new roof nashville"`, `"new roof nashville tn"`, `"reroof nashville"`, `"roofing contractor nashville"` | `https://protechroof.net/locations/nashville-tn/roof-replacement` |
| Louisville - Roof Replacement | `"roof replacement louisville"`, `"new roof louisville"`, `"new roof louisville ky"`, `"roofing contractor louisville"` | `https://protechroof.net/locations/louisville-ky/roof-replacement` |
| Columbus - Roof Replacement | `"roof replacement columbus"`, `"new roof columbus"`, `"new roof columbus oh"`, `"roofing contractor columbus"` | `https://protechroof.net/locations/columbus-oh/roof-replacement` |

> For each ad group's responsive search ad, swap out the city name and state in the headlines and Final URL. Keep the rest the same.

### Step 8: Set Location Targeting Per Ad Group

For EACH ad group you just created:

1. Click into the ad group
2. Click **Locations** in the left panel (under the ad group)
3. Click the pencil icon to edit
4. Search for the city name (e.g. "Tampa, Florida")
5. Select the city → click **Target**
6. Click **Advanced search** → **Radius**
7. Enter the city name → set radius to **30 miles**
8. Click **Save**

**Important:** At the campaign level, go to **Settings** → **Locations** → **Location options**:
- Select: **Presence: People in or regularly in your targeted locations**
- Do NOT use "Presence or interest" — that wastes budget on people just searching about the area

### Step 9: Create Campaign 2 — Roof Repair

Repeat the same process as Steps 6-8 but with:

- **Campaign name:** `Roof Repair`
- **Daily budget:** Monthly budget × 30% ÷ 30
  - $500/mo → $5/day
  - $1,000/mo → $10/day
  - $1,500/mo → $15/day

| Ad Group Name | Keywords | Final URL |
|---|---|---|
| Tampa - Roof Repair | `"roof repair tampa"`, `"roof leak repair tampa"`, `"emergency roof repair tampa"`, `"fix roof leak tampa"` | `https://protechroof.net/locations/tampa-fl/roof-repair` |
| Houston - Roof Repair | `"roof repair houston"`, `"roof leak repair houston"`, `"emergency roof repair houston"`, `"fix roof leak houston"` | `https://protechroof.net/locations/houston-tx/roof-repair` |
| Atlanta - Roof Repair | `"roof repair atlanta"`, `"roof leak repair atlanta"`, `"emergency roof repair atlanta"`, `"fix roof leak atlanta"` | `https://protechroof.net/locations/atlanta-ga/roof-repair` |
| Charlotte - Roof Repair | `"roof repair charlotte"`, `"roof leak repair charlotte"`, `"emergency roof repair charlotte"` | `https://protechroof.net/locations/charlotte-nc/roof-repair` |
| Jacksonville - Roof Repair | `"roof repair jacksonville"`, `"roof leak repair jacksonville"`, `"emergency roof repair jacksonville"` | `https://protechroof.net/locations/jacksonville-fl/roof-repair` |
| Nashville - Roof Repair | `"roof repair nashville"`, `"roof leak repair nashville"`, `"emergency roof repair nashville"` | `https://protechroof.net/locations/nashville-tn/roof-repair` |
| Louisville - Roof Repair | `"roof repair louisville"`, `"roof leak repair louisville"`, `"emergency roof repair louisville"` | `https://protechroof.net/locations/louisville-ky/roof-repair` |
| Columbus - Roof Repair | `"roof repair columbus"`, `"roof leak repair columbus"`, `"emergency roof repair columbus"` | `https://protechroof.net/locations/columbus-oh/roof-repair` |

**Ad copy template for Roof Repair:**

| Field | Value |
|---|---|
| Headline 1 | `Roof Repair in {City}, {ST}` |
| Headline 2 | `Same-Day Service Available` |
| Headline 3 | `Free Inspection — Call Now` |
| Headline 4 | `Stop Leaks Before They Spread` |
| Headline 5 | `Licensed & Insured` |
| Description 1 | `Fast, reliable roof repair in {City}. We fix leaks, storm damage & missing shingles. Same-day emergency service. Call for a free assessment.` |
| Description 2 | `Don't let a small leak become a big problem. Our certified techs diagnose and fix the issue in one visit. Workmanship warranty included.` |

### Step 10: Create Campaign 3 — Gutters

Same process, with:

- **Campaign name:** `Gutters & Siding`
- **Daily budget:** Monthly budget × 20% ÷ 30
  - $500/mo → $3/day
  - $1,000/mo → $7/day
  - $1,500/mo → $10/day

| Ad Group Name | Keywords | Final URL |
|---|---|---|
| Tampa - Gutters | `"gutter installation tampa"`, `"seamless gutters tampa"`, `"gutter replacement tampa"`, `"gutter guards tampa"` | `https://protechroof.net/locations/tampa-fl/gutters-siding` |
| Houston - Gutters | `"gutter installation houston"`, `"seamless gutters houston"`, `"gutter replacement houston"`, `"gutter guards houston"` | `https://protechroof.net/locations/houston-tx/gutters-siding` |
| Atlanta - Gutters | `"gutter installation atlanta"`, `"seamless gutters atlanta"`, `"gutter replacement atlanta"`, `"gutter guards atlanta"` | `https://protechroof.net/locations/atlanta-ga/gutters-siding` |
| Charlotte - Gutters | `"gutter installation charlotte"`, `"seamless gutters charlotte"`, `"gutter replacement charlotte"` | `https://protechroof.net/locations/charlotte-nc/gutters-siding` |
| Jacksonville - Gutters | `"gutter installation jacksonville"`, `"seamless gutters jacksonville"`, `"gutter replacement jacksonville"` | `https://protechroof.net/locations/jacksonville-fl/gutters-siding` |
| Nashville - Gutters | `"gutter installation nashville"`, `"seamless gutters nashville"`, `"gutter replacement nashville"` | `https://protechroof.net/locations/nashville-tn/gutters-siding` |
| Louisville - Gutters | `"gutter installation louisville"`, `"seamless gutters louisville"`, `"gutter replacement louisville"` | `https://protechroof.net/locations/louisville-ky/gutters-siding` |
| Columbus - Gutters | `"gutter installation columbus"`, `"seamless gutters columbus"`, `"gutter replacement columbus"` | `https://protechroof.net/locations/columbus-oh/gutters-siding` |

**Ad copy template for Gutters:**

| Field | Value |
|---|---|
| Headline 1 | `Gutter Installation in {City}` |
| Headline 2 | `Seamless Aluminum Gutters` |
| Headline 3 | `Free Estimate — Call Today` |
| Headline 4 | `Gutter Guards Available` |
| Headline 5 | `Licensed & Insured` |
| Description 1 | `Professional gutter installation in {City}. Seamless aluminum gutters, gutter guards & downspout systems. Protect your home from water damage.` |
| Description 2 | `Custom-fit seamless gutters that won't leak, sag, or clog. Lifetime warranty. Free on-site estimate. Call now.` |

---

## Phase 4: Add Negative Keywords

### Step 11: Add Negative Keywords

Do this for ALL 3 campaigns:

1. Click into the campaign
2. Click **Keywords** → **Negative keywords** in the left sidebar
3. Click the **+** button
4. Select **Add negative keywords**
5. Paste these (one per line):

```
free
DIY
how to
jobs
salary
hiring
tutorial
class
cheap
cost calculator
wiki
youtube
home depot
lowes
near me hiring
roofing school
roofing license
how to install
```

6. Apply to: **Campaign** (not ad group)
7. Click **Save**

---

## Phase 5: Add Ad Extensions

### Step 12: Add Sitelink Extensions

1. Go to **Ads & assets** → **Assets** in the left sidebar
2. Click **+** → **Sitelink**
3. Apply at: **Account level** (so they show on all campaigns)
4. Add these 4 sitelinks:

| Sitelink Text | Final URL | Description Line 1 | Description Line 2 |
|---|---|---|---|
| Free Estimate | `https://protechroof.net/free-estimate` | Get a no-obligation quote | We respond within 24 hours |
| Our Certifications | `https://protechroof.net/certifications` | GAF Master Elite contractor | Only 2% of roofers qualify |
| Financing Available | `https://protechroof.net/financing` | $0 down, up to 144 months | Flexible payment options |
| Customer Reviews | `https://protechroof.net/reviews` | See what homeowners say | 5-star rated service |

5. Click **Save**

### Step 13: Add Callout Extensions

1. Click **+** → **Callout**
2. Apply at: **Account level**
3. Add these callouts (one per field):
   - `Lifetime Warranty`
   - `GAF Master Elite`
   - `Licensed in 14 States`
   - `Free Inspections`
   - `$0 Down Financing`
   - `24-Hour Emergency Service`
4. Click **Save**

### Step 14: Add Call Extension

1. Click **+** → **Call**
2. Phone number: `1-866-308-2640`
3. Check **Use this phone number as my call extension**
4. Click **Save**

### Step 15: Add Structured Snippet Extension

1. Click **+** → **Structured snippet**
2. Header: **Services**
3. Values: `Roof Replacement`, `Roof Repair`, `Storm Damage`, `Insurance Claims`, `Gutters & Siding`, `Roof Inspection`
4. Click **Save**

---

## Phase 6: Launch & Monitor

### Step 16: Final Checklist Before Going Live

- [ ] All 3 campaigns created with correct ad groups
- [ ] Each ad group has location targeting (city + 30mi)
- [ ] Location options set to "Presence" not "Presence or interest"
- [ ] Negative keywords added to all 3 campaigns
- [ ] Sitelinks, callouts, call, and structured snippets added
- [ ] Conversion env vars set in Vercel and site redeployed
- [ ] Conversion status shows "Recording" in Google Ads (may take a few hours)
- [ ] Old "Leads-Search" keywords are paused

### Step 17: Enable the Campaigns

1. Go to **Campaigns**
2. Each campaign should show as "Eligible" or "Enabled"
3. If any show "Paused", check the checkbox → **Edit** → **Enable**

### Step 18: Week 1 Monitoring (Check Daily)

1. Go to **Campaigns** → look at the overview
2. Check these metrics daily:
   - **Impressions** — should be > 0 within 24 hours
   - **Clicks** — should start seeing clicks within 2-3 days
   - **CTR** — aim for 3-5%+ (below 2% means ad copy needs work)
   - **Avg. CPC** — should be $3-$12 depending on city/service
   - **Conversions** — may take a few days to see the first one

3. If a campaign shows 0 impressions after 48 hours:
   - Check that keywords aren't "Below first page bid"
   - Check that location targeting is correct
   - Try raising the max CPC bid to $12-15

### Step 19: Week 2 Optimization

1. Go to **Keywords** → **Search terms** to see what people actually searched
2. Add any irrelevant search terms as negative keywords
3. Pause any keywords with 100+ impressions but 0 clicks (low relevance)
4. If a city is performing much better than others, consider shifting budget toward it

### Step 20: After 15+ Conversions — Switch Bidding

Once any campaign has 15+ conversions total:

1. Click into the campaign → **Settings**
2. **Bidding** → Change to **Target CPA**
3. Set target CPA to your average cost per conversion × 1.2 (give it room)
   - Example: if your avg is $25/conversion, set target CPA to $30
4. Let it run for 2 weeks before adjusting

---

## Quick Reference

### Campaign Budget Split

| Campaign | % of Budget | $500/mo Daily | $1,000/mo Daily | $1,500/mo Daily |
|---|---|---|---|---|
| Roof Replacement | 50% | $8/day | $16/day | $25/day |
| Roof Repair | 30% | $5/day | $10/day | $15/day |
| Gutters & Siding | 20% | $3/day | $7/day | $10/day |

### All Landing Page URLs

| City | Roof Replacement | Roof Repair | Gutters |
|---|---|---|---|
| Tampa | `/locations/tampa-fl/roof-replacement` | `/locations/tampa-fl/roof-repair` | `/locations/tampa-fl/gutters-siding` |
| Houston | `/locations/houston-tx/roof-replacement` | `/locations/houston-tx/roof-repair` | `/locations/houston-tx/gutters-siding` |
| Atlanta | `/locations/atlanta-ga/roof-replacement` | `/locations/atlanta-ga/roof-repair` | `/locations/atlanta-ga/gutters-siding` |
| Charlotte | `/locations/charlotte-nc/roof-replacement` | `/locations/charlotte-nc/roof-repair` | `/locations/charlotte-nc/gutters-siding` |
| Jacksonville | `/locations/jacksonville-fl/roof-replacement` | `/locations/jacksonville-fl/roof-repair` | `/locations/jacksonville-fl/gutters-siding` |
| Nashville | `/locations/nashville-tn/roof-replacement` | `/locations/nashville-tn/roof-repair` | `/locations/nashville-tn/gutters-siding` |
| Louisville | `/locations/louisville-ky/roof-replacement` | `/locations/louisville-ky/roof-repair` | `/locations/louisville-ky/gutters-siding` |
| Columbus | `/locations/columbus-oh/roof-replacement` | `/locations/columbus-oh/roof-repair` | `/locations/columbus-oh/gutters-siding` |

### Vercel Env Vars Needed

```
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ESTIMATE_LABEL=your_label_here
NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL=your_label_here
NEXT_PUBLIC_GOOGLE_ADS_CALLBACK_LABEL=your_label_here
NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL=your_label_here
```
