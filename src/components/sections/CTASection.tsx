import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import ScrollReveal from '../motion/ScrollReveal';
import AnimatedBackground from '../motion/AnimatedBackground';
import { useTranslation } from 'react-i18next';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#DC4D01] via-[#DC4D01] to-[#F97316]">
        <AnimatedBackground variant="dark">
          <div />
        </AnimatedBackground>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  <MessageSquare className="mr-2" size={20} aria-hidden="true" />
                  {t('cta.primary')}
                </Button>
              </Link>
              <Link to="/services">
                <Button className='text-white border-white' variant="outline" size="lg">
                  {t('cta.secondary')}
                  <ArrowRight className="ml-2" size={20} aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
    </section>
  );
};

export default CTASection;
