'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePosition({
        x: (clientX - centerX) / centerX,
        y: (clientY - centerY) / centerY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 relative min-h-[80vh] flex items-center"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, rgba(157, 78, 221, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(157, 78, 221, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(157, 78, 221, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="text-center relative w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden mx-auto mb-12"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#9d4edd] via-[#b589df] to-[#9d4edd] animate-spin-slow rounded-full opacity-90" />
          <div className="absolute inset-[3px] rounded-full overflow-hidden bg-background">
            <Image
              src="https://aprameyak-portfolio-assets.s3.us-east-1.amazonaws.com/profilepic.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p 
            className="text-2xl text-center text-primary-light relative"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
            }}
          >
            <span className="relative inline-block bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
              Studying Computer Science at the University of Maryland
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-text-muted"
          >
            Currently building apps at Lockheed Martin
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <motion.a
            href="https://github.com/aprameyak"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary/10 hover:bg-primary/20 text-primary-light rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/aprameyak"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary/10 hover:bg-primary/20 text-primary-light rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About; 