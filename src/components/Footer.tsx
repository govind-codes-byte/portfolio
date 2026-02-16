function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-xl font-semibold mb-2">
          Govind Sharma
        </h2>

        <p className="text-gray-400 mb-4">
          Full Stack Developer
        </p>

        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-gray-300">GitHub</a>
          <a href="#" className="hover:text-gray-300">LinkedIn</a>
          <a href="mailto:yourmail@gmail.com" className="hover:text-gray-300">Email</a>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Govind Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
