'use client';

import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Lockheed Martin",
    period: "May 2025 -- Present",
    description: [
      "Built a full-stack team health dashboard using JavaScript and REST APIs to replace Tableau workflows, improving sprint planning efficiency.",
      "Integrated 3+ performance metrics APIs, reducing dashboard data latency by 45% and enhancing visualization reliability.",
      "Collaborated with enterprise operations teams and the Lean-Agile Center of Excellence to design a team health dashboard aligned with organizational KPIs, Jira workflows, and GitLab pipelines."
    ],
    technologies: ["JavaScript", "REST APIs", "Tableau", "Jira", "GitLab", "Agile"]
  },
  {
    title: "Software Engineer",
    company: "Warriors Legacy Care",
    period: "Feb 2025 -- May 2025",
    description: [
      "Modularized 20+ React Native components and centralized Axios API logic, improving reusability and maintainability across key app features by 40%.",
      "Automated CI/CD pipeline using GitHub Actions, Docker, and Pytest, cutting backend deployment time by 90%.",
      "Developed Flask REST API with 10+ routes and SQLAlchemy models to manage veteran health records in AWS RDS."
    ],
    technologies: ["React Native", "Flask", "Docker", "GitHub Actions", "Pytest", "AWS RDS", "SQLAlchemy"]
  },
  {
    title: "Software Engineer",
    company: "Minvest Finance",
    period: "Jul 2024 -- Nov 2024",
    description: [
      "Developed a full-stack paper trading simulator using Flask and React.js with real-time stock data, iterated with team feedback.",
      "Improved trade execution flow and UI responsiveness using React.js hooks and state optimizations, increasing user task completion speed by ~30%.",
      "Deployed Dockerized microservices to AWS ECS, EC2, and ECR, reducing downtime risk with scalable infrastructure.",
      "Shipped gamified trading simulator to beta testers, doubling engagement by integrating real-time stock APIs and dynamic React UI components."
    ],
    technologies: ["React.js", "Flask", "Docker", "AWS ECS", "AWS EC2", "AWS ECR", "Microservices"]
  },
  {
    title: "Section Leader",
    company: "Stanford University",
    period: "2022 - 2023",
    description: [
      "Led weekly live sessions for 30+ students for CS106A, teaching core topics like logic, control flow, and recursion in Python.",
      "Guided students through open-ended project development and real-time coding assignments while addressing complex topics."
    ],
    technologies: ["Python", "Teaching", "Computer Science Fundamentals"]
  },
  {
    title: "Software Engineer",
    company: "Syntag",
    period: "2021 - 2022",
    description: [
      "Developed an AI-powered receptionist platform using React and FastAPI, targeting small businesses like barbershops seeking cost-effective automation solutions",
      "Implemented modern, user-friendly web interfaces to enhance customer acquisition and engagement",
      "Built and deployed NLP-based conversational agents using Azure Kubernetes Service (AKS) for scalable performance",
      "Collaborated on the development of AI models for handling customer inquiries, appointment scheduling, and basic business operations"
    ],
    technologies: ["React", "FastAPI", "Azure Kubernetes Service", "NLP", "AI/ML", "Node.js", "Python"]
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
              <motion.p 
                className="text-text-muted text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {exp.company}
              </motion.p>
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