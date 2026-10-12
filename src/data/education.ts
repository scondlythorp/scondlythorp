import { EducationItem, CertificationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    institution: "Civil Service University",
    degree: "National Diploma in Computer Science",
    status: "Completed (Formal certificate pending issuance)",
    location: "The Gambia, West Africa",
    coursework: [
      "Object-Oriented Programming (Java & Software Principles)",
      "Relational Databases and Structured Query Language (SQL)",
      "Web Application Development & Client-Server Architecture",
      "Software Engineering & Systems Development Lifecycle",
      "Computer Networking & Telecommunications Fundamentals",
      "Data Structures, Algorithms & Systems Programming"
    ],
    keyHighlights: [
      "Rigorous foundations in relational schema design, transaction integrity, and database normalization",
      "Object-oriented software development projects in Java, including ATM and inventory systems",
      "Active participant and collaborator in peer code reviews, technical debugging, and study groups"
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: "Cybersecurity Fundamentals",
    category: "Security & Systems",
    focus: "Network defense principles, threat modeling, defensive credentials handling, and secure software development practices."
  },
  {
    title: "Database Management Systems (DBMS)",
    category: "Data Engineering",
    focus: "Relational database architecture, transaction management, query optimization, indexing strategies, and ACID integrity."
  },
  {
    title: "Data Science & Analytics",
    category: "AI & Data",
    focus: "Data preprocessing, statistical analysis, Python data workflows, visualization techniques, and predictive modeling fundamentals."
  },
  {
    title: "Effective Leadership",
    category: "Professional Development",
    focus: "Team coordination, conflict resolution, collaborative project management, and guiding multidisciplinary technical groups."
  },
  {
    title: "Professional Networking for Career Growth",
    category: "Professional Development",
    focus: "International technical collaboration, open-source community engagement, and cross-border innovation networks."
  }
];

export const leadershipData = {
  organization: "Information Technology Students Association (ITSA)",
  institution: "Civil Service University, The Gambia",
  role: "Active Member & Collaborative Project Contributor",
  description: "Contributed actively to student technology initiatives, peer programming workshops, and technical discussions. Collaborated with fellow computer science students to debug complex software issues, explore emerging technologies, and promote practical software craftsmanship.",
  pillars: [
    "Collaborative Software Projects: Co-developed academic systems and organized peer code reviews.",
    "Peer Debugging & Mentorship: Assisted colleagues with SQL syntax, Java OOP design, and web debugging.",
    "Technical Knowledge Sharing: Engaged in study circles exploring Linux environments, APIs, and modern development tools.",
    "Team Problem-Solving: Applied structured engineering approaches to resolve difficult software bugs under deadline pressures."
  ]
};
