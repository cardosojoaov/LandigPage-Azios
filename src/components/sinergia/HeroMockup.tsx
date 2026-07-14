import { motion } from "framer-motion";

export const HeroMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mt-20 relative max-w-5xl mx-auto"
    >
      {/* Floating Animation Wrapper */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <div className="glass-card rounded-2xl border-t border-white/10 shadow-2xl overflow-hidden aspect-video relative bg-slate-900/50 backdrop-blur-3xl flex">
          
          {/* Sidebar Skeleton */}
          <div className="w-1/4 max-w-[240px] border-r border-white/5 bg-black/20 p-6 flex flex-col gap-6 hidden sm:flex">
            <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center mb-4">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
            </div>
            
            <div className="space-y-4">
              <div className="h-2 w-3/4 bg-slate-800 rounded-full"></div>
              <div className="h-2 w-1/2 bg-slate-800 rounded-full"></div>
              <div className="h-2 w-5/6 bg-slate-800 rounded-full"></div>
            </div>
            
            <div className="mt-auto space-y-4">
              <div className="h-10 w-full bg-white/5 rounded-lg border border-white/5"></div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-2 w-full bg-slate-800 rounded-full"></div>
                  <div className="h-2 w-2/3 bg-slate-800 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-8 flex flex-col gap-8">
            {/* Top Nav Skeleton */}
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <div className="h-4 w-48 bg-white/10 rounded-full"></div>
                <div className="h-2 w-32 bg-slate-800 rounded-full"></div>
              </div>
              <div className="flex gap-3">
                <div className="h-8 w-24 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <div className="h-2 w-12 bg-primary rounded-full"></div>
                </div>
                <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10"></div>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stat Card 1 */}
              <div className="col-span-1 glass-card rounded-xl p-5 border border-white/5 flex flex-col gap-4">
                <div className="h-2 w-24 bg-slate-700 rounded-full"></div>
                <div className="h-8 w-16 bg-white/20 rounded-full"></div>
                <div className="flex items-end gap-2">
                  <div className="h-2 w-12 bg-[#10B981] rounded-full"></div>
                  <div className="h-1 w-20 bg-slate-800 rounded-full"></div>
                </div>
              </div>
              {/* Stat Card 2 */}
              <div className="col-span-1 glass-card rounded-xl p-5 border border-white/5 flex flex-col gap-4">
                <div className="h-2 w-24 bg-slate-700 rounded-full"></div>
                <div className="h-8 w-16 bg-white/20 rounded-full"></div>
                <div className="flex items-end gap-2">
                  <div className="h-2 w-12 bg-primary rounded-full"></div>
                  <div className="h-1 w-20 bg-slate-800 rounded-full"></div>
                </div>
              </div>
              {/* Stat Card 3 */}
              <div className="col-span-1 glass-card rounded-xl p-5 border border-white/5 flex flex-col gap-4">
                <div className="h-2 w-24 bg-slate-700 rounded-full"></div>
                <div className="h-8 w-16 bg-white/20 rounded-full"></div>
                <div className="flex items-end gap-2">
                  <div className="h-2 w-12 bg-rose-500 rounded-full"></div>
                  <div className="h-1 w-20 bg-slate-800 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Main Graph Area */}
            <div className="flex-1 glass-card rounded-xl border border-white/5 p-6 flex flex-col justify-end gap-4 relative overflow-hidden">
               <div className="absolute top-6 left-6 space-y-2">
                <div className="h-3 w-32 bg-white/10 rounded-full"></div>
                <div className="h-2 w-48 bg-slate-800 rounded-full"></div>
               </div>
               
               <div className="flex items-end justify-between h-32 gap-2 mt-auto">
                 {[40, 25, 60, 45, 80, 55, 90, 70, 100, 85].map((height, i) => (
                   <motion.div 
                     key={i}
                     initial={{ height: 0 }}
                     animate={{ height: `${height}%` }}
                     transition={{ duration: 1, delay: 1 + i * 0.1, ease: "easeOut" }}
                     className={`w-full rounded-t-sm ${i === 8 ? 'bg-primary' : 'bg-white/5'}`}
                   ></motion.div>
                 ))}
               </div>
            </div>
          </div>
          
          {/* WhatsApp Notification Overlay */}
          <motion.div 
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 2, type: "spring", stiffness: 200, damping: 20 }}
            className="absolute bottom-4 right-2 md:bottom-8 md:right-8 glass-card bg-slate-900/90 rounded-2xl p-4 border border-white/10 shadow-2xl flex items-center gap-4 w-64 md:w-72 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
               <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964 1.038-3.562c-.687-1.051-1.052-2.262-1.052-3.518 0-4.632 3.784-8.415 8.423-8.415 4.641 0 8.422 3.783 8.422 8.415 0 4.632-3.781 8.415-8.422 8.415z"/></svg>
            </div>
            <div className="flex-1">
              <div className="text-xs text-slate-400 mb-1">Candidato • João</div>
              <div className="text-sm text-white font-medium">"Sim, tenho disponibilidade para entrevista amanhã às 14h!"</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Background glow for the mockup */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
    </motion.div>
  );
};
