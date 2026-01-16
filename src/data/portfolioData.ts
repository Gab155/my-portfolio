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

import pos1 from "../assets/pos_2.jpg";
import pos2 from "../assets/pos_1.jpg";
import pos3 from "../assets/pos_3.jpg";
import pos4 from "../assets/pos_4.jpg";

import ctmc_1 from "../assets/cellair_web_1.jpg";
import ctmc_2 from "../assets/cellair_web_2.jpg";
import ctmc_3 from "../assets/cellair_web_3.jpg";
import ctmc_4 from "../assets/cellair_web_4.jpg";
import ctmc_5 from "../assets/cellair_web_5.jpg";
import ctmc_6 from "../assets/cellair_web_6.jpg";

import erp_1 from "../assets/erp_1.jpg"
import erp_2 from "../assets/erp_2.jpg"
import erp_3 from "../assets/erp_3.jpg"
import erp_4 from "../assets/erp_4.jpg"
import erp_5 from "../assets/erp_5.jpg"
import erp_6 from "../assets/erp_6.jpg"
import erp_7 from "../assets/erp_7.jpg"
import erp_8 from "../assets/erp_8.jpg"

import clinic_1 from "../assets/clinic_1.jpg"
import clinic_2 from "../assets/clinic_2.jpg"
import clinic_3 from "../assets/clinic_3.jpg"
import clinic_4 from "../assets/clinic_4.jpg"
import clinic_5 from "../assets/clinic_5.jpg"
import clinic_6 from "../assets/clinic_6.jpg"

import mpc_1 from "../assets/mpc_website_1.jpg"
import mpc_2 from "../assets/mpc_website_2.jpg"
import mpc_3 from "../assets/mpc_website_3.jpg"
import mpc_4 from "../assets/mpc_website_4.jpg"

import me_1 from "../assets/me_website_1.jpg"
import me_2 from "../assets/me_website_2.jpg"
import me_3 from "../assets/me_website_3.jpg"

import slgs_1 from "../assets/slgs_1.jpg"
import slgs_2 from "../assets/slgs_2.jpg"
import slgs_3 from "../assets/slgs_3.jpg"

import cls_1 from "../assets/cls_1.jpg"
import cls_2 from "../assets/cls_2.jpg"
import cls_3 from "../assets/cls_3.jpg"
import cls_4 from "../assets/cls_4.jpg"
import cls_5 from "../assets/cls_5.jpg"

