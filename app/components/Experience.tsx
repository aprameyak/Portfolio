'use client';

import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Lockheed Martin",
    period: "May 2025 -- Present",
    location: "Bethesda, Maryland",
    description: [
      "Building a full-stack team health dashboard using JavaScript and REST APIs to replace Tableau workflows, improving sprint planning efficiency",
      "Integrating 3+ performance metrics APIs, reducing dashboard data latency by 45% and enhancing visualization reliability",
      "Collaborating with enterprise operations teams and the Lean-Agile Center of Excellence to design a team health dashboard aligned with organizational KPIs, Jira workflows, and GitLab pipelines"
    ],
    technologies: ["JavaScript", "REST APIs", "Tableau", "Jira", "GitLab", "Agile"]
  },
  {
    title: "Software Engineer",
    company: "Warriors Legacy Care",
    period: "Feb 2025 -- May 2025",
    location: "College Park, Maryland",
    description: [
      "Developed a user-friendly mobile application using React Native and Expo to enhance veterans' access to essential resources",
      "Designed and deployed a scalable backend API using Python with Flask on AWS EC2, integrating PostgreSQL on AWS RDS",
      "Collaborated with a distributed team using Git/GitHub feature branch workflows and Jira for project management"
    ],
    technologies: ["React Native", "Flask", "Docker", "AWS RDS", "PostgreSQL", "AWS EC2", "TypeScript", "Python"]
  },
  {
    title: "Climate Computing Researcher",
    company: "First Year Innovation and Research Experience",
    period: "Jan 2025 -- May 2025",
    location: "College Park, Maryland",
    description: [
      "Conducted independent research in climate computing, focusing on data analysis and computational methods",
      "Collaborated with peers on scientific problem-solving using technology and computational approaches",
      "Gained expertise in Linux systems and Python programming for climate data processing"
    ],
    technologies: ["Python", "Linux", "Data Analysis", "Research Computing"]
  },
  {
    title: "Software Engineer",
    company: "SynTag",
    period: "October 2024 -- November 2024",
    location: "College Park, Maryland",
    description: [
      "Developed NLP-powered virtual receptionist agents hosted on Azure Kubernetes Service using FastAPI and WebSocket",
      "Designed and implemented a responsive landing page using TypeScript, React.js, and Tailwind CSS",
      "Built and deployed AI models for handling customer inquiries and appointment scheduling"
    ],
    technologies: ["React", "FastAPI", "Azure Kubernetes Service", "NLP", "AI/ML", "TypeScript", "Python"]
  },
  {
    title: "Technical Interview Prep Fellow",
    company: "CodePath",
    period: "August 2024 -- November 2024",
    location: "Remote",
    description: [
      "Completed intensive technical interview preparation focusing on data structures and algorithms",
      "Solved weekly coding challenges and participated in live technical practice sessions",
      "Mastered fundamental computer science concepts and problem-solving techniques"
    ],
    technologies: ["Python", "Data Structures", "Algorithms", "Object-Oriented Programming"]
  },
  {
    title: "Software Engineer",
    company: "Minvest Finance",
    period: "July 2024 -- November 2024",
    location: "Sterling, Virginia",
    description: [
      "Architected scalable cloud infrastructure using AWS services (EC2, ECS, ECR) and Docker for a Gen Z investing platform",
      "Developed full-stack features using React.js, Flask, and real-time stock data APIs",
      "Enhanced user engagement through interactive portfolio simulation and educational features"
    ],
    technologies: ["React.js", "Flask", "Docker", "AWS ECS", "AWS EC2", "AWS ECR", "TypeScript", "Python"]
  },
  {
    title: "Software Engineer",
    company: "Headstarter AI",
    period: "July 2024 -- September 2024",
    location: "Remote",
    description: [
      "Built AI-powered applications using Next.js, React, and Firebase",
      "Collaborated on weekly projects focusing on artificial intelligence and web development",
      "Developed and deployed a capstone project showcasing AI integration in web applications"
    ],
    technologies: ["Next.js", "React", "Firebase", "AI", "TypeScript", "Python"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Experience = () => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-4xl font-bold text-center mb-12 gradient-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Professional Experience
      </motion.h2>
      <motion.div 
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="bg-surface/80 rounded-xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 backdrop-blur-sm border border-primary/5 hover:border-primary/10"
          >
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <motion.h3 
                  className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {exp.title}
                </motion.h3>
                <motion.span 
                  className="text-sm text-text-muted"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {exp.period}
                </motion.span>
              </div>
              <div className="flex justify-between items-center">
                <motion.p 
                  className="text-text-muted text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {exp.company}
                </motion.p>
                <motion.p
                  className="text-sm text-text-muted"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {exp.location}
                </motion.p>
              </div>
            </div>
            <motion.ul 
              className="list-disc list-inside space-y-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {exp.description.map((item, i) => (
                <li key={i} className="text-text-muted">{item}</li>
              ))}
            </motion.ul>
            {exp.technologies && (
              <motion.div 
                className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-primary/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
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
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience; 