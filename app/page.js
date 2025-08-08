'use client';
import { useEffect, useRef } from 'react';
import { Phone, MapPin, Trees, Waves, Baby, Calendar } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import ActivitiesSection from './components/ActivitiesSection';
import Services from './components/Services';
import AccommodationSection from './components/AccommodationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

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
      
      <main>
        <Navbar onWhatsAppClick={handleWhatsAppContact}/>
        <HeroSection onContactClick={handleWhatsAppContact} />
        <About />
        <ActivitiesSection />
        <Services />
        <AccommodationSection />
        <ContactSection onWhatsAppClick={handleWhatsAppContact} />
        <Footer/>
      </main>

     
    </div>
  );
};

export default Index;
