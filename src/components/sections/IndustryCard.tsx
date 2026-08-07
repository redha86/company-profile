import { FeatureIcon } from '../shared/FeatureIcon';
import GlassCard from '../ui/GlassCard';
import type { Industry } from '@/types';

interface IndustryCardProps {
  industry: Industry;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <GlassCard
      className="h-full hover:-translate-y-2"
    >
      <FeatureIcon icon={industry.icon} size="md" className="mb-6" />
      
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {industry.title}
      </h3>
      
      <p className="text-gray-600 mb-6">
        {industry.description}
      </p>
      
      <ul className="space-y-3">
        {industry.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" aria-hidden="true" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
