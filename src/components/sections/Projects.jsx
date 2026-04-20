import { motion } from 'framer-motion'
import { FadeInUp, ScaleIn, SectionHeading } from '../ui/AnimatedSection'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'

// ============================================================
// PROJECTS DATA — Replace with your actual projects!
// ============================================================
const projects = [
  {
    id: 1,
    title: 'PrepAi - AI-Powered Interview Prep Platform',
    description: 'A full-stack web application built with React and Node.js that provides AI-driven interview preparation. It features personalized question generation, real-time feedback, and a user-friendly interface to help candidates practice and improve their interview skills effectively.',
    image: '/project1.png', // Add: '/project1.png' — put image in /public folder
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#', // Replace with your live URL
    githubUrl: 'https://github.com/govind-codes-byte/PrepAi', // Replace with your GitHub URL
    featured: true,
    color: '#00FFB2',
  },
  {
    id: 2,
    title: 'Serve Now - Smart-Service-Booking-Platform',
    description: 'A Python-based backend service with REST API. Built using Flask and PostgreSQL, it provides robust data management and secure authentication. The service is designed for scalability and performance, making it ideal for handling complex applications and large datasets.',
    image: '/project2.png',
    tags: ['Python', 'Flask', 'MongoDB'],
    liveUrl: 'https://smart-service-booking-seven.vercel.app/',
    githubUrl: 'https://github.com/govind-codes-byte/smart-service-booking',
    featured: true,
    color: '#7C3AED',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A responsive front-end application with modern UI. Replace this with your actual project description.',
    image: null,
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    color: '#F59E0B',
  },
  // {
  //   id: 4,
  //   title: 'Project Four',
  //   description: 'A MongoDB-backed CRUD application with full authentication. Replace with your actual description.',
  //   image: null,
  //   tags: ['Express', 'MongoDB', 'JWT'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   featured: false,
  //   color: '#EC4899',
  // },
  // {
  //   id: 5,
  //   title: 'Project Five',
  //   description: 'A static website with advanced CSS animations and interactions. Replace with your actual description.',
  //   image: null,
  //   tags: ['HTML', 'CSS', 'JavaScript'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   featured: false,
  //   color: '#06B6D4',
  // },
  // {
  //   id: 6,
  //   title: 'Project Six',
  //   description: 'A data visualization dashboard. Replace this with your actual project description.',
  //   image: null,
  //   tags: ['Python', 'React', 'Chart.js'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   featured: false,
  //   color: '#10B981',
  // },
]

// Gradient placeholder image when no actual image is provided
const PlaceholderImage = ({ color, title }) => (
  <div
    className="w-full h-full flex items-center justify-center relative overflow-hidden"
    style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)` }}
  >
    {/* Grid pattern */}
    <div className="absolute inset-0 grid-pattern opacity-30" />
    {/* Center icon */}
    <div className="relative flex flex-col items-center gap-3">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{ background: `${color}20`, border: `1px solid ${color}30` }}
      >
        <HiCode size={28} style={{ color }} />
      </div>
      <p className="font-mono text-xs text-white/30">{title}</p>
    </div>
    {/* Corner decoration */}
    <div
      className="absolute top-4 right-4 w-8 h-8 rounded-full opacity-20"
      style={{ background: color }}
    />
    <div
      className="absolute bottom-4 left-4 w-4 h-4 rounded-full opacity-10"
      style={{ background: color }}
    />
  </div>
)

// Project card component
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="glass-card rounded-2xl overflow-hidden border border-white/5 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, borderColor: `${project.color}30` }}
    >
      {/* Image area */}
      <div className="relative h-48 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <PlaceholderImage color={project.color} title={project.title} />
        )}

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
        >
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 text-white hover:border-primary hover:text-primary transition-colors"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            data-hover
          >
            <HiExternalLink size={18} />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 text-white hover:border-primary hover:text-primary transition-colors"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            data-hover
          >
            <SiGithub size={18} />
          </motion.a>
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span
              className="font-mono text-[10px] px-2 py-1 rounded-full"
              style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}40` }}
            >
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-white text-lg mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="font-body text-white/50 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 pt-4 border-t border-white/5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-body font-medium transition-all duration-300 border"
            style={{
              borderColor: `${project.color}40`,
              color: project.color,
            }}
            data-hover
          >
            <HiExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-body font-medium border border-white/10 text-white/60 hover:border-white/30 hover:text-white transition-all duration-300"
            data-hover
          >
            <SiGithub size={14} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="relative section-padding bg-dark-bg overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="My"
          highlight="Projects"
          description="A selection of projects I've built. More on my GitHub."
        />

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <FadeInUp delay={0.3}>
          <div className="text-center mt-12">
            <motion.a
              href="https://github.com/govind-codes-byte"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-hover
            >
              <SiGithub size={18} />
              View All on GitHub
            </motion.a>
            {/* ↑ Replace 'yourusername' with your actual GitHub username */}
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

export default Projects
