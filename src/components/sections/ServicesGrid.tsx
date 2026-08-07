import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MotionStaggerGroup from '../motion/StaggerGroup';
import MotionStaggerItem from '../motion/StaggerItem';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import { FeatureIcon } from '@/components/shared/FeatureIcon';
import { useTranslation } from 'react-i18next';

export default function ServicesGrid() {
  const { t } = useTranslation();

  const services = [
    {
      icon: 'Code',
      title: t('services.customDevelopment.title'),
      description: t('services.customDevelopment.description'),
    },
    {
      icon: 'Palette',
      title: t('services.uiuxDesign.title'),
      description: t('services.uiuxDesign.description'),
    },
    {
      icon: 'Database',
      title: t('services.database.title'),
      description: t('services.database.description'),
    },
    {
      icon: 'Cloud',
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
    },
    {
      icon: 'Shield',
      title: t('services.security.title'),
      description: t('services.security.description'),
    },
    {
      icon: 'Zap',
      title: t('services.performance.title'),
      description: t('services.performance.description'),
    },
  ];

  return (
    <MotionStaggerGroup staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <MotionStaggerItem key={index}>
          <GlassCard className="h-full flex flex-col group cursor-pointer hover:scale-105">
            <FeatureIcon icon={service.icon} size="md" className="mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
            <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
            <Link to="/services" className="self-start">
              <Button variant="ghost" size="sm" icon={<ArrowRight size={16} aria-hidden="true" />} className="group-hover:text-primary">
                {t('common.learnMore')}
              </Button>
            </Link>
          </GlassCard>
        </MotionStaggerItem>
      ))}
    </MotionStaggerGroup>
  );
}
