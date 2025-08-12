export const metadata = {
  title: 'Projects',
  description: 'Featured projects and case studies',
};

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Play2Learn',
      description:
        'Created an educational gaming platform that uses AI to generate personalized learning content. Integrated GPT-4 to adapt questions based on student performance, resulting in 40% better engagement.',
      impact: '↑ 40% engagement from AI-personalized content',
      tech: ['Next.js', 'OpenAI GPT-4', 'AWS Lambda', 'TypeScript', 'Node.js', 'AWS API Gateway', 'Firebase Auth', 'TailwindCSS'],
      repo: 'https://github.com/aprameyak/Play2Learn',
      demo: 'https://play2learn-ten.vercel.app/',
    },
    {
      title: 'DataVision',
      description:
        'Built an AI platform that transforms raw data into business insights. Uses advanced AI (LangGraph, Gemini) to automate data analysis, generate statistical insights, and create publication-quality visualizations.',
      impact: 'Automated EDA with publication-quality charts',
      tech: ['Python', 'LangGraph', 'Gemini API', 'Flask', 'Pandas', 'SciPy', 'Matplotlib', 'Seaborn', 'TypeScript', 'Next.js', 'TailwindCSS', 'Gunicorn', 'Nginx', 'Azure'],
      repo: 'https://github.com/aprameyak/DataVision',
      demo: 'https://www.data-vision.tech',
    },
    {
      title: 'GitaGPT',
      description:
        'Built an AI chatbot that answers questions about the Bhagavad Gita with 98% accuracy. Used advanced AI techniques (RAG, GPT-4) to process 700+ verses and deliver context-aware responses in under 300ms.',
      impact: '≈ 98% accuracy; sub-300ms responses',
      tech: ['Python', 'FAISS', 'OpenAI API', 'FastAPI', 'Next.js', 'Vercel', 'Render'],
      repo: 'https://github.com/aprameyak/GitaGPT',
      demo: 'https://gita-gpt-two.vercel.app/',
    },
    {
      title: 'ResuMaker',
      description:
        'Built an AI-powered resume builder that helps users create professional resumes in minutes. Uses GPT to generate impactful job descriptions and provides real-time feedback on resume strength.',
      impact: 'Minutes to iterate on resume content with AI',
      tech: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS', 'Vercel', 'API Routes'],
      repo: 'https://github.com/aprameyak/ResuMaker',
      demo: 'https://resumaker-tan.vercel.app/',
    },
    {
      title: 'GitRecap',
      description:
        'Created a GitHub analytics dashboard that visualizes coding patterns and productivity. Features include commit analysis, language distribution, and AI-powered insights into coding habits.',
      impact: 'Actionable insights into coding patterns and productivity',
      tech: ['Next.js', 'Flask', 'Chart.js', 'Python', 'GitHub API', 'TextBlob', 'TailwindCSS', 'React Calendar Heatmap'],
      repo: 'https://github.com/aprameyak/GitRecap',
    },
    {
      title: 'FitSync',
      description:
        'Developed a fitness app that uses AI to create personalized workout plans. Features include real-time progress tracking, nutrition analysis, and AI coaching that adapts to user performance.',
      impact: 'Personalized training plans with real-time feedback',
      tech: ['TypeScript', 'OpenAI API', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'],
      repo: 'https://github.com/aprameyak/FitSync',
    },
  ];

  return (
    <main className="soft-page pt-24 p-6">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold">Projects</h1>
        </header>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="rounded-xl border border-primary/10 bg-surface p-5 shadow-md shadow-primary/10">
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold">{p.title}</h2>
                <div className="flex gap-3 text-sm">
                  {p.repo && (
                    <a className="text-primary-light hover:underline" href={p.repo} target="_blank" rel="noreferrer">
                      Repo
                    </a>
                  )}
                  {p.demo && (
                    <a className="text-primary-light hover:underline" href={p.demo} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-2 opacity-90">{p.description}</p>
              <p className="mt-1 text-sm text-primary-light">{p.impact}</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs">
                {p.tech.slice(0, 4).map((t) => (
                  <li key={t} className="rounded-full bg-primary/10 px-3 py-1 text-primary-light">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}


