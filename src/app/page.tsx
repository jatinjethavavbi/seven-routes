'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import AboutSection from '@/components/home/AboutSection';
import QuoteSection from '@/components/home/QuoteSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Direct Contact TopBar & Sticky Corporate Navbar */}
      <Header />
      
      {/* 2. Main Homepage Streamlined Flow */}
      <main className="flex-1">
        {/* Step 1: Clean Vessel Slider with Direct Action Buttons */}
        <Hero />

        {/* Step 2: Core Capabilities ("Our services make your work more productive") */}
        <ServicesGrid />

        {/* Step 3: Company Profile ("Who We Are" - 18 Years Journey) */}
        <AboutSection />

        {/* Step 4: Simple 10-Field Single Card Quote Form */}
        <QuoteSection />
      </main>

      {/* 3. Corporate Multi-Branch Footer */}
      <Footer />
    </div>
  );
}
