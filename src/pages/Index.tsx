import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, ExternalLink, Download, Phone, MapPin, ChevronDown, Menu, X } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import SkillSection from "@/components/SkillSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CertificationGrid from "@/components/CertificationGrid";
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  const projects = [{
    title: "Greent",
    description: "Eco-friendly mobile and web application promoting sustainable living",
    image: "/greent.png",
    tech: ["React", "Node.js", "MongoDB", "React Native"],
    liveUrl: "https://greent-woad.vercel.app/",
  }, {
    title: "havana.tn",
    description: "Comprehensive e-commerce platform for modern watches",
    image: "/havana.tn.jpg",
    tech: ["React", "TypeScript", "Express", "PostgreSQL"],
    liveUrl: "https://havana-tn.vercel.app/",
  }, {
    title: "HBC Tunisia",
    description: "Community social platform for a new E-COIN currency",
    image: "/hbc.jpg",
    tech: ["React", "PHP", "MySQL", "Socket.io"],
    liveUrl: "hannibalbarcacoin.vercel.app",
  }, {
    title: "accentique-chic-boutique",
    description: "Digital platform showcasing creative accessories and fashion",
    image: "/accentique.PNG",
    tech: ["React", "Tailwind CSS", "Node.js"],
    liveUrl: "https://accentique-tn.vercel.app",
  }, {
    title: "Quick URL Shortener",
    description: "Fast and reliable URL shortening service",
    image: "/link.png",
    tech: ["JavaScript", "Express", "MongoDB"],
    liveUrl: "https://alias-link-maker.vercel.app/",
  }, {
    title: "Pomodoro Timer",
    description: "Productivity app based on the Pomodoro technique",
    image: "/pomodoro.png",
    tech: ["React", "TypeScript", "CSS3"],
    liveUrl: "https://pomodoro-weld-beta.vercel.app/",
  }];
  return <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Najem Eddine</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-teal-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-teal-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-teal-600 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-teal-600 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-teal-600 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-teal-600 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-teal-600 transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors">
                  Skills
                </button>
                <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors">
                  Projects
                </button>
                <button onClick={() => scrollToSection('experience')} className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors">
                  Experience
                </button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors">
                  Contact
                </button>
              </div>
            </div>}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Jlassi Najem Eddine
            </h1>
            <p className="text-xl md:text-2xl text-teal-200 mb-4">
              Developer | Creator | Entrepreneur
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Building impactful digital solutions for web, mobile, and media with 4+ years of experience
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button onClick={() => scrollToSection('projects')} className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg">
                See My Work
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-white hover:bg-white px-8 py-3 text-lg text-slate-950">
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="mailto:jlassinajm20@gmail.com" className="text-white hover:text-teal-300 transition-colors">
                <Mail size={28} />
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-white" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white text-6xl font-bold">
                  <img 
                      src="/profile picture.jpg" 
                      alt="Profile picture" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = '/default-image.jpg'
                      }}
                    />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate developer and entrepreneur currently pursuing my Bachelor's in IT at ISET (2024–2027). 
                As the CEO & Founder of APEX.TUN, I'm dedicated to creating innovative digital solutions that make a difference.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 4 years of experience in web and mobile development, I specialize in creating user-centric applications 
                that solve real-world problems. My passion extends beyond coding to include media production, education, and 
                building communities that foster growth and creativity.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Badge variant="secondary" className="px-4 py-2">Leadership</Badge>
                <Badge variant="secondary" className="px-4 py-2">Innovation</Badge>
                <Badge variant="secondary" className="px-4 py-2">Problem Solving</Badge>
                <Badge variant="secondary" className="px-4 py-2">Team Building</Badge>
              </div>

              <Button className="mt-6 bg-teal-600 hover:bg-teal-700 text-white">
                <Download className="mr-2" size={16} />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillSection />

      {/* Certifications Section */}
      <CertificationGrid />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in web and mobile development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceTimeline />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-teal-600 p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-300">jlassinajm20@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-teal-600 p-3 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-300">+216 95551938</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-teal-600 p-3 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="text-gray-300">Mohamadia, Tunisia</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2025 Jlassi Najem Eddine. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:jlassinajm20@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
