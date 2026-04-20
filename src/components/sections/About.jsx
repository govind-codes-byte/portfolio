import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FadeInUp, SlideInLeft, SlideInRight, SectionHeading } from '../ui/AnimatedSection'
import { HiAcademicCap, HiCode, HiLightBulb, HiHeart } from 'react-icons/hi'

const highlights = [
  { icon: HiAcademicCap, label: 'BCA Graduate', desc: 'Computer Applications degree with focus on modern web tech' },
  { icon: HiCode, label: 'Full Stack Dev', desc: 'Comfortable across frontend, backend, and databases' },
  { icon: HiLightBulb, label: 'Problem Solver', desc: 'Love breaking down complex challenges into elegant solutions' },
  { icon: HiHeart, label: 'Passionate', desc: 'Genuinely passionate about building things that matter' },
]

// Animated skill progress bar
const SkillBar = ({ skill, level, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-body text-sm text-white/70 group-hover:text-white transition-colors">{skill}</span>
        <span className="font-mono text-xs text-primary">{level}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  )
}

const coreSkills = [
  { skill: 'JavaScript / React', level: 65 },
  { skill: 'HTML & CSS', level: 85 },
  { skill: 'Python', level: 32 },
  { skill: 'MongoDB', level: 85 },
  { skill: 'Node.js / Express', level: 40 },
]

const About = () => {
  return (
    <section id="about" className="relative section-padding bg-dark-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title="Who I"
          highlight="Am"
          description="A passionate developer building the future, one line of code at a time."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image/visual + highlights */}
          <SlideInLeft>
            <div className="space-y-5">
              {/* Profile card */}
              <div className="glass-card rounded-2xl p-6 border border-white/5 mb-8">
                <div className="flex items-start gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0 flex items-center justify-center text-2xl font-display font-bold text-black">
                    GS
                    {/* ↑ Replace "YN" with your initials, or add an <img> tag for your photo */}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-lg">Govind Kumar</h3>
                    {/* ↑ Replace with your actual name */}
                    <p className="text-white/40 text-sm mt-0.5 font-body">Full Stack Developer</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="font-mono text-xs text-primary">Open to opportunities</span>
                    </div>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-white/5">
                  <p className="font-body text-white/60 text-sm leading-relaxed">
                    {/* ↑ Replace this paragraph with your own bio */}
                    Hey! I'm a BCA student who discovered a deep love for web development.
                    I build full-stack applications using React, Python, and MongoDB, and I'm
                    always eager to learn new technologies and take on exciting challenges.
                  </p>
                </div>
              </div>

              {/* Highlight cards grid */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, i) => (
                  <FadeInUp key={i} delay={0.1 * i}>
                    <motion.div
                      className="glass-card rounded-xl p-4 border border-white/5 hover:border-primary/30 transition-all duration-300 group cursor-default"
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <item.icon className="text-primary text-xl mb-2 group-hover:scale-110 transition-transform" />
                      <p className="font-display font-semibold text-white text-sm mb-1">{item.label}</p>
                      <p className="font-body text-white/40 text-xs leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </SlideInLeft>

          {/* Right: Skills + bio */}
          <SlideInRight>
            <div className="space-y-8">
              <div>
                <h3 className="font-display font-semibold text-white text-xl mb-2">My Journey</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed mb-4">
                  {/* ↑ Update this with your personal story */}
                  I started my coding journey during my BCA program and quickly fell in love with
                  building things on the web. What started as curiosity turned into a genuine passion
                  for creating digital experiences.
                </p>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  I specialize in the MERN stack and am constantly expanding my skillset.
                  Whether it's crafting pixel-perfect UIs or designing RESTful APIs,
                  I bring the same level of care and attention to every project.
                </p>
              </div>

              {/* Skill bars */}
              <div>
                <h3 className="font-display font-semibold text-white text-lg mb-5">Core Proficiency</h3>
                <div className="space-y-5">
                  {coreSkills.map((s, i) => (
                    <SkillBar key={s.skill} {...s} delay={0.1 + i * 0.1} />
                  ))}
                </div>
              </div>

              {/* Quick facts */}
              <div className="flex flex-wrap gap-3">
                {['React', 'Python', 'MongoDB', 'Node.js', 'CSS', 'Git'].map((tag) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 font-mono text-xs hover:border-primary/50 hover:text-primary transition-all cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}

export default About
