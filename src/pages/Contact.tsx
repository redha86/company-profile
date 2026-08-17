import { MotionMain, MotionDiv } from '../components/ui/MotionWrapper'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Send, ChevronRight } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollProgress from '../components/layout/ScrollProgress'
import BackToTop from '../components/layout/BackToTop'
import LoadingScreen from '../components/layout/LoadingScreen'
import GlassCard from '../components/ui/GlassCard'
import ScrollReveal from '../components/motion/ScrollReveal'
import Button from '../components/ui/Button'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = t('contactPage.whatsapp.message', {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      company: formData.company,
      message: formData.message,
    })

    const url = `https://wa.me/6287843582377?text=${encodeURIComponent(whatsappMessage)}`

    window.open(url, '_blank')
  }

  return (
    <>
      <SEO
        title={t('seo.contact.title')}
        description={t('seo.contact.description')}
        keywords={t('seo.contact.keywords')}
        canonicalPath="/contact"
        breadcrumbs={[
          { name: t('navbar.contact'), url: '/contact' },
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
                <span className="text-primary">{t('navbar.contact')}</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                {t('contactPage.hero.title')} <span className="gradient-text">{t('contactPage.hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('contactPage.hero.description')}
              </p>
            </MotionDiv>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollReveal>
                <GlassCard padding="lg" className="h-full">
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                    {t('contactPage.form.title')}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contactPage.form.firstName')}
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contactPage.form.lastName')}
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contactPage.form.email')}
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contactPage.form.company')}
                      </label>
                      <input
                        id="company"
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contactPage.form.message')}
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      fullWidth
                      className="group"
                    >
                      <span>{t('contactPage.form.submit')}</span>
                      <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </form>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-8">
                  <GlassCard padding="lg">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                      {t('contactPage.info.title')}
                    </h2>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <Mail className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{t('contactPage.info.email.label')}</h3>
                          <p className="text-gray-600">hello@orren.my.id</p>
                          <p className="text-sm text-gray-500">{t('contactPage.info.email.note')}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <Phone className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{t('contactPage.info.phone.label')}</h3>
                          <p className="text-gray-600">+1 (555) 123-4567</p>
                          <p className="text-sm text-gray-500">{t('contactPage.info.phone.note')}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <MapPin className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{t('contactPage.info.office.label')}</h3>
                          <p className="text-gray-600">New York, NY</p>
                          <p className="text-sm text-gray-500">123 Tech Street, Suite 500</p>
                        </div>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard padding="lg">
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                      {t('contactPage.social.title')}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t('contactPage.social.description')}
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="https://twitter.com/orren"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="ORREN on X (Twitter)"
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary/10 text-gray-600 hover:text-primary flex items-center justify-center transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75h-3.27l7.201-8.22L2.01 2.25H8.16l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/orren"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="ORREN on LinkedIn"
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary/10 text-gray-600 hover:text-primary flex items-center justify-center transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h7v-9h-2v-4h2v-2.5c0-2.485 2.015-4.5 4.5-4.5h2.5v4h-1.5c-.276 0-.5.224-.5.5v2.5h2l-0.5 4h-1.5v9h7c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.facebook.com/orren"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="ORREN on Facebook"
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary/10 text-gray-600 hover:text-primary flex items-center justify-center transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16.0547 6.15625v11.6094h-2.625V9.01562h-1.078125v-2.71875h1.078125v-1.875c0-1.621094 1.453125-2.85546 3.23125-2.85546h1.898438v2.14844h-1.046875c-.4375 0-.921875.09375-1.164062.15625z" />
                        </svg>
                      </a>
                    </div>
                  </GlassCard>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

      </MotionMain>

      <Footer />
      <BackToTop />
    </>
  )
}

export default Contact