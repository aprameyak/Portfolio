'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1000);

    return () => clearTimeout(loadTimer);
  }, []);

  const mainContentVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen bg-background text-text">
      <AnimatePresence mode="wait">
        {!showContent && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: {
                duration: 1,
                ease: "easeInOut"
              }
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeOut"
            }}
            className="fixed inset-0 z-50"
          >
            <LandingPage onComplete={() => {
              setTimeout(() => setShowContent(true), 500);
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={mainContentVariants}
        initial="hidden"
        animate={showContent ? "visible" : "hidden"}
      >
        <div className="w-full md:h-screen md:overflow-hidden px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row gap-6">
            <ProfileCard />

            <div className="flex-1 min-w-0">
              <div className="bg-surface/50 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-xl shadow-primary/5 h-full">
                <div className="h-full md:max-h-[calc(100vh-48px)] overflow-visible md:overflow-y-auto px-4 sm:px-8 py-10 space-y-20">
                  <section id="intro">
                    <div className="bg-surface/80 rounded-xl p-8 backdrop-blur-sm border border-primary/5">
                      <h2 className="text-3xl sm:text-4xl font-bold text-primary-light mb-4">
                        Hi, I am Aprameya.
                      </h2>
                      <p className="text-text-muted text-lg leading-relaxed">
                        I am currently studying Computer Science at the University of Maryland and building software at Lockheed Martin.
                      </p>
                    </div>
                  </section>
                  <section id="about">
                    <About />
                  </section>
                  <section id="experience">
                    <Experience />
                  </section>
                  <section id="projects">
                    <Projects />
                  </section>
                  {/* <section id="skills">
                    <Skills />
                  </section> */}
                  <section id="contact">
                    <Contact />
                  </section>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isInitialLoad && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-background"
          />
        )}
      </AnimatePresence>
    </main>
  );
}
