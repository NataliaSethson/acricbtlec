"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Links para desktop 
  const desktopLinks = [
    { href: "/#btl", label: "Activaciones BTL" },
    { href: "/#stands", label: "Stand y Ferias" },
    { href: "/#articulos", label: "Promocionales" },
    { href: "/contacto", label: "Contacto" },
  ];

  // Links para mobile 
  const mobileLinks = [
    { href: "/#", label: "Inicio" },
    ...desktopLinks
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#FFFFFF]/80 backdrop-blur-md z-50 border-b border-gray-100">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-6 h-24 min-[1101px]:h-28 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center py-2 relative z-50">
          <Link href="/" className="transition-transform hover:scale-[1.02] inline-block">
            <Image 
              src="/logo.svg" 
              alt="Logo ACRIC" 
              width={180} 
              height={90} 
              className="object-contain w-[140px] min-[1101px]:w-[200px]" 
              priority 
            />
          </Link>
        </div>
        
        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden min-[1101px]:flex space-x-8 lg:space-x-10 text-xs font-black uppercase tracking-widest text-[#000000]/70 items-center">
          {desktopLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#A6CE39] transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        
        <div className="flex items-center gap-4 relative z-50">
          {/* BOTÓN COTIZAR DESKTOP */}
          <Link 
            href="/contacto" 
            className="hidden min-[1101px]:inline-block bg-[#000000] text-[#FFFFFF] font-black px-6 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-[#A6CE39] hover:text-[#000000] transition-all shadow-sm"
          >
            Cotizar Proyecto
          </Link>

          {/* BOTÓN HAMBURGUESA */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 min-[1101px]:hidden gap-[5px] focus:outline-none relative z-50"
            aria-label="Toggle Menu"
          >
            <span 
              className={`h-[3px] w-6 bg-[#000000] rounded-full transition-all duration-300 ease-out ${
                isOpen ? "rotate-45 translate-y-[8px]" : ""
              }`} 
            />
            <span 
              className={`h-[3px] w-6 bg-[#000000] rounded-full transition-all duration-300 ease-out ${
                isOpen ? "opacity-0" : ""
              }`} 
            />
            <span 
              className={`h-[3px] w-6 bg-[#000000] rounded-full transition-all duration-300 ease-out ${
                isOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`} 
            />
          </button>
        </div>
      </div>

      {/* ELEMENTOS DEL MENÚ MOBILE LATERAL */}
      <AnimatePresence>
        {isOpen && (
          <>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#000000]/40 backdrop-blur-sm z-30 min-[1101px]:hidden"
            />

            {/* PANEL LATERAL  */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[230px] sm:w-[280px] bg-[#FFFFFF] shadow-2xl z-40 p-6 pt-32 flex flex-col min-[1101px]:hidden"
            >
           
              <div className="flex-1 flex flex-col justify-center -mt-12">
                <nav className="flex flex-col space-y-5 text-center text-xs sm:text-sm font-black uppercase tracking-widest text-[#000000]/80">
                  {mobileLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="hover:text-[#A6CE39] transition-colors border-b border-gray-50 pb-3 block w-full"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Botón inferior */}
              <div className="w-full pb-6 flex justify-center">
                <Link 
                  href="/contacto" 
                  onClick={() => setIsOpen(false)}
                  className="bg-[#000000] text-[#FFFFFF] text-center font-black px-5 py-4 rounded-full text-[10px] sm:text-xs uppercase tracking-widest hover:bg-[#A6CE39] hover:text-[#000000] transition-all w-full block shadow-md"
                >
                  Cotizar Proyecto
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}