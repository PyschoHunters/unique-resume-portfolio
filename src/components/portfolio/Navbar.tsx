
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl font-display font-bold text-gradient"
        >
          AJV Manumohan
        </motion.div>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.a
          href="mailto:ajvmanumohan@gmail.com"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden md:block text-sm font-medium bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
        >
          Contact Me
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
