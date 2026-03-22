'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Image: slow scale down reveal
      tl.fromTo(
        imageRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2 }
      );

      // Headline: slide up with fade
      tl.fromTo(
        headlineRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        '-=1.2'
      );

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.7'
      );

      // Scroll indicator
      tl.fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        '-=0.3'
      );

      // Parallax on scroll
      gsap.to(imageRef.current, {
        y: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full h-screen overflow-hidden flex items-end"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src="/images/field.jpg"
          alt="Inner Harbor Resort lakeside panorama"
          className="w-full h-full object-cover"
          style={{ opacity: 0 }}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(26,24,20,0.7) 0%, rgba(26,24,20,0.2) 40%, rgba(26,24,20,0.1) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <h1
            ref={headlineRef}
            className="font-display text-parchment mb-6"
            style={{ opacity: 0, lineHeight: 1.1 }}
          >
            Where stillness
            <br />
            <span className="italic">meets the shore</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-parchment/70 text-lg md:text-xl font-body max-w-md"
            style={{ opacity: 0, lineHeight: 1.6 }}
          >
            A lakeside retreat near Eldoret, where nature&apos;s calm
            and home-cooked warmth come together.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{ opacity: 0 }}
        >
          <span className="font-body text-[0.65rem] tracking-[0.2em] uppercase text-parchment/50">
            Scroll
          </span>
          <div className="scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
