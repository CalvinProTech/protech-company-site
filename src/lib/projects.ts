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
