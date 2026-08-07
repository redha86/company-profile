import { MotionMain, MotionDiv } from '../components/ui/MotionWrapper'
import { Link } from 'react-router-dom'
import { Lightbulb, Target, HeartHandshake, Building2, Users, Shield, DollarSign, GraduationCap, Clock, Briefcase, ChevronRight } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollProgress from '../components/layout/ScrollProgress'
import BackToTop from '../components/layout/BackToTop'
import LoadingScreen from '../components/layout/LoadingScreen'
import GlassCard from '../components/ui/GlassCard'
import SectionTitle from '../components/ui/SectionTitle'
import ScrollReveal from '../components/motion/ScrollReveal'
import Button from '../components/ui/Button'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'

const Careers = () => {
  const { t } = useTranslation()

  const cultureValues = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We encourage creative thinking and continuously explore new technologies to stay ahead of the curve.',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Every solution we build makes a real difference in our clients\u2019 businesses and the world we live in.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of diverse teams working together to create exceptional results.',
    },
    {
      icon: HeartHandshake,
      title: 'Integrity',
      description: 'We are committed to transparency, honesty, and building trust with our clients and teammates.',
    },
  ]

  const benefits = [
    {
      icon: Building2,
      title: 'Remote Work',
      description: 'Work from anywhere with our flexible remote-first policies',
    },
    {
      icon: Shield,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
    },
    {
      icon: DollarSign,
      title: 'Learning Budget',
      description: 'Annual stipend for courses, conferences, and certifications',
    },
    {
      icon: GraduationCap,
      title: 'Professional Growth',
      description: 'Clear career paths and mentorship programs',
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Choose your schedule and work when you\u2019re most productive',
    },
    {
      icon: HeartHandshake,
      title: 'Equity Options',
      description: 'Company stock options to share in our success',
    },
  ]

  const openPositions = [
    {
      title: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      posted: '2 days ago',
      description: 'Lead the development of our next-gen web applications using React, TypeScript, and modern frontend technologies.',
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      posted: '1 week ago',
      description: 'Build scalable web applications from frontend to backend, working closely with designers and product teams.',
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / All Locations',
      type: 'Full-time',
      posted: '3 days ago',
      description: 'Create beautiful, intuitive interfaces for enterprise applications. Work with product managers to design user-centered experiences.',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      posted: '2 days ago',
      description: 'Design and maintain our cloud infrastructure, automate deployment pipelines, and ensure high availability.',
    },
    {
      icon: Users,
      title: 'Account Executive',
      department: 'Sales',
      location: 'Remote / Chicago, IL',
      type: 'Full-time',
      posted: '4 days ago',
      description: 'Drive revenue growth by building relationships with enterprise clients and leading sales strategies.',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Seattle, WA',
      type: 'Full-time',
      posted: '5 days ago',
      description: 'Define product vision and roadmap, gather requirements, and collaborate with engineering and design teams.',
    },
  ]

  return (
    <>
      <SEO
        title={t('seo.careers.title')}
        description={t('seo.careers.description')}
        keywords={t('seo.careers.keywords')}
        canonicalPath="/careers"
        breadcrumbs={[
          { name: t('navbar.careers'), url: '/careers' },
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
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight size={16} aria-hidden="true" />
                <span className="text-primary">Careers</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                Join Our <span className="gradient-text">Team</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Build the future with us. We’re looking for passionate talent to transform businesses through technology.
              </p>
            </MotionDiv>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle
              title="Our Culture"
              subtitle="What makes ORREN a great place to work"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cultureValues.map((value, index) => {
                const Icon = value.icon
                return (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <GlassCard padding="lg" className="h-full text-center hover:-translate-y-2">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 mx-auto" aria-hidden="true">
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

        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle
              title="Benefits & Perks"
              subtitle="We’re committed to your well-being and growth"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <GlassCard padding="lg" className="h-full hover:-translate-y-2">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <Icon className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
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
              title="Open Positions"
              subtitle="Find your role in shaping the future"
            />

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <GlassCard padding="lg" className="group hover:-translate-y-1">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Briefcase className="text-primary" size={20} aria-hidden="true" />
                          <span className="text-sm text-gray-500 font-medium">{position.department}</span>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center space-x-1">
                            <Building2 size={16} aria-hidden="true" />
                            <span>{position.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Shield size={16} aria-hidden="true" />
                            <span>{position.type}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock size={16} aria-hidden="true" />
                            <span>Posted {position.posted}</span>
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <Button>
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-[#DC4D01] via-[#F97316] to-[#F97316] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Don't see the right role?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                We're always looking for exceptional talent. Send us your resume and tell us how you can contribute to our mission.
              </p>
              <Button
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Send Your Resume
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </MotionMain>

      <Footer />
      <BackToTop />
    </>
  )
}

export default Careers