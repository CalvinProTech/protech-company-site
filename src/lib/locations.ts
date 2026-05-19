export interface Location {
  state: string;
  stateSlug: string;
  stateAbbr: string;
  city: string;
  citySlug: string;
  lat: number;
  lng: number;
  phone: string;
  serviceRadius: string;
  surroundingCities: string[];
  licenseNumber: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;

  // Optional hyper-local content. When present, CityLandingTemplate renders
  // a dedicated "Roofing in [City]" section after the intro. Pages without
  // these fields render the template's generic layout — no breaking change.
  // Pattern modeled on competitor hernandoroofer.com, which dominates its
  // micro-market (Spring Hill, FL) with hyper-local content like this.
  localContent?: {
    countyName?: string;
    metroArea?: string;
    climateChallenges?: string;
    commonIssues?: string[];
    localCodes?: string;
    neighborhoods?: string[];
    seasonalConsiderations?: string;
  };
  localFaqs?: Array<{ question: string; answer: string }>;
}

const locations: Location[] = [
  // ─── Florida ────────────────────────────────────────────────────────
  {
    state: "Florida",
    stateSlug: "florida",
    stateAbbr: "FL",
    city: "Tampa",
    citySlug: "tampa",
    lat: 27.9506,
    lng: -82.4572,
    phone: "1-866-308-2640",
    serviceRadius: "50 miles",
    surroundingCities: [
      "St. Petersburg",
      "Clearwater",
      "Brandon",
      "Lakeland",
      "Wesley Chapel",
    ],
    licenseNumber: "CCC-1332871",
    heroImage: "/images/hero/tampa.jpg",
    metaTitle: "Roofers in Tampa, FL · Repair & Replacement",
    metaDescription:
      "Licensed Tampa roofing contractor specializing in roof replacement, repair, and storm damage. Hyper-local Hillsborough County crews. Free estimates · $0 down financing.",
    headline: "Protect Your Home with Tampa's Most Trusted Roofers",
    intro:
      "Tampa homeowners face unique roofing challenges, from intense summer storms to year-round UV exposure that degrades shingles faster than the national average. ProTech Roofing is headquartered in Tampa at 4950 W Kennedy Blvd and has served the Tampa Bay area for over a decade, completing more than 100 residential and commercial projects. Our crews know Hillsborough County building codes, wind-mitigation discounts, and HOA processes inside and out. Whether you need a full replacement or emergency leak repair, we deliver lasting results backed by our lifetime workmanship warranty.",
    localContent: {
      countyName: "Hillsborough County",
      metroArea: "Tampa Bay",
      climateChallenges:
        "Tampa sits at the inland edge of one of the most weather-stressed roofing markets in the country. Summer afternoon thunderstorms drop 1-2 inches of rain in 30 minutes with 50+ mph gusts, accelerating shingle uplift and flashing failure. Year-round UV exposure averaging 260+ sunny days per year shortens asphalt shingle lifespan to 15-18 years (vs the national 25-30). Salt-air drift from Tampa Bay and the Gulf corrodes metal valleys, drip edge, and fasteners on roofs within 5 miles of the water. And every June through November, the Atlantic hurricane season brings the possibility of named-storm wind events that require Florida-Building-Code-compliant installation to survive.",
      commonIssues: [
        "Wind uplift from afternoon thunderstorms (50+ mph gusts)",
        "UV degradation shortening shingle life to 15-18 years",
        "Salt-air corrosion of metal flashing and fasteners near the bay",
        "Wind-driven rain infiltration around valleys, vents, and chimneys",
        "Hurricane debris impact damage (June-November)",
        "Improper attic ventilation accelerating shingle failure",
        "Tile slip and crack from age and storm impact (older South Tampa homes)",
      ],
      localCodes:
        "All roof replacements in Hillsborough County require a permit from the Tampa or county building department and must comply with the Florida Building Code (FBC) high-velocity wind zone requirements: secondary water barrier, ring-shank nails, and enhanced fastening at field/edge/ridge. Completing a wind mitigation inspection after install qualifies most homeowners for 25-45% off their windstorm insurance premium — we coordinate this for every customer at no charge.",
        seasonalConsiderations:
        "The optimal install window in Tampa is October through May, when humidity drops and the daily afternoon storm threat fades. June-November is hurricane season — we maintain reserve material inventory and emergency tarp crews on standby. If your roof is 12+ years old, schedule a pre-season inspection in May to identify and fix vulnerabilities before storms arrive.",
      neighborhoods: [
        "South Tampa",
        "Hyde Park",
        "Westchase",
        "New Tampa",
        "Carrollwood",
        "Seminole Heights",
        "Davis Islands",
        "Channelside",
        "Ballast Point",
        "Tampa Palms",
        "Town 'N' Country",
        "Citrus Park",
      ],
    },
    localFaqs: [
      {
        question: "How to find a reliable roofer in Tampa?",
        answer:
          "Verify the contractor is licensed by the Florida DBPR (look up CCC# license number), check Google reviews with 50+ ratings minimum, ask for proof of general liability and workers' comp insurance, and confirm they carry a manufacturer certification like GAF Master Elite. Avoid out-of-state 'storm chasers' who appear after hurricanes — Tampa-headquartered companies stand behind warranties long-term. ProTech Roofing is HQ'd at 4950 W Kennedy Blvd in Tampa.",
      },
      {
        question: "How long does a roof last in Tampa?",
        answer:
          "Asphalt shingle roofs in Tampa typically last 15-18 years — shorter than the national 25-30 year benchmark — due to high UV exposure and salt-air conditions. Concrete tile lasts 30-50 years. Standing-seam metal lasts 40+ years and handles wind better. If your asphalt shingle roof is 12+ years old in Tampa, schedule an inspection — small repairs now prevent storm-season disasters later.",
      },
      {
        question: "How to prepare your roof for hurricane season in Tampa?",
        answer:
          "Schedule a professional inspection by May to catch loose shingles, deteriorated flashing, or compromised seals before storms arrive. Trim trees within 10 feet of the roof to prevent debris impact. Clear gutters and downspouts. Verify your homeowner policy includes wind/hurricane coverage and that your wind mitigation report is current (it expires every 5 years). For roofs 12+ years old, the safest move is full replacement before hurricane season — claims after a named storm can take 6-12 months to resolve.",
      },
      {
        question: "What causes most roof damage in Tampa?",
        answer:
          "In order of frequency: (1) afternoon thunderstorm wind uplift, (2) UV-accelerated shingle degradation, (3) salt-air corrosion of metal components, (4) wind-driven rain finding compromised valleys and flashings, (5) hurricane debris and high-wind events, and (6) improper original installation that fails sooner. Most leak calls we get in Tampa trace back to the first four causes layered on a roof that's already past 12 years old.",
      },
    ],
  },
  {
    state: "Florida",
    stateSlug: "florida",
    stateAbbr: "FL",
    city: "St. Petersburg",
    citySlug: "st-petersburg",
    lat: 27.7706,
    lng: -82.6404,
    phone: "1-866-308-2640",
    serviceRadius: "30 miles",
    surroundingCities: [
      "Clearwater",
      "Tampa",
      "Largo",
      "Pinellas Park",
      "Gulfport",
    ],
    licenseNumber: "CCC-1332871",
    heroImage: "/images/hero/tampa.jpg",
    metaTitle: "Roofers in St. Petersburg, FL · Free Estimates",
    metaDescription:
      "St. Petersburg roofing contractor specializing in roof replacement, repair, and hurricane preparation. Pinellas County crews. Free estimates · $0 down financing.",
    headline: "St. Petersburg's Trusted Roofing Contractor",
    intro:
      "St. Petersburg's nickname — the Sunshine City — comes with a roofing cost: more than 360 days of sun per year, intense year-round UV exposure, and salt-air drift from Boca Ciega Bay and Tampa Bay that corrode metal components faster than inland Florida averages. ProTech Roofing serves St. Petersburg from our Tampa Bay HQ, with crews fluent in Pinellas County permitting, the city's historic-district overlays, and the wind-mitigation reports that knock 25-45% off windstorm insurance premiums. Whether your home is a 1920s Old Northeast bungalow or a 2010s Skyway Marina townhouse, we deliver code-compliant roofing built for the Gulf Coast.",
    localContent: {
      countyName: "Pinellas County",
      metroArea: "Tampa Bay",
      climateChallenges:
        "St. Petersburg is the most weather-exposed major city in Florida, with the Gulf of Mexico on three sides and minimal natural windbreaks. Summer thunderstorms reliably produce 50+ mph gusts and wind-driven rain. Year-round UV exposure averaging 360+ sunny days per year degrades asphalt shingles 30-40% faster than the national benchmark. Salt-air corrosion from Boca Ciega Bay and Tampa Bay attacks galvanized fasteners, drip edge, and metal valleys on any home within 5 miles of the water — which is most of the city. Hurricane storm-surge risk requires every coastal homeowner to plan for evacuation, but also to ensure the roof survives if they don't.",
      commonIssues: [
        "UV degradation accelerated by 360+ sunny days per year",
        "Salt-air corrosion of metal flashing, fasteners, and valleys",
        "Wind uplift on coastal-facing roofs lacking proper edge fastening",
        "Hurricane storm-surge driving water under shingles in low-lying areas",
        "Historic-district shingle and tile replacement requiring city approval",
        "Aging tile roofs in Old Northeast and Snell Isle requiring underlayment replacement",
      ],
      localCodes:
        "All roof replacements in St. Petersburg require a permit from the city building department and must comply with the Florida Building Code high-velocity wind zone requirements. Homes in designated historic districts (Old Northeast, Granada Terrace, Driftwood) require additional design review for material and color changes. Wind mitigation inspections post-install qualify most homeowners for 25-45% off windstorm insurance premiums.",
      seasonalConsiderations:
        "Schedule install work between October and May to avoid the daily afternoon storm cycle and the active hurricane season. If your roof is 10+ years old, a pre-hurricane-season inspection in April or May is the single highest-ROI maintenance call you can make. After any named storm passes within 100 miles, schedule a same-week inspection — wind damage often isn't visible from the ground but compromises the next year of weather exposure.",
      neighborhoods: [
        "Old Northeast",
        "Snell Isle",
        "Downtown",
        "Crescent Lake",
        "Tyrone",
        "Skyway Marina",
        "Pinellas Point",
        "Disston Heights",
        "Historic Roser Park",
        "Coquina Key",
      ],
    },
    localFaqs: [
      {
        question: "Do I need a special permit for a roof replacement in St. Petersburg's historic districts?",
        answer:
          "Yes. Homes in St. Petersburg's designated historic districts (Old Northeast, Granada Terrace, Driftwood, Bayview Heights) require Certificate of Appropriateness review for any roof material or color change visible from the street. ProTech handles the application and coordinates with the city historic preservation office on your behalf — typical approval takes 4-8 weeks before install can begin.",
      },
      {
        question: "How long do tile roofs last in St. Petersburg?",
        answer:
          "Concrete tile roofs in St. Petersburg typically last 30-50 years before tile replacement, but the underlayment beneath the tiles fails at 20-25 years due to UV and heat. Many Old Northeast and Snell Isle homes need underlayment replacement (lift, re-felt, re-set the existing tiles) rather than full tile replacement — extending roof life 20+ more years at roughly half the cost of a full replacement.",
      },
    ],
  },
  {
    state: "Florida",
    stateSlug: "florida",
    stateAbbr: "FL",
    city: "Clearwater",
    citySlug: "clearwater",
    lat: 27.9659,
    lng: -82.8001,
    phone: "1-866-308-2640",
    serviceRadius: "30 miles",
    surroundingCities: [
      "St. Petersburg",
      "Largo",
      "Dunedin",
      "Safety Harbor",
      "Belleair",
    ],
    licenseNumber: "CCC-1332871",
    heroImage: "/images/hero/tampa.jpg",
    metaTitle: "Roofers in Clearwater, FL · Free Estimates",
    metaDescription:
      "Clearwater roofing contractor specializing in coastal roof replacement, repair, and hurricane preparation. Pinellas County crews. Free estimates · $0 down financing.",
    headline: "Clearwater's Trusted Coastal Roofing Contractor",
    intro:
      "Clearwater roofing has to survive what most of the country doesn't deal with: salt-air corrosion from the Gulf and Tampa Bay, year-round UV at coastal-Florida levels, and a hurricane corridor that produces named storms on a yearly cadence. ProTech Roofing serves Clearwater from our Tampa Bay HQ — close enough that emergency tarping reaches Clearwater Beach in under 45 minutes. Our crews are fluent in Pinellas County permitting, coastal building requirements, and the wind mitigation discount that knocks 25-45% off windstorm insurance for Clearwater homeowners. From Sand Key beachfront tile roofs to Countryside asphalt-shingle ranches, we install roofing built for the Gulf Coast.",
    localContent: {
      countyName: "Pinellas County",
      metroArea: "Tampa Bay",
      climateChallenges:
        "Clearwater is a coastal community on the Pinellas Peninsula, bracketed by the Gulf of Mexico to the west and Tampa Bay to the east. That position means salt-air corrosion is unavoidable: galvanized fasteners, drip edge, and metal valleys all corrode 2-3x faster than inland Florida averages. Year-round UV averaging 260+ sunny days degrades asphalt shingles to a 15-18 year typical lifespan. Hurricane season (June-November) brings named-storm risk, and even a near-miss can produce 60+ mph sustained winds that test every fastener on the roof.",
      commonIssues: [
        "Salt-air corrosion of metal components on coastal-facing roofs",
        "Wind uplift on shingle and tile roofs lacking proper edge fastening",
        "Hurricane debris impact damage (June-November)",
        "UV degradation accelerated by 260+ sunny days per year",
        "Tile underlayment failure in older homes (20-25 year cycle)",
        "Standing water on flat roof sections of mid-century Clearwater homes",
      ],
      localCodes:
        "All roof replacements in Clearwater require a permit from the city or Pinellas County building department and must comply with Florida Building Code high-velocity wind zone requirements: secondary water barrier, ring-shank nails, enhanced edge fastening, and corrosion-resistant fasteners on coastal homes. Wind mitigation inspection post-install qualifies most homeowners for 25-45% off windstorm insurance premiums — we coordinate this at no charge.",
      seasonalConsiderations:
        "October through May is the optimal install window — humidity drops, afternoon storms fade, and crews can keep tighter schedules. Hurricane season (June-November) requires reserve material inventory and emergency tarp readiness, which we maintain year-round. Beachfront and Sand Key homes should add a coastal salt-air inspection every 3-5 years to catch fastener corrosion before it produces leaks.",
      neighborhoods: [
        "Clearwater Beach",
        "Sand Key",
        "Island Estates",
        "Downtown Clearwater",
        "Belleair",
        "Countryside",
        "Morningside",
        "Skycrest",
        "On Top of the World",
      ],
    },
    localFaqs: [
      {
        question: "Do coastal Clearwater roofs need special materials?",
        answer:
          "Yes. Homes within 5 miles of the Gulf or Tampa Bay should use stainless steel or hot-dipped galvanized fasteners (not standard galvanized), aluminum or copper drip edge and flashing (not galvanized steel), and shingles or tiles rated for high-wind coastal exposure. The upfront cost premium is typically 5-10% but doubles the time-to-failure on metal components in the salt-air environment.",
      },
      {
        question: "How quickly can you tarp a damaged Clearwater roof after a storm?",
        answer:
          "Emergency tarping for Clearwater addresses arrives within 4 hours during business hours and within 24 hours after-hours or on weekends. Our crews are based in Tampa, roughly a 45-minute drive to Clearwater Beach. After named-storm events, response times extend based on volume — pre-booking a tarp for vulnerable roofs in advance of a forecasted storm shortens response.",
      },
    ],
  },
  {
    state: "Florida",
    stateSlug: "florida",
    stateAbbr: "FL",
    city: "Brandon",
    citySlug: "brandon",
    lat: 27.9378,
    lng: -82.2859,
    phone: "1-866-308-2640",
    serviceRadius: "25 miles",
    surroundingCities: [
      "Tampa",
      "Valrico",
      "Riverview",
      "Bloomingdale",
      "Lithia",
    ],
    licenseNumber: "CCC-1332871",
    heroImage: "/images/hero/tampa.jpg",
    metaTitle: "Roofers in Brandon, FL · Free Estimates",
    metaDescription:
      "Brandon roofing contractor specializing in suburban roof replacement, repair, and storm damage. Hillsborough County crews. Free estimates · $0 down financing.",
    headline: "Brandon's Trusted Suburban Roofing Contractor",
    intro:
      "Brandon is one of Tampa Bay's largest suburbs, with most homes built between 1990 and 2010 and dominated by asphalt shingle roofs that are now at or past their 15-18 year Tampa-area life expectancy. ProTech Roofing serves Brandon from our Tampa HQ, with crews that know Hillsborough County permitting, the wind-mitigation inspection process that knocks 25-45% off windstorm insurance, and the HOA architectural-review requirements common in Bloomingdale, Valrico, and Lithia subdivisions. Whether your home is in the original Brandon core or one of the newer Riverview developments, we deliver code-compliant roofing built for Florida summer storms.",
    localContent: {
      countyName: "Hillsborough County",
      metroArea: "Tampa Bay",
      climateChallenges:
        "Brandon is far enough from the Gulf to escape the worst of the salt-air corrosion that hits Clearwater and St. Pete, but close enough that summer thunderstorm activity is still intense. Most damage we see in Brandon comes from afternoon storm wind uplift, UV-accelerated shingle aging (Brandon homes typically need replacement at 15-18 years vs the national 25-30), and the occasional hailstorm — Hillsborough County saw three notable hail events in 2023-2025 that produced widespread insurance claim activity in Brandon and Riverview.",
      commonIssues: [
        "Wind uplift from afternoon thunderstorms (50+ mph gusts)",
        "UV degradation shortening asphalt shingle life to 15-18 years",
        "Aging 1990s-2000s shingles past warranty in original Brandon and Bloomingdale",
        "Hail damage from periodic Hillsborough County hailstorms",
        "HOA architectural-review delays in Lithia and Valrico subdivisions",
        "Improper attic ventilation in 1990s tract homes accelerating shingle failure",
      ],
      localCodes:
        "All roof replacements in Brandon require a permit from the Hillsborough County building department and must comply with Florida Building Code wind zone requirements. Most Brandon-area HOAs (Bloomingdale, FishHawk Ranch, Lithia Pinecrest) require architectural-review-committee approval for shingle color and material changes before permit application. ProTech handles HOA submittals at no charge. Wind mitigation inspection post-install qualifies most homeowners for 25-45% off windstorm insurance premiums.",
      seasonalConsiderations:
        "October through May is the optimal install window for Brandon — dry, mild weather and minimal storm-day delays. Schedule a pre-hurricane-season inspection in April or May if your roof is 12+ years old. After Hillsborough County hailstorms, document any damage with photos within 48 hours and call us for a no-charge inspection before filing an insurance claim — claims supported by professional documentation settle faster and for more.",
      neighborhoods: [
        "Brandon",
        "Valrico",
        "Bloomingdale",
        "Lithia",
        "Riverview",
        "FishHawk Ranch",
        "Limona",
        "Mango",
        "Seffner",
      ],
    },
    localFaqs: [
      {
        question: "Do Brandon HOAs require approval before I replace my roof?",
        answer:
          "Most Brandon-area HOAs (Bloomingdale, FishHawk Ranch, Lithia Pinecrest, parts of Valrico) require Architectural Review Committee approval before any roof color or material change. Approval typically takes 2-4 weeks. ProTech submits the application package on your behalf at no charge, including manufacturer color samples and shingle specifications. Permits cannot be pulled until HOA approval is in hand.",
      },
      {
        question: "How can I tell if my Brandon roof has hail damage?",
        answer:
          "Hail damage on asphalt shingles shows as small circular bruises or missing granules, often on the slopes facing the storm direction. From the ground it's often invisible — most homeowners only notice when a leak starts months later. After any Hillsborough County hailstorm, schedule a no-charge inspection within 48 hours. If we document damage, you have a much stronger insurance claim than waiting until leaks appear.",
      },
    ],
  },
  {
    state: "Florida",
    stateSlug: "florida",
    stateAbbr: "FL",
    city: "Orlando",
    citySlug: "orlando",
    lat: 28.5383,
    lng: -81.3792,
    phone: "1-866-308-2640",
    serviceRadius: "50 miles",
    surroundingCities: [
      "Kissimmee",
      "Winter Park",
      "Sanford",
      "Altamonte Springs",
      "Clermont",
    ],
    licenseNumber: "CCC-1332872",
    heroImage: "/images/hero/orlando.jpg",
    metaTitle: "Roofing Contractor in Orlando, FL",
    metaDescription:
      "Orlando roofing experts specializing in hurricane-rated roof replacement and storm damage repair. Free inspections and financing available. Call today.",
    headline: "Protect Your Home with Orlando's Most Trusted Roofers",
    intro:
      "Orlando sits squarely in Florida's hurricane corridor, making a solid roof your first line of defense against severe weather. ProTech Roofing provides Central Florida homeowners with impact-rated roofing systems engineered to withstand Category 5 winds. We handle every step, from initial inspection through permit acquisition and final cleanup. Our local team knows Orange County codes inside and out, so your project passes inspection the first time.",
  },
  {
    state: "Florida",
    stateSlug: "florida",
    stateAbbr: "FL",
    city: "Miami",
    citySlug: "miami",
    lat: 25.7617,
    lng: -80.1918,
    phone: "1-866-308-2640",
    serviceRadius: "50 miles",
    surroundingCities: [
      "Coral Gables",
      "Hialeah",
      "Miami Beach",
      "Homestead",
      "Kendall",
    ],
    licenseNumber: "CCC-1332873",
    heroImage: "/images/hero/miami.jpg",
    metaTitle: "Miami Roofing Company - Roof Repair & Install | ProTech",
    metaDescription:
      "Miami-Dade approved roofing contractor. Hurricane-rated installations, tile and metal roofing, and 24/7 emergency repair. Schedule your free roof inspection now.",
    headline: "Protect Your Home with Miami's Most Trusted Roofers",
    intro:
      "Miami-Dade County enforces some of the strictest building codes in the nation, and for good reason: South Florida endures hurricane-force winds, salt air corrosion, and relentless heat. ProTech Roofing installs Miami-Dade NOA-approved roofing systems that meet every local requirement. Our crews specialize in tile, metal, and flat roof systems suited to the region's architectural styles. From Coral Gables estates to Homestead townhomes, we protect your investment with materials and craftsmanship built for the tropics.",
  },
  {
    state: "Florida",
    stateSlug: "florida",
    stateAbbr: "FL",
    city: "Jacksonville",
    citySlug: "jacksonville",
    lat: 30.3322,
    lng: -81.6557,
    phone: "1-866-308-2640",
    serviceRadius: "50 miles",
    surroundingCities: [
      "St. Augustine",
      "Orange Park",
      "Ponte Vedra Beach",
      "Fernandina Beach",
    ],
    licenseNumber: "CCC-1332874",
    heroImage: "/images/hero/jacksonville.jpg",
    metaTitle: "Roofers in Jacksonville, FL · Repair & Replacement",
    metaDescription:
      "Licensed Jacksonville roofing contractor specializing in roof replacement, repair, and hurricane prep. Duval County crews. Free estimates · $0 down financing.",
    headline:
      "Protect Your Home with Jacksonville's Most Trusted Roofers",
    intro:
      "Jacksonville is the largest city by area in the continental U.S., spanning coastal beach communities, the historic urban core, and sprawling suburbs across Duval County. Roofing needs vary just as widely — from salt-air-rated shingle systems on Atlantic Beach and Ponte Vedra homes, to mid-century tile in Riverside, to standard suburban asphalt across Mandarin and Westside. ProTech Roofing handles all of it with crews fluent in Duval County permitting, the Florida Building Code high-velocity wind zone requirements, and the wind-mitigation reports that knock 25-45% off windstorm insurance for most homeowners.",
    localContent: {
      countyName: "Duval County",
      metroArea: "Northeast Florida",
      climateChallenges:
        "Jacksonville sits on the Atlantic coast at the northernmost edge of Florida's tropical-storm corridor — close enough to face named-storm wind events and far enough north to also catch occasional nor'easters that batter the coast in winter. Year-round UV exposure averages 220+ sunny days per year, shortening asphalt shingle lifespan to 18-22 years (vs the national 25-30). Salt-air drift from the Atlantic and the St. Johns River corrodes galvanized fasteners, drip edge, and metal valleys on any home within 5 miles of the water. Summer afternoon thunderstorms produce 1-2 inches of rain in 30 minutes with 50+ mph gusts that test every fastener on aging roofs.",
      commonIssues: [
        "Salt-air corrosion on coastal-facing roofs (beaches, Ponte Vedra, Mayport)",
        "Wind uplift from afternoon summer thunderstorms",
        "UV degradation shortening shingle life to 18-22 years",
        "Hurricane and nor'easter wind events (multiple per decade)",
        "Wind-driven rain infiltration on aging valleys and chimney flashings",
        "Improper attic ventilation in 1980s-1990s tract homes",
      ],
      localCodes:
        "All roof replacements in Jacksonville require a permit from the Duval County building department and must comply with Florida Building Code wind zone requirements: secondary water barrier, ring-shank nails, and enhanced edge fastening. Coastal homes within Velocity Wind Zone 3 (beachfront and within a mile of the coast) face stricter fastening and material standards. Wind mitigation inspection post-install qualifies most homeowners for 25-45% off windstorm insurance premiums — we coordinate this for every customer at no charge.",
      seasonalConsiderations:
        "October through May is the optimal install window — humidity drops and the daily afternoon storm threat fades. Hurricane season (June-November) requires reserve material inventory and emergency tarp readiness, both of which we maintain year-round. If your roof is 12+ years old, schedule a pre-hurricane-season inspection in April or May to catch loose shingles or deteriorated flashing before a named storm exposes them.",
      neighborhoods: [
        "Riverside",
        "Avondale",
        "San Marco",
        "Mandarin",
        "Jacksonville Beach",
        "Atlantic Beach",
        "Neptune Beach",
        "Southside",
        "Westside",
        "Arlington",
        "Ponte Vedra",
        "Nocatee",
      ],
    },
    localFaqs: [
      {
        question: "Do coastal Jacksonville roofs need special materials?",
        answer:
          "Yes. Homes within 5 miles of the Atlantic, the Intracoastal, or the St. Johns River should use stainless steel or hot-dipped galvanized fasteners (not standard galvanized), aluminum or copper drip edge and flashing (not galvanized steel), and shingles or tiles rated for coastal high-wind exposure. The upfront cost premium is typically 5-10% but doubles the time-to-failure on metal components in the salt-air environment.",
      },
      {
        question: "How long do roofs last in Jacksonville?",
        answer:
          "Asphalt shingle roofs in Jacksonville typically last 18-22 years — shorter than the national 25-30 year benchmark — due to high UV exposure and salt-air conditions near the coast. Concrete tile lasts 30-50 years. Standing-seam metal lasts 40+ years and handles hurricane wind better than any other material. If your asphalt shingle roof is 15+ years old in Jacksonville, schedule an inspection — small repairs now prevent storm-season disasters later.",
      },
      {
        question: "When is the best time to replace a roof in Jacksonville?",
        answer:
          "October through May is the optimal install window. Humidity drops, the daily afternoon storm threat fades, and material-supply chains run faster (no hurricane-season demand spikes). If your roof is already compromised, don't wait — replacing before hurricane season starts in June is much better than scrambling after a named storm passes.",
      },
    ],
  },
  {
    state: "Florida",
    stateSlug: "florida",
    stateAbbr: "FL",
    city: "Fort Lauderdale",
    citySlug: "fort-lauderdale",
    lat: 26.1224,
    lng: -80.1373,
    phone: "1-866-308-2640",
    serviceRadius: "50 miles",
    surroundingCities: [
      "Pompano Beach",
      "Hollywood",
      "Deerfield Beach",
      "Plantation",
      "Weston",
    ],
    licenseNumber: "CCC-1332875",
    heroImage: "/images/hero/fort-lauderdale.jpg",
    metaTitle: "Fort Lauderdale Roof Replacement",
    metaDescription:
      "Broward County's top roofing contractor for replacement, tile, and metal roofs. Hurricane-rated systems with lifetime warranty. Book your free estimate today.",
    headline:
      "Protect Your Home with Fort Lauderdale's Most Trusted Roofers",
    intro:
      "Fort Lauderdale's coastal climate demands roofing systems that resist wind uplift, salt spray, and extreme humidity. ProTech Roofing serves Broward County homeowners with high-wind-rated installations that meet Florida Building Code requirements. We work with premium manufacturers to offer tile, standing seam metal, and architectural shingle options that complement the area's distinctive architecture. Every project includes a detailed scope of work, transparent pricing, and our industry-leading lifetime workmanship guarantee.",
  },

  // ─── Delaware ──────────────────────────────────────────────────────
  {
    state: 'Delaware',
    stateSlug: 'delaware',
    stateAbbr: 'DE',
    city: 'Wilmington',
    citySlug: 'wilmington',
    lat: 39.7391,
    lng: -75.5398,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Newark', 'New Castle', 'Hockessin', 'Middletown'],
    licenseNumber: 'DE-RC-20451',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Wilmington, DE Roofing Contractor',
    metaDescription:
      "Wilmington's trusted roofing company for replacement, repair, and storm damage. Licensed and insured in Delaware. Free estimates available.",
    headline: "Protect Your Home with Wilmington's Most Trusted Roofers",
    intro:
      "Wilmington's location along the Delaware River means homeowners face nor'easters, heavy snow, and coastal wind patterns that stress roofing systems year after year. ProTech Roofing serves New Castle County with durable installations designed for the Mid-Atlantic climate. We specialize in architectural shingles, standing seam metal, and flat roof systems for both residential and commercial properties. Our team handles permits, insurance claims, and HOA coordination so your project stays on schedule.",
  },
  {
    state: 'Delaware',
    stateSlug: 'delaware',
    stateAbbr: 'DE',
    city: 'Dover',
    citySlug: 'dover',
    lat: 39.1582,
    lng: -75.5244,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Smyrna', 'Camden', 'Milford', 'Harrington'],
    licenseNumber: 'DE-RC-20452',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Dover, DE Roofing Services & Repair',
    metaDescription:
      'Dover roofing experts for shingle replacement, metal roofing, and storm repair. Fully insured. Get your free roofing estimate today.',
    headline: "Protect Your Home with Dover's Most Trusted Roofers",
    intro:
      "Dover's central Delaware location brings a full range of weather challenges, from summer thunderstorms to winter ice and snow. ProTech Roofing provides Kent County homeowners with roofing systems built to handle the region's variable climate. We install energy-efficient materials that reduce heating and cooling costs while standing up to seasonal storms. Our local team offers fast response times and works with your insurance provider on storm damage claims.",
  },

  // ─── Maryland ──────────────────────────────────────────────────────
  {
    state: 'Maryland',
    stateSlug: 'maryland',
    stateAbbr: 'MD',
    city: 'Baltimore',
    citySlug: 'baltimore',
    lat: 39.2904,
    lng: -76.6122,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Towson', 'Columbia', 'Ellicott City', 'Dundalk', 'Catonsville'],
    licenseNumber: 'MHIC-140231',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Baltimore Roofing Contractor - Expert Service | ProTech',
    metaDescription:
      "Baltimore's trusted roofing contractor for residential and commercial projects. Storm damage specialists. Financing and insurance support. Free inspections.",
    headline: "Protect Your Home with Baltimore's Most Trusted Roofers",
    intro:
      "Baltimore's four-season climate delivers everything from humid summers and severe thunderstorms to winter ice and snow. ProTech Roofing serves Baltimore City and County homeowners with roofing systems built for the Mid-Atlantic. Our crews understand historic rowhouse roofing as well as modern suburban installations. We work with leading manufacturers to offer architectural shingles, standing seam metal, and flat roof systems that protect your property for decades.",
  },
  {
    state: 'Maryland',
    stateSlug: 'maryland',
    stateAbbr: 'MD',
    city: 'Frederick',
    citySlug: 'frederick',
    lat: 39.4143,
    lng: -77.4105,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Hagerstown', 'Middletown', 'Thurmont', 'Brunswick'],
    licenseNumber: 'MHIC-140232',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Frederick, MD Roofing & Roof Repair',
    metaDescription:
      'Frederick roofing experts for shingle replacement, metal roofing, and storm repair. Locally trusted, fully insured. Get your free roofing estimate today.',
    headline: "Protect Your Home with Frederick's Most Trusted Roofers",
    intro:
      "Frederick's position at the base of the Catoctin Mountains means homeowners face heavy snowfall, ice damming, and spring storms that can damage even well-maintained roofs. ProTech Roofing serves Frederick County with installations designed for the region's variable mountain and valley climate. We specialize in ice-and-water shield protection, proper ventilation systems, and durable shingle and metal options that stand up to western Maryland weather.",
  },
  {
    state: 'Maryland',
    stateSlug: 'maryland',
    stateAbbr: 'MD',
    city: 'Annapolis',
    citySlug: 'annapolis',
    lat: 38.9784,
    lng: -76.4922,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Severna Park', 'Edgewater', 'Arnold', 'Crofton'],
    licenseNumber: 'MHIC-140233',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Annapolis Roofing Contractor',
    metaDescription:
      "Annapolis roofing company for replacement, repair, and coastal storm damage. Anne Arundel County's trusted roofer. Free estimates.",
    headline: "Protect Your Home with Annapolis's Most Trusted Roofers",
    intro:
      "Annapolis sits on the Chesapeake Bay, exposing roofs to salt air, nor'easters, and high humidity that accelerate wear on roofing materials. ProTech Roofing serves Anne Arundel County with marine-grade roofing systems designed for coastal conditions. We work with historic district guidelines to preserve the character of downtown homes while installing modern, high-performance roofing. Our team provides comprehensive storm damage restoration and insurance claim support for Bay-area homeowners.",
  },

  // ─── Virginia ──────────────────────────────────────────────────────
  {
    state: 'Virginia',
    stateSlug: 'virginia',
    stateAbbr: 'VA',
    city: 'Virginia Beach',
    citySlug: 'virginia-beach',
    lat: 36.8529,
    lng: -75.978,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Chesapeake', 'Suffolk', 'Hampton', 'Newport News'],
    licenseNumber: 'VA-2701-068451',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Virginia Beach Roofing Contractor',
    metaDescription:
      "Virginia Beach's trusted roofer for hurricane-rated installations, storm damage, and coastal roofing. Free estimates and financing available.",
    headline: "Protect Your Home with Virginia Beach's Most Trusted Roofers",
    intro:
      "Virginia Beach homeowners face a unique combination of hurricane-force winds, salt air exposure, and nor'easters that demand roofing systems built for coastal resilience. ProTech Roofing serves the Hampton Roads region with high-wind-rated installations and marine-resistant materials. We specialize in architectural shingles, metal roofing, and emergency storm restoration. Our team understands Virginia Beach building codes and works directly with your insurance company on storm damage claims.",
  },
  {
    state: 'Virginia',
    stateSlug: 'virginia',
    stateAbbr: 'VA',
    city: 'Richmond',
    citySlug: 'richmond',
    lat: 37.5407,
    lng: -77.436,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Henrico', 'Midlothian', 'Glen Allen', 'Mechanicsville', 'Short Pump'],
    licenseNumber: 'VA-2701-068452',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Richmond, VA Roof Replacement & Repair',
    metaDescription:
      "Richmond's top-rated roofing contractor for replacement, repair, and storm damage. Licensed, insured, and backed by a lifetime warranty. Free estimates.",
    headline: "Protect Your Home with Richmond's Most Trusted Roofers",
    intro:
      "Richmond's humid subtropical climate brings intense summer heat, powerful thunderstorms, and occasional winter ice that challenge every roof system. ProTech Roofing serves the greater Richmond metro with roofing solutions designed for Virginia's demanding weather. From historic Fan District homes to modern Short Pump developments, we provide expert installation with premium materials. Our team handles permits, insurance coordination, and thorough cleanup on every project.",
  },
  {
    state: 'Virginia',
    stateSlug: 'virginia',
    stateAbbr: 'VA',
    city: 'Norfolk',
    citySlug: 'norfolk',
    lat: 36.8508,
    lng: -76.2859,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Portsmouth', 'Chesapeake', 'Hampton', 'Virginia Beach'],
    licenseNumber: 'VA-2701-068453',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Norfolk Roofing Services & Storm Repair',
    metaDescription:
      'Norfolk roofing experts for coastal storm damage, roof replacement, and commercial roofing. Insurance claim specialists. Free inspections.',
    headline: "Protect Your Home with Norfolk's Most Trusted Roofers",
    intro:
      "Norfolk's waterfront location makes it one of the most weather-exposed cities on the East Coast, with hurricane risk, flooding, and salt air corrosion all threatening roofing systems. ProTech Roofing serves Norfolk and the surrounding Hampton Roads area with marine-rated installations built to withstand coastal conditions. We offer emergency tarping, full replacements, and insurance claim management for storm-damaged properties. Our crews are experienced with both historic Ghent-area homes and military housing communities.",
  },

  // ─── Connecticut ───────────────────────────────────────────────────
  {
    state: 'Connecticut',
    stateSlug: 'connecticut',
    stateAbbr: 'CT',
    city: 'Hartford',
    citySlug: 'hartford',
    lat: 41.7658,
    lng: -72.6734,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['West Hartford', 'Manchester', 'Glastonbury', 'Newington', 'Wethersfield'],
    licenseNumber: 'HIC-0657891',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Hartford Roofing Contractor - Expert Install | ProTech',
    metaDescription:
      "Hartford's trusted roofing contractor for replacement, repair, and snow damage. Licensed and insured in Connecticut. Free estimates.",
    headline: "Protect Your Home with Hartford's Most Trusted Roofers",
    intro:
      "Hartford homeowners face heavy snowfall, ice dams, and New England nor'easters that test every roof system. ProTech Roofing serves Hartford County with installations engineered for Connecticut's demanding winters. We specialize in ice-and-water shield protection, proper ridge ventilation, and algae-resistant shingles that perform in the region's freeze-thaw climate. Our crews work year-round and provide emergency response for storm and snow damage.",
  },
  {
    state: 'Connecticut',
    stateSlug: 'connecticut',
    stateAbbr: 'CT',
    city: 'New Haven',
    citySlug: 'new-haven',
    lat: 41.3083,
    lng: -72.9279,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Hamden', 'West Haven', 'East Haven', 'Milford', 'Branford'],
    licenseNumber: 'HIC-0657892',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'New Haven Roofing Services & Repair',
    metaDescription:
      'New Haven roofing experts for shingle replacement, metal roofing, and storm repair. Fully insured. Get your free roofing estimate today.',
    headline: "Protect Your Home with New Haven's Most Trusted Roofers",
    intro:
      "New Haven's coastal proximity and New England winters create a challenging environment for roofing systems. ProTech Roofing serves the greater New Haven area with durable installations that resist wind, snow loads, and salt air exposure. We understand the roofing needs of historic homes near the Green and modern developments throughout the suburbs. Our team provides transparent pricing, insurance claim support, and a lifetime workmanship warranty on every full replacement.",
  },
  {
    state: 'Connecticut',
    stateSlug: 'connecticut',
    stateAbbr: 'CT',
    city: 'Stamford',
    citySlug: 'stamford',
    lat: 41.0534,
    lng: -73.5387,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Greenwich', 'Norwalk', 'Darien', 'New Canaan'],
    licenseNumber: 'HIC-0657893',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Stamford, CT Roofing Contractor',
    metaDescription:
      "Stamford roofing company for premium replacement, repair, and storm damage. Fairfield County's trusted roofer. Free estimates.",
    headline: "Protect Your Home with Stamford's Most Trusted Roofers",
    intro:
      "Stamford's mix of coastal exposure and severe winter weather demands premium roofing solutions. ProTech Roofing serves Fairfield County with high-end architectural shingle, slate-look, and standing seam metal installations suited to the area's upscale properties. We work with local building departments and HOAs to ensure full code compliance. Our team handles everything from emergency storm repairs in Norwalk to complete roof replacements in Greenwich, delivering quality craftsmanship on every project.",
  },

  // ─── Pennsylvania ─────────────────────────────────────────────────
  {
    state: 'Pennsylvania',
    stateSlug: 'pennsylvania',
    stateAbbr: 'PA',
    city: 'Philadelphia',
    citySlug: 'philadelphia',
    lat: 39.9526,
    lng: -75.1652,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['King of Prussia', 'Cherry Hill', 'Norristown', 'Media', 'Conshohocken'],
    licenseNumber: 'PA-HC-089231',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Philadelphia Roofing Contractor',
    metaDescription:
      "Philadelphia's trusted roofing contractor for row homes, residential, and commercial projects. Storm damage specialists. Free inspections.",
    headline: "Protect Your Home with Philadelphia's Most Trusted Roofers",
    intro:
      "Philadelphia's dense urban landscape and four-season climate present unique roofing challenges, from flat-roof row homes in South Philly to steep-slope colonials on the Main Line. ProTech Roofing serves the entire Philadelphia metro with roofing systems built for nor'easters, heavy snow, and summer thunderstorms. We specialize in flat roof replacements, architectural shingle installations, and emergency leak repair. Our crews navigate tight city streets and coordinate with local permitting to keep your project running smoothly.",
  },
  {
    state: 'Pennsylvania',
    stateSlug: 'pennsylvania',
    stateAbbr: 'PA',
    city: 'Pittsburgh',
    citySlug: 'pittsburgh',
    lat: 40.4406,
    lng: -79.9959,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Cranberry Township', 'Bethel Park', 'Mount Lebanon', 'Monroeville'],
    licenseNumber: 'PA-HC-089232',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Pittsburgh Roof Replacement & Repair',
    metaDescription:
      "Pittsburgh's top-rated roofing contractor for steep-slope homes, storm damage, and commercial roofing. Licensed and insured. Free estimates.",
    headline: "Protect Your Home with Pittsburgh's Most Trusted Roofers",
    intro:
      "Pittsburgh's hilly terrain and harsh winters create demanding conditions for residential roofing. Steep slopes, heavy snow loads, and freeze-thaw cycles require expert installation and premium materials. ProTech Roofing serves Allegheny County with roofing systems engineered for western Pennsylvania's climate. We handle everything from historic Lawrenceville restorations to new builds in Cranberry Township, providing ice dam protection, proper ventilation, and a lifetime workmanship guarantee on every project.",
  },
  {
    state: 'Pennsylvania',
    stateSlug: 'pennsylvania',
    stateAbbr: 'PA',
    city: 'Allentown',
    citySlug: 'allentown',
    lat: 40.6084,
    lng: -75.4902,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Bethlehem', 'Easton', 'Emmaus', 'Whitehall Township'],
    licenseNumber: 'PA-HC-089233',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Allentown, PA Roofing Contractor',
    metaDescription:
      'Allentown roofing experts for shingle replacement, metal roofing, and storm repair. Lehigh Valley trusted. Free estimates.',
    headline: "Protect Your Home with Allentown's Most Trusted Roofers",
    intro:
      "The Lehigh Valley's mix of summer storms, winter snow, and aging housing stock means Allentown homeowners need a roofer who understands the region inside and out. ProTech Roofing serves Lehigh and Northampton Counties with roofing systems rated for the area's variable weather. We install premium architectural shingles, metal roofs, and flat roof systems for both residential and commercial properties. Our team provides honest assessments, competitive pricing, and responsive service throughout the greater Allentown-Bethlehem area.",
  },

  // ─── North Carolina ────────────────────────────────────────────────
  {
    state: 'North Carolina',
    stateSlug: 'north-carolina',
    stateAbbr: 'NC',
    city: 'Charlotte',
    citySlug: 'charlotte',
    lat: 35.2271,
    lng: -80.8431,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Huntersville', 'Concord', 'Matthews', 'Gastonia', 'Indian Trail'],
    licenseNumber: 'NC-GC-78231',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Roofers in Charlotte, NC · Repair & Replacement',
    metaDescription:
      "Licensed Charlotte roofing contractor specializing in roof replacement, hail damage repair, and storm restoration. Mecklenburg County crews. Free estimates · $0 down financing.",
    headline: "Protect Your Home with Charlotte's Most Trusted Roofers",
    intro:
      "Charlotte is one of the fastest-growing metro areas in the Southeast, and the roofing market reflects it — thousands of 1990s-2010s tract homes are now hitting the 20-25 year mark when asphalt shingles need attention, and severe spring hailstorms produce widespread insurance-claim activity across Mecklenburg County most years. ProTech Roofing serves the greater Charlotte metro with crews fluent in NC building codes, Mecklenburg County permitting, and the insurance documentation process that gets hail claims paid fast and fully. Whether your home is a Myers Park bungalow or a Ballantyne new-construction, we deliver lasting roofing built for North Carolina's humid subtropical climate.",
    localContent: {
      countyName: "Mecklenburg County",
      metroArea: "Greater Charlotte",
      climateChallenges:
        "Charlotte's humid subtropical climate produces a roofing-stress profile distinct from coastal Florida. The biggest threat is spring and early-summer hail: Mecklenburg County records 1-3 significant hailstorms per year, and a single severe event can damage thousands of roofs across the metro. Hot humid summers accelerate granule loss on asphalt shingles. Occasional winter ice storms (1-2 per decade) add freeze-thaw stress to roofing components. The mature tree canopy across older neighborhoods like Myers Park and Dilworth means heavy fall leaf litter that clogs gutters and traps moisture against the roof edge if not cleaned annually.",
      commonIssues: [
        "Hail damage from spring storms (1-3 significant events per year)",
        "Wind uplift from severe spring thunderstorm gusts",
        "Granule loss accelerated by hot humid summers",
        "Gutter clogs from heavy fall leaf canopy",
        "Ice damming after rare but real winter ice storms",
        "Improper attic ventilation in 1990s-2000s tract homes",
        "Aged shingles past 20 years in original Charlotte neighborhoods",
      ],
      localCodes:
        "All roof replacements in Charlotte require a permit from the Mecklenburg County or City of Charlotte building department and must comply with North Carolina building code requirements. NC code is less stringent than coastal Florida on wind fastening, but high-quality installs still use ring-shank nails and enhanced edge fastening for hail and wind resilience. Charlotte does not have a statewide windstorm-insurance discount like Florida's wind mitigation program, but most insurers offer 10-20% off for impact-resistant (Class 4) shingles.",
      seasonalConsiderations:
        "September through April is the optimal install window — outside of peak hail and storm season. After any Mecklenburg County hailstorm, schedule a no-charge inspection within 48 hours. Even if damage isn't visible from the ground, professional documentation strengthens any insurance claim and locks in your settlement before the carrier deadline (typically 12 months from event date in NC).",
      neighborhoods: [
        "Myers Park",
        "Dilworth",
        "Plaza Midwood",
        "Ballantyne",
        "SouthPark",
        "NoDa",
        "Uptown",
        "Steele Creek",
        "University City",
        "Lake Norman",
        "Huntersville",
        "Matthews",
      ],
    },
    localFaqs: [
      {
        question: "How can I tell if my Charlotte roof has hail damage?",
        answer:
          "Hail damage on asphalt shingles shows as small circular bruises or missing granules, often concentrated on slopes facing the storm direction. From the ground it's frequently invisible — most homeowners only notice when a leak starts months later. After any Mecklenburg County hailstorm, schedule a no-charge inspection within 48 hours. If we document damage, you have a much stronger insurance claim than waiting until leaks appear.",
      },
      {
        question: "Are impact-resistant shingles worth it in Charlotte?",
        answer:
          "Yes. Class 4 impact-resistant shingles cost 10-15% more upfront but most major NC home insurers (State Farm, Allstate, Erie, Travelers, USAA) offer 10-20% windstorm-coverage discounts that pay back the premium within 5-7 years. Given Mecklenburg County's hail frequency, the resilience alone is worth the upgrade — Class 4 shingles survive most hailstorms that would total a standard shingle roof.",
      },
      {
        question: "How long does an insurance hail claim take in Charlotte?",
        answer:
          "From initial filing to install, a well-documented Mecklenburg County hail claim typically takes 30-60 days. The biggest delay is the adjuster site visit, which ranges from 1-3 weeks after filing depending on claim volume. We meet the adjuster on-site, provide our documentation, and handle the supplemental claim process for any items the adjuster initially misses (drip edge, ice and water shield, decking, code upgrades) — which typically adds 15-30% to the final settlement.",
      },
    ],
  },
  {
    state: 'North Carolina',
    stateSlug: 'north-carolina',
    stateAbbr: 'NC',
    city: 'Raleigh',
    citySlug: 'raleigh',
    lat: 35.7796,
    lng: -78.6382,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Durham', 'Cary', 'Apex', 'Wake Forest', 'Garner'],
    licenseNumber: 'NC-GC-78232',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Roofers in Raleigh, NC · Repair & Replacement',
    metaDescription:
      "Licensed Raleigh roofing contractor specializing in roof replacement, hail damage repair, and storm restoration. Wake County crews. Free estimates · $0 down financing.",
    headline: "Protect Your Home with Raleigh's Most Trusted Roofers",
    intro:
      "Raleigh is at the center of one of the fastest-growing metro areas in the country — the Research Triangle has added more than 100,000 homes in the last decade alone, and a wave of 1990s-2000s tract construction is now hitting the 20-25 year mark where asphalt shingles need attention. Spring hail events and the trailing edge of hurricane season add to the workload. ProTech Roofing serves Wake County and the surrounding Triangle with crews fluent in NC building codes, Wake County and Durham permitting, and the insurance documentation process that gets hail claims paid fast and fully.",
    localContent: {
      countyName: "Wake County",
      metroArea: "Research Triangle",
      climateChallenges:
        "Raleigh's roofing market faces a layered set of climate stresses. Spring and early-summer hailstorms are the most frequent damage source — Wake County records 1-3 significant hail events per year. Hurricane season (September-October) brings occasional remnant storms from systems that made landfall on the Carolina coast and tracked inland. Hot humid summers accelerate asphalt shingle granule loss. Mature oak and pine canopy in older neighborhoods (Five Points, Cameron Village, North Hills) drops heavy fall leaf litter that clogs gutters if not cleaned annually. Occasional winter ice storms (1-2 per decade) test flashing and decking under freeze-thaw cycles.",
      commonIssues: [
        "Hail damage from spring storms (1-3 significant events per year)",
        "Hurricane remnant wind events (September-October)",
        "Granule loss accelerated by hot humid summers",
        "Heavy gutter debris from oak and pine canopy",
        "Aged asphalt shingles in 1990s-2000s Triangle tract homes",
        "Ice damming after rare but real winter ice storms",
      ],
      localCodes:
        "All roof replacements in Raleigh require a permit from the Wake County or City of Raleigh building department and must comply with North Carolina building code. NC code is less stringent than coastal Florida on wind fastening, but high-quality installs still use ring-shank nails and enhanced edge fastening for hail and wind resilience. Most major NC home insurers offer 10-20% off windstorm coverage for impact-resistant (Class 4) shingles.",
      seasonalConsiderations:
        "September through April is the optimal install window — outside of peak hail and storm season. After any Wake County or Durham hailstorm, schedule a no-charge inspection within 48 hours. NC insurance carriers typically allow 12 months from the event date to file a claim, so documentation now protects your option to file later if leaks emerge.",
      neighborhoods: [
        "North Hills",
        "Cameron Village",
        "Five Points",
        "Brier Creek",
        "North Raleigh",
        "Downtown Raleigh",
        "Mordecai",
        "Hayes Barton",
        "Cary",
        "Apex",
        "Wake Forest",
        "Holly Springs",
      ],
    },
    localFaqs: [
      {
        question: "How can I tell if my Raleigh roof has hail damage?",
        answer:
          "Hail damage on asphalt shingles shows as small circular bruises or missing granules, often concentrated on slopes facing the storm direction. From the ground it's frequently invisible — most homeowners only notice when a leak starts months later. After any Wake County hailstorm, schedule a no-charge inspection within 48 hours. Documented damage is much easier to convert into an insurance claim than damage discovered after leaks appear.",
      },
      {
        question: "Are impact-resistant shingles worth it in Raleigh?",
        answer:
          "Yes. Class 4 impact-resistant shingles cost 10-15% more upfront but most major NC insurers (State Farm, Allstate, Erie, Travelers, USAA) offer 10-20% windstorm-coverage discounts that pay back the premium within 5-7 years. Given the Triangle's hail frequency, the resilience alone is worth the upgrade — Class 4 shingles survive most hailstorms that would total a standard shingle roof.",
      },
    ],
  },
  {
    state: 'North Carolina',
    stateSlug: 'north-carolina',
    stateAbbr: 'NC',
    city: 'Greensboro',
    citySlug: 'greensboro',
    lat: 36.0726,
    lng: -79.792,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['High Point', 'Burlington', 'Winston-Salem', 'Kernersville'],
    licenseNumber: 'NC-GC-78233',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Greensboro Roofing Services & Repair',
    metaDescription:
      'Greensboro roofing experts for shingle replacement, metal roofing, and storm repair. Fully insured. Get your free roofing estimate today.',
    headline: "Protect Your Home with Greensboro's Most Trusted Roofers",
    intro:
      "Greensboro sits in the heart of the Piedmont Triad, where strong thunderstorms, hail events, and humid conditions challenge roofing systems year-round. ProTech Roofing serves Guilford County and surrounding communities with durable roofing installations backed by industry-leading warranties. We provide honest assessments, competitive pricing, and full insurance claim support. Our local team responds quickly to storm damage and delivers quality workmanship on every project.",
  },

  // ─── South Carolina ────────────────────────────────────────────────
  {
    state: 'South Carolina',
    stateSlug: 'south-carolina',
    stateAbbr: 'SC',
    city: 'Charleston',
    citySlug: 'charleston',
    lat: 32.7765,
    lng: -79.9311,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Mount Pleasant', 'Summerville', 'North Charleston', 'Goose Creek'],
    licenseNumber: 'SC-RBC-42871',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Charleston Roofing Contractor - Coastal Expert | ProTech',
    metaDescription:
      "Charleston's trusted roofing contractor for hurricane-rated installations, historic homes, and storm damage. Free estimates.",
    headline: "Protect Your Home with Charleston's Most Trusted Roofers",
    intro:
      "Charleston's coastal climate brings hurricane-force winds, salt air corrosion, and intense summer heat that demand roofing systems built for the Lowcountry. ProTech Roofing installs high-wind-rated systems that meet South Carolina's coastal building codes. We specialize in preserving the character of historic Charleston homes while delivering modern performance. From downtown peninsula properties to growing communities in Mount Pleasant, we protect your investment with premium materials and expert craftsmanship.",
  },
  {
    state: 'South Carolina',
    stateSlug: 'south-carolina',
    stateAbbr: 'SC',
    city: 'Columbia',
    citySlug: 'columbia',
    lat: 34.0007,
    lng: -81.0348,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Lexington', 'Irmo', 'Blythewood', 'Cayce', 'West Columbia'],
    licenseNumber: 'SC-RBC-42872',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Columbia, SC Roof Replacement & Repair',
    metaDescription:
      "Columbia's top-rated roofing contractor for replacement, storm damage, and commercial roofing. Licensed and insured. Free estimates.",
    headline: "Protect Your Home with Columbia's Most Trusted Roofers",
    intro:
      "Columbia's position in the heart of South Carolina means homeowners face extreme summer heat, severe thunderstorms, and occasional tropical storm remnants. ProTech Roofing serves the Midlands with energy-efficient roofing systems that reduce cooling costs while withstanding the region's weather patterns. We provide free inspections, full insurance claim support, and a lifetime workmanship warranty on all replacements. Our local team delivers fast turnaround and thorough cleanup on every project.",
  },
  {
    state: 'South Carolina',
    stateSlug: 'south-carolina',
    stateAbbr: 'SC',
    city: 'Greenville',
    citySlug: 'greenville',
    lat: 34.8526,
    lng: -82.394,
    phone: '1-866-308-2640',
    serviceRadius: '50 miles',
    surroundingCities: ['Spartanburg', 'Simpsonville', 'Mauldin', 'Greer', 'Easley'],
    licenseNumber: 'SC-RBC-42873',
    heroImage: '/images/hero/default.jpg',
    metaTitle: 'Greenville, SC Roofing Contractor',
    metaDescription:
      'Greenville roofing experts for replacement, repair, and storm damage. Upstate SC trusted. Free estimates and financing.',
    headline: "Protect Your Home with Greenville's Most Trusted Roofers",
    intro:
      "Greenville's booming Upstate economy and growing neighborhoods mean more roofs need expert attention every year. ProTech Roofing serves the Greenville-Spartanburg area with roofing systems designed for the foothills climate, handling everything from hail damage restoration to full replacements. We install premium architectural shingles, metal roofing, and commercial flat roof systems. Our team understands local building codes and provides transparent pricing, insurance claim support, and a lifetime workmanship guarantee.",
  },
];

