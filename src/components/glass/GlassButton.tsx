'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { type Season } from '@/types/wedding';

interface GlassButtonProps {
  children: ReactNode;
  season?: Season;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function GlassButton({
  children,
  season,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}: GlassButtonProps) {
  const seasonClass = season ? `liquid-glass-${season}` : '';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        liquid-glass ${seasonClass} liquid-glass-interactive
        touch-target px-6 py-3 font-medium
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        ${className}
      `}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
