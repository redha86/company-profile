import logo from '../../assets/images/LogoOrrenn2.png';
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

const LanguageToggle = () => {
  const { t } = useTranslation()
  const currentLang = i18n.language

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'id', label: 'ID' },
  ]

  return (
    <div
      role="tablist"
      aria-label={t('languageSwitcher.label')}
      className="relative flex h-[38px] lg:h-[42px] items-center rounded-full bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg p-1 overflow-hidden"
    >
      {languages.map((lang) => {
        const active = currentLang === lang.code
        return (
          <button
            key={lang.code}
            role="tab"
            aria-selected={active}
            aria-label={t(`languageSwitcher.${lang.code}`)}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`relative flex items-center justify-center px-4 h-[48px] min-w-[52px] text-sm font-medium rounded-full transition-colors duration-200 whitespace-nowrap ${
              active
                ? 'bg-gradient-to-r from-[#F97316] to-[#DC4D01] text-white shadow-md'
                : 'text-gray-600 hover:text-primary hover:bg-gray-100'
            }`}
          >
            {lang.label}
          </button>
        )
      })}
    </div>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 100)
        raf = 0
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const navLinks = [
    { name: t('navbar.about'), path: '/about' },
    { name: t('navbar.services'), path: '/services' },
    { name: t('navbar.portfolio'), path: '/portfolio' },
    { name: t('navbar.industries'), path: '/industries' },
    { name: t('navbar.process'), path: '/process' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? 'border-gray-200/50 bg-white/90 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center" aria-label="ORREN home">
              <img
                src={logo}
                alt="ORREN - Business Technology Partner"
                title="ORREN - Business Technology Partner"
                loading="eager"
                decoding="async"
                width={56}
                height={56}
                className="h-14 lg:h-17 ml-2 lg:ml-4 w-auto object-contain transition-transform duration-300 hover:scale-105 hover:-rotate-2"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact">
                <Button size="sm">{t('navbar.contactUs')}</Button>
              </Link>
              <div className="ml-2 flex items-center gap-2">
                <LanguageToggle />
              </div>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="lg:hidden flex items-center justify-center w-12 h-12 text-gray-700"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 lg:hidden bg-white pt-24 px-6"
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium ${
                  isActive(link.path) ? 'text-primary' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button fullWidth>{t('navbar.contactUs')}</Button>
            </Link>
            <div className="flex flex-col items-center pt-4 border-t border-gray-200 gap-3">
              <div className="flex items-center gap-2">
                <LanguageToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
