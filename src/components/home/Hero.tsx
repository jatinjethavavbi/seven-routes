'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-theme-blueDark text-white min-h-[520px] sm:min-h-[580px] flex items-center overflow-hidden">
      {/* Background Image with Deep Navy Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/slider-1.webp')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#182238]/95 via-[#182238]/85 to-[#182238]/70" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 z-10 w-full">
        <div className="max-w-3xl space-y-6">
          
          <div className="inline-flex items-center space-x-2 bg-theme-orange/20 border border-theme-orange/40 text-theme-orange px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Connecting Businesses. Moving Possibilities.</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Freight Forwarding Expertise. <br className="hidden sm:inline" />
            <span className="text-theme-orange">A Specialised Focus on Chemical Exports.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
            A professionally managed logistics company built on experienced leadership, an established operating team, and a proven business track record. Delivering reliable ocean, air, and multimodal solutions worldwide.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#quote"
              className="bg-theme-orange hover:bg-theme-orangeHover text-white font-medium text-sm px-6 py-3 rounded-md transition-colors shadow-sm inline-flex items-center space-x-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 text-white font-medium text-sm px-6 py-3 rounded-md border border-white/25 transition-colors"
            >
              Our Services
            </Link>
          </div>

          <div className="pt-4 border-t border-white/15 text-xs text-slate-300 flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-theme-orange" />
              <span>₹350+ Cr Managed Turnover</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-theme-orange" />
              <span>20,000+ TEUs Handled</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-theme-orange" />
              <span>60% Chemical Volume</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-theme-orange" />
              <span>Licensed: FMC • MTO • IEC</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
