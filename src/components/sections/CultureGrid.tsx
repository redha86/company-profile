import ScrollReveal from '../motion/ScrollReveal';
import StaggerGroup from '../motion/StaggerGroup';
import StaggerItem from '../motion/StaggerItem';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import { FeatureIcon } from '../shared/FeatureIcon';
import type { CoreValue } from '@/types';

interface CultureGridProps {
  values: CoreValue[];
  title?: string;
  subtitle?: string;
}

export function CultureGrid({ values, title = 'Our Culture', subtitle }: CultureGridProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="Our Values"
            title={title}
            subtitle={subtitle}
          />
        </ScrollReveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <GlassCard className="text-center hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <FeatureIcon icon={value.icon} size="md" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}