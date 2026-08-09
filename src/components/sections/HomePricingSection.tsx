import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';
import Button from '../ui/Button';
import ScrollReveal from '../motion/ScrollReveal';
import PricingCard from './PricingCard';
import MotionStaggerGroup from '../motion/StaggerGroup';
import MotionStaggerItem from '../motion/StaggerItem';
import { pricingPackages } from '@/data/pricing';
import { useTranslation } from 'react-i18next';

export default function HomePricingSection() {
  const { t } = useTranslation();
  
  // Get the cheapest package from each unique category
  const categories = Array.from(new Set(pricingPackages.map(p => p.category)));
  const homePackages = categories.map(cat => {
    const catPackages = pricingPackages.filter(p => p.category === cat);
    // Find cheapest (null price is considered expensive for this purpose)
    return catPackages.reduce((prev, curr) => {
      if (prev.price === null) return curr;
      if (curr.price === null) return prev;
      return prev.price < curr.price ? prev : curr;
    });
  });

  return (
    <section className="py-24 bg-gradient-to-br from-white via-primary-light/10 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <Container>
        <ScrollReveal>
          <SectionTitle
            label={t('pricing.home.label')}
            title={t('pricing.home.title')}
            subtitle={t('pricing.home.subtitle')}
          />
        </ScrollReveal>

        <MotionStaggerGroup
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
        >
          {homePackages.map((pkg) => (
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

        <div className="mt-20 text-center">
          <ScrollReveal>
            <Link to="/services">
              <Button size="lg" className="px-10 h-14 rounded-full shadow-xl shadow-primary/20" icon={<ArrowRight size={20} />}>
                {t('pricing.home.viewAll')}
              </Button>
            </Link>
          </ScrollReveal>
        </div>

        <div className="mt-12 text-center text-xs text-gray-500 max-w-2xl mx-auto">
          <p>{t('pricing.home.note')}</p>
        </div>
      </Container>
    </section>
  );
}

