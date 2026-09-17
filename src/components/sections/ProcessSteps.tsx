import { Phone, ClipboardCheck, HardHat, ThumbsUp } from 'lucide-react';

// Server component. The steps used to be parked at opacity:0 until an
// IntersectionObserver + motion/react revealed them — the same JS-gated
// visibility that left hero headlines invisible. Now they render visible and
// the stagger is a CSS keyframe (.hero-rise) that runs without JS.

const steps = [
  {
    number: 1,
    icon: Phone,
    title: 'Request Your Free Estimate',
    description:
      'Call us or fill out our online form. We respond within 24 hours to schedule your free inspection.',
  },
  {
    number: 2,
    icon: ClipboardCheck,
    title: 'Get a Detailed Inspection',
    description:
      'Our certified inspector examines your roof and provides a comprehensive written report with photos.',
  },
  {
    number: 3,
    icon: HardHat,
    title: 'Expert Installation',
    description:
      'Our trained crews complete your project on time with premium materials and meticulous craftsmanship.',
  },
  {
    number: 4,
    icon: ThumbsUp,
    title: 'Final Walkthrough',
    description:
      'We walk you through the completed work, clean up thoroughly, and ensure your complete satisfaction.',
  },
];

export function ProcessSteps() {

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
            Our Simple 4-Step Process
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            From first call to final walkthrough — we make roofing easy
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative flex justify-between">
            {/* Connecting line */}
            <div className="absolute left-[10%] right-[10%] top-8 h-0.5 bg-primary-200" />

            {steps.map((step, index) => (
              <div
                key={step.number}
                className="hero-rise relative flex w-1/4 flex-col items-center px-4 text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary-700 text-white shadow-md">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-primary-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden">
          <div className="relative space-y-8 pl-10">
            {/* Vertical line */}
            <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-primary-200" />

            {steps.map((step, index) => (
              <div
                key={step.number}
                className="hero-rise relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -left-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 text-white">
                  <span className="text-sm font-bold">{step.number}</span>
                </div>
                <div className="rounded-lg border border-neutral-200 bg-white p-4">
                  <div className="flex items-center gap-3">
                    <step.icon className="h-5 w-5 shrink-0 text-primary-700" />
                    <h3 className="font-semibold text-primary-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
