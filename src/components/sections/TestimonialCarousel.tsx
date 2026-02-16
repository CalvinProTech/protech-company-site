'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: string | number;
  name: string;
  city: string;
  state: string;
  rating: number;
  quote: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

function StarDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={cn(
            'h-5 w-5',
            i < Math.floor(rating)
              ? 'text-warning fill-warning'
              : i < rating
                ? 'text-warning fill-warning/50'
                : 'text-neutral-300'
          )}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  }, [testimonials.length]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, [testimonials.length]);

  if (!testimonials.length) return null;

  const testimonial = testimonials[current];

  return (
    <section className="bg-primary-50 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="relative">
          <div className="min-h-[250px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <Quote className="mx-auto mb-6 h-10 w-10 text-primary-300" />
                <StarDisplay rating={testimonial.rating} />
                <blockquote className="mt-6 text-lg leading-relaxed text-neutral-700 md:text-xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold text-primary-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {testimonial.city}, {testimonial.state}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev/Next buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-neutral-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-primary-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-neutral-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-primary-700" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={cn(
                'h-3 w-3 rounded-full transition-colors',
                index === current ? 'bg-primary-700' : 'bg-primary-200'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
