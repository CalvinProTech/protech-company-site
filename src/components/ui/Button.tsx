'use client';

import { type ComponentProps, type ReactNode } from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const variantStyles = {
  primary:
    'bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-600 shadow-sm',
  secondary:
    'bg-primary-700 text-white hover:bg-primary-800 active:bg-primary-900 shadow-sm',
  outline:
    'border-2 border-primary-700 text-primary-700 hover:bg-primary-50 active:bg-primary-100 bg-transparent',
  ghost:
    'bg-transparent text-primary-700 hover:bg-primary-50 active:bg-primary-100',
  cta: 'bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-600 shadow-md text-lg font-bold tracking-wide',
} as const;

const sizeStyles = {
  sm: 'h-11 px-4 text-sm gap-1.5',
  md: 'h-12 px-6 text-base gap-2',
  lg: 'h-14 px-8 text-base gap-2',
  xl: 'h-16 px-10 text-lg gap-2.5',
} as const;

const ctaSizeOverrides = {
  sm: 'h-12 px-6 text-base gap-2',
  md: 'h-14 px-8 text-lg gap-2',
  lg: 'h-16 px-10 text-lg gap-2.5',
  xl: 'h-[72px] px-12 text-xl gap-3',
} as const;

type Variant = keyof typeof variantStyles;
type Size = keyof typeof sizeStyles;

type BaseProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<ComponentProps<'button'>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<ComponentProps<typeof Link>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function isExternalUrl(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:');
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  loading = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const isDisabled = loading || ('disabled' in props && props.disabled);

  const classes = cn(
    'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200',
    'focus-visible:outline-3 focus-visible:outline-primary-500 focus-visible:outline-offset-2',
    'cursor-pointer select-none whitespace-nowrap',
    variantStyles[variant],
    variant === 'cta' ? ctaSizeOverrides[size] : sizeStyles[size],
    fullWidth && 'w-full',
    isDisabled && 'opacity-50 pointer-events-none cursor-not-allowed',
    className
  );

  const iconElement = loading ? (
    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
  ) : icon ? (
    <span className="shrink-0" aria-hidden="true">
      {icon}
    </span>
  ) : null;

  const content = (
    <>
      {iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {iconPosition === 'right' && iconElement}
    </>
  );

  if (props.href != null) {
    const { href, ...linkProps } = props as ButtonAsLink;

    if (isExternalUrl(href)) {
      return (
        <a
          href={href}
          className={classes}
          aria-label={props['aria-label']}
          {...(linkProps as Omit<ComponentProps<'a'>, 'href' | 'className'>)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        aria-label={props['aria-label']}
        {...(linkProps as Omit<ComponentProps<typeof Link>, 'href' | 'className'>)}
      >
        {content}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { disabled, type = 'button', ...buttonProps } = props as ButtonAsButton;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={classes}
      aria-label={props['aria-label']}
      aria-busy={loading || undefined}
      {...(buttonProps as Omit<ComponentProps<'button'>, 'type' | 'disabled' | 'className'>)}
    >
      {content}
    </button>
  );
}
