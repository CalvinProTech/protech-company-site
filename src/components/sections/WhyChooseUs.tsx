import { Shield, Clock, Award } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const reasons = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description:
      'Fully licensed roofing contractor in every state we serve. Our work is backed by comprehensive insurance and manufacturer warranties for your peace of mind.',
  },
  {
    icon: Clock,
    title: 'Fast Response Times',
    description:
      'We respond to every inquiry within 24 hours and can schedule your free inspection within days. Emergency storm damage? We prioritize urgent calls.',
  },
  {
    icon: Award,
    title: 'Manufacturer-Backed Materials',
    description:
      'We install GAF, Owens Corning and CertainTeed systems to the manufacturer\u2019s written specifications, so your material warranty stays valid \u2014 and we register it for you.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
            Why Homeowners Choose ProTech
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Trusted by homeowners across {SITE_CONFIG.statesLicensed} states
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
                <reason.icon className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900">
                {reason.title}
              </h3>
              <p className="mt-3 text-neutral-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
