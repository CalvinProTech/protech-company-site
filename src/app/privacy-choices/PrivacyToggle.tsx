'use client';

import { useState, useEffect } from 'react';

const COOKIE_NAME = 'protech_optout';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year

function getOptOutStatus(): boolean {
  if (typeof document === 'undefined') return false;
  return document.cookie.includes(`${COOKIE_NAME}=1`);
}

function setOptOutCookie(optedOut: boolean) {
  if (optedOut) {
    document.cookie = `${COOKIE_NAME}=1; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  } else {
    document.cookie = `${COOKIE_NAME}=; path=/; max-age=0`;
  }
}

export default function PrivacyToggle() {
  const [optedOut, setOptedOut] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setOptedOut(getOptOutStatus());
    setMounted(true);
  }, []);

  function handleToggle() {
    const next = !optedOut;
    setOptOutCookie(next);
    setOptedOut(next);
  }

  if (!mounted) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
        <p className="text-neutral-500">Loading preferences...</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-primary-900">
            Visitor Identification
          </p>
          <p className="mt-1 text-sm text-neutral-600">
            {optedOut
              ? 'You have opted out. The identification pixel will not load on your visits.'
              : 'Visitor identification is currently active on your browser.'}
          </p>
        </div>
        <button
          onClick={handleToggle}
          role="switch"
          aria-checked={!optedOut}
          className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ${
            optedOut ? 'bg-neutral-300' : 'bg-accent-500'
          }`}
        >
          <span
            className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
              optedOut ? 'translate-x-1' : 'translate-x-6'
            }`}
          />
        </button>
      </div>
      {optedOut && (
        <p className="mt-3 rounded-lg bg-green-50 px-4 py-2 text-sm text-green-700">
          You have successfully opted out. This preference is saved in your
          browser.
        </p>
      )}
    </div>
  );
}
