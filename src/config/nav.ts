import { NavItem } from '@/types';
import { ROUTES } from './routes';

export const navItems: NavItem[] = [
  { name: 'About', path: ROUTES.about },
  { name: 'Services', path: ROUTES.services },
  { name: 'Portfolio', path: ROUTES.portfolio },
  { name: 'Industries', path: ROUTES.industries },
  { name: 'Process', path: ROUTES.process },
  { name: 'Careers', path: ROUTES.careers },
  { name: 'Contact', path: ROUTES.contact },
];
