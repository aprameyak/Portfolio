interface ProjectProps {
  title: string;
  githubLink?: string;
  demoLink?: string;
  description: string;
  techStack: string;
}

const Project = ({ title, githubLink, demoLink, description, techStack }: ProjectProps) => {
  return (
    <div className="bg-[#2d2438] p-6 rounded-xl border border-[#9d4edd] shadow-lg hover-card h-full flex flex-col relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#9d4edd]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <h3 className="gradient-text text-xl sm:text-2xl mb-4 font-bold">{title}</h3>
        <div className="mb-4 flex flex-wrap gap-2">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-sm"
            >
              GitHub
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm"
            >
              Live Demo
            </a>
          )}
        </div>
        <p className="text-[#e2d9f3] mb-6 leading-relaxed text-sm sm:text-base flex-grow">{description}</p>
        <div className="mt-auto">
          <div className="bg-[#3d3151] p-4 rounded-lg">
            <p className="text-[#e2d9f3] text-sm sm:text-base">
              <span className="text-[#c77dff] font-semibold">Tech Stack:</span> {techStack}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project; 