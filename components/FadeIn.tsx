"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
