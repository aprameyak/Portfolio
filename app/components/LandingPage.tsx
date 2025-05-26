'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

interface LandingPageProps {
  onComplete?: () => void;
}

const FloatingElement = ({ children, delay = 0, duration = 20 }: FloatingElementProps) => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default function LandingPage({ onComplete }: LandingPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isReady, setIsReady] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Crafting Digital Experiences with Code & Innovation";
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  useEffect(() => {
    // Typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsReady(true);
        onComplete?.();
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText, onComplete]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate distance from center (normalized)
      setMousePosition({
        x: (clientX - centerX) / centerX,
        y: (clientY - centerY) / centerY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxValue = 20; // Adjust this value to control parallax intensity

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={containerRef}>
      {/* Background gradient circles */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 via-primary-light/10 to-primary/20 blur-3xl"
        animate={{
          x: mousePosition.x * parallaxValue,
          y: mousePosition.y * parallaxValue,
          scale: [1, 1.1, 1],
        }}
        transition={{
          scale: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          },
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
        }}
        style={{
          top: '20%',
          left: '30%',
        }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-primary-light/20 via-primary/10 to-primary-dark/20 blur-3xl"
        animate={{
          x: mousePosition.x * -parallaxValue,
          y: mousePosition.y * -parallaxValue,
          scale: [1, 1.2, 1],
        }}
        transition={{
          scale: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5,
          },
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
        }}
        style={{
          bottom: '20%',
          right: '30%',
        }}
      />

      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <FloatingElement delay={0} duration={15}>
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Aprameya Kannan
            </motion.span>
          </motion.h1>
        </FloatingElement>

        <motion.p 
          className="text-xl md:text-3xl mb-8 text-text-muted font-light h-[80px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {typedText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block ml-1 text-primary-light"
          >
            |
          </motion.span>
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-6 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {[
            { text: "AWS Certified", icon: "🏆", delay: 0 },
            { text: "Full Stack Dev", icon: "💻", delay: 0.2 },
            { text: "AI/ML", icon: "🤖", delay: 0.4 },
            { text: "Cloud Native", icon: "☁️", delay: 0.6 }
          ].map((item, index) => (
            <FloatingElement key={index} delay={item.delay} duration={10 + index * 2}>
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgba(157, 78, 221, 0.15)',
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-surface/30 backdrop-blur-lg px-6 py-3 rounded-full flex items-center gap-3 cursor-pointer border border-primary/5 hover:border-primary/20"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-lg text-text-muted">{item.text}</span>
              </motion.div>
            </FloatingElement>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 20 }}
          transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <Link href="#about" className="text-text-muted hover:text-primary-light transition-colors duration-300">
              <svg 
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
} 