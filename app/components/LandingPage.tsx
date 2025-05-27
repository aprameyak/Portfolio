'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Hero3D from './Hero3D';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

interface LandingPageProps {
  onComplete?: () => void;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  delay = 0,
  duration = 20
}) => {
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
  const [showContinuePrompt, setShowContinuePrompt] = useState(false);
  const fullText = "Crafting Digital Experiences with Code";
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsReady(true);
        setShowContinuePrompt(true);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText]);

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

  useEffect(() => {
    const handleInteraction = () => {
      if (isReady) {
        onComplete?.();
      }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (isReady) {
        handleInteraction();
      }
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [isReady, onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background cursor-pointer"
    >
      <Hero3D />
      
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      </motion.div>

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
      </motion.div>
    </div>
  );
} 