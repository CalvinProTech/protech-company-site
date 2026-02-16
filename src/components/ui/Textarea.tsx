import { type ComponentProps } from 'react';
import { cn } from '@/lib/utils';

type TextareaProps = {
  label: string;
  name: string;
  error?: string;
  helperText?: string;
  ref?: React.Ref<HTMLTextAreaElement>;
  className?: string;
} & Omit<ComponentProps<'textarea'>, 'className'>;

export default function Textarea({
  label,
  name,
  placeholder,
  error,
  helperText,
  required,
  ref,
  className,
  ...props
}: TextareaProps) {
  const textareaId = `textarea-${name}`;
  const errorId = `${textareaId}-error`;
  const helperId = `${textareaId}-helper`;
  const hasError = Boolean(error);

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={textareaId}
        className="text-sm font-medium text-neutral-700"
      >
        {label}
        {required && (
          <span className="ml-0.5 text-error" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <textarea
        ref={ref}
        id={textareaId}
        name={name}
        placeholder={placeholder}
        required={required}
        aria-invalid={hasError || undefined}
        aria-describedby={
          [hasError ? errorId : '', helperText ? helperId : '']
            .filter(Boolean)
            .join(' ') || undefined
        }
        className={cn(
          'min-h-[120px] w-full resize-y rounded-lg border-2 px-4 py-3 text-lg text-neutral-900',
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
