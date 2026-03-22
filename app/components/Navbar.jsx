'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const menuLinksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        menuLinksRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 0.7, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Dining', href: '#dining' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-parchment/95 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-out-smooth)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex justify-between items-center h-20">
            {/* Wordmark */}
            <a
              href="/"
              className="font-display text-xl tracking-wide"
              style={{
                color: scrolled ? 'var(--ink)' : 'var(--parchment)',
                transition: 'color 0.7s var(--ease-out-smooth)',
              }}
            >
              Inner Harbor
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-body text-[0.75rem] font-medium tracking-[0.15em] uppercase transition-opacity duration-300 hover:opacity-60"
                  style={{
                    color: scrolled ? 'var(--ink)' : 'var(--parchment)',
                    transition: 'color 0.7s var(--ease-out-smooth), opacity 0.3s ease',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="btn-editorial-light text-[0.7rem] py-2.5 px-5"
                style={scrolled ? {
                  color: 'var(--ink)',
                  borderColor: 'var(--ink)',
                } : {}}
              >
                Reserve
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative z-[110] w-8 h-8 flex flex-col justify-center items-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className="block w-6 h-px transition-all duration-500"
                style={{
                  backgroundColor: open || scrolled ? (open ? 'var(--parchment)' : 'var(--ink)') : 'var(--parchment)',
                  transform: open ? 'rotate(45deg) translateY(4px)' : 'none',
                }}
              />
              <span
                className="block w-6 h-px transition-all duration-500"
                style={{
                  backgroundColor: open || scrolled ? (open ? 'var(--parchment)' : 'var(--ink)') : 'var(--parchment)',
                  transform: open ? 'rotate(-45deg) translateY(-4px)' : 'none',
                  opacity: open ? 1 : 1,
                }}
              />
            </button>
          </div>
        </div>

        {/* Subtle bottom line */}
        <div
          className="h-px transition-opacity duration-700"
          style={{
            backgroundColor: scrolled ? 'var(--cream)' : 'rgba(248,245,240,0.15)',
            opacity: scrolled ? 1 : 0.5,
          }}
        />
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${open ? 'active' : ''}`}>
        <nav className="flex flex-col items-center gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              ref={(el) => (menuLinksRef.current[i] = el)}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-12">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="btn-editorial-light"
            ref={(el) => (menuLinksRef.current[navLinks.length] = el)}
          >
            Reserve a Stay
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;