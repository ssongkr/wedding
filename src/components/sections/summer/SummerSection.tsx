'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { GlassCard } from '@/components/glass/GlassCard';
import { GlassButton } from '@/components/glass/GlassButton';
import { SummerBackground } from './SummerBackground';
import { ParallaxContainer } from '@/components/layout/ParallaxContainer';

interface SummerSectionProps {
  date?: string;
  time?: string;
  venueName?: string;
  venueHall?: string;
  venueAddress?: string;
  venuePhone?: string;
  mapUrl?: string;
  transport?: {
    subway?: string;
    bus?: string;
    car?: string;
  };
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export function SummerSection({
  date = '2025년 5월 10일',
  time = '오후 2시',
  venueName = '예식장',
  venueHall = '그랜드홀',
  venueAddress = '서울시 강남구',
  venuePhone,
  mapUrl,
  transport,
}: SummerSectionProps) {
  const handleOpenMap = () => {
    if (mapUrl) {
      window.open(mapUrl, '_blank');
    }
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(venueAddress);
      alert('주소가 복사되었습니다.');
    } catch {
      alert('주소 복사에 실패했습니다.');
    }
  };

  return (
    <Section season="summer" id="summer" className="flex items-center justify-center">
      <SummerBackground />

      <div className="relative z-10 w-full max-w-md mx-auto px-6 py-16">
        <ParallaxContainer speed={0.15}>
          <motion.h2
            className="font-[var(--font-noto-serif)] text-2xl text-center text-summer-text mb-8"
            variants={itemVariants}
          >
            예식 안내
          </motion.h2>
        </ParallaxContainer>

        <GlassCard season="summer" className="mb-6" delay={0.1}>
          <div className="text-center space-y-4">
            <motion.div variants={itemVariants}>
              <p className="text-summer-primary font-medium text-lg">{date}</p>
              <p className="text-summer-text/80">{time}</p>
            </motion.div>

            <motion.div
              className="w-full h-px bg-summer-primary/30"
              variants={itemVariants}
            />

            <motion.div variants={itemVariants}>
              <p className="font-medium text-summer-text text-lg">{venueName}</p>
              {venueHall && (
                <p className="text-summer-text/70 text-sm">{venueHall}</p>
              )}
              <p className="text-summer-text/70 text-sm mt-1">{venueAddress}</p>
              {venuePhone && (
                <p className="text-summer-text/50 text-xs mt-1">
                  Tel. {venuePhone}
                </p>
              )}
            </motion.div>
          </div>
        </GlassCard>

        <motion.div
          className="flex gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {mapUrl && (
            <GlassButton
              season="summer"
              onClick={handleOpenMap}
              className="text-sm text-summer-text"
            >
              지도 보기
            </GlassButton>
          )}
          <GlassButton
            season="summer"
            onClick={handleCopyAddress}
            className="text-sm text-summer-text"
          >
            주소 복사
          </GlassButton>
        </motion.div>

        {transport && (
          <GlassCard season="summer" className="mt-6" delay={0.4}>
            <h3 className="font-medium text-summer-text mb-4 text-center">
              오시는 길
            </h3>
            <div className="space-y-3 text-sm">
              {transport.subway && (
                <motion.div variants={itemVariants} className="flex gap-3">
                  <span className="text-summer-primary font-medium min-w-[60px]">
                    지하철
                  </span>
                  <span className="text-summer-text/80">{transport.subway}</span>
                </motion.div>
              )}
              {transport.bus && (
                <motion.div variants={itemVariants} className="flex gap-3">
                  <span className="text-summer-primary font-medium min-w-[60px]">
                    버스
                  </span>
                  <span className="text-summer-text/80">{transport.bus}</span>
                </motion.div>
              )}
              {transport.car && (
                <motion.div variants={itemVariants} className="flex gap-3">
                  <span className="text-summer-primary font-medium min-w-[60px]">
                    자가용
                  </span>
                  <span className="text-summer-text/80">{transport.car}</span>
                </motion.div>
              )}
            </div>
          </GlassCard>
        )}
      </div>
    </Section>
  );
}
