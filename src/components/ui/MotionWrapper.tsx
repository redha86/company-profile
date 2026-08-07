import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { fadeInUp } from '@/lib/motionVariants';

type DivProps = HTMLMotionProps<'div'>;
type SpanProps = HTMLMotionProps<'span'>;
type H1Props = HTMLMotionProps<'h1'>;
type H2Props = HTMLMotionProps<'h2'>;
type H3Props = HTMLMotionProps<'h3'>;
type H4Props = HTMLMotionProps<'h4'>;
type MainProps = HTMLMotionProps<'main'>;
type SectionProps = HTMLMotionProps<'section'>;

const MotionDiv = forwardRef<HTMLDivElement, DivProps>(({ className, ...props }, ref) => (
  <motion.div ref={ref} className={className} variants={fadeInUp} {...props} />
));
MotionDiv.displayName = 'MotionDiv';

const MotionSpan = forwardRef<HTMLSpanElement, SpanProps>(({ className, ...props }, ref) => (
  <motion.span ref={ref} className={className} variants={fadeInUp} {...props} />
));
MotionSpan.displayName = 'MotionSpan';

const MotionH1 = forwardRef<HTMLHeadingElement, H1Props>(({ className, ...props }, ref) => (
  <motion.h1 ref={ref} className={className} variants={fadeInUp} {...props} />
));
MotionH1.displayName = 'MotionH1';

const MotionH2 = forwardRef<HTMLHeadingElement, H2Props>(({ className, ...props }, ref) => (
  <motion.h2 ref={ref} className={className} variants={fadeInUp} {...props} />
));
MotionH2.displayName = 'MotionH2';

const MotionH3 = forwardRef<HTMLHeadingElement, H3Props>(({ className, ...props }, ref) => (
  <motion.h3 ref={ref} className={className} variants={fadeInUp} {...props} />
));
MotionH3.displayName = 'MotionH3';

const MotionH4 = forwardRef<HTMLHeadingElement, H4Props>(({ className, ...props }, ref) => (
  <motion.h4 ref={ref} className={className} variants={fadeInUp} {...props} />
));
MotionH4.displayName = 'MotionH4';

const MotionMain = forwardRef<HTMLElement, MainProps>(({ className, ...props }, ref) => (
  <motion.main ref={ref} className={className} variants={fadeInUp} {...props} />
));
MotionMain.displayName = 'MotionMain';

const MotionSection = forwardRef<HTMLElement, SectionProps>(({ className, ...props }, ref) => (
  <motion.section ref={ref} className={className} variants={fadeInUp} {...props} />
));
MotionSection.displayName = 'MotionSection';

export { MotionDiv, MotionSpan, MotionH1, MotionH2, MotionH3, MotionH4, MotionMain, MotionSection };
