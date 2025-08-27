export const metadata = {
  title: 'Experience',
  description: 'Professional experience and roles',
};

export default function ExperiencePage() {
  const roles = [
    {
      title: 'Software Engineer Intern',
      company: 'Lockheed Martin',
      impact: 'Building enterprise applications for team health dashboards and sprint planning.',
      tech: ['Next.js', 'Python', 'SQL'],
    },
    {
      title: 'Section Leader',
      company: 'Stanford University',
      impact: 'Taught programming fundamentals; led weekly sessions and guided final projects.',
      tech: ['Mentoring', 'Control Flow', 'Loops'],
    },
    {
      title: 'Software Engineer',
      company: 'Warriors Legacy Care',
      impact: "Developed mobile applications for veterans' resource access and support.",
      tech: ['Python', 'React Native', 'PostgreSQL'],
    },
    {
      title: 'Climate Computing Researcher',
      company: 'First Year Innovation and Research Experience',
      impact: 'Researched climate data analysis and computational methods.',
      tech: ['Data Analysis', 'Linux', 'High Performance Computing'],
    },
    {
      title: 'Software Engineer',
      company: 'SynTag',
      impact: 'Built AI-powered virtual receptionist and customer service solutions.',
      tech: ['FastAPI', 'TailwindCSS', 'TypeScript'],
    },
    {
      title: 'Technical Fellow',
      company: 'CodePath',
      impact: 'Mastered data structures and algorithms for software development.',
      tech: ['Python', 'Data Structures', 'Algorithms'],
    },
    {
      title: 'Software Engineer',
      company: 'Minvest Finance',
      impact: 'Architected cloud infrastructure for a Gen Z investing platform.',
      tech: ['AWS', 'Docker', 'React.js'],
    },
    {
      title: 'Software Engineer',
      company: 'Headstarter AI',
      impact: 'Developed AI-powered applications with LLM integration.',
      tech: ['Firebase', 'LLMs', 'JavaScript'],
    },
  ];

  return (
    <main className="soft-page pt-24 p-6">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold">Experience</h1>
        </header>
        {/* Roadmap layout */}
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/30 via-primary/60 to-primary/30" />
          <ol className="space-y-8">
            {roles.map((r, idx) => (
              <li key={r.title} className={`relative flex ${idx % 2 ? 'justify-start' : 'justify-end'}`}>
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_0_4px_rgba(157,78,221,0.2)]" />
                <div className={`w-[calc(50%-24px)] rounded-xl border border-primary/10 bg-surface p-5 shadow-md shadow-primary/10 ${idx % 2 ? 'ml-6' : 'mr-6'}`}>
                  <h2 className="text-base font-semibold">{r.title}</h2>
                  <p className="text-primary-light text-sm">{r.company}</p>
                  <p className="mt-2 text-sm opacity-90">{r.impact}</p>
                  <ul className="mt-3 flex flex-wrap gap-2 text-xs">
                    {r.tech.map((t) => (
                      <li key={t} className="rounded-full bg-primary/10 px-3 py-1 text-primary-light">{t}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}


