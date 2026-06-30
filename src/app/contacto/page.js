import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WspButton from '@/components/WspButton';
import ContactSection from '@/components/ContactSection';

export default function ContactoPage() {
  const embedMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7902613149544!2d-78.4846467!3d-0.1764619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a7f34c2005f%3A0xc3fde9b8e0a3cdff!2sACRIC%20BTL!5e0!3m2!1ses!2sec!4v1710000000000!5m2!1ses!2sec";

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      <main className="flex-grow pt-12 flex flex-col justify-between">
     
        <ContactSection />

       
        <section className="w-full h-96 sm:h-[450px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border-t border-neutral-900">
          <iframe
            src={embedMapsUrl}
            className="w-full h-full object-cover"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de ACRIC BTL"
          ></iframe>
        </section>
      </main>

      <WspButton />
      <Footer />
    </div>
  );
}