import trakit_1 from "../assets/trakit_1.jpg";
import trakit_2 from "../assets/trakit_2.jpg";
import trakit_3 from "../assets/trakit_3.jpg";
import trakit_4 from "../assets/trakit_4.jpg";
import trakit_5 from "../assets/trakit_5.jpg";
import trakit_6 from "../assets/trakit_6.jpg";
import trakit_7 from "../assets/trakit_7.jpg";
import trakit_8 from "../assets/trakit_8.jpg";
import trakit_9 from "../assets/trakit_9.jpg";
import trakit_10 from "../assets/trakit_10.jpg";
import trakit_11 from "../assets/trakit_11.jpg";
import trakit_12 from "../assets/trakit_12.jpg";
import trakit_13 from "../assets/trakit_13.jpg";
import trakit_14 from "../assets/trakit_14.jpg";
import trakit_15 from "../assets/trakit_15.jpg";
import trakit_16 from "../assets/trakit_16.jpg";
import trakit_17 from "../assets/trakit_17.jpg";


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
    school: "St. Vincent College of Cabuyao",
    period: "2016 - 2020",
    location: "Calamba City, Laguna",
    achievements: [
      "Cum Laude Graduate",
      "Thesis: Inventory Management System with Barcode Scanning",
      "Programming Competition Finalist"
    ]
  },

  experiences: [
    {
      id: "internship",
      title: "IT Assistant (Intern)",
      company: "St. Vincent College Of Cabuyao",
      period: "June 2021 - October 2021 (5 months)",
      location: "Cabuyao, Laguna",
      responsibilities: [
        "Developed web applications to streamline business operations using PHP, JavaScript, HTML, CSS, Bootstrap, SQL, jQuery, Laravel, and React",
        "Designed workflow diagrams and charts to outline program functionalities before coding implementation",
        "Built and maintained web systems for various departments within the college",
        "Created and managed databases for efficient data handling and storage",
        "Conducted software testing to detect and fix bugs, ensuring smooth system performance",
        "Collaborated with various departments to understand requirements and enhance software usability",
        "Improved workflow efficiency through regular system audits and process optimization",
        "Authored and maintained technical documentation for both internal and external use",
        "Provided technical support and troubleshooting assistance for system users",
        "Set up and maintained computer networks and hardware components",
        "Conducted network security measures, restricting unauthorized access to systems",
        "Installed and configured computer hardware, software, and peripheral devices",
        "Trained end users on software applications and established IT procedures",
        "Managed hardware repairs and coordinated software updates for optimal performance"
      ],
      icon: "🎓",
      technologies: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap", "SQL", "jQuery", "Laravel", "React"],
      type: 'internship'
    },
    {
      id: "cellair",
      title: "Full Stack Developer / IT Support",
      company: "CellAir Technology Manufacturing Corp.",
      period: "January 2022 – May 2025 (3 years 5 months)",
      location: "Calamba City, Laguna",
      responsibilities: [
        "Developed and maintained enterprise web applications including EMMC Digital Signature System, Alpha Inventory Management System, and Production Planning Systems",
        "Built comprehensive ERP systems integrating 9 modules for manufacturing operations",
        "Managed AWS cloud infrastructure including EC2 instances, RDS databases, and S3 storage",
        "Deployed Windows Server 2022 environments with Active Directory and Group Policy management",
        "Implemented cybersecurity frameworks with endpoint protection, WAF, and SIEM solutions",
        "Set up and maintained enterprise network infrastructure with VLAN segmentation and firewall configuration",
        "Migrated legacy systems to modern web-based platforms using React, Node.js, and Laravel",
        "Provided technical support for 30+ users across manufacturing departments",
        "Conducted security training and implemented multi-factor authentication across all systems",
        "Optimized network infrastructure for improved performance and security",
        "Managed QuickBooks Enterprise cloud solution with multi-user concurrent access",
        "Developed e-commerce platform for polyethylene foam products using React and Tailwind CSS",
        "Created clinic management system for vaccine and inventory distribution tracking",
        "Implemented backup and disaster recovery strategies for critical business systems"
      ],
      icon: "💼",
      technologies: [
        "React", "TypeScript", "Node.js", "PHP", "Laravel", 
        "AWS", "MySQL", "PostgreSQL", "Docker", "Windows Server",
        "C#", ".NET", "Python", "REST APIs", "WebSocket"
      ],
      type: 'full-time'
    },
    {
      id: "minamoto",
      title: "Full Stack Developer (Internal Transfer)",
      company: "Minamoto Packaging Corporation (Sister Company)",
      period: "May 2025 – Present",
      location: "Calamba City, Laguna",
      responsibilities: [
        "Continuation of Full Stack Developer role following internal transfer from CellAir Technology",
        "Developed Social Media Web Application using React and deployed to Hostinger",
        "Designed and maintained databases for web applications with optimized performance",
        "Created logo banners and UI/UX designs using Photoshop and Figma for branding materials",
        "Built corporate website using WordPress for industrial packaging products catalog",
        "Maintained and enhanced existing enterprise applications from previous role",
        "Collaborated with cross-functional teams for continuous improvement of IT systems",
        "Provided ongoing technical support and system maintenance",
        "Implemented responsive web designs for mobile and desktop platforms",
        "Conducted code reviews and implemented best practices for software development"
      ],
      icon: "🔄",
      technologies: ["React", "WordPress", "PHP", "MySQL", "Figma", "Photoshop", "HTML", "CSS", "JavaScript", "Hostinger"],
      type: 'full-time'
    }
  ],

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
     {
      title: "IAM Management",
      subtitle: "Security & Access Control",
      role: "Security Administrator",
      tech: ["AWS IAM", "Role-based Access", "Policy Management"],
      features: [
        "User roles and permission policies",
        "Multi-factor authentication setup",
        "Credential segregation and rotation",
        "Access auditing and compliance monitoring",
      ],
      icon: "🔐",
      images: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&q=80",
      ],
    }
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
  title: "SLGS – Supplier Label Generator System",
  subtitle: "QR & Barcode-Based Labeling System for Inventory and SAP Workflow",
  role: "Full-Stack Web Developer",
  tech: ["Vite", "React.js", "JavaScript", "HTML", "CSS"],
  features: [
    "QR and barcode generation for inventory scanning",
    "Customer-side stock verification via scannable labels",
    "Multi-box label auto-generation (1 of N format)",
    "Print-ready A4 landscape layout (4x2.5 inches per label)",
    "Label preview and batch printing controls",
    "Form validation for part numbers, batch, PO, and quantities",
    "SAP Integration v1.0 compatibility",
    "Optimized UI for fast data entry in production environments"
  ],
  icon: "🏷️",
  images: [slgs_1, slgs_2, slgs_3]
},
{
  title: "CLMS for CellAir Technology Manufacturing Corp.",
  subtitle: "Manufacturing Production Label System with QR Traceability",
  role: "Full-Stack Web Developer",
  tech: ["Vite", "React.js", "JavaScript", "HTML", "CSS"],
  features: [
    "Customer and item master data search (3,800+ items)",
    "Job-order-based production labeling",
    "SPQ-based automatic copy calculation",
    "Batch label printing with real-time preview",
    "QR code traceability for finished goods verification",
    "RoHS compliance indicators on labels",
    "Duplicate label prevention and print history tracking",
    "Optimized workflow for packing and dispatch operations"
  ],
  icon: "🏭",
  images: [cls_1, cls_2, cls_3, cls_4, cls_5]
},
{
  title: "TrakIt – Pickup & Drop-Off Tracking Mobile App",
  subtitle: "Real-Time Child and Delivery Monitoring System",
  role: "Android Developer",
  tech: ["Java", "Android SDK", "Firebase Auth", "Firebase Realtime DB", "Google Maps API"],
  features: [
    "Real-time GPS tracking with live map view",
    "Parent monitoring of child pickup and drop-off status",
    "Driver assignment with QR-based verification",
    "QR code scanning to validate correct passenger pickup",
    "Firebase-based real-time data synchronization",
    "Role-based access for parents, drivers, and admins",
    "Route visualization from pickup to destination"
  ],
  icon: "📍",
  images: [
  trakit_1,
  trakit_2,
  trakit_3,
  trakit_4,
  trakit_5,
  trakit_6,
  trakit_7,
  trakit_8,
  trakit_9,
  trakit_10,
  trakit_11,
  trakit_12,
  trakit_13,
  trakit_14,
  trakit_15,
  trakit_16,
  trakit_17
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

    {
  title: "MadiPOS – Madison Outlet",
  subtitle: "Sales, Inventory & Delivery Management System",
  role: "Full-Stack Developer",
  tech: ["C#", "Windows Forms", "MySQL"],
  features: [
    "Dashboard with total sales and delivery summary",
    "Daily, weekly, and monthly sales analytics chart",
    "Transaction and POS sales processing",
    "Delivery scheduling and tracking module",
    "Supplier and inventory management",
    "Employee account and role-based access",
    "Calendar and real-time clock display",
    "Data synchronization tools",
    "User account management and secure logout"
  ],
  icon: "🧾",
  type: "internal",
  images: [pos1, pos2, pos3, pos4],
  challenges: [
    "Optimizing sales data loading for chart analytics",
    "Ensuring accurate real-time sales computation",
    "Improving UI layout for faster cashier operations",
    "Maintaining data consistency during sync processes"
  ]
},

{
  title: "Website E-commerce Platform for Cellair Technology Manufacturing Corp",
  subtitle: "Polyethylene Foam & Packaging Materials Online Ordering System",
  role: "Full-Stack Developer",
  tech: ["Vite", "Reactjs", "Tailwind CSS"],
  features: [
    "Complete product catalog for PE Foam and packaging materials",
    "B2B wholesale ordering system for industrial clients",
    "Product categories: Industrial PE Foam, Bubble Wrap, Insulation Materials",
    "Retail products: Kiddie Mats, Sun Shades, Thermal Bags, Puzzle Mats",
    "ISO-certified environmental compliance documentation",
    "Dealer/distributor portal with quotation management",
    "Real-time inventory tracking for manufacturing materials",
    "Product specification sheets and technical documentation",
    "Contact form integration with direct email to sales teams"
  ],
  icon: "📦",
  images: [ctmc_1, ctmc_2, ctmc_3, ctmc_4, ctmc_5, ctmc_6],
  
},
{
  title: "Integrated ERP System for Manufacturing Operations",
  subtitle: "Comprehensive Enterprise Resource Planning Suite for Production",
  role: "Full-Stack Developer",
  tech: ["Reactjs", "Laravel", "Vite", "Tailwind CSS", "MySQL"],
  features: [
    "PMMS – Real-time product & materials tracking with automated inventory control",
    "CPOSMS – End-to-end customer product monitoring with feedback & supplier management",
    "PRMS – Project resource allocation with budget tracking and cost analysis",
    "PJOMS – Job order processing with work assignment and progress tracking",
    "PSMS – Production planning and supply chain optimization for manufacturing",
    "WIMS – Warehouse inventory management with stock movement tracking",
    "WRMS – Real-time warehouse monitoring for stock levels and security",
    "ODASH – Operations dashboard for PR/PO approval workflows",
    "GDASH – Executive dashboard for high-level oversight and reporting",
    "MAINBOARD – Centralized ERP control integrating all 9 modules"
  ],
  icon: "🏢",
  images: [erp_1, erp_2, erp_3, erp_4, erp_5, erp_6, erp_7, erp_8]
},
{
title: "Clinic Vaccine & Inventory Distribution Monitoring System",
subtitle: "Medical Healthcare Vaccine Management & Distribution Tracking System",
role: "Full Stack Developer",
tech: ["PHP", "jQuery", "Bootstrap", "MySQL"],
features: [
"Real-time dashboard for residents, vaccines, checkups, and inventory tracking",
"Vaccine condition monitoring (Good/Bad) with stock level alerts",
"Monthly and yearly vaccination data visualization using Chart.js or similar",
"Supplier management and vaccine distribution tracking",
"Patient and resident vaccination record management with CRUD operations",
"Inventory monitoring for vaccines and medicines with expiry tracking",
"Checkup scheduling and history per resident",
"Critical stock alerts and low inventory warnings via AJAX notifications",
"Data visualization for vaccination trends and coverage rates using interactive charts",
"Responsive Bootstrap UI for clinic staff and administrators",
"User authentication and role-based access control (Admin, Nurse, Staff)"
],
icon: "🏥",
images: [clinic_1, clinic_2, clinic_3, clinic_4, clinic_5, clinic_6],
},
{
  title: "Corporate Website for Mina Moto Packaging Corporation",
  subtitle: "Industrial Packaging Products Catalog and Company Profile Website",
  role: "WordPress Developer",
  tech: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
  features: [
    "Corporate website built using WordPress CMS",
    "Product catalog with multiple packaging categories",
    "Categories: Pallets, Bubble Sheets, Corrugated Boards & Boxes, Danpla, Crates, EPE Foams, Furniture",
    "Service and company profile pages",
    "Career listings with job vacancy information",
    "Contact form integration for customer inquiries",
    "SEO-friendly structure and mobile-responsive design",
    "Easy content management for admin users"
  ],
  icon: "📦",
  images: [mpc_1, mpc_2,mpc_3,mpc_4 ]
},
{
  title: "Corporate Website for Minamoto Enterprises",
  subtitle: "Industrial & Packaging Products Catalog and Inquiry Platform",
  role: "Front-End / Full-Stack Web Developer",
  tech: ["Vite", "React.js", "JavaScript", "HTML", "CSS"],
  features: [
    "Single-page application built with Vite and React",
    "Company profile pages including About, Mission, Vision, and Quality Policy",
    "Product catalog with multiple industrial and packaging categories",
    "Responsive UI optimized for desktop and mobile devices",
    "Contact and quotation request form integration",
    "Fast-loading performance using Vite build optimization",
    "Reusable React components for product listings and sections",
    "SEO-ready structure for business marketing"
  ],
  icon: "🏭",
  images: [me_1, me_2, me_3]
}

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
        "MySQL", "PostgreSQL",
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
        "React Native", "Flutter", 
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
      email: "patrick.exelpack@gmail.com",
      avatar: REFERENCE_AVATARS.DEFAULT,
      relationship: "Direct Supervisor"
    }
  ],
};