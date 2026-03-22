'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const proximityData = [
  { place: 'Eldoret City Center', distance: '20 min', detail: 'Shopping, nightlife & markets' },
  { place: 'Rupa Mall', distance: '30 min', detail: 'Premium shopping & dining' },
  { place: 'Eldoret International Airport', distance: '45 min', detail: 'Domestic & international flights' },
  { place: 'Iten (Home of Champions)', distance: '1 hr', detail: 'High-altitude training & views' },
  { place: 'Kerio Valley', distance: '1.5 hrs', detail: 'Dramatic landscapes & adventure' },
];

const Services = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = contentRef.current?.children;
      if (els) {
        gsap.fromTo(
          els,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      if (numberRef.current) {
        gsap.fromTo(
          numberRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: numberRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left: Text */}
          <div className="lg:col-span-7" ref={contentRef}>
            <div className="divider-line mb-8" style={{ backgroundColor: 'rgba(26,24,20,0.1)' }} />
            <span className="label-caps block mb-4">The Surroundings</span>
            <h2 className="mb-6">
              Connected to
              <br />
              <span className="italic" style={{ color: 'var(--moss)' }}>everything that matters</span>
            </h2>
            <p className="mb-12" style={{ color: 'var(--stone)', maxWidth: '480px' }}>
              Nestled in the highlands near Eldoret, Inner Harbor sits at the crossroads
              of natural beauty and modern convenience. Everything you need is within reach.
            </p>

            {/* Proximity List */}
            <div className="flex flex-col">
              {proximityData.map((item, i) => (
                <div
                  key={item.place}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between py-5 border-b"
                  style={{ borderColor: 'rgba(26,24,20,0.08)' }}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className="font-body text-xs"
                      style={{
                        color: 'var(--copper)',
                        fontVariantNumeric: 'tabular-nums',
                        minWidth: '20px',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-body text-sm font-medium" style={{ color: 'var(--ink)' }}>
                      {item.place}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-6 mt-1 sm:mt-0 ml-8 sm:ml-0">
                    <span className="font-body text-xs" style={{ color: 'var(--stone)' }}>
                      {item.detail}
                    </span>
                    <span
                      className="font-display text-sm italic"
                      style={{ color: 'var(--moss)', minWidth: '60px', textAlign: 'right' }}
                    >
                      {item.distance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Large Number Accent */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div ref={numberRef} className="text-center">
              <span
                className="font-display block"
                style={{
                  fontSize: 'clamp(6rem, 12vw, 12rem)',
                  color: 'var(--moss)',
                  opacity: 0.15,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                }}
              >
                45
              </span>
              <span className="label-caps block mt-4" style={{ color: 'var(--stone)' }}>
                Minutes to the Airport
              </span>
              <p className="text-sm mt-4 max-w-xs mx-auto" style={{ color: 'var(--stone)' }}>
                Easily accessible from Eldoret International Airport,
                connecting you to destinations across Kenya and beyond.
              </p>
            </div>

            {/* Small image accent */}
            <div className="mt-12 img-reveal overflow-hidden w-full max-w-sm">
              <img
                src="/images/lake2.jpg"
                alt="Lake view near Inner Harbor"
                className="w-full h-48 md:h-56 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
