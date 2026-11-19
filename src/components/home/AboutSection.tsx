'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Full natural proportions, zero awkward cropping */}
          <div className="lg:col-span-5">
            <div className="w-full rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <Image
                src="/images/about/about-operations.jpg"
                alt="Seven Routes Logistics Maritime Operations"
                width={620}
                height={450}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Right Column: Clean, Honest Story & Key Figures */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-2">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight leading-tight">
                14+ Years of Freight Forwarding Leadership
              </h2>
            </div>

            <div className="text-sm sm:text-base text-slate-600 space-y-3 leading-relaxed">
              <p>
                Led by seasoned logistics leader <strong>Kanika</strong> with over 14 years of industry pedigree across global names like Nippon Express and Globelink, <strong>Seven Routes Logistics International Pvt Ltd</strong> has grown into a trusted Indian freight forwarder and multimodal logistics provider.
              </p>
              <p>
                With operational branches across <strong>Nhava Sheva (JNPT), Mundra, Hazira, and Ahmedabad</strong>, we provide end-to-end ocean container freight, specialized liquid bulk ISO tank management, and licensed in-house Custom House Agency (CHA) services.
              </p>
            </div>

            {/* 3 Simple Stat Figures */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-slate-100">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-theme-blue">14+</span>
                <span className="block text-xs text-slate-500 mt-0.5">Years Experience</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-theme-blue">4</span>
                <span className="block text-xs text-slate-500 mt-0.5">Key Port Desks</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-theme-blue">100+</span>
                <span className="block text-xs text-slate-500 mt-0.5">Global Ports</span>
              </div>
            </div>

            {/* Clean Action Link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-theme-orange hover:text-slate-900 transition-colors"
              >
                <span>Read our full story and meet the team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
