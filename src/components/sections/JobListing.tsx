import { Briefcase, MapPin, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import type { JobListing as JobListingType } from '@/types';

interface JobListingProps {
  job: JobListingType;
}

export function JobListing({ job }: JobListingProps) {
  return (
    <GlassCard
      className="h-full flex flex-col hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/15"
    >
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{job.title}</h3>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <Briefcase size={18} aria-hidden="true" />
            <span className="text-sm">{job.department}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={18} aria-hidden="true" />
            <span className="text-sm">{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={18} aria-hidden="true" />
            <span className="text-sm">{job.type}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar size={18} aria-hidden="true" />
            <span className="text-sm">{job.posted}</span>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">{job.description}</p>
      </div>

      <Link to="/contact" className="mt-auto">
        <Button variant="primary" fullWidth>
          Apply Now
        </Button>
      </Link>
    </GlassCard>
  );
}