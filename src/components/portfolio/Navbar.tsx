
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

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
        scrolled ? "glass-panel py-2 md:py-3" : "py-3 md:py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl font-display font-bold text-gradient"
        >
          AJV Manumohan
        </motion.div>
        
        {/* Mobile menu button */}
        {isMobile && (
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        )}
        
        {/* Desktop navigation */}
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
                offset={-80}
                duration={800}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.a
          href="mailto:manumohan.ai21@gmail.com"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden md:block text-sm font-medium bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
        >
          Contact Me
        </motion.a>
      </div>
      
      {/* Mobile menu */}
      {isMobile && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white/95 backdrop-blur-sm"
        >
          <div className={`container mx-auto px-4 py-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="mailto:manumohan.ai21@gmail.com"
                className="text-base font-medium text-primary hover:text-primary/90 transition-colors py-2"
                onClick={handleLinkClick}
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
