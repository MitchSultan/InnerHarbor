'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = ({ onWhatsAppClick }) => {
  const sectionRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ctaRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div ref={ctaRef} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Ready for Your Next Adventure?
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Contact us on WhatsApp to check availability and book your perfect lakeside getaway. 
            Our friendly team is ready to help you plan an unforgettable experience.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">Baharini, Eldoret</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Contact Hours</h3>
              <p className="text-gray-600">24/7 WhatsApp Support</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Phone className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Response Time</h3>
              <p className="text-gray-600">Within 1 hour</p>
            </div>
          </div>
          
          <button
            onClick={onWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3 mx-auto"
          >
            <MessageCircle className="h-6 w-6" />
            <span>WhatsApp Us Now</span>
          </button>
          
          <p className="text-sm text-gray-500 mt-6">
            Click to start a conversation about your accommodation needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
