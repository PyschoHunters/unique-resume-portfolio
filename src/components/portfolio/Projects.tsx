
import { motion } from "framer-motion";
import { useState } from "react";
import { Github } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const projects = [
  {
    title: "Medical Chatbot",
    description: "Medical chatbot using PaePaz, LangChain, Pinecone, Llama 2, and Hugging Face embeddings to deliver accurate symptom evaluation, medication guidance, and remedy suggestions, achieving high response accuracy.",
    image: "/lovable-uploads/d173438c-aa8a-49c3-a759-2324b51849bd.png",
    link: "https://github.com/PyschoHunters/Medical-Chatbot",
    tags: ["AI", "Machine Learning", "Healthcare", "NLP"]
  },
  {
    title: "Plant Disease Prediction",
    description: "Developed a high-accuracy plant disease prediction model using a modified Tiny VGG CNN architecture with Python and TensorFlow/PyTorch.",
    image: "/lovable-uploads/f3517632-38a8-4e57-bb7a-3083812825e8.png",
    link: "https://github.com/PyschoHunters/Plant-Disease-Detection",
    tags: ["Computer Vision", "AI", "Agriculture", "CNN"]
  },
  {
    title: "Car Rental Management System",
    description: "Developed a user-friendly car rental website with a detailed vehicle catalog and seamless booking process using HTML, CSS, JavaScript, Bootstrap, PHP, MySQL, and Docker.",
    image: "/lovable-uploads/fba9563f-002d-4b49-a3f3-5c421d7cec3e.png",
    link: "https://github.com/PyschoHunters/Car-Rental-Management-System",
    tags: ["Web Development", "Database", "UX/UI", "Backend"]
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  
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
        
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300 ${isHovered || isMobile ? 'opacity-100' : 'opacity-80'}`}></div>
        
        <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
          <h3 className="text-white text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-2 md:mb-3">
            {project.tags.slice(0, isMobile ? 2 : 3).map((tag, idx) => (
              <span 
                key={idx} 
                className="bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p 
            className={`text-white/90 text-xs md:text-sm mb-3 line-clamp-3 ${isMobile ? 'block' : (isHovered ? 'block' : 'hidden')}`}
          >
            {project.description}
          </p>
          
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 bg-primary text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium hover:bg-primary/90 transition-colors ${isMobile ? 'block' : (isHovered ? 'opacity-100' : 'opacity-0 translate-y-2')}`}
            style={{
              transition: "opacity 0.3s ease, transform 0.3s ease"
            }}
          >
            <Github size={isMobile ? 14 : 16} />
            View on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="projects" className="py-16 md:py-20 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Notable <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Take a look at some of the projects I've worked on, showcasing my skills in software engineering, AI, and ML.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
