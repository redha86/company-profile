import ScrollReveal from '../motion/ScrollReveal';
import StaggerGroup from '../motion/StaggerGroup';
import StaggerItem from '../motion/StaggerItem';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import type { TeamMember } from '@/types';

interface TeamGridProps {
  members: TeamMember[];
  title?: string;
  subtitle?: string;
}

export function TeamGrid({ members, title = 'Meet Our Team', subtitle }: TeamGridProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="Our Team"
            title={title}
            subtitle={subtitle}
          />
        </ScrollReveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <StaggerItem key={member.name}>
              <GlassCard className="text-center hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                    {member.initials}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}