'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle } from 'lucide-react';

import {
  estimateFormSchema,
  type EstimateFormData,
  STATE_OPTIONS,
  SERVICE_OPTIONS,
} from '@/lib/schemas';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import FormSuccess from './FormSuccess';

// ---------------------------------------------------------------------------
// Select option data
// ---------------------------------------------------------------------------

const STATE_SELECT_OPTIONS = STATE_OPTIONS.map((s) => ({
  value: s,
  label: s,
}));

const SERVICE_LABELS: Record<(typeof SERVICE_OPTIONS)[number], string> = {
  'roof-replacement': 'Roof Replacement',
  'roof-repair': 'Roof Repair',
  'storm-damage': 'Storm Damage',
  'commercial-roofing': 'Commercial Roofing',
  'roof-inspection': 'Roof Inspection',
  'gutters-siding': 'Gutters & Siding',
  other: 'Other',
};

const SERVICE_SELECT_OPTIONS = SERVICE_OPTIONS.map((s) => ({
  value: s,
  label: SERVICE_LABELS[s],
}));

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function EstimateForm() {
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [serverError, setServerError] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EstimateFormData>({
    resolver: zodResolver(estimateFormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      streetAddress: '',
      city: '',
      state: undefined,
      serviceNeeded: undefined,
      howDidYouHear: '',
      additionalDetails: '',
    },
  });

  // -----------------------------------------------------------------------
  // Submit handler
  // -----------------------------------------------------------------------

  async function onSubmit(data: EstimateFormData) {
    setServerError('');
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(
          result.message ?? 'Something went wrong. Please try again.'
        );
        setSubmitStatus('error');
        return;
      }

      setSubmitStatus('success');
    } catch {
      setServerError('Something went wrong. Please try again.');
      setSubmitStatus('error');
    }
  }

  // -----------------------------------------------------------------------
  // Render success state
  // -----------------------------------------------------------------------

  if (submitStatus === 'success') {
    return <FormSuccess />;
  }

  // -----------------------------------------------------------------------
  // Render form
  // -----------------------------------------------------------------------

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
    >
      {/* Server error banner */}
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

      {/* Full Name */}
      <Input
        label="Full Name"
        required
        placeholder="John Smith"
        error={errors.fullName?.message}
        disabled={isSubmitting}
        {...register('fullName')}
      />

      {/* Phone & Email */}
      <div className="grid gap-5 sm:grid-cols-2">
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
          label="Email Address"
          type="email"
          required
          placeholder="john@example.com"
          error={errors.email?.message}
          disabled={isSubmitting}
          {...register('email')}
        />
      </div>

      {/* Street Address */}
      <Input
        label="Street Address"
        required
        placeholder="123 Main St"
        error={errors.streetAddress?.message}
        disabled={isSubmitting}
        {...register('streetAddress')}
      />

      {/* City & State */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="City"
          required
          placeholder="Tampa"
          error={errors.city?.message}
          disabled={isSubmitting}
          {...register('city')}
        />

        <Select
          label="State"
          required
          placeholderOption="Select state"
          options={STATE_SELECT_OPTIONS}
          error={errors.state?.message}
          disabled={isSubmitting}
          {...register('state')}
        />
      </div>

      {/* Service Needed */}
      <Select
        label="Service Needed"
        required
        placeholderOption="Select a service"
        options={SERVICE_SELECT_OPTIONS}
        error={errors.serviceNeeded?.message}
        disabled={isSubmitting}
        {...register('serviceNeeded')}
      />

      {/* How Did You Hear */}
      <Input
        label="How Did You Hear About Us?"
        placeholder="Google, referral, etc."
        error={errors.howDidYouHear?.message}
        disabled={isSubmitting}
        {...register('howDidYouHear')}
      />

      {/* Additional Details */}
      <Textarea
        label="Additional Details"
        placeholder="Tell us about your roofing needs..."
        rows={4}
        error={errors.additionalDetails?.message}
        disabled={isSubmitting}
        {...register('additionalDetails')}
      />

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        fullWidth
        loading={isSubmitting}
        disabled={isSubmitting}
        className="h-14"
      >
        Get My Free Estimate
      </Button>
    </form>
  );
}
