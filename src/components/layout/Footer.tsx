import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ExternalLink, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              ORREN
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/orren" target="_blank" rel="noopener noreferrer" aria-label="ORREN on LinkedIn" className="text-gray-400 hover:text-primary transition-colors">
                <ExternalLink size={20} aria-hidden="true" />
              </a>
              <a href="https://orren.co" target="_blank" rel="noopener noreferrer" aria-label="ORREN website" className="text-gray-400 hover:text-primary transition-colors">
                <Globe size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-colors">
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm hover:text-primary transition-colors">
                  {t('navbar.portfolio')}
                </Link>
              </li>
              {/* <li>
                <Link to="/careers" className="text-sm hover:text-primary transition-colors">
                  Careers
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                  {t('navbar.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-sm hover:text-primary transition-colors">
                  {t('footer.webDevelopment')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-primary transition-colors">
                  {t('footer.mobileApps')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-primary transition-colors">
                  {t('footer.uiuxDesign')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-primary transition-colors">
                  {t('footer.cloudSolutions')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={18} className="text-primary flex-shrink-0" aria-hidden="true" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={18} className="text-primary flex-shrink-0" aria-hidden="true" />
                <span>hello@orren.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} ORREN. {t('footer.rightsReserved')}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">
                {t('footer.termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer