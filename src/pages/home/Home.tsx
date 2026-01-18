import { HeroSection } from './subcomponents/HeroSection';

// Experience data from CV
const experiences = [
  {
    id: 1,
    company: "SunExpress",
    companyUrl: "https://www.sunexpress.com",
    role: "Software Engineer",
    location: "Antalya, Turkey",
    period: "Nov 2024 - Present",
    highlights: [
      "Reduced P95 latency from 45s to 1.5s via DB connection pool refactoring, indexing, and heap memory refinement",
      "Led end-to-end migration of 10-year legacy .NET modules to ASP.NET Core; modernized modules now handle the highest traffic volume",
      "Established a robust testing framework by implementing comprehensive unit and integration tests for mission-critical services",
      "Integrated Datadog for real-time log tracking and spearheaded company-wide AI PoCs and GitHub Copilot integration",
      "Managed migration of repositories from Azure DevOps to GitHub with institutionalized code review processes"
    ],
    techStack: ["Azure Cloud", ".NET Core", "C#", "SQL Server", "PostgreSQL", "Managed Redis", "Event Hub (Kafka)", "TypeScript", "React", "Datadog"]
  },
  {
    id: 2,
    company: "Ericsson",
    companyUrl: "https://www.ericsson.com",
    role: "Software Engineer",
    location: "Antalya, Turkey",
    period: "Oct 2023 - Nov 2024",
    highlights: [
      "Transitioned 20-year legacy MVC billing settings into scalable microservices using modern architecture",
      "Orchestrated SOAP-to-REST transition using the Adapter Pattern for seamless legacy protocol communication",
      "Maintained 90%+ test coverage by developing extensive unit and integration tests for SOAP-based adapters"
    ],
    techStack: ["Java", "Spring Boot", "SOAP/REST", "Kafka", "Redis", "JUnit", "Mockito", "Jenkins"]
  },
  {
    id: 3,
    company: "Turkcell (Atmosware)",
    companyUrl: "https://www.turkcell.com.tr",
    role: "Software Engineer",
    location: "Antalya, Turkey",
    period: "Feb 2023 - Sep 2023",
    highlights: [
      "Refactored complex PL/SQL scripts, reducing scheduled job execution time from 5 hours to 30 minutes",
      "Improved query performance by 50% through advanced tuning and index redesign for high-traffic systems",
      "Improved data reliability by implementing Quartz jobs for database updates and maintaining rigorous testing standards"
    ],
    techStack: ["Java", "Spring Boot", "Oracle SQL", "PL/SQL", "Cassandra", "Hazelcast", "Kafka"]
  }
];

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-center">Experience</h2>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-12">3+ years of professional experience</p>
            
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div 
                  key={exp.id} 
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {exp.company}
                        </a>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">{exp.role}</p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 md:text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    <a 
                      href="https://www.akdeniz.edu.tr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Akdeniz University
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">BSc in Computer Science & Engineering</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 md:text-right">
                  <p>2023</p>
                  <p>Antalya, Turkey</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Relevant Courses:</span> Data Structures & Algorithms, Operating Systems, Database Management Systems, Design Patterns, Software Engineering, Object-Oriented Programming.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            I'm always open to discussing software development opportunities and collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:rerdogan@receperdogan.dev" 
              className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              Contact Info
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
