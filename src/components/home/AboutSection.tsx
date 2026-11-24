'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Image */}
          <div className="lg:col-span-5">
            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <Image
                src="/images/about/about-operations.jpg"
                alt="Seven Routes Logistics International Operations"
                width={620}
                height={450}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Right Column: Company Story & Leadership */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-2">
                About Seven Routes Logistics
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight leading-tight">
                Leadership, Operating Strength &amp; Proven Track Record
              </h2>
            </div>

            <div className="text-sm sm:text-base text-slate-600 space-y-3 leading-relaxed">
              <p>
                <strong>Seven Routes Logistics International Pvt. Ltd.</strong> is a professionally managed freight forwarding company established by experienced logistics professionals with strong knowledge of international trade and supply chain operations.
              </p>
              <p>
                Led by Directors <strong>Kanika</strong> (14+ years in logistics, prior roles with Nippon Express &amp; Globelink) and <strong>Neeraj</strong> (20+ years professional experience, 16+ years in logistics with DHL &amp; Maersk), our company brings approximately 30 professionals across <strong>Mumbai, Ahmedabad, and Surat</strong>, with most team members bringing more than 10 years of logistics industry experience.
              </p>
              <p>
                We specialise in international freight forwarding, particularly <strong>chemicals and pharma exports</strong>, serving <strong>70+ chemical exporters</strong> alongside our core sector mix (50% chemicals, 20% pharma, 20% FIBC &amp; non-woven bags). Building on cumulative turnover of over <strong>₹350 crore</strong> managed over the last three years under Pazago Logistics by the same core team, we offer proven operational discipline and reliable execution.
              </p>
            </div>

            {/* 4 Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-200">
              <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                <span className="block text-xl sm:text-2xl font-extrabold text-theme-blue">₹350+ Cr</span>
                <span className="block text-[11px] text-slate-500 mt-0.5">Turnover Managed</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                <span className="block text-xl sm:text-2xl font-extrabold text-theme-blue">70+</span>
                <span className="block text-[11px] text-slate-500 mt-0.5">Chemical Exporters</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                <span className="block text-xl sm:text-2xl font-extrabold text-theme-blue">30,000+</span>
                <span className="block text-[11px] text-slate-500 mt-0.5">TEUs Handled</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                <span className="block text-xl sm:text-2xl font-extrabold text-theme-blue">30+</span>
                <span className="block text-[11px] text-slate-500 mt-0.5">Team Members</span>
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-theme-orange hover:text-slate-900 transition-colors"
              >
                <span>Read our full story and director profiles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
