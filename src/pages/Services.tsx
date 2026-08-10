import { MotionMain, MotionDiv } from '../components/ui/MotionWrapper'
import { Link } from 'react-router-dom'
import { Globe, Smartphone, Palette, Monitor, GitMerge, Wrench, ChevronRight, Check } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollProgress from '../components/layout/ScrollProgress'
import BackToTop from '../components/layout/BackToTop'
import LoadingScreen from '../components/layout/LoadingScreen'
import GlassCard from '../components/ui/GlassCard'
import ScrollReveal from '../components/motion/ScrollReveal'
import SEO from '../components/SEO'
import ServicesPricingSection from '../components/sections/ServicesPricingSection'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation()

  const services = [
    {
      icon: Globe,
      title: t('servicesPage.items.web.title'),
      longDescription: t('servicesPage.items.web.longDescription'),
      features: t('servicesPage.items.web.features', { returnObjects: true }),
    },
    {
      icon: Smartphone,
      title: t('servicesPage.items.mobile.title'),
      longDescription: t('servicesPage.items.mobile.longDescription'),
      features: t('servicesPage.items.mobile.features', { returnObjects: true }),
    },
    {
      icon: Palette,
      title: t('servicesPage.items.uiux.title'),
      longDescription: t('servicesPage.items.uiux.longDescription'),
      features: t('servicesPage.items.uiux.features', { returnObjects: true }),
    },
    {
      icon: Monitor,
      title: t('servicesPage.items.website.title'),
      longDescription: t('servicesPage.items.website.longDescription'),
      features: t('servicesPage.items.website.features', { returnObjects: true }),
    },
    {
      icon: GitMerge,
      title: t('servicesPage.items.integration.title'),
      longDescription: t('servicesPage.items.integration.longDescription'),
      features: t('servicesPage.items.integration.features', { returnObjects: true }),
    },
    {
      icon: Wrench,
      title: t('servicesPage.items.maintenance.title'),
      longDescription: t('servicesPage.items.maintenance.longDescription'),
      features: t('servicesPage.items.maintenance.features', { returnObjects: true }),
    },
  ]

  return (
    <>
      <SEO
        title={t('seo.services.title')}
        description={t('seo.services.description')}
        keywords={t('seo.services.keywords')}
        canonicalPath="/services"
        breadcrumbs={[
          { name: t('navbar.services'), url: '/services' },
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
                <span className="text-primary">{t('navbar.services')}</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                {t('servicesPage.hero.title')} <span className="gradient-text">{t('servicesPage.hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('servicesPage.hero.description')}
              </p>
            </MotionDiv>
          </div>
        </section>
        <ServicesPricingSection />

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-32">
              {services.map((service, index) => {
                const Icon = service.icon
                const isEven = index % 2 === 0

                return (
                  
                  <ScrollReveal key={index} delay={0.2}>
                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                      <div className={isEven ? '' : 'lg:col-start-2'}>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6" aria-hidden="true">
                          <Icon className="text-white" size={32} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                          {service.title}
                        </h2>
                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                          {service.longDescription}
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {(service.features as string[]).map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Check className="text-primary flex-shrink-0 mt-1" size={18} aria-hidden="true" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                        <GlassCard padding="lg">
                          <div className="aspect-square bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-2xl flex items-center justify-center relative overflow-hidden" aria-hidden="true">
                            <div className="absolute inset-0 opacity-20">
                              <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                                backgroundSize: '30px 30px',
                              }} />
                            </div>
                            <Icon className="text-primary relative z-10" size={120} strokeWidth={1} />
                          </div>
                        </GlassCard>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>
        

        <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-accent relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                {t('servicesPage.cta.title')}
              </h2>
              <p className="text-xl text-white/90 mb-8">
                {t('servicesPage.cta.description')}
              </p>
              <Link to="/contact">
                <button
                  className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                >
                  {t('servicesPage.cta.button')}
                </button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        
      </MotionMain>

      <Footer />
      <BackToTop />
    </>
  )
}

export default Services