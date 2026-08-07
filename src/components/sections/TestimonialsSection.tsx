import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import { useTranslation } from 'react-i18next';
import { slideFade } from '@/lib/motionVariants';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

const visibleDots = 4;

export default function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials: Testimonial[] = [
    {
      quote: t('testimonials.testimonial1.quote'),
      author: t('testimonials.testimonial1.author'),
      role: t('testimonials.testimonial1.role'),
      initials: 'SJ',
    },
    {
      quote: t('testimonials.testimonial2.quote'),
      author: t('testimonials.testimonial2.author'),
      role: t('testimonials.testimonial2.role'),
      initials: 'MC',
    },
    {
      quote: t('testimonials.testimonial3.quote'),
      author: t('testimonials.testimonial3.author'),
      role: t('testimonials.testimonial3.role'),
      initials: 'ER',
    },
    {
      quote: t('testimonials.testimonial4.quote'),
      author: t('testimonials.testimonial4.author'),
      role: t('testimonials.testimonial4.role'),
      initials: 'DK',
    },
    {
      quote: t('testimonials.testimonial5.quote'),
      author: t('testimonials.testimonial5.author'),
      role: t('testimonials.testimonial5.role'),
      initials: 'KJ',
    },

  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [current, isPaused, testimonials.length]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative min-h-[300px] flex items-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            variants={slideFade}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full"
          >
            <GlassCard padding="lg">
              <Quote size={48} className="text-primary mb-6 opacity-20" aria-hidden="true" />
              <p className="text-xl text-gray-800 mb-8 leading-relaxed">{testimonials[current].quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">{testimonials[current].initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonials[current].author}</div>
                  <div className="text-gray-600 text-sm">{testimonials[current].role}</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-5 mt-8">
  <Button
    variant="ghost"
    size="sm"
    onClick={prev}
    aria-label="Previous testimonial"
    className="!w-11 !h-11 !rounded-full !p-0 flex items-center justify-center border border-gray-200 hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-sm"
    icon={<ChevronLeft size={20} />}
  />

  <div
    className="flex items-center gap-2"
    role="group"
    aria-label="Testimonial navigation"
  >
    {Array.from({ length: visibleDots }).map((_, index) => {
      const active = current % visibleDots === index;

      return (
        <button
          key={index}
          onClick={() => {
            const currentGroup = Math.floor(current / visibleDots);
            const target =
              currentGroup * visibleDots + index;

            if (target < testimonials.length) {
              setCurrent(target);
            } else {
              setCurrent(testimonials.length - 1);
            }
          }}
          className={`rounded-full transition-all duration-300 ${
            active
              ? "w-8 h-3 bg-primary shadow-md"
              : "w-3 h-3 bg-gray-300 hover:bg-primary/40"
          }`}
          aria-label={`Go to testimonial ${index + 1}`}
          aria-current={active}
        />
      );
    })}
  </div>

  <Button
    variant="ghost"
    size="sm"
    onClick={next}
    aria-label="Next testimonial"
    className="!w-11 !h-11 !rounded-full !p-0 flex items-center justify-center border border-gray-200 hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-sm"
    icon={<ChevronRight size={20} />}
  />
</div>
    </div>
  );
}
