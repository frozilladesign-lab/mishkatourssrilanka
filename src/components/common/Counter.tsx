import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}
export function Counter({
  end,
  duration = 2,
  suffix = '',
  className = ''
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true
  });
  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);
  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>);

}