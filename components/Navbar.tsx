"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-4 shadow-lg" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          VELO<span className="text-accent-primary">STOCK</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#solutions" className="hover:text-white transition-colors">Solutions</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/signIn" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sign In</Link>
          <Link href="/dashboard" className="px-5 py-2.5 bg-accent-primary hover:bg-indigo-500 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/20">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
