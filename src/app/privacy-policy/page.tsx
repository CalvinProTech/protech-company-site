import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Privacy Policy | ProTech Roofing',
    description:
      'Read the ProTech Roofing privacy policy. Learn how we collect, use, and protect your personal information when you use our website and services.',
    path: '/privacy-policy',
  });
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Page Header */}
      <section className="bg-primary-900 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-primary-200">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Content */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:text-primary-900 prose-p:text-neutral-700 prose-li:text-neutral-700">
            <h2>Introduction</h2>
            <p>
              {SITE_CONFIG.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy and is committed to
              protecting the personal information you share with us. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website at{' '}
              <strong>{SITE_CONFIG.url}</strong>, use our services, or interact
              with us in any way.
            </p>
            <p>
              By accessing or using our website and services, you agree to the
              terms of this Privacy Policy. If you do not agree with the
              practices described in this policy, please do not use our website
              or services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information You Provide</h3>
            <p>
              We collect personal information that you voluntarily provide to us
              when you:
            </p>
            <ul>
              <li>
                Request a free estimate through our website forms, including
                your name, phone number, email address, street address, city,
                state, and details about the roofing service you need.
              </li>
              <li>
                Contact us through our contact form, phone, or email, including
                your name, phone number, email address, and the content of your
                message.
              </li>
              <li>
                Apply for financing through our lending partners, which may
                include financial information such as income and credit
                information. Note that financing applications are processed by
                our third-party lending partners and are subject to their own
                privacy policies.
              </li>
              <li>
                Subscribe to our newsletter or marketing communications,
                including your name and email address.
              </li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <p>
              When you visit our website, we may automatically collect certain
              information about your device and your use of our website,
              including:
            </p>
            <ul>
              <li>
                Device information such as your IP address, browser type and
                version, operating system, and device identifiers.
              </li>
              <li>
                Usage data such as pages viewed, time spent on pages, links
                clicked, referring website, and date and time of your visit.
              </li>
              <li>
                Location data derived from your IP address, which provides
                approximate geographic location at the city or ZIP code level.
              </li>
            </ul>

            <h3>Cookies and Tracking Technologies</h3>
            <p>
              We use cookies, web beacons, and similar tracking technologies to
              collect information about your browsing activity. Cookies are small
              text files stored on your device that help us improve your
              experience on our website. You can control cookie settings through
              your browser preferences.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect for the following purposes:
            </p>
            <ul>
              <li>
                To provide and manage our roofing services, including scheduling
                inspections, preparing estimates, and completing projects.
              </li>
              <li>
                To communicate with you about your service requests, project
                status, and follow-up communications.
              </li>
              <li>
                To process financing applications by sharing necessary
                information with our lending partners.
              </li>
              <li>
                To improve our website, services, and customer experience
                through analytics and usage patterns.
              </li>
              <li>
                To send you marketing communications, special offers, and
                updates, which you can opt out of at any time.
              </li>
              <li>
                To comply with legal obligations and respond to legal processes.
              </li>
            </ul>

            <h2>How We Share Your Information</h2>
            <p>
              We do not sell your personal information to third parties. We may
              share your information in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> We share information with
                trusted third-party service providers who assist us in operating
                our website, conducting our business, or providing services to
                you, including CRM platforms, email marketing tools, analytics
                providers, and payment processors.
              </li>
              <li>
                <strong>Financing Partners:</strong> When you apply for
                financing, we share necessary information with our lending
                partners to process your application.
              </li>
              <li>
                <strong>Insurance Companies:</strong> When assisting with
                insurance claims, we share project documentation and relevant
                information with your insurance company on your behalf.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information when required by law, in response to a subpoena or
                court order, or when we believe disclosure is necessary to
                protect our rights, your safety, or the safety of others.
              </li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical
              security measures to protect your personal information from
              unauthorized access, disclosure, alteration, or destruction. These
              measures include encrypted data transmission via SSL/TLS, secure
              server infrastructure, access controls, and regular security
              audits. However, no method of transmission over the Internet or
              electronic storage is completely secure, and we cannot guarantee
              absolute security.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to
              fulfill the purposes described in this policy, comply with legal
              obligations, resolve disputes, and enforce our agreements.
              Customer project records are retained for a minimum of seven years
              to support warranty claims and legal compliance. You may request
              deletion of your personal information at any time by contacting us.
            </p>

            <h2>Your Rights and Choices</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>
                <strong>Access:</strong> You may request a copy of the personal
                information we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> You may request that we correct
                inaccurate or incomplete personal information.
              </li>
              <li>
                <strong>Deletion:</strong> You may request that we delete your
                personal information, subject to certain legal exceptions.
              </li>
              <li>
                <strong>Opt-Out:</strong> You may opt out of receiving marketing
                communications at any time by clicking the &ldquo;unsubscribe&rdquo;
                link in our emails or contacting us directly.
              </li>
            </ul>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites, including
              review platforms, social media pages, and financing partner sites.
              We are not responsible for the privacy practices of these
              third-party websites. We encourage you to review the privacy
              policies of any third-party site you visit.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our website and services are not directed to individuals under the
              age of 18. We do not knowingly collect personal information from
              children. If we learn that we have collected personal information
              from a child under 18, we will take steps to delete that
              information promptly.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, or legal requirements. When
              we make material changes, we will update the &ldquo;Last
              updated&rdquo; date at the top of this page and, where
              appropriate, notify you via email or a prominent notice on our
              website. Your continued use of our website and services after such
              changes constitutes your acceptance of the updated policy.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <ul>
              <li>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
              </li>
              <li>
                <strong>Phone:</strong>{' '}
                <a href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}>
                  {SITE_CONFIG.defaultPhone}
                </a>
              </li>
              <li>
                <strong>Website:</strong>{' '}
                <a
                  href={SITE_CONFIG.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE_CONFIG.url}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
