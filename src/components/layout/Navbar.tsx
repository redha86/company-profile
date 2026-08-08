import logo from '../../assets/images/LogoOrrenn2.png';
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

const LanguageToggle = () => {
  const { t } = useTranslation()
  const currentLang = i18n.language
  const [activeIndex, setActiveIndex] = useState(currentLang === 'en' ? 0 : 1)
  const [selectorStyle, setSelectorStyle] = useState({ width: 0, left: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'id', label: 'ID' },
  ]

  useEffect(() => {
    const newIndex = currentLang === 'en' ? 0 : 1
    setActiveIndex(newIndex)
    updateSelectorPosition(newIndex)
  }, [currentLang])

  const updateSelectorPosition = (index: number) => {
    const button = buttonRefs.current[index]
    if (button && containerRef.current) {
      setSelectorStyle({
        width: button.offsetWidth,
        left: button.offsetLeft,
      })
    }
  }

  const handleLanguageChange = (index: number, code: string) => {
    setActiveIndex(index)
    updateSelectorPosition(index)
    i18n.changeLanguage(code)
  }

  return (
    <div
      ref={containerRef}
      role="tablist"
      aria-label={t('languageSwitcher.label')}
      className="relative flex h-10 items-center gap-1 rounded-full bg-gray-100/60 backdrop-blur-md border border-white/30 px-1 overflow-hidden "
    >
      <style>{`
        @keyframes slideSelector {
          0%, 100% { opacity: 1; }
        }
        .language-selector {
          position: absolute;
          height: calc(100% - 8px);
          top: 4px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 0;
        }
      `}</style>

      <div
        className="language-selector"
        style={{
          width: `${selectorStyle.width}px`,
          left: `${selectorStyle.left}px`,
        }}
      />

      {languages.map((lang, index) => (
        <button
          key={lang.code}
          ref={(el) => {
            buttonRefs.current[index] = el;
          }}
          role="tab"
          aria-selected={activeIndex === index}
          aria-label={t(`languageSwitcher.${lang.code}`)}
          onClick={() => handleLanguageChange(index, lang.code)}
          className={`relative flex items-center justify-center px-3 h-8 min-w-12 text-xs font-semibold rounded-full transition-colors duration-200 whitespace-nowrap z-10 ${
            activeIndex === index
              ? 'text-gray-900'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeIndicatorStyle, setActiveIndicatorStyle] = useState({ width: 0, left: 0 })
  const location = useLocation()
  const { t } = useTranslation()
  const navRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])

  const navLinks = [
    { name: t('navbar.about'), path: '/about' },
    { name: t('navbar.services'), path: '/services' },
    { name: t('navbar.portfolio'), path: '/portfolio' },
    { name: t('navbar.industries'), path: '/industries' },
    { name: t('navbar.process'), path: '/process' },
  ]

  const isActive = (path: string) => location.pathname === path

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const activeIndex = navLinks.findIndex(link => location.pathname === link.path)
    if (activeIndex !== -1 && linkRefs.current[activeIndex]) {
      const link = linkRefs.current[activeIndex]
      setActiveIndicatorStyle({
        width: link.offsetWidth,
        left: link.offsetLeft,
      })
    }
  }, [location.pathname])

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const isScrolled = scrollY > 60
        setScrolled(isScrolled)
        setScrollProgress(Math.min(scrollY / 200, 1))
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

  const logoScale = 1 - scrollProgress * 0.06
  const navPadding = scrolled ? 'px-4 md:px-6' : 'px-6 md:px-8'
  const navHeight = scrolled ? 'h-16' : 'h-20'
  const logoHeight = scrolled ? 'h-12' : 'h-14 lg:h-16'

  return (
    <>
      <style>{`
        @keyframes navbarMorph {
          0%, 100% { opacity: 1; }
        }
        .nav-container {
          transition: all 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-backdrop {
          transition: all 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link {
          position: relative;
          transition: all 200ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link:hover {
          transform: translateY(-2px);
          color: #F97316;
        }
        .active-indicator {
          position: absolute;
          height: 2px;
          bottom: -8px;
          background: linear-gradient(90deg, #F97316, #DC4D01);
          border-radius: 1px;
          transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .mobile-drawer {
          animation: slideInUp 300ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .nav-container,
          .nav-backdrop,
          .nav-link,
          .active-indicator,
          .mobile-drawer {
            transition: none;
          }
        }
      `}</style>

      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'pt-4 pb-4' : 'pt-0 pb-0'
        }`}
      >
        <div
          className={`nav-container ${navPadding} ${navHeight} flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'mx-auto max-w-[92%] lg:max-w-5xl rounded-full bg-white/72 backdrop-blur-2xl border border-white/35 shadow-xl'
              : 'max-w-full bg-white/80 border-transparent text-black'
          }`}
          style={{
            boxShadow: scrolled
              ? '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
              : 'none',
          }}
        >
          <Link
            to="/"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-lg"
            aria-label="ORREN home"
          >
            <img
              src={logo}
              alt="ORREN - Business Technology Partner"
              title="ORREN - Business Technology Partner"
              loading="eager"
              decoding="async"
              width={56}
              height={56}
              className={`${logoHeight} ${scrolled ? 'lg:h-12' : 'lg:h-16'} w-auto object-contain transition-all duration-500 will-change-transform`}
              style={{
                transform: `scale(${logoScale})`,
              }}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            <div className="relative flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  ref={(el) => {
                    linkRefs.current[index] = el;
                  }}
                  to={link.path}
                  className="nav-link text-sm font-medium text-gray-700 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded"
                >
                  {link.name}
                  {isActive(link.path) && (
                    <div
                      className="active-indicator"
                      style={{
                        width: `${activeIndicatorStyle.width}px`,
                        left: `${activeIndicatorStyle.left}px`,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 border-l border-gray-200/40 pl-4">
              <Link
                to="/contact"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded"
              >
                <Button size="sm" className="transition-all duration-200 hover:scale-105 active:scale-95">
                  {t('navbar.contactUs')}
                </Button>
              </Link>
              <LanguageToggle />
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-colors"
          >
            {isOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="mobile-drawer fixed inset-0 z-40 lg:hidden pt-24 px-6"
          style={{
            background: 'rgba(255, 255, 255, 0.72)',
            backdropFilter: 'blur(24px)',
          }}
        >
          <div className="max-w-sm mx-auto flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-6 border-t border-gray-200/40">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded"
              >
                <Button fullWidth>{t('navbar.contactUs')}</Button>
              </Link>
            </div>

            <div className="flex justify-center pt-4">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
