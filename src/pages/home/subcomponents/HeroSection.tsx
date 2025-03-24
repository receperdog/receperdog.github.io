export function HeroSection() {
  return (
    <section id="home" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Recep Erdogan</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Software Engineer specializing in Java backend development and microservices architecture
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
} 