import type { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    phase: 'Discovery',
    duration: 'Week 1-2',
    description: 'We dive deep into understanding your business, goals, and challenges. This phase includes stakeholder interviews, market research, and technical assessment to ensure we build the right solution.',
    details: 'Requirements gathering, Stakeholder interviews, Market analysis, Technical audit'
  },
  {
    number: '02',
    phase: 'Planning',
    duration: 'Week 2-3',
    description: 'We create a comprehensive roadmap outlining project scope, timeline, and resource allocation. This ensures everyone is aligned and expectations are clear from the start.',
    details: 'Project roadmap, Architecture design, Technology selection, Sprint planning'
  },
  {
    number: '03',
    phase: 'UI/UX Design',
    duration: 'Week 3-5',
    description: 'Our designers craft intuitive interfaces and engaging user experiences tailored to your audience. We iterate based on feedback to ensure the design meets your vision and user needs.',
    details: 'Wireframes, Interactive prototypes, Visual design, User testing'
  },
  {
    number: '04',
    phase: 'Development',
    duration: 'Week 5-12',
    description: 'Our engineering team brings designs to life using agile methodologies and best practices. Regular demos keep you informed and involved throughout the build process.',
    details: 'Agile sprints, API development, Frontend & backend coding, Code reviews'
  },
  {
    number: '05',
    phase: 'Testing',
    duration: 'Week 12-13',
    description: 'Rigorous quality assurance ensures your solution is reliable, secure, and performs flawlessly. We test across devices, browsers, and scenarios to catch issues before launch.',
    details: 'QA testing, Security audit, Performance testing, Bug tracking & resolution'
  },
  {
    number: '06',
    phase: 'Deployment',
    duration: 'Week 13-14',
    description: 'We handle the entire deployment process, ensuring a smooth transition to production. Our team monitors the launch closely to address any issues immediately.',
    details: 'CI/CD pipeline, Cloud deployment, Monitoring setup, Go-live support'
  },
  {
    number: '07',
    phase: 'Support & Growth',
    duration: 'Ongoing',
    description: 'We continue to support, maintain, and improve your solution to ensure long-term success. Regular updates keep your software secure, performant, and competitive.',
    details: 'Ongoing support, Feature updates, Performance optimization, Strategic consulting'
  }
];
