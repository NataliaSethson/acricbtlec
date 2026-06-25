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
    }, 4500);
    
    return () => clearInterval(timer);
  }, [images]);

  const currentFile = images?.[currentIndex] || "";
  const isVideo = currentFile.endsWith(".mp4");

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-900">
      <AnimatePresence mode="popLayout">
        {isVideo ? (
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
      
      <div className="absolute inset-0 bg-[#000000]/10" />
      
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
      title: "STANDS Y FERIAS",
      description: "Nos apasiona destacar la presencia de nuestros clientes en las exposiciones y convenciones más importantes. Diseñamos, producimos e implementamos soluciones arquitectónicas comerciales, garantizando un montaje impecable, estructuras ágiles con la identidad de tu negocio e infraestructura imponente que convierte tu espacio en el principal foco de atención de cualquier evento. ",
      items: ["Stands Exclusivos", "Backing", "Roll Ups", "Arquitectura Comercial", "Montaje Llave en Mano"],
      images: ["/stand-corporativos/stand.jpeg", "/stand-corporativos/stand2.jpeg", "/stand-corporativos/stand3.jpeg","/stand-corporativos/stand4.jpeg","/stand-corporativos/stand5.jpeg","/stand-corporativos/stand6.jpeg","/stand-corporativos/stand7.jpeg","/stand-corporativos/stand8.jpeg"]
    },
    {
      id: "articulos",
      title: "ARTÍCULOS PROMOCIONALES",
      description: "Tu marca en todos lados. Impulsamos el alcance de tu negocio mostrándote al mundo a través de souvenirs publicitarios estratégicos. Producimos una línea de merchandising corporativo y artículos promocionales de alta calidad, diseñados específicamente para complementar tus eventos físicos, fidelizar clientes de forma masiva y potenciar tus campañas de branding institucional",
      items: ["Souvenirs Publicitarios", "Merchandising Corporativo", "Regalos Empresariales", "Material Promocional Premium"],
      images: ["/articulos-promocionales/promocionales.jpeg", "/articulos-promocionales/promocionales1.jpeg","/articulos-promocionales/promocionales2.jpeg","/articulos-promocionales/promocionales3.jpeg","/articulos-promocionales/promocionales4.jpeg","/articulos-promocionales/promocionales5.jpeg","/articulos-promocionales/promocionales7.jpeg","/articulos-promocionales/promocionales8.jpeg"]
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
      description: "Diseñamos y gestionamos contenido estratégico para redes sociales, creando publicaciones, reels y campañas que conectan con tu audiencia, fortalecen la imagen de tu marca y generan mayor interacción. ",
      items: ["REDES SOCIALES", "PAUTA DIGITAL", "ESTRATEGIA DE CONTENIDO", "ANÁLISIS DE RESULTADOS"],
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
    },
        {
      id: "atl",
      title: "atl",
      description: "Desarrollamos estrategias de medios tradicionales como prensa, radio y televisión, diseñadas para ampliar el alcance de tu marca, conectar con nuevas audiencias y optimizar tu presupuesto publicitario. ",
      items: ["Prensa", "Radio", "TV"],
      images: ["/atl/atl1.jpeg", "/atl/atl2.jpg"]
    },
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
      <section id="inicio" className="min-h-screen w-full flex flex-col justify-center px-6 relative scroll-mt-28 overflow-hidden bg-[#FFFFFF]">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/fondo.jpg" 
            alt="Fondo ACRIC" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FFFFFF]/40 backdrop-blur-[2px]" />
        </div>

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
              <span className="text-[#A6CE39]">TUS IDEAS EN MARCHA .</span>
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
            <p className="text-[#FFFFFF]/90 text-lg md:text-2xl font-light leading-relaxed max-w-[500px]">
          Somos una agencia de marketing y publicidad con más de 14 años de experiencia en el mercado, especializada en el desarrollo e implementación de soluciones publicitarias inteligentes.<br></br> Trabajamos con estrategias claras, creativas y efectivas, enfocadas en optimizar los resultados y potenciar el crecimiento de cada negocio.
            </p>
          </motion.div>
        </div>
      </section>

