import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { getAllProjects } from '@/lib/projects';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import GalleryGrid from './GalleryGrid';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Project Gallery | Before & After Roofing Photos',
    description:
      'Browse before and after photos of completed roofing projects across 9 states. See the quality of ProTech Roofing workmanship firsthand.',
    path: '/gallery',
  });
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Gallery', href: '/gallery' },
];

export default function GalleryPage() {
  const projects = getAllProjects();

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Project Gallery
          </h1>
          <p className="text-primary-200 mt-4 max-w-2xl text-lg">
            Browse our completed roofing projects across 9 states. Every
            project includes before and after photos.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Filter + Grid (client component) */}
      <GalleryGrid projects={projects} />
    </>
  );
}
