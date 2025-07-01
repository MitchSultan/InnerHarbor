'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Waves, Trees, Baby } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ActivitiesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(sectionRef.current?.querySelector('h2'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(cardsRef.current?.children,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            end: "bottom 15%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activities = [
    {
      icon: Waves,
      title: "Canoeing",
      description: "Paddle through serene waters and explore hidden coves around our pristine lake.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=3648&q=80"
    },
    {
      icon: Trees,
      title: "Outdoor Walks",
      description: "Discover lush green paths that wind through our beautiful lakeside landscape.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=3634&q=80"
    },
    {
      icon: Baby,
      title: "Children's Playground",
      description: "Safe and fun playground equipment for kids to enjoy while parents relax.",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=2742&q=80"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Resort Activities
        </h2>
        
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <activity.icon className="h-8 w-8 mb-2" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
