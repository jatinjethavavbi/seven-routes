'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-theme-blueDark text-white min-h-[500px] sm:min-h-[560px] flex items-center overflow-hidden">
      {/* Background Image with Seven Routes Corporate Deep Navy Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/slider-1.webp')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A44]/90 via-[#1E2A44]/80 to-[#1E2A44]/65" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 z-10 w-full">
        <div className="max-w-2xl space-y-6">
          
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-theme-orange">
            14+ Years of Industry Leadership
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Global Freight &amp; ISO Tank Logistics
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Reliable ocean container shipping, liquid bulk transportation, and direct customs clearance across India and international trade lanes.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#quote"
              className="bg-theme-orange hover:bg-theme-orangeHover text-white font-medium text-sm px-6 py-3 rounded-md transition-colors shadow-sm inline-flex items-center space-x-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 text-white font-medium text-sm px-6 py-3 rounded-md border border-white/25 transition-colors"
            >
              Our Services
            </Link>
          </div>

          <div className="pt-4 border-t border-white/15 text-xs text-slate-300 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>14+ Years Industry Expertise</span>
            <span>•</span>
            <span>Govt. Registered MTO</span>
            <span>•</span>
            <span>Direct Port CHA at JNPT, Mundra &amp; Hazira</span>
          </div>

        </div>
      </div>
    </section>
  );
}
