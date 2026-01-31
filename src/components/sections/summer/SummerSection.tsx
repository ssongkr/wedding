'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';

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

// 리퀴드 글래스 카드 컴포넌트
function GlassCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass-container ${className}`}>
      {/* 글래스 레이어들 */}
      <div className="glass-overlay" />
      <div className="glass-specular" />
      <div className="glass-content">{children}</div>

      <style jsx>{`
        .glass-container {
          position: relative;
          display: flex;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }

        .glass-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .glass-specular {
          position: absolute;
          inset: 0;
          z-index: 2;
          border-radius: inherit;
          overflow: hidden;
          box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.7),
            inset -1px -1px 0 rgba(255, 255, 255, 0.2),
            inset 0 0 12px rgba(255, 255, 255, 0.3);
        }

        .glass-content {
          position: relative;
          z-index: 3;
          width: 100%;
          padding: 24px;
        }
      `}</style>
    </div>
  );
}

// 리퀴드 글래스 버튼 컴포넌트
function GlassButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className="glass-btn">
      {children}

      <style jsx>{`
        .glass-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          border: none;
          border-radius: 50px;
          overflow: hidden;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          color: #5c4a3d;
          background: rgba(255, 255, 255, 0.4);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08),
            inset 1px 1px 0 rgba(255, 255, 255, 0.7),
            inset 0 0 5px rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 2.2);
        }

        .glass-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1),
            inset 1px 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 0 8px rgba(255, 255, 255, 0.6);
        }

        .glass-btn:active {
          transform: scale(0.95);
        }
      `}</style>
    </button>
  );
}

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
    <Section id="summer" className="flex items-center justify-center">
      <div className="w-full max-w-md mx-auto">
        <motion.h2
          className="font-[var(--font-noto-serif)] text-2xl text-center text-wedding-text mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          예식 안내
        </motion.h2>

        {/* 예식 정보 카드 - 리퀴드 글래스 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard className="mb-6">
            <div className="text-center space-y-4">
              <div>
                <p className="text-wedding-pink font-medium text-lg">{date}</p>
                <p className="text-wedding-text-muted">{time}</p>
              </div>

              <div className="w-12 h-px bg-wedding-pink/40 mx-auto" />

              <div>
                <p className="font-medium text-wedding-text text-lg">
                  {venueName}
                </p>
                {venueHall && (
                  <p className="text-wedding-text-muted text-sm">{venueHall}</p>
                )}
                <p className="text-wedding-text-muted text-sm mt-1">
                  {venueAddress}
                </p>
                {venuePhone && (
                  <p className="text-wedding-gold text-xs mt-2">
                    Tel. {venuePhone}
                  </p>
                )}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* 버튼들 - 리퀴드 글래스 */}
        <motion.div
          className="flex gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {mapUrl && (
            <GlassButton onClick={handleOpenMap}>지도 보기</GlassButton>
          )}
          <GlassButton onClick={handleCopyAddress}>주소 복사</GlassButton>
        </motion.div>

        {/* 교통 안내 - 리퀴드 글래스 */}
        {transport && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard className="mt-6">
              <div>
                <h3 className="font-medium text-wedding-text mb-4 text-center text-sm">
                  오시는 길
                </h3>
                <div className="space-y-3 text-sm">
                  {transport.subway && (
                    <div className="flex gap-3">
                      <span className="text-wedding-pink font-medium min-w-[50px]">
                        지하철
                      </span>
                      <span className="text-wedding-text-muted">
                        {transport.subway}
                      </span>
                    </div>
                  )}
                  {transport.bus && (
                    <div className="flex gap-3">
                      <span className="text-wedding-pink font-medium min-w-[50px]">
                        버스
                      </span>
                      <span className="text-wedding-text-muted">
                        {transport.bus}
                      </span>
                    </div>
                  )}
                  {transport.car && (
                    <div className="flex gap-3">
                      <span className="text-wedding-pink font-medium min-w-[50px]">
                        자가용
                      </span>
                      <span className="text-wedding-text-muted">
                        {transport.car}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