{/* SECCIÓN SERVICIOS */}
<section id="servicios" className="relative z-30 scroll-mt-20">
  <div className="w-full bg-[#FF6B00] py-14 md:py-20 border-b border-gray-100 overflow-hidden relative select-none">
    <motion.div 
      // Eliminamos el text-3xl de acá para controlar los tamaños de forma independiente adentro
      className="flex whitespace-nowrap gap-16 md:gap-24 uppercase font-black tracking-tighter text-[#FFFFFF]"
      animate={{ x: [0, "-50%"] }}
      transition={{
        ease: "linear",
        duration: 15, // Subí a 20s para que al tener más texto se lea cómodo y no pase volando
        repeat: Infinity
      }}
    >
      {/* Grupo 1 */}
      <div className="flex gap-16 md:gap-24 shrink-0">
        {[1, 2, 3].map((_, i) => (
          <span key={i} className="flex flex-col items-center text-center">
            {/* Título Principal */}
            <span className="text-xl sm:text-2xl md:text-3xl">NUESTROS SERVICIOS</span>
            {/* Subtítulo más chiquito, fino y estético */}
            <span className="text-[10px] sm:text-xs font-light tracking-widest text-[#FFFFFF]/80 normal-case mt-1.0 max-w-[250px] whitespace-normal leading-tight">
              Soluciones creativas y estratégicas para impulsar tu marca.
            </span>
          </span>
        ))}
      </div>

      {/* Grupo 2 (Copia idéntica para el loop infinito) */}
      <div className="flex gap-16 md:gap-24 shrink-0" aria-hidden="true">
        {[1, 2, 3].map((_, i) => (
          <span key={i} className="flex flex-col items-center text-center">
            <span className="text-xl sm:text-2xl md:text-3xl">NUESTROS SERVICIOS</span>
            <span className="text-[10px] sm:text-xs font-light tracking-widest text-[#FFFFFF]/80 normal-case mt-1.0 max-w-[250px] whitespace-normal leading-tight">
              Soluciones creativas y estratégicas para impulsar tu marca.
            </span>
          </span>
        ))}
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
                id={service.id} 
                className="grid grid-cols-1 md:grid-cols-2 min-h-[460px] md:min-h-[540px] items-stretch border-b border-gray-100 overflow-hidden bg-[#FFFFFF] scroll-mt-20"
              >
                {/* BLOQUE DE TEXTO: Primero en el HTML. Se mantiene arriba en mobile (grid-cols-1) */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={isImageLeft ? slideFromRight : slideFromLeft}
                  className={`p-8 sm:p-12 md:p-20 flex flex-col justify-center ${bgClass} ${
                    isImageLeft ? "md:order-2" : "md:order-1"
                  }`}
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

<div className="pt-4 md:pt-6">
  {/* Flex con más separación física entre los botones (gap-3) */}
  <ul className="flex flex-wrap gap-3 md:gap-4">
    {service.items.map((item, idx) => (
      <li 
        key={idx} 
        // Agrandé la tipografía (text-xs md:text-sm), sumé paddings premium (px-5 py-2.5) y configuré contrastes plenos directos
        className={`uppercase font-black tracking-wider text-xs md:text-sm px-4 py-2.2 rounded-full shadow-sm transition-all duration-300 hover:scale-105 select-none ${
          isGreenBlock 
            ? 'bg-[#000000] text-[#A6CE39] border border-transparent' // En bloque verde: Botón negro sólido con letras verde flúor (Máximo contraste)
            : 'bg-[#FFFFFF] text-[#FF6B00] border border-transparent' // En bloque naranja: Botón blanco sólido con letras naranjas (Resalta muchísimo)
        }`}
      >
        {item}
      </li>
    ))}
  </ul>
</div>
                  </div>
                </motion.div>

                {/* BLOQUE DE IMAGEN: Segundo en el HTML. Se mantiene abajo en mobile (grid-cols-1) */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={isImageLeft ? slideFromLeft : slideFromRight}
                  className={`relative min-h-[300px] md:min-h-full bg-gray-50 ${
                    isImageLeft ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <ServiceCarousel images={service.images} title={service.title} />
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