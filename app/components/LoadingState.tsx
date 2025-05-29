import { motion } from 'framer-motion';

const LoadingState = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <motion.div
        className="relative w-20 h-20"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 rounded-full border-t-2 border-primary opacity-20" />
        <div className="absolute inset-0 rounded-full border-l-2 border-primary opacity-40" />
        <div className="absolute inset-0 rounded-full border-b-2 border-primary opacity-60" />
        <div className="absolute inset-0 rounded-full border-r-2 border-primary opacity-80" />
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute mt-24 text-sm text-text-muted"
      >
        Loading...
      </motion.span>
    </div>
  );
};

export default LoadingState; 