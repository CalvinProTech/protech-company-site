import { z } from 'zod';

// ---------------------------------------------------------------------------
// Shared enums
// ---------------------------------------------------------------------------

export const SERVICE_OPTIONS = [
  'roof-replacement',
  'roof-repair',
  'storm-damage',
  'commercial-roofing',
  'roof-inspection',
  'gutters-siding',
  'other',
] as const;

export const STATE_OPTIONS = ['FL', 'TX', 'KY', 'OH'] as const;

// ---------------------------------------------------------------------------
// Estimate form schema
// ---------------------------------------------------------------------------

export const estimateFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required'),
  lastName: z
    .string()
    .min(1, 'Last name is required'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/[\d]{10,}/, 'Please enter a valid phone number'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  streetAddress: z
    .string()
    .min(5, 'Street address must be at least 5 characters'),
  city: z
    .string()
    .min(2, 'City must be at least 2 characters'),
  state: z.enum(STATE_OPTIONS, 'Please select a state'),
  zip: z
    .string()
    .min(5, 'ZIP code is required'),
  serviceNeeded: z.enum(SERVICE_OPTIONS, 'Please select a service'),
  howDidYouHear: z
    .string()
    .min(1, 'Please let us know how you heard about us'),
  additionalDetails: z
    .string()
    .optional(),
});

export type EstimateFormData = z.infer<typeof estimateFormSchema>;

// ---------------------------------------------------------------------------
// Contact form schema
// ---------------------------------------------------------------------------

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required'),
  lastName: z
    .string()
    .min(1, 'Last name is required'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/[\d]{10,}/, 'Please enter a valid phone number'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
