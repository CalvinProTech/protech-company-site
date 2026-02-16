import { type ComponentProps } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type SelectProps = {
  label: string;
  name: string;
  options: SelectOption[];
  placeholderOption?: string;
  error?: string;
  helperText?: string;
  ref?: React.Ref<HTMLSelectElement>;
  className?: string;
} & Omit<ComponentProps<'select'>, 'className' | 'children'>;

export default function Select({
  label,
  name,
  options,
  placeholderOption,
  error,
  helperText,
  required,
  ref,
  className,
  ...props
}: SelectProps) {
  const selectId = `select-${name}`;
  const errorId = `${selectId}-error`;
  const helperId = `${selectId}-helper`;
  const hasError = Boolean(error);

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={selectId}
        className="text-sm font-medium text-neutral-700"
      >
        {label}
        {required && (
          <span className="ml-0.5 text-error" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          name={name}
          required={required}
          aria-invalid={hasError || undefined}
          aria-describedby={
            [hasError ? errorId : '', helperText ? helperId : '']
              .filter(Boolean)
              .join(' ') || undefined
          }
          className={cn(
            'h-12 w-full appearance-none rounded-lg border-2 bg-white px-4 pr-10 text-lg text-neutral-900',
            'transition-colors duration-200',
            'focus:outline-none focus:ring-0',
            hasError
              ? 'border-error focus:border-error'
              : 'border-neutral-300 focus:border-primary-500',
            'disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:opacity-60'
          )}
          {...props}
        >
          {placeholderOption && (
            <option value="" disabled>
              {placeholderOption}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
          aria-hidden="true"
        />
      </div>

      {hasError && (
        <p id={errorId} className="text-sm text-error" role="alert">
          {error}
        </p>
      )}

      {helperText && !hasError && (
        <p id={helperId} className="text-sm text-neutral-500">
          {helperText}
        </p>
      )}
    </div>
  );
}
