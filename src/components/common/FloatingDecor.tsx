import React from 'react';
import { motion } from 'framer-motion';
interface FloatingDecorProps {
  variant?: 'leaf' | 'wave' | 'lotus' | 'geometric';
  className?: string;
  size?: number;
}
export function FloatingDecor({
  variant = 'leaf',
  className = '',
  size = 80
}: FloatingDecorProps) {
  const paths = {
    leaf: 'M40 10Q60 20 40 40Q20 20 40 10Z',
    wave: 'M0 20Q10 10 20 20T40 20T60 20',
    lotus: 'M30 10L40 30L30 50L20 30Z M30 30L50 30L30 50L10 30Z',
    geometric: 'M30 10L50 30L30 50L10 30Z M30 20L40 30L30 40L20 30Z'
  };
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut'
      }}>
      
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-10">
        
        <path
          d={paths[variant]}
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary" />
        
      </svg>
    </motion.div>);

}