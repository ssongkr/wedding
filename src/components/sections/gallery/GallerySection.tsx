'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { useState } from 'react';

interface GallerySectionProps {
  images?: string[];
  groomName?: string;
  brideName?: string;
}

export function GallerySection({
  images = [],
  groomName = '신랑',
  brideName = '신부',
}: GallerySectionProps) {
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
    <Section id="gallery" className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-md">
        <motion.h2
          className="text-wedding-text mb-10 text-center text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          우리의 이야기
        </motion.h2>

        {images.length > 0 ? (
          <motion.div
            className="soft-card overflow-hidden p-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative aspect-[4/5]">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="h-full w-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* 네비게이션 */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="text-wedding-text absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
                    aria-label="이전 사진"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="text-wedding-text absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
                    aria-label="다음 사진"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* 페이지 인디케이터 */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 w-2 rounded-full transition-all ${
                        idx === currentIndex ? 'w-4 bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`${idx + 1}번 사진`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="soft-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex aspect-[4/5] items-center justify-center">
              <div className="text-wedding-text-muted text-center">
                <svg
                  className="mx-auto mb-4 h-16 w-16 opacity-50"
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
          </motion.div>
        )}

        <motion.p
          className="text-wedding-text-muted mt-8 text-center text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {groomName}과 {brideName}의 아름다운 순간들
        </motion.p>
      </div>
    </Section>
  );
}
