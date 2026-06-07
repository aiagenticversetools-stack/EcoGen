'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedText({ children, className }: AnimatedTextProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.32 }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    >
      {children}
    </motion.div>
  );
}
