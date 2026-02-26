import { CheckCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

const NEXT_STEPS = [
  'A ProTech specialist will review your request',
  'We\u2019ll call to schedule a free inspection',
  'You\u2019ll receive a detailed estimate',
] as const;

export default function FormSuccess() {
  return (
    <div className="flex flex-col items-center gap-6 rounded-xl bg-green-50 px-6 py-10 text-center">
      {/* Success icon */}
      <CheckCircle
        className="h-16 w-16 text-green-600"
        aria-hidden="true"
        strokeWidth={1.5}
      />

      {/* Heading */}
      <h3 className="text-2xl font-bold text-green-800">
        We&rsquo;ll Call You Within 24 Hours
      </h3>

      {/* Next steps */}
      <ol className="flex flex-col gap-3 text-left">
        {NEXT_STEPS.map((step, index) => (
          <li key={index} className="flex items-start gap-3 text-green-700">
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-200 text-sm font-semibold text-green-800"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <span className="pt-0.5">{step}</span>
          </li>
        ))}
      </ol>

      {/* Call Now CTA */}
      <a
        href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-4 text-lg font-bold text-white shadow-sm transition-colors hover:bg-accent-600"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call Now: {SITE_CONFIG.defaultPhone}
      </a>

      {/* Return Home */}
      <Link
        href="/"
        className="text-sm font-medium text-green-700 underline transition-colors hover:text-green-900"
      >
        Return to Home
      </Link>
    </div>
  );
}
