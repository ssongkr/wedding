'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Leaf {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  rotation: number;
}

const leafColors = [
  'text-autumn-primary',
  'text-autumn-secondary',
  'text-orange-400',
  'text-red-400',
];

export function AutumnBackground() {
  const leaves = useMemo<Leaf[]>(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 12 + Math.random() * 8,
        size: 16 + Math.random() * 12,
        color: leafColors[Math.floor(Math.random() * leafColors.length)],
        rotation: Math.random() * 360,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Warm gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, rgba(218, 165, 32, 0.1) 0%, transparent 60%)`,
        }}
      />

      {/* Falling leaves */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className={`absolute ${leaf.color}`}
          style={{
            left: `${leaf.x}%`,
            fontSize: leaf.size,
          }}
          initial={{ y: -40, rotate: leaf.rotation, opacity: 0.7 }}
          animate={{
            y: '110vh',
            rotate: [leaf.rotation, leaf.rotation + 180, leaf.rotation + 360],
            x: [0, 50, -30, 40, -20, 30],
            opacity: [0.7, 0.8, 0.6, 0.7],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
