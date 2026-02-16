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
    phone: "1-800-555-ROOF",
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
    metaTitle: "Roof Replacement & Repair in Tampa | ProTech Roofing",
    metaDescription:
      "Tampa's top-rated roofing contractor for replacement, repair, and storm damage. Licensed, insured, and backed by a lifetime warranty. Get your free estimate today.",
    headline: "Protect Your Home with Tampa's Most Trusted Roofers",
    intro:
      "Tampa homeowners face unique roofing challenges, from intense summer storms to year-round UV exposure that degrades shingles faster than the national average. ProTech Roofing has served the Tampa Bay area for over a decade, completing more than 2,000 residential and commercial projects. Our crews understand the local building codes, HOA requirements, and insurance processes that keep your project on track. Whether you need a full replacement or emergency leak repair, we deliver lasting results backed by our lifetime workmanship warranty.",
  },
  {
    state: "Florida",
    stateSlug: "florida",
    stateAbbr: "FL",
    city: "Orlando",
    citySlug: "orlando",
    lat: 28.5383,
    lng: -81.3792,
    phone: "1-800-555-ROOF",
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
    metaTitle: "Roofing Contractor in Orlando, FL | ProTech Roofing",
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
    phone: "1-800-555-ROOF",
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
    phone: "1-800-555-ROOF",
    serviceRadius: "50 miles",
    surroundingCities: [
      "St. Augustine",
      "Orange Park",
      "Ponte Vedra Beach",
      "Fernandina Beach",
    ],
    licenseNumber: "CCC-1332874",
    heroImage: "/images/hero/jacksonville.jpg",
    metaTitle: "Jacksonville Roofing Services & Repair | ProTech Roofing",
    metaDescription:
      "Jacksonville's trusted roofing company for shingle, metal, and flat roof systems. Storm damage specialists with insurance claim support. Get a free quote.",
    headline:
      "Protect Your Home with Jacksonville's Most Trusted Roofers",
    intro:
      "As the largest city by area in the continental U.S., Jacksonville presents a wide range of roofing needs, from coastal homes near Ponte Vedra to suburban neighborhoods in Mandarin and the Westside. ProTech Roofing has built a reputation across Duval County for quality materials, honest pricing, and fast turnaround. We are experienced with nor'easters, tropical storms, and the heavy afternoon rains that test every roof. Our team provides full-service solutions including insurance claim assistance for storm-damaged properties.",
  },
  {
    state: "Florida",
    stateSlug: "florida",
    stateAbbr: "FL",
    city: "Fort Lauderdale",
    citySlug: "fort-lauderdale",
    lat: 26.1224,
    lng: -80.1373,
    phone: "1-800-555-ROOF",
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
    metaTitle: "Fort Lauderdale Roof Replacement | ProTech Roofing",
    metaDescription:
      "Broward County's top roofing contractor for replacement, tile, and metal roofs. Hurricane-rated systems with lifetime warranty. Book your free estimate today.",
    headline:
      "Protect Your Home with Fort Lauderdale's Most Trusted Roofers",
    intro:
      "Fort Lauderdale's coastal climate demands roofing systems that resist wind uplift, salt spray, and extreme humidity. ProTech Roofing serves Broward County homeowners with high-wind-rated installations that meet Florida Building Code requirements. We work with premium manufacturers to offer tile, standing seam metal, and architectural shingle options that complement the area's distinctive architecture. Every project includes a detailed scope of work, transparent pricing, and our industry-leading lifetime workmanship guarantee.",
  },

  // ─── Texas ──────────────────────────────────────────────────────────
  {
    state: "Texas",
    stateSlug: "texas",
    stateAbbr: "TX",
    city: "Dallas",
    citySlug: "dallas",
    lat: 32.7767,
    lng: -96.797,
    phone: "1-800-555-ROOF",
    serviceRadius: "50 miles",
    surroundingCities: [
      "Plano",
      "Frisco",
      "Arlington",
      "Irving",
      "McKinney",
    ],
    licenseNumber: "TXRC-204871",
    heroImage: "/images/hero/dallas.jpg",
    metaTitle: "Dallas Roofing Contractor - Hail & Storm | ProTech",
    metaDescription:
      "Dallas roofing experts for hail damage repair, roof replacement, and commercial roofing. Insurance claim specialists. Schedule your free inspection today.",
    headline: "Protect Your Home with Dallas's Most Trusted Roofers",
    intro:
      "The Dallas-Fort Worth metroplex sits in the heart of Hail Alley, where severe spring storms routinely damage thousands of roofs each season. ProTech Roofing is a preferred contractor for major insurance carriers, helping homeowners navigate claims and restore their roofs quickly. We install impact-resistant shingles rated for the region's Class 4 hailstorms and 80-mph straight-line winds. From Highland Park to Frisco, our crews deliver the quality and speed that North Texas homeowners expect.",
  },
  {
    state: "Texas",
    stateSlug: "texas",
    stateAbbr: "TX",
    city: "Houston",
    citySlug: "houston",
    lat: 29.7604,
    lng: -95.3698,
    phone: "1-800-555-ROOF",
    serviceRadius: "50 miles",
    surroundingCities: [
      "Sugar Land",
      "Katy",
      "The Woodlands",
      "Pearland",
      "Pasadena",
    ],
    licenseNumber: "TXRC-204872",
    heroImage: "/images/hero/houston.jpg",
    metaTitle: "Houston Roof Replacement & Repair | ProTech Roofing",
    metaDescription:
      "Houston's trusted roofing company for hurricane repair, full replacement, and commercial flat roofs. Financing available. Get your free estimate now.",
    headline: "Protect Your Home with Houston's Most Trusted Roofers",
    intro:
      "Houston's combination of hurricanes, heavy rainfall, and extreme summer heat puts extraordinary stress on residential and commercial roofs alike. ProTech Roofing has helped Greater Houston recover from multiple major storm seasons, including hurricane-related wind and flood damage. Our team uses advanced moisture detection to identify hidden leaks before they cause mold or structural issues. With flexible financing and insurance claim support, we make the roof replacement process straightforward from start to finish.",
  },
  {
    state: "Texas",
    stateSlug: "texas",
    stateAbbr: "TX",
    city: "San Antonio",
    citySlug: "san-antonio",
    lat: 29.4241,
    lng: -98.4936,
    phone: "1-800-555-ROOF",
    serviceRadius: "50 miles",
    surroundingCities: [
      "New Braunfels",
      "Boerne",
      "Schertz",
      "Helotes",
      "Converse",
    ],
    licenseNumber: "TXRC-204873",
    heroImage: "/images/hero/san-antonio.jpg",
    metaTitle: "San Antonio Roofing Company - Expert Install | ProTech",
    metaDescription:
      "San Antonio roofing contractor for replacement, repair, and hail damage. Military and senior discounts available. Call for your free roof assessment today.",
    headline:
      "Protect Your Home with San Antonio's Most Trusted Roofers",
    intro:
      "San Antonio homeowners face a punishing combination of hailstorms, triple-digit summer temperatures, and occasional flash flooding that can compromise any roof system. ProTech Roofing brings proven expertise to the Alamo City market, installing energy-efficient roofing systems that reduce cooling costs by up to 25 percent. We are proud to offer military and senior discounts to honor the community that surrounds Joint Base San Antonio. From stone-coated steel to cool-roof shingles, we match the right product to your home and budget.",
  },
  {
    state: "Texas",
    stateSlug: "texas",
    stateAbbr: "TX",
    city: "Austin",
    citySlug: "austin",
    lat: 30.2672,
    lng: -97.7431,
    phone: "1-800-555-ROOF",
    serviceRadius: "50 miles",
    surroundingCities: [
      "Round Rock",
      "Cedar Park",
      "Georgetown",
      "Pflugerville",
      "Lakeway",
    ],
    licenseNumber: "TXRC-204874",
    heroImage: "/images/hero/austin.jpg",
    metaTitle: "Austin Roofing Experts - Eco-Friendly Options | ProTech",
    metaDescription:
      "Austin's preferred roofing contractor for metal roofs, cool-roof shingles, and solar-ready installations. Energy Star certified. Get a free estimate today.",
    headline: "Protect Your Home with Austin's Most Trusted Roofers",
    intro:
      "Austin's booming growth means thousands of new and aging roofs need expert attention every year, from downtown bungalows to sprawling Hill Country estates. ProTech Roofing specializes in energy-efficient and eco-friendly roofing systems that align with Austin's sustainability values. We offer metal roofs, reflective shingles, and solar-ready installations that lower utility bills and reduce environmental impact. Our local crews understand Travis County permitting, HOA guidelines, and the unique challenges of building on limestone terrain.",
  },
  {
    state: "Texas",
    stateSlug: "texas",
    stateAbbr: "TX",
    city: "Fort Worth",
    citySlug: "fort-worth",
    lat: 32.7555,
    lng: -97.3308,
    phone: "1-800-555-ROOF",
    serviceRadius: "50 miles",
    surroundingCities: [
      "Weatherford",
      "Burleson",
      "Keller",
      "Mansfield",
      "Benbrook",
    ],
    licenseNumber: "TXRC-204875",
    heroImage: "/images/hero/fort-worth.jpg",
    metaTitle: "Fort Worth Roofing & Hail Damage Repair | ProTech",
    metaDescription:
      "Fort Worth roofing contractor trusted for hail damage restoration, full replacement, and metal roof installation. Insurance claims handled. Free inspections.",
    headline:
      "Protect Your Home with Fort Worth's Most Trusted Roofers",
    intro:
      "Fort Worth sits on the western edge of the DFW metroplex where open plains amplify hail and wind damage during spring storm season. ProTech Roofing is one of Tarrant County's most active storm restoration contractors, with crews mobilized within 24 hours of major weather events. We install Class 4 impact-resistant shingles that many insurers reward with premium discounts. From the Historic Stockyards district to the growing neighborhoods of Walsh Ranch, we deliver roofing solutions that stand up to North Texas weather.",
  },

  // ─── Kentucky ───────────────────────────────────────────────────────
  {
    state: "Kentucky",
    stateSlug: "kentucky",
    stateAbbr: "KY",
    city: "Louisville",
    citySlug: "louisville",
    lat: 38.2527,
    lng: -85.7585,
    phone: "1-800-555-ROOF",
    serviceRadius: "50 miles",
    surroundingCities: [
      "Jeffersontown",
      "Elizabethtown",
      "Shepherdsville",
      "New Albany",
      "Bardstown",
    ],
    licenseNumber: "KY-ROOF-88231",
    heroImage: "/images/hero/louisville.jpg",
    metaTitle: "Louisville Roofing Contractor - Quality Install | ProTech",
    metaDescription:
      "Louisville's trusted roofer for replacement, repair, and storm damage. Architectural shingles, metal roofs, and financing. Schedule your free inspection today.",
    headline:
      "Protect Your Home with Louisville's Most Trusted Roofers",
    intro:
      "Louisville's four-season climate subjects roofs to freeze-thaw cycles in winter, severe thunderstorms in spring, and humid summers that encourage algae and moss growth. ProTech Roofing understands the specific demands of Jefferson County homes, from historic Highlands bungalows to newer subdivisions in the East End. We install algae-resistant architectural shingles and standing seam metal roofs engineered for Kentucky's temperature swings. Our team handles everything from initial inspection to final debris removal, ensuring a hassle-free experience.",
  },
  {
    state: "Kentucky",
    stateSlug: "kentucky",
    stateAbbr: "KY",
    city: "Lexington",
    citySlug: "lexington",
    lat: 38.0406,
    lng: -84.5037,
    phone: "1-800-555-ROOF",
    serviceRadius: "50 miles",
    surroundingCities: [
      "Georgetown",
      "Nicholasville",
      "Richmond",
      "Winchester",
      "Versailles",
    ],
    licenseNumber: "KY-ROOF-88232",
    heroImage: "/images/hero/lexington.jpg",
    metaTitle: "Lexington, KY Roofing & Roof Repair | ProTech Roofing",
    metaDescription:
      "Lexington roofing experts for shingle replacement, metal roofing, and storm repair. Locally owned, fully insured. Get your free roofing estimate today.",
    headline:
      "Protect Your Home with Lexington's Most Trusted Roofers",
    intro:
      "Lexington's mix of historic properties and modern developments creates a diverse roofing landscape that requires specialized knowledge. ProTech Roofing serves Fayette County and the surrounding Bluegrass region with roofing systems designed to handle ice dams, wind-driven rain, and Kentucky's unpredictable spring storms. We work closely with local historic preservation guidelines when restoring older homes. Our commitment to quality materials and clean job sites has made us a top-rated contractor throughout Central Kentucky.",
  },

  // ─── Ohio ───────────────────────────────────────────────────────────
  {
    state: "Ohio",
    stateSlug: "ohio",
    stateAbbr: "OH",
    city: "Columbus",
    citySlug: "columbus",
    lat: 39.9612,
    lng: -82.9988,
    phone: "1-800-555-ROOF",
    serviceRadius: "50 miles",
    surroundingCities: [
      "Dublin",
      "Westerville",
      "Grove City",
      "Reynoldsburg",
      "Hilliard",
    ],
    licenseNumber: "OH-RC-103561",
    heroImage: "/images/hero/columbus.jpg",
    metaTitle: "Columbus, OH Roof Replacement & Repair | ProTech Roofing",
    metaDescription:
      "Columbus roofing contractor for replacement, storm damage, and commercial roofs. Licensed, insured, and BBB accredited. Get a free estimate today.",
    headline:
      "Protect Your Home with Columbus's Most Trusted Roofers",
    intro:
      "Columbus is Ohio's fastest-growing city, and its expanding housing market means thousands of roofs need professional attention every year. ProTech Roofing serves Franklin County homeowners with roofing systems rated for heavy snow loads, ice damming, and the severe thunderstorms that roll through Central Ohio each spring. We use infrared scanning to detect moisture trapped beneath shingles before it causes structural damage. From German Village restorations to new builds in New Albany, we deliver results that last.",
  },
  {
    state: "Ohio",
    stateSlug: "ohio",
    stateAbbr: "OH",
    city: "Cincinnati",
    citySlug: "cincinnati",
    lat: 39.1031,
    lng: -84.512,
    phone: "1-800-555-ROOF",
    serviceRadius: "50 miles",
    surroundingCities: [
      "Mason",
      "West Chester",
      "Fairfield",
      "Florence",
      "Covington",
    ],
    licenseNumber: "OH-RC-103562",
    heroImage: "/images/hero/cincinnati.jpg",
    metaTitle: "Cincinnati Roofing Company - Expert Service | ProTech",
    metaDescription:
      "Cincinnati's trusted roofing contractor for residential and commercial projects. Steep-slope specialists. Financing and insurance support. Free inspections.",
    headline:
      "Protect Your Home with Cincinnati's Most Trusted Roofers",
    intro:
      "Cincinnati's hilly terrain and older housing stock create unique roofing challenges, from steep-slope installations on Mount Adams to flat commercial roofs in the West End. ProTech Roofing has the equipment and expertise to handle any pitch and any material. Our crews are trained in OSHA safety standards for high-angle work and use engineered scaffolding to protect your property. We serve Hamilton County and the surrounding tri-state area with honest assessments, competitive pricing, and a no-leak guarantee.",
  },
  {
    state: "Ohio",
    stateSlug: "ohio",
    stateAbbr: "OH",
    city: "Cleveland",
    citySlug: "cleveland",
    lat: 41.4993,
    lng: -81.6944,
    phone: "1-800-555-ROOF",
    serviceRadius: "50 miles",
    surroundingCities: [
      "Lakewood",
      "Parma",
      "Strongsville",
      "Mentor",
      "Elyria",
    ],
    licenseNumber: "OH-RC-103563",
    heroImage: "/images/hero/cleveland.jpg",
    metaTitle: "Cleveland Roofing & Snow Damage Repair | ProTech Roofing",
    metaDescription:
      "Cleveland roofing experts for ice dam prevention, snow load reinforcement, and full roof replacement. Lake-effect rated systems. Free estimates available.",
    headline:
      "Protect Your Home with Cleveland's Most Trusted Roofers",
    intro:
      "Cleveland's lake-effect snowfall, freezing rain, and harsh winter winds demand roofing systems built for extreme conditions. ProTech Roofing serves Cuyahoga County with ice-and-water-shielded installations, proper attic ventilation, and snow guard systems that prevent dangerous ice dams. We understand the challenges of maintaining both the city's historic homes in Tremont and Ohio City and the newer suburbs along the I-271 corridor. Our winter-weather expertise ensures your roof performs year after year, no matter what Lake Erie throws at it.",
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
