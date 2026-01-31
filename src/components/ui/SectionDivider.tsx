'use client';

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`flex justify-center py-8 ${className}`}>
      <div className="h-12 w-px bg-gradient-to-b from-wedding-pink/60 via-wedding-pink/30 to-transparent" />
    </div>
  );
}
