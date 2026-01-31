'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { GlassCard } from '@/components/glass/GlassCard';
import { GlassButton } from '@/components/glass/GlassButton';
import { WinterBackground } from './WinterBackground';
import { ParallaxContainer } from '@/components/layout/ParallaxContainer';
import { type AccountInfo } from '@/types/wedding';
import { useState } from 'react';

interface WinterSectionProps {
  groomAccounts?: AccountInfo[];
  brideAccounts?: AccountInfo[];
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

function AccountCard({
  accounts,
  title,
}: {
  accounts: AccountInfo[];
  title: string;
}) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (account: AccountInfo, index: number) => {
    try {
      await navigator.clipboard.writeText(account.accountNumber);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      alert('복사에 실패했습니다.');
    }
  };

  if (accounts.length === 0) return null;

  return (
    <div className="space-y-3">
      <h4 className="text-winter-text/70 text-sm text-center">{title}</h4>
      {accounts.map((account, idx) => (
        <motion.div
          key={idx}
          className="flex items-center justify-between p-3 rounded-xl bg-white/30 backdrop-blur-sm"
          variants={itemVariants}
        >
          <div className="text-sm">
            <p className="text-winter-text/60 text-xs">
              {account.bank} · {account.holder}
              {account.relation && ` (${account.relation})`}
            </p>
            <p className="text-winter-text font-medium mt-0.5">
              {account.accountNumber}
            </p>
          </div>
          <button
            onClick={() => handleCopy(account, idx)}
            className="ml-3 px-3 py-1.5 text-xs rounded-lg bg-winter-primary/20 text-winter-text/80 hover:bg-winter-primary/30 transition-colors touch-target"
          >
            {copiedIndex === idx ? '복사됨!' : '복사'}
          </button>
        </motion.div>
      ))}
    </div>
  );
}

export function WinterSection({
  groomAccounts = [],
  brideAccounts = [],
  groomName = '신랑',
  brideName = '신부',
}: WinterSectionProps) {
  const [activeTab, setActiveTab] = useState<'groom' | 'bride'>('groom');

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${groomName} ♥ ${brideName} 결혼합니다`,
          text: '두 사람의 새로운 시작에 함께해 주세요',
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('링크가 복사되었습니다.');
      } catch {
        alert('공유에 실패했습니다.');
      }
    }
  };

  const hasAccounts = groomAccounts.length > 0 || brideAccounts.length > 0;

  return (
    <Section season="winter" id="winter" className="flex items-center justify-center">
      <WinterBackground />

      <div className="relative z-10 w-full max-w-md mx-auto px-6 py-16">
        <ParallaxContainer speed={0.15}>
          <motion.h2
            className="font-[var(--font-noto-serif)] text-2xl text-center text-winter-text mb-8"
            variants={itemVariants}
          >
            마음 전하실 곳
          </motion.h2>
        </ParallaxContainer>

        {hasAccounts && (
          <GlassCard season="winter" delay={0.1}>
            {/* Tab buttons */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setActiveTab('groom')}
                className={`flex-1 py-2 text-sm rounded-xl transition-all ${
                  activeTab === 'groom'
                    ? 'bg-winter-primary/30 text-winter-text font-medium'
                    : 'text-winter-text/50 hover:text-winter-text/70'
                }`}
              >
                신랑측
              </button>
              <button
                onClick={() => setActiveTab('bride')}
                className={`flex-1 py-2 text-sm rounded-xl transition-all ${
                  activeTab === 'bride'
                    ? 'bg-winter-primary/30 text-winter-text font-medium'
                    : 'text-winter-text/50 hover:text-winter-text/70'
                }`}
              >
                신부측
              </button>
            </div>

            {/* Account lists */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === 'groom' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'groom' ? (
                <AccountCard
                  accounts={groomAccounts}
                  title={`${groomName}측 계좌`}
                />
              ) : (
                <AccountCard
                  accounts={brideAccounts}
                  title={`${brideName}측 계좌`}
                />
              )}
            </motion.div>
          </GlassCard>
        )}

        {/* Share button */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <GlassButton
            season="winter"
            onClick={handleShare}
            className="text-winter-text"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              청첩장 공유하기
            </span>
          </GlassButton>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-16 text-center text-winter-text/40 text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="mb-2">Thank you for celebrating with us</p>
          <p>
            {groomName} & {brideName}
          </p>
        </motion.footer>
      </div>
    </Section>
  );
}
