"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ from = 1, to, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Only start counting when the element is well within the viewport (-50px)
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  
  const motionValue = useMotionValue(from);

  useEffect(() => {
    if (inView) {
      import("framer-motion").then(({ animate }) => {
        animate(motionValue, to, {
          duration: 1.5,
          ease: "easeOut",
        });
      });
    }
  }, [inView, motionValue, to]);

  useEffect(() => {
    return motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
      }
    });
  }, [motionValue, suffix]);

  return <span ref={ref}>{from}{suffix}</span>;
}
