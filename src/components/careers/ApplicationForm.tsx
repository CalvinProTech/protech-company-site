'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, CheckCircle, FileText, Upload } from 'lucide-react';

import {
  careerApplicationSchema,
  crewDetailsSchema,
  STATE_OPTIONS,
  type CareerApplicationData,
  type CrewDetailsData,
} from '@/lib/schemas';
import {
  ROLE_OPTIONS,
  CREW_STATE_OPTIONS,
  getRole,
  type ApplyKind,
  type CareerRoleSlug,
} from '@/lib/careers';
import { SITE_CONFIG } from '@/lib/constants';
import { trackCareerEvent } from '@/lib/analytics';
import { getUtmParams } from '@/lib/utm';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';

const MAX_RESUME_BYTES = 4 * 1024 * 1024;

export default function ApplicationForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [applicationId, setApplicationId] = useState('');
  const [applyKind, setApplyKind] = useState<ApplyKind>('resume');
  const [details, setDetails] = useState<CareerApplicationData | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const formLoadedAt = useRef(0);

  useEffect(() => {
    formLoadedAt.current = Date.now();
    trackCareerEvent('application_started');
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CareerApplicationData>({
    resolver: zodResolver(careerApplicationSchema),
    defaultValues: {
      role: undefined,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      state: undefined,
      smsConsent: false,
    },
  });

  const crewForm = useForm<Omit<CrewDetailsData, 'applicationId'>>({
    resolver: zodResolver(crewDetailsSchema.omit({ applicationId: true })),
    defaultValues: {
      companyName: '',
      statesCovered: [],
      crewSize: '',
      insured: false,
      notes: '',
    },
  });

  // "Apply for this role" links arrive as /careers?role=<slug>#apply. Read it
  // here rather than from the server page: useSearchParams would force the
  // whole route behind a Suspense boundary and out of static rendering, and
  // this page is worth keeping static.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('role');
    if (requested && getRole(requested)) {
      setValue('role', requested as CareerRoleSlug);
    }
  }, [setValue]);

  // -----------------------------------------------------------------------
  // Step 1 — contact details
  // -----------------------------------------------------------------------

  async function onDetailsSubmit(data: CareerApplicationData) {
    setServerError('');

    try {
      const response = await fetch('/api/careers/apply', {
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
          result.message ?? 'Something went wrong. Please try again.'
        );
        return;
      }

      setApplicationId(result.applicationId);
      setApplyKind(result.applyKind ?? 'resume');
      setDetails(data);
      setStep(2);
      trackCareerEvent('application_submitted', { role: data.role });
    } catch {
      setServerError('Something went wrong. Please try again.');
    }
  }

  // -----------------------------------------------------------------------
  // Step 2a — resume upload
  // -----------------------------------------------------------------------

  async function onResumeSubmit(event: React.FormEvent) {
    event.preventDefault();
    setServerError('');

    if (!resumeFile) {
      setServerError('Please choose your resume file.');
      return;
    }

    if (resumeFile.size > MAX_RESUME_BYTES) {
      setServerError('That file is over 4 MB. Please upload a smaller copy.');
      return;
    }

    setUploading(true);

    try {
      const payload = new FormData();
      payload.append('applicationId', applicationId);
      payload.append('application', JSON.stringify(details));
      payload.append('resume', resumeFile);

      const response = await fetch('/api/careers/resume', {
        method: 'POST',
        body: payload,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(result.message ?? 'Upload failed. Please try again.');
        return;
      }

      trackCareerEvent('resume_uploaded', { role: details?.role });
      setDone(true);
    } catch {
      setServerError('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  }

  // -----------------------------------------------------------------------
  // Step 2b — crew details
  // -----------------------------------------------------------------------

  async function onCrewSubmit(data: Omit<CrewDetailsData, 'applicationId'>) {
    setServerError('');

    try {
      const response = await fetch('/api/careers/crew', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          application: details,
          crew: { ...data, applicationId },
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(
          result.message ?? 'Something went wrong. Please try again.'
        );
        return;
      }

      trackCareerEvent('crew_submitted', {});
      setDone(true);
    } catch {
      setServerError('Something went wrong. Please try again.');
    }
  }

  // -----------------------------------------------------------------------
  // Done
  // -----------------------------------------------------------------------

  if (done) {
    const isCrew = applyKind === 'crew';

    return (
      <div className="flex flex-col items-center gap-4 rounded-xl bg-green-50 px-6 py-10 text-center">
        <CheckCircle
          className="h-14 w-14 text-green-600"
          aria-hidden="true"
          strokeWidth={1.5}
        />
        <h3 className="text-2xl font-bold text-green-800">
          {isCrew ? 'Crew details received' : 'Application received'}
        </h3>
        <p className="max-w-md text-green-700">
          {isCrew
            ? 'We’ll review your coverage area and reach out to start onboarding — that’s a W-9, your certificate of insurance, and a signed subcontractor agreement.'
            : 'Someone from our team will call you within 1–2 business days for a short phone screen. We call from ' +
              SITE_CONFIG.defaultPhone +
              '.'}
        </p>
      </div>
    );
  }

  // -----------------------------------------------------------------------
  // Shell — progress header wraps both steps
  // -----------------------------------------------------------------------

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs font-semibold tracking-widest text-neutral-500 uppercase">
          <span>{step === 1 ? 'Your details' : 'Almost done'}</span>
          <span>{step} / 2</span>
        </div>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-1 flex-1 rounded-full bg-accent-500" />
          <span
            className={
              step === 2
                ? 'h-1 flex-1 rounded-full bg-accent-500'
                : 'h-1 flex-1 rounded-full bg-neutral-200'
            }
          />
        </div>
      </div>

      {serverError && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      )}

      {step === 1 && (
        <form
          onSubmit={handleSubmit(onDetailsSubmit)}
          noValidate
          className="flex flex-col gap-5"
        >
          <Select
            label="Which role are you applying for?"
            placeholderOption="Select a role…"
            options={ROLE_OPTIONS}
            // Without an explicit value the browser skips the disabled
            // placeholder and shows the first real option instead.
            defaultValue=""
            required
            error={errors.role?.message}
            {...register('role')}
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <Input
              label="First name"
              required
              autoComplete="given-name"
              error={errors.firstName?.message}
              {...register('firstName')}
            />
            <Input
              label="Last name"
              required
              autoComplete="family-name"
              error={errors.lastName?.message}
              {...register('lastName')}
            />
          </div>

          <Input
            label="Phone"
            type="tel"
            placeholder="(555) 123-4567"
            required
            autoComplete="tel"
            error={errors.phone?.message}
            {...register('phone')}
          />

          <Input
            label="Email"
            type="email"
            placeholder="name@email.com"
            required
            autoComplete="email"
            error={errors.email?.message}
            {...register('email')}
          />

          <div className="grid gap-5 sm:grid-cols-[1fr_140px]">
            <Input
              label="City"
              required
              autoComplete="address-level2"
              error={errors.city?.message}
              {...register('city')}
            />
            <Select
              label="State"
              placeholderOption="State…"
              options={STATE_OPTIONS.map((state) => ({
                value: state,
                label: state,
              }))}
              defaultValue=""
              required
              error={errors.state?.message}
              {...register('state')}
            />
          </div>

          <label className="flex items-start gap-3 text-sm text-neutral-600">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 rounded border-neutral-300"
              {...register('smsConsent')}
            />
            <span>
              Text me about my application. Message and data rates may apply;
              reply STOP to opt out. We never text marketing offers to
              applicants.
            </span>
          </label>

          {/* Honeypot — hidden from humans, catnip for bots */}
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
            className="absolute left-[-9999px] h-px w-px opacity-0"
          />

          <Button type="submit" variant="cta" size="md" fullWidth loading={isSubmitting}>
            Continue
          </Button>

          <p className="text-center text-sm text-neutral-500">
            Have your resume ready — it’s the next step. Or call{' '}
            <a
              href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
              className="font-semibold text-primary-700 hover:underline"
            >
              {SITE_CONFIG.defaultPhone}
            </a>
            .
          </p>
        </form>
      )}

      {step === 2 && applyKind === 'resume' && (
        <form onSubmit={onResumeSubmit} className="flex flex-col gap-5">
          <div>
            <h3 className="text-xl font-bold text-neutral-900">
              Now your resume
            </h3>
            <p className="mt-1 text-neutral-600">
              PDF, DOC, or DOCX, up to 4 MB. We already have your contact
              details{details ? `, ${details.firstName}` : ''} — this is the
              last step.
            </p>
          </div>

          <label className="flex cursor-pointer flex-col items-center gap-3 rounded-xl border-2 border-dashed border-neutral-300 px-6 py-10 text-center transition-colors hover:border-primary-500 hover:bg-primary-50">
            {resumeFile ? (
              <>
                <FileText
                  className="h-8 w-8 text-primary-700"
                  aria-hidden="true"
                />
                <span className="font-semibold text-neutral-900">
                  {resumeFile.name}
                </span>
                <span className="text-sm text-neutral-500">
                  Choose a different file
                </span>
              </>
            ) : (
              <>
                <Upload
                  className="h-8 w-8 text-neutral-400"
                  aria-hidden="true"
                />
                <span className="font-semibold text-neutral-900">
                  Choose your resume
                </span>
                <span className="text-sm text-neutral-500">
                  PDF, DOC, or DOCX
                </span>
              </>
            )}
            <input
              type="file"
              className="sr-only"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={(event) =>
                setResumeFile(event.target.files?.[0] ?? null)
              }
            />
          </label>

          <Button
            type="submit"
            variant="cta"
            size="md"
            fullWidth
            loading={uploading}
          >
            Submit application
          </Button>

          <p className="text-center text-sm text-neutral-500">
            No resume handy? Call{' '}
            <a
              href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
              className="font-semibold text-primary-700 hover:underline"
            >
              {SITE_CONFIG.defaultPhone}
            </a>{' '}
            — we already have your details and can take it from there.
          </p>
        </form>
      )}

      {step === 2 && applyKind === 'crew' && (
        <form
          onSubmit={crewForm.handleSubmit(onCrewSubmit)}
          noValidate
          className="flex flex-col gap-5"
        >
          <div>
            <h3 className="text-xl font-bold text-neutral-900">
              Tell us about your crew
            </h3>
            <p className="mt-1 text-neutral-600">
              No resume needed. We need the company, where you work, and
              whether you carry insurance.
            </p>
          </div>

          <Input
            label="Company name"
            required
            error={crewForm.formState.errors.companyName?.message}
            {...crewForm.register('companyName')}
          />

          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-medium text-neutral-700">
              States you cover
              <span className="ml-0.5 text-error" aria-hidden="true">
                *
              </span>
            </legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {CREW_STATE_OPTIONS.map((state) => (
                <label
                  key={state.value}
                  className="flex items-center gap-2 text-sm text-neutral-700"
                >
                  <input
                    type="checkbox"
                    value={state.value}
                    className="h-5 w-5 rounded border-neutral-300"
                    {...crewForm.register('statesCovered')}
                  />
                  {state.label}
                </label>
              ))}
            </div>
            {crewForm.formState.errors.statesCovered && (
              <p className="text-sm text-red-600">
                {crewForm.formState.errors.statesCovered.message}
              </p>
            )}
          </fieldset>

          <Input
            label="How many people on your crew?"
            required
            placeholder="e.g. 5–6"
            error={crewForm.formState.errors.crewSize?.message}
            {...crewForm.register('crewSize')}
          />

          <label className="flex items-start gap-3 text-sm text-neutral-600">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 rounded border-neutral-300"
              {...crewForm.register('insured')}
            />
            <span>
              We carry general liability and workers’ compensation, and can
              provide a certificate of insurance.
            </span>
          </label>

          <Button
            type="submit"
            variant="cta"
            size="md"
            fullWidth
            loading={crewForm.formState.isSubmitting}
          >
            Submit crew details
          </Button>
        </form>
      )}
    </div>
  );
}
