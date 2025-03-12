
import { useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "AJV Manumohan | AI & ML Engineer";
    
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
