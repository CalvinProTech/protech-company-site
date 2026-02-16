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
    serviceType: "gutters-and-siding",
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
