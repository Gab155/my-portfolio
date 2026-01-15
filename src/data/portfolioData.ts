// src/data/portfolioData.ts
import { PortfolioData } from "../types";

// Import images - adjust paths based on your actual folder structure
import alpha1 from "../assets/alpha-inventory_1.jpg";
import alpha2 from "../assets/alpha-inventory_2.jpg";
import alpha3 from "../assets/alpha-inventory_3.jpg";
import alpha4 from "../assets/alpha-inventory_4.jpg";
import alpha5 from "../assets/alpha-inventory_5.jpg";

import esign1 from "../assets/esign_1.jpg";
import esign2 from "../assets/esign_2.jpg";
import esign3 from "../assets/esign_3.jpg";
import esign4 from "../assets/esign_4.jpg";
import esign5 from "../assets/esign_5.jpg";
import esign6 from "../assets/esign_6.jpg";
import esign7 from "../assets/esign_7.jpg";
import esign8 from "../assets/esign_8.jpg";

import dpms1 from "../assets/dpms_1.jpg";

import prodPlan1 from "../assets/prod-plan_1.jpg";
import prodPlan2 from "../assets/prod-plan_2.jpg";
import prodPlan3 from "../assets/prod-plan_3.jpg";
import prodPlan4 from "../assets/prod-plan_4.jpg";

import emmcrms1 from "../assets/emmc_rms_1.jpg";
import emmcrms2 from "../assets/emmc_rms_2.jpg";
import emmcrms3 from "../assets/emmc_rms_3.jpg";
import emmcrms4 from "../assets/emmc_rms_4.jpg";
import emmcrms5 from "../assets/emmc_rms_5.jpg";

// Fallback images for projects without actual screenshots
const FALLBACK_IMAGES = {
  AWS: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  SERVER: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  SECURITY: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  FINANCE: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  TICKETING: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  CLOUD: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  NETWORK: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
  WEB: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  MOBILE: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  DATABASE: "https://images.unsplash.com/photo-1548094878-84ced0f6896d?w=800&q=80",
  DEVOPS: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
};

