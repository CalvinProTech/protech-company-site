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
    slug: 'cleveland-siding-roof-restoration',
    title: 'Complete Siding and Roof Restoration in Cleveland',
    city: 'Cleveland',
    state: 'OH',
    serviceType: 'gutters-siding',
    description:
      'This Cleveland homeowner faced severe exterior deterioration after years of harsh lake-effect weather. The original vinyl siding had been stripped away, exposing bare plywood sheathing to the elements, and the aging shingle roof was showing significant wear. ProTech Roofing performed a complete exterior restoration, replacing all damaged sheathing, installing new James Hardie fiber cement siding in a modern blue colorway, and laying a new architectural shingle roof system. The elevated vantage point in our photos shows the dramatic transformation from exposed framing and worn shingles to a clean, finished exterior with crisp trim details and coordinated dark shingles. The project included new soffit and fascia, gutter replacement, and a full magnetic nail sweep of the property.',
    beforeImage: '/images/projects/project-1-before.webp',
    afterImage: '/images/projects/project-1-after.webp',
    images: [
      '/images/projects/project-1-before.webp',
      '/images/projects/project-1-after.webp',
    ],
    materials:
      'James Hardie Fiber Cement Siding, Architectural Shingles, Aluminum Soffit & Fascia, Seamless Gutters',
    timeline: '7 days',
    metaTitle: 'Cleveland Siding & Roof Restoration | ProTech Roofing',
    metaDescription:
      'See how ProTech Roofing restored a Cleveland home with new fiber cement siding and architectural shingles. Before and after photos of this complete exterior transformation.',
  },
  {
    id: 2,
    slug: 'charleston-wv-standing-seam-metal-roof',
    title: 'Standing Seam Metal Roof Installation in Charleston, WV',
    city: 'Charleston',
    state: 'WV',
    serviceType: 'roof-replacement',
    description:
      'This Kanawha Valley homeowner was tired of recurring ice dams and shingle damage every winter. Their aging asphalt shingle roof had weathered through multiple seasons and was well past its useful life. ProTech Roofing replaced the entire roof system with a 24-gauge standing seam metal roof in a charcoal matte finish. The front-view comparison shows the striking transformation from worn, patchy asphalt shingles to clean, modern standing seam panels with crisp ridge lines. The metal roof eliminates ice dam issues permanently thanks to its slick surface, and the homeowner now enjoys reduced heating costs, zero maintenance, and a roof that will last 50-plus years with a lifetime structural warranty.',
    beforeImage: '/images/projects/project-2-before.webp',
    afterImage: '/images/projects/project-2-after.webp',
    images: [
      '/images/projects/project-2-before.webp',
      '/images/projects/project-2-after.webp',
    ],
    materials:
      '24-Gauge Standing Seam Metal Panels, Grace Ice & Water Shield HT, Balanced Ridge Ventilation System, Snow Guards',
    timeline: '3 days',
    metaTitle:
      'Charleston WV Standing Seam Metal Roof Installation | ProTech Roofing',
    metaDescription:
      'ProTech installed a standing seam metal roof in Charleston, WV to eliminate ice dams. Before and after photos show the dramatic upgrade from asphalt to metal.',
  },
  {
    id: 3,
    slug: 'dallas-full-roof-replacement',
    title: 'Full Roof Replacement with Architectural Shingles in Dallas',
    city: 'Dallas',
    state: 'TX',
    serviceType: 'storm-damage',
    description:
      'After a severe hailstorm swept through this Dallas neighborhood, this homeowner needed a complete roof replacement. Our drone aerial photography captured the full scope of the damage — missing shingles, exposed underlayment, and impact marks across the entire roof surface. ProTech Roofing worked with the homeowner\'s insurance company to document every impact point, resulting in a fully approved claim for complete replacement. The bird\'s-eye before-and-after comparison shows the transformation from a storm-battered surface to a uniform, professionally installed architectural shingle system. The project included new synthetic underlayment, aluminum drip edge, upgraded ridge ventilation, and impact-resistant ridge caps.',
    beforeImage: '/images/projects/project-3-before.webp',
    afterImage: '/images/projects/project-3-after.webp',
    images: [
      '/images/projects/project-3-before.webp',
      '/images/projects/project-3-after.webp',
    ],
    materials:
      'Owens Corning Duration STORM Impact-Resistant Shingles, ProArmor Synthetic Underlayment, Aluminum Drip Edge, Cobra Ridge Vent',
    timeline: '2 days',
    metaTitle:
      'Dallas Full Roof Replacement After Storm Damage | ProTech Roofing',
    metaDescription:
      'ProTech replaced a hail-damaged roof in Dallas with impact-resistant shingles. Drone before and after photos show the complete transformation.',
  },
  {
    id: 4,
    slug: 'miami-concrete-tile-roof-replacement',
    title: 'Concrete Tile Roof Replacement with Solar Integration in Miami',
    city: 'Miami',
    state: 'FL',
    serviceType: 'roof-replacement',
    description:
      'This Miami homeowner\'s concrete tile roof had suffered decades of UV degradation and hurricane damage, with cracked, displaced, and crumbling red clay tiles creating multiple leak points along the ridge line. The project required careful coordination around existing solar panel installations. ProTech Roofing removed all damaged tiles, repaired the underlayment system, and installed new concrete flat tiles in a modern dark charcoal finish that complements the solar panels. The before-and-after comparison along the ridge line shows the dramatic improvement — from broken, debris-strewn red tiles to clean, uniform dark tiles with properly sealed flashing. All work met Miami-Dade County high-velocity hurricane zone requirements.',
    beforeImage: '/images/projects/project-4-before.webp',
    afterImage: '/images/projects/project-4-after.webp',
    images: [
      '/images/projects/project-4-before.webp',
      '/images/projects/project-4-after.webp',
    ],
    materials:
      'Concrete Flat Roof Tiles, Modified Bitumen Underlayment, Stainless Steel Hurricane Clips, Lead Boot Flashings',
    timeline: '5 days',
    metaTitle:
      'Miami Concrete Tile Roof Replacement | ProTech Roofing',
    metaDescription:
      'ProTech replaced a damaged concrete tile roof in Miami with new hurricane-rated tiles around existing solar panels. See the before and after photos.',
  },
  {
    id: 5,
    slug: 'atlanta-storm-damage-restoration',
    title: 'Storm Damage Roof Restoration in Atlanta',
    city: 'Atlanta',
    state: 'GA',
    serviceType: 'storm-damage',
    description:
      'A severe spring thunderstorm with golf-ball-sized hail swept through this Buckhead neighborhood, leaving over 150 documented impact marks across the 2,800-square-foot roof surface. Multiple shingles were cracked or displaced and the ridge cap was damaged in several locations. ProTech Roofing responded within hours with emergency tarping, then conducted a comprehensive drone inspection that documented every impact point for the insurance claim. The homeowner\'s claim was approved for a full replacement. ProTech installed Owens Corning Duration STORM Class 4 impact-resistant shingles, new aluminum drip edge, and upgraded ridge ventilation. The impact-resistant upgrade qualified the homeowner for a 20 percent insurance premium discount going forward.',
    beforeImage: '/images/projects/project-5-before.webp',
    afterImage: '/images/projects/project-5-after.webp',
    images: [
      '/images/projects/project-5-before.webp',
      '/images/projects/project-5-after.webp',
    ],
    materials:
      'Owens Corning Duration STORM Impact-Resistant Shingles, ProArmor Synthetic Underlayment, Aluminum Drip Edge',
    timeline: '2 days',
    metaTitle: 'Atlanta Storm Damage Roof Restoration | ProTech Roofing',
    metaDescription:
      'ProTech restored a hail-damaged Buckhead home with Class 4 impact-resistant shingles. Full insurance claim handling. See before and after photos.',
  },
  {
    id: 6,
    slug: 'houston-commercial-tpo-install',
    title: 'Commercial TPO Roof Installation in Houston',
    city: 'Houston',
    state: 'TX',
    serviceType: 'commercial-roofing',
    description:
      'A Houston retail strip center with four tenant spaces had a failing modified bitumen roof system that was causing persistent leaks into multiple units and driving up energy costs. ProTech Roofing removed the old system, repaired structural decking at three locations, and installed a new 60-mil TPO single-ply membrane with 3-inch polyiso insulation board beneath. The project was phased over two weekends to minimize disruption to the tenants, with each section completed and watertight before moving to the next. The new Energy Star-rated white TPO membrane reduced the building\'s cooling load by an estimated 22 percent. The property owner received a 25-year NDL (No Dollar Limit) manufacturer warranty from Carlisle SynTec.',
    beforeImage: '/images/projects/project-6-before.webp',
    afterImage: '/images/projects/project-6-after.webp',
    images: [
      '/images/projects/project-6-before.webp',
      '/images/projects/project-6-after.webp',
    ],
    materials:
      'Carlisle SynTec 60-mil TPO Membrane, 3-inch Polyiso Insulation Board, Carlisle FAST Adhesive',
    timeline: '10 days (phased over two weekends)',
    metaTitle: 'Houston Commercial TPO Roof Installation | ProTech Roofing',
    metaDescription:
      'ProTech installed a 24,000 sq ft TPO roof for a Houston retail center with minimal tenant disruption. Energy costs dropped 22%. See the project details.',
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
