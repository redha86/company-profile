import { MotionMain, MotionH1 } from '../components/ui/MotionWrapper'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollProgress from '../components/layout/ScrollProgress'
import BackToTop from '../components/layout/BackToTop'
import LoadingScreen from '../components/layout/LoadingScreen'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title={t('seo.notFound.title')}
        description={t('seo.notFound.description')}
        keywords={t('seo.notFound.keywords')}
        canonicalPath="/404"
        noindex
      />
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />

      <MotionMain
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-[70vh] flex items-center justify-center"
      >
        <section className="py-32 bg-gradient-to-br from-primary-light via-white to-purple-50 w-full">
          <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
            <MotionH1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-8xl md:text-9xl font-display font-bold gradient-text mb-4"
            >
              404
            </MotionH1>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
              {t('notFound.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('notFound.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/">
                <Button size="lg">{t('notFound.backHome')}</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  {t('common.contactUs')}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </MotionMain>

      <Footer />
      <BackToTop />
    </>
  )
}

export default NotFound
