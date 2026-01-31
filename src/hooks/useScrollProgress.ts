'use client';

import { useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';

export function useScrollProgress() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return { containerRef, scrollYProgress };
}

export function useParallax(
  scrollYProgress: MotionValue<number>,
  range: [number, number] = [0, 1],
  output: [string, string] = ['0%', '100%']
) {
  return useTransform(scrollYProgress, range, output);
}

export function useSectionScroll() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return { ref, scrollYProgress };
}
