"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      formErrors.name = "Por favor, ingresá tu nombre o empresa.";
    }
    if (!formData.email.trim()) {
      formErrors.email = "El correo electrónico es requerido.";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Ingresá un formato de correo válido.";
    }
    if (!formData.message.trim()) {
      formErrors.message = "Contanos un poco de qué trata tu proyecto.";
    } else if (formData.message.trim().length < 10) {
      formErrors.message = "El mensaje debe ser un poco más detallado.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // NUEVO ENVÍO  DIRIGIDO A TU PROPIO PHP
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/enviar.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        throw new Error("Error en la respuesta del servidor");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un problema al enviar el mensaje. Intentalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="bg-[#000000] text-[#FFFFFF] py-24 md:py-32 rounded-t-[2.5rem] md:rounded-t-[4rem] relative z-40 shadow-[0_-15px_40px_rgba(0,0,0,0.15)] scroll-mt-20">
      
     

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        
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

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="md:col-span-7 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 p-6 md:p-10 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden"
        >
         
          {submitSuccess && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 bg-[#000000]/95 flex flex-col justify-center items-center text-center p-6 z-50 space-y-4"
            >
              <div className="text-4xl">🚀</div>
              <h4 className="text-xl font-black uppercase tracking-tight text-[#A6CE39]">¡Mensaje enviado con éxito!</h4>
              <p className="text-gray-400 font-light max-w-sm mx-auto text-sm">
                Gracias por escribirnos. Nuestro equipo se va a poner en contacto con vos a la brevedad para poner tus ideas en marcha.
              </p>
              <button 
                type="button"
                onClick={() => setSubmitSuccess(false)}
                className="text-xs uppercase tracking-widest font-black text-white/60 hover:text-[#A6CE39] transition-colors pt-4 underline"
              >
                Enviar otro mensaje
              </button>
            </motion.div>
          )}

         
          <form 
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-[#A6CE39]">Nombre / Empresa</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej. Juan Pérez / Empresa S.A." 
                  className={`w-full bg-[#FFFFFF]/5 border rounded-xl p-4 text-[#FFFFFF] focus:outline-none focus:border-[#A6CE39] transition-colors text-sm ${
                    errors.name ? "border-red-500/50" : "border-[#FFFFFF]/10"
                  }`} 
                />
                {errors.name && <p className="text-[11px] text-red-400 font-medium">{errors.name}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-[#A6CE39]">Correo Electrónico</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ejemplo@correo.com" 
                  className={`w-full bg-[#FFFFFF]/5 border rounded-xl p-4 text-[#FFFFFF] focus:outline-none focus:border-[#A6CE39] transition-colors text-sm ${
                    errors.email ? "border-red-500/50" : "border-[#FFFFFF]/10"
                  }`} 
                />
                {errors.email && <p className="text-[11px] text-red-400 font-medium">{errors.email}</p>}
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-[#A6CE39]">¿De qué trata tu proyecto o activación?</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Contanos brevemente qué ideas querés poner en marcha..." 
                rows={5} 
                className={`w-full bg-[#FFFFFF]/5 border rounded-xl p-4 text-[#FFFFFF] focus:outline-none focus:border-[#A6CE39] transition-colors text-sm resize-none ${
                  errors.message ? "border-red-500/50" : "border-[#FFFFFF]/10"
                }`}
              ></textarea>
              {errors.message && <p className="text-[11px] text-red-400 font-medium">{errors.message}</p>}
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#A6CE39] text-[#000000] font-black uppercase tracking-widest p-4 rounded-xl hover:bg-[#FFFFFF] hover:scale-[1.01] shadow-lg transition-all text-xs disabled:opacity-50 disabled:cursor-not-allowed pt-4 pb-4 mt-2"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje →"}
            </button>
          </form>
        </motion.div>

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