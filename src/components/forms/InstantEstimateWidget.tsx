'use client';

import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowRight, AlertCircle, Satellite } from 'lucide-react';

import { instantEstimateSchema, type InstantEstimateFormData } from '@/lib/schemas';
import type { InstantEstimateResponse } from '@/lib/roof-estimate/types';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import AddressAutocomplete from './AddressAutocomplete';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Step = 'address' | 'contact' | 'loading' | 'result' | 'error';

// ---------------------------------------------------------------------------
// Animated Price Counter
// ---------------------------------------------------------------------------

function AnimatedPrice({ target }: { target: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const startTime = performance.now();
    let frameId: number;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    }

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return (
    <span className="tabular-nums">
      ${current.toLocaleString()}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Loading Dots
// ---------------------------------------------------------------------------

function LoadingDots() {
  return (
    <span className="inline-flex gap-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="inline-block h-1.5 w-1.5 rounded-full bg-current"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Transition config
// ---------------------------------------------------------------------------

const slideVariants = {
  enter: { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

// ---------------------------------------------------------------------------
// Widget
// ---------------------------------------------------------------------------

export default function InstantEstimateWidget() {
  const [step, setStep] = useState<Step>('address');
  const [address, setAddress] = useState('');
  const [estimateData, setEstimateData] = useState<{
    roofAreaSqFt: number;
    estimatePrice: number;
    formattedAddress: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<InstantEstimateFormData>({
    resolver: zodResolver(instantEstimateSchema),
    defaultValues: {
      address: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    },
  });

  // -----------------------------------------------------------------------
  // Step 1: Address selected
  // -----------------------------------------------------------------------

  const handleAddressSelect = useCallback((selected: string) => {
    setAddress(selected);
    setValue('address', selected);
    setStep('contact');
  }, [setValue]);

  // -----------------------------------------------------------------------
  // Step 2: Contact form submitted → call API
  // -----------------------------------------------------------------------

  async function onSubmit(data: InstantEstimateFormData) {
    setStep('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/instant-estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, address }),
      });

      const result: InstantEstimateResponse = await response.json();

      if (!response.ok || !result.success) {
        setErrorMessage(
          result.message ?? 'Something went wrong. Please try again or call us.',
        );
        setStep('error');
        return;
      }

      if (result.data) {
        setEstimateData({
          roofAreaSqFt: result.data.roofAreaSqFt,
          estimatePrice: result.data.estimatePrice,
          formattedAddress: result.data.formattedAddress,
        });
      }
      setStep('result');
    } catch {
      setErrorMessage('Something went wrong. Please try again or call us.');
      setStep('error');
    }
  }

  // -----------------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------------

  return (
    <div className="w-full max-w-xl">
      <AnimatePresence mode="wait">
        {/* ---- Step 1: Address Input ---- */}
        {step === 'address' && (
          <motion.div
            key="address"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <AddressAutocomplete onAddressSelect={handleAddressSelect} />
            <p className="mt-2 text-sm text-white/70">
              Powered by satellite roof measurement technology
            </p>
          </motion.div>
        )}

        {/* ---- Step 2: Contact Form ---- */}
        {step === 'contact' && (
          <motion.div
            key="contact"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-xl bg-white p-5 shadow-lg sm:p-6">
              <p className="mb-4 text-sm font-medium text-neutral-600">
                Almost there! Enter your contact info to see your estimate.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    label="First Name"
                    required
                    placeholder="John"
                    error={errors.firstName?.message}
                    disabled={isSubmitting}
                    {...register('firstName')}
                  />
                  <Input
                    label="Last Name"
                    required
                    placeholder="Smith"
                    error={errors.lastName?.message}
                    disabled={isSubmitting}
                    {...register('lastName')}
                  />
                </div>

                <Input
                  label="Phone Number"
                  type="tel"
                  required
                  placeholder="(555) 123-4567"
                  error={errors.phone?.message}
                  disabled={isSubmitting}
                  {...register('phone')}
                />

                <Input
                  label="Email (optional)"
                  type="email"
                  placeholder="john@example.com"
                  error={errors.email?.message}
                  disabled={isSubmitting}
                  {...register('email')}
                />

                <div className="flex items-center gap-3">
                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    icon={<ArrowRight className="h-5 w-5" />}
                    iconPosition="right"
                  >
                    Get My Free Estimate
                  </Button>
                </div>

                <button
                  type="button"
                  onClick={() => setStep('address')}
                  className="text-sm text-neutral-500 underline hover:text-neutral-700"
                >
                  Change address
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {/* ---- Step 3: Loading ---- */}
        {step === 'loading' && (
          <motion.div
            key="loading"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center py-8 text-white"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <Satellite className="h-12 w-12" />
            </motion.div>
            <p className="mt-4 text-lg font-semibold">
              Measuring your roof via satellite <LoadingDots />
            </p>
            <p className="mt-1 text-sm text-white/70">
              This usually takes 3-5 seconds
            </p>
          </motion.div>
        )}

        {/* ---- Step 4: Result ---- */}
        {step === 'result' && estimateData && (
          <motion.div
            key="result"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-xl bg-white p-6 text-center shadow-lg sm:p-8">
              <p className="text-sm font-medium text-neutral-500">
                Your Estimated Roof Replacement Cost
              </p>

              <p className="mt-2 text-4xl font-bold text-primary-700 sm:text-5xl">
                <AnimatedPrice target={estimateData.estimatePrice} />
              </p>

              <p className="mt-1 text-sm text-neutral-500">
                {estimateData.roofAreaSqFt.toLocaleString()} sq ft roof
              </p>

              {/* Urgency Banner */}
              <div className="mt-5 rounded-lg bg-accent-500/10 p-4">
                <p className="text-base font-bold text-accent-600 sm:text-lg">
                  Call Now for Up to 70% in Discounts &amp; Rebates!
                </p>
              </div>

              <Button
                href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
                variant="cta"
                size="lg"
                fullWidth
                icon={<Phone className="h-5 w-5" />}
                className="mt-4"
              >
                Call {SITE_CONFIG.defaultPhone}
              </Button>

              <a
                href="/free-estimate"
                className="mt-3 inline-block text-sm text-primary-600 underline hover:text-primary-800"
              >
                Or schedule a free in-person inspection
              </a>
            </div>
          </motion.div>
        )}

        {/* ---- Step 5: Error ---- */}
        {step === 'error' && (
          <motion.div
            key="error"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-xl bg-white p-6 text-center shadow-lg sm:p-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-100">
                <AlertCircle className="h-6 w-6 text-accent-600" />
              </div>

              <p className="mt-4 text-base font-semibold text-neutral-800">
                {errorMessage}
              </p>

              <Button
                href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
                variant="cta"
                size="lg"
                fullWidth
                icon={<Phone className="h-5 w-5" />}
                className="mt-5"
              >
                Call {SITE_CONFIG.defaultPhone} for a Free Estimate
              </Button>

              <button
                type="button"
                onClick={() => {
                  setStep('address');
                  setErrorMessage('');
                }}
                className={cn(
                  'mt-3 text-sm text-primary-600 underline hover:text-primary-800',
                )}
              >
                Try a different address
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
