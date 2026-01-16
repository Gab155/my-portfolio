// src/types/index.ts
// Lahat ng TypeScript types at interfaces - UPDATED

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  icon: string;
  technologies: string[];
  type: 'internship' | 'full-time' | 'contract';
}

export interface Project {
  title: string;
  subtitle: string;
  role: string;
  tech: string[];
  features: string[];
  icon: string;
  highlight?: boolean;
  image?: string;
  images?: string[];
  type?: 'aws' | 'internal' | 'system';
  github?: string; // New field for GitHub repo
  demo?: string; // New field for live demo
  challenges?: string[]; // New field for challenges faced
}

export interface Skill {
  category: string;
  items: string[];
  icon: string;
  level: number;
  description?: string; // New field for skill description
  certifications?: string[]; // New field for certifications
}

export interface Reference {
  name: string;
  title: string;
  company: string;
  phone: string;
  avatar?: string;
  email?: string; // New field
  relationship?: string; // New field (e.g., "Former Colleague", "Manager")
}

export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    github?: string;
    linkedin?: string;
    portfolio?: string; // New field
    website?: string; // New field
  };
  certifications?: string[]; // New field
  languages?: string[]; // New field
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  achievements?: string[]; // New field
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  education: Education;
  experiences: Experience[]; // Change from 'ExperienceItem' to 'Experience'
  awsProjects: Project[];
  internalProjects: Project[];
  systemProjects: Project[];
  skills: Skill[];
  references: Reference[];
}