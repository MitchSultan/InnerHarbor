'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DiningSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      const textElements = textRef.current?.children;
      if (textElements) {
        gsap.fromTo(
          textElements,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="dining" style={{ backgroundColor: 'var(--ink)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Image Side */}
        <div className="relative overflow-hidden" ref={imageRef}>
          <img
            src="/images/IMG_20250624_172854 (1).jpg"
            alt="Fine dining at Inner Harbor Resort"
            className="w-full h-full min-h-[400px] object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, transparent 60%, var(--ink) 100%)',
            }}
          />
        </div>

        {/* Text Side */}
        <div
          className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 lg:py-0"
          ref={textRef}
        >
          <div className="divider-line-dark mb-8" />
          <span className="label-caps block mb-6" style={{ color: 'var(--copper)' }}>
            The Table
          </span>

          <h2 className="mb-8" style={{ color: 'var(--parchment)' }}>
            A taste of home,
            <br />
            <span className="italic" style={{ color: 'var(--copper)' }}>refined</span>
          </h2>

          <p className="mb-6" style={{ color: 'rgba(248,245,240,0.6)', maxWidth: '420px' }}>
            Our kitchen draws from the richness of local tradition — hearty,
            honest flavours prepared with care. Every dish is made from fresh,
            locally sourced ingredients and served with the warmth of a family table.
          </p>

          <p className="mb-10" style={{ color: 'rgba(248,245,240,0.6)', maxWidth: '420px' }}>
            From morning chai to slow-cooked evening meals, dining here is
            not just sustenance — it's part of the experience.
          </p>

          {/* Menu highlights */}
          <div className="flex flex-col gap-4 mb-10" style={{ maxWidth: '380px' }}>
            {[
              { item: 'Farm-fresh breakfast', detail: 'Served lakeside at dawn' },
              { item: 'Traditional Kenyan cuisine', detail: 'Authentic flavours, generous portions' },
              { item: 'Fresh lake fish', detail: 'Caught and prepared daily' },
              { item: 'Evening barbecue', detail: 'Under the open sky' },
            ].map((menu) => (
              <div key={menu.item} className="flex justify-between items-baseline border-b py-3" style={{ borderColor: 'rgba(248,245,240,0.08)' }}>
                <span className="font-body text-sm" style={{ color: 'var(--parchment)' }}>
                  {menu.item}
                </span>
                <span className="font-body text-xs" style={{ color: 'rgba(248,245,240,0.35)' }}>
                  {menu.detail}
                </span>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-editorial-light self-start">
            Inquire About Dining
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
