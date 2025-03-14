
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const About = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            I'm a Software Engineer specialized in AI and ML solutions, passionate about creating impactful technology.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-3xl transform -rotate-3"></div>
            <div className="relative glass-panel rounded-3xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Education</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="border-l-2 border-primary/30 pl-4 py-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                    <div>
                      <h4 className="font-medium text-sm md:text-base">Bachelor of Engineering in Artificial Intelligence and Machine Learning</h4>
                      <p className="text-xs md:text-sm text-foreground/70">2021-25</p>
                    </div>
                    <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded font-medium whitespace-nowrap">CGPA: 8.33/10</span>
                  </div>
                  <p className="text-xs md:text-sm text-foreground/70 mt-1">BMS College of Engineering - Bengaluru</p>
                </div>
                
                <div className="border-l-2 border-primary/30 pl-4 py-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                    <div>
                      <h4 className="font-medium text-sm md:text-base">Higher Secondary Education - CBSE - PCMC</h4>
                      <p className="text-xs md:text-sm text-foreground/70">2021</p>
                    </div>
                    <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded font-medium whitespace-nowrap">94.6%</span>
                  </div>
                  <p className="text-xs md:text-sm text-foreground/70 mt-1">Presidency School - Kasturi Nagar</p>
                </div>
                
                <div className="border-l-2 border-primary/30 pl-4 py-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                    <div>
                      <h4 className="font-medium text-sm md:text-base">Secondary Education - CBSE</h4>
                      <p className="text-xs md:text-sm text-foreground/70">2019</p>
                    </div>
                    <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded font-medium whitespace-nowrap">94.8%</span>
                  </div>
                  <p className="text-xs md:text-sm text-foreground/70 mt-1">Presidency School - Kasturi Nagar</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">My Journey</h3>
            <p className="text-sm md:text-base text-foreground/80 mb-4 md:mb-6">
              I'm a talented software engineer with expertise in developing innovative solutions 
              using modern technologies. My proficiency spans full-stack development,
              AI/ML model implementation, and cloud-native applications.
            </p>
            <p className="text-sm md:text-base text-foreground/80 mb-4 md:mb-6">
              I excel at building scalable applications, designing efficient algorithms, 
              and implementing AI solutions that solve real-world challenges. I combine 
              technical excellence with strong collaboration skills to deliver
              impactful projects across various domains.
            </p>
            
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
              <div className="glass-panel rounded-xl p-3 md:p-4 text-center hover-scale">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">3+</div>
                <div className="text-xs md:text-sm text-foreground/70">AI Projects</div>
              </div>
              <div className="glass-panel rounded-xl p-3 md:p-4 text-center hover-scale">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">5+</div>
                <div className="text-xs md:text-sm text-foreground/70">Technologies</div>
              </div>
              <div className="glass-panel rounded-xl p-3 md:p-4 text-center hover-scale">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">3+</div>
                <div className="text-xs md:text-sm text-foreground/70">Internships</div>
              </div>
              <div className="glass-panel rounded-xl p-3 md:p-4 text-center hover-scale">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">2+</div>
                <div className="text-xs md:text-sm text-foreground/70">Certifications</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
