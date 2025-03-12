
import { motion } from "framer-motion";
import { useState } from "react";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Medical Chatbot",
    description: "Medical chatbot using PaePaz, LangChain, Pinecone, Llama 2, and Hugging Face embeddings to deliver accurate symptom evaluation, medication guidance, and remedy suggestions, achieving high response accuracy.",
    image: "public/lovable-uploads/377ef43a-c802-4a22-b2eb-b0513b32e232.png",
    link: "https://github.com/ajvmanumohan/medical-chatbot",
    tags: ["AI", "Machine Learning", "Healthcare", "NLP"]
  },
  {
    title: "Plant Disease Prediction",
    description: "Developed a high-accuracy plant disease prediction model using a modified Tiny VGG CNN architecture with Python and TensorFlow/PyTorch.",
    image: "/placeholder.svg",
    link: "https://github.com/ajvmanumohan/plant-disease",
    tags: ["Computer Vision", "AI", "Agriculture", "CNN"]
  },
  {
    title: "Car Rental Management System",
    description: "Developed a user-friendly car rental website with a detailed vehicle catalog and seamless booking process using HTML, CSS, JavaScript, Bootstrap, PHP, MySQL, and Docker.",
    image: "/placeholder.svg",
    link: "https://github.com/ajvmanumohan/car-rental",
    tags: ["Web Development", "Database", "UX/UI", "Backend"]
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-xl overflow-hidden relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}></div>
        
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span 
                key={idx} 
                className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
            className="text-white/90 text-sm mb-4 line-clamp-3"
          >
            {project.description}
          </motion.p>
          
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Github size={16} />
            View on GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Notable <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Take a look at some of the projects I've worked on, showcasing my skills in AI, ML, and software development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
