'use client';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["TypeScript", "Python", "Java", "JavaScript"]
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "HTML5", "CSS3"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "Django"]
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Git"]
  },
  {
    name: "Databases",
    skills: ["MongoDB", "PostgreSQL", "DynamoDB", "Firebase"]
  },
  {
    name: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "OpenAI", "Pandas", "Scikit-learn"]
  },
  {
    name: "Tools & Practices",
    skills: ["Agile", "REST", "WebSocket", "Postman", "Figma"]
  }
];

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-surface rounded-xl p-6 hover-card transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 