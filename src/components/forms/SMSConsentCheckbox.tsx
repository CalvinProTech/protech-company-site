'use client';

interface SMSConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
}

/**
 * SMS opt-in consent checkbox required for TCR toll-free verification.
 * Unchecked by default — user must actively opt in.
 * Copy includes: brand, message type, frequency, rates, STOP/HELP, and
 * a link to the Privacy Policy.
 */
export default function SMSConsentCheckbox({
  checked,
  onChange,
  disabled = false,
  id = 'sms-consent',
  className = '',
}: SMSConsentCheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-start gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-xs text-neutral-700 transition-colors hover:border-neutral-300 ${className}`}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer rounded border-neutral-300 text-accent-500 focus:ring-2 focus:ring-accent-500/30"
      />
      <span className="leading-snug">
        I agree to receive SMS text messages from{' '}
        <strong>ProTech Roofing</strong> at the number provided, including
        appointment reminders, quote updates, and occasional promotions.
        Message frequency varies. Consent is not a condition of purchase.
        Msg &amp; data rates may apply. Reply <strong>STOP</strong> to opt out
        or <strong>HELP</strong> for help. See our{' '}
        <a
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-600 underline hover:text-accent-700"
          onClick={(e) => e.stopPropagation()}
        >
          Privacy Policy
        </a>{' '}
        and{' '}
        <a
          href="/terms-of-service"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-600 underline hover:text-accent-700"
          onClick={(e) => e.stopPropagation()}
        >
          Terms of Service
        </a>
        .
      </span>
    </label>
  );
}
