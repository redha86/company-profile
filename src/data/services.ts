import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'web-development',
    icon: 'Globe',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and scalability.',
    longDescription: 'We build fast, secure, and scalable web applications using the latest frameworks and best practices. From enterprise platforms to customer-facing portals, we deliver solutions that drive business growth and user engagement.',
    features: [
      'Custom web applications',
      'Progressive Web Apps (PWA)',
      'E-commerce platforms',
      'CMS development',
      'RESTful API development',
      'Cloud deployment & scaling'
    ]
  },
  {
    id: 'mobile-development',
    icon: 'Smartphone',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    longDescription: 'Create exceptional mobile experiences that engage users and drive conversions. We develop native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter that maximize reach while minimizing costs.',
    features: [
      'iOS app development',
      'Android app development',
      'React Native solutions',
      'Flutter applications',
      'App store optimization',
      'Mobile backend services'
    ]
  },
  {
    id: 'ui-ux-design',
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality and accessibility.',
    longDescription: 'Design is not just how it looks, but how it works. We create user-centered designs that combine aesthetics with functionality, ensuring your users have an exceptional experience that drives engagement and conversions.',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Visual design systems',
      'Design system creation',
      'Usability testing',
      'WCAG accessibility compliance'
    ]
  },
  {
    id: 'company-website',
    icon: 'Monitor',
    title: 'Company Website',
    description: 'Premium websites that tell your brand story and convert visitors into customers.',
    longDescription: 'Your website is often the first impression customers have of your business. We create stunning, high-performance websites that engage visitors, communicate your value proposition, and convert them into loyal customers.',
    features: [
      'Corporate websites',
      'Landing page optimization',
      'Portfolio websites',
      'SEO optimization',
      'Content management systems',
      'Analytics integration'
    ]
  },
  {
    id: 'system-integration',
    icon: 'GitMerge',
    title: 'System Integration',
    description: 'Seamlessly connect your business systems and third-party services.',
    longDescription: 'Break down data silos and streamline operations by integrating your existing systems. We connect ERPs, CRMs, payment gateways, and third-party services into a unified ecosystem that improves efficiency and data flow.',
    features: [
      'API integration',
      'Third-party service connections',
      'Legacy system modernization',
      'Data migration',
      'Workflow automation',
      'Custom middleware development'
    ]
  },
  {
    id: 'maintenance-support',
    icon: 'Wrench',
    title: 'Maintenance & Support',
    description: '24/7 support and continuous improvement to keep your software running smoothly.',
    longDescription: 'Software needs ongoing care to remain secure, performant, and valuable. Our maintenance and support services ensure your applications continue to deliver results long after launch, with proactive monitoring and rapid response.',
    features: [
      'Bug fixes & updates',
      'Performance monitoring',
      'Security patches',
      'Feature enhancements',
      '24/7 technical support',
      'Infrastructure management'
    ]
  }
];
