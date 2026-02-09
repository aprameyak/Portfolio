'use client';

import { motion } from 'framer-motion';

export function MinimalHero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-8 bg-white relative overflow-hidden">
            <div className="max-w-2xl w-full text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-7xl md:text-8xl mb-12 tracking-tight font-serif italic text-black"
                >
                    Aprameya Kannan
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8"
                >
                    <p className="text-lg md:text-xl leading-relaxed text-gray-500 max-w-xl mx-auto font-light">
                        Motivated computer science student building scalable enterprise solutions.
                    </p>
                    <div className="flex justify-center gap-12 pt-12">
                        {['GitHub', 'LinkedIn'].map((label, i) => (
                            <motion.a
                                key={label}
                                href={label === 'GitHub' ? "https://github.com/aprameyak" : "https://linkedin.com/in/aprameyak"}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -2 }}
                                className="text-black transition-all uppercase tracking-[0.3em] text-[10px] font-bold border-b border-black/10 hover:border-black pb-1"
                            >
                                {label}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
