import { memo, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { staggerContainer } from '@/lib/motionVariants';

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

const VIEWPORT = { once: true, margin: '-100px' as const };

const StaggerGroup = memo(function StaggerGroup({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, VIEWPORT);
  const reduced = useReducedMotion();

  if (reduced) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer(staggerDelay, 0.1)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
});

export default StaggerGroup;
