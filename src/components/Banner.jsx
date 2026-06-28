import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <section 
      id="inicio" 
      className="min-h-[55vh] sm:min-h-[60vh] lg:min-h-[560px] xl:min-h-[620px] w-full flex items-center justify-center px-6 sm:px-12 lg:px-20 relative scroll-mt-28 overflow-hidden bg-[#A6CE39]"
    >
      {/* TRAMA DE TEXTO REPETITIVO EN TODO EL FONDO */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none opacity-[0.04] w-full h-full overflow-hidden z-0 py-4 font-black uppercase tracking-tighter text-black leading-none">
        <div className="text-[12vw] whitespace-nowrap flex gap-8 -translate-x-10"><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span></div>
        <div className="text-[12vw] whitespace-nowrap flex gap-8 translate-x-20"><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span></div>
        <div className="text-[12vw] whitespace-nowrap flex gap-8 -translate-x-5"><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span></div>
        <div className="text-[12vw] whitespace-nowrap flex gap-8 translate-x-10"><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span></div>
        <div className="text-[12vw] whitespace-nowrap flex gap-8 -translate-x-20"><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span><span>ACRIC</span></div>
      </div>

      {/* Contenedor principal: añadimos pt-32 en lg: para empujar el bloque de contenido hacia abajo */}
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-16 lg:pt-32 pb-0 flex flex-col justify-center h-full">
        
        {/* BLOQUE DE TEXTO */}
        {/* Agregamos 'whileHover' para que reaccione al pasar el mouse */}
        <motion.div 
          whileHover={{ scale: 1.015, x: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full lg:max-w-4xl flex flex-col justify-center space-y-4 sm:space-y-6 text-left z-20 relative pr-12 sm:pr-0 cursor-default"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="self-start inline-flex items-center gap-2 bg-[#FF6B00] px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-[#FFFFFF] shadow-md select-none"
          >
            #TUSIDEASENMARCHA
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] xl:text-[7.0rem] font-black tracking-tighter leading-[0.9] sm:leading-[0.85] uppercase text-[#000000]"
          >
            ACRIC <br />
            <span>
              TUS IDEAS
              <br /> EN MARCHA.
            </span>
          </motion.h1>
        </motion.div>

        {/* BLOQUE DE IMAGEN - LA CHICA CON MEGÁFONO */}
        {/* Agregamos 'whileHover' con una transición suave tipo resorte para elevarla y potenciar su sombra */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 45, delay: 0.2 }}
          whileHover={{ y: -12, scale: 1.02 }}
          className="absolute right-0 bottom-0 lg:right-0 lg:bottom-0 z-10 flex justify-end items-end h-[200px] sm:h-[300px] md:h-[380px] lg:h-[490px] xl:h-[550px] w-[45%] lg:w-[40%] xl:w-[45%] max-w-[480px] pointer-events-auto cursor-pointer"
        >
          <img 
            src="/banner.png" 
            alt="Creatividad ACRIC" 
            className="h-full w-auto object-contain object-bottom select-none filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)] hover:drop-shadow-[0_35px_60px_rgba(0,0,0,0.28)] transition-all duration-300"
          />
        </motion.div>

      </div>
    </section>
  );
}