import { cn } from '@/lib/cn';

interface TechBadgeProps {
  tech: string;
  className?: string;
}

export function TechBadge({ tech, className }: TechBadgeProps) {
  return (
    <span className={cn(
      'px-2 py-1 text-xs border border-primary/30 text-primary rounded',
      className
    )}>
      {tech}
    </span>
  );
}
