import { motion } from 'framer-motion'
import * as SiIcons from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { HiArrowUp, HiHeart } from 'react-icons/hi'

// ✅ Safe icons
const { SiGithub, SiTwitter, SiInstagram } = SiIcons

const footerLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: SiGithub, href: 'https://github.com/govind-codes-byte', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/govind-kumar-ab7965298/', label: 'LinkedIn' }, // ✅ FIXED
  { icon: SiInstagram, href: 'https://www.instagram.com/mr._sharma_4/', label: 'Instagram' },
]

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 overflow-hidden" style={{ background: '#050505' }}>
      
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        {/* Main section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="font-bold text-2xl">
              <span className="text-white">Govind</span>
              <span className="text-primary">.</span>
              <span className="text-white/30 text-base">portfolio</span>
            </div>

            <p className="text-white/40 text-sm max-w-xs">
              Building modern web experiences with passion and precision.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon && <social.icon size={15} />}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs text-white/30 uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-white/50 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs text-white/30 uppercase tracking-widest mb-5">Get In Touch</h4>

            <a
              href="mailto:your.email@gmail.com"
              className="text-sm text-white/50 hover:text-primary transition-colors block"
            >
              govindsharma27147@gmail.com
            </a>

            <p className="text-sm text-white/30 mt-2">
              Bihar, India
            </p>

            <div className="flex items-center gap-2 mt-4">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-emerald-500/70">Open to work</span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-white/30 flex items-center gap-1.5">
            © {new Date().getFullYear()} Govind Kumar — Made with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <HiHeart className="text-red-500 inline" size={12} />
            </motion.span>
            and ☕
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-primary transition-all hidden md:flex"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <HiArrowUp size={16} />
      </motion.button>

    </footer>
  )
}

export default Footer