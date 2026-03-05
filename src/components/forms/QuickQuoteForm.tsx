'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Phone, CheckCircle, AlertCircle } from 'lucide-react';

import {
  callbackRequestSchema,
  type CallbackRequestData,
  type CALLBACK_SOURCES,
} from '@/lib/schemas';
import { trackFormSubmit } from '@/lib/analytics';
import { getUtmParams } from '@/lib/utm';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

interface QuickQuoteFormProps {
  source: (typeof CALLBACK_SOURCES)[number];
  heading?: string;
  subtext?: string;
}

export default function QuickQuoteForm({
  source,
  heading = 'Get a Quick Quote',
  subtext = 'Enter your info and we\'ll call you back within the hour.',
}: QuickQuoteFormProps) {
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
      zip: '',
      source,
    },
  });

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
      trackFormSubmit('callback', { name: data.name, source });
    } catch {
      setServerError('Something went wrong. Please try again.');
      setSubmitStatus('error');
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-accent-500" />
        <h3 className="mt-4 text-xl font-bold text-primary-900">
          We&apos;ll Call You Soon!
        </h3>
        <p className="mt-2 text-neutral-600">
          A roofing specialist will reach out within the hour.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      {/* Header strip */}
      <div className="bg-primary-800 px-6 py-4">
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-white" />
          <h3 className="text-lg font-semibold text-white">{heading}</h3>
        </div>
        <p className="mt-1 text-sm text-primary-200">{subtext}</p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-4 p-6"
      >
        {submitStatus === 'error' && serverError && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <AlertCircle
              className="mt-0.5 h-5 w-5 shrink-0 text-red-500"
              aria-hidden="true"
            />
            <p>{serverError}</p>
          </div>
        )}

        <input type="hidden" {...register('source')} />

        {/* Honeypot */}
        <div aria-hidden="true" className="absolute -left-[9999px] -top-[9999px]">
          <label htmlFor="qq-website">Website</label>
          <input
            id="qq-website"
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

        <Input
          label="ZIP Code"
          placeholder="12345"
          error={errors.zip?.message}
          disabled={isSubmitting}
          {...register('zip')}
        />

        <Button
          type="submit"
          variant="primary"
          fullWidth
          loading={isSubmitting}
          disabled={isSubmitting}
          className="h-14"
        >
          Request a Callback
        </Button>

        <p className="text-center text-xs text-neutral-500">
          No spam. We&apos;ll only call about your roofing project.
        </p>
      </form>
    </div>
  );
}
