'use client';
import { useEffect, useRef } from 'react';
import { Phone, MapPin, Trees, Waves, Baby, Calendar } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './components/HeroSection';
import ActivitiesSection from './components/ActivitiesSection';
import AccommodationSection from './components/AccommodationSection';
import ContactSection from './components/ContactSection';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth fade-in animation for the entire page
      gsap.fromTo(containerRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hi! I'd like to inquire about accommodations at Inner Harbor Resort.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Inner Harbor Resort</span>
          </div>
          <button
            onClick={handleWhatsAppContact}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-colors duration-300"
          >
            <Phone className="h-4 w-4" />
            <span>Contact Us</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection onContactClick={handleWhatsAppContact} />
        <ActivitiesSection />
        <AccommodationSection />
        <ContactSection onWhatsAppClick={handleWhatsAppContact} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Waves className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-semibold">Inner Harbor Resort</span>
          </div>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span className="text-gray-400">Lakeside Paradise, Nature's Haven</span>
          </div>
          <p className="text-gray-400">© 2024 Inner Harbor Resort. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
