import { Target, TrendingUp, Code, Handshake } from 'lucide-react';
import MotionStaggerGroup from '../motion/StaggerGroup';
import MotionStaggerItem from '../motion/StaggerItem';
import GlassCard from '../ui/GlassCard';
import { useTranslation } from 'react-i18next';

export default function WhyOrren() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Target,
      title: t('whyOrren.businessFirst.title'),
      description: t('whyOrren.businessFirst.description'),
    },
    {
      icon: TrendingUp,
      title: t('whyOrren.scalable.title'),
      description: t('whyOrren.scalable.description'),
    },
    {
      icon: Code,
      title: t('whyOrren.custom.title'),
      description: t('whyOrren.custom.description'),
    },
    {
      icon: Handshake,
      title: t('whyOrren.partnership.title'),
      description: t('whyOrren.partnership.description'),
    },
  ];

  return (
    <MotionStaggerGroup staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <MotionStaggerItem key={index}>
            <GlassCard className="h-full hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4" aria-hidden="true">
                <Icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </GlassCard>
          </MotionStaggerItem>
        );
      })}
    </MotionStaggerGroup>
  );
}
