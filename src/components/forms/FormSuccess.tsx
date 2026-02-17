import { CheckCircle } from 'lucide-react';

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

      {/* Phone fallback */}
      <p className="mt-2 text-sm text-green-600">
        Need immediate help? Call us at{' '}
        <a
          href="tel:18663082640"
          className="font-semibold underline hover:text-green-800"
        >
          (866) 308-2640
        </a>
      </p>
    </div>
  );
}
