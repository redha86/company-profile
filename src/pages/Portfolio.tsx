import { MotionMain, MotionDiv } from '../components/ui/MotionWrapper'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ChevronRight, ExternalLink, ArrowRight, Layers } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollProgress from '../components/layout/ScrollProgress'
import BackToTop from '../components/layout/BackToTop'
import LoadingScreen from '../components/layout/LoadingScreen'
import ScrollReveal from '../components/motion/ScrollReveal'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import { projects } from '../data/projects'

const Portfolio = () => {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<string, number>>({})
  
  const filters = ['all', 'web', 'mobile', 'design', 'enterprise']

  useEffect(() => {
    const indices: Record<string, number> = {}
    projects.forEach(project => {
      indices[project.id] = 0
    })
    setCurrentImageIndices(indices)
  }, [])

  useEffect(() => {
    const intervals: ReturnType<typeof setInterval>[] = []

    projects.forEach((project) => {
      if (project.images.length <= 1) return

      const interval = setInterval(() => {
        setCurrentImageIndices((prev) => ({
          ...prev,
          [project.id]: ((prev[project.id] ?? 0) + 1) % project.images.length,
        }))
      }, 3500)

      intervals.push(interval)
    })

    return () => {
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [])

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeFilter)

  return (
    <>
      <SEO
        title={t('seo.portfolio.title')}
        description={t('seo.portfolio.description')}
        keywords={t('seo.portfolio.keywords')}
        canonicalPath="/portfolio"
        breadcrumbs={[
          { name: t('navbar.portfolio'), url: '/portfolio' },
        ]}
      />
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />

      <MotionMain
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white"
      >
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
          {/* Premium Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[60%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute top-[20%] -right-[10%] w-[35%] h-[50%] bg-accent/5 blur-[100px] rounded-full" />
            <div className="absolute -bottom-[20%] left-[20%] w-[30%] h-[40%] bg-purple-200/20 blur-[80px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <nav aria-label="Breadcrumb" className="inline-flex items-center space-x-2 text-sm text-gray-500 mb-6 font-medium">
                <Link to="/" className="hover:text-primary transition-colors">{t('common.home')}</Link>
                <ChevronRight size={14} className="text-gray-300" />
                <span className="text-primary">{t('navbar.portfolio')}</span>
              </nav>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6 tracking-tight">
                {t('portfolioPage.hero.title')} <span className="text-primary">{t('portfolioPage.hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {t('portfolioPage.hero.description')}
              </p>
            </MotionDiv>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-y border-gray-100 sticky top-[72px] z-30 bg-white/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-nowrap overflow-x-auto lg:flex-wrap lg:justify-center gap-2 pb-2 lg:pb-0 scrollbar-hide">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {t(`portfolioPage.filters.${filter}`)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {filteredProjects.length > 0 ? (
              <div className="space-y-32 lg:space-y-48">
                {filteredProjects.map((project, index) => (
                  <ScrollReveal key={project.id} delay={0.1}>
                    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                      {/* Project Content */}
                      <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
                            {t(`portfolioPage.filters.${project.category.toLowerCase()}`)}
                          </span>
                          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                            {t(`portfolioPage.projects.${project.id}.title`)}
                          </h2>
                          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                            {t(`portfolioPage.projects.${project.id}.description`)}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-lg border border-gray-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="pt-6">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 text-primary font-bold text-lg"
                          >
                            View Project
                            <div className="p-2 bg-primary/10 rounded-full group-hover:translate-x-2 transition-transform">
                              <ArrowRight size={20} className="text-primary" />
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* Project Preview */}
                      <div className="w-full lg:w-1/2">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block relative group"
                        >
                          <div className="relative aspect-[16/10] bg-gray-50 rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex items-center justify-center p-4 lg:p-8">
                            {/* Image Container */}
                            <div className="relative w-full h-full">
                              {project.images.map((img, imgIndex) => (
                                <img
                                  key={imgIndex}
                                  src={img}
                                  alt={`${project.title} screenshot ${imgIndex + 1}`}
                                  className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
                                    imgIndex === (currentImageIndices[project.id] || 0)
                                      ? 'opacity-100 scale-100'
                                      : 'opacity-0 scale-95 pointer-events-none'
                                  } group-hover:scale-[1.02]`}
                                />
                              ))}
                            </div>

                            {/* Indicators */}
                            {project.images.length > 1 && (
                              <div className="absolute bottom-6 flex gap-2">
                                {project.images.map((_, dotIndex) => (
                                  <div
                                    key={dotIndex}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                      dotIndex === (currentImageIndices[project.id] || 0)
                                        ? 'w-6 bg-primary'
                                        : 'w-1.5 bg-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            )}

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <div className="p-4 bg-white rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform">
                                <ExternalLink size={24} className="text-primary" />
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="text-center py-40 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                <div className="bg-white p-6 rounded-2xl shadow-sm inline-block mb-6">
                  <Layers className="text-gray-300" size={48} />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  {t('portfolioPage.emptyState')}
                </h3>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden bg-white">
          {/* Subtle CTA Background Glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[120%] bg-gradient-to-tr from-primary/5 via-white to-accent/5 blur-[120px] rounded-full" />
            <div className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[40%] bg-primary/10 blur-[100px] rounded-full opacity-60" />
            <div className="absolute -top-[10%] -right-[5%] w-[30%] h-[40%] bg-accent/10 blur-[100px] rounded-full opacity-60" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">
              {t('portfolioPage.cta.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              {t('portfolioPage.cta.subtitle')}
            </p>
            <Link to="/contact">
              <button
                className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                {t('portfolioPage.cta.button')}
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

export default Portfolio
