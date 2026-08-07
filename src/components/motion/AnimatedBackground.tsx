import { memo, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

type Variant = 'light' | 'dark';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  variant?: Variant;
}

const AnimatedBackground = memo(function AnimatedBackground({
  children,
  variant = 'light',
}: AnimatedBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '200px' });
  const reduced = useReducedMotion();
  const animate = inView && !reduced;

  const gradients = {
    light: 'bg-gradient-to-br from-[#FFEDD5] via-white to-[#FFF8E1]',
    dark: 'bg-gradient-to-br from-[#F97316] to-gray-900',
  };

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${gradients[variant]}`} />

        <div
          className="absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />

        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#DC4D01] to-[#F97316] opacity-20 blur-3xl"
          animate={animate ? { scale: [1, 1.2, 1] } : { scale: 1 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        />

        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#F97316] to-[#DC4D01] opacity-20 blur-3xl"
          animate={animate ? { scale: [1.2, 1, 1.2] } : { scale: 1.1 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
});

export default AnimatedBackground;
