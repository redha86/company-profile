import { memo, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import ScrollReveal from '../motion/ScrollReveal';
import { useTranslation } from 'react-i18next';

const technologies = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'OpenAI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg' },
  { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
  { name: 'Cloudflare', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg' },
];

const TrustedBy = memo(function TrustedBy() {
  const { t } = useTranslation();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const inView = useInView(marqueeRef, { margin: '0px 0px -100px 0px' });
  const reduced = useReducedMotion();
  const animate = inView && !reduced;
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-dark">
            {t('technologies.title', 'Built with Industry-Leading Technologies')}
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div ref={marqueeRef} className="flex overflow-hidden" aria-hidden="true">
            <motion.div
              className="flex gap-12 items-center"
              animate={animate ? { x: [0, -2040] } : { x: 0 }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 relative group"
                  style={{ minWidth: '80px' }}
                  onMouseEnter={() => setHoveredTech(`${tech.name}-${index}`)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain transition-all duration-300"
                      style={{
                        filter: hoveredTech === `${tech.name}-${index}` ? 'grayscale(0%)' : 'grayscale(100%)',
                        opacity: hoveredTech === `${tech.name}-${index}` ? 1 : 0.6,
                      }}
                    />
                  </div>
                  {hoveredTech === `${tech.name}-${index}` && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20"
                    >
                      {tech.name}
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" aria-hidden="true" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
});

export default TrustedBy;
