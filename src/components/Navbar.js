"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Logo ACRIC" 
            width={120} 
            height={45} 
            className="object-contain" 
            priority 
          />
        </div>
        
        <nav className="hidden md:flex space-x-10 text-xs font-black uppercase tracking-widest text-brand-dark/70">
          <a href="#inicio" className="hover:text-brand-primary transition-colors">Inicio</a>
          <a href="#nosotros" className="hover:text-brand-primary transition-colors">Agencia</a>
          <a href="#servicios" className="hover:text-brand-primary transition-colors">Capacidades</a>
          <a href="#contacto" className="hover:text-brand-primary transition-colors">Contacto</a>
        </nav>

        <a href="#contacto" className="bg-brand-dark text-white font-black px-6 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-brand-accent hover:text-brand-dark transition-all shadow-md">
          Cotizar Proyecto
        </a>
      </div>
    </header>
  );
}