import { ArrowRight } from 'lucide-react';
import { TechBadge } from '../shared/TechBadge';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GlassCard
      className="overflow-hidden h-full flex flex-col hover:-translate-y-2"
    >
      <div className={`h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-6`} aria-hidden="true" />
      
      <div className="flex flex-col flex-1">
        <span className="inline-block w-fit px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
          {project.category}
        </span>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
        
        <Button variant="outline" size="sm" icon={<ArrowRight size={16} aria-hidden="true" />}>
          View Project
        </Button>
      </div>
    </GlassCard>
  );
}
