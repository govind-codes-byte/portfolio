import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      className="loader-overlay"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Animated logo/name */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Spinning ring */}
        <div className="relative w-20 h-20">
          <motion.div
            className="absolute inset-0 rounded-full border border-primary/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          />
          {/* Inner dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Text */}
        <motion.div className="text-center">
          <motion.p
            className="font-mono text-xs text-primary/60 tracking-[0.4em] uppercase mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Initializing
          </motion.p>
          <motion.div className="flex gap-1.5 justify-center">
            {['D', 'E', 'V', '.', 'P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O'].map((char, i) => (
              <motion.span
                key={i}
                className="font-display font-bold text-lg text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
              >
                {char === '.' ? (
                  <span className="text-primary">{char}</span>
                ) : char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Loading bar */}
        <motion.div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loader
