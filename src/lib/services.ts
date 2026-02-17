export interface ProcessStep {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  processSteps: ProcessStep[];
  materials: string[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
}

const services: Service[] = [
  {
    name: "Roof Replacement",
    slug: "roof-replacement",
    icon: "Home",
    shortDescription:
      "Get a roof that lasts 30+ years with premium materials, expert installation, and a lifetime workmanship warranty.",
    longDescription:
      "A full roof replacement is the most effective way to protect your home, boost curb appeal, and increase property value. ProTech Roofing uses manufacturer-certified installation techniques with premium materials from GAF, Owens Corning, and CertainTeed to deliver a roof system that performs for decades. Every replacement includes a thorough decking inspection, proper ventilation assessment, ice-and-water shield application at all vulnerable areas, and meticulous flashing work around penetrations. We handle permits, HOA approvals, and final inspections so you can focus on choosing the style and color that transforms your home.",
    benefits: [
      "Lifetime workmanship warranty plus manufacturer material warranties up to 50 years",
      "Increase your home's resale value by an average of $12,000 to $18,000",
      "Reduce energy costs with modern reflective and ventilated roofing systems",
      "Eliminate recurring repair costs from an aging, deteriorating roof",
      "Complete project management including permits, inspections, and debris removal",
    ],
    processSteps: [
      {
        title: "Free Inspection & Estimate",
        description:
          "A certified project manager inspects your roof, documents its condition with photos, and provides a detailed written estimate with material options and pricing tiers.",
      },
      {
        title: "Material Selection & Scheduling",
        description:
          "Choose from our curated selection of shingles, metal panels, or tile. We order materials, pull permits, and schedule your installation within 1 to 3 weeks.",
      },
      {
        title: "Professional Installation",
        description:
          "Our factory-trained crews strip the old roof to the decking, repair any damaged wood, install underlayment and flashing, and apply your new roof system. Most residential jobs complete in 1 to 2 days.",
      },
      {
        title: "Final Walkthrough & Warranty",
        description:
          "We perform a 21-point quality inspection, clean your property with magnetic nail sweeps, and present your warranty documentation. A final walkthrough ensures your complete satisfaction.",
      },
    ],
    materials: [
      "GAF Timberline HDZ Architectural Shingles",
      "Owens Corning Duration Series Shingles",
      "CertainTeed Landmark Pro Shingles",
      "Standing Seam Metal Panels (24-gauge steel or aluminum)",
      "Concrete and Clay Tile Systems",
    ],
    faqs: [
      {
        question: "How long does a full roof replacement take?",
        answer:
          "Most residential roof replacements are completed in 1 to 2 days. The exact timeline depends on the size of your roof, the complexity of the design, weather conditions, and whether structural repairs are needed. Larger or multi-story homes may require up to 3 days. We provide a specific timeline estimate during your free inspection.",
      },
      {
        question: "How much does it cost to replace a roof?",
        answer:
          "The average roof replacement costs between $8,000 and $25,000 depending on the size of your home, the materials you choose, and the complexity of the job. Architectural shingles fall on the lower end while standing seam metal or tile roofs cost more upfront but last significantly longer. We provide transparent, itemized quotes with no hidden fees.",
      },
      {
        question: "Will my homeowner's insurance cover a roof replacement?",
        answer:
          "Insurance typically covers roof replacement when the damage is caused by a covered peril such as hail, wind, or a fallen tree. Normal wear and aging are generally not covered. ProTech Roofing works directly with your insurance adjuster to document damage and maximize your claim so you pay only your deductible.",
      },
      {
        question:
          "What is the best roofing material for hot climates like Florida and Georgia?",
        answer:
          "For hot climates, reflective metal roofing and cool-roof-rated architectural shingles perform best by reflecting solar heat and reducing attic temperatures. Concrete tile is another excellent option for heat resistance. These materials can lower cooling costs by 10 to 25 percent compared to standard dark shingles.",
      },
      {
        question: "Do I need to be home during the roof replacement?",
        answer:
          "No, you do not need to be home. We simply ask that all vehicles are moved from the driveway and that pets are kept indoors or away from the work area. Your project manager will keep you updated with progress photos throughout the day and contact you for the final walkthrough once the job is complete.",
      },
    ],
    metaTitle: "Roof Replacement Services | ProTech Roofing",
    metaDescription:
      "Premium roof replacement with lifetime warranty. GAF, Owens Corning, and metal options. Free inspection, financing available. Get your estimate today.",
  },
  {
    name: "Roof Repair",
    slug: "roof-repair",
    icon: "Wrench",
    shortDescription:
      "Stop leaks before they become costly water damage with fast, reliable roof repairs backed by our workmanship guarantee.",
    longDescription:
      "A small roof leak can quickly escalate into thousands of dollars in water damage, mold remediation, and structural repair. ProTech Roofing provides prompt, professional repair services that address the root cause, not just the symptoms. Our technicians use thermal imaging and moisture meters to pinpoint leak sources that are invisible to the naked eye. Whether you need a few shingles replaced, flashing resealed, or a section of decking rebuilt, we restore your roof's integrity with materials that match your existing system.",
    benefits: [
      "24-hour emergency response for active leaks and storm damage",
      "Thermal imaging and moisture detection to find hidden leak sources",
      "Repairs matched to your existing materials for a seamless appearance",
      "Prevent costly water damage, mold, and structural deterioration",
      "Transparent pricing with no surprise charges after work begins",
    ],
    processSteps: [
      {
        title: "Damage Assessment",
        description:
          "We inspect your roof using thermal cameras and visual examination to identify every area of concern and document the findings with detailed photos.",
      },
      {
        title: "Repair Plan & Approval",
        description:
          "You receive a clear written scope of work explaining what needs to be fixed, why, and how much it will cost. We do not begin work until you approve the plan.",
      },
      {
        title: "Expert Repair",
        description:
          "Our trained technicians execute the repair using manufacturer-approved materials and techniques, ensuring the fix addresses the underlying cause rather than masking the symptom.",
      },
      {
        title: "Quality Verification",
        description:
          "After completion, we perform a water test and re-inspect with thermal imaging to confirm the leak is fully resolved. You receive a written workmanship warranty on all repairs.",
      },
    ],
    materials: [
      "Matching architectural and 3-tab shingles",
      "Step and counter flashing (aluminum and galvanized steel)",
      "Rubberized ice-and-water shield membrane",
      "Roofing sealants and adhesives (polyurethane and silicone)",
      "Replacement decking (CDX plywood and OSB)",
    ],
    faqs: [
      {
        question: "How do I know if my roof needs repair or full replacement?",
        answer:
          "If damage is isolated to a small area and the rest of your roof is in good condition, a repair is usually sufficient and more cost-effective. However, if your roof is over 20 years old, has widespread granule loss, or shows signs of sagging, a full replacement is the better investment. Our free inspection will give you an honest recommendation.",
      },
      {
        question: "Can you fix a roof leak in the rain?",
        answer:
          "Yes, we provide emergency tarping services during active rain to prevent further water intrusion. Permanent repairs are then scheduled once conditions allow for safe, quality work. Our 24-hour response team can typically have a tarp in place within a few hours of your call.",
      },
      {
        question: "How much does a typical roof repair cost?",
        answer:
          "Minor repairs such as replacing a few shingles or resealing flashing typically cost between $300 and $1,000. More extensive repairs involving decking replacement or large sections can range from $1,000 to $4,000. We provide exact pricing before starting work so there are no surprises.",
      },
    ],
    metaTitle: "Roof Repair Services - Fast Leak Fixes | ProTech Roofing",
    metaDescription:
      "Fast, reliable roof repair to stop leaks and prevent water damage. 24-hour emergency service, thermal imaging diagnostics. Schedule your free assessment now.",
  },
  {
    name: "Storm Damage",
    slug: "storm-damage",
    icon: "CloudLightning",
    shortDescription:
      "We handle your insurance claim from start to finish so you can focus on getting your home back to normal after a storm.",
    longDescription:
      "Severe weather can compromise your roof in seconds, but the restoration process can drag on for months without the right partner. ProTech Roofing is a certified storm damage restoration contractor with dedicated insurance specialists on staff. We document every hail dent, wind-lifted shingle, and water entry point with drone photography and detailed reports that insurance adjusters require. Our team meets your adjuster on-site, negotiates fair claim values, and manages the entire restoration timeline. You focus on your family while we focus on your roof.",
    benefits: [
      "Dedicated insurance claim specialists who handle paperwork and adjuster meetings",
      "Drone-assisted damage documentation for comprehensive claim support",
      "Emergency tarping within hours of storm damage to prevent further loss",
      "Direct billing to your insurance company so you pay only your deductible",
      "Full restoration to pre-storm condition or better using upgraded materials",
    ],
    processSteps: [
      {
        title: "Emergency Response & Tarping",
        description:
          "Within hours of your call, our crew secures your property with professional-grade tarps and boards to prevent additional water intrusion and interior damage.",
      },
      {
        title: "Comprehensive Damage Documentation",
        description:
          "We perform a drone-assisted inspection and create a detailed damage report with photos, measurements, and material specifications that align with insurance company requirements.",
      },
      {
        title: "Insurance Claim Support",
        description:
          "Our insurance specialist files your claim, meets with the adjuster on-site, and advocates for a fair settlement that covers the full scope of necessary repairs or replacement.",
      },
      {
        title: "Restoration & Completion",
        description:
          "Once the claim is approved, we schedule and complete the restoration using materials that meet or exceed pre-storm specifications. Final documentation is provided for your records and insurance file.",
      },
    ],
    materials: [
      "Impact-resistant Class 4 shingles (GAF Armor Shield, Owens Corning WeatherGuard)",
      "High-wind-rated underlayment systems",
      "Reinforced drip edge and ridge vent components",
      "Heavy-duty emergency tarps and board-up materials",
    ],
    faqs: [
      {
        question: "Should I file an insurance claim for storm damage to my roof?",
        answer:
          "Yes, if your roof sustained hail, wind, or debris damage from a storm, you should file a claim promptly. Most homeowner policies cover storm damage as a named peril. Delaying a claim can result in denial due to further deterioration. ProTech Roofing provides free storm damage inspections and handles the claims process at no additional cost.",
      },
      {
        question: "How long do I have to file a roof damage insurance claim?",
        answer:
          "Most insurance policies require you to file a claim within one year of the damage, though some states allow up to two years. We recommend filing as soon as possible because delays can lead to secondary damage that complicates the claim. Our team can inspect your roof and help you file within days of the storm.",
      },
      {
        question: "What does storm damage look like on a roof?",
        answer:
          "Hail damage appears as dark spots, dents, or divots on shingles and dented metal flashing or gutters. Wind damage shows as lifted, creased, or missing shingles, especially along ridges and edges. Debris impact causes cracked or punctured shingles. Many signs of storm damage are not visible from the ground, which is why a professional inspection is critical.",
      },
      {
        question: "Will my insurance rates go up if I file a storm damage claim?",
        answer:
          "In most states, insurers cannot raise your premium solely for filing a weather-related claim since the damage was beyond your control. However, a pattern of multiple claims may affect your rates. ProTech Roofing helps ensure your claim is filed correctly the first time to minimize complications.",
      },
    ],
    metaTitle: "Storm Damage Roof Repair & Insurance Claims | ProTech",
    metaDescription:
      "Storm damage specialists handling insurance claims from start to finish. Emergency tarping, drone inspections, and full restoration. Call for immediate help.",
  },
  {
    name: "Commercial Roofing",
    slug: "commercial-roofing",
    icon: "Building2",
    shortDescription:
      "Minimize downtime with expert commercial roofing services for flat roofs, metal systems, and multi-unit properties.",
    longDescription:
      "Commercial properties demand roofing solutions that minimize business disruption, meet code requirements, and deliver long-term performance on tight budgets. ProTech Roofing provides full-service commercial roofing for retail centers, office buildings, warehouses, and multi-family properties. We specialize in TPO, EPDM, and modified bitumen flat roof systems as well as standing seam metal for industrial applications. Our project managers coordinate work around your business hours, ensure OSHA compliance, and deliver projects on schedule. Preventive maintenance programs extend roof life and protect your investment for decades.",
    benefits: [
      "Flexible scheduling including nights and weekends to minimize business disruption",
      "TPO, EPDM, modified bitumen, and metal roof system expertise",
      "Preventive maintenance programs that extend roof life by 10 to 15 years",
      "OSHA-compliant crews with commercial liability coverage",
      "Manufacturer warranties up to 30 years on qualifying commercial systems",
    ],
    processSteps: [
      {
        title: "Property Assessment & Core Sampling",
        description:
          "We evaluate your existing roof system with core samples, moisture scans, and structural analysis to determine whether repair, overlay, or full replacement is the most cost-effective solution.",
      },
      {
        title: "Detailed Proposal & Scheduling",
        description:
          "You receive a comprehensive proposal outlining scope, materials, timeline, and pricing. We coordinate the installation schedule around your business operations to minimize disruption.",
      },
      {
        title: "Professional Installation",
        description:
          "Our commercial crews execute the project using manufacturer-specified methods, maintaining a clean and safe work site throughout. Daily progress reports keep you informed.",
      },
      {
        title: "Final Inspection & Maintenance Plan",
        description:
          "After passing all inspections, we provide complete warranty documentation and recommend a preventive maintenance schedule to maximize the life of your new roof system.",
      },
    ],
    materials: [
      "TPO (Thermoplastic Polyolefin) single-ply membrane",
      "EPDM (Ethylene Propylene Diene Monomer) rubber membrane",
      "Modified bitumen multi-ply systems",
      "Standing seam metal panels for industrial applications",
      "Spray polyurethane foam (SPF) insulation and coating",
    ],
    faqs: [
      {
        question: "How long does a commercial flat roof last?",
        answer:
          "A well-installed commercial flat roof lasts 20 to 30 years depending on the material. TPO and EPDM systems typically last 20 to 25 years, while modified bitumen can reach 30 years with proper maintenance. Regular inspections and a preventive maintenance plan are the most effective ways to maximize lifespan and avoid premature failure.",
      },
      {
        question: "What is the best roofing material for a commercial building?",
        answer:
          "TPO is the most popular commercial roofing material due to its excellent energy efficiency, durability, and cost-effectiveness. EPDM is preferred for its longevity and low maintenance. The best choice depends on your building's size, location, energy goals, and budget. We evaluate these factors during our free assessment to recommend the ideal system.",
      },
      {
        question: "Can you install a new commercial roof over the existing one?",
        answer:
          "In many cases, yes. If the existing roof has only one layer and the decking is structurally sound, an overlay can save 25 to 40 percent compared to a full tear-off. However, local codes typically limit the number of layers, and moisture trapped beneath the old roof must be addressed. Our core sampling process determines whether an overlay is viable.",
      },
    ],
    metaTitle: "Commercial Roofing Services - Flat Roof Experts | ProTech",
    metaDescription:
      "Expert commercial roofing for flat roofs, metal systems, and multi-unit properties. TPO, EPDM, and maintenance plans. Minimize downtime. Get a free assessment.",
  },
  {
    name: "Roof Inspection",
    slug: "roof-inspection",
    icon: "Search",
    shortDescription:
      "Know your roof's condition before problems start with a comprehensive inspection using thermal imaging and drone technology.",
    longDescription:
      "Proactive roof inspections save homeowners thousands of dollars by catching small issues before they become major failures. ProTech Roofing performs thorough inspections using a combination of hands-on examination, thermal imaging cameras, and drone photography to evaluate every component of your roof system. We check shingles, flashing, vents, gutters, fascia, soffit, attic ventilation, and structural integrity. You receive a detailed written report with photos, condition ratings, and prioritized recommendations. Whether you are buying a home, preparing for storm season, or simply want peace of mind, our inspection gives you the information you need to make smart decisions.",
    benefits: [
      "Comprehensive 42-point inspection covering every roof component",
      "Thermal imaging to detect hidden moisture and insulation gaps",
      "Drone photography for safe, detailed documentation of hard-to-reach areas",
      "Detailed written report with photos, condition ratings, and repair priorities",
      "Ideal for home buyers, sellers, and pre-storm season preparation",
    ],
    processSteps: [
      {
        title: "Schedule Your Inspection",
        description:
          "Book a convenient time online or by phone. Inspections typically take 60 to 90 minutes depending on roof size and complexity.",
      },
      {
        title: "On-Site Evaluation",
        description:
          "Our certified inspector examines your roof from the ground, on the roof surface, and from the attic using thermal cameras, moisture meters, and drone cameras to assess every component.",
      },
      {
        title: "Report Delivery",
        description:
          "Within 24 hours, you receive a comprehensive written report with high-resolution photos, a condition score, and prioritized recommendations for any repairs or maintenance.",
      },
      {
        title: "Consultation & Next Steps",
        description:
          "Your inspector reviews the findings with you, answers questions, and provides repair or replacement estimates if needed. There is never any pressure to proceed with additional services.",
      },
    ],
    materials: [
      "FLIR thermal imaging cameras for moisture detection",
      "DJI commercial drones for aerial documentation",
      "Tramex moisture meters for decking evaluation",
      "Digital reporting system with photo documentation",
    ],
    faqs: [
      {
        question: "How often should I have my roof inspected?",
        answer:
          "We recommend a professional roof inspection at least once every two years and after any major storm event. Roofs over 15 years old benefit from annual inspections. Regular inspections catch developing problems early when repairs are simple and affordable, preventing the need for premature replacement.",
      },
      {
        question: "How much does a professional roof inspection cost?",
        answer:
          "A standard residential roof inspection costs between $150 and $400 depending on the size and complexity of the roof. The investment is minimal compared to the thousands of dollars in hidden damage an inspection can uncover. ProTech Roofing offers free inspections when bundled with a repair or replacement estimate.",
      },
      {
        question: "What does a roof inspector look for?",
        answer:
          "A thorough inspection evaluates shingle condition, flashing integrity, gutter function, vent and chimney seals, soffit and fascia condition, attic ventilation, signs of moisture or mold, and structural integrity. We also check for code compliance issues that could affect your insurance coverage or home sale.",
      },
      {
        question: "Should I get a roof inspection before buying a house?",
        answer:
          "Absolutely. A pre-purchase roof inspection can reveal hidden damage that a general home inspector may miss. Knowing the roof's true condition gives you leverage in negotiations and protects you from inheriting expensive problems. Many buyers have saved thousands by negotiating roof repairs or price reductions based on our inspection reports.",
      },
    ],
    metaTitle: "Roof Inspection Services - Thermal & Drone | ProTech Roofing",
    metaDescription:
      "Comprehensive roof inspections with thermal imaging and drone technology. 42-point evaluation with detailed report. Book your inspection today.",
  },
  {
    name: "Gutters & Siding",
    slug: "gutters-and-siding",
    icon: "Layers",
    shortDescription:
      "Complete exterior protection for your home with seamless gutters, gutter guards, and premium siding installation.",
    longDescription:
      "Your roof is only as effective as the systems that support it. Gutters direct water away from your foundation, and siding protects your walls from moisture, pests, and energy loss. ProTech Roofing provides complete exterior solutions including seamless aluminum and copper gutters, leaf-free gutter guard systems, and vinyl, fiber cement, and engineered wood siding installation. We custom-fabricate seamless gutters on-site for a perfect fit and recommend downspout placement based on your property's grading and drainage patterns. Bundling gutter and siding work with a roof project saves time, money, and ensures a unified exterior that performs as a system.",
    benefits: [
      "Seamless gutters custom-fabricated on-site to eliminate leak-prone seams",
      "Gutter guard systems that prevent clogs and eliminate dangerous ladder cleaning",
      "Premium siding options including James Hardie fiber cement and LP SmartSide",
      "Improved energy efficiency with insulated siding reducing thermal bridging",
      "Bundle savings when combined with roof replacement or repair projects",
    ],
    processSteps: [
      {
        title: "Exterior Assessment",
        description:
          "We evaluate your current gutters and siding, assess drainage patterns, and identify areas of concern such as wood rot, improper grading, or inadequate downspout capacity.",
      },
      {
        title: "Custom Solution Design",
        description:
          "Based on the assessment, we recommend gutter size, material, downspout placement, siding type, and color options that complement your home's architecture and address functional needs.",
      },
      {
        title: "Professional Installation",
        description:
          "Our crews install seamless gutters using on-site fabrication equipment and apply siding with manufacturer-certified techniques. We protect landscaping and clean up daily.",
      },
      {
        title: "Final Review & Warranty",
        description:
          "A walkthrough ensures everything meets our quality standards and your expectations. You receive warranty documentation covering both materials and workmanship.",
      },
    ],
    materials: [
      "Seamless aluminum gutters (5-inch and 6-inch profiles)",
      "Copper half-round gutters for historic and high-end homes",
      "LeafFilter and Gutter Helmet guard systems",
      "James Hardie HardiePlank fiber cement siding",
      "LP SmartSide engineered wood siding",
    ],
    faqs: [
      {
        question: "How much do seamless gutters cost to install?",
        answer:
          "Seamless aluminum gutters typically cost between $6 and $15 per linear foot installed, depending on the profile size and accessibility. For an average home with 150 to 200 feet of gutter, that translates to $900 to $3,000. Copper gutters cost more at $25 to $40 per linear foot. We provide exact pricing during your free exterior assessment.",
      },
      {
        question: "Are gutter guards worth the investment?",
        answer:
          "Yes, quality gutter guards eliminate the need for regular cleaning, prevent clogs that cause water damage to your foundation and fascia, and extend the life of your gutter system. Over 10 years, the cost of gutter guards is typically less than hiring a cleaning service twice per year, and you eliminate the safety risk of ladder work.",
      },
      {
        question: "What is the best siding material for durability?",
        answer:
          "Fiber cement siding, such as James Hardie HardiePlank, is widely considered the most durable option for residential use. It resists fire, insects, rot, and impact while maintaining its appearance for 30 to 50 years with minimal maintenance. Engineered wood siding offers a similar lifespan with a more natural look. Both outperform traditional vinyl in longevity and impact resistance.",
      },
      {
        question:
          "Can you replace gutters and siding at the same time as a roof?",
        answer:
          "Yes, and we strongly recommend it. Bundling these projects saves on setup costs, ensures all exterior components are integrated properly, and means your home is fully protected in one project timeline. Customers who bundle typically save 10 to 15 percent compared to scheduling each project separately.",
      },
    ],
    metaTitle: "Gutters & Siding Installation | ProTech Roofing",
    metaDescription:
      "Seamless gutters, gutter guards, and premium siding installation. Custom on-site fabrication. Bundle with your roof project and save. Free exterior assessment.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}

export function getRelatedServices(currentSlug: string, count = 3): Service[] {
  const filtered = services.filter((service) => service.slug !== currentSlug);
  return filtered.slice(0, count);
}
