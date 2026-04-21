"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
  as?: "div" | "section" | "article" | "span";
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.8,
  as = "div",
}: Props) {
  const initial: Record<string, number> = { opacity: 0 };
  if (direction === "up") initial.y = 50;
  if (direction === "down") initial.y = -50;
  if (direction === "left") initial.x = 60;
  if (direction === "right") initial.x = -60;

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
