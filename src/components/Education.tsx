// src/components/Education.tsx
// Education & Certifications Section with Visible References

import React from "react";
import { 
  Award, 
  GraduationCap, 
  Calendar,
  MapPin,
  Users,
  CheckCircle,
  Building,
  Phone,
  Mail
} from "lucide-react";
import { Reference } from "../types";

interface EducationProps {
  references: Reference[];
}

const Education: React.FC<EducationProps> = ({ references }) => {
  const certificationTopics = [
    "Fundamentals of Testing",
    "SDLC Testing",
    "Static Testing",
    "Test Techniques",
    "Test Management",
    "Tool Support",
    "Test Design",
    "Quality Assurance"
  ];

  const skillsGained = [
    "Software Testing Methodologies",
    "Quality Assurance Processes",
    "Test Case Development",
    "Bug Tracking & Reporting",
    "Manual Testing Techniques",
    "Test Plan Creation",
    "Documentation Skills",
    "Problem Solving"
  ];

  return (
    <section id="education" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Education & Certifications
          </h2>
          <p className="text-gray-600">
            Continuous learning and professional development
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Education */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">ST.Vincent College of Cabuyao</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                      2015 - 2019
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">College Graduate</p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Mamatid, Cabuyao, Laguna</span>
                  </div>
                </div>
              </div>

              

              {/* Skills Gained */}
              <div className="pt-6 border-t border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Skills Developed</h4>
                <div className="grid grid-cols-2 gap-3">
                  {skillsGained.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Certification */}
          <div className="space-y-8">
            {/* Certification Card */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Software Quality Assurance
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm mb-3">
                    ISTQB Foundations Certified
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">September 9-10, 2023</span>
                    </div>
                    <div className="text-sm">Online (Zoom)</div>
                  </div>
                </div>
              </div>

              {/* Topics */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Certification Topics</h4>
                <div className="grid grid-cols-2 gap-3">
                  {certificationTopics.map((topic, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <span className="text-sm text-gray-800">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* References Section - Always Visible */}
        <div className="mt-12">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Character References</h3>
            </div>
            <p className="text-gray-600">Available for verification and confirmation</p>
          </div>

          {/* References Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {references.map((ref, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow">
                    {ref.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{ref.name}</h4>
                    <p className="text-blue-600 font-medium">{ref.title}</p>
                    <p className="text-gray-500 text-sm mt-1">{ref.relationship || "Professional Reference"}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="p-2 bg-gray-100 rounded">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{ref.company}</div>
                      <div className="text-xs text-gray-500">Company</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="p-2 bg-gray-100 rounded">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-mono">{ref.phone}</div>
                      <div className="text-xs text-gray-500">Contact Number</div>
                    </div>
                  </div>
                  
                  {ref.email && (
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="p-2 bg-gray-100 rounded">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm truncate">{ref.email}</div>
                        <div className="text-xs text-gray-500">Email Address</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;