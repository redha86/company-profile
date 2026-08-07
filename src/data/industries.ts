import type { Industry } from '@/types';

export const industries: Industry[] = [
  {
    id: 'education',
    icon: 'BookOpen',
    title: 'Education',
    description: 'Digital transformation for schools, universities, and learning platforms',
    features: [
      'Learning Management Systems',
      'Student portals & enrollment',
      'Virtual classrooms',
      'Gamified learning experiences'
    ],
    gradient: 'from-blue-400 to-indigo-500'
  },
  {
    id: 'manufacturing',
    icon: 'Factory',
    title: 'Manufacturing',
    description: 'Smart manufacturing solutions that optimize production and supply chain',
    features: [
      'IoT integration',
      'Production monitoring',
      'Quality control systems',
      'Supply chain management'
    ],
    gradient: 'from-orange-400 to-red-500'
  },
  {
    id: 'healthcare',
    icon: 'HeartPulse',
    title: 'Healthcare',
    description: 'Secure, compliant solutions for clinics, hospitals, and health tech',
    features: [
      'EHR systems',
      'Telemedicine platforms',
      'Patient management',
      'HIPAA compliance & security'
    ],
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    id: 'logistics',
    icon: 'Truck',
    title: 'Logistics',
    description: 'End-to-end logistics solutions for transportation and delivery companies',
    features: [
      'Route optimization',
      'Fleet management',
      'Real-time tracking',
      'Warehouse automation'
    ],
    gradient: 'from-teal-400 to-cyan-500'
  },
  {
    id: 'retail',
    icon: 'ShoppingBag',
    title: 'Retail',
    description: 'Omnichannel solutions that transform the retail experience',
    features: [
      'E-commerce platforms',
      'POS systems',
      'Customer loyalty programs',
      'Inventory management'
    ],
    gradient: 'from-pink-400 to-rose-500'
  },
  {
    id: 'corporate',
    icon: 'Building2',
    title: 'Corporate',
    description: 'Enterprise solutions for established businesses seeking innovation',
    features: [
      'Digital transformation',
      'Enterprise software',
      'Process automation',
      'Analytics dashboards'
    ],
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    id: 'startup',
    icon: 'Rocket',
    title: 'Startup',
    description: 'Accelerated solutions for fast-growing startups and tech companies',
    features: [
      'Rapid MVP development',
      'Product-market fit validation',
      'Scalable architecture',
      'Agile development'
    ],
    gradient: 'from-purple-400 to-violet-500'
  }
];
