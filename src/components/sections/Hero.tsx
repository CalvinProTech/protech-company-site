'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Shield, Star, Award, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { trackCTAClick } from '@/lib/analytics';

interface HeroProps {
  heading: string;
  subtitle: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  backgroundImage?: string;
  showTrustBadges?: boolean;
  children?: React.ReactNode;
}

const trustBadges = [
  { icon: Award, label: 'Licensed & Insured' },
  { icon: Shield, label: `${SITE_CONFIG.statesLicensed} States Served` },
  { icon: Star, label: `${SITE_CONFIG.googleRating}★ on Google` },
  { icon: MapPin, label: 'Tampa-Headquartered' },
];

export function Hero({
  heading,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage = '/images/hero/default.jpg',
  showTrustBadges = true,
  children,
}: HeroProps) {
  return (
    <section className="relative flex min-h-[500px] items-center md:min-h-[600px]">
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary-900/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* CSS-only entrance (see .hero-rise in globals.css). The previous
              JS-driven version shipped the H1 at opacity:0 and relied on a
              client animation to reveal it — on the live site it never did,
              so every photo-hero page rendered an invisible headline. Now the
              resting state is visible; the animation is a courtesy, not a gate. */}
          <h1 className="hero-rise text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {heading}
          </h1>

          <p
            className="hero-rise mt-4 text-lg text-neutral-200 sm:text-xl md:mt-6 md:text-2xl"
            style={{ animationDelay: '100ms' }}
          >
            {subtitle}
          </p>

          <div className="hero-rise mt-8" style={{ animationDelay: '200ms' }}>
            {children ? (
              children
            ) : (
              <div className="flex flex-col gap-4 sm:flex-row">
                {primaryCTA && (
                  <Link
                    href={primaryCTA.href}
                    className="inline-flex h-14 items-center justify-center rounded-lg bg-accent-500 px-8 text-lg font-semibold text-white transition-colors hover:bg-accent-600"
                    onClick={() =>
                      trackCTAClick(primaryCTA.text, window.location.pathname, 'hero')
                    }
                  >
                    {primaryCTA.text}
                  </Link>
                )}
                {secondaryCTA && (
                  <Link
                    href={secondaryCTA.href}
                    className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-white px-8 text-lg font-semibold text-white transition-colors hover:bg-white/10"
                    onClick={() =>
                      trackCTAClick(secondaryCTA.text, window.location.pathname, 'hero')
                    }
                  >
                    {secondaryCTA.text}
                  </Link>
                )}
              </div>
            )}
          </div>

          {showTrustBadges && (
            <div
              style={{ animationDelay: '300ms' }}
              className="hero-rise mt-10 flex flex-wrap gap-6"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-white/90"
                >
                  <badge.icon className="h-5 w-5" aria-hidden="true" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
