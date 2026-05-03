"use client";

import React from "react";
import Image from "next/image";
import { Globe, TrendingUp, ShieldCheck, Ship, ArrowRight, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ParallaxBg } from "@/components/ParallaxSection";
import TiltCard from "@/components/TiltCard";const services = [
  {
    id: "global-sourcing",
    image: "/hero-trade.png",
    title: "Global Sourcing",
    desc: "We bridge the gap between India's primary production sectors and global demand, ensuring direct access to premium agriculture, minerals, and energy resources.",
    features: ["Direct Producer Partnerships", "Bulk Commodity Sourcing", "Ethical Trade Practices"]
  },
  {
    id: "trade-consulting",
    image: "/about-team.png",
    title: "Trade Consulting",
    desc: "Navigating international trade laws, market trends, and sourcing strategies with over 13 years of expertise across Asian, European, and African markets.",
    features: ["Market Intelligence", "Regulatory Compliance", "Risk Management"]
  },
  {
    id: "quality-assurance",
    image: "/agri-hero.png",
    title: "Quality Assurance",
    desc: "Direct, non-negotiable quality control protocols at the source. We ensure every shipment meets stringent international standards before it leaves the port.",
    features: ["Source Verification", "Standard Compliance", "Batch Testing"]
  },
  {
    id: "logistics-and-delivery",
    image: "/port-logistics.png",
    title: "Logistics & Delivery",
    desc: "Leveraging direct access to South India's major ports for streamlined shipping, documentation, and on-time global delivery.",
    features: ["Port-Direct Access", "Full Documentation", "End-to-End Tracking"]
  }
];

export default function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <ParallaxBg speed={100} className="absolute inset-0">
          <Image
            src="/hero-trade.png"
            alt="Global Trade Services"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </ParallaxBg>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container relative z-10 text-center text-white mt-16"
        >
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">How We Help</span>
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 tracking-tight">
            Our Premium <span className="text-secondary">Services</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
            Unlocking global trade opportunities through expert sourcing, stringent quality control, and logistical excellence.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 container">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="group relative h-[380px] rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <TiltCard className="rounded-[2.5rem] overflow-hidden">
                <Link href={`/services/${service.id}`} className="absolute inset-0 z-20" />
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-primary/20 transition-opacity group-hover:opacity-90" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl md:text-3xl font-heading font-black mb-3">{service.title}</h3>
                <p className="text-slate-200 font-medium text-lg leading-relaxed mb-6 line-clamp-3">
                  {service.desc}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature, j) => (
                      <span key={j} className="text-[10px] font-bold uppercase tracking-widest text-white/70 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-secondary font-black text-sm uppercase tracking-widest group/btn">
                    <span>View Brief</span>
                    <MoveRight size={20} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Trust Quote Section */}
      <section className="relative py-32 overflow-hidden bg-slate-900 text-white text-center">
        <ParallaxBg speed={100} className="absolute inset-0 opacity-30 mix-blend-luminosity">
          <Image
            src="/about-vision.png"
            alt="Naila Exim Trust"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </ParallaxBg>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-primary/80 to-slate-950/80 z-0" />
        
        <div className="container relative z-10 max-w-4xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-10 leading-tight italic">
              "We believe in forging business ties that last generations and are committed to a long and lasting business relationship with our partners."
            </h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mb-10" />
            <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-slate-50 transition-all hover:-translate-y-1 group">
              Start Your Partnership <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
