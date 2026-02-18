import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Clock, Layers, ArrowLeft } from 'lucide-react';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';
import { createPageMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { BeforeAfterComparison } from '@/components/sections/BeforeAfterComparison';
import { CTABanner } from '@/components/sections/CTABanner';
import Badge from '@/components/ui/Badge';

interface ProjectPageProps {
  params: Promise<{ project: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    project: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { project: slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata({
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
      path: `/gallery/${slug}`,
    });
  }

  return createPageMetadata({
    title: project.metaTitle,
    description: project.metaDescription,
    path: `/gallery/${project.slug}`,
    image: project.afterImage,
  });
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

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { project: slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery' },
    { label: project.title, href: `/gallery/${project.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Page Header */}
      <section className="bg-primary-900 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/gallery"
            className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-primary-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gallery
          </Link>
          <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            {project.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Badge variant="accent">
              {getServiceLabel(project.serviceType)}
            </Badge>
            <span className="flex items-center gap-1 text-sm text-primary-200">
              <MapPin className="h-4 w-4" />
              {project.city}, {project.state}
            </span>
            <span className="flex items-center gap-1 text-sm text-primary-200">
              <Clock className="h-4 w-4" />
              {project.timeline}
            </span>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Before / After Comparison */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <BeforeAfterComparison
            beforeImage={project.beforeImage}
            afterImage={project.afterImage}
            beforeAlt={`Before: ${project.title}`}
            afterAlt={`After: ${project.title}`}
            title="Before & After"
          />
        </div>
      </section>

      {/* Project Details */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary-900">
                Project Overview
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                {project.description}
              </p>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-6">
              {/* Location */}
              <div className="rounded-lg border border-neutral-200 bg-white p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  <MapPin className="h-4 w-4" />
                  Location
                </h3>
                <p className="mt-2 text-lg font-medium text-primary-900">
                  {project.city}, {project.state}
                </p>
              </div>

              {/* Service Type */}
              <div className="rounded-lg border border-neutral-200 bg-white p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  <Layers className="h-4 w-4" />
                  Service Type
                </h3>
                <p className="mt-2 text-lg font-medium text-primary-900">
                  {getServiceLabel(project.serviceType)}
                </p>
              </div>

              {/* Materials */}
              <div className="rounded-lg border border-neutral-200 bg-white p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  Materials Used
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  {project.materials}
                </p>
              </div>

              {/* Timeline */}
              <div className="rounded-lg border border-neutral-200 bg-white p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  <Clock className="h-4 w-4" />
                  Timeline
                </h3>
                <p className="mt-2 text-lg font-medium text-primary-900">
                  {project.timeline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Images */}
      {project.images.length > 2 && (
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-primary-900">
              Project Photos
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <Image
                    src={image}
                    alt={`${project.title} photo ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <CTABanner
        heading="Need Similar Work Done?"
        subtext="Get a free, no-obligation estimate for your roofing project. We respond within 24 hours."
      />
    </>
  );
}
