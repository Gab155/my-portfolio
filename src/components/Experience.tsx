// src/components/Experience.tsx
import React from "react";
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  MapPin, 
  CheckCircle,
  Award,
  TrendingUp,
  Code
} from "lucide-react";
import { Experience } from "../types"; // Keep as Experience (singular)

interface ExperienceProps {
  experiences: Experience[]; // Prop is array of Experience
}

const ExperienceComponent: React.FC<ExperienceProps> = ({ experiences }) => {
  const getIcon = (type: string) => {
    switch(type) {
      case 'internship': return <Award className="w-5 h-5 text-blue-600" />;
      case 'full-time': return <Briefcase className="w-5 h-5 text-green-600" />;
      case 'contract': return <Code className="w-5 h-5 text-purple-600" />;
      default: return <Briefcase className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'internship': return "bg-blue-100 text-blue-800";
      case 'full-time': return "bg-green-100 text-green-800";
      case 'contract': return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'internship': return "Internship";
      case 'full-time': return "Full-time";
      case 'contract': return "Contract";
      default: return type;
    }
  };

  return (
    <section
      id="experience"
      className="py-16 px-4 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Work Experience
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional journey showcasing growth from internship to full-stack developer
          </p>
        </div>

        {/* Timeline/Cards Container */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="relative"
            >
              {/* Timeline connector for middle items */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-gray-300 -z-10"></div>
              )}

              {/* Experience Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                {/* Card Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${getTypeColor(exp.type)}`}>
                      {getIcon(exp.type)}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {exp.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(exp.type)}`}>
                          {getTypeLabel(exp.type)}
                        </span>
                      </div>
                      <p className="text-lg font-semibold text-blue-700">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                {/* Company Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{exp.company}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{exp.period}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{exp.location}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <>
                    <div className="border-t border-gray-200 my-6"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech: string, idx: number) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Card Footer */}
                <div className="pt-6 mt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div>
                      {exp.type === 'internship' && "🎓 Internship Program"}
                      {exp.type === 'full-time' && "💼 Full-time Position"}
                      {exp.type === 'contract' && "📝 Contract Role"}
                    </div>
                    <div className="text-right">
                      {index === 0 && "First Professional Experience"}
                      {index === experiences.length - 1 && "Current Position"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Progress Summary */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">Career Progression</h3>
          </div>
          <p className="text-gray-700">
            Started as an IT Assistant intern and progressed to a Full Stack Developer role, 
            gaining expertise in web development, cloud infrastructure, and enterprise systems 
            across multiple companies. Demonstrated continuous growth and adaptability in 
            the technology field.
          </p>
          <div className="mt-4 text-sm text-gray-600">
            <span className="font-semibold">Total Experience:</span> {experiences.length} positions • 
            From {experiences[0].period.split(" - ")[0]} to Present
          </div>
        </div>
      </div>
    </section>
  );
};

// Renamed to avoid conflict with imported type
export default ExperienceComponent;