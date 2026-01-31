'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { type Season } from '@/types/wedding';

interface NavigationDotsProps {
  sections: { id: string; season: Season }[];
  className?: string;
}

const seasonColors: Record<Season, string> = {
  spring: 'bg-spring-primary',
  summer: 'bg-summer-primary',
  autumn: 'bg-autumn-primary',
  winter: 'bg-winter-primary',
};

export function NavigationDots({ sections, className = '' }: NavigationDotsProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 ${className}`}
      aria-label="섹션 네비게이션"
    >
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`
            w-3 h-3 rounded-full transition-all duration-300
            ${index === activeSection ? seasonColors[section.season] : 'bg-gray-300'}
          `}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`${section.id} 섹션으로 이동`}
          aria-current={index === activeSection ? 'true' : 'false'}
        />
      ))}
    </nav>
  );
}
