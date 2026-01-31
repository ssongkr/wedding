'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Snowflake {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export function WinterBackground() {
  const snowflakes = useMemo<Snowflake[]>(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 6,
        size: 3 + Math.random() * 6,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Soft gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(230, 230, 250, 0.3) 0%, transparent 30%, transparent 70%, rgba(176, 196, 222, 0.2) 100%)`,
        }}
      />

      {/* Falling snowflakes */}
      {snowflakes.map((snow) => (
        <motion.div
          key={snow.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${snow.x}%`,
            width: snow.size,
            height: snow.size,
            opacity: snow.opacity,
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.5)',
          }}
          initial={{ y: -10 }}
          animate={{
            y: '105vh',
            x: [0, 15, -10, 20, -15, 10, 0],
          }}
          transition={{
            duration: snow.duration,
            delay: snow.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Subtle sparkle effect */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 2 + Math.random(),
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
