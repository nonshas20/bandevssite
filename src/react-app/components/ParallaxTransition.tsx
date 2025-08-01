import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxTransitionProps {
  darkMode: boolean;
}

export default function ParallaxTransition({ darkMode }: ParallaxTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0.6]);

  return (
    <div ref={ref} className="h-32 relative overflow-hidden">
      {/* Parallax background gradient */}
      <motion.div
        className={`absolute inset-0 ${
          darkMode 
            ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-b from-white via-gray-50 to-white'
        }`}
        style={{ y: backgroundY }}
      />
      
      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-teal-500/10"
        style={{ opacity: overlayOpacity }}
      />

      
    </div>
  );
}
