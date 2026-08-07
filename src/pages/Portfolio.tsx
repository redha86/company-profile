import { MotionMain, MotionDiv } from '../components/ui/MotionWrapper'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ChevronRight, ExternalLink } from 'lucide-react'
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

const Portfolio = () => {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = ['all', 'web', 'mobile', 'design', 'enterprise']

  const projects = [
    {
      title: t('portfolioPage.projects.healthcare.title'),
      category: 'web',
      description: t('portfolioPage.projects.healthcare.description'),
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      gradient: 'from-blue-400 to-cyan-400',
    },
    {
      title: t('portfolioPage.projects.ecommerce.title'),
      category: 'mobile',
      description: t('portfolioPage.projects.ecommerce.description'),
      tech: ['React Native', 'Firebase', 'Stripe', 'Redux'],
      gradient: 'from-purple-400 to-pink-400',
    },
    {
      title: t('portfolioPage.projects.finance.title'),
      category: 'design',
      description: t('portfolioPage.projects.finance.description'),
      tech: ['Figma', 'React', 'D3.js', 'TailwindCSS'],
      gradient: 'from-green-400 to-emerald-400',
    },
    {
      title: t('portfolioPage.projects.erp.title'),
      category: 'enterprise',
      description: t('portfolioPage.projects.erp.description'),
      tech: ['Angular', 'Java', 'Oracle', 'Kubernetes'],
      gradient: 'from-orange-400 to-red-400',
    },
    {
      title: t('portfolioPage.projects.education.title'),
      category: 'web',
      description: t('portfolioPage.projects.education.description'),
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'WebRTC'],
      gradient: 'from-indigo-400 to-purple-400',
    },
    {
      title: t('portfolioPage.projects.logistics.title'),
      category: 'mobile',
      description: t('portfolioPage.projects.logistics.description'),
      tech: ['Flutter', 'Python', 'Docker', 'Redis'],
      gradient: 'from-teal-400 to-blue-400',
    },
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

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
                <span className="text-primary">{t('navbar.portfolio')}</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                {t('portfolioPage.hero.title')} <span className="gradient-text">{t('portfolioPage.hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('portfolioPage.hero.description')}
              </p>
            </MotionDiv>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div role="group" aria-label="Filter projects by category" className="flex flex-wrap justify-center gap-4 mb-16">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  aria-label={`Filter by ${t(`portfolioPage.filters.${filter}`)}`}
                  className={`px-6 py-2 rounded-full font-medium transition-all hover:scale-105 active:scale-95 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {t(`portfolioPage.filters.${filter}`)}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.title} delay={index * 0.1}>
                  <GlassCard
                    className="h-full flex flex-col overflow-hidden cursor-pointer group hover:-translate-y-2"
                    padding="sm"
                  >
                    <div className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-xl mb-4 relative overflow-hidden`} aria-hidden="true">
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ExternalLink className="text-white" size={32} aria-hidden="true" />
                      </div>
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                          backgroundSize: '20px 20px',
                        }} />
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3 self-start">
                        {t(`portfolioPage.filters.${project.category}`)}
                      </div>
                      
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs border border-primary/30 text-primary rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <SectionTitle
              title={t('portfolioPage.cta.title')}
              subtitle={t('portfolioPage.cta.subtitle')}
            />
            <Link to="/contact">
              <button
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
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