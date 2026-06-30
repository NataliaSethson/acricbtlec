"use client"; 

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WspButton from '@/components/WspButton';
import ContactSection from '@/components/ContactSection';

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      <main className="flex-grow pt-12 flex flex-col justify-between">
        
        {/* Sección del Formulario */}
        <ContactSection />

       
        <section className="w-full py-14 md:py-20 bg-[#050505] border-t border-neutral-900/40 flex items-center justify-center text-center px-6 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-md flex flex-col items-center justify-center space-y-3"
          >
            
            <span className="text-[#A6CE39] text-[10px] uppercase tracking-[0.25em] font-bold block">
              Nuestras Oficinas
            </span>
            
          <p className="text-base sm:text-lg md:text-xl font-light tracking-wide text-neutral-200">
  Terrasol — Samborondón
</p>
            
           
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 24 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
              className="h-[1px] bg-neutral-800/80 my-0.5"
            ></motion.div>
            
            
          </motion.div>
        </section>
        
      </main>

      <WspButton />
      <Footer />
    </div>
  );
}