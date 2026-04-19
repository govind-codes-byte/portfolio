import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

// Reusable scroll-triggered animation wrapper
export const FadeInUp = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export const FadeIn = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

export const SlideInLeft = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export const SlideInRight = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export const ScaleIn = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: 'backOut' }}
    >
      {children}
    </motion.div>
  )
}

// Section heading component
export const SectionHeading = ({ eyebrow, title, highlight, description }) => (
  <div className="text-center mb-16 md:mb-20">
    <FadeInUp>
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-6 h-px bg-primary" />
        <span className="font-mono text-primary text-xs tracking-widest uppercase">{eyebrow}</span>
        <div className="w-6 h-px bg-primary" />
      </div>
      <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="font-body text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </FadeInUp>
  </div>
)
