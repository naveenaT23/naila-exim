"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const whatsappNumber = "919843197080";
    
    // Format message for WhatsApp
    const message = `*New Inquiry from Naila Exim Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Company:* ${formData.company || 'N/A'}\n\n` +
      `*Requirement Details:* \n${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Set success state and redirect
    setTimeout(() => {
      setStatus("success");
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="contact">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/contact-hero.png"
            alt="Naila Exim Contact"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
        </div>

        <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 text-center"
        >
          <span className="text-secondary font-bold tracking-wider uppercase mb-3 inline-block">Connect With Us</span>
          <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 text-white leading-tight">Let's Build Lasting Ties</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Contact us for sourcing, trade consulting, or bulk export requirements. We value relationships that last generations.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-10"
            >
              <div className="bg-primary p-10 rounded-3xl shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-heading font-black text-3xl mb-8 relative z-10">Headquarters</h3>
                <ul className="space-y-8 relative z-10">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Corporate Office</h4>
                      <p className="text-white/80 font-medium text-sm md:text-base">
                        Naila Exim Pvt. Ltd.<br/>
                        2/1 Harrison Arcade, White House Street<br/>
                        Nagercoil, India 629001
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <Phone className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call / WhatsApp</h4>
                      <a href="tel:+919843197080" className="text-white/80 font-medium block hover:text-white transition-colors">+91 98431 97080</a>
                      <a href="https://wa.me/919843197080" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm font-bold flex items-center gap-1 mt-1 hover:underline">
                        Click to WhatsApp
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <Mail className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Inquiry</h4>
                      <a href="mailto:sales@nailaexim.com" className="text-white/80 font-medium block hover:text-white transition-colors">sales@nailaexim.com</a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-lg h-80 relative bg-slate-100 border border-slate-200">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.1760410656!2d77.42514197477024!3d8.184933791845964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f12655447ad1%3A0xd5c8287bb7eb6b45!2sNaila%20Exim%20OPC%20Private%20Limited!5e0!3m2!1sen!2sin!4v1742969337000!5m2!1sen!2sin" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              id="inquiry-form" 
              className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100 relative"
            >
              <h3 className="font-heading font-black text-2xl md:text-3xl mb-2 text-slate-900">Send an Inquiry</h3>
              <p className="text-slate-500 font-medium mb-8 text-sm md:text-base">Fill out the form below and our team will get back to you shortly.</p>
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 text-green-700 p-8 rounded-2xl flex flex-col items-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <Send className="text-green-600 w-10 h-10" />
                    </div>
                    <h4 className="font-black text-3xl mb-3 font-heading uppercase tracking-tight">Submitted!</h4>
                    <p className="font-bold text-lg max-w-sm">Thank you for reaching out. We have received your inquiry and will contact you shortly.</p>
                    <button 
                      onClick={() => {
                        setStatus("idle");
                        setFormData({ name: "", email: "", company: "", message: "" });
                      }} 
                      className="mt-8 text-sm font-bold bg-white text-green-700 px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                        <input 
                          required 
                          type="text" 
                          id="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" 
                          placeholder="Your Name" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                        <input 
                          required 
                          type="email" 
                          id="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" 
                          placeholder="john@example.com" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-bold text-slate-700 ml-1">Company Name (Optional)</label>
                      <input 
                        type="text" 
                        id="company" 
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" 
                        placeholder="Organization Name" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Requirement Details</label>
                      <textarea 
                        required 
                        id="message" 
                        value={formData.message}
                        onChange={handleChange}
                        rows={5} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none" 
                        placeholder="Please specify your product interest and quantity requirement..."
                      ></textarea>
                    </div>

                    <button 
                      disabled={status === "submitting"}
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/95 text-white font-black text-lg py-5 rounded-xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-70 flex justify-center items-center gap-3 uppercase tracking-wider"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
            
          </div>
        </div>
      </section>
    </>
  );
}
