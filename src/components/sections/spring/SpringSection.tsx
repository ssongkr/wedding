'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { GlassCard } from '@/components/glass/GlassCard';
import { SpringBackground } from './SpringBackground';
import { ParallaxContainer } from '@/components/layout/ParallaxContainer';

interface SpringSectionProps {
  groomName?: string;
  brideName?: string;
  message?: string;
  weddingDate?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export function SpringSection({
  groomName = '신랑',
  brideName = '신부',
  message = '서로 다른 길을 걸어온 두 사람이\n이제 하나의 길을 함께 걸어가려 합니다.\n\n귀한 걸음 하시어 축복해 주시면\n더없는 기쁨으로 간직하겠습니다.',
  weddingDate,
}: SpringSectionProps) {
  const daysUntilWedding = weddingDate
    ? Math.ceil((new Date(weddingDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : null;

  return (
    <Section season="spring" id="spring" className="flex items-center justify-center">
      <SpringBackground />

      <div className="relative z-10 w-full max-w-md mx-auto px-6 py-16">
        <ParallaxContainer speed={0.2} direction="down">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <motion.p
              className="text-spring-text/60 text-sm tracking-[0.3em] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              WEDDING INVITATION
            </motion.p>
          </motion.div>
        </ParallaxContainer>

        <GlassCard season="spring" className="text-center" delay={0.2}>
          <motion.h1
            className="font-[var(--font-noto-serif)] text-3xl font-medium text-spring-text mb-2"
            variants={itemVariants}
          >
            {groomName}
            <span className="text-spring-primary mx-3 text-2xl">&#10084;</span>
            {brideName}
          </motion.h1>

          <motion.div
            className="w-16 h-px bg-spring-primary/50 mx-auto my-6"
            variants={itemVariants}
          />

          <motion.p
            className="font-[var(--font-noto-sans)] text-spring-text/80 leading-relaxed text-[15px] whitespace-pre-line"
            variants={itemVariants}
          >
            {message}
          </motion.p>
        </GlassCard>

        {daysUntilWedding !== null && daysUntilWedding > 0 && (
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard season="spring" className="inline-block px-8 py-4">
              <p className="text-spring-text/60 text-xs mb-1">결혼식까지</p>
              <p className="text-spring-primary text-2xl font-medium">
                D-{daysUntilWedding}
              </p>
            </GlassCard>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
