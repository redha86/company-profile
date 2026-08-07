import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 500)
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-40 p-4 bg-[#DC4D01] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#F97316] transition-all duration-300 hover:scale-110 active:scale-90 ${
        isVisible ? 'opacity-100 scale-100' : 'pointer-events-none opacity-0 scale-0'
      }`}
    >
      <ArrowUp size={24} aria-hidden="true" />
    </button>
  )
}

export default BackToTop
