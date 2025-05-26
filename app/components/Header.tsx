'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <AnimatedBackground />
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-surface/95 backdrop-blur-md shadow-lg shadow-primary/5 py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <motion.div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
              <motion.h1 
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Aprameya Kannan
              </motion.h1>
              <motion.p 
                className="text-sm sm:text-base text-text-muted mt-1"
                variants={itemVariants}
              >
                Software Engineer
              </motion.p>
            </motion.div>
            
            <motion.nav 
              variants={itemVariants}
              className="flex justify-center sm:justify-end"
            >
              <ul className="flex flex-wrap justify-center gap-1 sm:gap-2 list-none p-0">
                {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href={`#${item.toLowerCase()}`} 
                      className="text-text-muted hover:text-white hover:bg-primary-hover px-2 py-1.5 rounded-lg text-sm transition-all duration-300 font-medium"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </div>
        </motion.div>
      </header>
    </>
  );
};

export default Header; 