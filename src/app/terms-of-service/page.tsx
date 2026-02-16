import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Terms of Service | ProTech Roofing',
    description:
      'Read the ProTech Roofing terms of service. Understand the terms and conditions governing your use of our website and roofing services.',
    path: '/terms-of-service',
  });
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

export default function TermsOfServicePage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Page Header */}
      <section className="bg-primary-900 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Terms of Service
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
            <h2>Agreement to Terms</h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally
              binding agreement between you and {SITE_CONFIG.name} (&ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) governing your access to
              and use of our website at <strong>{SITE_CONFIG.url}</strong> and
              any related services we provide. By accessing or using our website
              and services, you acknowledge that you have read, understood, and
              agree to be bound by these Terms. If you do not agree with any
              part of these Terms, you must not use our website or services.
            </p>

            <h2>Services Description</h2>
            <p>
              {SITE_CONFIG.name} provides residential and commercial roofing
              services, including but not limited to roof replacement, roof
              repair, storm damage restoration, roof inspections, commercial
              roofing, and gutter and siding installation. Our service area
              includes metropolitan areas across Florida, Texas, Kentucky, and
              Ohio. Specific service availability may vary by location.
            </p>
            <p>
              Our website provides information about our services, allows you to
              request free estimates, submit contact inquiries, and access
              educational content about roofing. The information on our website
              is provided for general informational purposes and does not
              constitute a guarantee of service availability, pricing, or
              outcomes.
            </p>

            <h2>Free Estimates and Quotes</h2>
            <p>
              Free estimates provided by {SITE_CONFIG.name} are based on visual
              inspections and the information available at the time of the
              estimate. Estimates are valid for 30 days from the date of
              issuance unless otherwise stated. Actual project costs may vary
              from the estimate if unforeseen conditions are discovered during
              the course of work, such as hidden water damage, structural
              deficiencies, or code compliance requirements. Any changes to
              the scope of work or cost will be communicated to you and
              require your written approval before proceeding.
            </p>

            <h2>Service Agreements and Contracts</h2>
            <p>
              All roofing work performed by {SITE_CONFIG.name} is governed by a
              separate written service agreement or contract that you will
              review and sign before work begins. The service agreement will
              detail the specific scope of work, materials to be used, project
              timeline, total cost, payment terms, and warranty provisions.
              These Terms of Service supplement, but do not replace, the terms
              of any signed service agreement.
            </p>

            <h2>Payment Terms</h2>
            <p>
              Payment terms are outlined in your individual service agreement.
              Generally, {SITE_CONFIG.name} requires a deposit upon signing the
              service agreement, with the remaining balance due upon completion
              of the project and your final approval. We accept payment by
              check, credit card, and approved financing. For projects involving
              insurance claims, payment arrangements may differ and will be
              specified in your service agreement.
            </p>
            <p>
              If you choose to finance your project through one of our lending
              partners, the financing terms, interest rates, and repayment
              schedule are governed by the lending partner&apos;s agreement, not
              these Terms. {SITE_CONFIG.name} is not a lender and does not set
              or control financing terms.
            </p>

            <h2>Warranties</h2>
            <p>
              {SITE_CONFIG.name} provides workmanship warranties on all roofing
              projects as specified in your service agreement. Full roof
              replacements carry a lifetime workmanship warranty, and repairs
              carry a 5-year workmanship warranty, unless otherwise stated.
              Workmanship warranties cover defects in installation and are
              separate from manufacturer material warranties.
            </p>
            <p>
              Manufacturer material warranties are provided directly by the
              product manufacturer and are subject to the manufacturer&apos;s
              terms and conditions. {SITE_CONFIG.name} assists with manufacturer
              warranty claims but is not responsible for manufacturer warranty
              decisions. Warranty coverage may be voided if the roof is damaged
              by events outside of normal wear and tear, including acts of
              nature, unauthorized modifications, or failure to maintain the
              roof system.
            </p>

            <h2>Insurance Claim Assistance</h2>
            <p>
              {SITE_CONFIG.name} offers assistance with insurance claims related
              to roof damage. We provide documentation, meet with insurance
              adjusters, and help facilitate the claims process. However, we
              do not guarantee the outcome of any insurance claim. Insurance
              claim decisions are made solely by your insurance company. Our
              assistance with insurance claims does not create an
              attorney-client relationship and should not be considered legal or
              insurance advice.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on our website, including text, images, photographs,
              graphics, logos, icons, and software, is the property of{' '}
              {SITE_CONFIG.name} or its content suppliers and is protected by
              United States and international copyright, trademark, and other
              intellectual property laws. You may not reproduce, distribute,
              modify, display, or create derivative works from any content on
              our website without our prior written consent.
            </p>

            <h2>User Conduct</h2>
            <p>
              When using our website and services, you agree not to:
            </p>
            <ul>
              <li>
                Provide false, inaccurate, or misleading information in
                estimate requests, contact forms, or any other communication
                with us.
              </li>
              <li>
                Use our website for any unlawful purpose or in violation of any
                applicable local, state, or federal law.
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of our
                website, server, or any systems or networks connected to our
                website.
              </li>
              <li>
                Use any automated system, including bots, scrapers, or spiders,
                to access our website for any purpose without our express
                written permission.
              </li>
              <li>
                Transmit any viruses, malware, or other harmful code through
                our website.
              </li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law,{' '}
              {SITE_CONFIG.name}, its officers, directors, employees, and agents
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or related to
              your use of our website or services. This includes, but is not
              limited to, damages for loss of profits, goodwill, use, data, or
              other intangible losses, even if we have been advised of the
              possibility of such damages.
            </p>
            <p>
              Our total liability to you for any claim arising out of or
              related to these Terms or your use of our website shall not
              exceed the amount you paid to us for services in the twelve months
              preceding the claim. This limitation of liability applies to the
              fullest extent permitted by law and survives the termination of
              these Terms.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless{' '}
              {SITE_CONFIG.name}, its officers, directors, employees, and agents
              from and against any claims, liabilities, damages, losses, costs,
              or expenses (including reasonable attorneys&apos; fees) arising out
              of or related to your violation of these Terms, your use of our
              website, or your violation of any rights of a third party.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising out of or related to these Terms or our
              services shall first be addressed through good-faith negotiation
              between the parties. If the dispute cannot be resolved through
              negotiation within 30 days, either party may pursue mediation or
              binding arbitration in accordance with the rules of the American
              Arbitration Association. The arbitration shall take place in the
              state where the services were performed. Each party shall bear its
              own costs and attorneys&apos; fees unless the arbitrator
              determines otherwise.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the state in which the services are performed, without
              regard to its conflict of law provisions. You consent to the
              exclusive jurisdiction of the courts located within that state for
              any legal proceedings arising out of or related to these Terms.
            </p>

            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. When we
              make changes, we will update the &ldquo;Last updated&rdquo; date
              at the top of this page. Material changes will be communicated
              through a prominent notice on our website. Your continued use of
              our website and services after the effective date of any
              modifications constitutes your acceptance of the updated Terms.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or
              invalid by a court of competent jurisdiction, that provision shall
              be limited or eliminated to the minimum extent necessary, and the
              remaining provisions shall remain in full force and effect.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
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
