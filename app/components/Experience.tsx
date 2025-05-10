'use client';

interface ExperienceItem {
  title: string;
  company: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Lockheed Martin",
    description: [
      "Supporting Lean/Agile Center of Excellence building internal JavaScript applications used by 500+ enterprise stakeholders."
    ]
  },
  {
    title: "Software Engineer",
    company: "Warriors Legacy Care",
    description: [
      "Refactored Axios API calls and improved mobile user interface with React Native (Expo) with Typescript and Tailwind.css.",
      "Designed and implemented Docker-based CI/CD pipeline for scalable Flask backend to AWS EC2 and RESTful API structure.",
      "Developed object relational mapping with SQLAlchemy for managed PostgreSQL using AWS RDS for production stability.",
      "Contributed to Agile sprints with GitHub, Jira, and Kanban; collaborated with feature branch workflows on Git source control."
    ]
  },
  {
    title: "Section Leader",
    company: "Stanford University",
    description: [
      "Led weekly live sessions for 30+ students for CS106A, teaching core topics like logic, control flow, and recursion in Python.",
      "Guided students through open-ended project development and real-time coding assignments while addressing complex topics."
    ]
  },
  {
    title: "Software Engineer",
    company: "Minvest Finance",
    description: [
      "Architected trading simulator using Flask, real-time stock data, and dashboards responsive to dynamic user metadata.",
      "Deployed AWS infrastructure with Docker, EC2, ECS, and ECR to enable scalable deployment and consistent performance.",
      "Developed gamified UI with React.js, ChakraUI, and TypeScript to boost interactivity and financial literacy engagement."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Syntag",
    description: [
      "Built and maintained web applications using React and Node.js.",
      "Implemented responsive designs and RESTful APIs."
    ]
  }
];

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-surface rounded-xl p-6 hover-card transition-all duration-300"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold gradient-text">{exp.title}</h3>
              <p className="text-text/80">{exp.company}</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-text">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 