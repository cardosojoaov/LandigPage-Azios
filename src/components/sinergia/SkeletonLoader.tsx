import { motion } from "framer-motion";

export const SkeletonLoader = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[50vh] px-4 md:px-margin-desktop py-32 space-y-16">
      {/* Title Skeleton */}
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center space-y-4">
        <motion.div 
          className="h-12 bg-white/10 rounded-lg w-3/4"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="h-6 bg-white/10 rounded-lg w-1/2"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
      </div>

      {/* Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-container-width">
        {[1, 2, 3].map((item) => (
          <div key={item} className="glass-card p-8 rounded-2xl border border-white/5 space-y-6">
            <motion.div 
              className="w-12 h-12 bg-white/10 rounded-xl"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: item * 0.1 }}
            />
            <div className="space-y-3">
              <motion.div 
                className="h-6 bg-white/10 rounded-lg w-3/4"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: item * 0.2 }}
              />
              <motion.div 
                className="h-4 bg-white/10 rounded-lg w-full"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: item * 0.3 }}
              />
              <motion.div 
                className="h-4 bg-white/10 rounded-lg w-5/6"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: item * 0.4 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
