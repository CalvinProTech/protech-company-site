'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Phone, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SITE_CONFIG, NAV_ITEMS } from '@/lib/constants';
import { trackPhoneClick, trackCTAClick } from '@/lib/analytics';
import MobileMenu from './MobileMenu';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const scrolledRef = useRef(false);

  // Scroll detection using ref for performance — imperatively toggle shadow class
  useEffect(() => {
    function handleScroll() {
      const isScrolled = window.scrollY > 0;

      if (isScrolled !== scrolledRef.current) {
        scrolledRef.current = isScrolled;
        if (headerRef.current) {
          if (isScrolled) {
            headerRef.current.classList.add('shadow-md');
          } else {
            headerRef.current.classList.remove('shadow-md');
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-white transition-shadow duration-200"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0"
            aria-label={`${SITE_CONFIG.name} — Home`}
          >
            <Image
              src="/images/logo.png"
              alt={SITE_CONFIG.name}
              width={866}
              height={290}
              className="h-12 w-auto lg:h-14"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative flex h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors',
                    isActive
                      ? 'font-bold text-primary-700'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-accent-500"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
              className="text-sm font-semibold text-accent-500 transition-colors hover:text-accent-600"
              onClick={() => trackPhoneClick('header', pathname)}
            >
              {SITE_CONFIG.defaultPhone}
            </a>
            <Link
              href="/free-estimate"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-600"
              onMouseEnter={() => router.prefetch('/free-estimate')}
              onClick={() =>
                trackCTAClick('Get Free Estimate', pathname, 'header')
              }
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Mobile right actions */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-primary-700 transition-colors hover:bg-neutral-100"
              aria-label="Call us"
              onClick={() => trackPhoneClick('header-mobile', pathname)}
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-primary-700 transition-colors hover:bg-neutral-100"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
}
