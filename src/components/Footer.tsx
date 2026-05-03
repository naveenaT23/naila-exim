import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-8 border-t border-slate-900 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 rounded-bl-full pointer-events-none"></div>

      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2 pr-8">
          <Link href="/" className="group inline-flex mb-8 transition-transform duration-500 hover:scale-105">
            <div className="relative w-44 h-16 md:w-64 md:h-24 bg-white p-2.5 rounded-xl overflow-hidden shadow-lg border border-slate-200/50">
              <Image
                src="/logo.jpg"
                alt="Naila Exim Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <p className="text-slate-400 max-w-md leading-relaxed mb-6 font-medium">
            We specialize in sourcing and trade consulting for European and Asian markets. Nurturing strong trading partnerships between farming partners in India and clients across the globe.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-heading font-bold text-lg mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-3 font-medium text-slate-400">
            <li><Link href="/about" className="hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-200">About Us</Link></li>
            <li><Link href="/products" className="hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-200">Our Products</Link></li>
            <li><Link href="/export" className="hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-200">Export & Trade</Link></li>
            <li><Link href="/contact" className="hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-200">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-heading font-bold text-lg mb-6">Corporate Office</h4>
          <ul className="flex flex-col gap-5 text-slate-400 font-medium">
            <li className="flex items-start gap-3">
              <MapPin size={22} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm">
                Naila Exim Pvt. Ltd.<br/>
                2/1 Harrison Arcade, White House Street<br/>
                Nagercoil, India 629001
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-secondary shrink-0" />
              <div className="text-sm">
                <p>Mob: +91 98431 97080</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-secondary shrink-0" />
              <a href="mailto:sales@nailaexim.com" className="text-sm hover:text-white transition-colors">sales@nailaexim.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container relative z-10 pt-8 border-t border-slate-800/50 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4 font-medium">
        <p>© {new Date().getFullYear()} Naila Exim Pvt Ltd. All rights reserved.</p>
        <div className="flex gap-6 items-center">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <a 
            href="https://github.com/naveenaT23/naila-exim" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors flex items-center gap-2"
            aria-label="View on GitHub"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
