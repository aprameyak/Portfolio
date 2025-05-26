'use client';

import { motion } from 'framer-motion';

interface SkillCategory {
  name: string;
  skills: string[];
  icon?: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "Bash", "HTML/CSS"],
    icon: "💻"
  },
  {
    name: "Frameworks",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Flask", "FastAPI", "LangChain", "Tailwind CSS", "JUnit"],
    icon: "🛠️"
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Git/GitHub", "Jira", "Postman", "Azure", "GCP"],
    icon: "☁️"
  },
  {
    name: "Libraries & Tools",
    skills: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "BeautifulSoup", "Selenium", "Mongoose", "Clerk"],
    icon: "📚"
  },
  {
    name: "Certifications",
    skills: ["AWS Certified Solutions Architect", "AWS Certified Cloud Practitioner"],
    icon: "🏆"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const categoryVariants = {
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

const skillVariants = {
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
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
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
        Technical Expertise
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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