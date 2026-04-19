import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 glass-card rounded-full flex items-center justify-center border border-white/10 hover:border-primary/50 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      data-hover
      aria-label="Toggle theme"
    >
      <motion.div
        key={darkMode ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? (
          <HiSun className="text-primary text-xl" />
        ) : (
          <HiMoon className="text-primary text-xl" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
