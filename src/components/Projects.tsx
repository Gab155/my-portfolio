import React, { useState, useEffect, useRef } from "react";
import { Cloud, Code, X, ExternalLink, ChevronLeft, ChevronRight, Sparkles, Zap, Maximize2, Minimize2 } from "lucide-react";
import { Project } from "../types";

interface ProjectsProps {
  awsProjects: Project[];
  internalProjects: Project[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  const [isZooming, setIsZooming] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && project?.images && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isOpen, project?.images]);

  // Reset states when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setImageScale(1);
      setIsFullscreen(false);
      setIsZooming(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const projectImages = project?.images || [
    project?.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  ];

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageScale(1);
    setIsZooming(false);
  };

  const nextImage = () => {
    setImageLoading(true);
    setImageScale(1);
    setIsZooming(false);
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setImageLoading(true);
    setImageScale(1);
    setIsZooming(false);
    setCurrentImageIndex(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length
    );
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      setIsFullscreen(true);
      setImageScale(1);
    } else {
      setIsFullscreen(false);
      setImageScale(1);
    }
  };

  const handleZoom = () => {
    if (!isZooming) {
      setImageScale(1.5);
      setIsZooming(true);
    } else {
      setImageScale(1);
      setIsZooming(false);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      const newScale = Math.min(Math.max(0.5, imageScale + delta), 3);
      setImageScale(newScale);
      setIsZooming(newScale !== 1);
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 transition-all duration-300 ${
        isOpen ? "bg-black/90 backdrop-blur-sm" : "bg-transparent pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        ref={containerRef}
        className={`relative bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
          isFullscreen 
            ? "w-screen h-screen max-w-none max-h-none rounded-none" 
            : "w-full max-w-6xl max-h-[90vh]"
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{ 
          animation: "modalAppear 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 z-50 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 group touch-manipulation active:scale-95"
        >
          <X size={18} className="text-gray-700 group-hover:text-red-500 transition-colors md:w-5 md:h-5" />
        </button>

        {/* Fullscreen toggle button */}
        <button
          onClick={toggleFullscreen}
          className="absolute top-2 right-10 md:top-4 md:right-14 z-50 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 group touch-manipulation active:scale-95"
        >
          {isFullscreen ? (
            <Minimize2 size={18} className="text-gray-700 group-hover:text-blue-500 transition-colors md:w-5 md:h-5" />
          ) : (
            <Maximize2 size={18} className="text-gray-700 group-hover:text-blue-500 transition-colors md:w-5 md:h-5" />
          )}
        </button>

        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          {/* Left side - Images */}
          <div 
            className={`relative overflow-hidden bg-gradient-to-br from-gray-900 to-black transition-all duration-300 ${
              isFullscreen ? "lg:w-full" : "lg:w-3/5"
            }`}
            onWheel={handleWheel}
          >
            {/* Loading overlay */}
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black z-10">
                <div className="flex flex-col items-center">
                  <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-t-2 border-b-2 border-blue-400 mb-2 md:mb-4"></div>
                  <p className="text-white/60 text-xs md:text-sm">Loading image...</p>
                </div>
              </div>
            )}

            {/* Image counter */}
            {projectImages.length > 1 && (
              <div className="absolute top-2 right-2 md:top-4 md:right-4 z-20 px-2 py-1 md:px-3 md:py-1 bg-black/50 backdrop-blur-sm rounded-full">
                <p className="text-xs text-white font-semibold">
                  {currentImageIndex + 1} / {projectImages.length}
                </p>
              </div>
            )}

            {/* Image container */}
            <div className="relative w-full h-48 md:h-64 lg:h-full flex items-center justify-center p-2 md:p-8">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  ref={imageRef}
                  src={projectImages[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className={`transition-all duration-500 max-w-full max-h-full ${
                    imageLoading 
                      ? 'opacity-0 scale-95' 
                      : 'opacity-100 scale-100'
                  } ${isZooming ? 'cursor-move' : 'cursor-default'}`}
                  style={{
                    transform: `scale(${imageScale})`,
                    objectFit: isZooming ? 'none' : 'contain'
                  }}
                  onLoad={handleImageLoad}
                  onError={handleImageLoad}
                  onClick={handleZoom}
                />
              </div>

              {/* Navigation arrows */}
              {projectImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm rounded-full shadow-lg hover:bg-black/70 hover:scale-110 transition-all duration-200 group z-20 touch-manipulation active:scale-95"
                  >
                    <ChevronLeft size={20} className="text-white group-hover:text-blue-300 transition-colors md:w-6 md:h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm rounded-full shadow-lg hover:bg-black/70 hover:scale-110 transition-all duration-200 group z-20 touch-manipulation active:scale-95"
                  >
                    <ChevronRight size={20} className="text-white group-hover:text-blue-300 transition-colors md:w-6 md:h-6" />
                  </button>
                </>
              )}

              {/* Zoom hint */}
              {!isZooming && projectImages.length > 0 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full opacity-0 animate-fadeInUp animation-delay-1000 hidden md:block">
                  <p className="text-xs text-white/70">
                    Click image to zoom • Scroll to zoom
                  </p>
                </div>
              )}
            </div>

            {/* Image indicators */}
            {projectImages.length > 1 && (
              <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-20">
                <div className="flex gap-1 md:gap-2 bg-black/50 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setImageLoading(true);
                        setCurrentImageIndex(index);
                      }}
                      className={`transition-all duration-300 touch-manipulation active:scale-95 ${
                        index === currentImageIndex
                          ? "scale-125"
                          : "hover:scale-110"
                      }`}
                    >
                      <div
                        className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? project.type === 'aws' 
                              ? "bg-blue-400 w-6 md:w-8 shadow-lg shadow-blue-400/30"
                              : "bg-purple-400 w-6 md:w-8 shadow-lg shadow-purple-400/30"
                            : "bg-white/40 w-1.5 md:w-2 hover:bg-white/60"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right side - Content */}
          <div 
            className={`w-full lg:w-2/5 overflow-y-auto bg-gradient-to-b from-white to-gray-50 transition-all duration-300 ${
              isFullscreen ? 'hidden' : 'block'
            }`}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-10 p-4 md:p-6">
              <div className="flex items-start gap-3">
                <div className={`p-2 md:p-3 rounded-lg md:rounded-xl text-white ${
                  project.type === 'aws' 
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                    : 'bg-gradient-to-br from-purple-500 to-purple-600'
                }`}>
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1 animate-fadeIn">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-4 md:p-6">
              <div className="mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-200">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-blue-600">Role:</span>{" "}
                    <span className="font-semibold text-gray-800">{project.role}</span>
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-4 md:mb-6">
                <h4 className="text-sm font-bold text-gray-900 mb-2 md:mb-3 flex items-center gap-2">
                  <Code size={14} className="text-blue-500 md:w-4 md:h-4" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white text-gray-700 text-xs md:text-sm rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                      style={{
                        animation: `slideInRight 0.3s ease-out ${i * 0.05}s both`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-4 md:mb-6">
                <h4 className="text-sm font-bold text-gray-900 mb-2 md:mb-3 flex items-center gap-2">
                  <Zap size={14} className="text-yellow-500 md:w-4 md:h-4" />
                  Key Features
                </h4>
                <ul className="space-y-2 md:space-y-3">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-xs md:text-sm text-gray-700 flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-gradient-to-r from-white to-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200 group"
                      style={{
                        animation: `slideInRight 0.3s ease-out ${i * 0.05}s both`
                      }}
                    >
                      <div className={`p-0.5 md:p-1 rounded-full group-hover:scale-110 transition-transform ${
                        project.type === 'aws' 
                          ? 'bg-blue-100 text-blue-500' 
                          : 'bg-purple-100 text-purple-500'
                      }`}>
                        <Zap size={10} className="md:w-3 md:h-3" />
                      </div>
                      <span className="flex-1 group-hover:text-gray-900 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({
  project,
  onClick,
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  const projectImages = project.images || [
    project.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  ];

  // Auto-slide effect on hover
  useEffect(() => {
    if (hovering && projectImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [hovering, projectImages.length]);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setCurrentImageIndex(0);
      }}
      className="group bg-white rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-blue-300 touch-manipulation active:scale-[0.98]"
      style={{
        animation: "cardFloat 3s ease-in-out infinite"
      }}
    >
      <div className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" />
        )}
        
        <img
          src={projectImages[currentImageIndex]}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          } ${hovering ? 'scale-110' : ''}`}
          onLoad={() => setImageLoading(false)}
          onError={() => setImageLoading(false)}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Image indicators */}
        {projectImages.length > 1 && (
          <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 flex gap-1 md:gap-1.5">
            {projectImages.map((_, index) => (
              <div
                key={index}
                className={`transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white w-3 md:w-4 shadow-lg"
                    : "bg-white/50 w-1.5 md:w-2 group-hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between mb-3">
          <div className={`text-xl md:text-2xl mb-2 p-1.5 md:p-2 rounded-lg ${
            project.type === 'aws' 
              ? 'bg-blue-50 text-blue-600' 
              : 'bg-purple-50 text-purple-600'
          }`}>
            {project.icon}
          </div>
          <ExternalLink size={14} className="text-gray-400 group-hover:text-blue-500 transition-colors md:w-4 md:h-4" />
        </div>

        <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h4>
        <p className="text-xs md:text-sm text-gray-600 font-medium mb-2">
          {project.subtitle}
        </p>
        <p className="text-xs text-gray-500 mb-3">
          Role: <span className="font-semibold text-gray-700">{project.role}</span>
        </p>

        <div className="flex flex-wrap gap-1 md:gap-1.5 mb-4">
          {project.tech.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="px-1.5 py-0.5 md:px-2 md:py-1 bg-gray-50 text-gray-700 text-xs rounded border border-gray-200 hover:border-blue-300 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-gray-50 text-gray-500 text-xs rounded">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        <ul className="space-y-1 md:space-y-1.5">
          {project.features.slice(0, 2).map((feature, i) => (
            <li
              key={i}
              className="text-xs text-gray-600 flex items-start gap-2 group/feature"
            >
              <div className={`w-1.5 h-1.5 rounded-full mt-1 transition-transform group-hover/feature:scale-150 ${
                project.type === 'aws' ? 'bg-blue-500' : 'bg-purple-500'
              }`} />
              <span className="line-clamp-2 group-hover/feature:text-gray-800 transition-colors">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({
  awsProjects,
  internalProjects,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="py-12 md:py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-3 md:mb-4 border border-blue-100">
            <Sparkles size={12} className="text-blue-500 md:w-3.5 md:h-3.5" />
            <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Project Portfolio
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-4">
            AWS Infrastructure & Internal Systems showcasing technical expertise
          </p>
        </div>

        {/* AWS Projects Section */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="p-1.5 md:p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white">
              <Cloud size={16} className="md:w-5 md:h-5" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                AWS Infrastructure
              </h3>
              <p className="text-xs md:text-sm text-gray-500">
                Scalable cloud solutions
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {awsProjects.map((project, index) => (
              <div 
                key={index}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => openModal(project)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Internal Projects Section */}
        <div>
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="p-1.5 md:p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-white">
              <Code size={16} className="md:w-5 md:h-5" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                Internal Systems
              </h3>
              <p className="text-xs md:text-sm text-gray-500">
                Custom business solutions
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {internalProjects.map((project, index) => (
              <div 
                key={index}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => openModal(project)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;