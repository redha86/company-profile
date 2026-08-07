import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useState, useEffect } from 'react'
import logo from '../../assets/images/LogoOrren.svg'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const reduced = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          role="status"
          aria-live="polite"
          aria-label="Loading"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
            <motion.img
              src={logo}
              alt="ORREN Logo"
              title="ORREN"
              loading="eager"
              decoding="async"
              width={240}
              height={240}
              className="relative z-10 w-30 h-30 lg:w-60 lg:h-60 object-contain"
              animate={reduced ? undefined : { rotate: 360, y: [0, -8, 0] }}
              transition={{
                rotate: {
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            />

            <div className="mt-8 flex gap-3" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-[#F97316]"
                  animate={reduced ? undefined : { y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
            <span className="sr-only">Loading website</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
