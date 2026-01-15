// src/components/Footer.tsx
// Footer component with simplified pixel 2D design

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);
  const [codeText, setCodeText] = useState("");
  const [codeIndex, setCodeIndex] = useState(0);

  const codeSnippets = [
    "const dev = 'awesome';",
    "npm install skills",
    "git commit -m 'life'",
    "console.log('Hi!');",
    "sudo make coffee",
  ];

  const techStack = [
    { name: "React", color: "text-cyan-400" },
    { name: "TypeScript", color: "text-blue-400" },
    { name: "Tailwind CSS", color: "text-teal-400" },
    { name: "Node.js", color: "text-green-400" },
    { name: "PostgreSQL", color: "text-blue-500" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/kingpat015",
      icon: Github,
      color: "hover:bg-slate-700",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/patrick-leimuel-aganos-0a4609221",
      icon: Linkedin,
      color: "hover:bg-blue-600",
    },
    {
      name: "Email",
      url: "mailto:kingpatrickleimuel15@gmail.com",
      icon: Mail,
      color: "hover:bg-red-500",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/aganosu.patto",
      icon: Facebook,
      color: "hover:bg-blue-500",
    },
  ];

  // Simplified character movement
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPos = prev + direction;
        if (newPos >= 90) setDirection(-1);
        if (newPos <= 0) setDirection(1);
        return newPos;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [direction]);

  // Simplified typing animation
  useEffect(() => {
    const currentSnippet = codeSnippets[codeIndex];
    let currentChar = 0;
    
    const typeInterval = setInterval(() => {
      if (currentChar <= currentSnippet.length) {
        setCodeText(currentSnippet.substring(0, currentChar));
        currentChar++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCodeIndex((prev) => (prev + 1) % codeSnippets.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [codeIndex]);

  return (
    <footer className="relative bg-slate-900 text-white py-8 px-4 overflow-hidden">
      <style>{`
        @keyframes pixelMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(2px); }
        }
        
        @keyframes cursorBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-20px); opacity: 0; }
        }

        @keyframes techSlide {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .pixel-border {
          border-width: 2px;
          border-style: solid;
        }

        .pixel-box {
          box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
        }

        .cursor {
          animation: cursorBlink 1s infinite;
        }
      `}</style>

      {/* Pixel background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Crect x='0' y='0' width='1' height='1'/%3E%3Crect x='10' y='0' width='1' height='1'/%3E%3Crect x='0' y='10' width='1' height='1'/%3E%3Crect x='10' y='10' width='1' height='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Pixel Scene Container */}
        <div className="mb-8 relative h-24 bg-slate-800 border-2 border-slate-700 pixel-box overflow-hidden">
          {/* Floor */}
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-green-900 via-green-800 to-green-900"></div>

          {/* Moving Pixel Character */}
          <div
            className="absolute bottom-3 transition-transform duration-80"
            style={{
              left: `${position}%`,
              transform: direction === -1 ? "scaleX(-1)" : "scaleX(1)",
            }}
          >
            {/* Simple 8x8 pixel character */}
            <div className="relative">
              {/* Body */}
              <div className="w-8 h-8 bg-blue-600 pixel-border border-blue-800"></div>
              {/* Head */}
              <div className="absolute -top-3 left-2 w-4 h-4 bg-amber-200 pixel-border border-amber-800"></div>
              {/* Legs */}
              <div className="absolute -bottom-3 left-1 w-2 h-4 bg-slate-700 pixel-border border-slate-800"></div>
              <div className="absolute -bottom-3 left-5 w-2 h-4 bg-slate-700 pixel-border border-slate-800"></div>
            </div>
          </div>

          {/* Code Display */}
          <div className="absolute top-2 left-2 right-2 bg-black/90 border-2 border-green-700 p-2">
            <div className="flex gap-1 mb-1">
              <div className="w-1.5 h-1.5 bg-red-600"></div>
              <div className="w-1.5 h-1.5 bg-yellow-600"></div>
              <div className="w-1.5 h-1.5 bg-green-600"></div>
            </div>
            <div className="font-mono text-xs text-green-400">
              <span className="text-green-600">$ </span>
              {codeText}
              <span className="cursor ml-0.5">█</span>
            </div>
          </div>

          {/* Floating Pixels */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-cyan-400"
              style={{
                bottom: '20%',
                left: `${15 + i * 25}%`,
                animation: `floatUp 2s ${i * 0.3}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Tech Stack - Simplified */}
        <div className="mb-6">
          <h4 className="text-center text-xs font-semibold text-slate-400 mb-3 tracking-wider uppercase">
            Tech Stack
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="px-3 py-1.5 bg-slate-800/80 border border-slate-700 rounded pixel-box transition-all duration-200 hover:translate-y-[-2px] hover:border-slate-600"
                style={{
                  animation: `techSlide 0.3s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <span className={`text-xs font-medium ${tech.color}`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links - Pixel Style */}
        <div className="mb-6">
          <h4 className="text-center text-xs font-semibold text-slate-400 mb-3 tracking-wider uppercase">
            Connect
          </h4>
          <div className="flex justify-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800/80 border border-slate-700 rounded pixel-box transition-all duration-200 hover:translate-y-[-2px] hover:border-slate-600 group"
                  aria-label={social.name}
                >
                  <Icon
                    size={16}
                    className="text-slate-300 group-hover:text-white transition-colors"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Pixel Divider */}
        <div className="flex justify-center mb-4">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-px mx-0.5 bg-slate-600"
              style={{ animation: i % 2 === 0 ? 'pixelMove 1s infinite' : 'none' }}
            />
          ))}
        </div>

        {/* Copyright - Pixel Text */}
        <div className="text-center">
          <p className="text-xs text-slate-500 mb-1 tracking-wider">
            <span className="text-slate-400 font-mono">Made by Gabriel Olivares</span>
          </p>
          <p className="text-xs text-slate-600 font-mono">© 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;