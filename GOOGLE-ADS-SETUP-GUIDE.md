# Google Ads Setup Guide — Bulk Upload via Google Ads Editor

Instead of creating 24 ad groups one-by-one in the web UI, this guide uses **Google Ads Editor** (free desktop app) to paste all campaigns, ad groups, keywords, and ads at once via **"Make multiple changes."**

**What you're setting up:**

| Campaign | Ad Groups | Budget Share | $1,000/mo Daily |
|---|---|---|---|
| Roof Replacement | 8 cities | 50% | $16/day |
| Roof Repair | 8 cities | 30% | $10/day |
| Gutters & Siding | 8 cities | 20% | $7/day |

**Cities:** Tampa FL · Houston TX · Atlanta GA · Charlotte NC · Jacksonville FL · Nashville TN · Louisville KY · Columbus OH

---

## Phase 1: Pause Old Keywords

1. Log into [Google Ads](https://ads.google.com)
2. **Campaigns** → click **"Leads-Search"** → **Keywords** → **Search keywords**
3. Select all → **Edit** → **Pause**

> Don't delete yet — just pause. Remove later once new campaigns are running.

---

## Phase 2: Conversion Tracking

### Create 3 Conversion Actions

1. Google Ads → **Goals** → **Conversions** → **Summary** → **+ New conversion action**
2. Select **Website** → enter `protechroof.net` → **Scan**
3. Click **+ Add a conversion action manually** and create each:

| Name | Category | Count | Value | Attribution |
|---|---|---|---|---|
| Form Submission | Submit lead form | One | Don't use | Data-driven |
| Phone Click | Phone call leads | One | Don't use | Data-driven |
| Callback Request | Submit lead form | One | Don't use | Data-driven |

Use 30-day click-through / 1-day view-through windows for all three. Click **Save and continue**.

### Get Conversion ID & Labels

On the **Install tag** screen, select **Use Google Tag Manager** to see:
- **Conversion ID:** `AW-XXXXXXXXXX` (same for all 3)
- **Conversion Label:** unique per action

> Missed this screen? **Goals → Conversions → Summary** → click any action → **Tag setup**

### Set Vercel Environment Variables

[Vercel Dashboard](https://vercel.com) → project → **Settings** → **Environment Variables** (Production + Preview + Development):

```
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ESTIMATE_LABEL=your_form_submission_label
NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL=your_form_submission_label
NEXT_PUBLIC_GOOGLE_ADS_CALLBACK_LABEL=your_callback_request_label
NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL=your_phone_click_label
```

**Save** each → **Deployments** → redeploy latest.

### Verify Conversions Fire

1. Install [Google Tag Assistant](https://tagassistant.google.com/)
2. Go to `https://protechroof.net/free-estimate` → submit a test form
3. Tag Assistant should show a `conversion` event with your Conversion ID
4. In Google Ads, status changes to "Recording" within a few hours

---

## Phase 3: Bulk Setup via Google Ads Editor

### Step 1: Install & Download Account

1. Download [Google Ads Editor](https://ads.google.com/home/tools/ads-editor/)
2. Install → open → sign in with your Google Ads account
3. Click **Download** to pull your account data

### Step 2: Create 3 Campaigns

In Google Ads Editor, click **Add campaign** (under Campaigns in the left tree) three times. Configure each:

**Campaign 1: Roof Replacement**
- Campaign name: `Roof Replacement`
- Type: Search
- Budget: `$16.00/day` (50% of monthly budget ÷ 30)
- Bid strategy: Maximize clicks
- Max CPC bid limit: `$10.00`
- Networks: Uncheck both "Search partners" and "Display Network"
- Languages: English

**Campaign 2: Roof Repair**
- Campaign name: `Roof Repair`
- Budget: `$10.00/day` (30% of monthly ÷ 30)
- All other settings same as above

**Campaign 3: Gutters & Siding**
- Campaign name: `Gutters & Siding`
- Budget: `$7.00/day` (20% of monthly ÷ 30)
- All other settings same as above

> Budgets shown are for a $1,000/mo total spend. Scale proportionally for your budget.

### Step 3: Paste Ad Groups (24 rows)

Go to **Account** → **Make multiple changes** → paste the block below.

> **Tip:** Open this file in a text editor (or view the raw file on GitHub) and copy from there to preserve tab characters between columns.

```
Campaign	Ad group
Roof Replacement	Tampa - Roof Replacement
Roof Replacement	Houston - Roof Replacement
Roof Replacement	Atlanta - Roof Replacement
Roof Replacement	Charlotte - Roof Replacement
Roof Replacement	Jacksonville - Roof Replacement
Roof Replacement	Nashville - Roof Replacement
Roof Replacement	Louisville - Roof Replacement
Roof Replacement	Columbus - Roof Replacement
Roof Repair	Tampa - Roof Repair
Roof Repair	Houston - Roof Repair
Roof Repair	Atlanta - Roof Repair
Roof Repair	Charlotte - Roof Repair
Roof Repair	Jacksonville - Roof Repair
Roof Repair	Nashville - Roof Repair
Roof Repair	Louisville - Roof Repair
Roof Repair	Columbus - Roof Repair
Gutters & Siding	Tampa - Gutters
Gutters & Siding	Houston - Gutters
Gutters & Siding	Atlanta - Gutters
Gutters & Siding	Charlotte - Gutters
Gutters & Siding	Jacksonville - Gutters
Gutters & Siding	Nashville - Gutters
Gutters & Siding	Louisville - Gutters
Gutters & Siding	Columbus - Gutters
```

Click **Process** → **Finish and review changes**.

### Step 4: Paste Keywords (112 rows)

**Make multiple changes** → paste the entire block. All keywords are phrase match (quoted).

```
Campaign	Ad group	Keyword
Roof Replacement	Tampa - Roof Replacement	"roof replacement tampa"
Roof Replacement	Tampa - Roof Replacement	"new roof tampa"
Roof Replacement	Tampa - Roof Replacement	"new roof tampa fl"
Roof Replacement	Tampa - Roof Replacement	"reroof tampa"
Roof Replacement	Tampa - Roof Replacement	"roof replacement tampa fl"
Roof Replacement	Tampa - Roof Replacement	"roofing contractor tampa"
Roof Replacement	Houston - Roof Replacement	"roof replacement houston"
Roof Replacement	Houston - Roof Replacement	"new roof houston"
Roof Replacement	Houston - Roof Replacement	"new roof houston tx"
Roof Replacement	Houston - Roof Replacement	"reroof houston"
Roof Replacement	Houston - Roof Replacement	"roof replacement houston tx"
Roof Replacement	Houston - Roof Replacement	"roofing contractor houston"
Roof Replacement	Atlanta - Roof Replacement	"roof replacement atlanta"
Roof Replacement	Atlanta - Roof Replacement	"new roof atlanta"
Roof Replacement	Atlanta - Roof Replacement	"new roof atlanta ga"
Roof Replacement	Atlanta - Roof Replacement	"reroof atlanta"
Roof Replacement	Atlanta - Roof Replacement	"roof replacement atlanta ga"
Roof Replacement	Atlanta - Roof Replacement	"roofing contractor atlanta"
Roof Replacement	Charlotte - Roof Replacement	"roof replacement charlotte"
Roof Replacement	Charlotte - Roof Replacement	"new roof charlotte"
Roof Replacement	Charlotte - Roof Replacement	"new roof charlotte nc"
Roof Replacement	Charlotte - Roof Replacement	"reroof charlotte"
Roof Replacement	Charlotte - Roof Replacement	"roof replacement charlotte nc"
Roof Replacement	Charlotte - Roof Replacement	"roofing contractor charlotte"
Roof Replacement	Jacksonville - Roof Replacement	"roof replacement jacksonville"
Roof Replacement	Jacksonville - Roof Replacement	"new roof jacksonville"
Roof Replacement	Jacksonville - Roof Replacement	"new roof jacksonville fl"
Roof Replacement	Jacksonville - Roof Replacement	"reroof jacksonville"
Roof Replacement	Jacksonville - Roof Replacement	"roof replacement jacksonville fl"
Roof Replacement	Jacksonville - Roof Replacement	"roofing contractor jacksonville"
Roof Replacement	Nashville - Roof Replacement	"roof replacement nashville"
Roof Replacement	Nashville - Roof Replacement	"new roof nashville"
Roof Replacement	Nashville - Roof Replacement	"new roof nashville tn"
Roof Replacement	Nashville - Roof Replacement	"reroof nashville"
Roof Replacement	Nashville - Roof Replacement	"roof replacement nashville tn"
Roof Replacement	Nashville - Roof Replacement	"roofing contractor nashville"
Roof Replacement	Louisville - Roof Replacement	"roof replacement louisville"
Roof Replacement	Louisville - Roof Replacement	"new roof louisville"
Roof Replacement	Louisville - Roof Replacement	"new roof louisville ky"
Roof Replacement	Louisville - Roof Replacement	"reroof louisville"
Roof Replacement	Louisville - Roof Replacement	"roof replacement louisville ky"
Roof Replacement	Louisville - Roof Replacement	"roofing contractor louisville"
Roof Replacement	Columbus - Roof Replacement	"roof replacement columbus"
Roof Replacement	Columbus - Roof Replacement	"new roof columbus"
Roof Replacement	Columbus - Roof Replacement	"new roof columbus oh"
Roof Replacement	Columbus - Roof Replacement	"reroof columbus"
Roof Replacement	Columbus - Roof Replacement	"roof replacement columbus oh"
Roof Replacement	Columbus - Roof Replacement	"roofing contractor columbus"
Roof Repair	Tampa - Roof Repair	"roof repair tampa"
Roof Repair	Tampa - Roof Repair	"roof leak repair tampa"
Roof Repair	Tampa - Roof Repair	"emergency roof repair tampa"
Roof Repair	Tampa - Roof Repair	"fix roof leak tampa"
Roof Repair	Houston - Roof Repair	"roof repair houston"
Roof Repair	Houston - Roof Repair	"roof leak repair houston"
Roof Repair	Houston - Roof Repair	"emergency roof repair houston"
Roof Repair	Houston - Roof Repair	"fix roof leak houston"
Roof Repair	Atlanta - Roof Repair	"roof repair atlanta"
Roof Repair	Atlanta - Roof Repair	"roof leak repair atlanta"
Roof Repair	Atlanta - Roof Repair	"emergency roof repair atlanta"
Roof Repair	Atlanta - Roof Repair	"fix roof leak atlanta"
Roof Repair	Charlotte - Roof Repair	"roof repair charlotte"
Roof Repair	Charlotte - Roof Repair	"roof leak repair charlotte"
Roof Repair	Charlotte - Roof Repair	"emergency roof repair charlotte"
Roof Repair	Charlotte - Roof Repair	"fix roof leak charlotte"
Roof Repair	Jacksonville - Roof Repair	"roof repair jacksonville"
Roof Repair	Jacksonville - Roof Repair	"roof leak repair jacksonville"
Roof Repair	Jacksonville - Roof Repair	"emergency roof repair jacksonville"
Roof Repair	Jacksonville - Roof Repair	"fix roof leak jacksonville"
Roof Repair	Nashville - Roof Repair	"roof repair nashville"
Roof Repair	Nashville - Roof Repair	"roof leak repair nashville"
Roof Repair	Nashville - Roof Repair	"emergency roof repair nashville"
Roof Repair	Nashville - Roof Repair	"fix roof leak nashville"
Roof Repair	Louisville - Roof Repair	"roof repair louisville"
Roof Repair	Louisville - Roof Repair	"roof leak repair louisville"
Roof Repair	Louisville - Roof Repair	"emergency roof repair louisville"
Roof Repair	Louisville - Roof Repair	"fix roof leak louisville"
Roof Repair	Columbus - Roof Repair	"roof repair columbus"
Roof Repair	Columbus - Roof Repair	"roof leak repair columbus"
Roof Repair	Columbus - Roof Repair	"emergency roof repair columbus"
Roof Repair	Columbus - Roof Repair	"fix roof leak columbus"
Gutters & Siding	Tampa - Gutters	"gutter installation tampa"
Gutters & Siding	Tampa - Gutters	"seamless gutters tampa"
Gutters & Siding	Tampa - Gutters	"gutter replacement tampa"
Gutters & Siding	Tampa - Gutters	"gutter guards tampa"
Gutters & Siding	Houston - Gutters	"gutter installation houston"
Gutters & Siding	Houston - Gutters	"seamless gutters houston"
Gutters & Siding	Houston - Gutters	"gutter replacement houston"
Gutters & Siding	Houston - Gutters	"gutter guards houston"
Gutters & Siding	Atlanta - Gutters	"gutter installation atlanta"
Gutters & Siding	Atlanta - Gutters	"seamless gutters atlanta"
Gutters & Siding	Atlanta - Gutters	"gutter replacement atlanta"
Gutters & Siding	Atlanta - Gutters	"gutter guards atlanta"
Gutters & Siding	Charlotte - Gutters	"gutter installation charlotte"
Gutters & Siding	Charlotte - Gutters	"seamless gutters charlotte"
Gutters & Siding	Charlotte - Gutters	"gutter replacement charlotte"
Gutters & Siding	Charlotte - Gutters	"gutter guards charlotte"
Gutters & Siding	Jacksonville - Gutters	"gutter installation jacksonville"
Gutters & Siding	Jacksonville - Gutters	"seamless gutters jacksonville"
Gutters & Siding	Jacksonville - Gutters	"gutter replacement jacksonville"
Gutters & Siding	Jacksonville - Gutters	"gutter guards jacksonville"
Gutters & Siding	Nashville - Gutters	"gutter installation nashville"
Gutters & Siding	Nashville - Gutters	"seamless gutters nashville"
Gutters & Siding	Nashville - Gutters	"gutter replacement nashville"
Gutters & Siding	Nashville - Gutters	"gutter guards nashville"
Gutters & Siding	Louisville - Gutters	"gutter installation louisville"
Gutters & Siding	Louisville - Gutters	"seamless gutters louisville"
Gutters & Siding	Louisville - Gutters	"gutter replacement louisville"
Gutters & Siding	Louisville - Gutters	"gutter guards louisville"
Gutters & Siding	Columbus - Gutters	"gutter installation columbus"
Gutters & Siding	Columbus - Gutters	"seamless gutters columbus"
Gutters & Siding	Columbus - Gutters	"gutter replacement columbus"
Gutters & Siding	Columbus - Gutters	"gutter guards columbus"
```

Click **Process** → **Finish and review changes**.

### Step 5: Paste Responsive Search Ads (24 rows)

In Google Ads Editor, navigate to **Responsive search ads** in the type list, then **Make multiple changes**. Paste one campaign block at a time.

> Lines are wide — scroll right to see all columns. Each column is tab-separated.

#### Roof Replacement Ads (8 rows)

```
Campaign	Ad group	Final URL	Headline 1	Headline 2	Headline 3	Headline 4	Headline 5	Description 1	Description 2
Roof Replacement	Tampa - Roof Replacement	https://protechroof.net/locations/tampa-fl/roof-replacement	Tampa Roof Replacement	GAF Master Elite Contractor	Free Estimate - Call Today	Lifetime Workmanship Warranty	Licensed & Insured in FL	Tampa's trusted roofers. GAF certified. Lifetime warranty. Free estimate today.	Over 1,000 roofs done. $0 down financing up to 144 months. Call for a free quote.
Roof Replacement	Houston - Roof Replacement	https://protechroof.net/locations/houston-tx/roof-replacement	Houston Roof Replacement	GAF Master Elite Contractor	Free Estimate - Call Today	Lifetime Workmanship Warranty	Licensed & Insured in TX	Houston's trusted roofers. GAF certified. Lifetime warranty. Free estimate today.	Over 1,000 roofs done. $0 down financing up to 144 months. Call for a free quote.
Roof Replacement	Atlanta - Roof Replacement	https://protechroof.net/locations/atlanta-ga/roof-replacement	Atlanta Roof Replacement	GAF Master Elite Contractor	Free Estimate - Call Today	Lifetime Workmanship Warranty	Licensed & Insured in GA	Atlanta's trusted roofers. GAF certified. Lifetime warranty. Free estimate today.	Over 1,000 roofs done. $0 down financing up to 144 months. Call for a free quote.
Roof Replacement	Charlotte - Roof Replacement	https://protechroof.net/locations/charlotte-nc/roof-replacement	Charlotte Roof Replacement	GAF Master Elite Contractor	Free Estimate - Call Today	Lifetime Workmanship Warranty	Licensed & Insured in NC	Charlotte's trusted roofers. GAF certified. Lifetime warranty. Free estimate today.	Over 1,000 roofs done. $0 down financing up to 144 months. Call for a free quote.
Roof Replacement	Jacksonville - Roof Replacement	https://protechroof.net/locations/jacksonville-fl/roof-replacement	Jacksonville Roof Replacement	GAF Master Elite Contractor	Free Estimate - Call Today	Lifetime Workmanship Warranty	Licensed & Insured in FL	Jacksonville's trusted roofers. GAF certified. Lifetime warranty. Free estimate today.	Over 1,000 roofs done. $0 down financing up to 144 months. Call for a free quote.
Roof Replacement	Nashville - Roof Replacement	https://protechroof.net/locations/nashville-tn/roof-replacement	Nashville Roof Replacement	GAF Master Elite Contractor	Free Estimate - Call Today	Lifetime Workmanship Warranty	Licensed & Insured in TN	Nashville's trusted roofers. GAF certified. Lifetime warranty. Free estimate today.	Over 1,000 roofs done. $0 down financing up to 144 months. Call for a free quote.
Roof Replacement	Louisville - Roof Replacement	https://protechroof.net/locations/louisville-ky/roof-replacement	Louisville Roof Replacement	GAF Master Elite Contractor	Free Estimate - Call Today	Lifetime Workmanship Warranty	Licensed & Insured in KY	Louisville's trusted roofers. GAF certified. Lifetime warranty. Free estimate today.	Over 1,000 roofs done. $0 down financing up to 144 months. Call for a free quote.
Roof Replacement	Columbus - Roof Replacement	https://protechroof.net/locations/columbus-oh/roof-replacement	Columbus Roof Replacement	GAF Master Elite Contractor	Free Estimate - Call Today	Lifetime Workmanship Warranty	Licensed & Insured in OH	Columbus's trusted roofers. GAF certified. Lifetime warranty. Free estimate today.	Over 1,000 roofs done. $0 down financing up to 144 months. Call for a free quote.
```

#### Roof Repair Ads (8 rows)

```
Campaign	Ad group	Final URL	Headline 1	Headline 2	Headline 3	Headline 4	Headline 5	Description 1	Description 2
Roof Repair	Tampa - Roof Repair	https://protechroof.net/locations/tampa-fl/roof-repair	Tampa Roof Repair	Same-Day Service Available	Free Inspection - Call Now	Stop Leaks Before They Spread	Licensed & Insured in FL	Fast roof repair in Tampa. Leaks, storm damage & shingles. Same-day service.	Don't let a small leak become costly. Our techs fix it in one visit. Warranty included.
Roof Repair	Houston - Roof Repair	https://protechroof.net/locations/houston-tx/roof-repair	Houston Roof Repair	Same-Day Service Available	Free Inspection - Call Now	Stop Leaks Before They Spread	Licensed & Insured in TX	Fast roof repair in Houston. Leaks, storm damage & shingles. Same-day service.	Don't let a small leak become costly. Our techs fix it in one visit. Warranty included.
Roof Repair	Atlanta - Roof Repair	https://protechroof.net/locations/atlanta-ga/roof-repair	Atlanta Roof Repair	Same-Day Service Available	Free Inspection - Call Now	Stop Leaks Before They Spread	Licensed & Insured in GA	Fast roof repair in Atlanta. Leaks, storm damage & shingles. Same-day service.	Don't let a small leak become costly. Our techs fix it in one visit. Warranty included.
Roof Repair	Charlotte - Roof Repair	https://protechroof.net/locations/charlotte-nc/roof-repair	Charlotte Roof Repair	Same-Day Service Available	Free Inspection - Call Now	Stop Leaks Before They Spread	Licensed & Insured in NC	Fast roof repair in Charlotte. Leaks, storm damage & shingles. Same-day service.	Don't let a small leak become costly. Our techs fix it in one visit. Warranty included.
Roof Repair	Jacksonville - Roof Repair	https://protechroof.net/locations/jacksonville-fl/roof-repair	Jacksonville Roof Repair	Same-Day Service Available	Free Inspection - Call Now	Stop Leaks Before They Spread	Licensed & Insured in FL	Fast roof repair in Jacksonville. Leaks, storm damage & shingles. Same-day service.	Don't let a small leak become costly. Our techs fix it in one visit. Warranty included.
Roof Repair	Nashville - Roof Repair	https://protechroof.net/locations/nashville-tn/roof-repair	Nashville Roof Repair	Same-Day Service Available	Free Inspection - Call Now	Stop Leaks Before They Spread	Licensed & Insured in TN	Fast roof repair in Nashville. Leaks, storm damage & shingles. Same-day service.	Don't let a small leak become costly. Our techs fix it in one visit. Warranty included.
Roof Repair	Louisville - Roof Repair	https://protechroof.net/locations/louisville-ky/roof-repair	Louisville Roof Repair	Same-Day Service Available	Free Inspection - Call Now	Stop Leaks Before They Spread	Licensed & Insured in KY	Fast roof repair in Louisville. Leaks, storm damage & shingles. Same-day service.	Don't let a small leak become costly. Our techs fix it in one visit. Warranty included.
Roof Repair	Columbus - Roof Repair	https://protechroof.net/locations/columbus-oh/roof-repair	Columbus Roof Repair	Same-Day Service Available	Free Inspection - Call Now	Stop Leaks Before They Spread	Licensed & Insured in OH	Fast roof repair in Columbus. Leaks, storm damage & shingles. Same-day service.	Don't let a small leak become costly. Our techs fix it in one visit. Warranty included.
```

#### Gutters & Siding Ads (8 rows)

```
Campaign	Ad group	Final URL	Headline 1	Headline 2	Headline 3	Headline 4	Headline 5	Description 1	Description 2
Gutters & Siding	Tampa - Gutters	https://protechroof.net/locations/tampa-fl/gutters-siding	Gutters in Tampa, FL	Seamless Aluminum Gutters	Free Estimate - Call Today	Gutter Guards Available	Licensed & Insured in FL	Seamless gutters in Tampa. Custom-fit, won't leak or clog. Free estimate.	Custom-fit gutters that won't leak or clog. Lifetime warranty. Free on-site estimate.
Gutters & Siding	Houston - Gutters	https://protechroof.net/locations/houston-tx/gutters-siding	Gutters in Houston, TX	Seamless Aluminum Gutters	Free Estimate - Call Today	Gutter Guards Available	Licensed & Insured in TX	Seamless gutters in Houston. Custom-fit, won't leak or clog. Free estimate.	Custom-fit gutters that won't leak or clog. Lifetime warranty. Free on-site estimate.
Gutters & Siding	Atlanta - Gutters	https://protechroof.net/locations/atlanta-ga/gutters-siding	Gutters in Atlanta, GA	Seamless Aluminum Gutters	Free Estimate - Call Today	Gutter Guards Available	Licensed & Insured in GA	Seamless gutters in Atlanta. Custom-fit, won't leak or clog. Free estimate.	Custom-fit gutters that won't leak or clog. Lifetime warranty. Free on-site estimate.
Gutters & Siding	Charlotte - Gutters	https://protechroof.net/locations/charlotte-nc/gutters-siding	Gutters in Charlotte, NC	Seamless Aluminum Gutters	Free Estimate - Call Today	Gutter Guards Available	Licensed & Insured in NC	Seamless gutters in Charlotte. Custom-fit, won't leak or clog. Free estimate.	Custom-fit gutters that won't leak or clog. Lifetime warranty. Free on-site estimate.
Gutters & Siding	Jacksonville - Gutters	https://protechroof.net/locations/jacksonville-fl/gutters-siding	Gutters in Jacksonville, FL	Seamless Aluminum Gutters	Free Estimate - Call Today	Gutter Guards Available	Licensed & Insured in FL	Seamless gutters in Jacksonville. Custom-fit, won't leak or clog. Free estimate.	Custom-fit gutters that won't leak or clog. Lifetime warranty. Free on-site estimate.
Gutters & Siding	Nashville - Gutters	https://protechroof.net/locations/nashville-tn/gutters-siding	Gutters in Nashville, TN	Seamless Aluminum Gutters	Free Estimate - Call Today	Gutter Guards Available	Licensed & Insured in TN	Seamless gutters in Nashville. Custom-fit, won't leak or clog. Free estimate.	Custom-fit gutters that won't leak or clog. Lifetime warranty. Free on-site estimate.
Gutters & Siding	Louisville - Gutters	https://protechroof.net/locations/louisville-ky/gutters-siding	Gutters in Louisville, KY	Seamless Aluminum Gutters	Free Estimate - Call Today	Gutter Guards Available	Licensed & Insured in KY	Seamless gutters in Louisville. Custom-fit, won't leak or clog. Free estimate.	Custom-fit gutters that won't leak or clog. Lifetime warranty. Free on-site estimate.
Gutters & Siding	Columbus - Gutters	https://protechroof.net/locations/columbus-oh/gutters-siding	Gutters in Columbus, OH	Seamless Aluminum Gutters	Free Estimate - Call Today	Gutter Guards Available	Licensed & Insured in OH	Seamless gutters in Columbus. Custom-fit, won't leak or clog. Free estimate.	Custom-fit gutters that won't leak or clog. Lifetime warranty. Free on-site estimate.
```

### Step 6: Paste Negative Keywords (54 rows)

In Google Ads Editor, navigate to **Keywords, Negative** in the type list, then **Make multiple changes** → paste:

```
Campaign	Keyword
Roof Replacement	free
Roof Replacement	DIY
Roof Replacement	how to
Roof Replacement	jobs
Roof Replacement	salary
Roof Replacement	hiring
Roof Replacement	tutorial
Roof Replacement	class
Roof Replacement	cheap
Roof Replacement	cost calculator
Roof Replacement	wiki
Roof Replacement	youtube
Roof Replacement	home depot
Roof Replacement	lowes
Roof Replacement	near me hiring
Roof Replacement	roofing school
Roof Replacement	roofing license
Roof Replacement	how to install
Roof Repair	free
Roof Repair	DIY
Roof Repair	how to
Roof Repair	jobs
Roof Repair	salary
Roof Repair	hiring
Roof Repair	tutorial
Roof Repair	class
Roof Repair	cheap
Roof Repair	cost calculator
Roof Repair	wiki
Roof Repair	youtube
Roof Repair	home depot
Roof Repair	lowes
Roof Repair	near me hiring
Roof Repair	roofing school
Roof Repair	roofing license
Roof Repair	how to install
Gutters & Siding	free
Gutters & Siding	DIY
Gutters & Siding	how to
Gutters & Siding	jobs
Gutters & Siding	salary
Gutters & Siding	hiring
Gutters & Siding	tutorial
Gutters & Siding	class
Gutters & Siding	cheap
Gutters & Siding	cost calculator
Gutters & Siding	wiki
Gutters & Siding	youtube
Gutters & Siding	home depot
Gutters & Siding	lowes
Gutters & Siding	near me hiring
Gutters & Siding	roofing school
Gutters & Siding	roofing license
Gutters & Siding	how to install
```

### Step 7: Set Location Targeting

Location targeting must be done in Google Ads Editor's location targeting section (not via "Make multiple changes").

For **each campaign**:

1. Select the campaign in the left tree
2. Click **Locations** in the type list
3. Add these locations with a **30-mile radius** each:

| City | State |
|---|---|
| Tampa | Florida |
| Houston | Texas |
| Atlanta | Georgia |
| Charlotte | North Carolina |
| Jacksonville | Florida |
| Nashville | Tennessee |
| Louisville | Kentucky |
| Columbus | Ohio |

4. Under **Location options** for each campaign, set:
   - **Target:** People in or regularly in your targeted locations
   - Do NOT use "Presence or interest" — that wastes budget on people just searching about the area

### Step 8: Review & Post

1. Click **Check changes** in Google Ads Editor to validate everything
2. Fix any errors (common: headline over 30 chars, description over 90 chars)
3. Click **Post** to push all changes live

> After posting, verify in the Google Ads web UI that all 3 campaigns, 24 ad groups, keywords, and ads are present.

---

## Phase 4: Ad Extensions

Do these in the Google Ads web UI (**Ads & assets** → **Assets**). Apply all at **Account level**.

### Sitelinks

Click **+** → **Sitelink** → add 4:

| Sitelink Text | Final URL | Description Line 1 | Description Line 2 |
|---|---|---|---|
| Free Estimate | `https://protechroof.net/free-estimate` | Get a no-obligation quote | We respond within 24 hours |
| Our Certifications | `https://protechroof.net/certifications` | GAF Master Elite contractor | Only 2% of roofers qualify |
| Financing Available | `https://protechroof.net/financing` | $0 down, up to 144 months | Flexible payment options |
| Customer Reviews | `https://protechroof.net/reviews` | See what homeowners say | 5-star rated service |

### Callouts

Click **+** → **Callout** → add each:
- `Lifetime Warranty`
- `GAF Master Elite`
- `Licensed in 14 States`
- `Free Inspections`
- `$0 Down Financing`
- `24-Hour Emergency Service`

### Call Extension

Click **+** → **Call** → phone number: `1-866-308-2640`

### Structured Snippet

Click **+** → **Structured snippet** → header: **Services** → values:
`Roof Replacement`, `Roof Repair`, `Storm Damage`, `Insurance Claims`, `Gutters & Siding`, `Roof Inspection`

---

## Phase 5: Launch & Monitor

### Pre-Launch Checklist

- [ ] All 3 campaigns created with 8 ad groups each (24 total)
- [ ] Each ad group has keywords in phrase match (quoted)
- [ ] Each ad group has a responsive search ad with correct Final URL
- [ ] Location targeting set on each campaign (8 cities × 30mi)
- [ ] Location options set to "Presence" not "Presence or interest"
- [ ] Negative keywords added to all 3 campaigns
- [ ] Sitelinks, callouts, call, and structured snippets added
- [ ] Conversion env vars set in Vercel and site redeployed
- [ ] Conversion status shows "Recording" in Google Ads
- [ ] Old "Leads-Search" keywords are paused

### Enable Campaigns

Go to **Campaigns** — each should show "Eligible" or "Enabled". If any show "Paused", select → **Edit** → **Enable**.

### Week 1: Check Daily

| Metric | Target | If Below Target |
|---|---|---|
| Impressions | > 0 within 24 hrs | Check keywords aren't "Below first page bid"; check location targeting |
| Clicks | Start within 2-3 days | Raise max CPC to $12-15 |
| CTR | 3-5%+ | Ad copy needs work (below 2% is a problem) |
| Avg. CPC | $3-12 range | Normal variance by city/service |
| Conversions | First within ~1 week | Check conversion tracking is firing |

### Week 2: Optimize

1. **Keywords → Search terms** — see what people actually searched
2. Add irrelevant search terms as negative keywords
3. Pause keywords with 100+ impressions but 0 clicks
4. Shift budget toward better-performing cities

### After 15+ Conversions: Switch Bidding

Once any campaign reaches 15+ total conversions:

1. Campaign → **Settings** → **Bidding** → change to **Target CPA**
2. Set target CPA = your average cost per conversion × 1.2
3. Let it run 2 weeks before adjusting

---

## Quick Reference

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

### Budget Scaling

| Monthly Budget | Roof Replacement (50%) | Roof Repair (30%) | Gutters (20%) |
|---|---|---|---|
| $500/mo | $8/day | $5/day | $3/day |
| $1,000/mo | $16/day | $10/day | $7/day |
| $1,500/mo | $25/day | $15/day | $10/day |

### Vercel Env Vars

```
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ESTIMATE_LABEL=your_label_here
NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL=your_label_here
NEXT_PUBLIC_GOOGLE_ADS_CALLBACK_LABEL=your_label_here
NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL=your_label_here
```
