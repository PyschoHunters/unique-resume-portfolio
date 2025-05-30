
import { motion } from "framer-motion";
import { Github, FileCode } from "lucide-react";
import { Link } from "react-scroll";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 md:pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-[-1]" />
      
      {/* Resume modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowResume(false)}>
          <div className="max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-lg">
            <img src="/lovable-uploads/434be4a1-133b-4414-b8b0-714d6e1b7f8b.png" alt="Resume" className="w-full h-auto" />
          </div>
        </div>
      )}
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-48 md:w-96 h-48 md:h-96 rounded-full bg-primary/5 -top-20 -right-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.5, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute w-40 md:w-80 h-40 md:h-80 rounded-full bg-blue-500/5 bottom-10 -left-20"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          <div className="flex-1 text-center md:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-2 inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium"
            >
              Software Engineer
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight"
            >
              Hi, I'm <span className="text-gradient">A J V Manumohan</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-foreground/80 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0"
            >
              Innovative Software Engineer specializing in ML/AI solutions, full-stack development, and cloud technologies. Passionate about building scalable applications that solve real-world problems.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="https://github.com/PyschoHunters"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors text-sm md:text-base"
              >
                <Github size={isMobile ? 16 : 18} />
                Check My Projects
              </a>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className="flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white border border-primary/20 text-primary rounded-full font-medium hover:bg-primary/5 transition-colors text-sm md:text-base"
              >
                <FileCode size={isMobile ? 16 : 18} />
                Explore Portfolio
              </Link>
            </motion.div>
          </div>
          
          {/* Updated profile card - more mobile-friendly design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 max-w-[280px] sm:max-w-sm md:max-w-md relative mt-6 sm:mt-8 md:mt-0"
          >
            <div className="relative w-full">
              <div className="glass-panel rounded-2xl shadow-lg p-6 backdrop-blur-sm border border-white/40">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-gradient-to-r from-primary to-blue-700 text-white font-bold px-4 py-2 rounded-lg text-xl">
                      AI & ML Engineer
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">A J V Manumohan</h3>
                  <p className="text-foreground/70 mb-4 text-sm">Crafting intelligent solutions with code</p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <div className="text-primary text-xs font-medium mb-1">ML/AI</div>
                      <div className="text-xs text-gray-600">Expert</div>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <div className="text-primary text-xs font-medium mb-1">Full-Stack</div>
                      <div className="text-xs text-gray-600">Advanced</div>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <div className="text-primary text-xs font-medium mb-1">Cloud</div>
                      <div className="text-xs text-gray-600">Proficient</div>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <a href="https://github.com/PyschoHunters" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/manumohanai" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>
                    <a href="mailto:manumohan.ai21@gmail.com" className="hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
