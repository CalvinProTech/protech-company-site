import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface Project {
  slug: string;
  title: string;
  city: string;
  state: string;
  serviceType: string;
  beforeImage: string;
}

interface ProjectGalleryPreviewProps {
  projects: Project[];
}

export function ProjectGalleryPreview({ projects }: ProjectGalleryPreviewProps) {
  const displayProjects = projects.slice(0, 3);

  return (
    <section className="bg-neutral-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
            Recent Projects
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            See the quality of our work across the country
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
          {displayProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/gallery/${project.slug}`}
              className="group min-w-[280px] shrink-0 overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:min-w-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.beforeImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="mb-2 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                  {project.serviceType}
                </div>
                <h3 className="font-semibold text-primary-900">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500">
                  {project.city}, {project.state}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1 font-medium text-accent-500 transition-colors hover:text-accent-600"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
