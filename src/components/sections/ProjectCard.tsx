import { useEffect, useState } from 'react';
import { TechBadge } from '../shared/TechBadge';
import GlassCard from '../ui/GlassCard';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Tidak perlu slideshow jika hanya ada 1 gambar
    if (project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        return (prev + 1) % project.images.length;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <GlassCard
      className="overflow-hidden h-full flex flex-col hover:-translate-y-2 transition-transform duration-300"
    >
      {/* Project Image Slideshow */}
      <div className="relative h-48 rounded-xl mb-6 overflow-hidden bg-gray-50">
        {project.images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={`${project.title} screenshot ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
              index === currentImageIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95 pointer-events-none'
            }`}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}

      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-1">
        {/* Category */}
        <span className="inline-block w-fit px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

      </div>
    </GlassCard>
  );
}