import { HeroSection } from './subcomponents/HeroSection';

// Top 3 featured projects
const featuredProjects = [
  {
    id: 1,
    title: "Twitter Clone",
    description: "A full-featured social media application with modern architecture that replicates core Twitter functionality and user engagement features.",
    technologies: ["Java", "Spring Boot", "Microservices"],
    iconBg: "#3b82f6",
    iconColor: "#fff",
    codeUrl: "https://github.com/receperdog/twitter-clone-monorepo"
  },
  {
    id: 2,
    title: "FlavorOps",
    description: "DevOps and infrastructure management tool built with C# and ASP.NET Core, focused on streamlining deployment workflows.",
    technologies: ["C#", "ASP.NET Core", "DevOps"],
    iconBg: "#ec4899",
    iconColor: "#fff",
    codeUrl: "https://github.com/receperdog/FlavorOps"
  },
  {
    id: 3,
    title: "Blockchain Voting System",
    description: "A secure and transparent blockchain-based voting system with modular architecture and robust security measures.",
    technologies: ["Java", "Spring Boot", "Blockchain"],
    iconBg: "#8b5cf6",
    iconColor: "#fff",
    codeUrl: "https://github.com/receperdog/blockchain_project_v1.0"
  }
];

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section Preview */}
      <section id="about-preview" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="mb-4">
                I'm a Full Stack Software Engineer with 3 years of experience developing enterprise applications with Java and .NET technologies.
                I have a proven track record in enhancing software reliability, performance, and scalability.
              </p>
              <p className="mb-4">
                I'm proficient in Java and also working with ASP.NET Core technologies.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#about" 
                  className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Learn more about me →
                </a>
                <a 
                  href="/receperdogan.github.io/files/Recep-Erdogan-Resume.pdf"
                  download="Recep_Erdogan_CV.pdf"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <img 
                  src="./images/profile.jpg" 
                  alt="Recep Erdogan" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Preview */}
      <section id="projects-preview" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Featured Projects</h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
            Showcasing my work in both Java and C#/.NET development environments
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards with real data */}
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative">
                  <div className="flex items-center justify-center w-full h-full">
                    <div 
                      className="text-5xl font-bold w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: project.iconBg, color: project.iconColor }}
                    >
                      {project.title.charAt(0)}
                    </div>
                    
                    {project.technologies.includes("Java") && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        Java
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className={`inline-block px-2 py-1 text-xs rounded 
                          ${tech === "Java" || tech === "Spring Boot" || tech === "Spring Transactions" || tech === "Microservices"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" 
                            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="#projects" 
              className="inline-block px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Preview */}
      <section id="contact-preview" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            I'm always open to discussing software development opportunities and collaborations.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </>
  );
} 