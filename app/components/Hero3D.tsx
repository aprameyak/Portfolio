'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);
  const timeRef = useRef(0);

  interface Particle {
    x: number;
    y: number;
    size: number;
    baseX: number;
    baseY: number;
    density: number;
    speedX: number;
    speedY: number;
    opacity: number;
    color: string;
    angle: number;
    wave: {
      amplitude: number;
      frequency: number;
      offset: number;
    };
  }

  const generateColor = (distance: number, maxDistance: number): string => {
    const hue = 280 - (distance / maxDistance) * 40;
    return `hsla(${hue}, 70%, 60%, `;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(Math.floor(window.innerWidth * 0.1), 100);

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          density: (Math.random() * 30) + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: generateColor(0, 100),
          angle: Math.random() * Math.PI * 2,
          wave: {
            amplitude: Math.random() * 20 + 10,
            frequency: Math.random() * 0.02 + 0.01,
            offset: Math.random() * Math.PI * 2
          }
        });
      }

      particlesRef.current = particles;
    };

    const drawParticles = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      timeRef.current += 0.01;

      particlesRef.current.forEach((particle, i) => {
        const waveX = Math.sin(timeRef.current * particle.wave.frequency + particle.wave.offset) * particle.wave.amplitude;
        const waveY = Math.cos(timeRef.current * particle.wave.frequency + particle.wave.offset) * particle.wave.amplitude;
        
        const dx = mouseRef.current.x - (particle.x + waveX);
        const dy = mouseRef.current.y - (particle.y + waveY);
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 150;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * particle.density;
        const directionY = forceDirectionY * force * particle.density;

        if (distance < maxDistance) {
          particle.x -= directionX;
          particle.y -= directionY;
          particle.size = Math.min(4, particle.size + 0.1);
          particle.opacity = Math.min(0.8, particle.opacity + 0.1);
          particle.color = generateColor(distance, maxDistance);
        } else {
          if (particle.x !== particle.baseX) {
            const dx = particle.x - particle.baseX;
            particle.x -= dx/50;
          }
          if (particle.y !== particle.baseY) {
            const dy = particle.y - particle.baseY;
            particle.y -= dy/50;
          }
          particle.size = Math.max(1, particle.size - 0.1);
          particle.opacity = Math.max(0.2, particle.opacity - 0.02);
          particle.color = generateColor(maxDistance, maxDistance);
        }

        particle.x += waveX;
        particle.y += waveY;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, particle.color + particle.opacity + ')');
        gradient.addColorStop(1, particle.color + '0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        particlesRef.current.slice(i + 1).forEach(particle2 => {
          const dx2 = particle.x - particle2.x;
          const dy2 = particle.y - particle2.y;
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distance2 < 100) {
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y, 
              particle2.x, particle2.y
            );
            
            const opacity = 0.2 * (1 - distance2 / 100);
            gradient.addColorStop(0, particle.color + opacity + ')');
            gradient.addColorStop(1, particle2.color + opacity + ')');

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = Math.min(opacity * 2, 0.5);
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      animationFrameRef.current = requestAnimationFrame(drawParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    resizeCanvas();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-0 pointer-events-none"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </motion.div>
  );
};

export default Hero3D; 