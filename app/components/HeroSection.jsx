'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MapPin, Star } from 'lucide-react';

const HeroSection = ({ onContactClick }) => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(imageRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
      )
      .fromTo(textRef.current?.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" },
        "-=1"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    
    <div className="carousel w-full h-screen" ref={heroRef}>
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="/images/epic.jpg"
      className="w-full contain" />
      <div className="flex flex-col justify-end absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 bg-white-50">
        <h1 className="text-4xl text-black font-bold ">
          Welcome to Inner Harbor Resort  </h1>
          <p className='text-2xl text-black  '>Beautiful scenery all round. Join us and enjoy the real nature </p>
          <button className=' w-32 h-12 bg-black text-amber-50'>Visit Today</button>
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full ">
    <img
      src="/images/canoe.jpg"
      className="w-full contain" />
      <div className="flex flex-col justify-end absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 bg-white-50">
        <h1 className="text-4xl text-black font-bold ">
          Fun Activities for all Ages  </h1>
          <p className='text-2xl text-black  '>Beautiful scenery all round. Join us and enjoy the real nature </p>
          <button className=' w-32 h-12 bg-black text-amber-50'>Bring Kids</button>
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="/images/room2.jpg"
      className="w-full contain" />
      <div className="flex flex-col justify-end absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 bg-white-50">
        <h1 className="text-4xl text-black font-bold ">
          Quality Accommodations and Living  </h1>
          <p className='text-2xl text-black  '>Beautiful scenery all round. Join us and enjoy the real nature </p>
          <button className=' w-32 h-12 bg-black text-amber-50'>Get a Room</button>
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="/images/wedding.jpg"
      className="w-full contain" />
     <div className="flex flex-col justify-end absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 bg-white-50">
        <h1 className="text-2xl md:text-4xl  text-amber-50 font-bold ">
          Hold your Events here  </h1>
          <p className='text-xl md:text-2xl text-black  '>Beautiful scenery all round. Join us and enjoy the real nature </p>
          <button className=' w-32 h-12 bg-black text-amber-50'>Hold Event</button>
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  );
};

export default HeroSection;
