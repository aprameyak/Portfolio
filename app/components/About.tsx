'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32"
    >
      <div className="text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold gradient-text mb-12"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden mx-auto mb-12"
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

        <div className="prose prose-lg mx-auto text-text">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            I'm a Computer Science student at the University of Maryland, passionate about building innovative software solutions. 
            My focus areas include full-stack development, cloud computing, and AI/ML applications.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            Currently, I'm working on several projects that combine modern web technologies with AI capabilities, 
            aiming to create impactful solutions that solve real-world problems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or participating in hackathons to expand my skills and network.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default About; 