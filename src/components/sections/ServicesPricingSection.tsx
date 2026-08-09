import { useState } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MotionDiv } from '../ui/MotionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';
import Button from '../ui/Button';
import ScrollReveal from '../motion/ScrollReveal';
import PricingCard from './PricingCard';
import MotionStaggerGroup from '../motion/StaggerGroup';
import MotionStaggerItem from '../motion/StaggerItem';
import { pricingPackages, pricingCategories } from '@/data/pricing';
import { cn } from '@/lib/cn';
import { useTranslation } from 'react-i18next';

export default function ServicesPricingSection() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPackages = activeCategory === 'all'
    ? [...pricingPackages].sort((a, b) => (a.price || 999999999) - (b.price || 999999999))
    : pricingPackages.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-gray-50/50">
      <Container>
        <ScrollReveal>
          <SectionTitle
            label={t('pricing.services.label')}
            title={t('pricing.services.title')}
            subtitle={t('pricing.services.subtitle')}
          />
        </ScrollReveal>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 mb-20"
        >
          <div role="group" aria-label="Filter pricing packages by category" className="flex flex-wrap justify-center gap-3">
            {pricingCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
                aria-label={`Filter by ${t(category.labelKey)}`}
                className={cn(
                  'px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 text-sm',
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                )}
              >
                {t(category.labelKey)}
              </button>
            ))}
          </div>
        </MotionDiv>

        <MotionStaggerGroup
          staggerDelay={0.05}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPackages.map((pkg) => (
            <MotionStaggerItem key={pkg.id}>
              <PricingCard
                nameKey={pkg.nameKey}
                price={pkg.price}
                descriptionKey={pkg.descriptionKey}
                featuresKey={pkg.featuresKey}
                pagesKey={pkg.pagesKey}
                renewalKey={pkg.renewalKey}
                recommended={pkg.recommended}
                ctaKey={pkg.ctaKey}
                ctaAction={pkg.ctaAction}
              />
            </MotionStaggerItem>
          ))}
        </MotionStaggerGroup>

        <div className="mt-24 max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 text-center shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t('pricing.services.cantFind')}
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                {t('pricing.services.customMessage')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="px-8 rounded-full">
                    <MessageSquare className="mr-2" size={20} />
                    {t('pricing.services.discussProject')}
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="px-8 rounded-full" icon={<ArrowRight size={20} />}>
                    {t('pricing.services.getQuote')}
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12 text-center text-xs text-gray-500 space-y-2">
          <p>{t('pricing.services.note1')}</p>
          <p>{t('pricing.services.note2')}</p>
        </div>
      </Container>
    </section>
  );
}

