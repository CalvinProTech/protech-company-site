import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

import { careerApplicationSchema } from '@/lib/schemas';
import { getRole } from '@/lib/careers';
import { appendApplication } from '@/lib/careers-sheet';
import {
  sendCareerApplicationNotification,
  sendCareerApplicationConfirmation,
  isEmailConfigured,
} from '@/lib/email';
import { rateLimit } from '@/lib/rate-limit';
import { isSpam } from '@/lib/spam-detection';

// ---------------------------------------------------------------------------
// POST /api/careers/apply — step 1 of the job application
//
// Deliberately NOT wired to the PTR Lead API: an applicant is not a roofing
// lead and must never land in the sales pipeline, the dialer, or the ad
// conversion feeds. Applications go to the careers sheet + careers@ inbox.
//
// This fires on step 1 precisely so a half-finished application is still
// captured — most drop-off happens at the resume upload.
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      'unknown';
    const { allowed } = rateLimit(`careers:${ip}`, {
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

    // Bots get a fake 200 with tracked:false, same deception the lead forms use.
    if (
      isSpam({
        honeypot: (body._hp as string) || '',
        formLoadedAt: (body._t as number) || 0,
        firstName: body.firstName as string,
        lastName: body.lastName as string,
      })
    ) {
      console.log('[careers] Spam blocked:', body.email);
      return NextResponse.json(
        { success: true, tracked: false, applicationId: randomUUID() },
        { status: 200 }
      );
    }

    const result = careerApplicationSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;
    const role = getRole(data.role);

    if (!role) {
      return NextResponse.json(
        { success: false, message: 'That role is no longer open.' },
        { status: 400 }
      );
    }

    const applicationId = randomUUID();
    const utm = (body._utm as Record<string, string>) || {};
    const source = request.headers.get('referer') || 'direct';

    const record = {
      applicationId,
      submittedAt: new Date().toISOString(),
      role: data.role,
      roleTitle: role.title,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      city: data.city,
      state: data.state,
      smsConsent: data.smsConsent === true,
      source,
      utm,
    };

    // Sheet first, but never fatal — the email below is the real backstop.
    await appendApplication(record);

    if (isEmailConfigured()) {
      try {
        await sendCareerApplicationNotification(record);
      } catch (error) {
        console.error('[careers] notification email failed:', error);
      }

      try {
        await sendCareerApplicationConfirmation({
          firstName: data.firstName,
          email: data.email,
          roleTitle: role.title,
        });
      } catch (error) {
        console.error('[careers] applicant confirmation failed:', error);
      }
    }

    return NextResponse.json(
      { success: true, applicationId, applyKind: role.applyKind },
      { status: 200 }
    );
  } catch (error) {
    console.error('[careers] apply failed:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
