import ScrollReveal from '../motion/ScrollReveal';
import StaggerGroup from '../motion/StaggerGroup';
import StaggerItem from '../motion/StaggerItem';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import { FeatureIcon } from '../shared/FeatureIcon';
import type { Benefit } from '@/types';

interface BenefitsGridProps {
  benefits: Benefit[];
  title?: string;
  subtitle?: string;
}

export function BenefitsGrid({ benefits, title = 'Benefits & Perks', subtitle }: BenefitsGridProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="Why Join Us"
            title={title}
            subtitle={subtitle}
          />
        </ScrollReveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <GlassCard className="h-full hover:-translate-y-2">
                <FeatureIcon icon={benefit.icon} size="md" className="mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}