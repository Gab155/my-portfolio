// src/components/About.tsx
// Enhanced with cool designs and animations

import React, { useState, useEffect, useRef } from "react";
import { 
  Cpu, 
  Rocket, 
  Target, 
  Users, 
  TrendingUp,
  Award,
  MessageSquare,
  Brain,
  Zap,
  ChevronRight,
  Sparkles,
  CircleDashed,
  Gem
} from "lucide-react";
import { PersonalInfo } from "../types";

interface AboutProps {
  personalInfo: PersonalInfo;
}

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <Rocket className="w-5 h-5" />, label: "Projects", value: "47+", color: "text-blue-600" },
    { icon: <Target className="w-5 h-5" />, label: "Success Rate", value: "98%", color: "text-emerald-600" },
    { icon: <Users className="w-5 h-5" />, label: "Team Size", value: "12", color: "text-purple-600" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "Growth", value: "300%", color: "text-orange-600" },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Brain className="w-4 h-4" /> },
    { id: 'mission', label: 'Mission', icon: <Target className="w-4 h-4" /> },
    { id: 'values', label: 'Values', icon: <Award className="w-4 h-4" /> },
    { id: 'approach', label: 'Approach', icon: <Zap className="w-4 h-4" /> },
  ];

  const values = [
    { title: "Innovation First", description: "Pushing boundaries with emerging technologies", color: "bg-gradient-to-br from-blue-500 to-cyan-400" },
    { title: "Quality Excellence", description: "Uncompromising standards in every deliverable", color: "bg-gradient-to-br from-emerald-500 to-green-400" },
    { title: "Collaborative Growth", description: "Building together, growing together", color: "bg-gradient-to-br from-purple-500 to-pink-400" },
    { title: "Future-Ready", description: "Anticipating needs before they emerge", color: "bg-gradient-to-br from-orange-500 to-yellow-400" },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`py-16 md:py-28 px-4 bg-white relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-purple-50 to-pink-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-30 animate-float-slower"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with enhanced design */}
        <div className="text-center mb-16">
         
          
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 relative z-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                About Me
              </span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full animate-width-pulse"></div>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg relative group">
            <span className="relative">
              Crafting the future, one line of code at a time
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500"></span>
            </span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Stats & Overview */}
          <div className="lg:w-2/3 space-y-10">
            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-500 delay-${index * 100}`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 150}ms`
                  }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-white rounded-full -translate-y-6 translate-x-6 opacity-50"></div>
                  <div className="flex items-center gap-4 mb-3 relative z-10">
                    <div className={`p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">Click for details →</div>
                </div>
              ))}
            </div>

            {/* Enhanced Tabs */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-4 text-sm font-medium flex items-center justify-center gap-3 relative transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'text-blue-700'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                    {activeTab === tab.id && (
                      <>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                      </>
                    )}
                  </button>
                ))}
              </div>
              
              <div className="p-8">
                <div className={`transition-all duration-500 ${activeTab === 'overview' ? 'opacity-100' : 'opacity-0 hidden'}`}>
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {personalInfo.summary}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 font-medium">Cloud Architecture</span>
                          <span className="text-sm font-bold text-blue-600 flex items-center gap-1">
                            95%
                            <Zap className="w-4 h-4 animate-bounce" />
                          </span>
                        </div>
                        <div className="h-3 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full overflow-hidden shadow-inner">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full relative overflow-hidden"
                            style={{ width: '95%' }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20 animate-shimmer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 font-medium">AI/ML Solutions</span>
                          <span className="text-sm font-bold text-purple-600 flex items-center gap-1">
                            90%
                            <Brain className="w-4 h-4 animate-pulse" />
                          </span>
                        </div>
                        <div className="h-3 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full overflow-hidden shadow-inner">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full relative overflow-hidden"
                            style={{ width: '90%' }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20 animate-shimmer"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {activeTab === 'mission' && (
                  <div className="space-y-6 animate-fadeIn">
                    <h4 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                      <Gem className="w-6 h-6 text-blue-500" />
                      Building Tomorrow's Infrastructure
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      My mission is to bridge the gap between emerging technologies and practical business solutions, creating systems that are not only innovative but also scalable, secure, and sustainable for the future.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 200}ms`
                  }}
                >
                  <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {index === 0 && <Zap className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />}
                    {index === 1 && <Award className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />}
                    {index === 2 && <Users className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />}
                    {index === 3 && <Target className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <span className="text-xs text-gray-400 font-medium group-hover:text-gray-500 transition-colors duration-300">
                      Learn more →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Enhanced Profile Card */}
          <div className="lg:w-1/3 space-y-8">
            {/* Enhanced Profile Card */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 shadow-lg relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
              
              <div className="flex flex-col items-center text-center relative z-10">
                {/* Avatar with animation */}
                <div className="relative mb-8">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-100 to-white border-8 border-white shadow-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-pulse">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {personalInfo.name}
                </h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-lg mb-6">
                  {personalInfo.title}
                </p>
                
                {/* Status */}
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 rounded-full mb-8 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <div className="relative">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span className="text-sm font-semibold">Available for projects</span>
                </div>

                {/* Contact Info with enhanced design */}
                <div className="space-y-4 w-full mb-8">
                  {[
                    { icon: "📧", label: "Email", value: personalInfo.contact.email },
                    { icon: "📱", label: "Phone", value: personalInfo.contact.phone },
                    { icon: "📍", label: "Location", value: personalInfo.contact.address },
                  ].map((contact, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-md transition-all duration-300 group/contact hover:-translate-x-1"
                    >
                      <span className="text-2xl group-hover/contact:scale-110 transition-transform duration-300">{contact.icon}</span>
                      <div className="text-left flex-1">
                        <div className="text-xs text-gray-500 font-medium">{contact.label}</div>
                        <div className="text-sm font-semibold text-gray-800 group-hover/contact:text-gray-900 transition-colors duration-300">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced CTA Button */}
                <button className="w-full py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl font-bold hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 group/btn hover:-translate-y-1">
                  <MessageSquare className="w-6 h-6 group-hover/btn:scale-110 transition-transform duration-300" />
                  <span>Connect with me</span>
                  <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-pink-500/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </div>

            {/* Enhanced Availability Indicator */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 shadow-lg">
              <h4 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-blue-500" />
                Current Availability
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 font-medium">Project Load</span>
                  <span className="text-lg font-bold text-blue-600">65%</span>
                </div>
                <div className="h-4 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative overflow-hidden"
                    style={{ width: '65%' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30 animate-shimmer"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <span className="font-semibold text-gray-700">Available for new projects</span> starting March 2026
                </p>
                <div className="flex gap-2 pt-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className={`flex-1 h-2 rounded-full ${
                        i <= 3 ? 'bg-gradient-to-r from-blue-400 to-cyan-300' : 'bg-gray-200'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;