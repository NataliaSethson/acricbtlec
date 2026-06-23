"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WspButton from "@/components/WspButton";
import BrandsMarquee from "@/components/BrandsMarquee";

function ServiceCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500); // Subí a 4.5s para que dé tiempo a apreciar el video
    
    return () => clearInterval(timer);
  }, [images]);

  // Evaluamos si el archivo actual del carrusel termina en .mp4
  const currentFile = images?.[currentIndex] || "";
  const isVideo = currentFile.endsWith(".mp4");

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-900">
      <AnimatePresence mode="popLayout">
        {isVideo ? (
          /* SI EL SLIDE ACTUAL ES UN VIDEO */
          <motion.video
            key={currentIndex}
            src={currentFile}
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          /* SI EL SLIDE ACTUAL ES UNA IMAGEN */
          currentFile && (
            <motion.img
              key={currentIndex}
              src={currentFile}
              alt={`${title} - ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )
        )}
      </AnimatePresence>
      
      {/* Capa de contraste estética */}
      <div className="absolute inset-0 bg-[#000000]/10" />
      
      {/* Puntitos indicadores */}
      {images && images.length > 1 && (
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
      description: "Creamos acciones únicas e innovadoras que conectan con los consumidores a través de todos los sentidos. Desarrollamos estrategias BTL integrales que transforman los puntos de venta y los espacios públicos en escenarios experienciales, logrando un vínculo emocional profundo, alta recordación de marca y un impacto directo en los objetivos comerciales de tu negocio.",
      items: ["BTL", "Activaciones Sensoriales", "Marketing Experiencial", "Acciones en Punto de Venta"],
      images: ["/activaciones-marca/activaciones1.jpeg", "/activaciones-marca/activaciones2.jpeg", "/activaciones-marca/activaciones3.jpeg","/activaciones-marca/activaciones4.jpeg","/activaciones-marca/activaciones5.jpeg"]
    },
    {
      id: "stands",
      title: "STAND Y FERIAS",
      description: "Nos apasiona destacar la presencia de nuestros clientes en las exposiciones y convenciones más importantes. Diseñamos, producimos e implementamos soluciones arquitectónicas comerciales llave en mano, garantizando un montaje impecable, estructuras ágiles con la identidad de tu negocio e infraestructura imponente que convierte tu espacio en el principal foco de atención de cualquier evento.",
      items: ["Stands Exclusivos", "Backing", "Roll Ups", "Arquitectura Comercial", "Montaje Llave en Mano"],
      images: ["/stand-corporativos/stand.jpeg", "/stand-corporativos/stand2.jpeg", "/stand-corporativos/stand3.jpeg","/stand-corporativos/stand4.jpeg","/stand-corporativos/stand5.jpeg","/stand-corporativos/stand6.jpeg","/stand-corporativos/stand7.jpeg","/stand-corporativos/stand8.jpeg"]
    },
    {
      id: "articulos",
      title: "ARTÍCULOS PROMOCIONALES",
      description: "Tu marca en todos lados. Impulsamos el alcance de tu negocio mostrándote al mundo a través de souvenirs publicitarios estratégicos. Producimos una línea de merchandising corporativo y artículos promocionales de alta calidad, diseñados específicamente para complementar tus eventos físicos, fidelizar clientes de forma masiva y potenciar tus campañas de branding institucional.",
      items: ["Souvenirs Publicitarios", "Merchandising Corporativo", "Regalos Empresariales", "Material Promocional Premium"],
      images: ["/articulos-promocionales/promocionales.jpeg", "/articulos-promocionales/promocionales1.jpeg","/articulos-promocionales/promocionales2.jpeg","/articulos-promocionales/promocionales3.jpeg","/articulos-promocionales/promocionales4.jpeg","/articulos-promocionales/promocionales5.jpeg","/articulos-promocionales/promocionales7.jpeg"]
    },
    {
      id: "atl",
      title: "atl",
      description: "Elaboramos el mejor plan de medios tradicionales como prensa, radio y tv para llevar tu marca a un número mayor de personas optimizando tu presupuesto.",
      items: ["Prensa", "Radio", "TV"],
      images: ["/atl/atl1.jpeg", "/atl/atl2.jpg"]
    },
    {
      id: "lanzamientos",
      title: "lanzamientos",
      description: "Desarrollamos eventos estratégicos para sus productos y servicios, ayudando a su marca a conectarse con sus clientes, creamos grandes experiencias publicitarias.",
      items: ["Eventos Estratégicos", "Experiencias Publicitarias"],
      images: ["/lanzamientos/lanzamientos1.jpeg", "/lanzamientos/lanzamientos2.jpeg","/lanzamientos/lanzamientos3.jpeg","/lanzamientos/lanzamientos4.jpeg"]
    },
{
      id: "branding-corporativo",
      title: "BRANDING E IDENTIDAD CORPORATIVA",
      description: "Desarrollamos tu identidad corporativa mediante un sistema de diseño estructurado por unidades clave, optimizando la comunicación visual de tu negocio en proyectos editoriales, comerciales y de packaging.",
      items: [
        "Identidad: Logotipo y Manual de Marca", 
        "Estilo Visual y Paleta de Colores",
        "Diseño: Papelería, Brochure y Folletos", 
        "Editorial: Reportes y Memorias Corporativas", 
        "Packaging: Envases, Etiquetas y Diseño Industrial"
      ],
      images: [
        "/imagen-corporativa/imgcorpo1.png", 
        "/imagen-corporativa/imgcorpo2.jpeg",
        "/imagen-corporativa/imgcorpo3.webp"
      ]
    },
    {
      id: "marketing",
      title: "marketing digital",
      description: "Nuestro servicio se enfoca en lograr sus objetivos más ambiciosos, englobando su marketing digital de punta a punta, utilizando técnicas y herramientas avanzadas de marketing y analítica digital que permitirán sacar el máximo provecho a tu inversión.",
      items: ["REDES SOCIALES", "GOOGLE ADS", "PÁGINAS WEB", "CAMPAÑAS DIGITALES"],
      images: ["/marketing-digital/marketing1.avif","/marketing-digital/marketing2.mp4"],
    },
    {
      id: "produccion",
      title: "producción audiovisual",
      description: "Producción de contenidos visuales de alto impacto.",
      items: ["FOTOGRAFÍA", "VIDEOS PARA REDES SOCIALES", "VIDEOS PARA COMERCIALES", "COBERTURA DE EVENTOS"],
      images: ["/audiovisual/visual1.mp4", "/audiovisual/visual2.jpeg"]
    },
    {
      id: "material-pop",
      title: "material pop",
      description: "Impresión de: colgantes, danglers, stoppers, banners, entre otros.",
      items: ["OFFSET"],
      images: ["/material-pop/pop.jpeg", "/material-pop/pop1.jpeg","/material-pop/pop2.jpeg","/material-pop/pop3.jpeg","/material-pop/pop4.jpeg","material-pop/pop5.jpeg"]
    },
    {
      id: "inflables",
      title: "inflables corporativos",
      description: "Estructuras a gran escala para generar el efecto de marca deseado en exteriores e interiores públicos.",
      items: ["Efecto de Marca"],
      images: ["/inflables-corporativos/inflables.jpeg","/inflables-corporativos/inflables1.jpeg","/inflables-corporativos/inflables2.jpeg","/inflables-corporativos/inflables3.jpeg","/inflables-corporativos/inflables4.jpeg"]
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
    <div className="bg-[#FFFFFF] text-[#000000] min-h-screen font-sans antialiased pt-20 overflow-x-hidden scroll-smooth">
      <Navbar />

{/* HERO SECTION */}
      {/* Se cambió a min-h-screen para que la imagen ocupe todo el fondo inicial y scroll-mt-28 por la nueva altura del navbar */}
      <section id="inicio" className="min-h-screen w-full flex flex-col justify-center px-6 relative scroll-mt-28 overflow-hidden bg-[#FFFFFF]">
        
        {/* IMAGEN DE FONDO ABSOLUTA */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/fondo.jpg" // Reemplazá por la ruta real de tu imagen de fondo
            alt="Fondo ACRIC" 
            className="w-full h-full object-cover"
          />
          {/* Capa de superposición sutil (Overlay) para asegurar el contraste del texto negro */}
          <div className="absolute inset-0 bg-[#FFFFFF]/40 backdrop-blur-[2px]" />
        </div>

        {/* CONTENIDO DEL HERO */}
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#A6CE39]/15 border border-[#A6CE39]/50 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-[#000000]">
              #TUSIDEASENMARCHA
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-[6.5rem] font-black tracking-tighter leading-[0.95] md:leading-[0.85] uppercase text-[#000000]">
              ACRIC <br />
              <span className="text-[#A6CE39]">TUS IDEAS EN MARCHA</span>.
            </h1>
          </motion.div>
        </div>
      </section>

{/* SECCIÓN ¿QUIÉNES SOMOS? */}
      <section id="nosotros" className="py-24 md:py-32 bg-[#000000] text-[#FFFFFF] rounded-t-[2.5rem] md:rounded-t-[4rem] relative z-20 shadow-[0_-15px_40px_rgba(0,0,0,0.05)] scroll-mt-20 block overflow-hidden">
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
              Somos una empresa con más de 14 años de experiencia en el mercado, dedicada al desarrollo e implementación de soluciones inteligentes publicitarias, que utiliza models estratégicos y claros para optimizar los resultados del negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" className="relative z-30 scroll-mt-20">
        {/* BLOQUE DE TÍTULO EXCLUSIVO EN NARANJA PLENO (PEGADO AL BLOQUE NEGRO) */}
{/* BLOQUE DE TÍTULO EN NARANJA PLENO CON TEXTO INFINITO CORRIENDO */}
        <div className="w-full bg-[#FF6B00] py-14 md:py-20 border-b border-gray-100 overflow-hidden relative select-none">
          <motion.div 
            className="flex whitespace-nowrap gap-16 md:gap-24 uppercase font-black tracking-tighter text-5xl sm:text-7xl md:text-8xl text-[#FFFFFF]"
            animate={{ x: [0, "-50%"] }}
            transition={{
              ease: "linear",
              duration: 15, // Bajá este número si querés que corra más rápido
              repeat: Infinity
            }}
          >
            {/* Repetimos el bloque de texto varias veces para garantizar que cubra toda la pantalla al desplazarse */}
            <div className="flex gap-16 md:gap-24 shrink-0">
              <span>SERVICIOS</span>
              <span className="text-[#000000]/20">•</span>
              <span>SERVICIOS</span>
              <span className="text-[#000000]/20">•</span>
              <span>SERVICIOS</span>
              <span className="text-[#000000]/20">•</span>
            </div>
            <div className="flex gap-16 md:gap-24 shrink-0" aria-hidden="true">
              <span>SERVICIOS</span>
              <span className="text-[#000000]/20">•</span>
              <span>SERVICIOS</span>
              <span className="text-[#000000]/20">•</span>
              <span>SERVICIOS</span>
              <span className="text-[#000000]/20">•</span>
            </div>
          </motion.div>
        </div>

        <div className="space-y-0 border-t border-gray-100">
          {acricServices.map((service, index) => {
            const isImageLeft = index % 2 === 0;
            const isGreenBlock = index % 2 === 0;
            const bgClass = isGreenBlock ? "bg-[#A6CE39]" : "bg-[#FF6B00]";
            
            const textMutedClass = isGreenBlock ? "text-[#000000]/70" : "text-[#FFFFFF]/90";
            const textTitleClass = isGreenBlock ? "text-[#000000]" : "text-[#FFFFFF]";
            const lineClass = isGreenBlock ? "bg-[#000000]/20" : "bg-[#FFFFFF]/30";

            return (
              <div 
                key={service.id} 
                id={service.id} // ID EXACTO PARA CADA BLOQUE INDIVIDUAL
                className="grid grid-cols-1 md:grid-cols-2 min-h-[460px] md:min-h-[540px] items-stretch border-b border-gray-100 overflow-hidden bg-[#FFFFFF] scroll-mt-20"
              >
                {/* 50% IMAGEN */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={isImageLeft ? slideFromLeft : slideFromRight}
                  className={`relative min-h-[300px] md:min-h-full bg-gray-50 ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}
                >
                  <ServiceCarousel images={service.images} title={service.title} />
                </motion.div>

                {/* 50% TEXTO */}
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
      <BrandsMarquee />
      <Footer />
      <WspButton />
    </div>
  );
}