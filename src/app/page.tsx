'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import ServicesGrid from '@/components/home/ServicesGrid';
import AboutSection from '@/components/home/AboutSection';
import QuoteSection from '@/components/home/QuoteSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header with Direct Contact TopBar & Sticky Corporate Navbar */}
      <Header />
      
      {/* 2. Main Homepage Streamlined Flow */}
      <main className="flex-1">
        {/* Step 1: Hero Banner */}
        <Hero />

        {/* Step 2: Key Business Stats & Performance Track Record */}
        <StatsBar />

        {/* Step 3: Core Capabilities & Services */}
        <ServicesGrid />

        {/* Step 4: Company Profile & Leadership Summary */}
        <AboutSection />

        {/* Step 5: Rate Quote & Inquiry Form */}
        <QuoteSection />
      </main>

      {/* 3. Corporate Multi-Branch Footer */}
      <Footer />
    </div>
  );
}
