export interface CityServiceData {
  cityStateSlug: string;
  serviceSlug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  faqs: { question: string; answer: string }[];
}

export const CITY_SERVICE_SLUGS = [
  'roof-replacement',
  'roof-repair',
  'storm-damage',
  'insurance-claims',
  'gutters-siding',
] as const;

const cityServiceData: CityServiceData[] = [
  // ─── Tampa, FL ──────────────────────────────────────────────────────
  {
    cityStateSlug: 'tampa-fl',
    serviceSlug: 'roof-replacement',
    metaTitle: 'Roof Replacement in Tampa, FL',
    metaDescription:
      'Tampa roof replacement with lifetime warranty. GAF & Owens Corning shingles rated for Florida hurricanes. Free inspection — call today.',
    h1: 'Tampa Roof Replacement Experts',
    intro:
      'Tampa homeowners know that a roof replacement is not just a cosmetic upgrade — it is the single most important investment you can make to protect your family from Florida\'s punishing storm season. The Tampa Bay area averages more lightning strikes per year than any metro in the United States, and the combination of wind-driven rain, intense UV exposure, and salt air from the Gulf accelerates shingle deterioration far beyond national averages. ProTech Roofing has completed over 500 roof replacements across Hillsborough County, from Bayshore Boulevard waterfront homes to suburban neighborhoods in New Tampa and Westchase. Our crews install GAF Timberline HDZ and Owens Corning Duration shingles with hurricane-rated underlayment and reinforced drip edge systems designed to withstand Category 4 winds. Every Tampa project includes a full decking inspection, proper attic ventilation assessment, and meticulous flashing work around penetrations. We pull all City of Tampa permits, schedule inspections, and handle HOA approvals so you never have to take a day off work. Financing options start at $0 down with terms up to 144 months, and our lifetime workmanship warranty means your investment is protected for as long as you own your home.',
    faqs: [
      {
        question: 'How much does a roof replacement cost in Tampa, FL?',
        answer:
          'Tampa roof replacements typically range from $9,000 to $28,000 depending on the size of your home, materials selected, and roof complexity. Tile and metal roofs cost more upfront but last significantly longer in Florida\'s climate. We provide transparent, itemized estimates with no hidden fees.',
      },
      {
        question: 'What roofing materials work best in Tampa\'s climate?',
        answer:
          'For Tampa homes, we recommend impact-resistant architectural shingles rated for 130 mph winds, standing seam metal roofing for superior hurricane resistance, or concrete tile for Spanish-style homes. All options include reflective technology to reduce cooling costs in Tampa\'s heat.',
      },
      {
        question: 'How long does a roof replacement take in Tampa?',
        answer:
          'Most Tampa residential roof replacements are completed in 1 to 2 days. We schedule around Florida\'s afternoon storm pattern, starting early to maximize dry working hours. Larger or more complex homes may require up to 3 days.',
      },
      {
        question: 'Do I need a permit to replace my roof in Tampa?',
        answer:
          'Yes, the City of Tampa requires a building permit for all roof replacements. ProTech Roofing handles the entire permitting process, including application, fee payment, and scheduling the final inspection with the Hillsborough County building department.',
      },
      {
        question: 'Will a new roof lower my homeowner\'s insurance in Tampa?',
        answer:
          'Yes, most Florida insurers offer significant premium reductions for new roofs, especially those with impact-resistant materials and hurricane clips. Many Tampa homeowners save $500 to $2,000 per year on insurance after a roof replacement with ProTech Roofing.',
      },
    ],
  },
  {
    cityStateSlug: 'tampa-fl',
    serviceSlug: 'roof-repair',
    metaTitle: 'Roof Repair in Tampa, FL | Fast Leak Fixes | ProTech',
    metaDescription:
      'Same-day roof repair in Tampa. Stop leaks, fix storm damage & prevent water intrusion. 24hr emergency service. Call for a free assessment.',
    h1: 'Fast, Reliable Roof Repair in Tampa',
    intro:
      'A small roof leak in Tampa can escalate into thousands of dollars in water damage, mold remediation, and drywall replacement within days thanks to the region\'s high humidity and frequent afternoon storms. ProTech Roofing provides fast, professional roof repair services throughout Hillsborough County, using thermal imaging and moisture detection equipment to pinpoint the exact source of leaks that are invisible to the naked eye. Whether you have wind-lifted shingles from a passing thunderstorm, cracked tile from debris impact, or deteriorating flashing around a skylight, our technicians address the root cause rather than applying temporary patches that fail in the next storm. We carry matching materials on our trucks so most repairs are completed in a single visit. Emergency tarping is available within hours for active leaks during Tampa\'s rainy season, protecting your interior from further damage while we plan the permanent repair. Every repair comes with a written workmanship warranty, and we document the work with before-and-after photos for your records and potential insurance claims.',
    faqs: [
      {
        question: 'How quickly can you repair a roof leak in Tampa?',
        answer:
          'We offer same-day roof repair for most Tampa residents. Emergency tarping for active leaks is available within 2 to 4 hours of your call. Permanent repairs are typically completed within 24 to 48 hours depending on materials and weather conditions.',
      },
      {
        question: 'How much does a typical roof repair cost in Tampa?',
        answer:
          'Minor repairs such as replacing shingles or resealing flashing typically cost $300 to $1,000 in Tampa. More extensive repairs involving decking replacement or large sections range from $1,000 to $4,000. We provide exact pricing before starting any work.',
      },
      {
        question: 'Should I repair or replace my Tampa roof?',
        answer:
          'If damage is limited to a small area and your roof is under 15 years old, repair is usually the best option. However, if your roof is over 20 years old or has widespread deterioration, a replacement provides better long-term value. Our free inspection gives you an honest recommendation.',
      },
      {
        question: 'Can you fix a roof leak during Tampa\'s rainy season?',
        answer:
          'Yes. We provide emergency tarping during active rain to stop water intrusion immediately. Once conditions allow, we complete the permanent repair. Our scheduling accounts for Tampa\'s typical afternoon storm pattern, with most exterior work completed in the morning hours.',
      },
      {
        question: 'Do you repair all types of roofs in Tampa?',
        answer:
          'We repair all residential roofing systems found in the Tampa area, including architectural shingles, 3-tab shingles, concrete and clay tile, flat roofs (TPO, EPDM, modified bitumen), and metal panels. Our trucks carry matching materials for the most common systems.',
      },
    ],
  },
  {
    cityStateSlug: 'tampa-fl',
    serviceSlug: 'storm-damage',
    metaTitle: 'Storm Damage Roof Repair Tampa, FL',
    metaDescription:
      'Tampa storm damage restoration with insurance claim support. Emergency tarping, drone inspections & full restoration. Call now for immediate help.',
    h1: 'Tampa Storm Damage Roof Restoration',
    intro:
      'Tampa sits directly in the path of Gulf Coast tropical systems and summer thunderstorms that generate damaging winds, large hail, and torrential downpours capable of compromising even well-maintained roofs in minutes. ProTech Roofing is one of Hillsborough County\'s most experienced storm damage restoration contractors, with crews mobilized within hours of major weather events to secure properties with professional-grade tarps and prevent secondary water damage. Our drone-assisted inspections capture high-resolution imagery of every hail dent, wind-lifted shingle, and water entry point, producing documentation packages that meet the requirements of every major insurance carrier operating in Florida. We have restored hundreds of Tampa homes after named storms and severe thunderstorms, working directly with adjusters to ensure fair claim settlements that cover the full scope of necessary work. From emergency response through final inspection, our project managers coordinate every phase of the restoration so you can focus on your family while we focus on your roof.',
    faqs: [
      {
        question: 'What should I do after storm damage to my Tampa roof?',
        answer:
          'First, document any visible damage with photos from the ground — do not climb on the roof. Then call ProTech Roofing for a free emergency inspection. We will secure your property with tarps if needed and begin the insurance claims process immediately.',
      },
      {
        question: 'How long do I have to file an insurance claim for storm damage in Tampa?',
        answer:
          'Florida law generally requires claims to be filed within 2 years of the damage event, but we strongly recommend filing within days. Delays allow secondary damage to develop, which can complicate or reduce your claim. ProTech Roofing helps Tampa homeowners file promptly.',
      },
      {
        question: 'Will my Tampa homeowner\'s insurance cover storm damage?',
        answer:
          'Most Florida homeowner\'s policies cover wind and hail damage as named perils. However, policies vary and some exclude certain storm types or have separate wind/hurricane deductibles. Our insurance specialists review your policy and advise you on coverage before proceeding.',
      },
      {
        question: 'How does ProTech handle insurance claims for Tampa storm damage?',
        answer:
          'We document all damage with drone photography and Xactimate estimates, file the claim on your behalf, attend the adjuster inspection, and negotiate supplements if the initial payout is insufficient. You pay only your deductible.',
      },
      {
        question: 'Can ProTech Roofing install a stronger roof after storm damage in Tampa?',
        answer:
          'Absolutely. Many Tampa homeowners upgrade to impact-resistant Class 4 shingles or standing seam metal after storm damage. These upgrades often qualify for insurance premium discounts that offset the additional cost over time.',
      },
    ],
  },
  {
    cityStateSlug: 'tampa-fl',
    serviceSlug: 'insurance-claims',
    metaTitle: 'Roofing Insurance Claims Tampa, FL',
    metaDescription:
      'Tampa roofing insurance claim experts. Free inspections, adjuster meetings & supplement negotiation. Pay only your deductible. Call today.',
    h1: 'Tampa Roofing Insurance Claims Assistance',
    intro:
      'Navigating a roofing insurance claim in Tampa can feel like a full-time job — between documenting damage, scheduling adjuster visits, deciphering policy language, and fighting for a fair payout, most homeowners are overwhelmed before the first check arrives. ProTech Roofing\'s dedicated insurance claims team in Tampa has recovered millions of dollars in underpaid and initially denied claims for Hillsborough County homeowners. We speak the language of insurance adjusters because our estimators are Xactimate-certified, producing line-item damage reports that match the exact format carriers use internally. When your adjuster visits, our specialist is there beside you, walking the roof and pointing out every hail strike, wind crease, and moisture intrusion point that might otherwise be overlooked. If the initial settlement falls short — and they often do — we file detailed supplements backed by photography, engineering reports, and code-upgrade documentation to recover every dollar you are owed. The result is a fair settlement that covers the full cost of restoration, typically at zero out-of-pocket cost beyond your deductible. We handle the paperwork and the follow-up calls so you can focus on getting your Tampa home back to normal.',
    faqs: [
      {
        question: 'Does ProTech Roofing charge for insurance claim help in Tampa?',
        answer:
          'No. Our insurance claims assistance is included at no additional cost when you choose ProTech Roofing for your restoration project. You pay only your insurance deductible. We earn our business through quality workmanship, not consulting fees.',
      },
      {
        question: 'What if my Tampa insurance claim is denied?',
        answer:
          'Claim denials are not the final word. Our team reviews the denial reason, gathers additional evidence such as engineering reports or supplemental photography, and files a formal appeal. We have successfully overturned many initial denials for Tampa homeowners.',
      },
      {
        question: 'How long does the insurance claims process take in Tampa?',
        answer:
          'Most Tampa claims are settled within 2 to 6 weeks from filing. Complex cases or supplement negotiations may take longer. We keep you informed at every stage and push for the fastest resolution without sacrificing claim value.',
      },
      {
        question: 'Can my insurance company force me to use their preferred contractor in Tampa?',
        answer:
          'No. Florida law gives you the right to choose your own contractor. Insurance company preferred vendor programs benefit the insurer, not you. By choosing ProTech Roofing, you get an advocate who works for you.',
      },
      {
        question: 'What is supplement negotiation and why does it matter in Tampa?',
        answer:
          'A supplement is an additional claim for costs not covered in the initial payout. In Tampa, common supplements include hidden decking damage found during tear-off, code upgrades required by Hillsborough County, and overhead and profit margins. Our team files supplements routinely to recover the full restoration cost.',
      },
    ],
  },

  // ─── Charlotte, NC ────────────────────────────────────────────────────
  {
    cityStateSlug: 'charlotte-nc',
    serviceSlug: 'roof-replacement',
    metaTitle: 'Roof Replacement in Charlotte, NC',
    metaDescription:
      'Charlotte roof replacement with lifetime warranty. Shingle & metal options for NC storms. Free inspection & financing available.',
    h1: 'Charlotte Roof Replacement Professionals',
    intro:
      'Charlotte\'s Piedmont location subjects residential roofs to a diverse range of weather threats, from severe spring and summer thunderstorms with damaging hail and high winds to the occasional remnants of Atlantic hurricanes that push inland through the Carolinas. ProTech Roofing has completed roof replacements across Mecklenburg County and the surrounding metro area, from the tree-lined streets of Myers Park and Dilworth to growing communities in Huntersville, Concord, and Matthews. North Carolina\'s combination of hot, humid summers, heavy annual rainfall, and occasional ice events means aging roofs deteriorate faster than many Charlotte homeowners expect, with algae growth, granule loss, and flashing failures progressing rapidly in the Southeast climate. Our crews install premium architectural shingles from GAF and Owens Corning featuring algae-resistant coatings along with standing seam metal roofing systems that deliver superior wind resistance and lifespans exceeding 50 years. Every Charlotte replacement includes infrared moisture scanning to detect hidden damage beneath existing materials, a thorough decking inspection with rot replacement as needed, and a complete ventilation assessment to optimize attic airflow. We handle all City of Charlotte and Mecklenburg County permits, coordinate HOA approvals, and offer flexible financing starting at $0 down. Our lifetime workmanship warranty protects your investment for as long as you own your home.',
    faqs: [
      {
        question: 'How much does a roof replacement cost in Charlotte?',
        answer:
          'Charlotte roof replacements typically range from $8,000 to $24,000 depending on home size, materials, and roof complexity. Architectural shingles remain the most popular choice, while metal roofing offers superior longevity for North Carolina\'s storm-prone climate. We provide detailed, no-pressure estimates.',
      },
      {
        question: 'What roofing materials work best in Charlotte\'s climate?',
        answer:
          'We recommend algae-resistant architectural shingles with high wind ratings for most Charlotte homes. Standing seam metal is ideal for maximum storm protection and longevity. Both options include reflective technology to reduce cooling costs during North Carolina\'s hot summers.',
      },
      {
        question: 'How long does a roof replacement take in Charlotte?',
        answer:
          'Most Charlotte residential roof replacements are completed in 1 to 2 days. We monitor weather forecasts and schedule around the Carolinas\' afternoon storm pattern. Larger homes or complex roof designs in areas like Myers Park may require up to 3 days.',
      },
      {
        question: 'Do I need a permit to replace my roof in Charlotte?',
        answer:
          'Yes. The City of Charlotte and Mecklenburg County require building permits for roof replacements. ProTech Roofing handles the full permitting process including application, fees, and final inspection scheduling so you never need to visit a government office.',
      },
      {
        question: 'Will a new roof increase my Charlotte home\'s value?',
        answer:
          'Yes. A new roof typically recovers 60% to 70% of its cost in home value. In Charlotte\'s competitive real estate market, homes with recently replaced roofs sell faster and command higher prices. Upgraded materials like metal roofing can increase the return even further.',
      },
    ],
  },
  {
    cityStateSlug: 'charlotte-nc',
    serviceSlug: 'roof-repair',
    metaTitle: 'Roof Repair in Charlotte, NC | Leak Experts | ProTech',
    metaDescription:
      'Charlotte roof repair for leaks, storm damage & missing shingles. Same-day service with 24hr emergency response. Free assessment.',
    h1: 'Professional Roof Repair in Charlotte',
    intro:
      'Charlotte\'s mix of severe thunderstorms, heavy rainfall, and occasional hurricane remnants means roof damage can happen at any time of year, and delays in repair lead to exponentially more expensive problems in North Carolina\'s humid climate. ProTech Roofing delivers fast, professional roof repair services across Mecklenburg County and the surrounding metro, from the historic homes of Dilworth to newer developments in Huntersville and Concord. Our technicians use advanced thermal imaging to detect moisture intrusion that is invisible from the surface, tracing leaks to their exact origin point — which is often far from where water stains appear on your ceiling. Charlotte\'s powerful storms frequently lift shingles, crack flashing, and drive debris into roofing materials, creating entry points for water that can lead to mold growth within days in the humid Piedmont environment. We carry a comprehensive inventory of matching materials for every major shingle, tile, and flat-roof system installed in the Charlotte area, enabling same-visit completion for most repairs without waiting for special orders. Emergency tarping is available around the clock during storm season to protect your interior from active leaks while we plan the permanent fix. Every Charlotte repair comes with a written workmanship warranty, before-and-after photo documentation, and an honest assessment of your roof\'s overall condition.',
    faqs: [
      {
        question: 'How fast can you repair a roof leak in Charlotte?',
        answer:
          'Same-day repair is available for most Charlotte-area homes. Emergency tarping for active leaks is available within 2 to 4 hours of your call. Permanent repairs are typically completed within 24 to 48 hours depending on the scope and weather conditions.',
      },
      {
        question: 'How much does roof repair cost in Charlotte?',
        answer:
          'Minor Charlotte roof repairs like replacing blown-off shingles or resealing flashing typically cost $300 to $1,200. More extensive repairs involving decking replacement or multiple areas range from $1,200 to $5,000. We provide exact pricing before starting any work.',
      },
      {
        question: 'Should I repair or replace my Charlotte roof?',
        answer:
          'If damage is localized and your roof is under 15 years old, repair is typically the best option. If your roof is approaching 20 years with widespread issues like curling shingles, granule loss, or multiple leak points, replacement provides better long-term value. Our free inspection gives you an honest recommendation.',
      },
      {
        question: 'Can you repair all types of roofs in Charlotte?',
        answer:
          'Yes. We repair all residential roofing systems found across the Charlotte metro, including architectural and 3-tab shingles, concrete and clay tile, flat roofs (TPO, EPDM, modified bitumen), metal panels, and cedar shake. Our crews carry matching materials for rapid service.',
      },
      {
        question: 'Do you help with insurance claims for Charlotte roof repairs?',
        answer:
          'Yes. If your roof repair is the result of storm damage, our team documents the damage, assists with claim filing, and works directly with your adjuster to ensure you receive a fair settlement. This service is included at no additional cost.',
      },
    ],
  },
  {
    cityStateSlug: 'charlotte-nc',
    serviceSlug: 'storm-damage',
    metaTitle: 'Storm Damage Roof Repair Charlotte, NC',
    metaDescription:
      'Charlotte storm damage restoration with insurance support. Hail, wind & hurricane damage repair. Emergency tarping available. Call now.',
    h1: 'Charlotte Storm Damage Roof Restoration',
    intro:
      'Charlotte and Mecklenburg County experience severe weather events throughout the year, from the powerful spring and summer thunderstorms that bring damaging hail and straight-line winds to the remnants of Atlantic hurricanes that occasionally push through the Piedmont with devastating force. ProTech Roofing is Charlotte\'s experienced storm damage restoration partner, with emergency response crews ready to deploy within hours of major weather events to secure damaged properties across the metro area, from Gastonia to Matthews and everywhere in between. Our drone-assisted inspections produce high-resolution documentation of every hail impact, wind-lifted shingle, and debris strike on your roof, creating a comprehensive evidence package that meets the documentation standards of all major insurance carriers in North Carolina. We prepare Xactimate-certified estimates that align with what adjusters expect, reducing disputes and accelerating the claims process for Charlotte homeowners. Our project managers coordinate every phase of the restoration from emergency tarping through final inspection and warranty documentation, keeping you informed at every stage. We handle permits, material ordering, crew scheduling, and all insurance communication so you can focus on your family while we restore your roof. Charlotte homeowners trust ProTech for our combination of rapid response, thorough documentation, and quality craftsmanship backed by our lifetime workmanship warranty.',
    faqs: [
      {
        question: 'What should I do after storm damage to my Charlotte roof?',
        answer:
          'Document visible damage with photos from the ground and call ProTech Roofing for a free emergency inspection. Do not climb on the roof. We will secure your property with tarps if needed and begin the insurance documentation process the same day.',
      },
      {
        question: 'Does insurance cover storm damage in Charlotte?',
        answer:
          'Most North Carolina homeowner\'s policies cover wind and hail damage as named perils. Some policies have separate wind/hail deductibles. Our insurance team reviews your coverage and explains your financial responsibility before any restoration work begins.',
      },
      {
        question: 'How does ProTech document storm damage in Charlotte?',
        answer:
          'We use commercial drones for high-resolution roof photography, thermal cameras for moisture detection, and Xactimate software for detailed damage estimates. This professional documentation maximizes your claim value and accelerates the approval process.',
      },
      {
        question: 'How fast can ProTech respond to Charlotte storm damage?',
        answer:
          'Emergency tarping is available within hours of your call. After major storm events, we prioritize active leaks and structural damage. Full restoration begins as soon as insurance approval is received and materials are delivered, typically within 1 to 3 weeks.',
      },
      {
        question: 'Can I upgrade my roof after storm damage in Charlotte?',
        answer:
          'Yes. Insurance covers like-kind replacement, and you pay the difference for upgraded materials. Many Charlotte homeowners choose impact-resistant Class 4 shingles or metal roofing after storm damage for better protection and potential insurance premium savings.',
      },
    ],
  },
  {
    cityStateSlug: 'charlotte-nc',
    serviceSlug: 'insurance-claims',
    metaTitle: 'Roofing Insurance Claims Charlotte, NC',
    metaDescription:
      'Charlotte roofing insurance claim specialists. Free inspections, adjuster meetings & supplement filing. Pay only your deductible.',
    h1: 'Charlotte Roofing Insurance Claims Experts',
    intro:
      'Navigating a roofing insurance claim in Charlotte is a process that frustrates even the most patient homeowners. Between documenting damage, interpreting policy language, scheduling adjuster meetings, and disputing inadequate settlements, most Mecklenburg County residents feel overwhelmed before the first check arrives. ProTech Roofing\'s dedicated Charlotte insurance claims team eliminates that stress with a proven process that has recovered millions of dollars in underpaid and initially denied claims across the metro area. Our Xactimate-certified estimators document damage in the same software and format that adjusters use internally, creating an apples-to-apples comparison that eliminates the disputes caused by incompatible documentation. When the adjuster visits your Charlotte home, our specialist walks the roof alongside them, identifying every hail strike, wind crease, and code-upgrade requirement that might otherwise be overlooked during a brief inspection. If the initial settlement falls short — and initial payouts in the Charlotte market frequently do — we file detailed supplements backed by photography, engineering reports, and Mecklenburg County code documentation to recover the full restoration cost. Our team handles every phone call, form, and follow-up so you are never stuck on hold with your insurance company or confused by claims jargon. The result is a fair settlement that covers quality restoration work, with your only expense being your policy deductible.',
    faqs: [
      {
        question: 'Does ProTech charge for insurance claim help in Charlotte?',
        answer:
          'No. Insurance claims assistance is included at no additional cost when you choose ProTech Roofing for your Charlotte restoration. You pay only your policy deductible. We earn your business through quality workmanship, not consulting fees.',
      },
      {
        question: 'What if my Charlotte insurance claim is underpaid?',
        answer:
          'Underpayment is common in the Charlotte market. Our team files supplements with additional documentation including photography, engineering reports, and code-upgrade requirements specific to Mecklenburg County. We have a strong track record of recovering additional funds on underpaid claims.',
      },
      {
        question: 'How long does the claims process take in Charlotte?',
        answer:
          'Most Charlotte claims are settled within 3 to 6 weeks from filing. Cases involving supplement negotiations or appeals may take longer. We keep you updated at every stage and advocate for the fastest resolution without sacrificing claim value.',
      },
      {
        question: 'Can my insurer force me to use a specific contractor in Charlotte?',
        answer:
          'No. North Carolina law gives you the right to choose your own contractor. Insurance preferred vendor programs benefit the insurer, not the homeowner. By choosing ProTech Roofing, you get an independent advocate working solely in your interest.',
      },
      {
        question: 'What documents do I need for a Charlotte roofing insurance claim?',
        answer:
          'You need your insurance policy number, the date of the damage event, and any photos taken after the storm. ProTech Roofing handles all professional documentation including drone photography, thermal imaging, and Xactimate damage estimates.',
      },
    ],
  },
  {
    cityStateSlug: 'charlotte-nc',
    serviceSlug: 'gutters-siding',
    metaTitle: 'Gutter Installation & Siding in Charlotte, NC',
    metaDescription:
      'Seamless gutters, gutter guards & vinyl/fiber cement siding in Charlotte. Designed for Carolina storms. Free estimate — call today.',
    h1: 'Charlotte Gutter Installation & Siding Experts',
    intro:
      'Charlotte\'s Piedmont climate delivers over 43 inches of annual rainfall along with severe thunderstorms that can dump several inches in under an hour, putting enormous demands on your home\'s gutter system and exterior cladding. Add in the heavy leaf drop from Charlotte\'s mature hardwood canopy and the humidity that promotes algae and mildew growth on siding, and you have an environment that requires gutters and siding built specifically for the Carolinas. ProTech Roofing installs seamless aluminum gutters custom-formed on-site to the precise measurements of your Charlotte home, eliminating the joints and seams where leaks develop in sectional systems. Our 5-inch and 6-inch profiles are paired with concealed hanger brackets rated for Carolina wind loads and properly pitched for optimal drainage even during the most intense storms. We install micro-mesh gutter guard systems that keep Charlotte\'s abundant oak, maple, and pine needle debris out of your drainage system while handling peak water volumes without overflow. For siding, ProTech offers premium vinyl siding and James Hardie fiber cement siding — the preferred choice for Charlotte homes due to its superior resistance to humidity, termites, and the mildew that discolors lesser materials in the Mecklenburg County climate. Our siding installations include proper moisture management with house wrap, window and door flashing integration, and weep systems that prevent trapped moisture behind cladding. We serve homeowners throughout Charlotte and the surrounding communities of Huntersville, Concord, Matthews, and Gastonia, with every project backed by our workmanship warranty.',
    faqs: [
      {
        question: 'How much does gutter installation cost in Charlotte?',
        answer:
          'Seamless aluminum gutter installation in Charlotte typically costs $7 to $13 per linear foot. Most homes require 125 to 225 linear feet, with total system costs ranging from $900 to $3,000 including downspouts. Gutter guards add $5 to $9 per linear foot. We provide transparent, itemized estimates.',
      },
      {
        question: 'What type of gutters are best for Charlotte homes?',
        answer:
          'We recommend seamless aluminum gutters in 5-inch or 6-inch profiles for most Charlotte homes. Aluminum handles Carolina rainfall volumes, resists corrosion, and provides excellent long-term value. Homes with large roof areas or heavy tree coverage benefit from 6-inch gutters with oversized downspouts.',
      },
      {
        question: 'Are gutter guards worth it in Charlotte?',
        answer:
          'Yes. Charlotte\'s mature hardwood trees drop massive amounts of leaves each fall, and pine trees shed needles year-round. Micro-mesh guards block debris while handling heavy Carolina rainfall, eliminating frequent cleaning and preventing the fascia rot and foundation damage caused by clogged, overflowing gutters.',
      },
      {
        question: 'What siding options do you install in Charlotte?',
        answer:
          'We install premium vinyl siding and James Hardie fiber cement siding. Fiber cement is the top choice for Charlotte homes because it resists humidity, termites, and mildew growth while maintaining its appearance for decades. Both options come in a wide range of colors and profiles.',
      },
      {
        question: 'How long does gutter or siding installation take in Charlotte?',
        answer:
          'Gutter installation is completed in 1 day for most Charlotte homes. Full siding replacement takes 3 to 7 days depending on home size. We schedule around the Carolinas\' weather patterns and avoid starting exterior work when severe weather is in the forecast.',
      },
    ],
  },

  // ─── Jacksonville, FL ─────────────────────────────────────────────────
  {
    cityStateSlug: 'jacksonville-fl',
    serviceSlug: 'roof-replacement',
    metaTitle: 'Roof Replacement in Jacksonville, FL',
    metaDescription:
      'Jacksonville roof replacement with lifetime warranty. Hurricane-rated shingles & metal for coastal FL. Free inspection & financing.',
    h1: 'Jacksonville Roof Replacement Experts',
    intro:
      'Jacksonville is Florida\'s largest city by land area, and its coastal position along the Atlantic makes residential roofing a critical line of defense against the hurricanes, tropical storms, and nor\'easters that threaten Duval County throughout the extended storm season. ProTech Roofing has replaced roofs across the Jacksonville metro, from the historic homes of Riverside and Avondale to waterfront properties in Ponte Vedra Beach, family neighborhoods in Orange Park, and growing communities near St. Augustine. Florida\'s combination of hurricane-force winds, intense UV radiation, salt air, and heavy rainfall accelerates roofing deterioration beyond what homeowners in many other states experience, making timely replacement essential to preventing costly water damage and mold. Our crews install GAF Timberline HDZ and Owens Corning Duration shingles with hurricane-rated underlayment, sealed deck systems, and reinforced drip edge details designed for coastal Florida wind loads. Standing seam metal roofing is a popular choice for Jacksonville homes seeking maximum hurricane resistance and a 50-plus-year lifespan that outlasts multiple shingle roofs. Every Jacksonville project begins with infrared scanning to detect moisture trapped beneath existing materials, a full decking inspection with rot replacement as needed, and a ventilation assessment to prevent the attic heat buildup that prematurely ages roofing materials. We pull all City of Jacksonville permits, handle HOA coordination, and offer financing with $0 down and terms up to 144 months.',
    faqs: [
      {
        question: 'How much does a roof replacement cost in Jacksonville?',
        answer:
          'Jacksonville roof replacements typically cost between $9,000 and $27,000 depending on home size, materials, and roof complexity. Impact-resistant shingles and metal roofing cost more upfront but deliver superior performance against Florida\'s hurricanes and reduce insurance premiums.',
      },
      {
        question: 'What roofing materials are best for Jacksonville\'s coastal climate?',
        answer:
          'We recommend impact-resistant architectural shingles rated for 130 mph winds for most Jacksonville homes. Standing seam metal is ideal for maximum hurricane protection and salt air resistance. Both options include reflective coatings to reduce cooling costs in Florida\'s heat.',
      },
      {
        question: 'How long does a roof replacement take in Jacksonville?',
        answer:
          'Most Jacksonville residential roof replacements are completed in 1 to 2 days. We schedule around Florida\'s afternoon thunderstorm pattern and start early to maximize dry working hours. Larger homes or complex designs may require up to 3 days.',
      },
      {
        question: 'Do I need a permit to replace my roof in Jacksonville?',
        answer:
          'Yes. The City of Jacksonville requires building permits for all roof replacements. ProTech Roofing handles the entire permitting process including application, fees, and scheduling the final inspection with the Duval County building department.',
      },
      {
        question: 'Will a new roof lower my insurance in Jacksonville?',
        answer:
          'Yes. Florida insurers offer significant premium reductions for new roofs with impact-resistant materials and hurricane clips. Many Jacksonville homeowners save $500 to $2,500 per year on insurance after a roof replacement, often offsetting a significant portion of the project cost over time.',
      },
    ],
  },
  {
    cityStateSlug: 'jacksonville-fl',
    serviceSlug: 'roof-repair',
    metaTitle: 'Roof Repair in Jacksonville, FL | Fast Leak Fix | ProTech',
    metaDescription:
      'Same-day roof repair in Jacksonville. Stop leaks, fix storm damage & prevent water intrusion. 24hr emergency service. Free assessment.',
    h1: 'Fast, Reliable Roof Repair in Jacksonville',
    intro:
      'A roof leak in Jacksonville can cause severe secondary damage within days thanks to Florida\'s high humidity, heavy afternoon storms, and warm temperatures that create ideal conditions for rapid mold growth inside walls and attic spaces. ProTech Roofing provides fast, professional roof repair services throughout Duval County and the surrounding areas of St. Augustine, Orange Park, and Ponte Vedra Beach. Our technicians use thermal imaging and moisture detection technology to pinpoint the exact source of leaks that may originate far from where water stains appear on your ceiling, ensuring we fix the root cause rather than applying temporary patches. Jacksonville\'s combination of hurricane-season winds, UV degradation, and salt air creates a continuous cycle of shingle deterioration, flashing failure, and sealant breakdown that requires vigilant maintenance and prompt repairs. Our repair crews carry a comprehensive inventory of matching materials for every major shingle, tile, and flat-roof system installed in the Jacksonville metro, enabling same-visit completion for most repairs. Emergency tarping is available around the clock for active leaks during Florida\'s storm season, protecting your home\'s interior while we plan the permanent repair. Every repair includes a written workmanship warranty, before-and-after photo documentation, and an honest assessment of your roof\'s remaining useful life.',
    faqs: [
      {
        question: 'How quickly can you repair a roof leak in Jacksonville?',
        answer:
          'We offer same-day roof repair for most Jacksonville-area homes. Emergency tarping for active leaks is available within 2 to 4 hours of your call. Permanent repairs are typically completed within 24 to 48 hours depending on scope and weather conditions.',
      },
      {
        question: 'How much does a typical roof repair cost in Jacksonville?',
        answer:
          'Minor repairs such as replacing blown-off shingles or resealing flashing typically cost $300 to $1,200 in Jacksonville. More extensive repairs involving decking replacement or large areas range from $1,200 to $5,000. We provide exact pricing before starting any work.',
      },
      {
        question: 'Should I repair or replace my Jacksonville roof?',
        answer:
          'If damage is isolated and your roof is under 15 years old, repair is usually the best option. If your roof is over 20 years old or has widespread issues like granule loss, curling, or multiple leaks, replacement provides better long-term value and insurance premium savings in Florida.',
      },
      {
        question: 'Can you repair hurricane damage on Jacksonville roofs?',
        answer:
          'Yes. Hurricane damage repair is one of our core services in Jacksonville. We fix wind-lifted shingles, replace torn-off sections, repair flashing, and address water intrusion. Our team also assists with insurance claims at no additional cost to ensure you receive a fair settlement.',
      },
      {
        question: 'Do you repair all types of roofs in Jacksonville?',
        answer:
          'We repair all residential roofing systems found across the Jacksonville area, including architectural shingles, 3-tab shingles, concrete and clay tile, flat roofs (TPO, EPDM, modified bitumen), metal panels, and specialty systems. Our trucks carry matching materials for most common systems.',
      },
    ],
  },
  {
    cityStateSlug: 'jacksonville-fl',
    serviceSlug: 'storm-damage',
    metaTitle: 'Storm Damage Roof Repair Jacksonville, FL',
    metaDescription:
      'Jacksonville storm damage restoration with insurance claim support. Hurricane, wind & hail damage. Emergency tarping 24/7. Call now.',
    h1: 'Jacksonville Storm Damage Roof Restoration',
    intro:
      'Jacksonville\'s position on Florida\'s Atlantic coast places it directly in the path of tropical storms, hurricanes, and intense thunderstorms that can damage thousands of roofs across Duval County in a single event. ProTech Roofing is Jacksonville\'s trusted storm damage restoration contractor, with an established emergency response protocol that mobilizes tarping crews within hours of major weather events to protect properties from the secondary water damage that can double restoration costs in Florida\'s humid environment. Our drone-assisted inspections capture high-resolution imagery of every wind-lifted shingle, hail dent, and debris strike, creating documentation packages that meet the requirements of every major insurance carrier operating in Florida. We prepare Xactimate-certified damage estimates in the exact format adjusters use, reducing disputes and accelerating claim settlements for Jacksonville homeowners. From Riverside to Ponte Vedra Beach, from Orange Park to the Beaches communities, our project managers coordinate every phase of the restoration — emergency tarping, insurance documentation, permitting, material procurement, crew scheduling, and final inspection — so you are never left wondering about the status of your project. We have restored hundreds of Jacksonville homes after named storms and severe weather events, consistently delivering quality craftsmanship that withstands future storms.',
    faqs: [
      {
        question: 'What should I do after a storm damages my Jacksonville roof?',
        answer:
          'Document visible damage with photos from the ground — do not climb on the roof. Call ProTech Roofing immediately for a free emergency inspection. We secure your property with professional tarps if needed and begin the insurance claims process the same day.',
      },
      {
        question: 'Will my Jacksonville insurance cover storm damage?',
        answer:
          'Most Florida homeowner\'s policies cover wind and hail damage. However, many policies have separate wind/hurricane deductibles, typically 2% to 5% of the home\'s insured value. Our insurance specialists review your specific policy and explain your coverage before proceeding.',
      },
      {
        question: 'How does ProTech document storm damage in Jacksonville?',
        answer:
          'We use commercial drones for high-resolution roof photography, thermal cameras to detect moisture intrusion, and Xactimate software to produce detailed damage estimates in the format insurance adjusters require. This thorough documentation maximizes your claim value.',
      },
      {
        question: 'Can I upgrade my roof after storm damage in Jacksonville?',
        answer:
          'Yes. Insurance pays for like-kind replacement, and you cover the upgrade cost. Many Jacksonville homeowners upgrade to impact-resistant Class 4 shingles or standing seam metal after storm damage for superior hurricane protection and insurance premium reductions.',
      },
      {
        question: 'How long does storm damage restoration take in Jacksonville?',
        answer:
          'Once the insurance claim is approved, most Jacksonville restorations are completed within 1 to 3 weeks. Emergency tarping is available immediately, and permanent restoration begins as soon as materials arrive and City of Jacksonville permits are secured.',
      },
    ],
  },
  {
    cityStateSlug: 'jacksonville-fl',
    serviceSlug: 'insurance-claims',
    metaTitle: 'Roofing Insurance Claims Jacksonville, FL',
    metaDescription:
      'Jacksonville roofing insurance claim experts. Free inspections, adjuster meetings & supplement negotiation. Pay only your deductible.',
    h1: 'Jacksonville Roofing Insurance Claims Assistance',
    intro:
      'Roofing insurance claims in Jacksonville present unique challenges that homeowners in other parts of the country rarely encounter. Florida\'s insurance market is one of the most complex in the nation, with separate wind/hurricane deductibles, Assignment of Benefits restrictions, and carriers that aggressively minimize payouts to protect their bottom line in a state with high storm frequency. ProTech Roofing\'s Jacksonville insurance claims team navigates these complexities every day, having recovered millions of dollars for Duval County homeowners who would have been significantly underpaid without professional advocacy. Our Xactimate-certified estimators document damage in the exact format that insurance companies use, producing line-item reports that leave adjusters no room to dismiss or downplay legitimate damage. When the adjuster visits your Jacksonville property, our specialist is on the roof alongside them, pointing out every wind crease, hail strike, moisture entry point, and code-upgrade requirement that might otherwise be overlooked. If the initial settlement falls short — and in Jacksonville\'s challenging insurance market, they frequently do — we file detailed supplements with supporting photography, engineering reports, and documentation of Florida building code requirements. Our team handles every phone call, every form, and every follow-up communication so you never have to navigate the claims maze alone. The goal is a fair settlement that covers quality restoration with your only cost being your policy deductible.',
    faqs: [
      {
        question: 'Does ProTech charge for insurance claim help in Jacksonville?',
        answer:
          'No. Our insurance claims assistance is included at no additional cost when you choose ProTech Roofing for your Jacksonville restoration. You pay only your insurance deductible. We earn our business through quality work and aggressive claims advocacy.',
      },
      {
        question: 'What if my Jacksonville insurance claim is denied?',
        answer:
          'Claim denials are not the final word. Our team reviews the denial reason, gathers additional evidence including engineering reports and supplemental photography, and files a formal appeal. Florida has specific time limits for appeals, so contact us promptly after receiving a denial.',
      },
      {
        question: 'How long does the insurance claims process take in Jacksonville?',
        answer:
          'Most Jacksonville claims are settled within 2 to 6 weeks from filing. Complex cases involving supplements, appeals, or carrier delays may take longer. We keep you informed at every stage and push for the fastest resolution that delivers a fair outcome.',
      },
      {
        question: 'What is a wind/hurricane deductible in Jacksonville?',
        answer:
          'Most Florida policies have a separate hurricane deductible, typically 2% to 5% of your home\'s insured value, rather than a flat dollar amount. For a $350,000 home, this could mean a $7,000 to $17,500 deductible for hurricane claims. Our team explains your specific policy terms upfront.',
      },
      {
        question: 'Can I choose my own contractor for insurance work in Jacksonville?',
        answer:
          'Yes. Florida law gives you the right to select your own contractor regardless of what your insurance company suggests. Preferred vendor programs benefit the insurer. By choosing ProTech Roofing, you get an independent advocate working for you.',
      },
    ],
  },
  {
    cityStateSlug: 'jacksonville-fl',
    serviceSlug: 'gutters-siding',
    metaTitle: 'Gutter Installation & Siding in Jacksonville, FL',
    metaDescription:
      'Seamless gutters, gutter guards & vinyl/fiber cement siding in Jacksonville. Built for Florida storms & salt air. Free estimate.',
    h1: 'Jacksonville Gutter Installation & Siding Experts',
    intro:
      'Jacksonville\'s coastal Atlantic climate creates exceptional demands on your home\'s gutters and siding. Duval County receives over 50 inches of rain annually, with tropical storms and afternoon thunderstorms capable of dumping several inches in under an hour — volumes that overwhelm standard gutter systems and send water cascading down your siding, eroding landscaping and threatening your foundation. Add salt air from the ocean and Intracoastal Waterway that corrodes inferior materials, and you need gutters and siding specifically engineered for coastal Florida conditions. ProTech Roofing installs seamless aluminum gutters custom-fabricated on-site to the exact dimensions of your Jacksonville home, with oversized 6-inch profiles and 3x4-inch downspouts for properties in high-rainfall drainage areas. Our concealed hanger brackets are rated for Florida wind loads, and every installation is pitched to engineering specifications for maximum flow during intense storms. We install micro-mesh gutter guard systems that handle Jacksonville\'s extreme rainfall rates while keeping live oak leaves, pine needles, and palm fronds out of your drainage system. For siding, ProTech offers vinyl systems rated for 130 mph winds and James Hardie fiber cement siding that resists salt air corrosion, humidity, rot, and termites — all critical concerns for Jacksonville homeowners. Our installations include complete moisture management with house wrap, weep systems, and integrated flashing at every window and door to prevent the trapped moisture that causes mold in Florida\'s subtropical climate. We serve homeowners throughout Jacksonville and surrounding areas including St. Augustine, Orange Park, and Ponte Vedra Beach.',
    faqs: [
      {
        question: 'How much does gutter installation cost in Jacksonville?',
        answer:
          'Seamless aluminum gutter installation in Jacksonville typically costs $8 to $15 per linear foot. Most homes require 150 to 250 linear feet, with total system costs ranging from $1,200 to $3,800 including downspouts. Gutter guards add $5 to $10 per linear foot. We provide detailed, transparent estimates.',
      },
      {
        question: 'What type of gutters are best for Jacksonville\'s climate?',
        answer:
          'We recommend 6-inch seamless aluminum gutters with oversized downspouts for most Jacksonville homes. Aluminum resists the salt air corrosion common near the coast and handles Florida\'s extreme rainfall volumes. This configuration prevents overflow during tropical storms and heavy afternoon thunderstorms.',
      },
      {
        question: 'Are gutter guards worth it in Jacksonville?',
        answer:
          'Yes. Jacksonville\'s live oaks, pines, and palms produce year-round debris that clogs unprotected gutters quickly. Micro-mesh guards handle Florida\'s intense rainfall while blocking leaves and needles, eliminating dangerous ladder cleaning and preventing the fascia rot and foundation erosion caused by overflowing gutters.',
      },
      {
        question: 'What siding options do you offer for Jacksonville homes?',
        answer:
          'We install vinyl siding rated for 130 mph winds and James Hardie fiber cement siding that resists salt air, humidity, termites, and rot. Both options are available in a wide range of colors and profiles. Fiber cement is especially popular near the coast for its superior resistance to salt air corrosion.',
      },
      {
        question: 'How long does gutter or siding installation take in Jacksonville?',
        answer:
          'Gutter installation on most Jacksonville homes is completed in 1 day. Full siding replacement typically takes 3 to 7 days depending on home size and complexity. We schedule around Florida\'s afternoon storm pattern and start early to maximize dry working hours.',
      },
    ],
  },
];

export function getCityServiceData(
  cityStateSlug: string,
  serviceSlug: string
): CityServiceData | undefined {
  return cityServiceData.find(
    (d) => d.cityStateSlug === cityStateSlug && d.serviceSlug === serviceSlug
  );
}

export function getCityServices(
  cityStateSlug: string
): CityServiceData[] {
  return cityServiceData.filter((d) => d.cityStateSlug === cityStateSlug);
}

export function getAllCityServiceData(): CityServiceData[] {
  return cityServiceData;
}
