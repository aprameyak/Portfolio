'use client';

import { motion } from 'framer-motion';

interface ExperienceItem {
    title: string;
    company: string;
    description: string;
}

const experiences: ExperienceItem[] = [
    {
        title: "Software Engineer Intern",
        company: "Lockheed Martin",
        description: "Building enterprise applications for team health dashboards and sprint planning.",
    },
    {
        title: "Technical Lead",
        company: "Mitre Corporation - App Dev Club ",
        description: "Leading a team of engineers in the development of an internal web application.",
    },
    {
        title: "DevOps Engineer",
        company: "Booz Allen Hamilton - App Dev Club",
        description: "Architected cloud infrastructure for CHIP and Medicaid project utilizing generative AI.",
    },
    {
        title: "Section Leader",
        company: "Stanford University - Code in Place",
        description: "Teaching assistant for CS106A programming fundamentals course.",
    },
    {
        title: "Software Engineer",
        company: "Warriors Legacy Care - App Dev Club",
        description: "Developed mobile applications for veterans' resource access and support.",
    },
    {
        title: "Software Engineer",
        company: "SynTag",
        description: "Built webpage for AI-powered virtual receptionist and customer service solutions.",
    },
    {
        title: "Software Engineer",
        company: "Minvest Finance",
        description: "Architected cloud infrastructure for a Gen Z investing platform.",
    }
];

export function MinimalExperience() {
    return (
        <section id="experience" className="px-4 sm:px-8 py-32 bg-white text-black">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs tracking-[0.3em] mb-20 font-bold uppercase"
                >
                    Professional Journey
                </motion.h2>
                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row gap-4 md:gap-12"
                        >
                            <div className="w-full md:w-1/3">
                                <h3 className="text-xl font-medium">{exp.company}</h3>
                                <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mt-1">{exp.title}</p>
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-500 font-light leading-relaxed mb-4">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
