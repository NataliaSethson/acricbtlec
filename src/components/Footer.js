"use client";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-[#FFFFFF] pb-12 pt-8 relative z-40 block">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* LÍNEA DIVISORA SUPERIOR ELEGANTE */}
        <div className="w-full h-[1px] bg-[#FFFFFF]/10 mb-8" />
        
        {/* CONTENEDOR DE CRÉDITOS Y REDES */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          
          {/* DERECHOS RESERVADOS ACTUALIZADOS */}
          <div className="flex items-center gap-2 font-light order-2 md:order-1">
            <p>© 2012 — 2026 ACRIC. Todos los derechos reservados.</p>
          </div>

          {/* ENLACES A REDES SOCIALES MINIMALISTAS */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 order-1 md:order-2 font-mono text-[11px] uppercase tracking-wider text-gray-400">
            <a href="https://www.instagram.com/acricbtlec/" target="_blank" rel="noopener noreferrer" className="hover:text-[#A6CE39] transition-colors">
              Instagram
            </a>
            <span className="text-[#FFFFFF]/10">/</span>
            <a href="https://www.linkedin.com/company/acric-btl/" target="_blank" rel="noopener noreferrer" className="hover:text-[#A6CE39] transition-colors">
              LinkedIn
            </a>
            <span className="text-[#FFFFFF]/10">/</span>
            <a href="https://www.facebook.com/profile.php?id=100086748770586" target="_blank" rel="noopener noreferrer" className="hover:text-[#A6CE39] transition-colors">
              Facebook
            </a>
          </div>

          {/* BRANDING INDUSTRIAL TEXTUAL */}
          <div className="font-mono tracking-widest text-[10px] text-[#A6CE39]/70 uppercase text-center md:text-right order-3">
            #TUSIDEASENMARCHA // BTL 
          </div>
          
        </div>
      </div>
    </footer>
  );
}