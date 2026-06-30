import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroBanner() {
  
  const [currentSlide, setCurrentSlide] = useState(0);

 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

 
  const isSlideVerde = currentSlide === 0;
  const backgroundColor = isSlideVerde ? "bg-[#A6CE39]" : "bg-[#FF6B00]";
  const badgeColor = isSlideVerde ? "bg-[#FF6B00]" : "bg-[#000000]";

  return (
    <section 
      id="inicio" 
      className={`min-h-[55vh] sm:min-h-[60vh] lg:min-h-[560px] xl:min-h-[620px] w-full flex items-center justify-center px-6 sm:px-12 lg:px-20 relative scroll-mt-28 overflow-hidden transition-colors duration-700 ease-in-out ${backgroundColor}`}
    >
     
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none opacity-[0.04] w-full h-full overflow-hidden z-0 py-4 font-black uppercase tracking-tighter text-black leading-none">
        <div className="text-[12vw] whitespace-nowrap flex gap-8 -translate-x-10"><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span></div>
        <div className="text-[12vw] whitespace-nowrap flex gap-8 translate-x-20"><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span></div>
        <div className="text-[12vw] whitespace-nowrap flex gap-8 -translate-x-5"><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span></div>
        <div className="text-[12vw] whitespace-nowrap flex gap-8 translate-x-10"><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span></div>
        <div className="text-[12vw] whitespace-nowrap flex gap-8 -translate-x-20"><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span></div>
      </div>

      {/* Contenedor principal */}
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

      </div>
    </section>
  );
}
