'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MapPin, Star } from 'lucide-react';

const HeroSection = ({ onContactClick }) => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(imageRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
      )
      .fromTo(textRef.current?.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" },
        "-=1"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className=" bg-amber-300 h-screen flex items-center justify-center overflow-hidden bg-[url('/images/bn.jpeg')] bg-cover bg-center relative">
      {/* Background Image */}
      
      
      {/* Content */}
      <div ref={textRef} className="relative z-10 text-center text-black px-6 max-w-4xl mx-auto bgimage-[url('/images/bn.jpeg')]">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Inner Harbor Resort
        </h1>
        <img></img>
        <p className="text-xl md:text-2xl mb-4 text-black">
          Discover tranquility by the lakeside
        </p>
        <div className="flex items-center justify-center space-x-2 mb-8">
          <MapPin className="h-5 w-5 text-blue-300" />
          <span className="text-lg text-black">Nestled beside crystal-clear waters</span>
        </div>
        <div className="flex items-center justify-center space-x-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-black">Premium Lake Resort Experience</span>
        </div>
        <button
          onClick={onContactClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Book Your Stay
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
