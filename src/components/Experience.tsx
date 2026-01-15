// src/components/Experience.tsx
// Simplified Professional Experience section

import React from "react";
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  MapPin, 
  CheckCircle
} from "lucide-react";
import { Experience as ExperienceType } from "../types";

interface ExperienceProps {
  experience: ExperienceType;
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section
      id="experience"
      className="py-16 px-4 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600">
            Professional journey and accomplishments
          </p>
        </div>

        {/* Main Experience Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Briefcase className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {experience.title}
              </h3>
            </div>

            {/* Company, Duration, Location */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">{experience.company}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">{experience.period}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">{experience.location}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Key Responsibilities
            </h4>
            <ul className="space-y-3">
              {experience.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Demonstrated expertise in enterprise solutions and software development
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;