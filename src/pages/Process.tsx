import { MotionMain, MotionDiv } from '../components/ui/MotionWrapper'
import { Link } from 'react-router-dom'
import { Search, ClipboardList, Palette, Code, ShieldCheck, Rocket, HeartHandshake, ChevronRight } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollProgress from '../components/layout/ScrollProgress'
import BackToTop from '../components/layout/BackToTop'
import LoadingScreen from '../components/layout/LoadingScreen'
import GlassCard from '../components/ui/GlassCard'
import SectionTitle from '../components/ui/SectionTitle'
import ScrollReveal from '../components/motion/ScrollReveal'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'

const Process = () => {
  const { t } = useTranslation()

  const steps = [
    {
      icon: Search,
      number: '01',
      phase: t('processPage.steps.discovery.phase'),
      duration: t('processPage.steps.discovery.duration'),
      description: t('processPage.steps.discovery.description'),
      details: t('processPage.steps.discovery.details'),
    },
    {
      icon: ClipboardList,
      number: '02',
      phase: t('processPage.steps.planning.phase'),
      duration: t('processPage.steps.planning.duration'),
      description: t('processPage.steps.planning.description'),
      details: t('processPage.steps.planning.details'),
    },
    {
      icon: Palette,
      number: '03',
      phase: t('processPage.steps.uiux.phase'),
      duration: t('processPage.steps.uiux.duration'),
      description: t('processPage.steps.uiux.description'),
      details: t('processPage.steps.uiux.details'),
    },
    {
      icon: Code,
      number: '04',
      phase: t('processPage.steps.development.phase'),
      duration: t('processPage.steps.development.duration'),
      description: t('processPage.steps.development.description'),
      details: t('processPage.steps.development.details'),
    },
    {
      icon: ShieldCheck,
      number: '05',
      phase: t('processPage.steps.testing.phase'),
      duration: t('processPage.steps.testing.duration'),
      description: t('processPage.steps.testing.description'),
      details: t('processPage.steps.testing.details'),
    },
    {
      icon: Rocket,
      number: '06',
      phase: t('processPage.steps.deployment.phase'),
      duration: t('processPage.steps.deployment.duration'),
      description: t('processPage.steps.deployment.description'),
      details: t('processPage.steps.deployment.details'),
    },
    {
      icon: HeartHandshake,
      number: '07',
      phase: t('processPage.steps.support.phase'),
      duration: t('processPage.steps.support.duration'),
      description: t('processPage.steps.support.description'),
      details: t('processPage.steps.support.details'),
    },
  ]

  return (
    <>
      <SEO
        title={t('seo.process.title')}
        description={t('seo.process.description')}
        keywords={t('seo.process.keywords')}
        canonicalPath="/process"
        breadcrumbs={[
          { name: t('navbar.process'), url: '/process' },
        ]}
      />
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />

      <MotionMain
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary-light via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <nav aria-label="Breadcrumb" className="inline-flex items-center space-x-2 text-sm text-gray-600 mb-6">
                <Link to="/" className="hover:text-primary transition-colors">{t('common.home')}</Link>
                <ChevronRight size={16} aria-hidden="true" />
                <span className="text-primary">{t('navbar.process')}</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                {t('processPage.hero.title')} <span className="gradient-text">{t('processPage.hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('processPage.hero.description')}
              </p>
            </MotionDiv>
          </div>
        </section>

        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute left-1/2 top-60 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary hidden lg:block" />

          <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
            <SectionTitle
              title={t('processPage.section.title')}
              subtitle={t('processPage.section.subtitle')}
            />

            <div className="space-y-16 mt-16">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isEven = index % 2 === 0

                return (
                  <ScrollReveal key={index} delay={0.2}>
                    <div className="relative">
                      <div className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                        <div className={`hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10`}>
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                            <span className="text-white font-display font-bold text-xl">{step.number}</span>
                          </div>
                        </div>

                        <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                          <GlassCard padding="lg" className="hover:-translate-y-1">
                            <div className="flex items-center space-x-3 mb-4 lg:hidden">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center" aria-hidden="true">
                                <span className="text-white font-display font-bold">{step.number}</span>
                              </div>
                              <div>
                                <p className="text-sm text-primary font-semibold">{step.duration}</p>
                              </div>
                            </div>

                            <div className="hidden lg:flex items-center justify-between mb-4">
                              <p className="text-sm text-primary font-semibold">{step.duration}</p>
                            </div>

                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4" aria-hidden="true">
                              <Icon className="text-white" size={28} />
                            </div>

                            <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                              {step.phase}
                            </h3>

                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {step.description}
                            </p>

                            <p className="text-sm text-gray-500">
                              {step.details}
                            </p>
                          </GlassCard>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <SectionTitle
              title={t('processPage.cta.title')}
              subtitle={t('processPage.cta.subtitle')}
            />
            <Link to="/contact">
              <button
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                {t('processPage.cta.button')}
              </button>
            </Link>
          </div>
        </section>
      </MotionMain>

      <Footer />
      <BackToTop />
    </>
  )
}

export default Process