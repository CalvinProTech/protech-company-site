'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, CheckCircle, AlertCircle } from 'lucide-react';

import {
  callbackRequestSchema,
  type CallbackRequestData,
} from '@/lib/schemas';
import { trackFormSubmit, trackLeadWidgetEvent } from '@/lib/analytics';
import { getUtmParams } from '@/lib/utm';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const SUPPRESSED_PATHS = ['/contact', '/free-estimate'];
const SHOW_DELAY_MS = 15_000;
const SESSION_KEY = 'protech_exit_popup_shown';

export default function ExitIntentPopup() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [serverError, setServerError] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const formLoadedAt = useRef(0);

  useEffect(() => {
    formLoadedAt.current = Date.now();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CallbackRequestData>({
    resolver: zodResolver(callbackRequestSchema),
    defaultValues: {
      name: '',
      phone: '',
      source: 'exit-intent',
    },
  });

  const showPopup = useCallback(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, '1');
    setIsVisible(true);
    trackLeadWidgetEvent('popup_shown', pathname);
  }, [pathname]);

  useEffect(() => {
    // Desktop-only: skip if no fine pointer (touch devices)
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (SUPPRESSED_PATHS.includes(pathname)) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let ready = false;
    const delayTimer = setTimeout(() => {
      ready = true;
    }, SHOW_DELAY_MS);

    function handleMouseLeave(e: MouseEvent) {
      if (ready && e.clientY < 0) {
        showPopup();
      }
    }

    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(delayTimer);
      document.documentElement.removeEventListener(
        'mouseleave',
        handleMouseLeave,
      );
    };
  }, [pathname, showPopup]);

  function handleDismiss() {
    setIsVisible(false);
    trackLeadWidgetEvent('popup_dismissed', pathname);
  }

  async function onSubmit(data: CallbackRequestData) {
    setServerError('');
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          _hp: honeypot,
          _t: formLoadedAt.current,
          _utm: getUtmParams(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(
          result.message ?? 'Something went wrong. Please try again.',
        );
        setSubmitStatus('error');
        return;
      }

      setSubmitStatus('success');
      trackFormSubmit('callback', { name: data.name, source: 'exit-intent' });
    } catch {
      setServerError('Something went wrong. Please try again.');
      setSubmitStatus('error');
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleDismiss();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-md overflow-hidden rounded-xl bg-white shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute right-3 top-3 z-10 rounded-full p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
              aria-label="Close popup"
            >
              <X className="h-5 w-5" />
            </button>

            {submitStatus === 'success' ? (
              <div className="px-8 py-12 text-center">
                <CheckCircle className="mx-auto h-14 w-14 text-accent-500" />
                <h3 className="mt-4 text-2xl font-bold text-primary-900">
                  We&apos;ll Call You Soon!
                </h3>
                <p className="mt-2 text-neutral-600">
                  A roofing specialist will reach out within the hour.
                </p>
                <button
                  onClick={handleDismiss}
                  className="mt-6 text-sm font-medium text-primary-600 hover:underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="bg-primary-800 px-8 pb-6 pt-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Wait — Before You Go!
                      </h3>
                      <p className="text-sm text-primary-200">
                        Get a free callback from a roofing expert.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="flex flex-col gap-4 px-8 pb-8 pt-6"
                >
                  {submitStatus === 'error' && serverError && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
                    >
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                      <p>{serverError}</p>
                    </div>
                  )}

                  <input type="hidden" {...register('source')} />

                  {/* Honeypot */}
                  <div aria-hidden="true" className="absolute -left-[9999px] -top-[9999px]">
                    <label htmlFor="eip-website">Website</label>
                    <input
                      id="eip-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <Input
                    label="Name"
                    required
                    placeholder="John Smith"
                    error={errors.name?.message}
                    disabled={isSubmitting}
                    {...register('name')}
                  />

                  <Input
                    label="Phone Number"
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    error={errors.phone?.message}
                    disabled={isSubmitting}
                    {...register('phone')}
                  />

                  <Button
                    type="submit"
                    variant="cta"
                    fullWidth
                    loading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    Request a Free Callback
                  </Button>

                  <p className="text-center text-xs text-neutral-500">
                    No spam. We&apos;ll only call about your roofing project.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
