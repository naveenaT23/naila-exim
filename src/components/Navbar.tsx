"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { 
      name: "Products", 
      href: "/products",
      dropdown: [
        { name: "Food Products", href: "/products?category=food-products" },
        { name: "Mining and Minerals", href: "/products?category=mining-and-minerals" },
        { name: "Petrol Products", href: "/products?category=petrol-products" }
      ]
    },
    { name: "Export", href: "/export" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white shadow-md py-2.5" : "bg-transparent py-4"}`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          {/* Symbol: original teal/gold always; mix-blend removes white bg on dark hero */}
          <Image
            src="/logo-symbol.png"
            alt="Naila Exim"
            width={64}
            height={64}
            className={`object-contain transition-all duration-500 ${isScrolled ? "" : "mix-blend-multiply"}`}
            priority
          />
          {/* Text: white on transparent nav, dark on scrolled white nav */}
          <div className="flex flex-col leading-tight">
            <span className={`font-heading font-bold text-lg tracking-[0.18em] transition-colors duration-500 ${isScrolled ? "text-slate-900" : "text-white"}`}>
              NAILA EXIM
            </span>
            <span className={`text-[11px] italic tracking-wide transition-colors duration-500 ${isScrolled ? "text-slate-500" : "text-white/80"}`}>
              Delivering Trust.
            </span>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            
            return (
              <div 
                key={link.name} 
                className="relative group/nav-item"
                onMouseEnter={() => link.dropdown && setProductsDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setProductsDropdownOpen(false)}
              >
                {link.dropdown ? (
                  <>
                    <div 
                      onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                      className={`relative text-sm font-bold tracking-wide transition-colors hover:text-secondary group/link flex items-center gap-1 cursor-pointer select-none ${isActive ? "text-secondary" : (isScrolled ? "text-primary hover:text-secondary" : "text-slate-200 hover:text-white")}`}
                    >
                      {link.name}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${productsDropdownOpen ? "rotate-180" : ""}`} />
                      <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-secondary origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"}`} />
                    </div>
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56 transition-all duration-300 ${productsDropdownOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"}`}>
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 py-3 overflow-hidden">
                          {link.dropdown.map((sub) => (
                            <Link 
                              key={sub.name} 
                              href={sub.href}
                              className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-secondary transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                  </>
                ) : (
                  <Link 
                    href={link.href} 
                    className={`relative text-sm font-bold tracking-wide transition-colors group/link ${isActive ? "text-secondary" : (isScrolled ? "text-primary hover:text-secondary" : "text-slate-200 hover:text-white")}`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-secondary origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"}`} />
                  </Link>
                )}
              </div>
            );
          })}
          <Link href="/contact" className="bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-black hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 hover:shadow-xl hover:-translate-y-0.5">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className={`md:hidden transition-colors hover:text-secondary ${isScrolled ? "text-slate-800" : "text-white"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 flex flex-col px-6 overflow-hidden transition-all duration-300 origin-top ${mobileMenuOpen ? "max-h-[600px] py-4" : "max-h-0 py-0 opacity-0"}`}>
        {navLinks.map((link) => (
          <div key={link.name} className="flex flex-col">
            <div className="flex items-center justify-between py-3 border-b border-slate-100/50">
              <Link 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-slate-800 font-bold hover:text-secondary transition-colors flex-1 ${pathname === link.href ? "text-secondary" : ""}`}
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    setProductsDropdownOpen(!productsDropdownOpen);
                  }}
                  className="p-3 -mr-2 text-slate-400 hover:text-secondary transition-colors"
                >
                  <ChevronDown size={20} className={`transition-transform duration-300 ${productsDropdownOpen ? "rotate-180" : ""}`} />
                </button>
              )}
            </div>
            {link.dropdown && productsDropdownOpen && (
              <div className="bg-slate-50 px-4 py-2 flex flex-col gap-1 rounded-xl mb-2 mt-1 border border-slate-100/50">
                {link.dropdown.map((sub) => (
                  <Link 
                    key={sub.name} 
                    href={sub.href} 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setProductsDropdownOpen(false);
                    }} 
                    className={`text-slate-600 font-bold py-3 hover:text-secondary transition-colors text-sm border-b border-slate-100/50 last:border-0 ${pathname === sub.href ? "text-secondary" : ""}`}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link 
          href="/contact" 
          onClick={() => setMobileMenuOpen(false)} 
          className="bg-secondary text-white px-5 py-4 rounded-xl text-center font-black mt-6 shadow-lg shadow-secondary/20 uppercase tracking-wider text-sm"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
