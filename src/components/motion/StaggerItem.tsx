import { memo } from 'react';
import { motion } from 'framer-motion';
import { staggerItem } from '@/lib/motionVariants';

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const StaggerItem = memo(function StaggerItem({
  children,
  className,
  delay = 0,
}: StaggerItemProps) {
  return (
    <motion.div
      variants={staggerItem}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
});

export default StaggerItem;
