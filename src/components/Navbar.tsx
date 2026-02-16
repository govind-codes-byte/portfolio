import { useState, useEffect } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 
    bg-white dark:bg-gray-900 dark:text-white shadow-sm">
      
      <h1 className="text-xl font-bold cursor-pointer" onClick={() => scrollTo("home")}>
        Govind.dev
      </h1>

      <div className="flex items-center gap-6 font-medium">
        <button onClick={() => scrollTo("home")}>Home</button>
        <button onClick={() => scrollTo("projects")}>Projects</button>
        <button onClick={() => scrollTo("skills")}>Skills</button>
        <button onClick={() => scrollTo("contact")}>Contact</button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
