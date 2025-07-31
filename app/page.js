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

import { useState } from 'react';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Inner Harbor Resort</span>
          </div>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#activities" className="text-gray-700 hover:text-blue-600 transition">Activities</a>
            <a href="#accommodation" className="text-gray-700 hover:text-blue-600 transition">Accommodation</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            <button
              onClick={handleWhatsAppContact}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              <span>Contact Us</span>
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-md text-blue-600 hover:bg-blue-50 focus:outline-none"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden  inset-0 bg-black bg-opacity-0 z-50 flex flex-col">
            <div className=" shadow-lg p-6 flex flex-col space-y-6  top-0 right-0 w-full h-full p-6 bg-white">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="self-end p-2 text-gray-600 hover:text-blue-600"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <a href="#activities" className="text-gray-700 hover:text-blue-600 text-lg" onClick={() => setMobileMenuOpen(false)}>Activities</a>
              <a href="#accommodation" className="text-gray-700 hover:text-blue-600 text-lg" onClick={() => setMobileMenuOpen(false)}>Accommodation</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 text-lg" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <button
                onClick={() => { setMobileMenuOpen(false); handleWhatsAppContact(); }}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-colors duration-300"
              >
                <Phone className="h-4 w-4" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        )}
      </nav>
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
            <span className="text-gray-400">Inner Harbor Resort, Nature's Haven</span>
          </div>
          <p className="text-gray-400">© 2025 Inner Harbor Resort. All rights reserved.<a href='https://mitchel.vercel.app' target='_blank' className="text-gray-400 hover:text-blue-600 transition">Made by Mitch</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
