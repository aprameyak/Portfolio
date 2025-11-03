'use client';

import { motion, Variants } from 'framer-motion';

interface SkillCategory {
  name: string;
  skills: string[];
  icon?: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "Bash", "HTML/CSS", "JSON", "XML"],
    icon: "💻"
  },
  {
    name: "Databases",
    skills: ["DynamoDB", "MongoDB", "PostgreSQL", "SQLite", "Supabase", "Firebase"],
    icon: "🗃️"
  },
  {
    name: "Frameworks",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Flask", "FastAPI", "SpringBoot", "LangChain", "Tailwind CSS", "JUnit", "Jest", "Pytest"],
    icon: "🛠️"
  },
  {
    name: "DevOps",
    skills: ["AWS", "Docker", "Git", "Azure", "GCP", "GitHub", "GitLab", "Vercel", "Render", "CI/CD", "Postman"],
    icon: "☁️"
  },
  {
    name: "Libraries & Tools",
    skills: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "BeautifulSoup", "Selenium", "Mongoose", "Clerk"],
    icon: "📚"
  },
  {
    name: "Project Management",
    skills: ["Agile", "Scrum", "Kanban", "SAFe", "Jira", "Confluence", "Trello", "Linear", "Notion"],
    icon: "📊"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const categoryVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const skillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3
    }
  }
};

const Skills = () => {
  return (
    <motion.div 
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h2 
        className="text-4xl font-bold text-center mb-12 gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technical Expertise
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={categoryVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="bg-surface/80 rounded-xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 backdrop-blur-sm border border-primary/5 hover:border-primary/10"
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">{category.icon}</span>
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">{category.name}</h3>
            </div>
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={skillVariants}
            >
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: 'rgba(157, 78, 221, 0.15)'
                  }}
                  className="px-3 py-1 text-sm bg-primary/5 text-primary-light rounded-full cursor-default hover:bg-primary/10 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills; 