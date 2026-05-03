"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap, Globe, Ship, TrendingUp } from "lucide-react";
import Link from "next/link";

const servicesDetails = {
  "global-sourcing": {
    title: "Global Sourcing",
    image: "/hero-trade.png",
    icon: <Globe size={40} />,
    brief: "Bridging the gap between India's production and global demand.",
    content: "Naila Exim Pvt Ltd specializes in direct sourcing from India's most productive regions. We provide high-grade sugar, spices, grains, and industrial minerals like quartz and feldspar. Our model eliminates middle-men, ensuring better prices and higher quality control. We leverage our deep-rooted connections with primary producers to bring the best of India to the global stage.",
    highlights: ["Direct Producer Ties", "Cost-Effective Sourcing", "Diverse Product Range"],
    extendedInfo: "Our sourcing team works on the ground to identify the best crops and mineral deposits. By managing the sourcing process directly, we can guarantee the origin and ethical production of all materials."
  },
  "trade-consulting": {
    title: "Trade Consulting",
    image: "/about-team.png",
    icon: <TrendingUp size={40} />,
    brief: "Expert navigation of international trade laws and market trends.",
    content: "With over a decade of experience in international trade, we assist businesses in navigating complex export-import regulations. From documentation to market entry strategies, our consulting ensures smooth cross-border operations. We analyze market trends to provide our partners with actionable intelligence, helping them make informed decisions in a volatile global economy.",
    highlights: ["13+ Years Experience", "Regulatory Guidance", "Market Intelligence"],
    extendedInfo: "Whether you are a new entrant in the trade sector or an established player, our consulting services are tailored to optimize your supply chain and reduce operational risks."
  },
  "quality-assurance": {
    title: "Quality Assurance",
    image: "/agri-hero.png",
    icon: <ShieldCheck size={40} />,
    brief: "Non-negotiable quality control protocols at the source.",
    content: "Quality is our hallmark. Every batch of product undergoes rigorous testing at the source. We adhere to international food safety and industrial standards, providing certificate of analysis for every shipment. Our quality assurance teams are stationed at key production sites to monitor everything from harvest to packaging.",
    highlights: ["Source Verification", "Batch Testing", "Standard Compliance"],
    extendedInfo: "We believe that trust is built through consistency. Our multi-stage inspection process ensures that what you receive is exactly what was promised, every single time."
  },
  "logistics-and-delivery": {
    title: "Logistics & Delivery",
    image: "/port-logistics.png",
    icon: <Ship size={40} />,
    brief: "Streamlined shipping and documentation from port to port.",
    content: "Based in close proximity to major South Indian ports like Tuticorin and Chennai, we offer superior logistical advantages. Our team manages the entire supply chain from warehouse to destination port with precision. We handle all customs documentation and freight forwarding to ensure on-time delivery across the globe.",
    highlights: ["Port-Direct Access", "Global Shipping Network", "Precise Documentation"],
    extendedInfo: "Efficiency in logistics saves time and money. Our strategic location and experienced logistics partners allow us to provide competitive freight rates and reliable delivery schedules."
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesDetails[id as keyof typeof servicesDetails];

  if (!service) return <div>Service not found</div>;

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden pt-32 lg:pt-40 pb-20">
      <div className="container">
        {/* Back Link */}
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-primary mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-secondary font-bold mb-8 uppercase tracking-wider">
              {service.brief}
            </p>
            <div className="prose prose-lg text-slate-600 font-medium leading-relaxed max-w-none mb-12">
              <p>{service.content}</p>
              <p className="mt-6">{service.extendedInfo}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.highlights.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <CheckCircle2 className="text-secondary mb-4" size={24} />
                  <p className="text-slate-900 font-bold text-sm leading-tight">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />
            
            <div className="absolute bottom-10 left-10 right-10">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl">
                <p className="text-white font-heading font-bold text-2xl italic leading-tight">
                  "Excellence in every transaction, trust in every partnership."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
