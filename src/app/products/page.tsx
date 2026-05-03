"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import { useSearchParams } from "next/navigation";

const heroImages: Record<string, string> = {
  default: "/hero-trade.png",
  "food-products": "/agri-hero.png",
  "mining-and-minerals": "/mining-hero.png",
  "petrol-products": "/petrol-hero.png"
};

function ProductContent() {
  const searchParams = useSearchParams();
  const selectedSlug = searchParams.get("category");

  const categories = [
    { name: "All Products", slug: null },
    { name: "Food Products", slug: "food-products" },
    { name: "Mining and Minerals", slug: "mining-and-minerals" },
    { name: "Petrol Products", slug: "petrol-products" },
  ];

  const activeCategory = categories.find(c => c.slug === selectedSlug)?.name || "All Products";
  const currentHeroImage = heroImages[selectedSlug as string] || heroImages.default;

  const displayProducts = selectedSlug 
    ? products.filter(p => p.category.toLowerCase().replace(/\s+/g, '-') === selectedSlug)
    : products;

  const activeCategories = selectedSlug 
    ? [activeCategory]
    : Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden -mt-32 lg:-mt-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentHeroImage}
              alt={activeCategory}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container relative z-10 text-center text-white"
        >
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Product Catalog</span>
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 tracking-tight">
            {activeCategory === "All Products" ? (
              <>Our Premium <span className="text-secondary">Range</span></>
            ) : activeCategory}
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover our curated collection of industrial and agricultural products, sourced directly from global partners with uncompromising quality.
          </p>
        </motion.div>
      </section>

      <div className="container">
        {/* Grouped Products */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSlug || 'all'}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="space-y-20 py-12"
          >
            {activeCategories.map(category => (
              <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary whitespace-nowrap px-4 py-2 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    {category}
                  </h2>
                  <div className="h-px bg-slate-200 w-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-0">
                  {products
                    .filter(p => p.category === category)
                    .map((product) => (
                      <TiltCard key={product.id}>
                        <Link 
                          href={`/products/${product.id}`}
                          className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
                        >
                          <div className="relative h-72 overflow-hidden">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                              <h3 className="text-white font-heading font-black text-2xl leading-tight">
                                {product.name}
                              </h3>
                              <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                                <MoveRight size={20} />
                              </div>
                            </div>
                          </div>
                          <div className="p-8 flex flex-col flex-1">
                            <p className="text-slate-500 font-medium text-sm line-clamp-2 mb-6">
                              {product.description}
                            </p>
                            <div className="mt-auto flex flex-wrap gap-1.5 md:gap-2">
                              {product.origins.map((org, i) => (
                                <span key={i} className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full border border-slate-200">
                                  {org.loc}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Link>
                      </TiltCard>
                    ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 lg:pt-40 overflow-x-hidden pb-20">
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center space-y-4 pt-40">
          <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-500 font-bold animate-pulse">Loading Catalog...</p>
        </div>
      }>
        <ProductContent />
      </Suspense>
    </div>
  );
}
