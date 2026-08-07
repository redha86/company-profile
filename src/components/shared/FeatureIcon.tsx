import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';
import * as Icons from 'lucide-react';

interface FeatureIconProps {
  icon: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function FeatureIcon({ icon, size = 'md', className }: FeatureIconProps) {
  const Icon = (Icons as any)[icon] as LucideIcon;
  
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-14 h-14',
    lg: 'w-16 h-16'
  };

  const iconSizes = {
    sm: 20,
    md: 28,
    lg: 32
  };

  if (!Icon) return null;

  return (
    <div className={cn(
      'rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center',
      sizes[size],
      className
    )}>
      <Icon className="text-white" size={iconSizes[size]} />
    </div>
  );
}
