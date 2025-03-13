
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C/C++", "Python", "JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    title: "Libraries & Tools",
    skills: ["PyTorch", "SKlearn", "TensorFlow", "Pandas", "NumPy", "Docker", "Git"]
  },
  {
    title: "Cloud/Databases",
    skills: ["MySQL", "MongoDB", "Google Cloud(GCP)", "DialogFlow"]
  },
  {
    title: "Frameworks",
    skills: ["ReactJS", "NodeJS", "FastAPI", "Flutter", "Express", "REST API"]
  },
  {
    title: "Frontend",
    skills: ["Bootstrap", "Tailwind CSS", "Material UI", "Redux"]
  },
  {
    title: "Coursework",
    skills: ["Data Structures & Algorithms", "Object Oriented Programming", "Database Management", "Software Engineering"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Communication", "Adaptability"]
  }
];

const SkillCard = ({ category, skills, index }: { category: string; skills: string[]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
    >
      <div className="bg-primary/10 py-3 px-6">
        <h3 className="font-semibold text-lg">{category}</h3>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span 
              key={idx} 
              className="bg-white border border-primary/20 text-primary/90 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            I've acquired a diverse set of skills throughout my academic and professional journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              category={category.title}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
