"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, TrendingUp, Ship, Target, Eye, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSlider from "@/components/HeroSlider";
import TiltCard from "@/components/TiltCard";
import { ParallaxBg, FloatingElement } from "@/components/ParallaxSection";
const tabContent = {
  "About Us": {
    label: "Who We Are",
    title: "A Legacy of Trust and Direct Market Access.",
    body: "Nuhman, our founder, brings over 13 years of experience in international trade, especially between India, China, the Gulf, and greater African countries. Situated in South India with strong and direct access to ports at Tuticorin, Chennai, and Cochin, we export products in a timely manner without any delay.",
    points: [
      "Sourcing and Trade Consulting for Global Markets",
      "Direct partnerships with Indian Production Communities",
      "Bypassing Middlemen to maximize customer benefits",
      "Ensuring strict quality control protocols",
    ],
    cta: { label: "Learn More", href: "/about" },
  },
  Journey: {
    label: "Our Milestones",
    title: "From Local Roots to a Global Trading Force.",
    body: "Founded with a single vision of fair and direct trade, Naila Exim has grown from a regional sourcing firm into a trusted international partner. Over the past 13+ years, we have built supply chains across four continents — connecting India's richest production hubs with buyers worldwide.",
    points: [
      "2011 — Founded in South India with a focus on agri-commodities",
      "2014 — Expanded into mining & mineral exports across the Gulf",
      "2018 — Entered the African market with direct port partnerships",
      "2023 — Launched petrol & energy product division globally",
    ],
    cta: { label: "Our Story", href: "/about" },
  },
  Vision: {
    label: "Where We Are Headed",
    title: "A World Where Trade is Built on Transparency.",
    body: "Our vision is to become the most trusted name in direct-source export from India. We believe global trade should be transparent, fair, and free from unnecessary middlemen — empowering both producers and buyers to grow together sustainably.",
    points: [
      "Establish direct sourcing hubs in 10+ Indian states",
      "Expand into 20 new countries by 2030",
      "Achieve zero-delay logistics across all trade corridors",
      "Champion sustainable and ethical sourcing practices",
    ],
    cta: { label: "About Our Future", href: "/about" },
  },
  Mission: {
    label: "Our Daily Commitment",
    title: "Delivering Trust — Every Shipment, Every Time.",
    body: "Our mission is to provide our global clients with the highest quality Indian commodities at the most competitive prices — directly from the source. We uphold uncompromising quality standards, transparent pricing, and on-time delivery on every single order we handle.",
    points: [
      "Source only from verified, certified primary producers",
      "Maintain strict quality checks at every supply chain stage",
      "Ensure full documentation and compliance for all shipments",
      "Build long-term relationships over short-term profits",
    ],
    cta: { label: "Work With Us", href: "/contact" },
  },
} as const;

