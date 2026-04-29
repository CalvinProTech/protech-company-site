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
    metaTitle: "Roof Replacement & Repair in Tampa | ProTech Roofing",
    metaDescription:
      "Tampa's top-rated roofing contractor for replacement, repair, and storm damage. Licensed, insured, and backed by a lifetime warranty. Get your free estimate today.",
    headline: "Protect Your Home with Tampa's Most Trusted Roofers",
    intro:
      "Tampa homeowners face unique roofing challenges, from intense summer storms to year-round UV exposure that degrades shingles faster than the national average. ProTech Roofing has served the Tampa Bay area for over a decade, completing more than 1,000 residential and commercial projects. Our crews understand the local building codes, HOA requirements, and insurance processes that keep your project on track. Whether you need a full replacement or emergency leak repair, we deliver lasting results backed by our lifetime workmanship warranty.",
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
    metaTitle: "Fort Lauderdale Roof Replacement | ProTech Roofing",
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
    metaTitle: 'Wilmington, DE Roofing Contractor | ProTech Roofing',
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
    metaTitle: 'Dover, DE Roofing Services & Repair | ProTech Roofing',
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
    metaTitle: 'Frederick, MD Roofing & Roof Repair | ProTech Roofing',
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
    metaTitle: 'Annapolis Roofing Contractor | ProTech Roofing',
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
    metaTitle: 'Virginia Beach Roofing Contractor | ProTech Roofing',
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
    metaTitle: 'Richmond, VA Roof Replacement & Repair | ProTech Roofing',
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
    metaTitle: 'Norfolk Roofing Services & Storm Repair | ProTech Roofing',
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
    metaTitle: 'New Haven Roofing Services & Repair | ProTech Roofing',
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
    metaTitle: 'Stamford, CT Roofing Contractor | ProTech Roofing',
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
    metaTitle: 'Philadelphia Roofing Contractor | ProTech Roofing',
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
    metaTitle: 'Pittsburgh Roof Replacement & Repair | ProTech Roofing',
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
    metaTitle: 'Allentown, PA Roofing Contractor | ProTech Roofing',
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
    metaTitle: 'Charlotte Roofing Contractor - Expert Install | ProTech',
    metaDescription:
      "Charlotte's trusted roofing contractor for replacement, repair, and storm damage. Licensed, insured, and backed by a lifetime warranty. Free estimates.",
    headline: "Protect Your Home with Charlotte's Most Trusted Roofers",
    intro:
      "Charlotte's rapid growth and severe spring storms make quality roofing essential for every homeowner in the region. ProTech Roofing serves the greater Charlotte metro with roofing systems designed for North Carolina's humid subtropical climate. We handle hail damage restoration, full replacements, and commercial installations across Mecklenburg County. Our team provides free inspections, works with your insurance company, and delivers lasting results backed by a lifetime workmanship warranty.",
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
    metaTitle: 'Raleigh, NC Roof Replacement & Repair | ProTech Roofing',
    metaDescription:
      "Raleigh roofing experts for replacement, storm damage, and commercial roofing. Triangle area's trusted contractor. Free inspections.",
    headline: "Protect Your Home with Raleigh's Most Trusted Roofers",
    intro:
      "The Research Triangle's booming housing market means thousands of new and aging roofs need expert attention every year. ProTech Roofing serves Wake County and surrounding areas with roofing systems built for North Carolina's hot summers, hurricane remnants, and occasional ice storms. From downtown Raleigh bungalows to sprawling Cary developments, our crews deliver quality installation with premium materials and transparent pricing.",
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
    metaTitle: 'Greensboro Roofing Services & Repair | ProTech Roofing',
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
    metaTitle: 'Columbia, SC Roof Replacement & Repair | ProTech Roofing',
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
    metaTitle: 'Greenville, SC Roofing Contractor | ProTech Roofing',
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
