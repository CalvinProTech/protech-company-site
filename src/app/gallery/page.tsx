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

      {/* Context content (helps with crawl + ranking) */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg prose-neutral">
          <h2 className="text-2xl font-bold text-primary-900 md:text-3xl">
            What You&rsquo;re Seeing
          </h2>
          <p>
            Every project shown above represents a real roof we replaced or
            repaired across our nine-state service area. Each entry includes
            before and after photographs taken on the day of installation, the
            specific shingle line and color we used, the city and state, and
            in many cases the underlying problem we solved — storm damage,
            age-related deterioration, hidden leaks, ventilation failure, or
            insurance-claim restoration.
          </p>

          <h2 className="text-2xl font-bold text-primary-900 md:text-3xl">
            Materials You&rsquo;ll See in This Gallery
          </h2>
          <p>
            The majority of our installations feature{' '}
            <a href="/services/roof-replacement" className="text-primary-600 hover:underline">GAF Timberline HDZ architectural shingles</a>,
            our most-installed product across Florida, the Carolinas, and the
            Mid-Atlantic. You will also see standing-seam metal roofs (popular
            in coastal Florida and the Carolinas for hurricane resistance),
            tile and concrete-tile roofs (common across central and south
            Florida), and TPO and modified-bitumen flat roofs on commercial
            buildings. For{' '}
            <a href="/services/storm-damage" className="text-primary-600 hover:underline">storm-damage restorations</a>{' '}
            we frequently install impact-resistant Class 4 shingles that often
            qualify for insurance premium discounts.
          </p>

          <h2 className="text-2xl font-bold text-primary-900 md:text-3xl">
            How These Projects Got Done
          </h2>
          <p>
            Most projects in this gallery began with a free roof inspection.
            Our certified inspectors document conditions with drone
            photography and on-roof walkthroughs, then prepare an itemized{' '}
            <a href="/services/insurance-claims" className="text-primary-600 hover:underline">insurance estimate or homeowner quote</a>.
            For homeowners using insurance, we attend the adjuster meeting and
            negotiate supplements when initial payouts fall short. For
            cash-and-financing customers, we offer financing through Pure
            Finance with soft credit checks that don&rsquo;t affect your score
            unless you accept an offer. Most installations are completed in
            one to three days depending on roof size and weather.
          </p>

          <h2 className="text-2xl font-bold text-primary-900 md:text-3xl">
            Want a Project Like One of These?
          </h2>
          <p>
            We service homeowners across Florida, the Carolinas, Virginia,
            Maryland, Pennsylvania, Connecticut, Delaware, and Washington
            D.C. Browse the{' '}
            <a href="/locations" className="text-primary-600 hover:underline">locations directory</a>{' '}
            for city-specific information, or request a{' '}
            <a href="/free-estimate" className="text-primary-600 hover:underline">free estimate</a>{' '}
            and we&rsquo;ll send a certified inspector to your home this week.
            Every estimate is itemized, no-obligation, and prepared in writing
            so you can compare apples-to-apples with any other quote you
            receive.
          </p>
        </div>
      </section>
    </>
  );
}
