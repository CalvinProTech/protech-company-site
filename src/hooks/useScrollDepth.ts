'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackScrollDepth } from '@/lib/analytics';

const THRESHOLDS = [25, 50, 75, 100];

export function useScrollDepth() {
  const pathname = usePathname();

  useEffect(() => {
    const fired = new Set<number>();

    function handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const percent = Math.round((window.scrollY / scrollHeight) * 100);

      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
          trackScrollDepth(pathname, threshold);
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);
}
