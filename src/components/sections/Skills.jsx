import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FadeInUp, SectionHeading } from '../ui/AnimatedSection'
import * as SiIcons from 'react-icons/si'

const {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiPython, SiNodedotjs, SiExpress, SiMongodb,
  SiGit, SiGithub, SiVite, SiPostman, SiFigma,
} = SiIcons

const skillCategories = [
  {
    category: 'Frontend',
    color: '#00FFB2',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 90 },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6', level: 85 },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 70 },
      { name: 'React.js', icon: SiReact, color: '#61DAFB', level: 65 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 62 },
    ]
  },
  {
    category: 'Backend',
    color: '#7C3AED',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB', level: 72 },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 60 },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff', level: 58 },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 65 },
    ]
  },
  {
    category: 'Tools & More',
    color: '#F59E0B',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032', level: 75 },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff', level: 78 },
      { name: 'Vite', icon: SiVite, color: '#646CFF', level: 70 },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 65 },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E', level: 50 },
    ]
  }
]

// Skill Card
const SkillCard = ({ skill, delay, categoryColor }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const Icon = skill.icon

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-xl p-4 border border-white/5 group cursor-default relative overflow-hidden"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, borderColor: `${categoryColor}40` }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 0%, ${categoryColor}10, transparent 70%)` }}
      />

      <div className="relative flex flex-col items-center gap-3">
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: `${skill.color}15` }}
          whileHover={{ scale: 1.15, rotate: 5 }}
        >
          {Icon && <Icon size={24} style={{ color: skill.color }} />}
        </motion.div>

        <p className="font-body text-white/80 text-sm font-medium text-center group-hover:text-white">
          {skill.name}
        </p>

        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${categoryColor}, ${categoryColor}80)` }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: delay + 0.3 }}
          />
        </div>

        <span className="font-mono text-xs" style={{ color: categoryColor }}>
          {skill.level}%
        </span>
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="relative section-padding overflow-hidden" style={{ background: '#080808' }}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title="My Tech"
          highlight="Stack"
          description="Technologies I work with to build modern web applications."
        />

        <div className="space-y-12">
          {skillCategories.map((cat, catIdx) => (
            <FadeInUp key={cat.category} delay={catIdx * 0.1}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-1 h-6 rounded-full" style={{ background: cat.color }} />
                  <h3 className="font-display font-semibold text-white text-lg">
                    {cat.category}
                  </h3>
                  <div className="flex-1 h-px" style={{ background: `${cat.color}20` }} />
                  <span className="font-mono text-xs text-white/30">
                    {cat.skills.length} skills
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {cat.skills.map((skill, i) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      delay={catIdx * 0.1 + i * 0.06}
                      categoryColor={cat.color}
                    />
                  ))}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.5}>
          <p className="text-center font-mono text-xs text-white/20 mt-12">
            // Always learning, always growing
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}

export default Skills