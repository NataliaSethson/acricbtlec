"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#FFFFFF]/80 backdrop-blur-md z-50 border-b border-gray-100">
      {/* Altura h-28 para dar un margen perfecto arriba y abajo del logo sin achicarlo */}
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        
        {/* LOGO CLICKEABLE CON TAMAÑO MÁS GRANDE Y MARGEN NATURAL */}
        <div className="flex items-center py-2">
          <a href="#inicio" className="transition-transform hover:scale-[1.02] inline-block">
            <Image 
              src="/logo.png" 
              alt="Logo ACRIC" 
              width={200} 
              height={100} 
              className="object-contain" 
              priority 
            />
          </a>
        </div>
        
        {/* NAVEGACIÓN PRINCIPAL CON LINKS DIRECTOS Y EXPUESTOS */}
        <nav className="hidden md:flex space-x-8 lg:space-x-10 text-xs font-black uppercase tracking-widest text-[#000000]/70 relative items-center">
          <a href="#inicio" className="hover:text-[#A6CE39] transition-colors">
            Inicio
          </a>
          <a href="#nosotros" className="hover:text-[#A6CE39] transition-colors">
            Agencia
          </a>
          
          {/* Tus líneas más fuertes expuestas directamente, sin dropdowns */}
          <a href="#btl" className="hover:text-[#A6CE39] transition-colors">
            Activaciones BTL
          </a>
          <a href="#stands" className="hover:text-[#A6CE39] transition-colors">
            Stand y Ferias
          </a>
          <a href="#articulos" className="hover:text-[#A6CE39] transition-colors">
            Promocionales
          </a>

          <a href="#contacto" className="hover:text-[#A6CE39] transition-colors">
            Contacto
          </a>
        </nav>

        {/* BOTÓN COTIZAR */}
        <a 
          href="#contacto" 
          className="bg-[#000000] text-[#FFFFFF] font-black px-6 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-[#A6CE39] hover:text-[#000000] transition-all shadow-sm"
        >
          Cotizar Proyecto
        </a>
      </div>
    </header>
  );
}