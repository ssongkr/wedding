'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';
import { type Season } from '@/types/wedding';

interface SectionProps {
  season: Season;
  children: ReactNode;
  id: string;
  className?: string;
}

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.15,
    },
  },
};

const seasonBgColors: Record<Season, string> = {
  spring: 'bg-spring-bg',
  summer: 'bg-summer-bg',
  autumn: 'bg-autumn-bg',
  winter: 'bg-winter-bg',
};

export function Section({ season, children, id, className = '' }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`relative min-h-screen overflow-hidden ${seasonBgColors[season]} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}
