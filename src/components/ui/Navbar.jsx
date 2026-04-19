import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Track scroll for sticky style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Active section detection
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-card border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('#hero')}
            className="relative font-display font-bold text-xl group"
            whileHover={{ scale: 1.02 }}
            data-hover
          >
            <span className="text-white">Govind</span>
            <span className="text-primary">.</span>
            <span className="text-white/40 text-sm font-mono font-normal ml-1">portfolio</span>
            <motion.div
              className="absolute -bottom-1 left-0 h-px bg-primary"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative font-body text-sm tracking-wide group"
                  data-hover
                >
                  <span className={`transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-white/60 hover:text-white'
                  }`}>
                    {link.label}
                  </span>
                  {/* Active underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-px bg-primary origin-left"
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              )
            })}

            {/* CTA */}
            <motion.button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary text-xs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-hover
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/80 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            data-hover
          >
            {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
            <motion.div
              className="absolute top-20 left-0 right-0 glass-card border-y border-white/10 px-6 py-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left font-display text-2xl font-semibold ${
                      activeSection === link.href.replace('#', '') ? 'text-primary' : 'text-white/70'
                    }`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <span className="text-primary/40 font-mono text-sm mr-2">0{i + 1}.</span>
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
