'use client';

import { useState, useMemo } from 'react';
import { ExternalLink, MapPin, Filter } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import type { Testimonial } from '@/lib/testimonials';
import StarRating from '@/components/ui/StarRating';

interface ReviewsContentProps {
  testimonials: Testimonial[];
}

const serviceTypeLabels: Record<string, string> = {
  'roof-replacement': 'Roof Replacement',
  'storm-damage': 'Storm Damage',
  'commercial-roofing': 'Commercial Roofing',
  'roof-repair': 'Roof Repair',
  'gutters-siding': 'Gutters & Siding',
  'roof-inspection': 'Roof Inspection',
};

function getServiceLabel(serviceType: string): string {
  return (
    serviceTypeLabels[serviceType] ??
    serviceType
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function ReviewsContent({
  testimonials,
}: ReviewsContentProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const serviceTypes = useMemo(() => {
    const types = new Set(testimonials.map((t) => t.serviceType));
    return Array.from(types);
  }, [testimonials]);

  const filteredTestimonials = useMemo(() => {
    if (activeFilter === 'all') return testimonials;
    return testimonials.filter((t) => t.serviceType === activeFilter);
  }, [testimonials, activeFilter]);

  return (
    <>
      {/* Aggregate Rating */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center rounded-xl bg-primary-50 p-8 text-center md:p-12">
            <p className="text-6xl font-bold text-primary-900 md:text-7xl">
              {SITE_CONFIG.googleRating}
            </p>
            <div className="mt-3">
              <StarRating rating={SITE_CONFIG.googleRating} size="lg" />
            </div>
            <p className="mt-3 text-lg text-neutral-600">
              Based on{' '}
              <span className="font-semibold text-primary-900">
                {SITE_CONFIG.reviewCount}+
              </span>{' '}
              verified reviews
            </p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-600"
            >
              Leave a Google Review
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Filter + Reviews Grid */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="mb-10 flex flex-wrap items-center gap-3">
            <Filter className="h-5 w-5 text-neutral-400" />
            <button
              onClick={() => setActiveFilter('all')}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeFilter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              All Reviews
            </button>
            {serviceTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeFilter === type
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {getServiceLabel(type)}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          {filteredTestimonials.length === 0 ? (
            <p className="py-12 text-center text-lg text-neutral-500">
              No reviews found for this service type.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="content-visibility-auto flex flex-col rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <StarRating rating={testimonial.rating} size="sm" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-neutral-700">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 border-t border-neutral-100 pt-4">
                    <p className="font-semibold text-primary-900">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 text-sm text-neutral-500">
                      <MapPin className="h-3.5 w-3.5" />
                      {testimonial.city}, {testimonial.state}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="rounded-full bg-primary-50 px-3 py-0.5 text-xs font-medium text-primary-700">
                        {getServiceLabel(testimonial.serviceType)}
                      </span>
                      <span className="text-xs text-neutral-400">
                        {formatDate(testimonial.date)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
