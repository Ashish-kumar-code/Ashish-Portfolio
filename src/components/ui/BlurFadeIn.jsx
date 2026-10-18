import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * BlurFadeIn — Magic UI signature entrance animation.
 * Wraps children with a blur-in + fade-up effect triggered on scroll intersection.
 * 
 * @param {number} delay — stagger delay in seconds (default 0)
 * @param {number} duration — animation duration in seconds (default 0.4)
 * @param {number} yOffset — vertical offset in px (default 6)
 * @param {number} blur — initial blur in px (default 6)
 */
export default function BlurFadeIn({ children, delay = 0, duration = 0.4, yOffset = 6, blur = 6, className = '' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: `blur(${blur}px)`, y: yOffset }}
      animate={isVisible ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
