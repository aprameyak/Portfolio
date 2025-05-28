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
    description: "A production-ready backend service built with Java, Spring Boot, and PostgreSQL that provides robust CRUD endpoints for managing users and their associated music tracks. Features clean architecture, JPA-based entity relationships with @OneToMany + @ManyToOne mappings, Docker containerization, and cloud deployment on Render with a publicly accessible API. Implements JSON serialization with cycle prevention, modular architecture (Controller → Service → Repository), and cloud-hosted PostgreSQL for persistent storage.",
    githubLink: "https://github.com/aprameyak/TrackNest",
    demoLink: "https://tracknest-i73t.onrender.com",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "JPA/Hibernate", "Maven", "Docker", "Postman", "Render"]
  },
  {
    title: "OutageOrNot",
    description: "A full-stack application that predicts power outage risks across U.S. states using real-time weather data and AI analysis. Built with Python, Flask, Next.js, and OpenAI, it combines National Weather Service data with machine learning to provide instant power outage risk assessments. Features include real-time weather data fetching, AI-powered risk analysis using GPT models, state-based location targeting, and comprehensive weather data analysis including temperature trends, wind conditions, precipitation probability, and severe weather alerts.",
    githubLink: "https://github.com/aprameyak/OutageOrNot",
    techStack: ["Python", "Flask", "Next.js", "React", "Tailwind CSS", "OpenAI API", "National Weather Service API", "TypeScript"]
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
    description: "A sophisticated real-time emotion recognition system built as a Chrome extension, leveraging multiple state-of-the-art facial recognition models (VGG-Face, FaceNet, DeepID, ArcFace). Features include real-time screen capture and analysis, emotion classification across 7 categories, and canvas-based visualization overlays. Implements an asynchronous architecture with Flask backend for processing and Chrome Extension APIs (Manifest V3) for seamless integration. Uses RequestAnimationFrame for smooth rendering and efficient Base64 encoding for image transfer.",
    githubLink: "https://github.com/aprameyak/Pathos",
    techStack: ["React.js", "Python", "Flask", "DeepFace", "Chrome Extension API", "OpenCV", "Canvas API", "NumPy"]
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
    description: "A Spotify Wrapped-style analytics dashboard for GitHub profiles, built for HooHacks 2025. Features include weekly commit pattern visualization, language distribution analysis, commit time heatmaps, and developer personality classification (Night Owl, Weekend Warrior, etc.). Implements real-time GitHub API integration with rate limiting, interactive Chart.js visualizations, and sentiment analysis of commit messages. The dashboard provides comprehensive insights including contribution calendars, top repositories by stars, and 24-hour activity patterns.",
    githubLink: "https://github.com/aprameyak/GitRecap",
    demoLink: "https://gitrecap.vercel.app",
    techStack: ["Next.js", "Flask", "Python", "Chart.js", "GitHub API", "TextBlob", "TailwindCSS", "React Calendar Heatmap"]
  },
  {
    title: "ResuMaker",
    description: "A dynamic web application that streamlines professional resume creation with AI-powered assistance. Features include dynamic form fields for experience and education, AI-enhanced work description generation using OpenAI API, serverless architecture with Next.js API routes, and comprehensive form validation. The application helps users craft impactful bullet points for their job roles while maintaining a responsive and user-friendly interface.",
    githubLink: "https://github.com/aprameyak/ResuMaker",
    demoLink: "https://resumaker-six.vercel.app/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Vercel", "React.js", "API Routes"]
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
  },
  {
    title: "House Price Predictor",
    description: "A machine learning project using linear regression to predict housing prices with feature engineering and data preprocessing pipeline. Implements categorical variable handling, feature scaling, and comprehensive data cleaning. Features include binary categorical field mapping, furnishing status conversion, and model evaluation using R² score metrics.",
    githubLink: "https://github.com/aprameyak/HousePricePrediction",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"]
  },
  {
    title: "Visualizing Music Streams",
    description: "A data analysis project exploring correlations between track scores and playlist counts across major streaming platforms (Apple Music, Amazon Music, Deezer) using Pearson's correlation coefficient. Features comprehensive data preprocessing, missing value handling, and statistical analysis visualized through Matplotlib line plots. The analysis provides insights into how track popularity correlates with playlist exposure across different streaming services.",
    githubLink: "https://github.com/aprameyak/VisualizingMusicStreams",
    techStack: ["Python", "Pandas", "SciPy", "Matplotlib", "Statistical Analysis", "Data Visualization"]
  },
  {
    title: "CurrencyX Analyzer",
    description: "A sophisticated financial analysis tool for USD/TRY exchange rates utilizing advanced statistical modeling. Features include GARCH(1,1) volatility modeling, EWMA volatility estimation, and trading strategy simulation with performance metrics (Sharpe/Sortino Ratios). Implements real-time data fetching via Yahoo Finance API and comprehensive visualization of market trends, volatility clustering, and forecasted values.",
    githubLink: "https://github.com/aprameyak/CurrencyXAnalyzer",
    techStack: ["Python", "Pandas", "yfinance", "ARCH", "Matplotlib", "Seaborn", "NumPy", "Statistical Modeling"]
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
              transition: { duration: 0.3 }
            }}
            className="group relative bg-surface/80 rounded-xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-primary/10 overflow-hidden"
            onMouseEnter={() => setHoveredProject(project.title)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Animated gradient border */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-light/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent group-hover:from-primary-light group-hover:to-primary transition-all duration-300"
              >
                {project.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-text-muted mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300"
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
                    whileHover={{ 
                      scale: 1.1,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    className="px-3 py-1 text-sm bg-primary/5 text-primary-light rounded-full hover:bg-primary/10 transition-all duration-300 transform hover:shadow-lg hover:shadow-primary/20"
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
                className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
                </svg>
                <span className="relative">
                  GitHub
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </span>
              </motion.a>
              {project.demoLink && (
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="relative">
                    Demo
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
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
