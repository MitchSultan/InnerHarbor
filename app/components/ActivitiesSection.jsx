'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'Canoeing',
    description: 'Glide across calm waters at golden hour',
    image: '/images/canoe.jpg',
  },
  {
    title: 'Nature Walks',
    description: 'Wander through lush lakeside trails',
    image: '/images/walk.jpg',
  },
  {
    title: 'Kids\' Playground',
    description: 'Safe adventures for the little ones',
    image: '/images/epic1.jpg',
  },
  {
    title: 'Events & Weddings',
    description: 'Celebrate your moments lakeside',
    image: '/images/wedding.jpg',
  },
  {
    title: 'Lakeside Relaxation',
    description: 'Simply sit, breathe, and be still',
    image: '/images/lake.jpg',
  },
];

const ActivitiesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experiences" className="section-padding" style={{ backgroundColor: 'var(--warm-white)' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20" ref={titleRef}>
          <div className="divider-line mb-8" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="label-caps block mb-4">Experiences</span>
              <h2>
                Days shaped by
                <br />
                <span className="italic" style={{ color: 'var(--moss)' }}>water and wonder</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm" style={{ color: 'var(--stone)' }}>
              Every hour here invites a different kind of discovery — on the water,
              along the trails, or simply watching the light change across the lake.
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div className="experiences-scroll">
          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className="experience-card group relative"
              style={{ width: 'clamp(280px, 35vw, 420px)' }}
            >
              <div className="img-reveal relative overflow-hidden" style={{ aspectRatio: '3 / 4' }}>
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(to top, rgba(26,24,20,0.6) 0%, transparent 50%)',
                  }}
                />
              </div>

              <div className="mt-5">
                <h3 className="font-display text-lg mb-1" style={{ fontWeight: 400 }}>
                  {exp.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--stone)' }}>
                  {exp.description}
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
