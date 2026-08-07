import { MotionMain, MotionDiv } from '../components/ui/MotionWrapper'
import { Link } from 'react-router-dom'
import { BookOpen, Code, Heart, Lightbulb, Shield, Users, ChevronRight } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollProgress from '../components/layout/ScrollProgress'
import BackToTop from '../components/layout/BackToTop'
import LoadingScreen from '../components/layout/LoadingScreen'
import GlassCard from '../components/ui/GlassCard'
import SectionTitle from '../components/ui/SectionTitle'
import ScrollReveal from '../components/motion/ScrollReveal'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  const values = [
    {
      icon: Code,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
    },
    {
      icon: Shield,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description'),
    },
    {
      icon: Users,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description'),
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
    },
    {
      icon: Heart,
      title: t('about.values.passion.title'),
      description: t('about.values.passion.description'),
    },
  ]

  const timeline = [
    { year: '2019', event: t('about.journey.timeline[0].event'), description: t('about.journey.timeline[0].description') },
    { year: '2020', event: t('about.journey.timeline[1].event'), description: t('about.journey.timeline[1].description') },
    { year: '2022', event: t('about.journey.timeline[2].event'), description: t('about.journey.timeline[2].description') },
    { year: '2024', event: t('about.journey.timeline[3].event'), description: t('about.journey.timeline[3].description') },
    { year: '2026', event: t('about.journey.timeline[4].event'), description: t('about.journey.timeline[4].description') },
  ]

  const team = [
    { name: t('about.team.members[0].name'), role: t('about.team.members[0].role'), initials: 'AJ' },
    { name: t('about.team.members[1].name'), role: t('about.team.members[1].role'), initials: 'SC' },
    { name: t('about.team.members[2].name'), role: t('about.team.members[2].role'), initials: 'MR' },
    { name: t('about.team.members[3].name'), role: t('about.team.members[3].role'), initials: 'ED' },
  ]

  return (
    <>
      <SEO
        title={t('seo.about.title')}
        description={t('seo.about.description')}
        keywords={t('seo.about.keywords')}
        canonicalPath="/about"
        breadcrumbs={[
          { name: t('navbar.about'), url: '/about' },
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
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#FFEDD5] via-white to-[#FFF8E1]">
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
                <span className="text-primary">{t('navbar.about')}</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                {t('navbar.about')} <span className="gradient-text">ORREN</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('about.hero.description')}
              </p>
            </MotionDiv>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <ScrollReveal delay={0}>
                <GlassCard padding="lg" className="h-full text-center">
                  <BookOpen className="text-primary mx-auto mb-4" size={48} aria-hidden="true" />
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{t('about.story.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.story.description')}
                  </p>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <GlassCard padding="lg" className="h-full text-center">
                  <Lightbulb className="text-primary mx-auto mb-4" size={48} aria-hidden="true" />
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{t('about.mission.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.mission.description')}
                  </p>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <GlassCard padding="lg" className="h-full text-center">
                  <Users className="text-primary mx-auto mb-4" size={48} aria-hidden="true" />
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{t('about.vision.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.vision.description')}
                  </p>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle
              title={t('about.values.title')}
              subtitle={t('about.values.subtitle')}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <GlassCard padding="lg" className="h-full hover:-translate-y-2">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4" aria-hidden="true">
                        <Icon className="text-white" size={28} />
                      </div>
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </GlassCard>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <SectionTitle
              title={t('about.journey.title')}
              subtitle={t('about.journey.subtitle')}
            />

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent" />

              {timeline.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.15}>
                  <div className={`relative mb-12 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12 text-right' : 'lg:pl-12'}`}>
                      <GlassCard padding="lg">
                        <div className="absolute top-8 transform translate-x-1/2 right-0 lg:right-auto lg:left-full w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg" />
                        <span className="text-2xl font-display font-bold gradient-text">{item.year}</span>
                        <h3 className="text-xl font-display font-bold text-gray-900 mt-2 mb-2">
                          {item.event}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </GlassCard>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle
              title={t('about.team.title')}
              subtitle={t('about.team.subtitle')}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <GlassCard padding="lg" className="text-center hover:-translate-y-2">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-display font-bold text-2xl">
                      {member.initials}
                    </div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.role}</p>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </MotionMain>

      <Footer />
      <BackToTop />
    </>
  )
}

export default About