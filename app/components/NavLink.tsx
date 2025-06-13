'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link 
        href={href} 
        className="text-text-muted hover:text-white hover:bg-primary-hover px-3 py-2 rounded-lg text-sm transition-all duration-300 font-medium"
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default NavLink; 