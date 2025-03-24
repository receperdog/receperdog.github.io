import { useState } from 'react';
import { ProjectItem } from './subcomponents/ProjectItem';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  iconBg: string;
  iconColor: string;
  demoUrl?: string;
  codeUrl?: string;
}

// Real project data from GitHub repositories
const projects: Project[] = [
  {
    id: 1,
    title: "Twitter Clone",
    description: "A full-featured social media application that replicates core Twitter functionality with enhanced user engagement features and a monorepo architecture.",
    technologies: ["Java", "Spring Boot", "RESTful APIs", "Microservices"],
    iconBg: "#3b82f6",
    iconColor: "#fff",
    codeUrl: "https://github.com/receperdog/twitter-clone-monorepo"
  },
  {
    id: 2,
    title: "Spring-Transaction-Exploration",
    description: "Explore Spring's @Transactional behavior through a user management setup, demonstrating propagation levels like REQUIRED and REQUIRES_NEW and transaction management intricacies.",
    technologies: ["Java", "Spring Boot", "Spring Transactions", "JUnit"],
    iconBg: "#10b981",
    iconColor: "#fff",
    codeUrl: "https://github.com/receperdog/Spring-Transaction-Exploration"
  },
  {
    id: 3,
    title: "File Manager API",
    description: "Advanced File Management API built with Spring Boot. Features include efficient file storage, retrieval as bytearray, stringent file restrictions, JWT-based security, and robust logging.",
    technologies: ["Java", "Spring Boot", "JWT", "Security"],
    iconBg: "#6366f1",
    iconColor: "#fff",
    codeUrl: "https://github.com/receperdog/file-manager-api"
  },
  {
    id: 4,
    title: "Blockchain Voting System",
    description: "A secure and transparent blockchain-based voting system implemented with Java Spring Boot, featuring a modular architecture, efficient synchronization, and robust security measures.",
    technologies: ["Java", "Spring Boot", "Blockchain", "Security"],
    iconBg: "#8b5cf6",
    iconColor: "#fff",
    codeUrl: "https://github.com/receperdog/blockchain_project_v1.0"
  },
  {
    id: 5,
    title: "DataForge",
    description: "A comprehensive Java library offering a wide range of fundamental data structures and algorithms, meticulously implemented for educational purposes and software development.",
    technologies: ["Java", "Data Structures", "Algorithms"],
    iconBg: "#f59e0b",
    iconColor: "#fff",
    codeUrl: "https://github.com/receperdog/DataForge"
  },
  {
    id: 6,
    title: "FlavorOps",
    description: "DevOps and infrastructure management tool built with C# and ASP.NET Core, focused on streamlining deployment workflows and containerization.",
    technologies: ["C#", "ASP.NET Core", "DevOps", "Docker"],
    iconBg: "#ec4899",
    iconColor: "#fff",
    codeUrl: "https://github.com/receperdog/FlavorOps"
  },
  {
    id: 7,
    title: "dotnet-chronicles",
    description: "My learning journey through .NET technologies and experiments, featuring ASP.NET Core projects, Entity Framework Core, and Blazor framework implementations.",
    technologies: ["C#", "ASP.NET Core", "Entity Framework", "Blazor"],
    iconBg: "#6d28d9",
    iconColor: "#fff",
    codeUrl: "https://github.com/receperdog/dotnet-chronicles"
  }
];

export function ProjectsPage() {
  // Filter state for technology filters
  const [filters, setFilters] = useState<string[]>([]);

  // Available technology filters based on project data
  const availableTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  // Toggle filter selection
  const toggleFilter = (tech: string) => {
    if (filters.includes(tech)) {
      setFilters(filters.filter(t => t !== tech));
    } else {
      setFilters([...filters, tech]);
    }
  };

  // Filter projects based on selected technologies
  const filteredProjects = filters.length === 0
    ? projects
    : projects.filter(project => 
        filters.some(filter => project.technologies.includes(filter))
      );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
        <p className="text-center max-w-3xl mx-auto mb-6 text-gray-600 dark:text-gray-300">
          I'm proficient in Java and also working with ASP.NET Core technologies.
        </p>
        
        {/* Filter guidance */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8 max-w-3xl mx-auto text-center border border-blue-100 dark:border-blue-800">
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Filter projects by technology:</span> Click on any tag below to see projects using that specific technology. Click multiple tags to refine your search.
          </p>
        </div>
        
        {/* Filter section */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {availableTechnologies.map(tech => (
              <button
                key={tech}
                onClick={() => toggleFilter(tech)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  filters.includes(tech)
                    ? tech === "Java" || tech === "Spring Boot" || tech === "Spring Transactions" || tech === "Microservices"
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800'
                    : tech === "Java" || tech === "Spring Boot" || tech === "Spring Transactions" || tech === "Microservices"
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800' 
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
          {filters.length > 0 && (
            <div className="text-center">
              <button
                onClick={() => setFilters([])}
                className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectItem 
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              iconBg={project.iconBg}
              iconColor={project.iconColor}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
            />
          ))}
        </div>
        
        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl mb-2">No projects match the selected filters</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting different technologies or 
              <button
                onClick={() => setFilters([])}
                className="text-blue-600 dark:text-blue-400 mx-1 hover:underline"
              >
                clear all filters
              </button>
              to see all projects.
            </p>
          </div>
        )}
      </div>
    </section>
  );
} 