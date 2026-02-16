import { type ComponentProps, type ReactNode, createContext, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type CardVariant = 'default' | 'service' | 'testimonial' | 'project' | 'blog';

const variantStyles: Record<CardVariant, string> = {
  default: '',
  service: 'text-center items-center',
  testimonial: 'bg-primary-50 border-primary-200',
  project: 'overflow-hidden p-0',
  blog: 'overflow-hidden p-0',
};

type CardContextValue = {
  variant: CardVariant;
};

const CardContext = createContext<CardContextValue>({ variant: 'default' });

type CardProps = {
  variant?: CardVariant;
  href?: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<'div'>, 'children' | 'className'>;

function CardRoot({
  variant = 'default',
  href,
  children,
  className,
  ...props
}: CardProps) {
  const isProjectOrBlog = variant === 'project' || variant === 'blog';

  const classes = cn(
    'flex flex-col bg-white border border-neutral-200 rounded-xl',
    !isProjectOrBlog && 'p-6 md:p-8',
    'shadow-sm transition-all duration-300 ease-out',
    'hover:shadow-lg hover:-translate-y-0.5',
    variantStyles[variant],
    href && 'cursor-pointer',
    className
  );

  const content = (
    <CardContext value={{ variant }}>
      {children}
    </CardContext>
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, 'no-underline text-inherit')}>
        {content}
      </Link>
    );
  }

  return (
    <div className={classes} {...props}>
      {content}
    </div>
  );
}

type CardImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

function CardImage({
  src,
  alt,
  width = 600,
  height = 400,
  priority = false,
  className,
}: CardImageProps) {
  const { variant } = use(CardContext);
  const isFullBleed = variant === 'project' || variant === 'blog';

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        isFullBleed ? 'w-full' : 'rounded-lg mb-4',
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full object-cover"
      />
    </div>
  );
}

type CardBodyProps = {
  children: ReactNode;
  className?: string;
};

function CardBody({ children, className }: CardBodyProps) {
  const { variant } = use(CardContext);
  const isFullBleed = variant === 'project' || variant === 'blog';

  return (
    <div
      className={cn(
        'flex flex-1 flex-col',
        isFullBleed && 'p-6 md:p-8',
        className
      )}
    >
      {children}
    </div>
  );
}

type CardTitleProps = {
  as?: 'h2' | 'h3' | 'h4';
  children: ReactNode;
  className?: string;
};

function CardTitle({ as: Tag = 'h3', children, className }: CardTitleProps) {
  const { variant } = use(CardContext);

  return (
    <Tag
      className={cn(
        'font-bold text-neutral-900 leading-snug',
        variant === 'service' ? 'text-lg md:text-xl' : 'text-xl md:text-2xl',
        'mb-2',
        className
      )}
    >
      {children}
    </Tag>
  );
}

type CardDescriptionProps = {
  children: ReactNode;
  className?: string;
};

function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('text-neutral-600 leading-relaxed text-base', className)}>
      {children}
    </p>
  );
}

type CardFooterProps = {
  children: ReactNode;
  className?: string;
};

function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div
      className={cn(
        'mt-auto pt-4 flex items-center gap-3',
        className
      )}
    >
      {children}
    </div>
  );
}

const Card = Object.assign(CardRoot, {
  Image: CardImage,
  Body: CardBody,
  Title: CardTitle,
  Description: CardDescription,
  Footer: CardFooter,
});

export default Card;