export function getLocationBySlug(
  stateSlug: string,
  citySlug: string
): Location | undefined {
  return locations.find(
    (loc) => loc.stateSlug === stateSlug && loc.citySlug === citySlug
  );
}

export function getLocationsByState(stateSlug: string): Location[] {
  return locations.filter((loc) => loc.stateSlug === stateSlug);
}

export function getAllStates(): {
  state: string;
  stateSlug: string;
  stateAbbr: string;
}[] {
  const seen = new Set<string>();
  const states: { state: string; stateSlug: string; stateAbbr: string }[] = [];

  for (const loc of locations) {
    if (!seen.has(loc.stateSlug)) {
      seen.add(loc.stateSlug);
      states.push({
        state: loc.state,
        stateSlug: loc.stateSlug,
        stateAbbr: loc.stateAbbr,
      });
    }
  }

  return states;
}

export function getAllLocations(): Location[] {
  return locations;
}

export function getCityStateSlug(location: Location): string {
  return `${location.citySlug}-${location.stateAbbr.toLowerCase()}`;
}

export function getLocationByCityStateSlug(slug: string): Location | undefined {
  return locations.find(
    (loc) => `${loc.citySlug}-${loc.stateAbbr.toLowerCase()}` === slug
  );
}

export const PILOT_CITY_STATE_SLUGS = [
  'tampa-fl',
  'charlotte-nc',
  'jacksonville-fl',
] as const;
