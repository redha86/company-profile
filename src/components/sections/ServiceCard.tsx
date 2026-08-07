import { Check } from 'lucide-react';
import MotionScrollReveal from '../motion/ScrollReveal';
import GlassCard from '../ui/GlassCard';
import { FeatureIcon } from '@/components/shared/FeatureIcon';

interface ServiceCardProps {
  icon: string;
  title: string;
  longDescription: string;
  features: string[];
}

export default function ServiceCard({ icon, title, longDescription, features }: ServiceCardProps) {
  return (
    <MotionScrollReveal direction="up">
      <GlassCard padding="lg" className="h-full">
        <FeatureIcon icon={icon} size="lg" className="mb-6" />
        <h3 className="text-3xl font-bold mb-4 text-gray-900">{title}</h3>
        <p className="text-lg text-gray-600 mb-8">{longDescription}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                <Check size={14} className="text-white" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </MotionScrollReveal>
  );
}
