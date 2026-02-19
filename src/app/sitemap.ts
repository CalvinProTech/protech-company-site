import type { MetadataRoute } from 'next';
import { getAllLocations, getAllStates, PILOT_CITY_STATE_SLUGS } from '@/lib/locations';
import { getAllServices } from '@/lib/services';
import { getAllProjects } from '@/lib/projects';
import { getAllPosts } from '@/lib/blog';
import { getAllCityServiceData } from '@/lib/city-services';

const BASE_URL = 'https://protechroof.net';

export default function sitemap(): MetadataRoute.Sitemap {
  const locations = getAllLocations();
  const states = getAllStates();
  const services = getAllServices();
  const projects = getAllProjects();
  const posts = getAllPosts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/free-estimate`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/financing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const statePages: MetadataRoute.Sitemap = states.map((state) => ({
    url: `${BASE_URL}/locations/${state.stateSlug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const pilotSlugs = new Set<string>(PILOT_CITY_STATE_SLUGS);

  const locationPages: MetadataRoute.Sitemap = locations
    .filter((location) => {
      const cityStateSlug = `${location.citySlug}-${location.stateAbbr.toLowerCase()}`;
      return !pilotSlugs.has(cityStateSlug);
    })
    .map((location) => ({
      url: `${BASE_URL}/locations/${location.stateSlug}/${location.citySlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }));

  const pilotCityPages: MetadataRoute.Sitemap = Array.from(pilotSlugs).map(
    (slug) => ({
      url: `${BASE_URL}/locations/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })
  );

  const cityServicePages: MetadataRoute.Sitemap = getAllCityServiceData().map(
    (cs) => ({
      url: `${BASE_URL}/locations/${cs.cityStateSlug}/${cs.serviceSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })
  );

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/gallery/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.frontmatter.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...statePages,
    ...locationPages,
    ...pilotCityPages,
    ...cityServicePages,
    ...servicePages,
    ...projectPages,
    ...blogPages,
  ];
}
