import { createElement } from 'react';

type ElementType = 'span' | 'h1' | 'h2' | 'h3' | 'p';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

export default function GradientText({
  children,
  className = '',
  as = 'span',
}: GradientTextProps) {
  const gradientStyle = {
    background: 'linear-gradient(135deg, #DC4D01 0%, #F97316 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    backgroundSize: '200% 200%',
    animation: 'gradient-shift 3s ease infinite',
  };

  return (
    <>
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
      {createElement(
        as,
        {
          className,
          style: gradientStyle,
        },
        children
      )}
    </>
  );
}
