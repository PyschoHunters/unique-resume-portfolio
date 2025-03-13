
import { motion } from "framer-motion";
import { Award, Book, FileText, Trophy } from "lucide-react";

const achievements = [
  {
    title: "Python for Data Science NPTEL",
    description: "Certification from IIT MADRAS",
    icon: Book,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Foundation Training on Digital Experience",
    description: "Certification from HCL Software",
    icon: FileText,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Cloud Computing in Power Systems",
    description: "Published a survey paper - Volume 12, June 2023 (IJARCET)",
    icon: FileText,
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Medical Chatbot Publication",
    description: "Published in the annual IEEE Conference held at Bangalore",
    icon: Award,
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Leadership Positions",
    description: "Held the positions of Membership Chair and Secretary for BMSCE ACM Student chapter from 2021-23.",
    icon: Trophy,
    color: "bg-rose-500/10 text-rose-600"
  },
  {
    title: "Eyanta Robotics Competition",
    description: "Won Level 3 Certificate from IIT Bombay",
    icon: Trophy,
    color: "bg-indigo-500/10 text-indigo-600"
  }
];

const AchievementCard = ({ achievement, index }: { achievement: typeof achievements[0]; index: number }) => {
  const Icon = achievement.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel rounded-xl p-6 hover-scale"
    >
      <div className={`w-12 h-12 ${achievement.color} rounded-full flex items-center justify-center mb-4`}>
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
      <p className="text-foreground/70 text-sm">{achievement.description}</p>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Some of my notable achievements, certifications, and recognitions throughout my journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
