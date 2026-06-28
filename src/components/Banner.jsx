import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroBanner() {
  // Estado para controlar el slide activo (0 o 1)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Efecto para cambiar automáticamente de slide cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Configuraciones dinámicas según el slide activo
  const isSlideVerde = currentSlide === 0;
  const backgroundColor = isSlideVerde ? "bg-[#A6CE39]" : "bg-[#FF6B00]";
  const badgeColor = isSlideVerde ? "bg-[#FF6B00]" : "bg-[#000000]";
  const imageSrc = isSlideVerde ? "/banner.png" : "/banner2.png";

  return (
    <section 
      id="inicio" 
      className={`min-h-[55vh] sm:min-h-[60vh] lg:min-h-[560px] xl:min-h-[620px] w-full flex items-center justify-center px-6 sm:px-12 lg:px-20 relative scroll-mt-28 overflow-hidden transition-colors duration-700 ease-in-out ${backgroundColor}`}
    >
      {/* TRAMA DE TEXTO REPETITIVO EN TODO EL FONDO */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none opacity-[0.04] w-full h-full overflow-hidden z-0 py-4 font-black uppercase tracking-tighter text-black leading-none">
        <div className="text-[12vw] whitespace-nowrap flex gap-8 -translate-x-10"><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span></div>
        <div className="text-[12vw] whitespace-nowrap flex gap-8 translate-x-20"><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span></div>
        <div className="text-[12vw] whitespace-nowrap flex gap-8 -translate-x-5"><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span></div>
        <div className="text-[12vw] whitespace-nowrap flex gap-8 translate-x-10"><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span></div>
        <div className="text-[12vw] whitespace-nowrap flex gap-8 -translate-x-20"><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span></div>
      </div>

      {/* Contenedor principal */}
      {/* CLAVE: Añadimos min-[500px]:py-12 y sm:py-16 para garantizar que en pantallas intermedias el bloque tenga su margen superior e inferior y quede perfectamente centrado */}
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-6 min-[500px]:py-12 sm:py-16 lg:pt-32 lg:pb-0 flex flex-col justify-center h-full">
        
        {/* BLOQUE DE TEXTO */}
        <motion.div 
          whileHover={{ scale: 1.015, x: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl flex flex-col justify-center space-y-3 sm:space-y-6 text-left z-20 relative pr-4 sm:pr-0 cursor-default"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`self-start inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 rounded-full text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-[#FFFFFF] shadow-md select-none transition-colors duration-700 ease-in-out ${badgeColor}`}
          >
            #TUSIDEASENMARCHA
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl min-[500px]:text-[3.2rem] sm:text-[4.2rem] md:text-[6rem] lg:text-[5.5rem] xl:text-[7.0rem] font-black tracking-tighter leading-[0.9] min-[500px]:leading-[0.85] sm:leading-[0.85] uppercase text-[#000000]"
          >
            ACRIC <br />
            <span>
              TUS IDEAS
              <br /> EN MARCHA.
            </span>
          </motion.h1>
        </motion.div>

        {/* BLOQUE DE IMAGEN - LA CHICA CON MEGÁFONO */}
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 45 }}
          whileHover={{ y: -12, scale: 1.02 }}
          className="absolute right-0 min-[500px]:right-[2%] sm:right-[5%] md:right-0 bottom-0 lg:right-0 lg:bottom-0 z-10 flex justify-end items-end h-[220px] min-[500px]:h-[340px] sm:h-[400px] md:h-[380px] lg:h-[490px] xl:h-[550px] w-[45%] min-[500px]:w-[48%] sm:w-[48%] md:w-[45%] lg:w-[40%] xl:w-[45%] max-w-[480px] pointer-events-auto cursor-pointer"
        >
          <img 
            src={imageSrc} 
            alt="Creatividad ACRIC" 
            className="h-full w-auto object-contain object-bottom select-none filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)] hover:drop-shadow-[0_35px_60px_rgba(0,0,0,0.28)] transition-all duration-300"
          />
        </motion.div>

      </div>
    </section>
  );
}