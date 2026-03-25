'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

const COOKIE_NAME = 'protech_sms_consent';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year

function hasConsented(): boolean {
  if (typeof document === 'undefined') return false;
  return document.cookie.includes(`${COOKIE_NAME}=1`);
}

function setConsentCookie() {
  document.cookie = `${COOKIE_NAME}=1; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

export default function SmsConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!hasConsented()) {
      setVisible(true);
    }
  }, []);

  if (!mounted || !visible) return null;

  function handleAgree() {
    setConsentCookie();
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-14 left-0 right-0 z-[55] lg:bottom-0"
          role="dialog"
          aria-label="SMS consent"
        >
          <div className="border-t border-neutral-200 bg-white px-4 py-4 shadow-lg sm:px-6">
            <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <MessageSquare className="hidden h-6 w-6 shrink-0 text-primary-600 sm:block" />
              <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                By using this site, you agree to receive SMS/text messages from
                ProTech Roofing regarding your roofing project, including
                appointment reminders, estimates, and service updates. Messaging
                frequency is variable. For help, text back{' '}
                <strong>HELP</strong>. To unsubscribe, text back{' '}
                <strong>STOP</strong>. Standard message and data rates may
                apply. View our{' '}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-primary-600 underline hover:text-primary-700"
                >
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link
                  href="/terms-of-service"
                  className="font-medium text-primary-600 underline hover:text-primary-700"
                >
                  Terms of Service
                </Link>
                .
              </p>
              <button
                onClick={handleAgree}
                className="shrink-0 rounded-lg bg-primary-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                I Agree
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
