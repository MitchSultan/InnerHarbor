'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import ActivitiesSection from './components/ActivitiesSection';
import DiningSection from './components/DiningSection';
import AccommodationSection from './components/AccommodationSection';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power2.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hello! I'd like to inquire about reservations at Inner Harbor Resort."
    );
    window.open(`https://wa.me/254758672380?text=${message}`, '_blank');
  };

  return (
    <div ref={containerRef} style={{ opacity: 0 }}>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <ActivitiesSection />
        <DiningSection />
        <AccommodationSection />
        <Services />
        <ContactSection onWhatsAppClick={handleWhatsAppContact} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
