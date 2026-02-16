import Link from 'next/link';
import { Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhoneNumber } from '@/lib/utils';

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  phone?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function CTABanner({
  heading = 'Ready to Protect Your Home?',
  subtext = 'Get a free, no-obligation estimate from our roofing experts. We respond within 24 hours.',
  phone = SITE_CONFIG.defaultPhoneRaw,
  ctaText = 'Get Your Free Estimate',
  ctaHref = '/free-estimate',
}: CTABannerProps) {
  return (
    <section className="bg-primary-800 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-lg text-primary-200">{subtext}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={ctaHref}
            className="inline-flex h-14 items-center justify-center rounded-lg bg-accent-500 px-8 text-lg font-semibold text-white transition-colors hover:bg-accent-600"
          >
            {ctaText}
          </Link>
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 text-lg font-medium text-white transition-colors hover:text-accent-300"
          >
            <Phone className="h-5 w-5" />
            {formatPhoneNumber(phone)}
          </a>
        </div>
      </div>
    </section>
  );
}
