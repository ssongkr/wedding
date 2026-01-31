'use client';

import { motion } from 'framer-motion';

export function SummerBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Wave layers */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: `linear-gradient(180deg, transparent 0%, rgba(135, 206, 235, 0.1) 100%)`,
        }}
      />

      {/* Animated wave 1 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[200%] h-24 text-summer-primary/20"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        initial={{ x: 0 }}
        animate={{ x: '-50%' }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <path
          fill="currentColor"
          d="M0,60 C360,120 720,0 1080,60 C1440,120 1800,0 2160,60 C2520,120 2880,0 2880,60 L2880,120 L0,120 Z"
        />
      </motion.svg>

      {/* Animated wave 2 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[200%] h-20 text-summer-secondary/15"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        initial={{ x: '-25%' }}
        animate={{ x: '-75%' }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <path
          fill="currentColor"
          d="M0,50 C360,100 720,0 1080,50 C1440,100 1800,0 2160,50 C2520,100 2880,0 2880,50 L2880,100 L0,100 Z"
        />
      </motion.svg>

      {/* Floating bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-summer-primary/10"
          style={{
            width: 8 + Math.random() * 16,
            height: 8 + Math.random() * 16,
            left: `${10 + i * 12}%`,
            bottom: '10%',
          }}
          animate={{
            y: [0, -100 - Math.random() * 100],
            opacity: [0.3, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            delay: i * 0.8,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
