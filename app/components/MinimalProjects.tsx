'use client';

import { motion } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    githubLink: string;
    demoLink?: string;
}

const projects: Project[] = [
    {
        title: "Play2Learn",
        description: "Educational gaming platform using AI for personalized learning content.",
        githubLink: "https://github.com/aprameyak/Play2Learn",
        demoLink: "https://play2learn-ten.vercel.app/",
    },
    {
        title: "DataVision",
        description: "AI platform transforming raw data into business insights with LangGraph.",
        githubLink: "https://github.com/aprameyak/DataVision",
        demoLink: "https://www.data-vision.tech",
    },
    {
        title: "GitaGPT",
        description: "AI chatbot answering questions about the Bhagavad Gita with 98% accuracy.",
        githubLink: "https://github.com/aprameyak/GitaGPT",
        demoLink: "https://gita-gpt-two.vercel.app/",
    },
    {
        title: "ResuMaker",
        description: "AI-powered resume builder generating impactful job descriptions.",
        githubLink: "https://github.com/aprameyak/ResuMaker",
        demoLink: "https://resumaker-tan.vercel.app/",
    },
    {
        title: "GitRecap",
        description: "GitHub analytics dashboard visualizing coding patterns and productivity.",
        githubLink: "https://github.com/aprameyak/GitRecap",
        demoLink: "https://gitrecap.vercel.app/"
    }
];

export function MinimalProjects() {
    return (
        <section id="work" className="min-h-screen px-4 sm:px-8 py-32 bg-white text-black">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs tracking-[0.3em] mb-20 font-bold uppercase text-gray-400"
                >
                    Projects
                </motion.h2>
                <div className="divide-y divide-black/10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="py-16 group relative"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
                                <div className="flex-1">
                                    <h3 className="text-4xl md:text-5xl mb-6 tracking-tight font-serif italic group-hover:translate-x-4 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-50">
                                            {project.title}
                                        </a>
                                    </h3>
                                    <p className="text-gray-500 max-w-xl text-lg font-light leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex gap-8 items-center pt-4 md:pt-0">
                                    {project.demoLink && (
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-[0.3em] border-b border-black/10 hover:border-black pb-1 transition-all">Demo</a>
                                    )}
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-[0.3em] border-b border-black/10 hover:border-black pb-1 transition-all">Code</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
