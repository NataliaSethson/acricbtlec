"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const acricData = {
    info: {
      email: "andreacruz@acricbtl.com",
      phone: "096 333 0284"
    }
  };

  return (
    <section id="contacto" className="bg-[#000000] text-[#FFFFFF] py-24 md:py-32 rounded-t-[2.5rem] md:rounded-t-[4rem] relative z-40 shadow-[0_-15px_40px_rgba(0,0,0,0.15)] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        
        {/* ==========================================
            ESTRUCTURA EXCLUSIVA PARA PANTALLAS GRANDES (md en adelante)
            ========================================== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="hidden md:block md:col-span-5 space-y-8"
        >
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            ¿HACEMOS <br />ALGO GRANDE <br />
            <span className="bg-[#A6CE39] text-[#000000] px-3 py-1 inline-block mt-2 text-3xl md:text-5xl">JUNTOS?</span>
          </h3>
          <p className="text-gray-400 font-light max-w-sm text-base md:text-lg">
            Ponete en contacto hoy mismo para estructurar una propuesta a la medida de tus objetivos de negocio.
          </p>
          
          <div className="space-y-4 text-sm md:text-base text-gray-300 font-mono pt-6 border-t border-[#FFFFFF]/10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold mb-2">Otras vías de contacto</p>
            
            <a href={`mailto:${acricData.info.email}`} className="flex items-center gap-3 hover:text-[#A6CE39] transition-colors group">
              <span className="text-[#A6CE39] group-hover:scale-110 transition-transform">📩</span>
              {acricData.info.email}
            </a>
            
            <a href={`tel:${acricData.info.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-[#A6CE39] transition-colors group">
              <span className="text-[#A6CE39] group-hover:scale-110 transition-transform">📞</span>
              {acricData.info.phone}
            </a>
          </div>
        </motion.div>

        {/* ==========================================
            TEXTO SUPERIOR EXCLUSIVO MOBILE / TABLET (Centrado)
            ========================================== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="block md:hidden flex flex-col items-center text-center space-y-6"
        >
          <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">
            ¿HACEMOS <br />ALGO GRANDE <br />
            <span className="bg-[#A6CE39] text-[#000000] px-3 py-1 inline-block mt-2 text-3xl">JUNTOS?</span>
          </h3>
          <p className="text-gray-400 font-light max-w-sm text-base">
            Ponete en contacto hoy mismo para estructurar una propuesta a la medida de tus objetivos de negocio.
          </p>
        </motion.div>

        {/* ==========================================
            EL FORMULARIO (Común a ambos, se amolda según la pantalla)
            ========================================== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="md:col-span-7 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 p-6 md:p-10 rounded-[2.5rem] backdrop-blur-sm"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-[#A6CE39]">Nombre / Empresa</label>
                <input 
                  type="text" 
                  placeholder="Ej. Juan Pérez / Empresa S.A." 
                  className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl p-4 text-[#FFFFFF] focus:outline-none focus:border-[#A6CE39] transition-colors text-sm" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-[#A6CE39]">Correo Electrónico</label>
                <input 
                  type="email" 
                  placeholder="ejemplo@correo.com" 
                  className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl p-4 text-[#FFFFFF] focus:outline-none focus:border-[#A6CE39] transition-colors text-sm" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-[#A6CE39]">¿De qué trata tu proyecto o activación?</label>
              <textarea 
                placeholder="Contanos brevemente qué ideas querés poner en marcha..." 
                rows={5} 
                className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl p-4 text-[#FFFFFF] focus:outline-none focus:border-[#A6CE39] transition-colors text-sm resize-none"
              ></textarea>
            </div>
            
            <button 
              type="button" 
              className="w-full bg-[#A6CE39] text-[#000000] font-black uppercase tracking-widest p-4 rounded-xl hover:bg-[#FFFFFF] hover:scale-[1.01] shadow-lg transition-all text-xs pt-4 pb-4 mt-2"
            >
              Enviar Mensaje →
            </button>
          </form>
        </motion.div>

        {/* ==========================================
            TEXTO INFERIOR EXCLUSIVO MOBILE / TABLET (Centrado)
            ========================================== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="block md:hidden flex flex-col items-center text-center space-y-4 text-sm text-gray-300 font-mono pt-6 border-t border-[#FFFFFF]/10 w-full"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold mb-2">Otras vías de contacto</p>
          
          <div className="flex flex-col gap-4 w-full items-center">
            <a href={`mailto:${acricData.info.email}`} className="flex items-center justify-center gap-3 hover:text-[#A6CE39] transition-colors group">
              <span className="text-[#A6CE39] group-hover:scale-110 transition-transform">📩</span>
              {acricData.info.email}
            </a>
            
            <a href={`tel:${acricData.info.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-3 hover:text-[#A6CE39] transition-colors group">
              <span className="text-[#A6CE39] group-hover:scale-110 transition-transform">📞</span>
              {acricData.info.phone}
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}