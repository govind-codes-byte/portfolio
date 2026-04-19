import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import CustomCursor from './components/ui/CustomCursor'
import ScrollProgress from './components/ui/ScrollProgress'
import Loader from './components/ui/Loader'
import ThemeToggle from './components/ui/ThemeToggle'

function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  // Handle loader completion
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  // Apply dark/light mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [darkMode])

  return (
    <div className={`relative ${darkMode ? 'dark' : ''} noise-overlay`}>
      {/* Custom cursor - hidden on touch devices */}
      <CustomCursor />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Loader */}
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {/* Main content - shown after loader */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Sticky Navbar */}
            <Navbar darkMode={darkMode} />

            {/* Theme Toggle */}
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* Sections */}
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
