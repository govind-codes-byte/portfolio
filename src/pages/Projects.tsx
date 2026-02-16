import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Expense Tracker",
      description: "A real-time expense tracking app to manage daily spending.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Password Strength Checker",
      description: "Python program that evaluates password strength.",
      tech: ["Python"],
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind.",
      tech: ["React", "Tailwind"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 dark:text-white">
      
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >
        My Projects
      </motion.h1>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">
              {project.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-green-600 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </motion.div>

        ))}
      </div>
    </div>
  );
}

export default Projects;
