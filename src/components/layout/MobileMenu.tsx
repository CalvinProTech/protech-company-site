'use client';

import { useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SITE_CONFIG, NAV_ITEMS } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap
  const handleTabTrap = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !menuRef.current) return;

      const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    },
    []
  );

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener('keydown', handleTabTrap);
    return () => document.removeEventListener('keydown', handleTabTrap);
  }, [isOpen, handleTabTrap]);

  // Focus close button on open
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-white"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="flex h-full flex-col">
            {/* Header with close button */}
            <div className="flex items-center justify-between px-4 py-4">
              <span className="text-xl font-bold text-primary-700">
                {SITE_CONFIG.name}
              </span>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="flex h-12 w-12 items-center justify-center rounded-lg text-neutral-700 hover:bg-neutral-100"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 overflow-y-auto px-4" aria-label="Mobile navigation">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          'flex h-14 items-center rounded-lg px-4 text-lg font-medium transition-colors',
                          isActive
                            ? 'bg-primary-50 font-bold text-accent-500'
                            : 'text-neutral-700 hover:bg-neutral-50'
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Bottom actions */}
            <div className="border-t border-neutral-200 p-4 space-y-3">
              <a
                href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
                className="flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-primary-700 text-primary-700 font-semibold transition-colors hover:bg-primary-50"
              >
                <Phone className="h-5 w-5" />
                <span>{SITE_CONFIG.defaultPhone}</span>
              </a>
              <Link
                href="/free-estimate"
                className="flex h-12 items-center justify-center rounded-lg bg-accent-500 text-white font-semibold transition-colors hover:bg-accent-600"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
