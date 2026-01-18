export function AboutPage() {
  const skills = {
    "Backend": [
      ".NET Core / ASP.NET Core",
      "Java / Spring Boot",
      "C#",
      "RESTful APIs",
      "SOAP Services",
      "Microservices Architecture"
    ],
    "Frontend": [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML/CSS"
    ],
    "Databases": [
      "SQL Server",
      "PostgreSQL",
      "Oracle SQL / PL/SQL",
      "Redis",
      "Cassandra"
    ],
    "Cloud & DevOps": [
      "Azure Cloud",
      "Docker",
      "CI/CD Pipelines",
      "Git / GitHub",
      "Azure DevOps",
      "Jenkins"
    ],
    "Messaging & Integration": [
      "Kafka / Event Hub",
      "Hazelcast",
      "WebSockets"
    ],
    "Observability & Testing": [
      "Datadog",
      "JUnit / Mockito",
      "Unit Testing",
      "Integration Testing"
    ]
  };

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          
          {/* Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700 mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Software engineer with <strong>3 years of professional experience</strong> focused on high-scale distributed systems and performance optimization. Expert in building resilient backend architectures, migrating multi-decade legacy systems to modern cloud-native stacks, and driving engineering excellence through observability, automated testing, and agentic coding workflows.
            </p>
          </div>
          
          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">30x</div>
              <div className="text-gray-600 dark:text-gray-400">Performance Improvement</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">90%+</div>
              <div className="text-gray-600 dark:text-gray-400">Test Coverage</div>
            </div>
          </div>
          
          {/* Technical Skills */}
          <h3 className="text-2xl font-bold mb-6 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div 
                key={category}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{category}</h4>
                <ul className="space-y-2">
                  {items.map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Download CV */}
          <div className="text-center mt-12">
            <a 
              href="/files/Recep_Erdogan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Full CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
