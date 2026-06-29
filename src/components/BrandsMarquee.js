"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandsMarquee() {
  // Declaramos el listado exacto con su respectiva extensión real
  const logos = [
    { src: "/empresas/logo1.png", alt: "Logo Empresa 1" },
    { src: "/empresas/logo2.png", alt: "Logo Empresa 2" },
    { src: "/empresas/logo3.svg", alt: "Logo Empresa 3" },
    { src: "/empresas/logo4.png", alt: "Logo Empresa 4" },
    { src: "/empresas/logo5.png", alt: "Logo Empresa 5" },
    { src: "/empresas/logo6.png", alt: "Logo Empresa 6" },
    { src: "/empresas/logo7.jpg", alt: "Logo Empresa 7" },
        { src: "/empresas/logo19.svg", alt: "Logo Empresa 19" },
    { src: "/empresas/logo20.png", alt: "Logo Empresa 20" },
    { src: "/empresas/logo21.svg", alt: "Logo Empresa 21" },
    { src: "/empresas/logo22.png", alt: "Logo Empresa 22" },
    { src: "/empresas/logo23.webp", alt: "Logo Empresa 23" },
    { src: "/empresas/logo24.png", alt: "Logo Empresa 24" },
    { src: "/empresas/logo25.png", alt: "Logo Empresa 25" },
    { src: "/empresas/logo26.jpg", alt: "Logo Empresa 26" },
    { src: "/empresas/logo27.jpg", alt: "Logo Empresa 27" },
    { src: "/empresas/logo8.svg", alt: "Logo Empresa 8" },
    { src: "/empresas/logo9.svg", alt: "Logo Empresa 9" },
    { src: "/empresas/logo10.svg", alt: "Logo Empresa 10" },
      { src: "/empresas/logo41.png", alt: "Logo Empresa 41" },
    { src: "/empresas/logo11.jpg", alt: "Logo Empresa 11" },
    { src: "/empresas/logo12.jpg", alt: "Logo Empresa 12" },
    { src: "/empresas/logo13.svg", alt: "Logo Empresa 13" },
    { src: "/empresas/logo14.jpg", alt: "Logo Empresa 14" },
    { src: "/empresas/logo40.png", alt: "Logo Empresa 40" },
    { src: "/empresas/logo17.jpg", alt: "Logo Empresa 17" },
    { src: "/empresas/logo18.png", alt: "Logo Empresa 18" },
    { src: "/empresas/logo28.jpg", alt: "Logo Empresa 28" },
    { src: "/empresas/logo29.jpeg", alt: "Logo Empresa 29" },
    { src: "/empresas/logo30.png", alt: "Logo Empresa 30" },
    { src: "/empresas/logo31.png", alt: "Logo Empresa 31" },
    { src: "/empresas/logo32.jpg", alt: "Logo Empresa 32" },
    { src: "/empresas/logo33.png", alt: "Logo Empresa 33" },
    { src: "/empresas/logo34.png", alt: "Logo Empresa 34" },
    { src: "/empresas/logo35.png", alt: "Logo Empresa 35" },
    { src: "/empresas/logo36.png", alt: "Logo Empresa 36" },
    { src: "/empresas/logo37.png", alt: "Logo Empresa 37" },
    { src: "/empresas/logo38.jpg", alt: "Logo Empresa 38" },  
    { src: "/empresas/logo39.svg", alt: "Logo Empresa 39" },
    { src: "/empresas/logo40.png", alt: "Logo Empresa 40" },
    { src: "/empresas/logo42.png", alt: "Logo Empresa 42" },
  ];

  // Duplicamos el array para que el scroll infinito de Framer Motion no deje baches visuales
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-24 bg-[#FFFFFF] border-t border-gray-100 overflow-hidden relative z-30">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <span className="text-[#A6CE39] text-xs font-black uppercase tracking-widest block mb-2">
          RESPALDO CORPORATIVO
        </span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#000000]">
          EMPRESAS QUE CONFÍAN EN NOSOTROS
        </h2>
      </div>

      {/* CONTENEDOR DE LA MARQUESINA INFINITA */}
      <div className="relative w-full flex items-center select-none overflow-hidden py-4">
        {/* Degradados sutiles a los costados para dar profundidad premium */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none" />

        {/* Tira animada con Framer Motion */}
        <motion.div
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
          animate={{ x: [0, -2500] }}
          transition={{
            ease: "linear",
            duration: 50, // Un toque más suave para que se aprecien bien
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={`${logo.src}-${idx}`}
              className="flex-shrink-0 w-28 md:w-36 h-16 md:h-20 flex items-center justify-center relative group"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
              className="object-contain max-h-full opacity-100 grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
