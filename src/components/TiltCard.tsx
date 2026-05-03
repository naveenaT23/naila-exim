"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative h-full w-full ${className}`}
    >
      <div className="h-full">
        {children}
      </div>
    </motion.div>
  );
}
