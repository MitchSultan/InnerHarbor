'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = ({ onWhatsAppClick }) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = contentRef.current?.children;
      if (els) {
        gsap.fromTo(
          els,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 75%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="section-padding bg-parchment">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Large CTA */}
          <div className="lg:col-span-7" ref={contentRef}>
            <div className="divider-line mb-8" />
            <span className="label-caps block mb-6">Get in Touch</span>

            <h2 className="mb-8" style={{ maxWidth: '600px' }}>
              Your next chapter
              <br />
              <span className="italic" style={{ color: 'var(--copper)' }}>
                begins with a message
              </span>
            </h2>

            <p className="mb-10 max-w-lg" style={{ color: 'var(--stone)' }}>
              Whether you&apos;re planning a family getaway, a wedding celebration,
              or simply a few quiet days by the lake — we&apos;d love to hear from you.
              Reach out on WhatsApp for the fastest response.
            </p>

            <button onClick={onWhatsAppClick} className="btn-editorial">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              WhatsApp Us
            </button>
          </div>

          {/* Right: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-10">
              {/* Location */}
              <div>
                <span className="label-caps block mb-3">Location</span>
                <p className="font-display text-xl" style={{ color: 'var(--ink)' }}>
                  Baharini, Eldoret
                </p>
                <p className="text-sm mt-2" style={{ color: 'var(--stone)' }}>
                  Uasin Gishu County, Kenya
                </p>
              </div>

              {/* Phone */}
              <div>
                <span className="label-caps block mb-3">Telephone</span>
                <a
                  href="tel:+254758672380"
                  className="font-display text-xl link-hover"
                >
                  +254 758 672 380
                </a>
              </div>

              {/* Email */}
              <div>
                <span className="label-caps block mb-3">Email</span>
                <a
                  href="mailto:innerharborresort@gmail.com"
                  className="font-display text-lg link-hover"
                >
                  innerharborresort@gmail.com
                </a>
              </div>

              {/* Hours */}
              <div>
                <span className="label-caps block mb-3">Availability</span>
                <p className="text-sm" style={{ color: 'var(--stone)' }}>
                  Reservations: 24/7 via WhatsApp
                </p>
                <p className="text-sm" style={{ color: 'var(--stone)' }}>
                  Check-in from 2:00 PM · Check-out by 11:00 AM
                </p>
              </div>

              {/* Coordinates as design element */}
              <div className="pt-6" style={{ borderTop: '1px solid var(--cream)' }}>
                <span
                  className="font-body text-xs tracking-[0.3em]"
                  style={{ color: 'var(--stone)', opacity: 0.5 }}
                >
                  0.5143° N, 35.2698° E
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
