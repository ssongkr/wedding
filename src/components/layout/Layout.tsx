import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <main className={cn("min-h-screen w-full bg-stone-50 text-stone-900 transition-colors duration-700", className)}>
      <div className="mx-auto max-w-[480px] w-full min-h-screen shadow-2xl bg-white relative overflow-hidden">
        {children}
      </div>
    </main>
  );
}
