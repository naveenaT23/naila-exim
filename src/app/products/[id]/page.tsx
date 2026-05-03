import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';
import { notFound } from "next/navigation";
import { FileText, ArrowLeft, MoveRight } from "lucide-react";
import { products } from "@/data/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return {
      title: "Product Not Found | Naila Exim",
    };
  }

  return {
    title: `${product.name} | Global Export Quality | Naila Exim`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetail({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 lg:pt-40 pb-20 overflow-x-hidden">
      <div className="container px-4">
        
        <div className="max-w-6xl mx-auto">
          {/* Back Link */}
          <Link 
            href="/products"
            className="group inline-flex items-center gap-3 text-primary font-bold mb-12 hover:text-secondary transition-colors"
            aria-label="Back to all products"
          >
            <div className="w-10 h-10 rounded-full border-2 border-primary/10 flex items-center justify-center group-hover:border-secondary transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span>Back to All Products</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Product Image & Description */}
            <div className="space-y-12">
              <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-heading font-black text-primary tracking-tight">
                  {product.name}
                </h1>
                <p className="text-xl text-slate-600 font-medium leading-relaxed">
                  {product.description}
                </p>
                
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
                    <span className="w-2 h-6 bg-secondary rounded-full inline-block" />
                    Available Origins
                  </h3>
                  <div className="space-y-4">
                    {product.origins.map((org, i) => (
                      <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                        <span className="font-bold text-slate-500 uppercase tracking-widest text-[10px]">{org.loc}</span>
                        <span className="text-slate-800 font-bold text-sm md:text-base text-right ml-4">{org.types}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Detailed Specs */}
            <div className="space-y-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-black text-2xl text-primary uppercase">Specifications</h3>
                  <p className="text-slate-500 font-bold text-xs tracking-widest uppercase">Certified Quality Standards</p>
                </div>
              </div>

              <div className="space-y-8">
                {product.specs.map((spec, i) => (
                  <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
                    <div className="bg-primary/5 px-8 py-5 border-b border-slate-100">
                      <h4 className="font-heading font-bold text-primary text-xl">{spec.type}</h4>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{spec.sub}</p>
                    </div>
                    <div className="p-8">
                      <div className="grid grid-cols-1 gap-y-4">
                        {Object.entries(spec.details).map(([key, val], j) => (
                          <div key={j} className="flex items-center justify-between border-b border-slate-50 last:border-0 pb-3 last:pb-0">
                            <span className="text-slate-500 font-semibold text-sm">{key}</span>
                            <span className="text-slate-900 font-bold text-sm text-right">{val as string}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Inquiry CTA */}
              <div className="bg-primary p-10 rounded-[2.5rem] text-white relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
                <h4 className="text-2xl font-heading font-black mb-4 relative z-10 tracking-tight">Interested in {product.name}?</h4>
                <p className="text-white/70 font-medium mb-8 relative z-10 leading-relaxed">Contact our global sourcing team for bulk pricing or custom quality requirements.</p>
                <a 
                  href={`mailto:sales@nailaexim.com?subject=Enquiry for ${product.name}&body=I would like to inquire about ${product.name}.`}
                  className="relative z-10 inline-flex items-center gap-2 bg-secondary text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-secondary/20 transition-all hover:-translate-y-1"
                >
                  Submit Enquiry <MoveRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
