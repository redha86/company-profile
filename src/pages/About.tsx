import { MotionMain, MotionDiv } from '../components/ui/MotionWrapper'
import { Link } from 'react-router-dom'
import { BookOpen, Code, Heart, Lightbulb, Shield, Users, ChevronRight, } from 'lucide-react'
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaGlobe,
} from 'react-icons/fa'
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
import redhaImage from '../assets/images/ftpersonDhaaa.jpg'

const teamImages: Record<string, string> = {
  redha: redhaImage,
}

const About = () => {
  const { t } = useTranslation()

  interface TeamMember {
    name: string
    role: string
    image: string
    socials: {
      linkedin?: string
      instagram?: string
      github?: string
      website?: string
    }
  }

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
    {
      year: t('about.journey.timeline.0.year'),
      event: t('about.journey.timeline.0.event'),
      description: t('about.journey.timeline.0.description')
    },
    {
      year: t('about.journey.timeline.1.year'),
      event: t('about.journey.timeline.1.event'),
      description: t('about.journey.timeline.1.description')
    },
    {
      year: t('about.journey.timeline.2.year'),
      event: t('about.journey.timeline.2.event'),
      description: t('about.journey.timeline.2.description')
    },
    {
      year: t('about.journey.timeline.3.year'),
      event: t('about.journey.timeline.3.event'),
      description: t('about.journey.timeline.3.description')
    },
  ]

  const team = t('about.team.members', { returnObjects: true }) as TeamMember[]

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

            <div className="relative mt-16">
              {/* Vertical line - hidden on mobile, visible on lg */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent" />

              <div className="space-y-8 lg:space-y-12">
                {timeline.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.15}>
                    <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-0 relative`}>
                      {/* Timeline dot - positioned absolutely on desktop */}
                      <div className="hidden lg:flex lg:w-1/2 items-start justify-end">
                        <div className={`relative w-full ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                          <div className="absolute top-8 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg"
                            style={{
                              [index % 2 === 0 ? 'right' : 'left']: '-32px'
                            }}
                          />
                        </div>
                      </div>

                      {/* Mobile dot */}
                      <div className="lg:hidden flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg mt-2" />
                          {index < timeline.length - 1 && (
                            <div className="w-0.5 h-20 bg-gradient-to-b from-primary to-accent mt-2" />
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:w-1/2 flex-1">
                        <GlassCard padding="lg" className="h-full">
                          <span className="text-2xl font-display font-bold gradient-text">{item.year}</span>
                          <h3 className="text-xl font-display font-bold text-gray-900 mt-2 mb-2 break-words">
                            {item.event}
                          </h3>
                          <p className="text-gray-600 leading-relaxed break-words">{item.description}</p>
                        </GlassCard>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle
              title={t('about.team.title')}
              subtitle={t('about.team.subtitle')}
            />

            <div className="flex justify-center mt-16">
              <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
                {team.map((member, index) => (
                  <ScrollReveal
                    key={index}
                    delay={index * 0.1}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                    className="flex justify-center w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                  >
                    <div className="group relative w-full max-w-[380px] aspect-[4/5] min-h-[480px] max-h-[560px] rounded-3xl overflow-hidden border border-black/5 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                      {/* Full Image */}
                      <img
                        src={teamImages[member.image]}
                        alt={`${member.name} - ${member.role}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Content */}
                      <div className="absolute inset-x-0 bottom-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                        <div className="mb-4">
                          <h3 className="text-2xl font-display font-bold text-white mb-1">
                            {member.name}
                          </h3>

                          <p className="text-white/80 font-medium">
                            {member.role}
                          </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 opacity-0 translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                          {member.socials?.linkedin && (
                            <a
                              href={member.socials.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${member.name} LinkedIn`}
                              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:bg-primary hover:border-primary"
                            >
                              <FaLinkedinIn size={18} aria-hidden="true" />
                            </a>
                          )}

                          {member.socials?.instagram && (
                            <a
                              href={member.socials.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${member.name} Instagram`}
                              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:bg-primary hover:border-primary"
                            >
                              <FaInstagram size={18} aria-hidden="true" />
                            </a>
                          )}

                          {member.socials?.github && (
                            <a
                              href={member.socials.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${member.name} GitHub`}
                              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:bg-primary hover:border-primary"
                            >
                              <FaGithub size={18} aria-hidden="true" />
                            </a>
                          )}
                          {member.socials?.website && (
                            <a
                              href={member.socials.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${member.name} Personal Website`}
                              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:bg-primary hover:border-primary"
                            >
                              <FaGlobe size={18} aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
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