import { cn } from '@/lib/cn';

interface DividerProps {
  gradient?: boolean;
  className?: string;
}

const Divider = ({ gradient = false, className }: DividerProps) => {
  return (
    <div
      className={cn(
        'h-px',
        gradient
          ? 'bg-gradient-to-r from-transparent via-primary/20 to-transparent'
          : 'bg-gray-200',
        className
      )}
    />
  );
};

export default Divider;
