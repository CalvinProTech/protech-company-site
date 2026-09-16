import { Resend } from 'resend';
import { SITE_CONFIG } from '@/lib/constants';

const FROM_EMAIL = 'ProTech Roofing <sales@protechroof.net>';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

let resendClient: Resend | null = null;

function getResend(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not configured');
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

// ---------------------------------------------------------------------------
// Contact form confirmation
// ---------------------------------------------------------------------------

export async function sendContactConfirmation({
  firstName,
  email,
}: {
  firstName: string;
  email: string;
}) {
  const { error } = await getResend().emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: 'We received your message — ProTech Roofing',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #1e3a5f;">Hi ${escapeHtml(firstName)},</h2>
        <p>Thank you for reaching out to ProTech Roofing! We've received your message and a member of our sales team will be in touch with you shortly.</p>
        <p>If you need immediate assistance, feel free to call us at <strong>${SITE_CONFIG.defaultPhone}</strong>.</p>
        <p>We look forward to helping you with your roofing needs.</p>
        <br />
        <p>Best regards,<br /><strong>The ProTech Roofing Team</strong></p>
      </div>
    `,
  });

  if (error) {
    throw error;
  }
}

// ---------------------------------------------------------------------------
// Estimate form confirmation
// ---------------------------------------------------------------------------

export async function sendEstimateConfirmation({
  firstName,
  email,
}: {
  firstName: string;
  email: string;
}) {
  const { error } = await getResend().emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: 'Your estimate request has been received — ProTech Roofing',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #1e3a5f;">Hi ${escapeHtml(firstName)},</h2>
        <p>Thank you for requesting a free estimate from ProTech Roofing! We've received your information and a member of our sales team will reach out to schedule your estimate.</p>
        <p>If you need immediate assistance, feel free to call us at <strong>${SITE_CONFIG.defaultPhone}</strong>.</p>
        <p>We look forward to helping you with your roofing project.</p>
        <br />
        <p>Best regards,<br /><strong>The ProTech Roofing Team</strong></p>
      </div>
    `,
  });

  if (error) {
    throw error;
  }
}

// ---------------------------------------------------------------------------
// Careers — applicant confirmation + internal notification
//
// Both emails fire at STEP 2 — once the applicant has actually finished
// (resume uploaded, or crew details submitted). Step 1 writes the sheet row
// silently; a half-finished application is not worth an inbox interruption.
// The one exception is the fallback: if the sheet write fails, step 1 sends
// the notification anyway, because otherwise that person exists nowhere.
// Goes to the careers@ group (CAREERS_NOTIFY_EMAIL overrides for testing).
// ---------------------------------------------------------------------------

const CAREERS_INBOX =
  process.env.CAREERS_NOTIFY_EMAIL || 'careers@protechroof.net';

type CareerNotification = {
  applicationId: string;
  roleTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  smsConsent: boolean;
  source: string;
  utm: Record<string, string>;
};

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding: 6px 12px 6px 0; color: #737373; white-space: nowrap;">${escapeHtml(label)}</td>
      <td style="padding: 6px 0; color: #171717; font-weight: 600;">${escapeHtml(value)}</td>
    </tr>`;
}

export async function sendCareerApplicationNotification(
  application: CareerNotification,
  /** Present only on the step-2 call, once the applicant uploaded a file. */
  resume?: { filename: string; content: Buffer; driveUrl?: string }
) {
  const utmPairs = Object.entries(application.utm)
    .map(([key, value]) => `${key}=${value}`)
    .join(' · ');

  const { error } = await getResend().emails.send({
    from: FROM_EMAIL,
    to: CAREERS_INBOX,
    replyTo: application.email,
    subject: `${resume ? 'Application + resume' : 'New application'}: ${application.roleTitle} — ${application.firstName} ${application.lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #333;">
        <h2 style="color: #1e3a5f; margin-bottom: 4px;">${escapeHtml(application.roleTitle)}</h2>
        <p style="margin-top: 0; color: #737373;">Application ${escapeHtml(application.applicationId)}</p>
        <table style="border-collapse: collapse; font-size: 15px;">
          ${row('Name', `${application.firstName} ${application.lastName}`)}
          ${row('Phone', application.phone)}
          ${row('Email', application.email)}
          ${row('Location', `${application.city}, ${application.state}`)}
          ${row('Texts OK', application.smsConsent ? 'Yes' : 'No')}
          ${row('Applied from', application.source)}
          ${utmPairs ? row('Campaign', utmPairs) : ''}
          ${resume?.driveUrl ? row('Resume', resume.driveUrl) : ''}
        </table>
        ${
          resume
            ? '<p style="margin-top: 20px;">Resume attached.</p>'
            : '<p style="margin-top: 20px; color: #C2410C;">Step 1 only — sent because the careers sheet could not be reached, so this email is the only record of them. They may still be finishing step 2.</p>'
        }
      </div>
    `,
    attachments: resume
      ? [{ filename: resume.filename, content: resume.content }]
      : undefined,
  });

  if (error) {
    throw error;
  }
}

export async function sendCareerApplicationConfirmation({
  firstName,
  email,
  roleTitle,
}: {
  firstName: string;
  email: string;
  roleTitle: string;
}) {
  const { error } = await getResend().emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: `We received your application — ProTech Roofing`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #1e3a5f;">Hi ${escapeHtml(firstName)},</h2>
        <p>Thanks for applying to ProTech Roofing for the <strong>${escapeHtml(roleTitle)}</strong> role. Your application is in front of our team.</p>
        <p>If it looks like a fit, someone will call you within 1–2 business days for a short phone screen. Keep an eye on your phone — we call from <strong>${SITE_CONFIG.defaultPhone}</strong>.</p>
        <p>Questions in the meantime? Reply to this email or call the number above.</p>
        <br />
        <p>Best regards,<br /><strong>The ProTech Roofing Team</strong></p>
      </div>
    `,
  });

  if (error) {
    throw error;
  }
}
