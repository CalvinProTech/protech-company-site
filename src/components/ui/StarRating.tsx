import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type StarSize = 'sm' | 'md' | 'lg';

const sizeStyles: Record<StarSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
};

type StarRatingProps = {
  rating: number;
  size?: StarSize;
  className?: string;
};

export default function StarRating({
  rating,
  size = 'md',
  className,
}: StarRatingProps) {
  const clampedRating = Math.max(0, Math.min(5, rating));
  const fullStars = Math.floor(clampedRating);
  const fractional = clampedRating - fullStars;
  const hasHalf = fractional >= 0.25 && fractional < 0.75;
  const hasAlmostFull = fractional >= 0.75;
  const effectiveFullStars = hasAlmostFull ? fullStars + 1 : fullStars;
  const emptyStars = 5 - effectiveFullStars - (hasHalf ? 1 : 0);

  return (
    <div
      className={cn('inline-flex items-center gap-0.5', className)}
      role="img"
      aria-label={`${clampedRating} out of 5 stars`}
    >
      {/* Full stars */}
      {Array.from({ length: effectiveFullStars }, (_, i) => (
        <Star
          key={`full-${i}`}
          className={cn(sizeStyles[size], 'fill-accent-500 text-accent-500')}
          aria-hidden="true"
        />
      ))}

      {/* Half star */}
      {hasHalf && (
        <span
          key="half"
          className={cn('relative inline-block', sizeStyles[size])}
          aria-hidden="true"
        >
          {/* Background empty star */}
          <Star
            className={cn(
              sizeStyles[size],
              'absolute inset-0 text-neutral-300'
            )}
          />
          {/* Clipped filled star */}
          <span
            className="absolute inset-0 overflow-hidden"
            style={{ width: '50%' }}
          >
            <Star
              className={cn(
                sizeStyles[size],
                'fill-accent-500 text-accent-500'
              )}
            />
          </span>
        </span>
      )}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <Star
          key={`empty-${i}`}
          className={cn(sizeStyles[size], 'text-neutral-300')}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
