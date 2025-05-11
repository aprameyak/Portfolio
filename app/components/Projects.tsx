'use client';

import { useState } from 'react';

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
    description: "An AI chatbot that leverages vector database for semantic search across Bhagavad Gita verses.",
    githubLink: "https://github.com/aprameyak/GitaGPT",
    demoLink: "https://gitagpt.vercel.app",
    techStack: ["Next.js", "OpenAI", "FAISS", "TailwindCSS", "Python", "FastAPI"]
  },
  {
    title: "ScoreMe",
    description: "Machine learning to predict exam scores",
    githubLink: "https://github.com/aprameyak/ScoreMe",
    techStack: ["Python", "Machine Learning", "Jupyter", "Pandas", "NumPy", "Scikit-learn"]
  },
  {
    title: "Stock Price Emailer",
    description: "Automation for stock traders",
    githubLink: "https://github.com/aprameyak/StockPriceEmailer",
    techStack: ["JavaScript", "Node.js", "APIs", "Automation"]
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-surface rounded-xl p-6 hover-card transition-all duration-300"
            onMouseEnter={() => setHoveredProject(project.title)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">{project.title}</h3>
            <p className="text-text mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
                aria-label={`View ${project.title} on GitHub`}
              >
                GitHub
              </a>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-surface-light text-text rounded-lg hover:bg-surface transition-colors duration-300"
                  aria-label={`View ${project.title} demo`}
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 
