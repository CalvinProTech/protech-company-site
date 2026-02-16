import Link from 'next/link';
import { Home, Wrench, MapPin, Phone, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhoneNumber } from '@/lib/utils';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-white py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        {/* 404 Number */}
        <p className="text-8xl font-bold text-primary-200 md:text-9xl">404</p>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-bold text-primary-900 md:text-4xl">
          Page Not Found
        </h1>

        {/* Message */}
        <p className="mt-4 text-lg text-neutral-600">
          Sorry, we could not find the page you are looking for. It may have
          been moved, removed, or the URL might be incorrect. Try one of the
          links below to get back on track.
        </p>

        {/* Helpful Links */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-6 py-4 font-medium text-primary-900 shadow-sm transition-colors hover:bg-neutral-50"
          >
            <Home className="h-5 w-5 text-primary-600" />
            Homepage
          </Link>
          <Link
            href="/services"
            className="flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-6 py-4 font-medium text-primary-900 shadow-sm transition-colors hover:bg-neutral-50"
          >
            <Wrench className="h-5 w-5 text-primary-600" />
            Our Services
          </Link>
          <Link
            href="/locations"
            className="flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-6 py-4 font-medium text-primary-900 shadow-sm transition-colors hover:bg-neutral-50"
          >
            <MapPin className="h-5 w-5 text-primary-600" />
            Service Locations
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-6 py-4 font-medium text-primary-900 shadow-sm transition-colors hover:bg-neutral-50"
          >
            <Mail className="h-5 w-5 text-primary-600" />
            Contact Us
          </Link>
        </div>

        {/* Phone CTA */}
        <div className="mt-10 rounded-lg bg-primary-50 p-6">
          <p className="text-sm font-medium text-neutral-600">
            Need immediate help? Call us directly:
          </p>
          <a
            href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
            className="mt-2 inline-flex items-center gap-2 text-2xl font-bold text-primary-900 transition-colors hover:text-primary-600"
          >
            <Phone className="h-6 w-6" />
            {formatPhoneNumber(SITE_CONFIG.defaultPhoneRaw)}
          </a>
        </div>
      </div>
    </section>
  );
}
