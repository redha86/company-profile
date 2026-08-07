import { memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { fadeInUp } from '@/lib/motionVariants';

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle = memo(function SectionTitle({
  label,
  title,
  subtitle,
  light = false,
  align = 'center',
  className,
}: SectionTitleProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right',
  };

  return (
    <motion.div
      className={cn(alignClasses[align], className)}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {label && (
        <span className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full px-4 py-1.5 mb-4">
          {label}
        </span>
      )}
      <h2 className={cn(
        'text-4xl md:text-5xl font-display font-bold mb-4',
        light ? 'text-white' : 'text-gray-900'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg max-w-2xl',
          align === 'center' && 'mx-auto',
          light ? 'text-white/80' : 'text-gray-600'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
});

export default SectionTitle;
