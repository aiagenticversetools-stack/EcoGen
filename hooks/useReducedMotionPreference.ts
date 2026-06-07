'use client';

import { useEffect } from 'react';
import { useUiStore } from '@/store/ui-store';

export function useReducedMotionPreference() {
  const setPrefersReducedMotion = useUiStore((state) => state.setPrefersReducedMotion);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(query.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, [setPrefersReducedMotion]);
}
