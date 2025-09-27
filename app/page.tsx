'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

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
        <Header />
        <div className="space-y-32 pt-32 pb-20">
          <section id="about" className="min-h-screen">
            <About />
          </section>
          <section id="experience" className="min-h-screen">
            <Experience />
          </section>
          <section id="projects" className="min-h-screen">
            <Projects />
          </section>
          <section id="skills" className="min-h-screen">
            <Skills />
          </section>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </div>
        <Footer />
        <ScrollToTop />
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
