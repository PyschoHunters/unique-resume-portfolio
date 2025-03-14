
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>({
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
  );
};

export default ContactForm;
