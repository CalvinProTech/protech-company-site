'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle } from 'lucide-react';

import { contactFormSchema, type ContactFormData } from '@/lib/schemas';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import FormSuccess from './FormSuccess';

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [serverError, setServerError] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  // -----------------------------------------------------------------------
  // Submit handler
  // -----------------------------------------------------------------------

  async function onSubmit(data: ContactFormData) {
    setServerError('');
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
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

      {/* First & Last Name */}
      <div className="grid gap-5 sm:grid-cols-2">
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

      {/* Message */}
      <Textarea
        label="Message"
        required
        placeholder="How can we help you?"
        rows={5}
        error={errors.message?.message}
        disabled={isSubmitting}
        {...register('message')}
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
        Send My Message
      </Button>
    </form>
  );
}
