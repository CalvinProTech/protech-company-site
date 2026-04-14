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
    slug: 'maria-ontiveros-tile-replacement',
    title: 'Tile Roof Replacement with Solar Integration',
    city: 'El Paso',
    state: 'TX',
    serviceType: 'roof-replacement',
    description:
      'This homeowner had a severely damaged clay tile roof with missing and broken tiles exposing the underlayment. ProTech Roofing removed the old tile system and installed new architectural shingles with proper flashing around existing solar panel mounts. The completed project restored full weather protection while maintaining the solar installation.',
    beforeImage: '/images/projects/project-4-before.webp',
    afterImage: '/images/projects/project-4-after.webp',
    images: [
      '/images/projects/project-4-before.webp',
      '/images/projects/project-4-after.webp',
    ],
    materials:
      'Architectural Shingles, Synthetic Underlayment, Solar Panel Re-mount Hardware',
    timeline: '3 days',
    metaTitle: 'Tile Roof Replacement | ProTech Roofing',
    metaDescription:
      'ProTech replaced a damaged clay tile roof and preserved the solar panel installation. See the before and after photos.',
  },
  {
    id: 5,
    slug: 'georgia-wilson-roof-replacement',
    title: 'Complete Roof Replacement in Ohio',
    city: 'Greenville',
    state: 'OH',
    serviceType: 'roof-replacement',
    description:
      'This older home needed a complete roof tear-off and replacement. The existing roof had significant wear with missing shingles and exposed decking. ProTech Roofing stripped the entire roof, inspected and repaired the decking, and installed new architectural shingles with proper ridge ventilation and chimney flashing.',
    beforeImage: '/images/projects/project-5-before.webp',
    afterImage: '/images/projects/project-5-after.webp',
    images: [
      '/images/projects/project-5-before.webp',
      '/images/projects/project-5-after.webp',
    ],
    materials:
      'Architectural Shingles, Synthetic Underlayment, Aluminum Drip Edge, Chimney Flashing',
    timeline: '2 days',
    metaTitle: 'Complete Roof Replacement in Ohio | ProTech Roofing',
    metaDescription:
      'ProTech completed a full roof replacement on an older home in Ohio with new architectural shingles and chimney flashing. Before and after photos.',
  },
  {
    id: 6,
    slug: 'raymundo-carrera-architectural-shingles',
    title: 'Architectural Shingle Installation in Arizona',
    city: 'Phoenix',
    state: 'AZ',
    serviceType: 'roof-replacement',
    description:
      'A complete roof replacement with premium architectural shingles. The new roof features a multi-toned color profile that adds dimension and curb appeal. ProTech installed proper ridge caps and valley flashing throughout the complex hip-and-valley roof system.',
    beforeImage: '/images/projects/project-6-before.webp',
    afterImage: '/images/projects/project-6-after.webp',
    images: [
      '/images/projects/project-6-before.webp',
      '/images/projects/project-6-after.webp',
    ],
    materials:
      'Premium Architectural Shingles, Ridge Cap Shingles, Valley Flashing',
    timeline: '2 days',
    metaTitle: 'Architectural Shingle Installation | ProTech Roofing',
    metaDescription:
      'ProTech installed premium architectural shingles on a complex hip-and-valley roof. See the completed project photos.',
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
