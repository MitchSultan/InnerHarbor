'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const rooms = [
  { image: '/images/room2.jpg', label: 'Lakefront Suite' },
  { image: '/images/room3.jpg', label: 'Garden Room' },
  { image: '/images/room4.jpg', label: 'Family Suite' },
  { image: '/images/room5.jpg', label: 'Deluxe Room' },
];

const AccommodationSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current?.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
          },
        }
      );

      gridRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            delay: i * 0.12,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="rooms" className="section-padding bg-parchment">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-20">
          <div className="divider-line mb-8" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="label-caps block mb-4">Accommodations</span>
              <h2>
                Rest, as it
                <br />
                <span className="italic" style={{ color: 'var(--moss)' }}>should be</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm" style={{ color: 'var(--stone)' }}>
              Wake to lake views from spacious, thoughtfully appointed rooms. Each suite
              blends comfort with the quiet beauty of our natural surroundings.
            </p>
          </div>
        </div>

        {/* Asymmetric Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Large Left */}
          <div
            className="md:col-span-7 img-reveal group relative overflow-hidden cursor-pointer"
            ref={(el) => (gridRef.current[0] = el)}
          >
            <div style={{ aspectRatio: '4 / 3' }}>
              <img
                src={rooms[0].image}
                alt={rooms[0].label}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(to top, rgba(26,24,20,0.7), transparent)' }}
            >
              <span className="font-display text-lg text-parchment">{rooms[0].label}</span>
            </div>
          </div>

          {/* Right Column — 2 stacked */}
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-5">
            <div
              className="img-reveal group relative overflow-hidden cursor-pointer flex-1"
              ref={(el) => (gridRef.current[1] = el)}
            >
              <div className="h-full" style={{ minHeight: '200px' }}>
                <img
                  src={rooms[1].image}
                  alt={rooms[1].label}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(to top, rgba(26,24,20,0.7), transparent)' }}
              >
                <span className="font-display text-lg text-parchment">{rooms[1].label}</span>
              </div>
            </div>
            <div
              className="img-reveal group relative overflow-hidden cursor-pointer flex-1"
              ref={(el) => (gridRef.current[2] = el)}
            >
              <div className="h-full" style={{ minHeight: '200px' }}>
                <img
                  src={rooms[2].image}
                  alt={rooms[2].label}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(to top, rgba(26,24,20,0.7), transparent)' }}
              >
                <span className="font-display text-lg text-parchment">{rooms[2].label}</span>
              </div>
            </div>
          </div>

          {/* Bottom row — full width */}
          <div
            className="md:col-span-12 img-reveal group relative overflow-hidden cursor-pointer"
            ref={(el) => (gridRef.current[3] = el)}
          >
            <div style={{ aspectRatio: '21 / 9' }}>
              <img
                src={rooms[3].image}
                alt={rooms[3].label}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(to top, rgba(26,24,20,0.7), transparent)' }}
            >
              <span className="font-display text-lg text-parchment">{rooms[3].label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
