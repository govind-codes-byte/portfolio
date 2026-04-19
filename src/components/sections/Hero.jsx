import { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import HeroCanvas from '../3d/HeroCanvas'

// Typing effect hook
const useTypingEffect = (words, speed = 100, pause = 2000) => {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setText(currentWord.slice(0, charIndex + 1))
          setCharIndex(c => c + 1)
        } else {
          setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        if (charIndex > 0) {
          setText(currentWord.slice(0, charIndex - 1))
          setCharIndex(c => c - 1)
        } else {
          setIsDeleting(false)
          setWordIndex(i => (i + 1) % words.length)
        }
      }
    }, isDeleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex, words, speed, pause])

  return text
}

// Floating particles background
const Particles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-20, -80, -20],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

const roles = ['Full Stack Developer', 'React Developer', 'Python Enthusiast', 'BCA Graduate', 'Problem Solver']

const Hero = () => {
  const typedText = useTypingEffect(roles)

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating particles */}
      <Particles />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen">
          {/* Left content */}
          <div className="flex flex-col justify-center py-20 lg:py-0 order-2 lg:order-1">
            {/* Eyebrow text */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="w-8 h-px bg-primary" />
              <span className="font-mono text-primary text-sm tracking-widest uppercase">
                Hello, World!
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">I'm </span>
              <span className="gradient-text">Govind Kumar</span>
              {/* ↑ Replace with your actual name */}
            </motion.h1>

            {/* Dynamic role */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <span className="font-display text-xl md:text-2xl text-white/50">a </span>
              <span className="font-display text-xl md:text-2xl text-primary typing-cursor font-semibold">
                {typedText}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="font-body text-white/50 text-base md:text-lg leading-relaxed max-w-md mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              BCA student passionate about building modern full-stack web applications.
              I love turning ideas into reality with clean code and beautiful interfaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-hover
              >
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >→</motion.span>
                </span>
                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/20 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                className="btn-outline group flex items-center gap-2"
                whileHover={{ scale: 1.05, borderColor: 'rgba(0,255,178,0.8)' }}
                whileTap={{ scale: 0.95 }}
                data-hover
              >
                <HiDownload className="text-base" />
                Resume
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 mt-12 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { value: '10+', label: 'Projects Built' },
                { value: '5+', label: 'Technologies' },
                { value: '1+', label: 'Years Coding' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display font-bold text-2xl text-primary">{stat.value}</span>
                  <span className="font-body text-white/40 text-xs mt-0.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Canvas */}
          <motion.div
            className="relative h-[400px] md:h-[550px] lg:h-screen order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          >
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <HeroCanvas />
            </Suspense>

            {/* Tech badge floating */}
            <motion.div
              className="absolute bottom-8 left-0 lg:-left-8 glass-card px-4 py-3 rounded-2xl border border-white/10"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs text-white/70">Available for work</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        data-hover
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default Hero
