import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { SITE_CONFIG, SERVICES, LICENSED_STATES } from '@/lib/constants';
import FinancingDisclosure from '@/components/financing/FinancingDisclosure';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 — Company */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt={SITE_CONFIG.name}
                width={866}
                height={290}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-3 text-sm text-neutral-300">
              Tampa-headquartered. Licensed and protecting homes across {SITE_CONFIG.statesLicensed} states.
            </p>
            <p className="mt-4 text-sm text-neutral-300">
              GAF Master Elite Contractor
              <br />
              Licensed &amp; Insured
              <br />
              {SITE_CONFIG.statesLicensed} States Served
              <br />
              {SITE_CONFIG.googleRating}★ on Google ({SITE_CONFIG.reviewCount}+ reviews)
            </p>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-neutral-300 transition-colors hover:text-white hover:underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/certifications"
                  className="text-sm text-neutral-300 transition-colors hover:text-white hover:underline"
                >
                  Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Licensed States */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              Licensed States
            </h3>
            <ul className="mt-4 space-y-2">
              {LICENSED_STATES.map((state) => (
                <li key={state.abbr}>
                  <Link
                    href={`/locations/${state.slug}`}
                    className="text-sm text-neutral-300 transition-colors hover:text-white hover:underline"
                  >
                    {state.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
                  className="inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-white hover:underline"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{SITE_CONFIG.defaultPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-white hover:underline"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 transition-colors hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-primary-800 pt-8">
          {/* Lender / financing compliance disclosure (Equal Housing + Sunlight/Cross River) */}
          <FinancingDisclosure variant="dark" className="mb-8" />
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-neutral-300">
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <nav aria-label="Legal">
              <ul className="flex items-center gap-6">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-neutral-300 transition-colors hover:text-white hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-sm text-neutral-300 transition-colors hover:text-white hover:underline"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portal"
                    className="text-sm text-neutral-300 transition-colors hover:text-white hover:underline"
                  >
                    Customer Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap.xml"
                    className="text-sm text-neutral-300 transition-colors hover:text-white hover:underline"
                  >
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-choices"
                    className="text-sm text-neutral-300 transition-colors hover:text-white hover:underline"
                  >
                    Do Not Sell My Information
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
