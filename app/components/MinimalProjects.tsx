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
                    className="text-xs tracking-[0.3em] mb-20 font-bold uppercase"
                >
                    Projects
                </motion.h2>
                <div className="divide-y divide-black/10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="py-12 group"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div className="flex-1">
                                    <h3 className="text-3xl mb-4 tracking-tight group-hover:pl-4 transition-all duration-300">
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-50">
                                            {project.title}
                                        </a>
                                    </h3>
                                    <p className="text-gray-500 max-w-xl text-lg font-light leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex gap-6 items-center">
                                    {project.demoLink && (
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest hover:underline underline-offset-8">Live Demo</a>
                                    )}
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest hover:underline underline-offset-8">Source</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
