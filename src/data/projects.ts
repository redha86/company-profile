import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'healthcare-platform',
    title: 'Healthcare Platform',
    category: 'Web',
    description: 'Comprehensive healthcare management system serving 10,000+ patients with secure data handling and real-time appointment scheduling.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    gradient: 'from-blue-400 to-cyan-400'
  },
  {
    id: 'ecommerce-mobile',
    title: 'E-Commerce Mobile App',
    category: 'Mobile',
    description: 'Cross-platform shopping app with 500K+ downloads, featuring seamless checkout and personalized recommendations.',
    tech: ['React Native', 'Firebase', 'Stripe', 'Redux'],
    gradient: 'from-purple-400 to-pink-400'
  },
  {
    id: 'financial-dashboard',
    title: 'Financial Dashboard',
    category: 'Design',
    description: 'Intuitive financial analytics platform for enterprise clients with real-time data visualization and reporting.',
    tech: ['Figma', 'React', 'D3.js', 'TailwindCSS'],
    gradient: 'from-green-400 to-emerald-400'
  },
  {
    id: 'manufacturing-erp',
    title: 'Manufacturing ERP',
    category: 'Enterprise',
    description: 'End-to-end ERP solution for manufacturing operations, managing inventory, production, and supply chain.',
    tech: ['Angular', 'Java', 'Oracle', 'Kubernetes'],
    gradient: 'from-orange-400 to-red-400'
  },
  {
    id: 'education-portal',
    title: 'Education Learning Portal',
    category: 'Web',
    description: 'Interactive learning platform with video streaming, assessments, and progress tracking for 50,000+ students.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'WebRTC'],
    gradient: 'from-indigo-400 to-purple-400'
  },
  {
    id: 'logistics-tracker',
    title: 'Logistics Tracking App',
    category: 'Mobile',
    description: 'Real-time shipment tracking with GPS integration, serving logistics companies across North America.',
    tech: ['Flutter', 'Python', 'Docker', 'Redis'],
    gradient: 'from-teal-400 to-blue-400'
  }
];
