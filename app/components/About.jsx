'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
          duration: 1.4,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      // Text elements stagger
      const textElements = textRef.current?.children;
      if (textElements) {
        gsap.fromTo(
          textElements,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
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
    <section ref={sectionRef} id="about" className="section-padding bg-parchment">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Label */}
        <div className="mb-16 md:mb-24">
          <div className="divider-line mb-8" />
          <span className="label-caps">Our Story</span>
        </div>

        {/* Two-column asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Image — 7 cols */}
          <div className="lg:col-span-7 img-reveal" ref={imageRef}>
            <img
              src="/images/face.jpg"
              alt="Inner Harbor Resort grounds and lakeside view"
              className="w-full h-[400px] md:h-[550px] lg:h-[650px] object-cover"
            />
          </div>

          {/* Text — 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-center" ref={textRef}>
            <h2 className="mb-8">
              A family retreat,
              <br />
              <span className="italic" style={{ color: 'var(--copper)' }}>
                rooted in nature
              </span>
            </h2>

            <p className="mb-6">
              Tucked along the tranquil waters near Eldoret, Inner Harbor Resort
              is a family-owned sanctuary where the rhythm of the lake sets
              the pace. Our doors opened with a simple belief: that rest should
              feel effortless, and every meal should taste like home.
            </p>

            <p className="mb-8">
              Here, mornings begin with birdsong across the water. Afternoons
              unfold along winding nature paths. And evenings are best spent
              over a slow dinner, prepared with care and served with warmth.
              This is a place for families, for couples, for anyone seeking
              a quieter kind of luxury.
            </p>

            <div className="flex items-center gap-8">
              <div>
                <span className="font-display text-4xl md:text-5xl" style={{ color: 'var(--copper)' }}>
                  ∞
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--stone)', maxWidth: '280px' }}>
                Family-owned and operated — every detail reflects the personal
                touch of a home, not a hotel chain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
