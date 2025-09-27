'use client';

import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  description: string;
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "DevOps Engineer",
    company: "Booz Allen Hamilton",
    description: "Architecting cloud infrastructure for CHIP and Medicaid project utilizing generative AI",
    technologies: ["AWS", "RAG", "LLMs"]
  },
  {
    title: "Software Engineer Intern",
    company: "Lockheed Martin",
    description: "Building enterprise applications for team health dashboards and sprint planning",
    technologies: ["Next.js", "Python", "SQL"]
  },
  {
    title: "Section Leader",
    company: "Stanford University - Code in Place",
    description: "Teaching assistant for CS106A programming fundamentals course",
    technologies: ["Logic", "Python", "Control Flow"]
  },
  {
    title: "Software Engineer",
    company: "Warriors Legacy Care",
    description: "Developed mobile applications for veterans' resource access and support",
    technologies: ["Python", "React Native", "PostgreSQL"]
  },
  {
    title: "Climate Computing Researcher",
    company: "First Year Innovation and Research Experience",
    description: "Researched climate data analysis and computational methods",
    technologies: ["Data Analysis", "Linux", "High Performance Computing"]
  },
  {
    title: "Software Engineer",
    company: "SynTag",
    description: "Built AI-powered virtual receptionist and customer service solutions",
    technologies: ["FastAPI", "TailwindCSS", "TypeScript"]
  },
  {
    title: "Technical Fellow",
    company: "CodePath",
    description: "Mastered data structures and algorithms for software development.",
    technologies: ["Python", "Data Structures", "Algorithms"]
  },
  {
    title: "Software Engineer",
    company: "Minvest Finance",
    description: "Architected cloud infrastructure for a Gen Z investing platform",
    technologies: ["AWS", "Docker", "React.js"]
  },
  {
    title: "Software Engineer",
    company: "Headstarter AI",
    description: "Developed AI-powered applications with LLM integration",
    technologies: ["Firebase", "LLMs", "JavaScript"]
  }
];

const Experience = () => {
  return (
    <motion.div 
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-4xl font-bold text-center mb-16 gradient-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10" />

              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-surface/80 rounded-xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 backdrop-blur-sm border border-primary/5 hover:border-primary/10"
                >
                  <div className="mb-4">
                    <motion.h3 
                      className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.p 
                      className="text-text-muted text-lg mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {exp.company}
                    </motion.p>
                    <motion.p 
                      className="text-text-muted mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {exp.description}
                    </motion.p>
                  </div>
                  {exp.technologies && (
                    <motion.div 
                      className="flex flex-wrap gap-2 pt-4 border-t border-primary/5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="px-3 py-1 text-sm bg-primary/5 text-primary-light rounded-full hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience; 