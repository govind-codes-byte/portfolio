import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <section
      className="min-h-[85vh] flex items-center justify-center 
    bg-white dark:bg-gray-900 text-black dark:text-white px-6"
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm <span className="text-blue-600">Govind</span>
        </h1>

        {/* Typing Effect */}
        <div className="mt-4 text-xl font-medium text-gray-600 dark:text-gray-300">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Problem Solver",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          I build modern, fast, and scalable web applications using React,
          Node.js, and modern tools.
        </p>

        <button className="mt-8 px-6 py-3 bg-black text-white rounded-xl hover:scale-105 transition">
          View Projects
        </button>
        
        <a
          href="/resume.pdf"
          download
          className="mt-8 px-6 py-3 bg-black text-white rounded-xl hover:scale-105 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Home;
