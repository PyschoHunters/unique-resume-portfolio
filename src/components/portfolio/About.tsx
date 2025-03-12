
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            I'm an AI and ML professional passionate about creating impactful technology solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-3xl transform -rotate-3"></div>
            <div className="relative glass-panel rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary/30 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Bachelor of Technology in Artificial Intelligence and Machine Learning</h4>
                      <p className="text-sm text-foreground/70">2022-25</p>
                    </div>
                    <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded font-medium">CGPA: 8.24/10</span>
                  </div>
                  <p className="text-sm text-foreground/70 mt-1">2021 College of Engineering - Bengaluru</p>
                </div>
                
                <div className="border-l-2 border-primary/30 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Higher Secondary Education - CBSE - PCMC</h4>
                      <p className="text-sm text-foreground/70">2021</p>
                    </div>
                    <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded font-medium">94.6%</span>
                  </div>
                  <p className="text-sm text-foreground/70 mt-1">Presidency School - Kasturi Nagar</p>
                </div>
                
                <div className="border-l-2 border-primary/30 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Secondary Education - CBSE</h4>
                      <p className="text-sm text-foreground/70">2019</p>
                    </div>
                    <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded font-medium">94.8%</span>
                  </div>
                  <p className="text-sm text-foreground/70 mt-1">Presidency School - Kasturi Nagar</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-foreground/80 mb-6">
              I'm an enthusiastic AI and Machine Learning engineer with hands-on experience in building chatbots, 
              AI-driven solutions, and data visualization tools. With a strong educational background in AI and ML, 
              I've developed skills in Python, NLP, and cloud technologies.
            </p>
            <p className="text-foreground/80 mb-6">
              My experience spans various domains including computer vision, natural language processing, 
              and cloud computing. I excel at problem-solving and collaborate effectively across teams to 
              deliver impactful projects.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-panel rounded-xl p-4 text-center hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-foreground/70">AI Projects</div>
              </div>
              <div className="glass-panel rounded-xl p-4 text-center hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-foreground/70">Technologies</div>
              </div>
              <div className="glass-panel rounded-xl p-4 text-center hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-foreground/70">Internships</div>
              </div>
              <div className="glass-panel rounded-xl p-4 text-center hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-foreground/70">Certifications</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
