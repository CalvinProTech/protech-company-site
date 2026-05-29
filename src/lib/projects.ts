import { LICENSED_STATES } from './constants';

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
    slug: 'snow-hill-md-roof-replacement',
    title: 'Full Roof Replacement in Snow Hill, MD',
    city: 'Snow Hill',
    state: 'MD',
    serviceType: 'roof-replacement',
    description:
      'Levance\'s coastal Maryland home was due for a full replacement after years of Atlantic salt air and Nor\'easter wind exposure. Our crew tore off the existing layers, replaced sections of decking that had absorbed moisture along the valleys, and installed a hurricane-rated underlayment with reinforced flashing throughout. Completed under permit with the County and turned over with the full lifetime workmanship warranty.',
    beforeImage: '/images/projects/project-1-before.webp',
    afterImage: '/images/projects/project-1-after.webp',
    images: [
      '/images/projects/project-1-before.webp',
      '/images/projects/project-1-after.webp',
    ],
    materials: 'GAF Timberline HDZ architectural shingles, synthetic underlayment, ice & water shield, reinforced drip edge',
    timeline: '2 days',
    metaTitle: 'Roof Replacement in Snow Hill, MD | ProTech Roofing Project',
    metaDescription:
      'Coastal Maryland roof replacement: full tear-off, decking repair, hurricane-rated underlayment. See the before-and-after of this Snow Hill project.',
  },
  {
    id: 2,
    slug: 'navarre-fl-roof-replacement',
    title: 'Storm-Resilient Roof Replacement in Navarre, FL',
    city: 'Navarre',
    state: 'FL',
    serviceType: 'roof-replacement',
    description:
      'Charles\'s Navarre home sits on the Florida Panhandle where hurricane-driven wind and salt-air exposure age roofs faster than the rest of the state. We installed a Cat-4-rated system with hurricane straps, a secondary water barrier, and reinforced roof-to-wall connections — every feature documented for the OIR-B1-1802 wind mitigation form so the homeowner could capture insurance premium discounts.',
    beforeImage: '/images/projects/project-2-before.webp',
    afterImage: '/images/projects/project-2-after.webp',
    images: [
      '/images/projects/project-2-before.webp',
      '/images/projects/project-2-after.webp',
    ],
    materials: 'GAF Timberline HDZ impact-resistant shingles, hurricane-rated underlayment, secondary water barrier',
    timeline: '2 days',
    metaTitle: 'Hurricane-Rated Roof Replacement in Navarre, FL | ProTech Roofing',
    metaDescription:
      'Navarre Florida Panhandle home upgraded to a Cat-4-rated roof system with full wind mitigation documentation. Before-and-after project gallery.',
  },
  {
    id: 3,
    slug: 'kutztown-pa-roof-replacement',
    title: 'Architectural Shingle Replacement in Kutztown, PA',
    city: 'Kutztown',
    state: 'PA',
    serviceType: 'roof-replacement',
    description:
      'Karen\'s Pennsylvania home needed a full replacement before another winter of freeze-thaw cycles compromised the existing shingles further. Our crew installed algae-resistant architectural shingles with ice and water shield in the eaves and valleys, plus a balanced ridge-and-soffit ventilation system to prevent ice damming. Pulled all permits with the township and completed the inspection in two days.',
    beforeImage: '/images/projects/project-3-before.webp',
    afterImage: '/images/projects/project-3-after.webp',
    images: [
      '/images/projects/project-3-before.webp',
      '/images/projects/project-3-after.webp',
    ],
    materials: 'GAF Timberline HDZ algae-resistant shingles, ice & water shield, ridge ventilation',
    timeline: '2 days',
    metaTitle: 'Roof Replacement in Kutztown, PA | ProTech Roofing Project',
    metaDescription:
      'Pennsylvania roof replacement with algae-resistant architectural shingles and balanced ventilation. See the Kutztown before-and-after.',
  },
  {
    id: 4,
    slug: 'glen-saint-mary-fl-roof-replacement',
    title: 'Full Roof Replacement in Glen Saint Mary, FL',
    city: 'Glen Saint Mary',
    state: 'FL',
    serviceType: 'roof-replacement',
    description:
      'Franklin\'s North Florida home was showing classic signs of UV-driven shingle wear plus moisture intrusion at the chimney flashing. We tore off the existing system, replaced compromised decking, installed a complete new GAF system with reinforced flashing throughout, and provided OIR-B1-1802 documentation for insurance premium discounts.',
    beforeImage: '/images/projects/project-4-before.webp',
    afterImage: '/images/projects/project-4-after.webp',
    images: [
      '/images/projects/project-4-before.webp',
      '/images/projects/project-4-after.webp',
    ],
    materials: 'GAF Timberline HDZ shingles, synthetic underlayment, reinforced step and counter flashing',
    timeline: '2 days',
    metaTitle: 'Roof Replacement in Glen Saint Mary, FL | ProTech Roofing',
    metaDescription:
      'North Florida roof replacement with full decking repair, GAF system, and wind mitigation documentation. Before-and-after of this Glen Saint Mary project.',
  },
  {
    id: 5,
    slug: 'tampa-fl-roof-replacement',
    title: 'Tampa Bayshore Roof Replacement',
    city: 'Tampa',
    state: 'FL',
    serviceType: 'roof-replacement',
    description:
      'Donald\'s Tampa home sits within reach of Gulf storm cells and required a full system upgrade with hurricane-rated components. We installed Cat-4-rated underlayment, reinforced drip edge, and a complete GAF Timberline HDZ shingle system. Permits pulled with the City of Tampa, final inspection scheduled with Hillsborough County, full lifetime workmanship warranty.',
    beforeImage: '/images/projects/project-5-before.webp',
    afterImage: '/images/projects/project-5-after.webp',
    images: [
      '/images/projects/project-5-before.webp',
      '/images/projects/project-5-after.webp',
    ],
    materials: 'GAF Timberline HDZ shingles, Cat-4-rated underlayment, reinforced drip edge',
    timeline: '2 days',
    metaTitle: 'Tampa Roof Replacement Project | ProTech Roofing',
    metaDescription:
      'Tampa, FL roof replacement: full GAF system with Cat-4-rated underlayment and lifetime warranty. See the Bayshore-area before-and-after.',
  },
  {
    id: 6,
    slug: 'st-petersburg-fl-roof-replacement',
    title: 'St. Petersburg Coastal Roof Replacement',
    city: 'St. Petersburg',
    state: 'FL',
    serviceType: 'roof-replacement',
    description:
      'Judy\'s St. Pete home faced the combined wear of Gulf-coast salt air and intense UV exposure. Our team tore off the aging shingles, refastened sections of decking that had loosened, installed new flashing around every penetration, and finished with a GAF architectural shingle system. Documented for wind mitigation, completed in two days, transferable warranty included.',
    beforeImage: '/images/projects/project-6-before.webp',
    afterImage: '/images/projects/project-6-after.webp',
    images: [
      '/images/projects/project-6-before.webp',
      '/images/projects/project-6-after.webp',
    ],
    materials: 'GAF Timberline HDZ shingles, synthetic underlayment, full flashing replacement',
    timeline: '2 days',
    metaTitle: 'St. Petersburg, FL Roof Replacement | ProTech Roofing Project',
    metaDescription:
      'St. Petersburg coastal roof replacement with full flashing replacement and wind mitigation documentation. Before-and-after gallery of this Pinellas County project.',
  },
];

// Gallery is restricted to projects in states where ProTech holds its own
// contractor license. Out-of-scope projects (currently 4 Florida customer
// jobs) stay in the data file but are filtered out of every consumer —
// gallery grid, /gallery/[project] detail pages, homepage preview,
// sitemap — to keep the visible footprint aligned with LICENSED_STATES.
const LICENSED_STATE_ABBRS = new Set<string>(
  LICENSED_STATES.map((s) => s.abbr)
);

const publishedProjects = projects.filter((p) =>
  LICENSED_STATE_ABBRS.has(p.state)
);

export function getProjectBySlug(slug: string): Project | undefined {
  return publishedProjects.find((project) => project.slug === slug);
}

export function getProjectsByCity(city: string): Project[] {
  return publishedProjects.filter(
    (project) => project.city.toLowerCase() === city.toLowerCase()
  );
}

export function getProjectsByService(serviceType: string): Project[] {
  return publishedProjects.filter(
    (project) => project.serviceType === serviceType
  );
}

export function getAllProjects(): Project[] {
  return publishedProjects;
}
