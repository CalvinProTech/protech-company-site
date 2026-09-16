import { NextResponse } from 'next/server';

import { careerApplicationSchema, crewDetailsSchema } from '@/lib/schemas';
import { getRole } from '@/lib/careers';
import { appendCrewDetails } from '@/lib/careers-sheet';
import {
  sendCareerApplicationNotification,
  sendCareerApplicationConfirmation,
  isEmailConfigured,
} from '@/lib/email';
import { rateLimit } from '@/lib/rate-limit';

// ---------------------------------------------------------------------------
// POST /api/careers/crew — step 2 for install crews
//
// Crews do not send resumes. What matters is the company, the states they
// cover, the crew size, and whether they carry insurance. This lands in the
// sheet and the careers@ inbox flagged CREW; a human then creates the
// Subcontractor__c record in Salesforce and fires the "Send Onboarding Form"
// quick action, which is what actually starts the eSignatures onboarding
// (W-9 / COI / subcontractor agreement). There is no public self-start link
// for that flow today — the handoff is deliberate, not automated.
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      'unknown';
    const { allowed } = rateLimit(`careers-crew:${ip}`, {
      limit: 5,
      windowMs: 60_000,
    });

    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please try again in a minute.',
        },
        { status: 429 }
      );
    }

    const body = (await request.json()) as Record<string, unknown>;

    const applicationResult = careerApplicationSchema.safeParse(
      body.application
    );
    const crewResult = crewDetailsSchema.safeParse(body.crew);

    if (!applicationResult.success || !crewResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: crewResult.success
            ? {}
            : crewResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = applicationResult.data;
    const crew = crewResult.data;
    const role = getRole(data.role);

    const sheet = await appendCrewDetails({
      applicationId: crew.applicationId,
      companyName: crew.companyName,
      statesCovered: crew.statesCovered,
      crewSize: crew.crewSize,
      insured: crew.insured,
      notes: crew.notes || undefined,
    });

    let notified = false;

    if (isEmailConfigured()) {
      try {
        await sendCareerApplicationNotification({
          applicationId: crew.applicationId,
          roleTitle: `${role?.title ?? 'Install Crew'} — ${crew.companyName} (${crew.statesCovered.join(', ')}, crew of ${crew.crewSize}, ${crew.insured ? 'insured' : 'NOT insured'})`,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          city: data.city,
          state: data.state,
          smsConsent: data.smsConsent === true,
          source: request.headers.get('referer') || 'direct',
          utm: {},
        });
        notified = true;
      } catch (error) {
        console.error('[careers] crew notification failed:', error);
      }

      try {
        await sendCareerApplicationConfirmation({
          firstName: data.firstName,
          email: data.email,
          roleTitle: role?.title ?? 'Install Crew',
        });
      } catch (error) {
        console.error('[careers] crew confirmation failed:', error);
      }
    }

    if (!sheet.ok && !notified) {
      console.error('[careers] CREW DETAILS LOST — no sink accepted them:', {
        applicationId: crew.applicationId,
        company: crew.companyName,
        sheet: sheet.error,
      });

      return NextResponse.json(
        {
          success: false,
          message:
            'We could not save your crew details right now. Please call 1-866-308-2640 and we will take them over the phone.',
        },
        { status: 503 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('[careers] crew submission failed:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
