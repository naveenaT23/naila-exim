"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const heroImages = [
  {
    src: "/hero-static-bg.png",
    alt: "Naila Exim Global Operations - Premium Export",
  },
  {
    src: "/hero-trade.png",
    alt: "Global cargo ship at sunset - International Trade",
  },
  {
    src: "/mining-hero.png",
    alt: "Industrial mining operations - Premium Resource Sourcing",
  },
  {
    src: "/petrol-hero.png",
    alt: "Modern energy infrastructure - Global Fuel Supply",
  },
  {
    src: "/port-logistics.png",
    alt: "Modern port terminal - Logistical Excellence",
  },
  {
    src: "/agri-hero.png",
    alt: "Agricultural sourcing warehouse - Pure Indian Produce",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Classic parallax: image drifts upward as user scrolls down
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 bg-slate-900 overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ y, scale }}
        >
          <Image
            src={heroImages[currentIndex].src}
            alt={heroImages[currentIndex].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
        </motion.div>
      </AnimatePresence>

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
