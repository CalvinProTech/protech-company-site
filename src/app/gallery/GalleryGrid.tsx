'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/projects';
import Badge from '@/components/ui/Badge';

interface GalleryGridProps {
  projects: Project[];
}

const serviceTypeLabels: Record<string, string> = {
  'roof-replacement': 'Roof Replacement',
  'storm-damage': 'Storm Damage',
  'commercial-roofing': 'Commercial Roofing',
  'roof-repair': 'Roof Repair',
  'gutters-siding': 'Gutters & Siding',
};

function getServiceLabel(serviceType: string): string {
  return (
    serviceTypeLabels[serviceType] ??
    serviceType
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

export default function GalleryGrid({ projects }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const serviceTypes = useMemo(() => {
    const types = new Set(projects.map((p) => p.serviceType));
    return Array.from(types);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.serviceType === activeFilter);
  }, [projects, activeFilter]);

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap gap-3">
          <button
            onClick={() => setActiveFilter('all')}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeFilter === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            All Projects
          </button>
          {serviceTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeFilter === type
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {getServiceLabel(type)}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <p className="py-12 text-center text-lg text-neutral-500">
            No projects found for this category.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/gallery/${project.slug}`}
                className="content-visibility-auto group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                {/* Before / After Thumbnails */}
                <div className="grid grid-cols-2">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.beforeImage}
                      alt={`Before: ${project.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 17vw"
                    />
                    <span className="absolute bottom-0 left-0 bg-neutral-800/80 px-2 py-0.5 text-xs font-medium text-white">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.afterImage}
                      alt={`After: ${project.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 17vw"
                    />
                    <span className="absolute bottom-0 left-0 bg-success/80 px-2 py-0.5 text-xs font-medium text-white">
                      After
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <Badge variant="accent">
                    {getServiceLabel(project.serviceType)}
                  </Badge>
                  <h2 className="mt-3 text-lg font-semibold text-primary-900 group-hover:text-primary-600">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-sm text-neutral-500">
                    {project.city}, {project.state}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-neutral-600">
                    {project.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:text-primary-700">
                    View Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
