'use client';

import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Co-op",
    company: "Lockheed Martin",
    description: "Building enterprise applications for team health dashboards and sprint planning"
  },
  {
    title: "DevOps Engineer",
    company: "Booz Allen Hamilton",
    description: "Architecting cloud infrastructure for CHIP and Medicaid project utilizing generative AI"
  },
  {
    title: "Software Engineer Intern",
    company: "Lockheed Martin",
    description: "Building enterprise applications for team health dashboards and sprint planning"
  },
  {
    title: "Section Leader",
    company: "Stanford University - Code in Place",
    description: "Teaching assistant for CS106A programming fundamentals course"
  },
  {
    title: "Software Engineer",
    company: "Warriors Legacy Care",
    description: "Developed mobile applications for veterans' resource access and support"
  },
  {
    title: "Climate Computing Researcher",
    company: "First Year Innovation and Research Experience",
    description: "Researched climate data analysis and computational methods"
  },
  {
    title: "Software Engineer",
    company: "SynTag",
    description: "Built AI-powered virtual receptionist and customer service solutions"
  },
  {
    title: "Technical Fellow",
    company: "CodePath",
    description: "Mastered data structures and algorithms for software development."
  },
  {
    title: "Software Engineer",
    company: "Minvest Finance",
    description: "Architected cloud infrastructure for a Gen Z investing platform"
  },
  {
    title: "Software Engineer",
    company: "Headstarter AI",
    description: "Developed AI-powered applications with LLM integration"
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
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30" />

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
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10" />

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
                      className="text-2xl font-bold text-primary-light mb-2"
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