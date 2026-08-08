import { memo, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroBg from '@/assets/images/bg-hero.png'
import Button from '../ui/Button'
import ScrollReveal from '../motion/ScrollReveal'
import { useTranslation } from 'react-i18next'
import { fadeInUp } from '@/lib/motionVariants'

const HeroSection = memo(function HeroSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { margin: '0px 0px -100px 0px' })
  const reduced = useReducedMotion()
  const animate = inView && !reduced

  const trustItems = [
    { label: t('hero.trustItems.enterprise') },
    { label: t('hero.trustItems.mobile') },
    { label: t('hero.trustItems.cloud') },
    { label: t('hero.trustItems.design') },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      aria-label={t('hero.ariaLabel')}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Dark Overlay */}
        <div
          className="absolute inset-0 bg-[rgba(5,8,18,0.55)] backdrop-blur-[1px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-32">
        <ScrollReveal delay={0.1} direction="up">
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-primary/40 text-primary text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-primary/10 to-accent/5 backdrop-blur-sm">
              ✨ {t('hero.badge')}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 tracking-tight"
          >
            {t('hero.title')}{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              {t('hero.titleHighlight')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link to="/contact" className="inline-block">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/40 hover:scale-105 text-white font-semibold rounded-full"
              >
                {t('hero.ctaPrimary')}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
            <Link to="/portfolio" className="inline-block">
              <Button
                variant="outline"
                size="lg"
                className="border border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold rounded-full backdrop-blur-sm"
              >
                {t('hero.ctaSecondary')}
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="pt-8 border-t border-white/[0.1]"
          >
            <div className="flex flex-wrap gap-3">
              {trustItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <Check size={14} className="text-primary flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-gray-200 font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 z-20"
        animate={animate ? { y: [0, 8, 0] } : { y: 0 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">{t('hero.scroll')}</span>
        <ChevronDown size={24} className="text-primary animate-pulse" />
      </motion.div>
    </section>
  )
})

export default HeroSection