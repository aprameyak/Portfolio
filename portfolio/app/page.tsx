'use client';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text">
      <Header />
      <div className="pt-[300px]">
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
          <About />
        </section>
        <section id="projects" className="min-h-screen py-20">
          <Projects />
        </section>
        <section id="experience" className="min-h-screen py-20">
          <Experience />
        </section>
        <section id="skills" className="min-h-screen py-20">
          <Skills />
        </section>
        <section id="contact" className="min-h-screen py-20">
          <Contact />
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
