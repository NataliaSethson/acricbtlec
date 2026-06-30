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
  
 
  openGraph: {
    title: "ACRIC | Agencia BTL & Marketing",
    description: "Desarrollamos e implementamos soluciones inteligentes publicitarias y activaciones de alto impacto.",
    url: "https://www.acricbtl.com",
    siteName: "ACRIC",
    locale: "es_EC", 
    type: "website",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "ACRIC BTL & Marketing",
      },
    ],
  },


 icons: {
    icon: [
      {
        url: "/favicon.png?v=2",
        type: "image/png",
      },
    ],
  },
};


export const viewport = {
  themeColor: "#000000", 
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