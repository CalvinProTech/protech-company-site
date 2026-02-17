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
