"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WspButton from "@/components/WspButton";

// Componente interno para manejar el carrusel de imágenes automático
function ServiceCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-[#000000]/10" />
      
      {/* Indicadores del carrusel */}
      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 flex gap-1.5 z-10 bg-[#000000]/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-4 bg-[#000000]" : "w-1.5 bg-[#FFFFFF]/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const acricServices = [
    {
      id: "btl",
      title: "ACTIVACIONES DE MARCA",
      description: "Creamos acciones únicas e innovadoras que conectan con los consumidores a través de todos los sentidos.",
      items: ["BTL"],
      images: ["/images/servicio-btl.jpg", "/images/servicio-btl-2.jpg", "/images/servicio-btl-3.jpg"]
    },
    {
      id: "atl",
      title: "ATL",
      description: "Elaboramos el mejor plan de medios tradicionales como prensa, radio y tv para llevar tu marca a un número mayor de personas optimizando tu presupuesto.",
      items: ["Prensa", "Radio", "TV"],
      images: ["/images/servicio-atl.jpg", "/images/servicio-atl-2.jpg"]
    },
    {
      id: "lanzamientos",
      title: "LANZAMIENTOS",
      description: "Desarrollamos eventos estratégicos para sus productos y servicios, ayudando a su marca a conectarse con sus clientes, creamos grandes experiencias publicitarias.",
      items: ["Eventos Estratégicos", "Experiencias Publicitarias"],
      images: ["/images/servicio-lanzamientos.jpg", "/images/servicio-lanzamientos-2.jpg"]
    },
    {
      id: "stands",
      title: "STAND Y FERIAS",
      description: "NOS ENCANTA DESTACAR A NUESTROS CLIENTES EN LAS FERIAS Y CONVENCIONES DONDE PARTICIPAN. STANDS EXCLUSIVOS, ACTIVACIONES CREATIVAS, ÁGILES CON LA MARCA.",
      items: ["Stands Exclusivos", "Backing", "Roll Ups"],
      images: ["/images/servicio-stands.jpg", "/images/servicio-stands-2.jpg", "/images/servicio-stands-3.jpg"]
    },
    {
      id: "imagen",
      title: "IMAGEN CORPORATIVA",
      description: "Desarrollamos tu identidad de marca:",
      items: [
        "Logotipo - Manual De Marca",
        "Identidad de Marca",
        "Arquitectura de marca",
        "Logo",
        "Estilo visual",
        "Paleta de colores"
      ],
      images: ["/images/servicio-imagen.jpg", "/images/servicio-imagen-2.jpg"]
    },
    {
      id: "diseno",
      title: "DISEÑO GRÁFICO CORPORATIVO",
      description: "Soluciones de diseño estructuradas por unidades clave:",
      items: [
        "DISEÑO: Papelería, Brochure, Folletos, Merchandising",
        "EDITORIAL: Reportes corporativos, Reportes de sustentabilidad, Memorias corporativas, Revistas, Libros",
        "PACKAGING: Diseño de envases, Etiquetas, Diseño industrial"
      ],
      images: ["/images/servicio-diseno.jpg", "/images/servicio-diseno-2.jpg"]
    },
    {
      id: "articulos",
      title: "ARTÍCULOS PROMOCIONALES",
      description: "TU MARCA EN TODOS LADOS. Deja que la gente hable de ti mostrándote al mundo con souvenirs publicitarios.",
      items: ["Souvenirs Publicitarios"],
      images: ["/images/servicio-promocionales.jpg", "/images/servicio-promocionales-2.jpg"]
    },
    {
      id: "marketing",
      title: "MARKETING DIGITAL",
      description: "Nuestro servicio se enfoca en lograr sus objetivos más ambiciosos, englobando su marketing digital de punta a punta, utilizando técnicas y herramientas avanzadas de marketing y analítica digital que permitirán sacar el máximo provecho a tu inversión.",
      items: ["REDES SOCIALES", "GOOGLE ADS", "PÁGINAS WEB", "CAMPAÑAS DIGITALES"],
      images: ["/images/servicio-marketing.jpg", "/images/servicio-marketing-2.jpg"]
    },
    {
      id: "produccion",
      title: "PRODUCCIÓN AUDIOVISUAL",
      description: "Producción de contenidos visuales de alto impacto.",
      items: ["FOTOGRAFÍA", "VIDEOS PARA REDES SOCIALES", "VIDEOS PARA COMERCIALES", "COBERTURA DE EVENTOS"],
      images: ["/images/servicio-produccion.jpg", "/images/servicio-produccion-2.jpg"]
    },
    {
      id: "material-pop",
      title: "MATERIAL POP",
      description: "IMPRESIÓN DE: COLGANTES, DANGLERS, STOPPERS, BANNERS, ENTRE OTROS.",
      items: ["OFFSET"],
      images: ["/images/servicio-pop.jpg", "/images/servicio-pop-2.jpg"]
    },
    {
      id: "inflables",
      title: "INFLABLES CORPORATIVOS",
      description: "Estructuras a gran escala para generar el efecto de marca deseado en exteriores e interiores públicos.",
      items: ["Efecto de Marca"],
      images: ["/images/servicio-inflables.jpg"]
    }
  ];

  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
  };

  return (
    <div className="bg-[#FFFFFF] text-[#000000] min-h-screen font-sans antialiased pt-20 overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section id="inicio" className="min-h-[85vh] flex flex-col justify-center px-6 max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl space-y-6 relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#A6CE39]/15 border border-[#A6CE39]/50 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-[#000000]">
            #TUSIDEASENMARCHA
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-[6.5rem] font-black tracking-tighter leading-[0.95] md:leading-[0.85] uppercase text-[#000000]">
            ACRIC <br />
            <span className="text-[#A6CE39]">TUS IDEAS EN MARCHA</span>.
          </h1>
          
          <p className="text-[#000000]/75 text-lg md:text-xl max-w-3xl font-light leading-relaxed">
            Somos una empresa que se dedica al desarrollo e implementación de soluciones inteligentes publicitarias, utilizando modelos estratégicos y claros para optimizar los resultados de tu negocio[cite: 1].
          </p>
        </motion.div>
      </section>

      {/* SECCIÓN ¿QUIÉNES SOMOS? */}
      <section id="nosotros" className="py-24 md:py-32 bg-[#000000] text-[#FFFFFF] rounded-t-[2.5rem] md:rounded-t-[4rem] relative z-20 shadow-[0_-15px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideFromLeft}
            className="md:col-span-5"
          >
            <span className="text-[#A6CE39] text-xs font-black uppercase tracking-widest block mb-2">PRESENTACIÓN</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none bg-[#A6CE39] text-[#000000] px-4 py-2 inline-block">
              ¿QUIÉNES SOMOS?
            </h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideFromRight}
            className="md:col-span-7"
          >
            <p className="text-[#FFFFFF]/90 text-lg md:text-2xl font-light leading-relaxed">
              Somos una empresa que se dedica al desarrollo e implementación de soluciones inteligentes publicitarias, que utiliza modelos estratégicos y claros para optimizar los resultados del negocio[cite: 1].
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS - FONDO BLANCO GRAL CON BLOQUES DE TEXTO INTERCALADOS VERDE/NARANJA */}
      <section id="servicios" className="py-24 bg-[#FFFFFF] relative z-30">
        <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#000000]">
            SERVICIOS
          </h2>
        </div>

        <div className="space-y-0 border-t border-gray-100">
          {acricServices.map((service, index) => {
            const isImageLeft = index % 2 === 0;
            
            // Intercalado estricto de colores de fondo de los bloques contenedores
            const isGreenBlock = index % 2 === 0;
            const bgClass = isGreenBlock ? "bg-[#A6CE39]" : "bg-[#FF6B00]";
            
            // Si el bloque es naranja, los textos secundarios en blanco se leen mejor
            const textMutedClass = isGreenBlock ? "text-[#000000]/70" : "text-[#FFFFFF]/90";
            const textTitleClass = isGreenBlock ? "text-[#000000]" : "text-[#FFFFFF]";
            const lineClass = isGreenBlock ? "bg-[#000000]/20" : "bg-[#FFFFFF]/30";

            return (
              <div 
                key={service.id} 
                className="grid grid-cols-1 md:grid-cols-2 min-h-[460px] md:min-h-[540px] items-stretch border-b border-gray-100 overflow-hidden bg-[#FFFFFF]"
              >
                {/* 50% IMAGEN (CARRUSEL AUTOMÁTICO) */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={isImageLeft ? slideFromLeft : slideFromRight}
                  className={`relative min-h-[300px] md:min-h-full bg-gray-50 ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}
                >
                  <ServiceCarousel images={service.images} title={service.title} />
                </motion.div>

                {/* 50% BLOQUE DE TEXTO INTERCALADO (VERDE O NARANJA) */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={isImageLeft ? slideFromRight : slideFromLeft}
                  className={`p-8 sm:p-12 md:p-20 flex flex-col justify-center ${bgClass} ${!isImageLeft ? 'md:order-1' : 'md:order-2'}`}
                >
                  <div className="max-w-xl space-y-4 md:space-y-5">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs md:text-sm font-black ${textTitleClass}`}>
                        / 0{index + 1}
                      </span>
                      <div className={`h-[1px] w-12 ${lineClass}`} />
                    </div>

                    <h3 className={`text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-none ${textTitleClass}`}>
                      {service.title}
                    </h3>
                    
                    <p className={`text-base md:text-lg font-normal leading-relaxed ${textMutedClass}`}>
                      {service.description}
                    </p>

                    <div className="pt-2">
                      <ul className="flex flex-wrap gap-2">
                        {service.items.map((item, idx) => (
                          <li 
                            key={idx} 
                            className={`text-[10px] uppercase font-black tracking-widest px-3.5 py-2 rounded-full border transition-all ${
                              isGreenBlock 
                                ? 'bg-[#000000]/5 border-[#000000]/10 text-[#000000]' 
                                : 'bg-[#FFFFFF]/10 border-[#FFFFFF]/20 text-[#FFFFFF]'
                            }`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </section>

      <Footer />
      <WspButton />
    </div>
  );
}