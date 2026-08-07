import { memo, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, ChevronDown, Zap, Layers, Database, Shield, Cloud } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import ScrollReveal from '../motion/ScrollReveal'
import AnimatedBackground from '../motion/AnimatedBackground'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '@/hooks/useAnimationPrefs'
import { fadeInUp } from '@/lib/motionVariants'

// Shared transition config - memoized at module level
const FLOAT_Y: { y: number[] } = { y: [0, 8, 0] }
const FLOAT_TRANSITION = {
  duration: 6,
  repeat: Infinity,
  ease: 'easeInOut' as const,
}
const CARD_FLOAT = {
  duration: 5,
  repeat: Infinity,
  ease: 'easeInOut' as const,
}

const HeroSection = memo(function HeroSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { margin: '0px 0px -100px 0px' })
  const reduced = useReducedMotion()
  const isMobile = useIsMobile()
  // Pause decorative infinite animations when off-screen / reduced-motion / mobile
  const animate = inView && !reduced && !isMobile

  const trustItems = [
    { icon: Database, label: t('hero.trustItems.enterprise') },
    { icon: Layers, label: t('hero.trustItems.mobile') },
    { icon: Cloud, label: t('hero.trustItems.cloud') },
    { icon: Shield, label: t('hero.trustItems.design') },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-80px)] pt-20 flex items-center overflow-hidden bg-white"
    >
      <AnimatedBackground variant="light">
        <div />
      </AnimatedBackground>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#dc4d01 1px, transparent 1px), linear-gradient(90deg, #dc4d01 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="flex flex-col max-w-2xl">
            <ScrollReveal delay={0.1}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider bg-primary/5">
                  {t('hero.badge')}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-tight mb-6"
              >
                {t('hero.title')}{' '}
                <span className="text-primary">{t('hero.titleHighlight')}</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
              >
                {t('hero.description')}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <Link to="/contact">
                  <Button size="lg" className="group">
                    {t('hero.ctaPrimary')}
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" size="lg">
                    {t('hero.ctaSecondary')}
                  </Button>
                </Link>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-3 mb-8">
                {trustItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-primary/10 transition-colors cursor-default"
                  >
                    <Check size={16} className="text-primary" aria-hidden="true" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200" aria-hidden="true">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="text-center" />
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT SIDE - Enterprise Dashboard */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <motion.div
                className="relative z-10"
                animate={animate ? FLOAT_Y : { y: 0 }}
                transition={FLOAT_TRANSITION}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary/20 rounded-[32px] blur-2xl opacity-20" aria-hidden="true" />
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-[32px] border border-white/50 shadow-lg p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex space-x-2" aria-hidden="true">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="text-gray-400 text-sm font-medium">{t('hero.dashboard.title')}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <motion.div
                        animate={animate ? { y: [-5, 0, -5] } : { y: 0 }}
                        transition={CARD_FLOAT}
                        className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-5"
                      >
                        <div className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">{t('hero.dashboard.totalProjects')}</div>
                        <div className="text-3xl font-bold text-gray-900">{t('hero.dashboard.totalProjectsValue')}</div>
                        <div className="text-green-500 text-xs mt-2 flex items-center">
                          <Check size={12} className="mr-1" aria-hidden="true" /> {t('hero.dashboard.totalProjectsChange')}
                        </div>
                      </motion.div>

                      <motion.div
                        animate={animate ? { y: [5, 0, 5] } : { y: 0 }}
                        transition={{ ...CARD_FLOAT, delay: 1 }}
                        className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5"
                      >
                        <div className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">{t('hero.dashboard.clientSatisfaction')}</div>
                        <div className="text-3xl font-bold text-gray-900">{t('hero.dashboard.clientSatisfactionValue')}</div>
                        <div className="text-green-500 text-xs mt-2 flex items-center">
                          <Check size={12} className="mr-1" aria-hidden="true" /> {t('hero.dashboard.clientSatisfactionChange')}
                        </div>
                      </motion.div>

                      <motion.div
                        animate={animate ? { y: [-8, 0, -8] } : { y: 0 }}
                        transition={{ ...CARD_FLOAT, duration: 6, delay: 0.5 }}
                        className="col-span-2 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl p-5"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-gray-600 text-xs font-medium mb-1">{t('hero.dashboard.activeClients')}</div>
                            <div className="text-2xl font-bold text-gray-900">{t('hero.dashboard.activeClientsValue')}</div>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center" aria-hidden="true">
                            <Database size={24} className="text-primary" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[75%] rounded-full" />
                          </div>
                          <div className="text-xs text-gray-500">{t('hero.dashboard.activeClientsGrowth')}</div>
                        </div>
                      </motion.div>

                      <motion.div
                        animate={animate ? { y: [6, 0, 6] } : { y: 0 }}
                        transition={{ ...CARD_FLOAT, duration: 7, delay: 0.2 }}
                        className="bg-white rounded-2xl p-5 border border-gray-100"
                      >
                        <div className="text-gray-400 text-xs font-medium mb-3 uppercase tracking-wider">{t('hero.dashboard.recentDeployments')}</div>
                        <div className="space-y-3">
                          {[t('hero.dashboard.deployment1'), t('hero.dashboard.deployment2'), t('hero.dashboard.deployment3'), t('hero.dashboard.deployment4')].map((item, i) => (
                            <div key={i} className="flex items-center space-x-3 text-sm">
                              <div className={`w-2 h-2 rounded-full ${['bg-green-500', 'bg-primary', 'bg-amber-500', 'bg-blue-500'][i]}`} />
                              <span className="text-gray-700">{item}</span>
                              <span className="ml-auto text-gray-400">{t('hero.dashboard.timeAgo')}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div
                        animate={animate ? { y: [-4, 0, -4] } : { y: 0 }}
                        transition={{ ...CARD_FLOAT, duration: 5.5 }}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 text-white"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-gray-400 text-xs font-medium mb-1">{t('hero.dashboard.systemHealth')}</div>
                            <div className="text-xl font-bold">{t('hero.dashboard.systemHealthValue')}</div>
                          </div>
                          <Shield size={24} className="text-green-400" aria-hidden="true" />
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-300" aria-hidden="true">
                          <div className="w-1.5 h-8 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[99.99%] rounded-full" />
                          </div>
                          <div className="flex-1 flex justify-between text-xs">
                            <span>24h</span>
                            <span>7d</span>
                            <span>30d</span>
                            <span>1y</span>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="hidden lg:block absolute -right-5 top-1 w-48 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-primary/10"
                        animate={animate ? { y: [-10, 0, -10] } : { y: 0 }}
                        transition={{ ...CARD_FLOAT, duration: 6, delay: 1.5 }}
                        aria-hidden="true"
                      >
                        <div className="text-xs font-bold text-primary mb-2">{t('hero.dashboard.alertSystem')}</div>
                        <div className="text-sm text-gray-700">
                          <div className="flex items-center justify-between mb-2">
                            <span>{t('hero.dashboard.apiLatency')}</span>
                            <span className="text-green-500 text-xs">{t('hero.dashboard.apiLatencyStatus')}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>{t('hero.dashboard.databaseLoad')}</span>
                            <span className="text-green-500 text-xs">{t('hero.dashboard.databaseLoadStatus')}</span>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="hidden lg:block absolute -left-30 bottom-1/4 w-40 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-gray-200"
                        animate={animate ? { y: [10, 0, 10] } : { y: 0 }}
                        transition={{ ...CARD_FLOAT, duration: 7, delay: 0.8 }}
                        aria-hidden="true"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-xs text-gray-500">{t('hero.dashboard.activeUsers')}</div>
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <Zap size={14} className="text-primary" />
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{t('hero.dashboard.activeUsersValue')}</div>
                        <div className="text-xs text-green-500 mt-1">{t('hero.dashboard.activeUsersChange')}</div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements - transform only, gated */}
              <motion.div
                className="absolute -top-12 -right-12 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-xl pointer-events-none"
                animate={animate ? { scale: [1, 1.15, 1], opacity: [0.3, 0.35, 0.3] } : { scale: 1, opacity: 0.3 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
              />
              <motion.div
                className="absolute -bottom-12 -left-12 w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-100 rounded-full blur-xl pointer-events-none"
                animate={animate ? { scale: [1, 1.2, 1], opacity: [0.2, 0.25, 0.2] } : { scale: 1, opacity: 0.2 }}
                transition={{ duration: 10, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
                aria-hidden="true"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
        animate={animate ? { y: [0, 8, 0] } : { y: 0 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <span className="text-xs text-gray-400 uppercase tracking-widest">{t('hero.scroll')}</span>
        <ChevronDown size={24} className="text-primary" />
      </motion.div>
    </section>
  )
})

export default HeroSection
