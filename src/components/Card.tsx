'use client';

import React, { useRef, useState } from 'react';
import { animate } from 'animejs';

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const handleFlip = async () => {
    if (isAnimating.current || !cardRef.current) return;

    isAnimating.current = true;
    const nextIsFlipped = !isFlipped;

    try {
      await animate(cardRef.current, {
        rotateY: nextIsFlipped ? 180 : 0,
        duration: 700,
        ease: 'inOutCubic',
      });
    } catch (error) {
      console.error('Animation failed', error);
    } finally {
      isAnimating.current = false;
      setIsFlipped(nextIsFlipped);
    }
  };

  return (
    <div className="perspective-1000 h-96 w-64 cursor-pointer" onClick={handleFlip}>
      <div
        ref={cardRef}
        className="transform-style-3d relative h-full w-full"
        style={{ transformOrigin: 'center center' }}
      >
        {/* Front */}
        <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white shadow-xl backface-hidden">
          <div className="mb-4 text-6xl">✨</div>
          <h2 className="text-2xl font-bold">Front Side</h2>
          <p className="mt-2 text-center text-blue-100">Click to flip the card</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex h-full w-full rotate-y-180 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-6 text-white shadow-xl backface-hidden">
          <div className="mb-4 text-6xl">🚀</div>
          <h2 className="text-2xl font-bold">Back Side</h2>
          <p className="mt-2 text-center text-purple-100">Now you see the back</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
