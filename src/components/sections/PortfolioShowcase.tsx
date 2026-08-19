import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../motion/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';
import Button from '../ui/Button';
import MotionStaggerGroup from '../motion/StaggerGroup';
import MotionStaggerItem from '../motion/StaggerItem';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';
import { useTranslation } from 'react-i18next';

export default function PortfolioShowcase() {
  const { t } = useTranslation();
  
  const displayProjects = projects.slice(0, 3);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="portfolio">
      <Container>
        <ScrollReveal>
          <SectionTitle
            label={t('portfolioPage.hero.titleHighlight', 'OUR WORK')}
            title={t('portfolioPage.hero.title', 'Selected Projects')}
            subtitle={t('portfolioPage.emptyState', 'A quick look at some of the digital products and solutions we\'ve built.')}
          />
        </ScrollReveal>

        <MotionStaggerGroup
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {displayProjects.map((project) => (
            <MotionStaggerItem key={project.id}>
              <ProjectCard project={project} />
            </MotionStaggerItem>
          ))}
        </MotionStaggerGroup>

        <ScrollReveal delay={0.3}>
          <div className="flex justify-center mt-16">
            <Link to="/portfolio">
              <Button 
                className="group"
                icon={<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />}
              >
                {t('common.learnMore', 'View All Projects')}
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
