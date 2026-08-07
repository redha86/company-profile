import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { fadeInUp } from '@/lib/motionVariants';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { name: string; path?: string }[];
  className?: string;
}

export function PageHero({ title, subtitle, breadcrumbs, className }: PageHeroProps) {
  return (
    <section className={cn('pt-32 pb-20 bg-gradient-to-br from-[#FFEDD5] via-white to-[#FFF8E1]', className)}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {breadcrumbs && (
            <nav aria-label="Breadcrumb" className="inline-flex items-center space-x-2 text-sm text-gray-600 mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight size={16} aria-hidden="true" />
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-primary transition-colors">{crumb.name}</Link>
                  ) : (
                    <span className="text-primary">{crumb.name}</span>
                  )}
                </div>
              ))}
            </nav>
          )}
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
