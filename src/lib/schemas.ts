import { z } from 'zod';
import { isFakePhoneNumber } from '@/lib/spam-detection';

// ---------------------------------------------------------------------------
// Shared enums
// ---------------------------------------------------------------------------

export const SERVICE_OPTIONS = [
  'roof-replacement',
  'roof-repair',
  'storm-damage',
  'roof-inspection',
  'gutters-siding',
  'other',
] as const;

// All 50 US states + DC. The visible licensed footprint (TX/KY/MO/OH/PA/MD/WV)
// is enforced separately via LICENSED_STATES in constants.ts. The form
// dropdown accepts any US state so finance-partner submissions match the
// licensed-entity record on file (the prior 9-state allowlist caused
// out-of-state leads to be silently rejected at validation).
export const STATE_OPTIONS = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL',
  'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',
  'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH',
  'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI',
  'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
] as const;

// ---------------------------------------------------------------------------
// Estimate form schema
// ---------------------------------------------------------------------------

export const estimateFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(
      /^\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
      'Please enter a valid US phone number'
    )
    .refine(
      (val) => !isFakePhoneNumber(val),
      'Please enter a real phone number'
    ),
  email: z.string().email('Please enter a valid email address'),
  streetAddress: z
    .string()
    .min(5, 'Street address must be at least 5 characters')
    .max(200, 'Street address is too long'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  state: z.enum(STATE_OPTIONS, 'Please select a state'),
  zip: z.string().min(5, 'ZIP code is required'),
  serviceNeeded: z.enum(SERVICE_OPTIONS, 'Please select a service'),
  howDidYouHear: z.string().min(1, 'Please let us know how you heard about us'),
  additionalDetails: z.string().optional(),
});

export type EstimateFormData = z.infer<typeof estimateFormSchema>;

// ---------------------------------------------------------------------------
// Contact form schema
// ---------------------------------------------------------------------------

export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(
      /^\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
      'Please enter a valid US phone number'
    )
    .refine(
      (val) => !isFakePhoneNumber(val),
      'Please enter a real phone number'
    ),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// ---------------------------------------------------------------------------
// Instant estimate schema
// ---------------------------------------------------------------------------

export const instantEstimateSchema = z.object({
  address: z
    .string()
    .min(5, 'Please enter a valid address')
    .max(200, 'Address is too long'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(
      /^\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
      'Please enter a valid US phone number'
    )
    .refine(
      (val) => !isFakePhoneNumber(val),
      'Please enter a real phone number'
    ),
  email: z
    .string()
    .email('Please enter a valid email')
    .optional()
    .or(z.literal('')),
});

export type InstantEstimateFormData = z.infer<typeof instantEstimateSchema>;

// ---------------------------------------------------------------------------
// Callback request schema (lightweight lead capture)
// ---------------------------------------------------------------------------

export const CALLBACK_SOURCES = [
  'exit-intent',
  'floating-widget',
  'quick-quote-service',
  'quick-quote-city',
  'quick-quote-city-service',
  'quick-quote-state-service',
  'quick-quote-blog',
  'lp-roof-replacement',
  'lp-roof-repair',
  'lp-storm-damage',
  'lp-free-estimate',
  'lp-financing',
  'lp-emergency-repair',
  'lp-general',
] as const;

export const callbackRequestSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(
      /^\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
      'Please enter a valid US phone number'
    )
    .refine(
      (val) => !isFakePhoneNumber(val),
      'Please enter a real phone number'
    ),
  email: z
    .string()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
  zip: z
    .string()
    .regex(/^\d{5}$/, 'Please enter a valid 5-digit ZIP code')
    .optional()
    .or(z.literal('')),
  streetAddress: z.string().optional().or(z.literal('')),
  city: z.string().optional().or(z.literal('')),
  state: z
    .string()
    .length(2, 'State must be a 2-letter code')
    .optional()
    .or(z.literal('')),
  serviceType: z.string().optional().or(z.literal('')),
  timeframe: z.string().optional().or(z.literal('')),
  smsConsent: z.boolean().optional(),
  smsConsentPromo: z.boolean(),
  source: z.enum(CALLBACK_SOURCES, 'Invalid source'),
});

export type CallbackRequestData = z.infer<typeof callbackRequestSchema>;
