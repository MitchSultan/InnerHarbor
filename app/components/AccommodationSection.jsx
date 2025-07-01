'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Star, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AccommodationSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current?.children,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-blue-900 to-green-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Luxury Lakeside Accommodations
            </h2>
            
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Wake up to breathtaking lake views from our comfortable rooms and suites. 
              Each accommodation is designed to provide the perfect blend of comfort and nature.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <Star className="h-6 w-6 text-yellow-400" />
                <span className="text-lg">Premium lakefront rooms with panoramic views</span>
              </div>
              <div className="flex items-center space-x-4">
                <Users className="h-6 w-6 text-blue-300" />
                <span className="text-lg">Family-friendly suites and couples' retreats</span>
              </div>
              <div className="flex items-center space-x-4">
                <Calendar className="h-6 w-6 text-green-300" />
                <span className="text-lg">Flexible booking options for any season</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=3011&q=80"
                alt="Luxury accommodation interior"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">5-Star Comfort</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
