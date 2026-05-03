"use client";
import Image from "next/image";
import { Plane, Ship, PackageCheck, FileSignature, Anchor } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";

const steps = [
  {
    icon: <FileSignature size={28} />,
    title: "Consulting & Documentation",
    desc: "We start by understanding your exact requirements and handling all export/import legalities to ensure smooth sailing.",
  },
  {
    icon: <PackageCheck size={28} />,
    title: "Direct Sourcing & QC",
    desc: "Our team sources directly from Indian farmers, applying strict quality control protocols to match global standards.",
  },
  {
    icon: <Ship size={28} />,
    title: "Logistics & Freight",
    desc: "Leveraging our direct access to major South Indian ports — Tuticorin, Chennai, and Cochin — for cost-effective freight.",
  },
  {
    icon: <Plane size={28} />,
    title: "Global Delivery",
    desc: "Timely delivery to your destination, specializing in European, Asian, Gulf, and greater African markets.",
  },
];

export default function ExportBusiness() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-trade.png"
            alt="Cargo containers at port"
            fill
            priority
            className="object-cover opacity-40 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/40 to-slate-950" />
          <div className="absolute inset-0 bg-slate-950 overflow-hidden" />
        </div>
        
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"
        />

        <div className="container relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold tracking-widest uppercase text-sm mb-6 block"
          >
            Our Core Process
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-black mb-8 text-white tracking-tight"
          >
            Export & Trade <span className="text-secondary">Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            A seamless, transparent supply chain engineered to deliver maximum value directly from source to destination.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white relative" id="export">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-0">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-8 pb-12 last:pb-0"
              >
                {/* Left: Number & Line */}
                <div className="flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20,
                      delay: i * 0.1 + 0.2 
                    }}
                    className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 font-heading font-black text-xl z-10"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.div>
                  {i < steps.length - 1 && (
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 + 0.4 }}
                      className="w-0.5 flex-1 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent mt-4" 
                    />
                  )}
                </div>
                {/* Right: Content */}
                <div className="pt-2 pb-8 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="text-secondary"
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="font-heading font-bold text-2xl text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Port Card */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container">
          <div className="bg-white p-8 md:p-14 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-12 border border-slate-100">
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-secondary font-bold tracking-wider uppercase text-sm block">Logistics Network</span>
              <h2 className="text-3xl font-heading font-black text-primary">Strategic Port Access</h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                By maintaining a physical presence in South India, Naila Exim ensures faster processing times and lower logistics costs. We operate directly out of major international shipping hubs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                {[
                  { name: "Tuticorin Port", icon: <Anchor size={20} /> },
                  { name: "Chennai Port", icon: <Anchor size={20} /> },
                  { name: "Cochin Port", icon: <Anchor size={20} /> }
                ].map((port) => (
                  <TiltCard key={port.name}>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group h-full">
                      <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {port.icon}
                      </div>
                      <p className="font-bold text-slate-800">{port.name}</p>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl h-80">
              <Image
                src="/port-logistics.png"
                alt="Shipping port containers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
