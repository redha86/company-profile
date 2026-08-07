import { motion } from 'framer-motion';
import StaggerGroup from '../motion/StaggerGroup';
import StaggerItem from '../motion/StaggerItem';
import ScrollReveal from '../motion/ScrollReveal';
import { Code, Layers, Cloud, ShieldCheck } from '@/lib/icons';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const StatsSection = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const valueProps = [
    {
      icon: Code,
      title: '100%',
      subtitle: t('valueProps.customDev.subtitle', 'Custom Software Development'),
      description: t('valueProps.customDev.description', 'Every solution is designed specifically for your business.'),
    },
    {
      icon: Layers,
      title: 'Agile',
      subtitle: t('valueProps.agile.subtitle', 'Sprint-Based Workflow'),
      description: t('valueProps.agile.description', 'Fast iteration and transparent development process.'),
    },
    {
      icon: Cloud,
      title: 'Cloud',
      subtitle: t('valueProps.cloud.subtitle', 'Deployment Ready'),
      description: t('valueProps.cloud.description', 'Applications prepared for modern cloud infrastructure.'),
    },
    {
      icon: ShieldCheck,
      title: '24/7',
      subtitle: t('valueProps.support.subtitle', 'Technical Support'),
      description: t('valueProps.support.description', 'Continuous support and maintenance after deployment.'),
    },
  ];

  return (
    <section className="py-24 bg-[#F97316] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <StaggerGroup staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredIndex === index;
              
              return (
                <StaggerItem key={index}>
                  <ScrollReveal delay={index * 0.1}>
                    <motion.div
                      className="relative h-full p-8 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 cursor-pointer"
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      whileHover={{ 
                        y: -8,
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <motion.div
                        className="mb-6"
                        animate={{ rotate: isHovered ? 5 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-12 h-12 text-white" />
                      </motion.div>
                      
                      <motion.h3
                        className="text-4xl md:text-5xl font-bold text-white mb-3"
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.title}
                      </motion.h3>
                      
                      <h4 className="text-lg font-semibold text-white/90 mb-3">
                        {item.subtitle}
                      </h4>
                      
                      <p className="text-sm text-white/80 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </ScrollReveal>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
};

export default StatsSection;
