function Skills() {
  const skills = {
    Frontend: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
    Backend: ["Node.js", "Express"],
    Database: ["MongoDB", "MySQL"],
    Tools: ["Git", "GitHub", "VS Code", "Vite"],
  };

  return (
<div className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-12">
        My Skills
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-4">{category}</h2>

            <div className="flex flex-wrap gap-3">
              {items.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-black hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
