import { memo, useRef } from 'react';
import { motion, useInView, useReducedMotion, HTMLMotionProps } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right';

interface ScrollRevealProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

const directionOffsets = {
  up: { y: 20 },
  down: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
};

/** Shared viewport config - once, no repeat observers. */
const VIEWPORT = { once: true, margin: '-50px' as const, amount: 0.3 as const };

const ScrollReveal = memo(function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, VIEWPORT);
  const reduced = useReducedMotion();

  // Pause animation when off-screen OR user prefers reduced motion.
  if (reduced) return <div ref={ref} className={className}>{children}</div>;

  const offset = directionOffsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...offset }
      }
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
});

export default ScrollReveal;
