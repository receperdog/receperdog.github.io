import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  codeUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Twitter Clone",
    description: "A full-featured social media application that replicates core Twitter functionality with microservices architecture.",
    technologies: ["Java", "Spring Boot", "Microservices", "RESTful APIs"],
    codeUrl: "https://github.com/receperdog/twitter-clone-monorepo"
  },
  {
    id: 2,
    title: "FlavorOps",
    description: "DevOps and infrastructure management tool built with C# and ASP.NET Core, focused on deployment workflows.",
    technologies: ["C#", "ASP.NET Core", "DevOps", "Docker"],
    codeUrl: "https://github.com/receperdog/FlavorOps"
  },
  {
    id: 3,
    title: "Blockchain Voting System",
    description: "A secure and transparent blockchain-based voting system with modular architecture and robust security measures.",
    technologies: ["Java", "Spring Boot", "Blockchain", "Security"],
    codeUrl: "https://github.com/receperdog/blockchain_project_v1.0"
  },
  {
    id: 4,
    title: "Spring Transaction Exploration",
    description: "Explore Spring's @Transactional behavior demonstrating propagation levels and transaction management.",
    technologies: ["Java", "Spring Boot", "Spring Transactions", "JUnit"],
    codeUrl: "https://github.com/receperdog/Spring-Transaction-Exploration"
  },
  {
    id: 5,
    title: "File Manager API",
    description: "Advanced File Management API with efficient file storage, JWT-based security, and robust logging.",
    technologies: ["Java", "Spring Boot", "JWT", "Security"],
    codeUrl: "https://github.com/receperdog/file-manager-api"
  },
  {
    id: 6,
    title: "DataForge",
    description: "A comprehensive Java library offering fundamental data structures and algorithms for educational purposes.",
    technologies: ["Java", "Data Structures", "Algorithms"],
    codeUrl: "https://github.com/receperdog/DataForge"
  },
  {
    id: 7,
    title: ".NET Chronicles",
    description: "Learning journey through .NET technologies featuring ASP.NET Core, Entity Framework, and Blazor implementations.",
    technologies: ["C#", "ASP.NET Core", "Entity Framework", "Blazor"],
    codeUrl: "https://github.com/receperdog/dotnet-chronicles"
  }
];

export function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null);
  
  const technologies = Array.from(
    new Set(projects.flatMap(p => p.technologies))
  ).sort();
  
  const filteredProjects = filter
    ? projects.filter(p => p.technologies.includes(filter))
    : projects;

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
            Open source projects and experiments
          </p>
          
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === null
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              All
            </button>
            {technologies.map(tech => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === tech
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map(project => (
              <div 
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <a 
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* GitHub Link */}
          <div className="text-center mt-12">
            <a 
              href="https://github.com/receperdog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View more on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
