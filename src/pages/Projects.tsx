import { motion } from "framer-motion";


function Projects() {
  const projects = [
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        >
            title: "Expense Tracker",
            description: "A real-time expense tracking app to manage daily spending.",
            tech: ["React", "Node.js", "MongoDB"],
            github: "#",
            live: "#",
    
    </motion.div>,

    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        >
            title: "Password Strength Checker",
            description: "Python program that evaluates password strength.",
            tech: ["Python"],
            github: "#",
            live: "#",
    </motion.div>,
    
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        >
        title: "Portfolio Website",
            description: "Personal portfolio built with React and Tailwind.",
            tech: ["React", "Tailwind"],
            github: "#",
            live: "#",
    </motion.div>
  ];

  return (
<div className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
        >
        My Projects
      </motion.h1>

        My Projects
     

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">
              {project.title}
            </h2>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 bg-gray-200 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.live}
                className="text-sm font-medium text-green-600 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
