'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';

interface PersonIntro {
  name: string;
  fatherName: string;
  motherName: string;
  birthOrder: string; // 장남, 차남, 장녀, 차녀 등
  childhoodPhoto?: string;
}

interface GallerySectionProps {
  groom: PersonIntro;
  bride: PersonIntro;
  galleryImages?: string[];
}

export function GallerySection({ groom, bride, galleryImages = [] }: GallerySectionProps) {
  return (
    <Section id="gallery" className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-md">
        <motion.h2
          className="text-wedding-text mb-10 text-center text-3xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          우리의 이야기
        </motion.h2>

        {/* 신랑 소개 - 설명 왼쪽, 사진 오른쪽 */}
        {groom.childhoodPhoto && (
          <motion.div
            className="flex items-center justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="text-right">
              <p className="text-wedding-text/60 text-xs">
                {groom.fatherName} · {groom.motherName}의 {groom.birthOrder}
              </p>
              <p className="text-wedding-text mt-1 text-sm font-medium">{groom.name}</p>
            </div>
            <div className="border-wedding-pink/30 h-20 w-20 shrink-0 overflow-hidden rounded-full border">
              <img
                src={groom.childhoodPhoto}
                alt={`${groom.name} 어릴적`}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* 신부 소개 - 사진 왼쪽, 설명 오른쪽 */}
        {bride.childhoodPhoto && (
          <motion.div
            className="mt-4 flex items-center justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="border-wedding-pink/30 h-20 w-20 shrink-0 overflow-hidden rounded-full border">
              <img
                src={bride.childhoodPhoto}
                alt={`${bride.name} 어릴적`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-wedding-text/60 text-xs">
                {bride.fatherName} · {bride.motherName}의 {bride.birthOrder}
              </p>
              <p className="text-wedding-text mt-1 text-sm font-medium">{bride.name}</p>
            </div>
          </motion.div>
        )}

        {/* 갤러리 */}
        {galleryImages.length > 0 && (
          <motion.div
            className="mt-6 grid grid-cols-3 gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            {galleryImages.map((image, idx) => (
              <div key={idx} className="border-wedding-pink/30 overflow-hidden rounded-lg border">
                <img
                  src={image}
                  alt={`갤러리 ${idx + 1}`}
                  className="aspect-square w-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </Section>
  );
}
