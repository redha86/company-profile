import { cn } from '@/lib/cn';

interface FilterBarProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const filters = ['All', 'Web', 'Mobile', 'Design', 'Enterprise'];

export default function FilterBar({ activeFilter, setActiveFilter }: FilterBarProps) {
  return (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          aria-pressed={activeFilter === filter}
          aria-label={`Filter by ${filter}`}
          className={cn(
            'px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95',
            activeFilter === filter
              ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
              : 'bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-gray-200'
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
