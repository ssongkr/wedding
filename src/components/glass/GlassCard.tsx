'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';
import { type Season } from '@/types/wedding';

interface GlassCardProps {
  children: ReactNode;
  season?: Season;
  interactive?: boolean;
  className?: string;
  delay?: number;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export function GlassCard({
  children,
  season,
  interactive = false,
  className = '',
  delay = 0,
}: GlassCardProps) {
  const seasonClass = season ? `liquid-glass-${season}` : '';
  const interactiveClass = interactive ? 'liquid-glass-interactive' : '';

  return (
    <motion.div
      className={`liquid-glass ${seasonClass} ${interactiveClass} relative p-6 ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={delay}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
