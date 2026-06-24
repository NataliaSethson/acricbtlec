import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// CONFIGURACIÓN DE METADATOS COMPLETA (SEO, Open Graph y Favicons)
export const metadata = {
  title: "ACRIC | Agencia BTL & Marketing",
  description: "Desarrollamos e implementamos soluciones inteligentes publicitarias y activaciones de alto impacto.",
  keywords: ["Agencia BTL", "Marketing", "Activaciones de marca", "Stands", "Ferias", "Publicidad"],
  authors: [{ name: "ACRIC" }],
  
  // Metas para que se vea estético al compartir por WhatsApp, LinkedIn, Facebook (Open Graph)
  openGraph: {
    title: "ACRIC | Agencia BTL & Marketing",
    description: "Desarrollamos e implementamos soluciones inteligentes publicitarias y activaciones de alto impacto.",
    url: "https://www.acricbtl.com", // Cambialo por tu dominio real
    siteName: "ACRIC",
    locale: "es_EC", // Configurado para Ecuador (o es_AR si es Argentina)
    type: "website",
    images: [
      {
        url: "/og-image.png", // Imagen de 1200x630px que se guarda en la carpeta /public
        width: 1200,
        height: 630,
        alt: "ACRIC BTL & Marketing",
      },
    ],
  },

 // Mapeo explícito de Favicons e Iconos
 icons: {
    icon: [
      {
        url: "/favicon.png?v=2",
        type: "image/png",
      },
    ],
  },
};

// Configuración del Viewport por separado (Requerido en versiones recientes de Next.js)
export const viewport = {
  themeColor: "#000000", // El color que toma la barra del navegador en celulares
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text font-sans">
        {children}
      </body>
    </html>
  );
}