type TabKey = keyof typeof tabContent;

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("About Us");

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  const tab = tabContent[activeTab];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <HeroSlider />

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container relative z-20 text-white mt-10"
        >
          <div className="max-w-3xl">
            <span className="inline-block py-2 px-5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-semibold tracking-wider text-slate-200 mb-6">
              Premium Export And Import Partner
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-5 leading-tight">
              <span className="text-secondary block mb-2">Delivering Trust Worldwide</span>
              Serving Markets Globally.
            </h1>
            <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl font-medium leading-relaxed">
              Specializing in agriculture, industrial minerals, and energy products.
              Sourcing directly from primary producers with uncompromising quality.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/products" className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-lg shadow-secondary/25 flex items-center gap-2 hover:-translate-y-1">
                Get Started <div className="bg-white/20 rounded-full p-1"><ArrowRight size={14} strokeWidth={3} /></div>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Intro / About Snippet */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container relative z-10">

          {/* Top Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-16">
            {(["About Us", "Journey", "Vision", "Mission"] as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-secondary text-white shadow-md shadow-secondary/20"
                    : "border border-slate-300 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Animated Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-12 mb-20 min-h-[320px]">
            {/* Left Col */}
            <div>
              <p className="text-slate-500 font-semibold text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary block"></span>
                {tab.label}
              </p>
            </div>

            {/* Right Col — animated */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-800 mb-6 leading-tight">
                  {tab.title}
                </h2>
                <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed font-medium max-w-4xl">
                  {tab.body}
                </p>

                <ul className="space-y-4 mb-10 text-slate-600 font-medium">
                  {tab.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-4 h-4 mt-1 rounded-full border-[1.5px] border-secondary shrink-0"></div>
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href={tab.cta.href}
                  className="inline-block px-8 py-2.5 rounded-full border border-slate-400 text-slate-600 font-semibold hover:bg-slate-50 hover:border-secondary hover:text-secondary transition-all duration-300"
                >
                  {tab.cta.label}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Grid — stays fixed regardless of tab */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 h-auto lg:h-[280px] pt-10">
            <FloatingElement speed={30} className="h-48 lg:h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative rounded-[2rem] overflow-hidden shadow-sm h-full group"
              >
                <ParallaxBg speed={50} className="absolute inset-0">
                  <Image src="/agri-hero.png" alt="Warehouse" fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </ParallaxBg>
              </motion.div>
            </FloatingElement>

            <FloatingElement speed={-40} className="h-48 lg:h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="h-full"
              >
                <TiltCard className="rounded-[2rem] bg-[#f1f5f9] p-6 lg:p-8 flex flex-col justify-end relative shadow-sm group hover:bg-[#e2e8f0] transition-colors">
                  <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-8 h-8 rounded-full bg-slate-300/60 flex items-center justify-center text-slate-500 group-hover:bg-slate-300 transition-colors">
                    <ArrowRight size={16} className="-rotate-45" />
                  </div>
                  <div>
                    <h4 className="text-4xl lg:text-5xl font-black text-slate-800 mb-2">13+</h4>
                    <p className="text-sm font-medium text-slate-600">Years of experience</p>
                  </div>
                </TiltCard>
              </motion.div>
            </FloatingElement>

            <FloatingElement speed={50} className="h-48 lg:h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative rounded-[2rem] overflow-hidden shadow-sm h-full group"
              >
                <ParallaxBg speed={70} className="absolute inset-0">
                  <Image src="/port-logistics.png" alt="Containers" fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </ParallaxBg>
              </motion.div>
            </FloatingElement>

            <FloatingElement speed={-30} className="h-48 lg:h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="h-full"
              >
                <TiltCard className="rounded-[2rem] bg-[#78d0c3] p-6 lg:p-8 flex flex-col justify-end relative shadow-sm group hover:bg-[#66bfa2] transition-colors">
                  <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-slate-800 group-hover:bg-black/20 transition-colors">
                    <ArrowRight size={16} className="-rotate-45" />
                  </div>
                  <div>
                    <h4 className="text-4xl lg:text-5xl font-black text-slate-800 mb-2">100%</h4>
                    <p className="text-sm font-medium text-slate-800">Direct from source</p>
                  </div>
                </TiltCard>
              </motion.div>
            </FloatingElement>

            <FloatingElement speed={40} className="h-48 lg:h-full hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative rounded-[2rem] overflow-hidden shadow-sm h-full group"
              >
                <ParallaxBg speed={90} className="absolute inset-0">
                  <Image src="/hero-trade.png" alt="Stacked Containers" fill sizes="20vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </ParallaxBg>
              </motion.div>
            </FloatingElement>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-center text-center mb-16 gap-6"
          >
            <div className="max-w-xl">
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Core Categories</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-primary leading-tight">
                Our Premium <br />Product Selection
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Food Products", 
                img: "/refined-sugar.png", 
                desc: "Premium Sugar, Spices, Grains & Oils",
                link: "/products?category=food-products"
              },
              { 
                name: "Mining and Minerals", 
                img: "/iron-ore.png", 
                desc: "High-grade Ores, Cathodes & Ingots",
                link: "/products?category=mining-and-minerals"
              },
              { 
                name: "Petrol Products", 
                img: "/crude-oil.png", 
                desc: "Diesel, Jet Fuel & Industrial Chemicals",
                link: "/products?category=petrol-products"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <TiltCard>
                  <Link href={item.link} className="group block relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent transition-opacity group-hover:opacity-90" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <h3 className="text-white font-heading font-black text-2xl mb-2">{item.name}</h3>
                      <p className="text-white/80 font-medium text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.desc}
                      </p>
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link href="/products" className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-primary/95 transition-all hover:-translate-y-1 group">
              Explore All Products <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl animate-pulse" />
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-2 border-slate-100">
                <Image
                  src="/global-trade-map.png"
                  alt="Naila Exim Global Trade Routes"
                  width={800}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <motion.span variants={fadeInUp} className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Global Footprint</motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-black text-primary mb-8 leading-tight">
                Connecting India <br />to the World.
              </motion.h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { region: "Europe", desc: "Premium niche markets" },
                  { region: "Asia", desc: "Expanding retail hubs" },
                  { region: "Gulf", desc: "Direct trade partners" },
                  { region: "Africa", desc: "Emerging markets" },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="space-y-2">
                    <h4 className="text-2xl font-heading font-black text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      {item.region}
                    </h4>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div variants={fadeInUp} className="mt-12 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary shrink-0">
                  <Globe size={32} />
                </div>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Our network spans across <strong className="text-primary">4 major continents</strong>, delivering high-quality Indian resources and products with logistic precision and trust.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 border-y border-slate-200 overflow-hidden">
        <ParallaxBg speed={120} className="absolute inset-0 z-0">
          <Image
            src="/port-logistics.png"
            alt="Global Trade Network Background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </ParallaxBg>
        <div className="absolute inset-0 bg-slate-50/85 z-0" />
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Our Advantage</span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-primary mb-4">Why Choose Naila Exim?</h2>
            <p className="text-slate-700 font-medium">Seamless global trade with direct market access, ensuring premium quality and timely deliveries worldwide.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe size={32} />,
                title: "Global Connectivity",
                desc: "Deep ties across Asian, European, Gulf, and greater African markets, providing direct access to premium networks."
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "Uncompromising Quality",
                desc: "Sourcing directly from primary producers and mines with strict quality control protocols guarantees exceptional products for our end customers."
              },
              {
                icon: <Ship size={32} />,
                title: "Logistical Excellence",
                desc: "Strategically located with direct access to South Indian major ports — Tuticorin, Chennai, and Cochin — for timely delivery."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="h-full"
              >
                <TiltCard>
                  <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-white hover:shadow-xl hover:bg-white transition-all duration-300 group h-full text-left">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{card.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">Ready to expand your global reach?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 font-medium">Join hands with an experienced partner dedicated to delivering trust, quality, and lasting relationships.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 gap-2 group">
            Get in touch with us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
