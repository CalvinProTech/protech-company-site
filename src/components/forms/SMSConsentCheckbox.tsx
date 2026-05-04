'use client';

interface SMSConsentCheckboxProps {
  infoChecked: boolean;
  promoChecked: boolean;
  onInfoChange: (checked: boolean) => void;
  onPromoChange: (checked: boolean) => void;
  disabled?: boolean;
  idPrefix?: string;
  className?: string;
}

// Two separate checkboxes are required by toll-free carrier verification:
// informational consent and promotional consent must be collected independently.
export default function SMSConsentCheckbox({
  infoChecked,
  promoChecked,
  onInfoChange,
  onPromoChange,
  disabled = false,
  idPrefix = 'sms-consent',
  className = '',
}: SMSConsentCheckboxProps) {
  const infoId = `${idPrefix}-info`;
  const promoId = `${idPrefix}-promo`;

  return (
    <div className={`space-y-2 ${className}`}>
      <label
        htmlFor={infoId}
        className="flex cursor-pointer items-start gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-xs text-neutral-700 transition-colors hover:border-neutral-300"
      >
        <input
          id={infoId}
          type="checkbox"
          checked={infoChecked}
          onChange={(e) => onInfoChange(e.target.checked)}
          disabled={disabled}
          className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer rounded border-neutral-300 text-accent-500 focus:ring-2 focus:ring-accent-500/30"
        />
        <span className="leading-snug">
          I agree to receive informational SMS text messages from{' '}
          <strong>ProTech Roofing</strong> at the number provided, including
          appointment reminders and quote updates. Message frequency varies.
          Consent is not a condition of purchase. Msg &amp; data rates may
          apply. Reply <strong>STOP</strong> to opt out or{' '}
          <strong>HELP</strong> for help. See our{' '}
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

      <label
        htmlFor={promoId}
        className="flex cursor-pointer items-start gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-xs text-neutral-700 transition-colors hover:border-neutral-300"
      >
        <input
          id={promoId}
          type="checkbox"
          checked={promoChecked}
          onChange={(e) => onPromoChange(e.target.checked)}
          disabled={disabled}
          className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer rounded border-neutral-300 text-accent-500 focus:ring-2 focus:ring-accent-500/30"
        />
        <span className="leading-snug">
          <span className="font-medium text-neutral-800">Optional:</span> I
          also agree to receive occasional promotional SMS text messages from{' '}
          <strong>ProTech Roofing</strong> (special offers and seasonal
          promotions). This is optional and not required to receive a quote.
          Msg &amp; data rates may apply. Reply <strong>STOP</strong> to opt
          out.
        </span>
      </label>
    </div>
  );
}