// Avatar images for references
const REFERENCE_AVATARS = {
  DEFAULT: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  FEMALE: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80",
  TECH: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  MANAGER: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
};

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "GABRIEL OLIVARES",
    title: "Full Stack Developer & IT Support",
    summary: "Resourceful IT professional with 4+ years of experience combining enterprise IT support, full-stack development, and cloud infrastructure management. Expert in developing scalable web applications while maintaining robust IT infrastructure for manufacturing operations. Proficient in modern web technologies, cloud platforms, and system administration.",
    contact: {
      phone: "0991-743-5889",
      email: "gabolivares20@gmail.com",
      address: "Aldea Real, St. Cuba, Brgy. Punta, Calamba City, Laguna",
      github: "https://github.com/gabriel-olivares",
      linkedin: "https://linkedin.com/in/gabriel-olivares",
      portfolio: "https://gabriel-olivares-portfolio.vercel.app",
    },
    certifications: [
      "AWS Certified Solutions Architect - Associate",
      "Microsoft Azure Fundamentals",
      "Google Cloud Platform Associate",
      "CompTIA Security+"
    ],
    languages: ["English (Fluent)", "Filipino (Native)"]
  },

  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "University of Perpetual Help System DALTA",
    period: "2016 - 2020",
    location: "Calamba City, Laguna",
    achievements: [
      "Cum Laude Graduate",
      "Thesis: Inventory Management System with Barcode Scanning",
      "Programming Competition Finalist"
    ]
  },

  experience: {
    title: "IT Support / Full Stack Developer",
    company: "Cellair Manufacturing",
    period: "May 2021 – Present",
    location: "Calamba City, Laguna",
    responsibilities: [
      "Developed and maintained 5+ enterprise web applications using React, Node.js, and PHP",
      "Managed cloud infrastructure on AWS including EC2, RDS, and S3 services",
      "Provided technical support for 30+ users across manufacturing departments",
      "Implemented cybersecurity measures and conducted security training",
      "Migrated legacy systems to modern web-based platforms",
      "Managed Windows Server 2022 environments and Active Directory",
      "Optimized network infrastructure for improved performance and security"
    ],
    icon: "💼",
    technologies: [
      "React", "TypeScript", "Node.js", "PHP", "AWS", 
      "PostgreSQL", "MySQL", "Docker", "Windows Server"
    ]
  },

  awsProjects: [
    {
      title: "EC2 Cloud Infrastructure",
      subtitle: "Scalable Cloud Deployment",
      role: "Cloud Solutions Architect",
      tech: ["Amazon EC2", "Elastic IPs", "CloudWatch", "S3", "Security Groups", "VPC", "IAM"],
      features: [
        "Auto-scaling groups for high availability",
        "Multi-AZ deployment for disaster recovery",
        "Cost optimization with reserved instances",
        "Real-time monitoring with CloudWatch dashboards",
        "Secure access with IAM roles and policies",
        "Automated backup with AWS Backup",
        "Load balancing with Application Load Balancer"
      ],
      icon: "☁️",
      type: 'aws',
      highlight: true,
      images: [
        FALLBACK_IMAGES.AWS,
        "https://images.unsplash.com/photo-1548094878-84ced0f6896d?w=800&q=80",
        FALLBACK_IMAGES.CLOUD,
      ],
      challenges: [
        "Migrating from on-premise to cloud infrastructure",
        "Ensuring minimal downtime during migration",
        "Cost optimization while maintaining performance"
      ]
    },
    {
      title: "Windows Server 2022 Cloud Hosting",
      subtitle: "Enterprise Server Management on AWS",
      role: "Systems Administrator",
      tech: ["Windows Server 2022", "AWS RDS", "Active Directory", "Group Policy", "RDP", "VPN"],
      features: [
        "Domain controller setup in AWS",
        "Active Directory synchronization",
        "Group Policy for centralized management",
        "Secure RDP access with multi-factor authentication",
        "Database hosting with AWS RDS for SQL Server",
        "Automated patch management",
        "Disaster recovery with cross-region replication"
      ],
      icon: "🖥️",
      type: 'aws',
      highlight: true,
      images: [
        FALLBACK_IMAGES.SERVER,
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
      ],
      challenges: [
        "Maintaining Active Directory performance over VPN",
        "Security hardening for public-facing servers",
        "Backup and recovery strategy implementation"
      ]
    },
    {
      title: "QuickBooks Enterprise Cloud Solution",
      subtitle: "Financial Systems Migration to AWS",
      role: "Cloud Solutions Architect",
      tech: ["AWS EC2", "QuickBooks Desktop", "AWS Storage Gateway", "Backup Systems", "Multi-user"],
      features: [
        "Multi-user concurrent access with user management",
        "Shared network drives using AWS Storage Gateway",
        "Automated daily backups to S3 with versioning",
        "Performance optimization for accounting operations",
        "Integration with other AWS services (S3, RDS)",
        "Cost allocation tags for department-wise billing",
        "Compliance with financial data security standards"
      ],
      icon: "📊",
      type: 'aws',
      images: [
        FALLBACK_IMAGES.FINANCE,
        FALLBACK_IMAGES.AWS,
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      ],
      challenges: [
        "Ensuring data consistency across multiple users",
        "Meeting financial compliance requirements",
        "Optimizing for QuickBooks performance in cloud"
      ]
    },
  ],

  internalProjects: [
    {
      title: "EMMC Digital Signature System",
      subtitle: "Enterprise Document Management Platform",
      role: "Full Stack Developer & Project Lead",
      tech: [
        "React", "TypeScript", "Node.js", "Express", "PostgreSQL", 
        "PDF-lib", "JWT", "Canvas API", "WebSocket", "Docker"
      ],
      features: [
        "Real-time digital signature capture with canvas",
        "PDF generation and manipulation with dynamic fields",
        "Multi-level approval workflow with role-based access",
        "Audit trail with blockchain-like verification",
        "Document version control and history tracking",
        "Email notifications and reminders",
        "Bulk document processing",
        "Mobile-responsive design"
      ],
      icon: "✍️",
      type: 'internal',
      highlight: true,
      images: [esign2, esign1, esign3, esign4, esign5, esign6, esign7, esign8],
      github: "https://github.com/gabriel-olivares/esign-system",
      challenges: [
        "Implementing secure signature verification",
        "Handling large PDF files efficiently",
        "Real-time collaboration features"
      ]
    },
    {
      title: "Alpha Inventory Management System",
      subtitle: "Enterprise Inventory & Pricing Automation",
      role: "Full Stack Developer",
      tech: ["ReactJS", "Laravel", "MySQL", "REST API", "Material-UI", "Chart.js", "WebSocket"],
      features: [
        "Real-time inventory tracking with barcode support",
        "Supplier management with price comparison",
        "Automated costing calculation with margin analysis",
        "RFQ/RFS process automation",
        "Dashboard with real-time analytics",
        "Report generation (PDF, Excel)",
        "Mobile application for stocktaking",
        "Integration with accounting systems"
      ],
      icon: "📦",
      type: 'internal',
      highlight: true,
      images: [alpha2, alpha1, alpha3, alpha4, alpha5],
      challenges: [
        "Handling complex inventory relationships",
        "Real-time synchronization across multiple locations",
        "Legacy system integration"
      ]
    },
    {
      title: "Daily Production Monitoring System",
      subtitle: "Real-time Manufacturing Analytics",
      role: "Full Stack Developer",
      tech: [
        "React", "TypeScript", "Node.js", "Express", "PostgreSQL", 
        "Chart.js", "WebSocket", "Redis", "Docker", "Nginx"
      ],
      features: [
        "Real-time production dashboard with live updates",
        "Automated daily and monthly reports",
        "OEE (Overall Equipment Effectiveness) tracking",
        "Machine performance analytics",
        "Shift management and operator tracking",
        "Quality control integration",
        "Predictive maintenance alerts",
        "Mobile-friendly interface for floor supervisors"
      ],
      icon: "📈",
      type: 'internal',
      highlight: true,
      images: [dpms1, FALLBACK_IMAGES.WEB],
      challenges: [
        "Handling high-frequency real-time data",
        "Data consistency across multiple shifts",
        "Integration with PLC and machine data"
      ]
    },
    {
      title: "Production Planning & Scheduling System",
      subtitle: "Manufacturing Workflow Optimization",
      role: "Full Stack Developer",
      tech: [
        "React", "TypeScript", "Node.js", "Express", "PostgreSQL", 
        "React Big Calendar", "Zustand", "Material-UI", "WebSocket"
      ],
      features: [
        "Interactive Gantt chart for production scheduling",
        "Capacity planning with resource allocation",
        "MRP (Material Requirements Planning)",
        "Work order management with tracking",
        "Bottleneck analysis and optimization",
        "Integration with inventory and DPMS",
        "Drag-and-drop schedule adjustments",
        "KPI tracking and reporting"
      ],
      icon: "📅",
      type: 'internal',
      images: [prodPlan2, prodPlan1, prodPlan3, prodPlan4],
      challenges: [
        "Complex scheduling algorithms",
        "Real-time resource conflict resolution",
        "Integration with multiple data sources"
      ]
    },
    {
      title: "EMMC Helpdesk Ticketing System",
      subtitle: "Internal IT Support Platform",
      role: "Full-Stack Developer",
      tech: ["PHP", "JavaScript", "MySQL", "Bootstrap", "jQuery", "AJAX", "PHPMailer"],
      features: [
        "Multi-department ticket management",
        "Priority-based ticket assignment",
        "Knowledge base with search functionality",
        "SLA (Service Level Agreement) tracking",
        "Automated email notifications",
        "Performance metrics and reporting",
        "Mobile-responsive interface",
        "File attachment support"
      ],
      icon: "🎫",
      type: 'internal',
      images: [emmcrms2, emmcrms1, emmcrms3, emmcrms4, emmcrms5],
      challenges: [
        "Legacy code migration",
        "Performance optimization for growing ticket volume",
        "User experience improvements"
      ]
    },
  ],

  systemProjects: [
    {
      title: "Enterprise Network Infrastructure",
      subtitle: "Complete Network Modernization",
      role: "Network Administrator",
      tech: ["Cisco Switches", "Ubiquiti", "VLAN", "FortiGate Firewall", "PRTG", "VPN", "WiFi 6"],
      features: [
        "Complete network segmentation with VLANs",
        "Enterprise firewall with intrusion prevention",
        "Redundant internet connections with failover",
        "Wireless network with guest portal",
        "Network monitoring with real-time alerts",
        "VoIP system integration",
        "Bandwidth management and QoS",
        "Security camera network integration"
      ],
      icon: "🌐",
      type: 'system',
      images: [
        FALLBACK_IMAGES.NETWORK,
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
      ],
      challenges: [
        "Minimizing downtime during migration",
        "Legacy equipment compatibility",
        "Security policy implementation"
      ]
    },
    {
      title: "Enterprise Cybersecurity Framework",
      subtitle: "Comprehensive Security Implementation",
      role: "Security Specialist",
      tech: ["Endpoint Protection", "SIEM", "WAF", "VPN", "MFA", "Security Training", "Audit"],
      features: [
        "Enterprise antivirus with EDR capabilities",
        "Web Application Firewall (WAF)",
        "Multi-factor authentication for all systems",
        "Security Information and Event Management (SIEM)",
        "Regular vulnerability assessments",
        "Security awareness training program",
        "Incident response plan",
        "Data loss prevention (DLP)"
      ],
      icon: "🛡️",
      type: 'system',
      highlight: true,
      images: [FALLBACK_IMAGES.SECURITY],
      challenges: [
        "Balancing security with usability",
        "User adoption of security measures",
        "Budget constraints for security tools"
      ]
    },
  ],

  skills: [
    {
      category: "Frontend Development",
      items: [
        "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", 
        "React", "Next.js", "Angular", "Vue.js", 
        "Bootstrap", "Material UI", "Tailwind CSS", "SASS/SCSS",
        "Redux", "Context API", "React Query", "GraphQL Client"
      ],
      icon: "💻",
      level: 95,
      description: "Modern frontend development with focus on performance, accessibility, and user experience",
      certifications: ["React Developer Certification", "Frontend Masters Certificate"]
    },
    {
      category: "Backend Development",
      items: [
        "Node.js", "Express", "PHP", "Laravel", 
        "Python", "Django", "Java", "Spring Boot",
        "C#", ".NET Core", "RESTful APIs", "GraphQL",
        "WebSocket"
      ],
      icon: "⚙️",
      level: 92,
      description: "Scalable backend architecture with focus on security, performance, and maintainability",
      certifications: ["Node.js Certified Developer", "AWS Backend Specialist"]
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS (EC2, S3, RDS, Lambda)",
        "Docker", "CI/CD (Jenkins, GitHub Actions)",
        "Linux Administration", "Nginx", "Apache", "Load Balancing",
         "Infrastructure as Code"
      ],
      icon: "☁️",
      level: 90,
      description: "Cloud infrastructure management and DevOps practices for scalable applications",
      certifications: ["AWS Solutions Architect"]
    },
    {
      category: "Database Management",
      items: [
        "MySQL", "PostgreSQL", "MongoDB", "Redis",
        "SQL Server", "Oracle", "Firebase",
        "Database Design", "Query Optimization", "Data Migration",
        "Backup & Recovery", "Database Security"
      ],
      icon: "🗄️",
      level: 88,
      description: "Database design, optimization, and management for high-performance applications",
      certifications: ["MySQL Database Administrator", "MongoDB Certified Developer"]
    },
    {
      category: "Mobile Development",
      items: [
        "React Native", "Flutter", "Ionic", 
        "Android (Java/Kotlin)", "iOS (Swift)", "PWA",
        "Mobile UI/UX", "App Store Deployment", "Push Notifications",
        "Mobile Security", "Offline Capabilities"
      ],
      icon: "📱",
      level: 85,
      description: "Cross-platform mobile application development with native performance",
      certifications: ["React Native Certification", "Google Mobile Web Specialist"]
    },
    {
      category: "Cybersecurity",
      items: [
        "Network Security", "Web Application Security", "Penetration Testing",
        "Encryption", "Authentication (OAuth, JWT)", "Security Auditing",
        "Vulnerability Assessment", "Incident Response", "Compliance",
        "Firewall Configuration", "VPN Setup"
      ],
      icon: "🔒",
      level: 87,
      description: "Security implementation and hardening for enterprise applications",
      certifications: ["CompTIA Security+", "CEH (Certified Ethical Hacker)"]
    }
  ],

  references: [
    {
      name: "Jesson Jei Rebua",
      title: "Senior Software Engineer",
      company: "Samsung Electronics Philippines",
      phone: "0968-854-5608",
      email: "jesson.rebua@samsung.com",
      avatar: REFERENCE_AVATARS.TECH,
      relationship: "Former Colleague"
    },
    {
      name: "Analyn Lompero",
      title: "Creative Director & CS Manager",
      company: "Minamoto Enterprises",
      phone: "0938-636-6289",
      email: "analyn.lompero@minamoto.com",
      avatar: REFERENCE_AVATARS.FEMALE,
      relationship: "Project Collaborator"
    },
    {
      name: "Patrick Aganos",
      title: "IT Programmer",
      company: "Exelpack Packaging Corporation",
      phone: "0991-378-2181",
      email: "m.rodriguez@cellair.com",
      avatar: REFERENCE_AVATARS.DEFAULT,
      relationship: "Direct Supervisor"
    }
  ],
};