'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { GlassCard } from '@/components/glass/GlassCard';
import { AutumnBackground } from './AutumnBackground';
import { ParallaxContainer } from '@/components/layout/ParallaxContainer';
import { useState } from 'react';

interface AutumnSectionProps {
  images?: string[];
  groomName?: string;
  brideName?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export function AutumnSection({
  images = [],
  groomName = '신랑',
  brideName = '신부',
}: AutumnSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <Section season="autumn" id="autumn" className="flex items-center justify-center">
      <AutumnBackground />

      <div className="relative z-10 w-full max-w-md mx-auto px-6 py-16">
        <ParallaxContainer speed={0.15}>
          <motion.h2
            className="font-[var(--font-noto-serif)] text-2xl text-center text-autumn-text mb-8"
            variants={itemVariants}
          >
            우리의 이야기
          </motion.h2>
        </ParallaxContainer>

        {images.length > 0 ? (
          <GlassCard season="autumn" className="p-0 overflow-hidden" delay={0.1}>
            <div className="relative aspect-[4/5]">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Navigation arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-autumn-text/70 hover:bg-white/50 transition-colors"
                    aria-label="이전 사진"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-autumn-text/70 hover:bg-white/50 transition-colors"
                    aria-label="다음 사진"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Dots indicator */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === currentIndex
                          ? 'bg-white'
                          : 'bg-white/40'
                      }`}
                      aria-label={`${idx + 1}번 사진으로 이동`}
                    />
                  ))}
                </div>
              )}
            </div>
          </GlassCard>
        ) : (
          <GlassCard season="autumn" delay={0.1}>
            <div className="aspect-[4/5] flex items-center justify-center">
              <div className="text-center text-autumn-text/50">
                <svg
                  className="w-16 h-16 mx-auto mb-4 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm">사진을 추가해주세요</p>
              </div>
            </div>
          </GlassCard>
        )}

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <GlassCard season="autumn" className="inline-block">
            <p className="text-autumn-text/70 text-sm leading-relaxed">
              {groomName}과 {brideName}의<br />
              아름다운 순간들
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
}
