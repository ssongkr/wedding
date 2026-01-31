'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

export function ParallaxContainer({
  children,
  speed = 0.3,
  direction = 'up',
  className = '',
}: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const factor = direction === 'up' ? -1 : 1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${factor * speed * 100}px`, `${-factor * speed * 100}px`]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
