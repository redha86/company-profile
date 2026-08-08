export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  gradient: string;
  images: string[];
  url: string;
}

export interface Industry {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export interface ProcessStep {
  number: string;
  phase: string;
  duration: string;
  description: string;
  details: string;
  icon?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export interface JobListing {
  title: string;
  department: string;
  location: string;
  type: string;
  posted: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  event: string;
  description: string;
}

export interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavItem {
  name: string;
  path: string;
}

export interface FooterColumn {
  title: string;
  links: { name: string; href: string; }[];
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}
