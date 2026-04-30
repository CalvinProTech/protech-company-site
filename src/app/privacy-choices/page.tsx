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
              How We Use the Data We Collect
            </h2>
            <p>
              The information you submit through forms on protechroof.net is
              used exclusively to respond to your roofing inquiry, schedule
              free inspections, prepare custom estimates, and follow up on your
              project. We do not sell, rent, or trade your personal data to
              third parties for their own marketing purposes. When we share
              data with service providers — for example, our financing
              partner Pure Finance during a credit application, our texting
              platform Kixie when scheduling appointments, or our scheduling
              software for installation logistics — those providers are
              contractually limited to using your information only to perform
              services on our behalf.
            </p>

            <h2 className="text-2xl font-bold text-primary-900">
              Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar technologies to remember your
              preferences, track form submissions for accuracy, measure
              advertising effectiveness, and improve site performance. Most
              cookies expire after 30 days. You can disable cookies through
              your browser settings at any time, though doing so may affect
              certain site features such as the financing application or
              estimate request flow. We honor the Global Privacy Control
              (GPC) signal from your browser as a request to opt out of the
              sale or sharing of personal information under California, Colorado,
              Connecticut, and Virginia privacy laws.
            </p>

            <h2 className="text-2xl font-bold text-primary-900">
              Your Rights Under State Privacy Laws
            </h2>
            <p>
              Depending on where you live, you may have the right to know what
              personal information we have collected about you, request a copy
              of that information, request deletion of your data, request
              correction of inaccurate data, and opt out of targeted advertising
              or profiling. ProTech Roofing honors these rights for residents of
              every state in our service area. To exercise any of these rights,
              email us using the address below with your full name, the email
              address you used when contacting us, and a description of your
              request. We will verify your identity before fulfilling the
              request and respond within 30 days.
            </p>

            <h2 className="text-2xl font-bold text-primary-900">
              Children&rsquo;s Privacy
            </h2>
            <p>
              Our website and services are intended for adults 18 years of age
              and older. We do not knowingly collect personal information from
              children. If you believe a child has submitted information to
              us, please contact us using the address below and we will delete
              the data promptly.
            </p>

            <h2 className="text-2xl font-bold text-primary-900">
              Updates to This Page
            </h2>
            <p>
              We review our privacy practices periodically and may update this
              page when our data handling changes. The most recent update is
              shown at the bottom of the page. Continuing to use protechroof.net
              after an update means you accept the revised practices. For
              material changes, we will provide additional notice via banner
              or homepage notification.
            </p>

            <h2 className="text-2xl font-bold text-primary-900">
              Contact Us
            </h2>
            <p>
              If you have questions about your privacy or would like to request
              deletion, correction, or a copy of your data, please contact us at{' '}
              <a
                href="mailto:privacy@protechroof.net"
                className="font-medium text-primary-600 hover:underline"
              >
                privacy@protechroof.net
              </a>
              {' '}or call us at (866) 308-2640. You may also write to us at our
              corporate office, 4950 W Kennedy Blvd Suite 210, Tampa, FL 33609.
              For more detail on how we handle your data, please review our{' '}
              <a href="/privacy-policy" className="font-medium text-primary-600 hover:underline">Privacy Policy</a>
              {' '}and{' '}
              <a href="/terms-of-service" className="font-medium text-primary-600 hover:underline">Terms of Service</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
