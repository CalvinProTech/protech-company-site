import { NextResponse } from 'next/server';
import { z } from 'zod';

import { careerApplicationSchema } from '@/lib/schemas';
import { getRole } from '@/lib/careers';
import { attachResume } from '@/lib/careers-sheet';
import {
  sendCareerApplicationNotification,
  isEmailConfigured,
} from '@/lib/email';
import { rateLimit } from '@/lib/rate-limit';

// ---------------------------------------------------------------------------
// POST /api/careers/resume — step 2 for staff roles
//
// Takes the file plus the step-1 answers again (the client still holds them;
// they are re-validated here rather than trusted). The resume goes to the
// Drive folder beside the careers sheet, and a second notification carries the
// file into careers@ so the inbox alone is enough to work an applicant.
// ---------------------------------------------------------------------------

/**
 * 4 MB. Vercel caps a serverless request body at 4.5 MB, and a resume that
 * big is a scanned photo, not a document.
 */
const MAX_BYTES = 4 * 1024 * 1024;

const ALLOWED = new Map<string, string>([
  ['application/pdf', 'pdf'],
  ['application/msword', 'doc'],
  [
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'docx',
  ],
]);

const ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx'];

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      'unknown';
    const { allowed } = rateLimit(`careers-resume:${ip}`, {
      limit: 5,
      windowMs: 60_000,
    });

    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many uploads. Please try again in a minute.',
        },
        { status: 429 }
      );
    }

    const form = await request.formData();
    const file = form.get('resume');
    const applicationId = String(form.get('applicationId') || '');

    if (!z.uuid().safeParse(applicationId).success) {
      return NextResponse.json(
        { success: false, message: 'Missing application reference.' },
        { status: 400 }
      );
    }

    const applicationResult = careerApplicationSchema.safeParse(
      JSON.parse(String(form.get('application') || '{}'))
    );

    if (!applicationResult.success) {
      return NextResponse.json(
        { success: false, message: 'Application details are incomplete.' },
        { status: 400 }
      );
    }

    if (!(file instanceof File)) {
      return NextResponse.json(
        { success: false, message: 'Please choose a resume file.' },
        { status: 400 }
      );
    }

    if (file.size === 0) {
      return NextResponse.json(
        { success: false, message: 'That file is empty.' },
        { status: 400 }
      );
    }

    if (file.size > MAX_BYTES) {
      return NextResponse.json(
        { success: false, message: 'Resumes must be under 4 MB.' },
        { status: 400 }
      );
    }

    // Trust neither the browser-reported type nor the extension alone.
    const extension = file.name.split('.').pop()?.toLowerCase() ?? '';
    if (!ALLOWED.has(file.type) && !ALLOWED_EXTENSIONS.includes(extension)) {
      return NextResponse.json(
        { success: false, message: 'Please upload a PDF, DOC, or DOCX.' },
        { status: 400 }
      );
    }

    const data = applicationResult.data;
    const role = getRole(data.role);
    const buffer = Buffer.from(await file.arrayBuffer());

    // Keep the applicant's name in the stored filename — a Drive folder full
    // of "resume.pdf" is useless.
    const safeName =
      `${data.firstName}-${data.lastName}-resume.${extension || 'pdf'}`
        .toLowerCase()
        .replace(/[^a-z0-9.-]/g, '-');

    const stored = await attachResume({
      applicationId,
      filename: safeName,
      mimeType: file.type || 'application/octet-stream',
      contentBase64: buffer.toString('base64'),
    });

    if (isEmailConfigured()) {
      try {
        await sendCareerApplicationNotification(
          {
            applicationId,
            roleTitle: role?.title ?? data.role,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            city: data.city,
            state: data.state,
            smsConsent: data.smsConsent === true,
            source: request.headers.get('referer') || 'direct',
            utm: {},
          },
          { filename: safeName, content: buffer, driveUrl: stored.fileUrl }
        );
      } catch (error) {
        console.error('[careers] resume notification failed:', error);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('[careers] resume upload failed:', error);
    return NextResponse.json(
      { success: false, message: 'Upload failed. Please try again.' },
      { status: 500 }
    );
  }
}
