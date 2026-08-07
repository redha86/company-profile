import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface ContainerProps {
  size?: 'md' | 'lg' | 'xl';
  children: ReactNode;
  className?: string;
}

const Container = ({ size = 'xl', children, className }: ContainerProps) => {
  const sizeClasses = {
    md: 'max-w-[640px]',
    lg: 'max-w-[1024px]',
    xl: 'max-w-[1280px]',
  };

  return (
    <div className={cn('mx-auto px-6 lg:px-8', sizeClasses[size], className)}>
      {children}
    </div>
  );
};

export default Container;
