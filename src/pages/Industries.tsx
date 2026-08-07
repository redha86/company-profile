import { MotionMain, MotionDiv } from '../components/ui/MotionWrapper'
import { Link } from 'react-router-dom'
import { BookOpen, Factory, HeartPulse, Truck, ShoppingBag, Building2, Rocket, ChevronRight } from 'lucide-react'
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

const Industries = () => {
  const { t } = useTranslation()

  const industries = [
    {
      icon: BookOpen,
      title: t('industriesPage.industries.education.title'),
      description: t('industriesPage.industries.education.description'),
      features: t('industriesPage.industries.education.features', { returnObjects: true }),
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: Factory,
      title: t('industriesPage.industries.manufacturing.title'),
      description: t('industriesPage.industries.manufacturing.description'),
      features: t('industriesPage.industries.manufacturing.features', { returnObjects: true }),
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: HeartPulse,
      title: t('industriesPage.industries.healthcare.title'),
      description: t('industriesPage.industries.healthcare.description'),
      features: t('industriesPage.industries.healthcare.features', { returnObjects: true }),
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: Truck,
      title: t('industriesPage.industries.logistics.title'),
      description: t('industriesPage.industries.logistics.description'),
      features: t('industriesPage.industries.logistics.features', { returnObjects: true }),
      gradient: 'from-teal-400 to-cyan-500',
    },
    {
      icon: ShoppingBag,
      title: t('industriesPage.industries.retail.title'),
      description: t('industriesPage.industries.retail.description'),
      features: t('industriesPage.industries.retail.features', { returnObjects: true }),
      gradient: 'from-pink-400 to-rose-500',
    },
    {
      icon: Building2,
      title: t('industriesPage.industries.corporate.title'),
      description: t('industriesPage.industries.corporate.description'),
      features: t('industriesPage.industries.corporate.features', { returnObjects: true }),
      gradient: 'from-gray-600 to-gray-800',
    },
    {
      icon: Rocket,
      title: t('industriesPage.industries.startup.title'),
      description: t('industriesPage.industries.startup.description'),
      features: t('industriesPage.industries.startup.features', { returnObjects: true }),
      gradient: 'from-purple-400 to-violet-500',
    },
  ]

  return (
    <>
      <SEO
        title={t('seo.industries.title')}
        description={t('seo.industries.description')}
        keywords={t('seo.industries.keywords')}
        canonicalPath="/industries"
        breadcrumbs={[
          { name: t('navbar.industries'), url: '/industries' },
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
                <span className="text-primary">{t('navbar.industries')}</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                {t('industriesPage.hero.title')} <span className="gradient-text">{t('industriesPage.hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('industriesPage.hero.description')}
              </p>
            </MotionDiv>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle
              title={t('industriesPage.industrySection.title')}
              subtitle={t('industriesPage.industrySection.subtitle')}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon
                return (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <GlassCard
                      className="h-full group hover:-translate-y-2"
                      padding="lg"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                        <Icon className="text-white" size={32} />
                      </div>
                      
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                        {industry.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {industry.description}
                      </p>

                      <ul className="space-y-3">
                        {(industry.features as string[]).map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 bg-gradient-to-r ${industry.gradient}`} aria-hidden="true" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
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
                {t('industriesPage.cta.title')}
              </h2>
              <p className="text-xl text-white/90 mb-8">
                {t('industriesPage.cta.description')}
              </p>
              <Link to="/contact">
                <button
                  className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                >
                  {t('industriesPage.cta.button')}
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

export default Industries