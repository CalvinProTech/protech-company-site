'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, X, CheckCircle, AlertCircle } from 'lucide-react';

import {
  callbackRequestSchema,
  type CallbackRequestData,
} from '@/lib/schemas';
import { trackFormSubmit, trackLeadWidgetEvent } from '@/lib/analytics';
import { getUtmParams } from '@/lib/utm';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const SUPPRESSED_PATHS = ['/contact', '/free-estimate'];

export default function FloatingCallbackWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
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
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CallbackRequestData>({
    resolver: zodResolver(callbackRequestSchema),
    defaultValues: {
      name: '',
      phone: '',
      source: 'floating-widget',
    },
  });

  // Auto-collapse success message after 5 seconds
  useEffect(() => {
    if (submitStatus !== 'success') return;
    const timer = setTimeout(() => {
      setIsOpen(false);
      setSubmitStatus('idle');
      reset();
    }, 5_000);
    return () => clearTimeout(timer);
  }, [submitStatus, reset]);

  // Suppress on conversion pages
  if (SUPPRESSED_PATHS.includes(pathname)) return null;

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
      trackFormSubmit('callback', { name: data.name, source: 'floating-widget' });
    } catch {
      setServerError('Something went wrong. Please try again.');
      setSubmitStatus('error');
    }
  }

  function handleToggle() {
    const next = !isOpen;
    setIsOpen(next);
    trackLeadWidgetEvent(
      next ? 'widget_opened' : 'widget_closed',
      pathname,
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-80 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-primary-800 px-4 py-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-sm font-semibold text-white">
                  Request a Callback
                </span>
              </div>
              <button
                onClick={handleToggle}
                className="rounded-full p-1 text-primary-200 transition-colors hover:bg-primary-700 hover:text-white"
                aria-label="Close callback widget"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              {submitStatus === 'success' ? (
                <div className="py-4 text-center">
                  <CheckCircle className="mx-auto h-10 w-10 text-accent-500" />
                  <p className="mt-2 font-semibold text-primary-900">
                    We&apos;ll call you soon!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="flex flex-col gap-3"
                >
                  {submitStatus === 'error' && serverError && (
                    <div
                      role="alert"
                      className="flex items-start gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                      <p>{serverError}</p>
                    </div>
                  )}

                  <input type="hidden" {...register('source')} />

                  {/* Honeypot */}
                  <div aria-hidden="true" className="absolute -left-[9999px] -top-[9999px]">
                    <label htmlFor="fcw-website">Website</label>
                    <input
                      id="fcw-website"
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
                    label="Phone"
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    error={errors.phone?.message}
                    disabled={isSubmitting}
                    {...register('phone')}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    loading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    Call Me Back
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={handleToggle}
            className="flex items-center gap-2 rounded-full bg-accent-500 px-5 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-accent-600"
          >
            <Phone className="h-5 w-5" />
            <span>Request Callback</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
