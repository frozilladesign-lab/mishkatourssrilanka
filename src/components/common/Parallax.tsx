import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionStyle } from 'framer-motion';
interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
  style?: MotionStyle;
}
export function Parallax({
  children,
  offset = 50,
  className = '',
  style
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{
          y,
          ...style
        }}
        className="w-full h-full">
        
        {children}
      </motion.div>
    </div>);

}