"use client";

import { motion } from "framer-motion";

export default function WspButton() {
  // Número oficial de Ecuador configurado con el prefijo correcto
  const phoneNumber = "593963330284"; 
  const message = "Hola ACRIC, vi la web y quería consultar por una cotización.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  const floatingAnimation = {
    initial: { opacity: 0, scale: 0.8, y: 0 },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: [0, -10, 0],
      transition: {
        opacity: { delay: 1, duration: 0.5 },
        scale: { delay: 1, duration: 0.5 },
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <motion.div
      variants={floatingAnimation}
      initial="initial"
      animate="animate"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:bg-white hover:text-[#25D366] hover:scale-110 transition-all duration-300 group"
      >
        <svg
          className="w-7 h-7 fill-current transition-transform group-hover:scale-105"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.595-1.013-5.035-2.856-6.88C16.635 2.14 14.199 1.123 11.6 1.123c-5.443 0-9.867 4.371-9.87 9.732 0 1.637.456 3.236 1.32 4.654L2.095 21.82l6.552-1.666zM17.51 15.5c-.3-.15-1.776-.875-2.05-.975-.274-.1-.474-.15-.674.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.025-.512-1.73-.815-2.415-1.393-.453-.38-.79-.844-1.02-1.352-.175-.3-.018-.463.13-.61.134-.132.3-.349.45-.524.045-.053.088-.107.129-.16.07-.15.1-.25.15-.425.05-.175.025-.325-.012-.4-.075-.15-.675-1.625-.925-2.225-.244-.588-.492-.51-.675-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 1.025-.275.95-1.05 2.375-1.05 2.454 0 .079.08.158.12.217.432.658 1.05 1.258 1.8 1.83 1.037.79 2.13 1.3 3.33 1.66.4.12.8.15 1.13.1.36-.053.94-.384 1.07-.738.13-.354.13-.658.09-.722-.04-.064-.15-.1-.45-.25z" />
        </svg>
      </a>
    </motion.div>
  );
}