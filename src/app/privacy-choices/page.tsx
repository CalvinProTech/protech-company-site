import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import PrivacyToggle from './PrivacyToggle';

export const metadata: Metadata = createPageMetadata({
  title: 'Your Privacy Choices',
  description:
    'Manage your privacy preferences for ProTech Roofing. Opt out of visitor identification and personalized marketing.',
  path: '/privacy-choices',
});

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Your Privacy Choices', href: '/privacy-choices' },
];

export default function PrivacyChoicesPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary-900 md:text-4xl">
            Your Privacy Choices
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              At ProTech Roofing, we respect your privacy. This page explains
              how we collect information and gives you the ability to opt out of
              certain data practices.
            </p>

            <h2 className="text-2xl font-bold text-primary-900">
              What We Collect
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Form submissions:</strong> When you fill out a form on
                our site, we collect the information you provide (name, phone,
                email, address) to respond to your inquiry.
              </li>
              <li>
                <strong>Analytics:</strong> We use Google Analytics to understand
                how visitors use our site, including pages visited and time
                spent.
              </li>
              <li>
                <strong>Visitor identification:</strong> We may use third-party
                services to identify visitors to our website for marketing
                purposes. This may include matching your visit to publicly
                available contact information.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-900">
              Opt Out of Visitor Identification
            </h2>
            <p>
              If you prefer not to be identified through our visitor
              identification service, you can opt out below. This will set a
              cookie on your browser that prevents the identification pixel from
              loading on future visits.
            </p>
          </div>

          <div className="mt-8">
            <PrivacyToggle />
          </div>

          <div className="mt-10 space-y-4 text-lg leading-relaxed text-neutral-700">
            <h2 className="text-2xl font-bold text-primary-900">
              Contact Us
            </h2>
            <p>
              If you have questions about your privacy or would like to request
              deletion of your data, please contact us at{' '}
              <a
                href="mailto:privacy@protechroof.net"
                className="font-medium text-primary-600 hover:underline"
              >
                privacy@protechroof.net
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
