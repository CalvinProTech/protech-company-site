import { type ComponentProps } from 'react';
import { cn } from '@/lib/utils';

type InputProps = {
  label: string;
  name: string;
  error?: string;
  helperText?: string;
  ref?: React.Ref<HTMLInputElement>;
  className?: string;
} & Omit<ComponentProps<'input'>, 'className'>;

export default function Input({
  label,
  name,
  type = 'text',
  placeholder,
  error,
  helperText,
  required,
  ref,
  className,
  ...props
}: InputProps) {
  const inputId = `input-${name}`;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;
  const hasError = Boolean(error);

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-neutral-700"
      >
        {label}
        {required && (
          <span className="ml-0.5 text-error" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <input
        ref={ref}
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        aria-invalid={hasError || undefined}
        aria-describedby={
          [hasError ? errorId : '', helperText ? helperId : '']
            .filter(Boolean)
            .join(' ') || undefined
        }
        className={cn(
          'h-12 w-full rounded-lg border-2 px-4 text-lg text-neutral-900',
          'placeholder:text-neutral-400',
          'transition-colors duration-200',
          'focus:outline-none focus:ring-0',
          hasError
            ? 'border-error focus:border-error'
            : 'border-neutral-300 focus:border-primary-500',
          'disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:opacity-60'
        )}
        {...props}
      />

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
