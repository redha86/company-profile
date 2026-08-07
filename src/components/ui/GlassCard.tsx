import { ReactNode, memo } from 'react';
import { cn } from '@/lib/cn';

interface GlassCardProps {
  variant?: 'light' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

const GlassCard = memo(function GlassCard({
  variant = 'light',
  padding = 'md',
  children,
  className,
}: GlassCardProps) {
  const variantClasses = {
    light: 'glass hover:shadow-md hover:shadow-primary/5',
    dark: 'glass-dark hover:shadow-md hover:shadow-primary/10',
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'rounded-2xl transition-transform duration-300 will-change-transform',
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
});

export default GlassCard;
