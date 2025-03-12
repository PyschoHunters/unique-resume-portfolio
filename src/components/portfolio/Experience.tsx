
import { motion } from "framer-motion";

const experiences = [
  {
    position: "Research Intern",
    company: "Aeronautical Development Establishment (ADE), DRDO",
    location: "Bengaluru",
    period: "August 2024 - Sept 2024",
    description: "Developed an AI-based image matching algorithm using ORB, Brute Force Matching, and CNN for DRDL applications, achieving high-accuracy location identification for missile navigation."
  },
  {
    position: "Cloud and Data Intern",
    company: "Cloud Ambassadors, Bengaluru India",
    location: "Bengaluru",
    period: "June 2024 - August 2024",
    description: "Engineered a conversational system using DialogFlow CX for entity training and intent recognition, integrated with WebSocket protocols for bi-directional streaming, Google Cloud's TTS/STT APIs, and Gemini for natural language processing. Implemented automated testing scripts and containerized with Docker for seamless deployment."
  },
  {
    position: "Machine Learning Intern",
    company: "Global Edge Software Private Limited",
    location: "Bengaluru",
    period: "Oct 2023 - Nov 2023",
    description: "Performed tasks in image processing with OpenCV, NLP insights, PyTorch for neural networks, and YOLO v5 for object detection."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            My journey through various professional roles and internships has equipped me with diverse skills in AI and ML.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:translate-x-px"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:gap-10`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-md transform -translate-x-2 md:-translate-x-2.5 mt-5"></div>
                
                {/* Date/Company */}
                <div className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"
                } pl-10 md:pl-0`}
                >
                  <div className="bg-white p-1 inline-block rounded mb-2">
                    <span className="text-xs font-medium bg-blue-100 text-primary px-3 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-sm text-foreground/70">{exp.location}</p>
                </div>
                
                {/* Experience content */}
                <div className={`md:w-1/2 pl-10 ${
                  index % 2 === 0 ? "md:pl-10" : "md:pr-10 md:text-right"
                }`}
                >
                  <div className="glass-panel rounded-xl p-6 mt-4 md:mt-0">
                    <h4 className="text-lg font-semibold mb-2">{exp.position}</h4>
                    <p className="text-sm text-foreground/80">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
