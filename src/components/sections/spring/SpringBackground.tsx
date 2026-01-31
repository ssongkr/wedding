'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export function SpringBackground() {
  const petals = useMemo<Petal[]>(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 6,
        size: 14 + Math.random() * 10,
        opacity: 0.4 + Math.random() * 0.3,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute select-none"
          style={{
            left: `${petal.x}%`,
            fontSize: petal.size,
            opacity: petal.opacity,
          }}
          initial={{ y: -30, rotate: 0, x: 0 }}
          animate={{
            y: '110vh',
            rotate: [0, 45, -30, 60, 0],
            x: [0, 30, -20, 40, -10, 20],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-spring-primary"
          >
            <path d="M12 2C12 2 8 6 8 10C8 12 9.5 14 12 14C14.5 14 16 12 16 10C16 6 12 2 12 2Z" />
            <path
              d="M12 14C12 14 16 18 16 22C16 22 14.5 22 12 22C9.5 22 8 22 8 22C8 18 12 14 12 14Z"
              opacity="0.7"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
