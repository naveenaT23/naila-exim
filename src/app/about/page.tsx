"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle2, TrendingUp, Anchor } from "lucide-react";
import { motion } from "framer-motion";
import { ParallaxBg, ParallaxSection } from "@/components/ParallaxSection";
import AnimatedCounter from "@/components/AnimatedCounter";
export default function About() {
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
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden">
        <ParallaxBg speed={100} className="absolute inset-0">
          <Image
            src="/port-logistics.png"
            alt="Shipping port cranes"
            fill
            priority
            className="object-cover"
          />
        </ParallaxBg>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container relative z-10 text-center text-white"
        >
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-heading font-black mb-6">About Naila Exim</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-medium">
            Over a decade of excellence in international trade, connecting Indian primary industries to global markets.
          </p>
        </motion.div>
      </section>

      {/* Experience & Positioning */}
      <section className="py-24 bg-white relative" id="about">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-secondary/10 rounded-3xl transform -rotate-2" />
              <ParallaxSection speed={40} className="relative z-10 rounded-3xl overflow-hidden shadow-xl h-[580px]">
                <Image
                  src="/about-vision.png"
                  alt="Naila Exim founding vision and leadership"
                  fill
                  className="object-cover"
                />
              </ParallaxSection>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeInUp} className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Experience & Positioning</motion.span>
              <motion.h2 variants={fadeInUp} className="text-primary font-heading font-black text-4xl mb-6 leading-tight">
                A Legacy of Trust and Direct Market Access
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-600 text-lg mb-5 leading-relaxed font-medium">
                Nuhman, our founder, brings in over <strong className="text-slate-900">13 years of experience</strong> in international trade, especially between India, China, the Gulf, and greater African countries.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                Situated in South India with strong and direct access to ports at <strong className="text-slate-900">Tuticorin, Chennai, and Cochin</strong>, we can export products in a timely manner without any delay.
              </motion.p>

              <motion.ul variants={staggerContainer} className="space-y-4 mb-8">
                {[
                  "Sourcing and Trade Consulting for Global Markets",
                  "Direct partnerships with Indian Production Communities",
                  "Bypassing Middlemen to maximize customer benefits",
                  "Strict Quality Control Protocols on all industrial sectors",
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20"
          >
            {[
              { icon: <TrendingUp size={44} />, to: 13, suffix: "+", label: "Years of Experience" },
              { icon: <Anchor size={44} />, to: 3, suffix: "", label: "Major Ports — Direct Access" },
              { icon: <CheckCircle2 size={44} />, to: 100, suffix: "%", label: "Direct From Source" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="pt-10 md:pt-0 pb-10 md:pb-0 px-4 group hover:scale-105 transition-transform">
                <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-secondary">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-heading font-black mb-2 text-white">
                  <AnimatedCounter to={stat.to} suffix={stat.suffix} />
                </h3>
                <p className="text-lg font-medium text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container">
          <motion.div 
             variants={staggerContainer}
             initial="initial"
             whileInView="whileInView"
             viewport={{ once: true }}
             className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                label: "Our Mission",
                text: "We believe in forging business ties that last generations and are committed to a long and lasting business relationship with our partners."
              },
              {
                label: "Our Vision",
                text: "To be the most trusted export-import partner across European and Asian markets, nurturing sustainable production ecosystems and direct global trade."
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">{item.label}</span>
                <p className="text-slate-700 font-medium text-lg leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
