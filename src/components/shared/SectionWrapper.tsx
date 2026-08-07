import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionWrapperProps {
  children: ReactNode;
  variant?: 'light' | 'gray' | 'dark';
  className?: string;
}

export function SectionWrapper({ children, variant = 'light', className }: SectionWrapperProps) {
  const variants = {
    light: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gradient-to-br from-[#F97316] via-[#DC4D01] to-[#F97316]'
  };

  return (
    <section className={cn('py-24', variants[variant], className)}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
