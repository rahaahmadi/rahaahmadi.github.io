export enum ProjectType {
  PUBLICATION = 'Publication',
  RESEARCH = 'Research',
  ENGINEERING = 'Engineering',
}

export interface Link {
  label: string;
  url: string;
  type: 'code' | 'paper' | 'demo' | 'other';
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string; // For conference names or alternate titles
  description: string;
  role?: string;
  type: ProjectType;
  technologies: string[];
  links: Link[];
  imageUrl: string;
  date?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  location: string;
  period: string;
  details: string[];
}

export interface Award {
  id: string;
  title: string;
  description: string;
  date: string;
  amount?: string;
}

export interface Talk {
  id: string;
  title: string;
  event: string;
  date: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}