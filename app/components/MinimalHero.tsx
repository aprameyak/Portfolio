'use client';

import { motion } from 'framer-motion';

export function MinimalHero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-8 bg-white">
            <div className="max-w-2xl w-full text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl mb-6 tracking-tighter font-medium text-black"
                >
                    Aprameya Kannan
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="space-y-4"
                >
                    <p className="text-base leading-relaxed text-gray-500 max-w-xl mx-auto">
                        Motivated computer science student building scalable enterprise solutions.
                    </p>
                    <div className="flex justify-center gap-6 pt-8">
                        <a href="https://github.com/aprameyak" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 transition-colors uppercase tracking-widest text-xs font-bold">GitHub</a>
                        <a href="https://linkedin.com/in/aprameyak" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 transition-colors uppercase tracking-widest text-xs font-bold">LinkedIn</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
