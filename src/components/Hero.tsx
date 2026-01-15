// src/components/Hero.tsx
// Hero section sa top ng page with carousel - MODERN REDESIGN

import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Code,
  Cpu,
  Zap,
  Globe,
} from "lucide-react";
import { PersonalInfo } from "../types";

interface HeroProps {
  personalInfo: PersonalInfo;
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ personalInfo, scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
      alt: "Web Development Code",
      icon: <Code className="w-16 h-16 md:w-20 md:h-20" />,
    },
    {
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
      alt: "Programming",
      icon: <Cpu className="w-16 h-16 md:w-20 md:h-20" />,
    },
    {
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
      alt: "Software Development",
      icon: <Zap className="w-16 h-16 md:w-20 md:h-20" />,
    },
    {
      url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
      alt: "Coding Workspace",
      icon: <Globe className="w-16 h-16 md:w-20 md:h-20" />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setMousePosition({ x, y });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
      } as React.CSSProperties}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 z-0" />
      
      {/* Animated Grid */}
      <div className="animated-grid absolute inset-0 z-0" />
      
      {/* Floating Particles */}
      <div className="particles-container absolute inset-0 z-0" />

      {/* Carousel Background with Parallax Effect */}
      <div className="carousel-container absolute inset-0 z-10 overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? "active" : ""
            }`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%) scale(1.1)`,
              opacity: index === currentSlide ? 1 : 0,
            }}
          >
            <div className="relative w-full h-full">
              <img
                src={image.url}
                alt={image.alt}
                className="carousel-image w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-950/20 to-blue-950/20" />
              {/* Slide Icon Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 scale-150 hidden md:block">
                {image.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls - Hide on mobile */}
      <button
        onClick={prevSlide}
        className="carousel-btn prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-30 group hidden md:block"
        aria-label="Previous slide"
      >
        <div className="carousel-btn-inner">
          <ChevronLeft size={28} className="text-white" />
        </div>
        <span className="carousel-btn-tooltip">Previous</span>
      </button>
      
      <button
        onClick={nextSlide}
        className="carousel-btn next-btn absolute right-4 top-1/2 -translate-y-1/2 z-30 group hidden md:block"
        aria-label="Next slide"
      >
        <div className="carousel-btn-inner">
          <ChevronRight size={28} className="text-white" />
        </div>
        <span className="carousel-btn-tooltip">Next</span>
      </button>

      {/* Carousel Indicators - Mobile Friendly */}
      <div className="carousel-indicators absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="carousel-dot group relative touch-manipulation"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`carousel-dot-inner ${
                index === currentSlide ? "active" : ""
              }`}
            />
            <span className="carousel-dot-tooltip">Slide {index + 1}</span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto w-full px-4">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Animated Welcome Badge */}
          <div className="badge-container inline-block">
            <div className="badge-wrapper relative group">
              <div className="badge-glow" />
              <div className="badge-content flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-full border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                <Sparkles size={14} className="text-blue-400 animate-sparkle" />
                <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Welcome to my Portfolio
                </span>
              </div>
            </div>
          </div>

          {/* Animated Name with Gradient Flow */}
<div className="name-container relative">
  <h3 
    className="animated-name font-bold tracking-tight"
    style={{
      fontSize: 'clamp(2rem, 8vw, 4.5rem)'
    }}
  >
    {personalInfo.name.split("").map((letter, index) => (
      <span
        key={index}
        className="letter-animate inline-block"
        style={{ animationDelay: `${index * 0.04}s` }}
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ))}
  </h3>
  <div className="name-glow" />
</div>

          {/* Title with Typing Animation */}
          <div className="title-container relative inline-block">
            <p className="typing-text text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {personalInfo.title}
            </p>
            <div className="title-underline" />
            <div className="title-cursor hidden md:block" />
          </div>

          {/* Contact Info Cards - Responsive Grid */}
          <div className="contact-grid grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md sm:max-w-2xl mx-auto pt-6 md:pt-8">
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="contact-card email-card group relative overflow-hidden touch-manipulation"
            >
              <div className="card-glow" />
              <div className="card-content flex items-center gap-3 p-3 md:p-4 relative z-10">
                <div className="icon-wrapper p-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <Mail size={16} className="text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs md:text-sm font-medium text-white/90 group-hover:text-white transition-colors truncate">
                  {personalInfo.contact.email}
                </span>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.contact.phone}`}
              className="contact-card phone-card group relative overflow-hidden touch-manipulation"
            >
              <div className="card-glow" />
              <div className="card-content flex items-center gap-3 p-3 md:p-4 relative z-10">
                <div className="icon-wrapper p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <Phone size={16} className="text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs md:text-sm font-medium text-white/90 group-hover:text-white transition-colors truncate">
                  {personalInfo.contact.phone}
                </span>
              </div>
            </a>

            <div className="contact-card location-card group relative overflow-hidden">
              <div className="card-glow" />
              <div className="card-content flex items-center gap-3 p-3 md:p-4 relative z-10">
                <div className="icon-wrapper p-2 bg-gradient-to-br from-slate-500/20 to-gray-500/20 rounded-lg">
                  <MapPin size={16} className="text-slate-300" />
                </div>
                <span className="text-xs md:text-sm font-medium text-white/90 truncate">
                  {personalInfo.contact.address}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Responsive Stack */}
          <div className="cta-container flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 pt-8 md:pt-12 max-w-md sm:max-w-lg mx-auto">
            <button
              onClick={() => scrollToSection("projects")}
              className="cta-btn primary-btn group relative overflow-hidden touch-manipulation active:scale-95"
            >
              <div className="btn-glow" />
              <div className="btn-shine" />
              <span className="btn-content flex items-center justify-center gap-2 relative z-10">
                Explore Projects
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </span>
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="cta-btn secondary-btn group relative overflow-hidden touch-manipulation active:scale-95"
            >
              <span className="btn-content flex items-center justify-center gap-2 relative z-10">
                Discover More
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </span>
            </button>
          </div>

          {/* Scroll Indicator - Hide on mobile */}
          <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrows">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Background Blobs */}
      <div className="blob-container absolute inset-0 z-5 overflow-hidden pointer-events-none">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
    </section>
  );
};

export default Hero;