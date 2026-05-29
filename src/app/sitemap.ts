import type { MetadataRoute } from 'next';
import { getAllServices } from '@/lib/services';
import { getAllProjects } from '@/lib/projects';
import { getAllPosts } from '@/lib/blog';

// Locations tree (/locations/**) is intentionally excluded — see
// /src/app/locations/layout.tsx for the corresponding noindex cascade
// and /src/app/robots.ts for the matching crawler disallow.
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

  return [
    ...staticPages,
    ...servicePages,
    ...projectPages,
    ...blogPages,
  ];
}
