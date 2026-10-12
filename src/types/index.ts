export interface ProfileData {
  fullName: string;
  primaryTitle: string;
  supportingDescription: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  portfolioUrl?: string;
  educationSummary: string;
  availability: string;
  avatarImage?: string;
}

export type ProjectStatus = 'Production Ready' | 'Completed MVP' | 'Active Prototype' | 'Academic / Learning';

export type ProjectCategory = 
  | 'Full-Stack' 
  | 'Backend & APIs' 
  | 'African Innovation' 
  | 'AI & Data' 
  | 'Mobile & Java';

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  fullOverview: string;
  category: ProjectCategory;
  technologies: string[];
  status: ProjectStatus;
  image: string;
  isConceptualVisual: boolean;
  featured: boolean;
  role: string;
  githubUrl?: string;
  demoUrl?: string;
  teamSize?: string;
  keyFeatures: string[];
  architecturePoints: string[];
  businessValue: string;
  dataModelNotes?: string;
  challengeSolved?: string;
}

export interface LabExperiment {
  id: string;
  title: string;
  category: 'Drone Simulation' | 'Artificial Intelligence' | 'Machine Learning' | 'Python Applications' | 'Computer Vision' | 'Robotics & Automation';
  objective: string;
  description: string;
  tools: string[];
  status: 'Prototype Built' | 'Exploration & Research' | 'Interactive Simulator';
  image?: string;
  hasInteractiveDemo?: boolean;
  interactiveDemoType?: 'drone-sim' | 'agri-decision';
  findingsOrOutcomes: string;
  lessonsLearned: string;
  explorationNotice?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Core Practical' | 'Working Experience' | 'Active Exploration';
    highlight?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  status: string;
  location: string;
  coursework: string[];
  keyHighlights: string[];
}

export interface CertificationItem {
  title: string;
  category: string;
  focus: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  context: string;
  placement: string;
  teamDetails: string;
  description: string;
  impact: string;
  year: string;
}
