import { memo, useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label?: string;
  delay?: number;
}

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

const AnimatedCounter = memo(function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2,
  label,
  delay = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now() + delay * 1000;

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const t = Math.min(Math.max(elapsed / duration, 0), 1);
      setValue(Math.round(easeOutQuart(t) * end));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration, delay]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-5xl md:text-6xl font-display font-bold text-white">
        <span className="bg-gradient-to-r from-[#DC4D01] to-[#F97316] text-white bg-clip-text text-transparent">
          {prefix}
          {value}
          {suffix}
        </span>
      </div>
      {label && (
        <p className="text-gray-300 text-sm uppercase tracking-wider mt-2">
          {label}
        </p>
      )}
    </div>
  );
});

export default AnimatedCounter;
