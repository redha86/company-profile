import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { FeatureIcon } from '../shared/FeatureIcon';
import type { ProcessStep } from '@/types';

interface ProcessStepProps {
  step: ProcessStep;
  index: number;
  isLast?: boolean;
}

export function ProcessStep({ step, index, isLast }: ProcessStepProps) {
  const offset = index % 2 === 0 ? -40 : 40;
  return (
    <motion.div
      className="relative flex gap-6"
      initial={{ opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
    >
      <div className="relative flex-shrink-0 w-full md:w-[100px] lg:w-[120px]">
        <div className="relative flex flex-col items-center">
          <div className={cn(
            'flex items-center justify-center rounded-full border-2 border-primary bg-white z-10 text-primary font-bold text-lg',
            'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24'
          )}>
            {step.number}
          </div>
          {!isLast && (
            <div className="absolute left-1/2 top-[100px] w-1 h-full -translate-x-1/2 bg-gradient-to-b from-primary to-accent" />
          )}
        </div>
      </div>

      <div className="flex-1 pt-4 md:pt-0">
        <FeatureIcon icon={step.icon || 'Target'} size="md" className="mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.phase}</h3>
        <p className="text-primary font-semibold mb-3">{step.duration}</p>
        <p className="text-gray-600 text-lg mb-4">{step.description}</p>
        <p className="text-gray-500">{step.details}</p>
      </div>
    </motion.div>
  );
}
