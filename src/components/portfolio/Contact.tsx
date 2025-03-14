
import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const isMobile = useIsMobile();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Use a simple fetch request instead of EmailJS
    fetch("https://formsubmit.co/ajax/manumohan.ai21@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formState.name,
        email: formState.email,
        message: formState.message
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Message sent successfully!', data);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormState({
          name: "",
          email: "",
          message: ""
        });
        
        toast.success("Message sent successfully! I'll get back to you soon.");
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      })
      .catch(error => {
        console.error('Failed to send message:', error);
        setIsSubmitting(false);
        toast.error("Failed to send message. Please try again later.");
      });
  };
  
  return (
    <section id="contact" className="py-16 md:py-20 bg-blue-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
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
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4 md:space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Contact Information</h3>
            <p className="text-foreground/80 mb-6 text-sm md:text-base">
              I'm currently open to new opportunities and collaborations in the field of AI, ML, and software development.
            </p>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-primary/10 rounded-full p-2 md:p-3 text-primary">
                  <Phone size={isMobile ? 16 : 20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-sm md:text-base">Phone</h4>
                  <p className="text-foreground/70 text-sm">+91-9176788623</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-primary/10 rounded-full p-2 md:p-3 text-primary">
                  <Mail size={isMobile ? 16 : 20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-sm md:text-base">Email</h4>
                  <p className="text-foreground/70 text-sm">manumohan.ai21@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-primary/10 rounded-full p-2 md:p-3 text-primary">
                  <MessageSquare size={isMobile ? 16 : 20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-sm md:text-base">Social Profiles</h4>
                  <div className="flex space-x-3 mt-2">
                    <a 
                      href="https://github.com/PyschoHunters" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/manumohanai/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://leetcode.com/u/manumohan0204/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors"
                      aria-label="LeetCode Profile"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.naukri.com/code360/profile/c0eb341d-2a8e-427c-9077-8a1ed29bb14a" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors"
                      aria-label="Naukri Profile"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M21.7,10.3l-9-9c-0.4-0.4-1-0.4-1.4,0l-9,9c-0.4,0.4-0.4,1,0,1.4l9,9c0.4,0.4,1,0.4,1.4,0l9-9C22.1,11.3,22.1,10.7,21.7,10.3z M14,14.5V12h-4v3H8v-4c0-0.6,0.4-1,1-1h5v-2.5l3.5,3.5L14,14.5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-panel rounded-xl p-4 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Send a Message</h3>
              
              {submitSuccess ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                  Thank you for your message! I'll get back to you soon.
                </div>
              ) : null}
              
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm md:text-base"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm md:text-base"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4 md:mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={isMobile ? 4 : 5}
                    className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm md:text-base"
                    placeholder="Hello, I'd like to talk about..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 md:px-6 md:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px] md:min-w-[150px] text-sm md:text-base"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
