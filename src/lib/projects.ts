export interface Project {
  id: number;
  slug: string;
  title: string;
  city: string;
  state: string;
  serviceType: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  images: string[];
  materials: string;
  timeline: string;
  metaTitle: string;
  metaDescription: string;
}

const projects: Project[] = [
  {
    id: 1,
    slug: "tampa-hurricane-roof-replacement",
    title: "Complete Hurricane Damage Roof Replacement in Tampa",
    city: "Tampa",
    state: "FL",
    serviceType: "roof-replacement",
    description:
      "This Tampa homeowner's 18-year-old architectural shingle roof suffered catastrophic damage during a Category 2 hurricane, with over 40 percent of shingles torn away and significant decking exposure on the south and west faces. Water had infiltrated the attic causing mold growth on the rafters and saturating insulation. ProTech Roofing removed the entire roof system, replaced 22 sheets of damaged OSB decking, treated mold-affected areas, and installed a new GAF Timberline HDZ system with StormGuard leak barrier on all eaves, valleys, and penetrations. The project included new aluminum drip edge, upgraded ridge ventilation, and a full magnetic nail sweep of the property. The homeowner received a GAF Golden Pledge warranty providing 50-year material coverage and a lifetime workmanship guarantee.",
    beforeImage: "/images/projects/project-1-before.jpg",
    afterImage: "/images/projects/project-1-after.jpg",
    images: [
      "/images/projects/project-1-before.jpg",
      "/images/projects/project-1-progress-1.jpg",
      "/images/projects/project-1-progress-2.jpg",
      "/images/projects/project-1-after.jpg",
    ],
    materials: "GAF Timberline HDZ Architectural Shingles, StormGuard Leak Barrier, Cobra Snow Country Ridge Vent",
    timeline: "3 days",
    metaTitle: "Tampa Hurricane Roof Replacement Project | ProTech Roofing",
    metaDescription:
      "See how ProTech Roofing replaced a hurricane-damaged roof in Tampa in 3 days. Before and after photos, materials, and project details.",
  },
  {
    id: 2,
    slug: "dallas-hail-damage-restoration",
    title: "Hail Damage Restoration with Impact-Resistant Upgrade in Dallas",
    city: "Dallas",
    state: "TX",
    serviceType: "storm-damage",
    description:
      "A severe spring hailstorm deposited golf-ball-sized hail across this Plano-area neighborhood, leaving this 3,200-square-foot home with over 200 documented impact marks across the roof surface, dented gutters, and cracked ridge cap shingles. ProTech Roofing's drone inspection captured comprehensive damage documentation that resulted in a full insurance-approved replacement. The homeowner upgraded from standard 3-tab shingles to Owens Corning Duration STORM Class 4 impact-resistant shingles, qualifying for a 28 percent insurance premium discount going forward. The project included new step flashing at two dormers, replacement of all damaged gutters, and installation of a new powered attic ventilator.",
    beforeImage: "/images/projects/project-2-before.jpg",
    afterImage: "/images/projects/project-2-after.jpg",
    images: [
      "/images/projects/project-2-before.jpg",
      "/images/projects/project-2-drone-1.jpg",
      "/images/projects/project-2-progress-1.jpg",
      "/images/projects/project-2-after.jpg",
    ],
    materials: "Owens Corning Duration STORM Impact-Resistant Shingles, ProArmor Synthetic Underlayment, Aluminum Step Flashing",
    timeline: "2 days",
    metaTitle: "Dallas Hail Damage Roof Restoration | ProTech Roofing",
    metaDescription:
      "ProTech restored this Dallas home after severe hail damage with impact-resistant shingles. Full insurance claim handling. See the before and after.",
  },
  {
    id: 3,
    slug: "louisville-historic-home-reroof",
    title: "Historic Craftsman Home Reroof in Louisville's Highlands",
    city: "Louisville",
    state: "KY",
    serviceType: "roof-replacement",
    description:
      "This 1924 Craftsman bungalow in Louisville's Highlands neighborhood had its original slate roof replaced decades ago with mismatched asphalt shingles that detracted from the home's historic character. The homeowner wanted a roof that honored the original architecture while meeting modern performance standards. ProTech Roofing installed CertainTeed Grand Manor luxury shingles that replicate the dimensional look of natural slate at a fraction of the weight and cost. The project required careful work around original copper flashing details, a rebuilt chimney cricket, and custom valley treatments. Fourteen sheets of decking were replaced after moisture damage was discovered during tear-off. The final result restored the home's curb appeal and earned recognition from the local historic preservation board.",
    beforeImage: "/images/projects/project-3-before.jpg",
    afterImage: "/images/projects/project-3-after.jpg",
    images: [
      "/images/projects/project-3-before.jpg",
      "/images/projects/project-3-detail-1.jpg",
      "/images/projects/project-3-progress-1.jpg",
      "/images/projects/project-3-after.jpg",
    ],
    materials: "CertainTeed Grand Manor Luxury Shingles, Grace Ice & Water Shield, Copper Chimney Flashing",
    timeline: "4 days",
    metaTitle: "Louisville Historic Home Roof Replacement | ProTech Roofing",
    metaDescription:
      "See how ProTech restored a 1924 Louisville Craftsman with luxury shingles replicating slate. Historic-quality results with modern performance.",
  },
  {
    id: 4,
    slug: "houston-commercial-tpo-install",
    title: "24,000 Sq Ft Commercial TPO Roof Installation in Houston",
    city: "Houston",
    state: "TX",
    serviceType: "commercial-roofing",
    description:
      "A Houston retail strip center with four tenant spaces had a failing modified bitumen roof system that was causing persistent leaks into multiple units and driving up energy costs. ProTech Roofing removed the old system, repaired structural decking at three locations, and installed a new 60-mil TPO single-ply membrane with 3-inch polyiso insulation board beneath. The project was phased over two weekends to minimize disruption to the tenants, with each section completed and watertight before moving to the next. The new Energy Star-rated white TPO membrane reduced the building's cooling load by an estimated 22 percent. The property owner received a 25-year NDL (No Dollar Limit) manufacturer warranty from Carlisle SynTec.",
    beforeImage: "/images/projects/project-4-before.jpg",
    afterImage: "/images/projects/project-4-after.jpg",
    images: [
      "/images/projects/project-4-before.jpg",
      "/images/projects/project-4-progress-1.jpg",
      "/images/projects/project-4-progress-2.jpg",
      "/images/projects/project-4-after.jpg",
    ],
    materials: "Carlisle SynTec 60-mil TPO Membrane, 3-inch Polyiso Insulation Board, Carlisle FAST Adhesive",
    timeline: "10 days (phased over two weekends)",
    metaTitle: "Houston Commercial TPO Roof Installation | ProTech Roofing",
    metaDescription:
      "ProTech installed a 24,000 sq ft TPO roof for a Houston retail center with minimal tenant disruption. Energy costs dropped 22%. See the project details.",
  },
  {
    id: 5,
    slug: "miami-concrete-tile-replacement",
    title: "Miami-Dade Approved Concrete Tile Roof Replacement in Coral Gables",
    city: "Miami",
    state: "FL",
    serviceType: "roof-replacement",
    description:
      "This Mediterranean Revival home in Coral Gables required a full tile roof replacement after decades of UV degradation and multiple hurricane seasons had cracked and displaced over 30 percent of the original concrete barrel tiles. The project had to meet Miami-Dade County's stringent high-velocity hurricane zone requirements including NOA-approved materials and enhanced fastening patterns. ProTech Roofing installed Eagle Roofing Products concrete barrel tiles with a hot-mopped modified bitumen underlayment system. Every tile was mechanically fastened with stainless steel clips and foam-adhesive set to withstand winds exceeding 175 mph. The project included new lead boot flashings, a rebuilt parapet cap, and custom-matched tile color to satisfy the Coral Gables historic zoning board.",
    beforeImage: "/images/projects/project-5-before.jpg",
    afterImage: "/images/projects/project-5-after.jpg",
    images: [
      "/images/projects/project-5-before.jpg",
      "/images/projects/project-5-progress-1.jpg",
      "/images/projects/project-5-detail-1.jpg",
      "/images/projects/project-5-after.jpg",
    ],
    materials: "Eagle Roofing Concrete Barrel Tiles, Modified Bitumen Underlayment, Stainless Steel Hurricane Clips",
    timeline: "6 days",
    metaTitle: "Miami Concrete Tile Roof Replacement | ProTech Roofing",
    metaDescription:
      "Miami-Dade approved concrete tile replacement on a Coral Gables historic home. Hurricane-rated installation with 175 mph wind resistance. See project photos.",
  },
  {
    id: 6,
    slug: "columbus-emergency-leak-repair",
    title: "Emergency Leak Repair and Partial Reroof in Columbus",
    city: "Columbus",
    state: "OH",
    serviceType: "roof-repair",
    description:
      "A Columbus homeowner in the Clintonville neighborhood called ProTech Roofing during an active rainstorm with water cascading through a second-floor bathroom ceiling. Our emergency team arrived within two hours and deployed a tarp to stop the immediate intrusion. Thermal imaging the following day revealed that a 15-foot section of valley flashing had corroded through, allowing water to pool beneath the shingles and saturate the decking. The repair involved removing shingles along both sides of the valley, replacing four sheets of water-damaged plywood decking, installing new ice-and-water shield membrane along the entire valley run, new galvanized valley flashing, and reinstalling matching architectural shingles. The homeowner went from panic to a fully waterproof roof in 48 hours.",
    beforeImage: "/images/projects/project-6-before.jpg",
    afterImage: "/images/projects/project-6-after.jpg",
    images: [
      "/images/projects/project-6-before.jpg",
      "/images/projects/project-6-thermal-1.jpg",
      "/images/projects/project-6-progress-1.jpg",
      "/images/projects/project-6-after.jpg",
    ],
    materials: "GAF WeatherWatch Ice & Water Shield, Galvanized Valley Flashing, CDX Plywood Decking, Matching Architectural Shingles",
    timeline: "2 days (including emergency response)",
    metaTitle: "Columbus Emergency Roof Leak Repair | ProTech Roofing",
    metaDescription:
      "ProTech responded to an active roof leak in Columbus within 2 hours. Thermal imaging found corroded valley flashing. Full repair in 48 hours. See the results.",
  },
  {
    id: 7,
    slug: "austin-standing-seam-metal-roof",
    title: "Energy-Efficient Standing Seam Metal Roof in Austin",
    city: "Austin",
    state: "TX",
    serviceType: "roof-replacement",
    description:
      "This Austin homeowner in the Barton Hills neighborhood wanted to replace an aging asphalt shingle roof with an eco-friendly metal system that would reduce energy costs and complement the mid-century modern architecture. ProTech Roofing installed a 24-gauge Galvalume standing seam metal roof with a Kynar 500 paint finish in a charcoal matte color. The system included integrated snow guards, a continuous ridge vent concealed within the standing seam profile, and new insulated soffit panels to improve attic airflow. Energy monitoring after installation showed a 23 percent reduction in summer cooling costs compared to the previous year. The roof carries a 40-year manufacturer paint warranty and a lifetime structural warranty, with an expected service life exceeding 60 years.",
    beforeImage: "/images/projects/project-7-before.jpg",
    afterImage: "/images/projects/project-7-after.jpg",
    images: [
      "/images/projects/project-7-before.jpg",
      "/images/projects/project-7-progress-1.jpg",
      "/images/projects/project-7-detail-1.jpg",
      "/images/projects/project-7-after.jpg",
    ],
    materials: "24-Gauge Galvalume Standing Seam Panels, Kynar 500 Finish, Insulated Soffit Panels, Concealed Ridge Vent",
    timeline: "4 days",
    metaTitle: "Austin Standing Seam Metal Roof Installation | ProTech Roofing",
    metaDescription:
      "ProTech installed an energy-efficient standing seam metal roof in Austin. Cooling costs dropped 23%. 60+ year lifespan. See before and after photos.",
  },
  {
    id: 8,
    slug: "cleveland-siding-gutter-overhaul",
    title: "Complete Siding and Gutter Replacement in Cleveland",
    city: "Cleveland",
    state: "OH",
    serviceType: "gutters-siding",
    description:
      "A Cleveland homeowner in the Lakewood area needed a full exterior overhaul after years of lake-effect weather had deteriorated the original vinyl siding and corroded the sectional aluminum gutters. The existing siding was warped, faded, and allowing moisture behind the wall sheathing, while the gutters leaked at every seam and had pulled away from the fascia in multiple locations. ProTech Roofing removed all existing siding and gutters, repaired areas of damaged wall sheathing and fascia board, and installed James Hardie HardiePlank fiber cement siding with a factory-applied ColorPlus finish. New 6-inch seamless aluminum gutters were custom-fabricated on-site with LeafFilter gutter guards to handle the heavy debris from surrounding mature oak trees. The project transformed the home's appearance and eliminated all water intrusion issues that had plagued the owner for years.",
    beforeImage: "/images/projects/project-8-before.jpg",
    afterImage: "/images/projects/project-8-after.jpg",
    images: [
      "/images/projects/project-8-before.jpg",
      "/images/projects/project-8-progress-1.jpg",
      "/images/projects/project-8-progress-2.jpg",
      "/images/projects/project-8-after.jpg",
    ],
    materials: "James Hardie HardiePlank Siding, ColorPlus Factory Finish, 6-inch Seamless Aluminum Gutters, LeafFilter Gutter Guards",
    timeline: "7 days",
    metaTitle: "Cleveland Siding & Gutter Replacement | ProTech Roofing",
    metaDescription:
      "ProTech replaced deteriorated siding and gutters on a Cleveland home with James Hardie fiber cement and seamless gutters. Full exterior transformation.",
  },
  {
    id: 9,
    slug: "atlanta-storm-damage-restoration",
    title: "Storm Damage Roof Restoration in Atlanta's Buckhead",
    city: "Atlanta",
    state: "GA",
    serviceType: "storm-damage",
    description:
      "A severe spring thunderstorm with golf-ball-sized hail swept through this Buckhead neighborhood, leaving over 150 documented impact marks across the 2,800-square-foot roof surface. Multiple shingles were cracked or displaced and the ridge cap was damaged in several locations. ProTech Roofing responded within hours with emergency tarping, then conducted a comprehensive drone inspection that documented every impact point for the insurance claim. The homeowner's claim was approved for a full replacement. ProTech installed Owens Corning Duration STORM Class 4 impact-resistant shingles, new aluminum drip edge, and upgraded ridge ventilation. The impact-resistant upgrade qualified the homeowner for a 20 percent insurance premium discount going forward.",
    beforeImage: "/images/projects/project-9-before.jpg",
    afterImage: "/images/projects/project-9-after.jpg",
    images: [
      "/images/projects/project-9-before.jpg",
      "/images/projects/project-9-drone-1.jpg",
      "/images/projects/project-9-progress-1.jpg",
      "/images/projects/project-9-after.jpg",
    ],
    materials: "Owens Corning Duration STORM Impact-Resistant Shingles, ProArmor Synthetic Underlayment, Aluminum Drip Edge",
    timeline: "2 days",
    metaTitle: "Atlanta Storm Damage Roof Restoration | ProTech Roofing",
    metaDescription:
      "ProTech restored a hail-damaged Buckhead home with Class 4 impact-resistant shingles. Full insurance claim handling. See before and after photos.",
  },
  {
    id: 10,
    slug: "charlotte-roof-replacement",
    title: "Full Roof Replacement with Architectural Shingles in Charlotte",
    city: "Charlotte",
    state: "NC",
    serviceType: "roof-replacement",
    description:
      "This Charlotte homeowner in the Myers Park neighborhood had a 28-year-old three-tab shingle roof that was well past its useful life. Multiple areas showed granule loss, curling, and the beginning of moss growth along the north-facing slope. ProTech Roofing performed a complete tear-off, replaced six sheets of moisture-damaged OSB decking, and installed a new GAF Timberline HDZ architectural shingle system with StormGuard leak barrier at all eaves and valleys. The project included new aluminum step flashing at two chimneys, a rebuilt cricket behind the main chimney, and upgraded soffit ventilation to improve airflow and reduce attic temperatures. The homeowner received a GAF Golden Pledge warranty.",
    beforeImage: "/images/projects/project-10-before.jpg",
    afterImage: "/images/projects/project-10-after.jpg",
    images: [
      "/images/projects/project-10-before.jpg",
      "/images/projects/project-10-progress-1.jpg",
      "/images/projects/project-10-progress-2.jpg",
      "/images/projects/project-10-after.jpg",
    ],
    materials: "GAF Timberline HDZ Architectural Shingles, StormGuard Leak Barrier, Aluminum Step Flashing, Cobra Ridge Vent",
    timeline: "3 days",
    metaTitle: "Charlotte Roof Replacement Project | ProTech Roofing",
    metaDescription:
      "See how ProTech replaced a 28-year-old roof in Charlotte's Myers Park with GAF architectural shingles. Before and after photos and project details.",
  },
  {
    id: 11,
    slug: "charleston-hurricane-rated-install",
    title: "Hurricane-Rated Roof Installation in Charleston's Mount Pleasant",
    city: "Charleston",
    state: "SC",
    serviceType: "roof-replacement",
    description:
      "After sustaining significant wind damage during hurricane season, this Mount Pleasant homeowner decided to upgrade from standard shingles to a high-wind-rated system that would better protect their coastal property. ProTech Roofing removed the damaged roof, repaired structural decking at multiple locations, and installed a CertainTeed Landmark PRO shingle system with enhanced nailing patterns rated for 130 mph winds. The project included new ice-and-water shield along all eaves, stainless steel hip and ridge fasteners, and reinforced drip edge. The installation met South Carolina's coastal building code requirements and the homeowner received manufacturer and workmanship warranties.",
    beforeImage: "/images/projects/project-11-before.jpg",
    afterImage: "/images/projects/project-11-after.jpg",
    images: [
      "/images/projects/project-11-before.jpg",
      "/images/projects/project-11-progress-1.jpg",
      "/images/projects/project-11-detail-1.jpg",
      "/images/projects/project-11-after.jpg",
    ],
    materials: "CertainTeed Landmark PRO Shingles, Grace Ice & Water Shield, Stainless Steel Ridge Fasteners, Reinforced Drip Edge",
    timeline: "3 days",
    metaTitle: "Charleston Hurricane-Rated Roof Installation | ProTech Roofing",
    metaDescription:
      "ProTech installed a hurricane-rated roof in Mount Pleasant, SC with 130 mph wind rating. Coastal code compliant. See the project details.",
  },
  {
    id: 12,
    slug: "philadelphia-flat-roof-tpo",
    title: "Row Home Flat Roof TPO Replacement in South Philadelphia",
    city: "Philadelphia",
    state: "PA",
    serviceType: "commercial-roofing",
    description:
      "This South Philadelphia row home had a failing modified bitumen flat roof that had been patched repeatedly over 20 years. The homeowner was dealing with persistent leaks in the kitchen and bathroom that worsened with every rainstorm. ProTech Roofing removed the old multi-layer roof system, replaced damaged plywood decking, and installed a new 60-mil TPO single-ply membrane with tapered insulation for proper drainage. The crew navigated the tight city street access and completed the project in two days with minimal disruption to neighbors. The new white TPO membrane improved energy efficiency and the homeowner received a 20-year manufacturer warranty.",
    beforeImage: "/images/projects/project-12-before.jpg",
    afterImage: "/images/projects/project-12-after.jpg",
    images: [
      "/images/projects/project-12-before.jpg",
      "/images/projects/project-12-progress-1.jpg",
      "/images/projects/project-12-progress-2.jpg",
      "/images/projects/project-12-after.jpg",
    ],
    materials: "60-mil TPO Single-Ply Membrane, Tapered Polyiso Insulation, CDX Plywood Decking, TPO-Coated Drip Edge",
    timeline: "2 days",
    metaTitle: "Philadelphia Flat Roof TPO Replacement | ProTech Roofing",
    metaDescription:
      "ProTech replaced a leaking flat roof on a South Philly row home with TPO membrane. Zero leaks and improved energy efficiency. See the results.",
  },
  {
    id: 13,
    slug: "nashville-storm-damage-restoration",
    title: "Hail Damage Roof Restoration in Franklin, TN",
    city: "Nashville",
    state: "TN",
    serviceType: "storm-damage",
    description:
      "A severe spring hailstorm caused extensive damage to this Franklin home's 15-year-old architectural shingle roof, with hundreds of impact marks across the entire surface and cracked ridge cap shingles. The homeowner's insurance company initially undervalued the claim by $7,000. ProTech Roofing documented every impact point with high-resolution drone photography and thermal imaging, then met with the adjuster on-site to advocate for full replacement. The claim was approved for the full amount within two weeks. Our crew removed the old roof, replaced six sheets of damaged decking, and installed new Class 4 impact-resistant shingles rated for 130 mph winds. The project was completed in two days with full yard cleanup and magnetic nail sweeping.",
    beforeImage: "/images/projects/project-13-before.jpg",
    afterImage: "/images/projects/project-13-after.jpg",
    images: [
      "/images/projects/project-13-before.jpg",
      "/images/projects/project-13-progress-1.jpg",
      "/images/projects/project-13-progress-2.jpg",
      "/images/projects/project-13-after.jpg",
    ],
    materials: "Owens Corning Duration STORM Impact-Resistant Shingles, GAF WeatherWatch Ice & Water Shield, Replacement OSB Decking, Cobra Ridge Vent",
    timeline: "2 days",
    metaTitle: "Nashville Hail Damage Roof Restoration | ProTech Roofing",
    metaDescription:
      "ProTech restored a hail-damaged roof in Franklin, TN with impact-resistant shingles. Full insurance claim handled. See the project details.",
  },
  {
    id: 14,
    slug: "charleston-wv-metal-roof-install",
    title: "Standing Seam Metal Roof Installation in Charleston, WV",
    city: "Charleston",
    state: "WV",
    serviceType: "roof-replacement",
    description:
      "This Kanawha Valley homeowner was tired of dealing with recurring ice dams and shingle damage every winter. Their 22-year-old three-tab shingle roof had been patched multiple times and was past its useful life. ProTech Roofing installed a new 24-gauge standing seam metal roof system with concealed fasteners, proper ice-and-water shield on all eaves and valleys, and improved ridge ventilation to eliminate moisture buildup. The metal roof's slick surface prevents snow and ice accumulation, solving the ice dam problem permanently. The crew completed the entire project in three days despite the steep roof pitch. The homeowner now enjoys reduced heating costs, zero maintenance, and a roof that will last 50-plus years.",
    beforeImage: "/images/projects/project-14-before.jpg",
    afterImage: "/images/projects/project-14-after.jpg",
    images: [
      "/images/projects/project-14-before.jpg",
      "/images/projects/project-14-progress-1.jpg",
      "/images/projects/project-14-progress-2.jpg",
      "/images/projects/project-14-after.jpg",
    ],
    materials: "24-Gauge Standing Seam Metal Panels, Grace Ice & Water Shield HT, Balanced Ridge Ventilation System, Drip Edge and Snow Guards",
    timeline: "3 days",
    metaTitle: "Charleston WV Metal Roof Installation | ProTech Roofing",
    metaDescription:
      "ProTech installed a standing seam metal roof in Charleston, WV to eliminate ice dams. 50-year lifespan. See the transformation.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCity(city: string): Project[] {
  return projects.filter(
    (project) => project.city.toLowerCase() === city.toLowerCase()
  );
}

export function getProjectsByService(serviceType: string): Project[] {
  return projects.filter((project) => project.serviceType === serviceType);
}

export function getAllProjects(): Project[] {
  return projects;
}
