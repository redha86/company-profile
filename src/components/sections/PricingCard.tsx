import { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../ui/Button';
import ScrollReveal from '../motion/ScrollReveal';
import GlassCard from '../ui/GlassCard';
import { cn } from '@/lib/cn';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

interface PricingCardProps {
  nameKey: string;
  price: number | null;
  descriptionKey: string;
  featuresKey: string;
  pagesKey?: string;
  renewalKey?: string;
  recommended?: boolean;
  ctaKey: string;
  ctaAction?: 'contact' | 'quote';
}

export default function PricingCard({
  nameKey,
  price,
  descriptionKey,
  featuresKey,
  pagesKey,
  renewalKey,
  recommended = false,
  ctaKey,
}: PricingCardProps) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const route = '/contact';

  const features = t(featuresKey, { returnObjects: true }) as string[];
  const visibleFeatures = isExpanded ? features : features.slice(0, 5);

  const formatPrice = (p: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(p).replace('IDR', 'Rp');
  };

  return (
    <ScrollReveal delay={0.1}>
      <GlassCard
        padding="lg"
        className={cn(
          'h-full flex flex-col relative overflow-hidden transition-all duration-500 border border-white/20',
          recommended ? 'ring-2 ring-primary/40 shadow-xl shadow-primary/10 bg-white/40' : 'bg-white/30'
        )}
      >
        {recommended && (
          <div className="absolute top-0 right-0">
            <div className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              {t('pricing.common.recommended')}
            </div>
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t(nameKey)}</h3>
          <div className="flex items-baseline gap-1 mb-4">
            {price !== null ? (
              <>
                <span className="text-3xl font-bold text-primary tracking-tight">{formatPrice(price)}</span>
              </>
            ) : (
              <span className="text-2xl font-bold text-primary tracking-tight">{t('pricing.common.customPricing')}</span>
            )}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed min-h-[3rem]">{t(descriptionKey)}</p>
        </div>

        <div className="space-y-6 mb-8 flex-1">
          {pagesKey && (
            <div className="pb-4 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{t('pricing.common.pages')}</p>
              <p className="text-sm text-gray-700 font-medium">{t(pagesKey)}</p>
            </div>
          )}

          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              {t('pricing.common.startingFrom')}
            </p>
            <ul className="space-y-3">
              <AnimatePresence initial={false}>
                {visibleFeatures.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            {features.length > 5 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp size={14} />
                    {t('pricing.common.hideDetails')}
                  </>
                ) : (
                  <>
                    <ChevronDown size={14} />
                    {t('pricing.common.showDetails')}
                  </>
                )}
              </button>
            )}
          </div>

          {renewalKey && (
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t('pricing.common.renewal')}</p>
              <p className="text-sm text-gray-900 font-bold">{t(renewalKey)}</p>
            </div>
          )}
        </div>

        <Link to={route} className="w-full mt-auto pt-4">
          <Button
            variant={recommended ? 'primary' : 'outline'}
            fullWidth
            className={cn(
              "group py-4",
              !recommended && "bg-white/50 border-gray-200 text-gray-700 hover:border-primary hover:text-primary"
            )}
          >
            {t(ctaKey)}
          </Button>
        </Link>
      </GlassCard>
    </ScrollReveal>
  );
}

