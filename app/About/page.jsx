'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import AboutPage from '../components/AboutPage';                                                                                                                                                                                                                            

import Footer from '../components/Footer';

export default function page() {
  return (
    <div>
        <Navbar/>
        <AboutHero/>
        <AboutPage/>
        <Footer/>
    </div>
  )
}
