
import { motion } from "framer-motion";

const ContactTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
        Get In <span className="text-gradient">Touch</span>
      </h2>
      <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4 md:mb-6"></div>
      <p className="text-foreground/80 max-w-2xl mx-auto text-sm md:text-base">
        Feel free to reach out for collaborations, opportunities, or just to say hello!
      </p>
    </motion.div>
  );
};

export default ContactTitle;
