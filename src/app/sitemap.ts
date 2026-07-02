import type { MetadataRoute } from 'next';
import { getAllServices } from '@/lib/services';
import { getAllProjects } from '@/lib/projects';
import { getAllPosts } from '@/lib/blog';
import { getVisibleStates, getVisibleLocations } from '@/lib/locations';

// Own-license service-area tree (/locations/**) — state hubs, state-service
// pages, and one page per city. ONLY visible states are listed: the hidden
// states (HIDDEN_LOCATION_STATE_SLUGS in constants.ts, pending B11) have
// their whole subtree 308-redirected by next.config.ts, and redirected URLs
// must never appear in the sitemap. The /locations hub itself is noindexed
// (brand-equity split with /) and is intentionally absent too.
const LOCATION_SERVICES = [
  'roof-replacement',
  'roof-repair',
  'storm-damage',
  'gutters-siding',
];

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.protechroof.net';

const LAST_BUILD = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const services = getAllServices();
  const projects = getAllProjects();
  const posts = getAllPosts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: LAST_BUILD,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: LAST_BUILD,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAST_BUILD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/free-estimate`,
      lastModified: LAST_BUILD,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/roof-replacement-cost-calculator`,
      lastModified: LAST_BUILD,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/financing`,
      lastModified: LAST_BUILD,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/reviews`,
      lastModified: LAST_BUILD,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: LAST_BUILD,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: LAST_BUILD,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: LAST_BUILD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/certifications`,
      lastModified: LAST_BUILD,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-choices`,
      lastModified: LAST_BUILD,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: LAST_BUILD,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/gallery/${project.slug}`,
    lastModified: LAST_BUILD,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.frontmatter.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const states = getVisibleStates();

  const stateHubPages: MetadataRoute.Sitemap = states.map((s) => ({
    url: `${BASE_URL}/locations/${s.stateSlug}`,
    lastModified: LAST_BUILD,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const stateServicePages: MetadataRoute.Sitemap = states.flatMap((s) =>
    LOCATION_SERVICES.map((svc) => ({
      url: `${BASE_URL}/locations/${s.stateSlug}/${svc}`,
      lastModified: LAST_BUILD,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  const cityPages: MetadataRoute.Sitemap = getVisibleLocations().map((loc) => ({
    url: `${BASE_URL}/locations/${loc.stateSlug}/${loc.citySlug}`,
    lastModified: LAST_BUILD,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...projectPages,
    ...blogPages,
    ...stateHubPages,
    ...stateServicePages,
    ...cityPages,
  ];
}
