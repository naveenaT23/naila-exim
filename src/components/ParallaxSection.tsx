"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  /** Y offset range. Positive = floats up (bg style). Negative = floats down. Default: 60 */
  speed?: number;
  className?: string;
}

/**
 * Wraps children in a scroll-driven vertical parallax motion.
 * speed=60 → element moves 60px upward over full scroll range (slow, cinematic).
 * speed=120 → faster, great for background images.
 */
export function ParallaxSection({ children, speed = 60, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const raw = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const y = useSpring(raw, { stiffness: 80, damping: 20, mass: 0.5 });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/** Lightweight parallax just for Y — no spring, for background images */
export function ParallaxBg({ children, speed = 100, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 0.5}px`, `${speed * 0.5}px`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className || "relative"}`}>
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        {children}
      </motion.div>
    </div>
  );
}

/** Parallax for floating decorative blobs/orbs */
export function ParallaxOrb({
  children,
  speed = 40,
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, opacity }}>{children}</motion.div>
    </div>
  );
}

/** Pure floating element without clipping, great for staggered grid cards */
export function FloatingElement({
  children,
  speed = 40,
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const raw = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const y = useSpring(raw, { stiffness: 80, damping: 20, mass: 0.5 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full">{children}</motion.div>
    </div>
  );
}
