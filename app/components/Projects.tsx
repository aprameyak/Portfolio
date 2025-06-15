'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  githubLink: string;
  demoLink?: string;
  techStack: string[];
  image?: string;
}

const projects: Project[] = [
  {
    title: "Play2Learn",
    description: "Created an educational gaming platform that uses AI to generate personalized learning content. Integrated GPT-4 to adapt questions based on student performance, resulting in 40% better engagement.",
    githubLink: "https://github.com/aprameyak/Play2Learn",
    demoLink: "https://play2learn-ten.vercel.app/",
    techStack: ["Next.js", "TypeScript", "Node.js", "AWS Lambda", "AWS API Gateway", "OpenAI GPT-4", "Firebase Auth", "TailwindCSS"]
  },
  {
    title: "DataVision",
    description: "Built an AI platform that transforms raw data into business insights. Uses advanced AI (LangGraph, Gemini) to automate data analysis, generate statistical insights, and create publication-quality visualizations.",
    githubLink: "https://github.com/aprameyak/DataVision",
    demoLink: "https://www.data-vision.tech",
    techStack: ["Python", "Flask", "LangGraph", "Gemini API", "Pandas", "SciPy", "Matplotlib", "Seaborn", "TypeScript", "Next.js", "TailwindCSS", "Gunicorn", "Nginx", "Azure"]
  },
  {
    title: "GitaGPT",
    description: "Built an AI chatbot that answers questions about the Bhagavad Gita with 98% accuracy. Used advanced AI techniques (RAG, GPT-4) to process 700+ verses and deliver context-aware responses in under 300ms.",
    githubLink: "https://github.com/aprameyak/GitaGPT",
    demoLink: "https://gita-gpt-two.vercel.app/",
    techStack: ["Python", "FastAPI", "Next.js", "FAISS", "OpenAI API", "Vercel", "Render"]
  },
  {
    title: "ResuMaker",
    description: "Built an AI-powered resume builder that helps users create professional resumes in minutes. Uses GPT to generate impactful job descriptions and provides real-time feedback on resume strength.",
    githubLink: "https://github.com/aprameyak/ResuMaker",
    demoLink: "https://resumaker-six.vercel.app",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Vercel", "API Routes"]
  },
  {
    title: "GitRecap",
    description: "Created a GitHub analytics dashboard that visualizes coding patterns and productivity. Features include commit analysis, language distribution, and AI-powered insights into coding habits.",
    githubLink: "https://github.com/aprameyak/GitRecap",
    techStack: ["Next.js", "Flask", "Python", "Chart.js", "GitHub API", "TextBlob", "TailwindCSS", "React Calendar Heatmap"]
  },
  {
    title: "FitSync",
    description: "Developed a fitness app that uses AI to create personalized workout plans. Features include real-time progress tracking, nutrition analysis, and AI coaching that adapts to user performance.",
    githubLink: "https://github.com/aprameyak/FitSync",
    techStack: ["TypeScript", "Next.js", "Node.js", "Express.js", "MongoDB", "OpenAI API"]
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16 gradient-text"
      >
        Featured Projects
      </motion.h2>
      
      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Project Card */}
            <motion.div
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-surface/80 rounded-xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 backdrop-blur-sm border border-primary/5 hover:border-primary/10"
            >
              <div className="flex flex-col space-y-4">
                {/* Title and Links */}
                <div className="flex justify-between items-start">
                  <motion.h3 
                    className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-primary transition-colors"
                    >
                      GitHub
                    </a>
                    {project.demoLink && (
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-primary transition-colors"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <motion.p 
                  className="text-text-muted"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div 
                  className="flex flex-wrap gap-2 pt-4 border-t border-primary/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {project.techStack.map((tech, i) => (
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
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects; 
