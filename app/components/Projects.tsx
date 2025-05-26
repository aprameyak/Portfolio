'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  githubLink: string;
  demoLink?: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "GitaGPT",
    description: "A full-stack RAG chatbot leveraging GPT-4, FAISS, and FastAPI to answer semantic queries over 700+ Bhagavad Gita verses. Features include an ETL pipeline for scripture data embedding, sub-300ms similarity retrieval, and a RESTful API integrated with OpenAI GPT-4 for context-aware answers. Deployed with Next.js on Vercel and backend on Render with secure environment variable handling.",
    githubLink: "https://github.com/aprameyak/GitaGPT",
    demoLink: "https://gitagpt.vercel.app",
    techStack: ["Python", "FastAPI", "Next.js", "FAISS", "OpenAI API", "Vercel", "Render"]
  },
  {
    title: "FitSync",
    description: "A comprehensive fitness tracking application built with the MERN stack, featuring workout logging, nutrition tracking, and training goals with real-time sync. Implements JWT authentication, progressive overload tracking, BMR-based calorie analysis, and personalized AI coaching using OpenAI GPT. Deployed with CI/CD pipelines on Render and Vercel.",
    githubLink: "https://github.com/aprameyak/FitSync",
    demoLink: "https://fitsync.vercel.app",
    techStack: ["TypeScript", "Next.js", "Node.js", "Express.js", "MongoDB", "OpenAI API"]
  },
  {
    title: "TrackNest",
    description: "A lightweight backend project built with Java Spring Boot and PostgreSQL that provides CRUD endpoints for managing users and their associated music tracks. Features clean architecture, JPA-based entity relationships, and real database integration — ideal as a boilerplate for music cataloging or backend microservices.",
    githubLink: "https://github.com/aprameyak/TrackNest",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "JPA", "Maven", "Postman", "Hibernate", "REST API"]
  },
  {
    title: "ScoreMe",
    description: "A machine learning-powered web application that predicts student exam scores with 98.8% accuracy using linear regression. Features include real-time score predictions through a Flask API, comprehensive data analysis with Pandas and Matplotlib, and an interactive React.js frontend for dynamic user input and feedback. The model is trained on Kaggle student performance data and efficiently deployed using Pickle serialization.",
    githubLink: "https://github.com/aprameyak/ScoreMe",
    techStack: ["Python", "Flask", "React.js", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"]
  },
  {
    title: "Stock Price Emailer",
    description: "A serverless application that delivers automated daily stock price updates using AWS services. Features include real-time stock data fetching via Yahoo Finance API, automated email delivery through AWS SES, and scheduled execution using AWS EventBridge. Implements secure IAM policies and Lambda functions with custom layers for efficient dependency management. The system runs autonomously on a 24-hour schedule, providing reliable stock price monitoring for specified tickers.",
    githubLink: "https://github.com/aprameyak/StockPriceEmailer",
    techStack: ["Node.js", "AWS Lambda", "AWS SES", "AWS EventBridge", "AWS IAM", "Yahoo Finance API"]
  },
  {
    title: "Pathos",
    description: "A hackathon project from Hack NYU 2025 that simplifies emotions for neurodivergent individuals. Features an intuitive interface for emotion recognition and management, making emotional understanding more accessible.",
    githubLink: "https://github.com/aprameyak/Pathos",
    techStack: ["JavaScript", "React", "Node.js"]
  },
  {
    title: "Play2Learn",
    description: "An educational gaming platform utilizing serverless architecture with AWS Lambda for dynamic content generation. Implements complex state management for three distinct arcade-style games, integrates GPT-4 for adaptive question generation, and features real-time scoring systems.",
    githubLink: "https://github.com/aprameyak/Play2Learn",
    demoLink: "https://play2learn-ten.vercel.app/",
    techStack: ["React.js", "Next.js", "TypeScript", "Node.js", "AWS Lambda", "OpenAI GPT-4", "Firebase Auth", "TailwindCSS"]
  },
  {
    title: "GitRecap",
    description: "A dynamic analytics dashboard that visualizes GitHub user activity and repository statistics in real-time.",
    githubLink: "https://github.com/aprameyak/GitRecap",
    demoLink: "https://gitrecap.vercel.app",
    techStack: ["React", "TypeScript", "D3.js", "GitHub API", "Vercel", "TailwindCSS"]
  },
  {
    title: "ResuMaker",
    description: "A dynamic resume generation system featuring AI-enhanced content optimization, real-time form validation, and complex state management for multi-section resume building. Implements TypeScript for type-safe development and server-side rendering for optimal performance.",
    githubLink: "https://github.com/aprameyak/ResuMaker",
    demoLink: "https://resumaker-six.vercel.app/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Vercel"]
  },
  {
    title: "Flashcard Generator",
    description: "An AI-powered study tool that transforms text input into optimized flashcards using GPT-3.5. Features intelligent content parsing, automated question generation, and spaced repetition algorithms for enhanced learning effectiveness.",
    githubLink: "https://github.com/aprameyak/FlashcardGenerator",
    demoLink: "https://flashcards-dusky-nine.vercel.app/",
    techStack: ["React.js", "Next.js", "TypeScript", "OpenAI GPT-3.5", "Vercel", "TailwindCSS"]
  },
  {
    title: "CV Rekognition",
    description: "An advanced image analysis system leveraging AWS Rekognition for object detection and labeling. Implements secure S3 integration, IAM role management, and automated confidence scoring for detected objects with local execution capabilities.",
    githubLink: "https://github.com/aprameyak/ComputerVisionRekognition",
    techStack: ["Python", "AWS Rekognition", "AWS S3", "AWS IAM", "AWS SDK", "Boto3", "OpenCV"]
  },
  {
    title: "User Management System",
    description: "A comprehensive user management system featuring secure authentication, role-based access control, and user profile management capabilities. Implements secure password hashing, JWT authentication, and real-time data updates.",
    githubLink: "https://github.com/aprameyak/UserManagementSystem",
    demoLink: "https://user-management-system-phi.vercel.app/",
    techStack: ["React.js", "Python", "AWS API Gateway", "AWS Lambda", "AWS DynamoDB"]
  },
  {
    title: "Car Safety Classifier",
    description: "A machine learning classification system achieving 94.6% accuracy through ensemble methods combining random forest (100 decision trees) and k-nearest neighbors algorithms. Features comprehensive data preprocessing and statistical analysis visualization.",
    githubLink: "https://github.com/aprameyak/CarSafetyClassifier",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Seaborn", "Matplotlib", "Jupyter"]
  },
  {
    title: "Notes App",
    description: "A full-stack note-taking application utilizing AWS Amplify's comprehensive cloud services. Implements secure user authentication, GraphQL API for data operations, and cloud storage for media files with real-time synchronization.",
    githubLink: "https://github.com/aprameyak/NotesApp",
    demoLink: "https://main.d1ztm9vf7wa50r.amplifyapp.com/",
    techStack: ["React.js", "AWS Amplify", "GraphQL API", "AWS Storage", "AWS Auth"]
  },
  {
    title: "Stock Up",
    description: "A real-time pantry management system implementing CRUD operations with Firebase Firestore. Features instant updates through cloud synchronization and responsive design for mobile accessibility.",
    githubLink: "https://github.com/aprameyak/StockUp",
    demoLink: "https://pantryapp-iota.vercel.app/",
    techStack: ["JavaScript", "HTML5", "CSS3", "Firebase Firestore", "Google Cloud Platform", "Clerk Auth"]
  },
  {
    title: "Breaking Bad Quote Generator",
    description: "An interactive quote generation application featuring API integration, dynamic content rendering, and responsive design principles for optimal user experience.",
    githubLink: "https://github.com/aprameyak/BreakingBadQuoteGenerator",
    demoLink: "https://breakingbadquotes-puce.vercel.app/",
    techStack: ["React.js", "JavaScript", "Breaking Bad API", "Vercel", "CSS3"]
  },
  {
    title: "Sea Shooter",
    description: "A submarine-themed arcade game inspired by Space Invaders, built with Java AWT and Swing. Features smooth 2D animation with double buffering, responsive keyboard controls, enemy waves with varied movement patterns, and increasing difficulty scaling.",
    githubLink: "https://github.com/aprameyak/SeaShooter",
    techStack: ["Java", "AWT", "Swing", "Game Development", "Object-Oriented Design", "Graphics2D"]
  },
  {
    title: "Data Structures",
    description: "A comprehensive implementation of core data structures with clean, object-oriented design. Includes Graph, Linked Lists, ArrayList, Binary Tree, Queue, Stack, Map, Set, and Heap implementations with common operations built from scratch for educational clarity.",
    githubLink: "https://github.com/aprameyak/DataStructures",
    techStack: ["Java", "Data Structures", "Object-Oriented Design", "Algorithms", "JUnit Testing"]
  },
  {
    title: "Blog App",
    description: "A full-featured blog application built with Django's MVC architecture. Features blog post management, comment system, built-in admin interface, and SEO-friendly URLs. Implements clean and structured interface for content management.",
    githubLink: "https://github.com/aprameyak/BlogApp",
    techStack: ["Python", "Django", "MVC Architecture", "HTML", "CSS", "SQLite", "Django Templates"]
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const techStackVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 gradient-text"
      >
        Featured Projects
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="bg-surface/80 rounded-xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 backdrop-blur-sm flex flex-col h-full border border-primary/5 hover:border-primary/10"
            onMouseEnter={() => setHoveredProject(project.title)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="flex-grow">
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"
              >
                {project.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-text-muted mb-6"
              >
                {project.description}
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                variants={techStackVariants}
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
            <motion.div 
              className="flex gap-4 mt-auto pt-4 border-t border-primary/5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
                </svg>
                GitHub
              </motion.a>
              {project.demoLink && (
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-primary transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Demo
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects; 
