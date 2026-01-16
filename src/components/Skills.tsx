// src/components/Skills.tsx
// MOBILE RESPONSIVE VERSION

import React, { useState, useEffect, JSX } from "react";
import {
  Zap,
  Cloud,
  Brain,
  Code,
  Shield,
  Rocket,
  TrendingUp,
  Database,
  Smartphone,
  Container,
  Server,
  Lock,
  Globe,
  Cpu,
  Palette,
  Award,
  CheckCircle,
  Clock,
  BarChart2,
  Sparkles
} from "lucide-react";
import { Skill } from "../types";

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>([]);

  useEffect(() => {
    const timeouts = skills.map((skill, index) => {
      return setTimeout(() => {
        setAnimatedLevels(prev => {
          const newLevels = [...prev];
          newLevels[index] = skill.level;
          return newLevels;
        });
      }, index * 150);
    });

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, [skills]);

  const getSkillIcon = (category: string) => {
    const icons: Record<string, JSX.Element> = {
      'cloud & devops': <Cloud className="w-5 h-5 md:w-6 md:h-6" />,
      'ai & machine learning': <Brain className="w-5 h-5 md:w-6 md:h-6" />,
      'frontend': <Code className="w-5 h-5 md:w-6 md:h-6" />,
      'backend': <Server className="w-5 h-5 md:w-6 md:h-6" />,
      'cybersecurity': <Shield className="w-5 h-5 md:w-6 md:h-6" />,
      'emerging tech': <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
      'web development': <Globe className="w-5 h-5 md:w-6 md:h-6" />,
      'programming languages': <Cpu className="w-5 h-5 md:w-6 md:h-6" />,
      'database': <Database className="w-5 h-5 md:w-6 md:h-6" />,
      'mobile': <Smartphone className="w-5 h-5 md:w-6 md:h-6" />,
    };
    return icons[category.toLowerCase()] || <Zap className="w-5 h-5 md:w-6 md:h-6" />;
  };

  const getItemIcon = (itemName: string) => {
    const lowerName = itemName.toLowerCase();
    
    const iconMap: Record<string, JSX.Element> = {
      'html': <Globe className="w-3 h-3 md:w-4 md:h-4" />,
      'css': <Palette className="w-3 h-3 md:w-4 md:h-4" />,
      'javascript': <Code className="w-3 h-3 md:w-4 md:h-4" />,
      'typescript': <Code className="w-3 h-3 md:w-4 md:h-4" />,
      'react': <Code className="w-3 h-3 md:w-4 md:h-4" />,
      'angular': <Globe className="w-3 h-3 md:w-4 md:h-4" />,
      'vue': <Globe className="w-3 h-3 md:w-4 md:h-4" />,
      'node': <Server className="w-3 h-3 md:w-4 md:h-4" />,
      'python': <Cpu className="w-3 h-3 md:w-4 md:h-4" />,
      'java': <Cpu className="w-3 h-3 md:w-4 md:h-4" />,
      'c#': <Cpu className="w-3 h-3 md:w-4 md:h-4" />,
      'php': <Server className="w-3 h-3 md:w-4 md:h-4" />,
      'mysql': <Database className="w-3 h-3 md:w-4 md:h-4" />,
      'mongodb': <Database className="w-3 h-3 md:w-4 md:h-4" />,
      'aws': <Cloud className="w-3 h-3 md:w-4 md:h-4" />,
      'docker': <Container className="w-3 h-3 md:w-4 md:h-4" />,
      'kubernetes': <Container className="w-3 h-3 md:w-4 md:h-4" />,
      'git': <Code className="w-3 h-3 md:w-4 md:h-4" />,
      'linux': <Server className="w-3 h-3 md:w-4 md:h-4" />,
      'react native': <Smartphone className="w-3 h-3 md:w-4 md:h-4" />,
      'flutter': <Smartphone className="w-3 h-3 md:w-4 md:h-4" />,
      'security': <Shield className="w-3 h-3 md:w-4 md:h-4" />,
      'blockchain': <Database className="w-3 h-3 md:w-4 md:h-4" />,
    };

    for (const [key, icon] of Object.entries(iconMap)) {
      if (lowerName.includes(key)) return icon;
    }
    
    return <Sparkles className="w-3 h-3 md:w-4 md:h-4" />;
  };

  const getCategoryColor = (index: number) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-cyan-500',
      'bg-gradient-to-r from-purple-500 to-pink-500',
      'bg-gradient-to-r from-emerald-500 to-teal-500',
      'bg-gradient-to-r from-orange-500 to-red-500',
      'bg-gradient-to-r from-indigo-500 to-blue-500',
    ];
    return colors[index % colors.length];
  };

  const currentSkill = skills[activeCategory];

  return (
    <section id="skills" className="py-12 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900">
            Technical Skills
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Expertise across modern web development and cloud technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Skills Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`group bg-white rounded-lg md:rounded-xl p-4 md:p-6 border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                    activeCategory === index
                      ? 'border-blue-500 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className={`p-2 md:p-3 rounded-lg ${getCategoryColor(index)} bg-opacity-10`}>
                      {getSkillIcon(skill.category)}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base md:text-lg font-bold text-gray-900">{skill.category}</h4>
                      <div className="flex items-center gap-1 md:gap-2 mt-1">
                        <span className="text-xs md:text-sm text-blue-600 font-medium">
                          Level: {animatedLevels[index] || 0}%
                        </span>
                        <span className="text-xs md:text-sm text-gray-500">
                          • {skill.items.length} technologies
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4 md:mb-6">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs md:text-sm text-gray-600">Proficiency</span>
                      <span className="text-xs md:text-sm font-semibold text-gray-900">
                        {animatedLevels[index] || 0}%
                      </span>
                    </div>
                    <div className="h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getCategoryColor(index)} transition-all duration-1000`}
                        style={{ width: `${animatedLevels[index] || 0}%` }}
                      />
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {skill.items.slice(0, 4).map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm bg-gray-50 rounded"
                      >
                        {getItemIcon(item)}
                        <span className="font-medium truncate max-w-[80px] md:max-w-none">{item}</span>
                      </div>
                    ))}
                    {skill.items.length > 4 && (
                      <div className="text-xs md:text-sm text-gray-500 px-2 py-1 md:px-3 md:py-2">
                        +{skill.items.length - 4} more
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className={`p-2 md:p-3 rounded-lg ${getCategoryColor(activeCategory)} text-white`}>
                  {getSkillIcon(currentSkill.category)}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">{currentSkill.category}</h3>
                  <p className="text-xs md:text-sm text-gray-600">Current focus</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="bg-blue-50 rounded-lg p-3 md:p-4">
                  <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                    <span className="text-xs md:text-sm font-medium text-blue-800">Proficiency</span>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900">{currentSkill.level}%</div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-3 md:p-4">
                  <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
                    <Award className="w-3 h-3 md:w-4 md:h-4 text-purple-600" />
                    <span className="text-xs md:text-sm font-medium text-purple-800">Experience</span>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900">
                    {currentSkill.level >= 80 ? '5+' : '3+'} years
                  </div>
                </div>
              </div>

              {/* Top Skills */}
              <div className="mb-4 md:mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Top Technologies</h4>
                <div className="space-y-1.5 md:space-y-2">
                  {currentSkill.items.slice(0, 4).map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-2 py-1.5 md:px-3 md:py-2 bg-gray-50 rounded"
                    >
                      {getItemIcon(item)}
                      <span className="font-medium text-gray-800 text-sm truncate flex-1">{item}</span>
                      <div className="text-xs font-medium px-1.5 py-0.5 md:px-2 md:py-1 bg-gray-100 rounded text-gray-700">
                        {index < 2 ? 'Expert' : 'Advanced'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className={`flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full ${
                currentSkill.level >= 90
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {currentSkill.level >= 90 ? (
                  <>
                    <Award className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="font-semibold text-sm">Expert Level</span>
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="font-semibold text-sm">Advanced Level</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;