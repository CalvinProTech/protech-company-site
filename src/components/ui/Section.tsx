import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionBackground = 'white' | 'light' | 'primary';

const backgroundStyles: Record<SectionBackground, string> = {
  white: 'bg-white',
  light: 'bg-neutral-100',
  primary: 'bg-primary-50',
};

type SectionProps = {
  background?: SectionBackground;
  id?: string;
  heading?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  background = 'white',
  id,
  heading,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        backgroundStyles[background],
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(heading || subtitle) && (
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            {heading && (
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl lg:text-[2.75rem]">
                {heading}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
