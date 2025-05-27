'use client';

import { motion } from 'framer-motion';

export type ProjectCategory = 'All' | 'Full Stack' | 'ML/AI' | 'Cloud' | 'Tools';

interface ProjectFiltersProps {
  activeFilter: ProjectCategory;
  setActiveFilter: (filter: ProjectCategory) => void;
  counts: Record<ProjectCategory, number>;
}

const filters: ProjectCategory[] = ['All', 'Full Stack', 'ML/AI', 'Cloud', 'Tools'];

const ProjectFilters = ({ activeFilter, setActiveFilter, counts }: ProjectFiltersProps) => {
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {filters.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            activeFilter === filter 
              ? 'text-white' 
              : 'text-text-muted hover:text-primary-light'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-primary"
            initial={false}
            animate={{
              opacity: activeFilter === filter ? 1 : 0,
              scale: activeFilter === filter ? 1 : 0.8,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span className="relative z-10">
            {filter}
            <motion.span 
              className="ml-2 text-xs"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              ({counts[filter]})
            </motion.span>
          </motion.span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ProjectFilters; 