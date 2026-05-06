"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSlider() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Classic parallax: image drifts upward as user scrolls down
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div ref={ref} className="absolute inset-0 bg-slate-900 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <Image
          src="/hero-static-bg.png"
          alt="Naila Exim Global Operations - Premium Export"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
      </motion.div>

      {/* Dynamic Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/40 to-slate-900/95"
      />
    </div>
  );
}

