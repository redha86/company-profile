import { lazy, Suspense } from 'react'
import { MotionMain } from '../components/ui/MotionWrapper'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollProgress from '../components/layout/ScrollProgress'
import BackToTop from '../components/layout/BackToTop'
import LoadingScreen from '../components/layout/LoadingScreen'
import HeroSection from '../components/sections/HeroSection'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'

const TrustedBy = lazy(() => import('../components/sections/TrustedBy'))
const StatsSection = lazy(() => import('../components/sections/StatsSection'))
const ServicesGrid = lazy(() => import('../components/sections/ServicesGrid'))
const WhyOrren = lazy(() => import('../components/sections/WhyOrren'))
const PortfolioShowcase = lazy(() => import('../components/sections/PortfolioShowcase'))
const TestimonialsSection = lazy(() => import('../components/sections/TestimonialsSection'))
const HomePricingSection = lazy(() => import('../components/sections/HomePricingSection'))
const CTASection = lazy(() => import('../components/sections/CTASection'))

const SectionLoader = () => <div className="h-96" />

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        keywords={t('seo.home.keywords')}
        canonicalPath="/"
      />
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      
      <MotionMain
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <TrustedBy />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <StatsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ServicesGrid />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <WhyOrren />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <PortfolioShowcase />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <HomePricingSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CTASection />
        </Suspense>
      </MotionMain>

      <Footer />
      <BackToTop />
    </>
  )
}

export default Home
