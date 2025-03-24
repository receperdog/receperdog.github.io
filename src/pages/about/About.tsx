export function AboutPage() {
  // Define values/attributes
  const keyValues = [
    { value: "Passion", category: "Professional" },
    { value: "Hard Work", category: "Professional" },
    { value: "Coding", category: "Professional" },
    { value: "Creativity", category: "Professional" },
    { value: "Human Rights", category: "Personal" },
    { value: "Respect", category: "Personal" },
    { value: "Diversity Advocacy", category: "Personal" },
    { value: "Inclusion", category: "Personal" },
    { value: "Empathy", category: "Personal" },
    { value: "Ethical Mindset", category: "Personal" },
    { value: "Cultural Awareness", category: "Personal" },
    { value: "Open-Mindedness", category: "Personal" },
    { value: "Collaboration", category: "Professional" },
    { value: "Inspiration", category: "Professional" },
    { value: "Social Responsibility", category: "Personal" },
    { value: "Sustainability", category: "Personal" },
    { value: "Positive Impact", category: "Personal" }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-16 text-center">About Me</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">Recep Erdogan</h2>
            <h3 className="text-xl text-blue-600 dark:text-blue-400 mb-6">Full Stack Software Engineer</h3>
            <p className="mb-4">
              I am a software engineer with a passion for building reliable, scalable, and maintainable applications. With 3 years of professional experience, I have developed expertise in Java-based backend systems and modern frontend frameworks.
            </p>
            <p className="mb-4">
              <span className="font-semibold">Technical focus:</span> I'm proficient in Java and also working with ASP.NET Core technologies.
            </p>
            <div className="mb-6">
              <a 
                href="/files/Recep-Erdogan-Resume.pdf"
                download="Recep_Erdogan_CV.pdf"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download CV
              </a>
            </div>
            <p className="mb-4">
              My experience includes working on large-scale enterprise applications, implementing efficient database solutions, and developing RESTful APIs. I'm particularly interested in cloud-native architectures and distributed systems.
            </p>
            <p>
              I am continuously learning and improving my skills, staying up-to-date with the latest industry trends and best practices in software engineering.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-600">
              <img 
                src="./images/profile.jpg" 
                alt="Recep Erdogan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Key Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">My Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {keyValues.map((item, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg shadow-md text-center ${
                  item.category === 'Professional' 
                    ? 'bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800' 
                    : 'bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800'
                }`}
              >
                <p className="font-medium">{item.value}</p>
                <span className={`text-xs px-2 py-1 rounded-full mt-2 inline-block ${
                  item.category === 'Professional' 
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100' 
                    : 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100'
                }`}>
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Guidance */}
        <div className="mb-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-100 dark:border-blue-800">
          <h2 className="text-2xl font-bold mb-4 text-center">Explore My Projects</h2>
          <p className="text-center mb-4">
            Visit the <a href="#projects" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Projects</a> section to see my complete portfolio.
          </p>
          <p className="text-center">
            You can click on technology tags to learn more about specific projects built with Java, Spring Boot, Microservices, and other technologies including C# and ASP.NET Core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science & Engineering</h3>
              <p className="text-gray-600 dark:text-gray-300">Akdeniz University</p>
              <p className="text-gray-600 dark:text-gray-300">2018 - 2023</p>
              <p className="mt-4">
                Focused on software engineering, data structures, algorithms, and distributed systems.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold">Mid-Level Software Engineer</h3>
                <p className="text-gray-600 dark:text-gray-300">SunExpress</p>
                <p className="text-gray-600 dark:text-gray-300">Nov 2024 - Present</p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-sm">
                  <li>Developing backend and frontend features for aviation business processes</li>
                  <li>Orchestrating migration from legacy systems to microservices architecture</li>
                  <li>Integrating GraphQL with both microservices and legacy projects</li>
                  <li>Developing web and mobile UIs using React and React Native</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold">Mid-Level Java Backend Developer</h3>
                <p className="text-gray-600 dark:text-gray-300">Ericsson</p>
                <p className="text-gray-600 dark:text-gray-300">Oct 2023 - Nov 2024</p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-sm">
                  <li>Developed and maintained unit and integration tests for SOAP-based Adapters</li>
                  <li>Designed and implemented the Turkcell invoice settings microservice</li>
                  <li>Implemented Kafka for asynchronous communication between microservices</li>
                  <li>Employed Redis for effective session management across distributed services</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold">Java Backend Developer</h3>
                <p className="text-gray-600 dark:text-gray-300">Turkcell (Atmosware)</p>
                <p className="text-gray-600 dark:text-gray-300">Feb 2023 - Sep 2023</p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-sm">
                  <li>Led database performance tuning initiative resulting in 50%+ improvement</li>
                  <li>Developed notification system for content providers</li>
                  <li>Authored complex PL/SQL scripts for data-driven recommendations</li>
                  <li>Implemented caching mechanisms using Hazelcast</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Backend</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Java & Spring Boot</li>
                <li>C# & ASP.NET Core</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>Microservices</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>React</li>
                <li>React Native</li>
                <li>TypeScript</li>
                <li>Blazor</li>
                <li>JavaScript/HTML/CSS</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Databases</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Oracle SQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Cassandra</li>
                <li>Redis</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4">DevOps & Cloud</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Docker & Kubernetes</li>
                <li>CI/CD Pipelines</li>
                <li>Azure</li>
                <li>Git</li>
                <li>Jenkins</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Messaging & Integration</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Kafka</li>
                <li>RabbitMQ</li>
                <li>WebSockets</li>
                <li>SOAP</li>
                <li>Hazelcast</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Methodologies</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Agile/Scrum</li>
                <li>TDD</li>
                <li>Clean Architecture</li>
                <li>Domain-Driven Design</li>
                <li>Microservices Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 