'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Box, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Droplets, 
  Flame, 
  Gauge, 
  Layers, 
  FileCheck2,
  ThermometerSnowflake
} from 'lucide-react';

export default function IsoTanksSection() {
  const [activeTab, setActiveTab] = useState<'chemical' | 'food' | 'gas'>('chemical');

  const tabData = {
    chemical: {
      title: 'Chemical & Hazardous Bulk Cargo',
      description:
        'Certified transport of hazardous and non-hazardous liquid chemicals under international IMDG Code regulations. Equipped with high-grade 316L stainless steel shells, emergency foot valves, and burst disc safety mechanisms.',
      points: [
        'Class 3, 6, 8 & 9 Dangerous Goods (IMO Certified)',
        '316L Stainless Steel Pressure-Tested Shells',
        'Top and Bottom Discharge with Emergency Shut-off',
        'Periodic 2.5 & 5-Year Hydrostatic Test Certifications',
      ],
      cargoTypes: ['Petrochemicals', 'Specialty Solvents', 'Acids & Alkalies', 'Industrial Resins'],
    },
    food: {
      title: 'Dedicated Food-Grade Liquids',
      description:
        'Zero-contamination, dedicated food-grade ISO tanks strictly reserved for consumable liquids. Thoroughly steam-cleaned and sanitized with food-grade microbiological inspection certificates before every loading.',
      points: [
        'Dedicated Food-Only Tank Fleet (No Chemical Contamination)',
        'Approved for Vegetable Oils, Fruit Juices & Liquid Glucose',
        'Periodic Superheated Steam Sanitization Cleaning Certificates',
        'Insulated Polyurethane Cladding for Temperature Stability',
      ],
      cargoTypes: ['Edible & Cooking Oils', 'Fruit Concentrates', 'Beverage Bases', 'Liquid Sweeteners'],
    },
    gas: {
      title: 'Industrial Gases & Pressurized Liquids',
      description:
        'Heavy-duty T50 & specialized ISO gas containers designed for pressurized and liquefied industrial gases. Equipped with telemetry monitoring for continuous pressure and temperature surveillance throughout maritime voyage.',
      points: [
        'High-Pressure T50 Certified UN Portable Containers',
        'Real-Time Telemetry Vessel & Port Pressure Monitoring',
        'Dual Safety Relief Valves & Excess Flow Protection',
        'Multimodal Inland Skeletal Trailer Transport Across Ports',
      ],
      cargoTypes: ['Refrigerant Gases', 'Liquid LPG', 'Industrial Gases', 'Specialty Cryogenics'],
    },
  };

  const current = tabData[activeTab];

  return (
    <section id="iso-tanks" className="py-20 bg-theme-warm border-y border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 bg-theme-orange text-white text-[11px] font-heading font-bold uppercase tracking-widest px-3 py-1 rounded mb-3">
            <Box className="w-3.5 h-3.5" />
            <span>Specialized Liquid Bulk Logistics</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-theme-title tracking-tight">
            Secure & Flexible ISO Tank Fleet Solutions
          </h2>
          <p className="text-sm sm:text-base text-theme-body mt-2 leading-relaxed">
            As one of India&apos;s leading ISO tank operators, Seven Routes Logistics provides technical precision, safety compliance, and direct terminal handling at Nhava Sheva (JNPT), Mundra, and Hazira ports.
          </p>
        </div>

        {/* Split Grid: Left Image & Specs, Right Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Real ISO Tank Image & Technical Specs */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative h-72 sm:h-80 w-full rounded border border-theme-border overflow-hidden shadow-sm bg-slate-200">
              <Image
                src="/images/iso-tanks.webp"
                alt="Seven Routes Logistics ISO Tank Container Fleet"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-theme-blue text-white text-[11px] font-heading font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                T11 / T14 ISO Tanks
              </div>
              <div className="absolute bottom-3 right-3 bg-white/95 text-theme-title text-xs font-semibold px-3 py-1.5 rounded shadow border border-theme-border">
                21,000L – 26,000L Capacity
              </div>
            </div>

            {/* Technical Specs Card */}
            <div className="bg-white p-5 rounded border border-theme-border shadow-sm">
              <h4 className="text-xs font-bold text-theme-title uppercase tracking-wider mb-3 font-heading flex items-center space-x-1.5">
                <Gauge className="w-4 h-4 text-theme-orange" />
                <span>Standard Fleet Technical Parameters</span>
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
                  <span className="text-theme-body block text-[10px] uppercase font-bold">Shell Material</span>
                  <span className="font-bold text-theme-title">316L Stainless Steel</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
                  <span className="text-theme-body block text-[10px] uppercase font-bold">Max Working Pressure</span>
                  <span className="font-bold text-theme-title">4.00 Bar (Test: 6.0 Bar)</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
                  <span className="text-theme-body block text-[10px] uppercase font-bold">Heating System</span>
                  <span className="font-bold text-theme-title">Steam Coils / Electric</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
                  <span className="text-theme-body block text-[10px] uppercase font-bold">Regulatory Approvals</span>
                  <span className="font-bold text-theme-title">IMDG, ADR, RID, US DOT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Category Tabs & Details */}
          <div className="lg:col-span-7 bg-white rounded border border-theme-border shadow-sm p-6 sm:p-8">
            
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2 pb-5 border-b border-theme-border">
              <button
                type="button"
                onClick={() => setActiveTab('chemical')}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded text-xs sm:text-sm font-heading font-bold transition-all ${
                  activeTab === 'chemical'
                    ? 'bg-theme-orange text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Flame className="w-4 h-4" />
                <span>Chemical & Hazardous Bulk</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('food')}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded text-xs sm:text-sm font-heading font-bold transition-all ${
                  activeTab === 'food'
                    ? 'bg-theme-orange text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Droplets className="w-4 h-4" />
                <span>Food-Grade Liquids</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('gas')}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded text-xs sm:text-sm font-heading font-bold transition-all ${
                  activeTab === 'gas'
                    ? 'bg-theme-orange text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <ThermometerSnowflake className="w-4 h-4" />
                <span>Industrial Gases (T50)</span>
              </button>
            </div>

            {/* Tab Body */}
            <div className="pt-6 space-y-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-theme-title">
                  {current.title}
                </h3>
                <p className="text-sm text-theme-body mt-2 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Safety & Operational Highlights */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block font-heading">
                  Compliance & Quality Guarantees:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-theme-orange shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Cargo Commodities */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2 font-heading">
                  Typical Cargo Transported:
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.cargoTypes.map((cargo, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 text-slate-800 text-xs px-3 py-1 rounded font-medium border border-slate-200"
                    >
                      {cargo}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-theme-border flex flex-wrap items-center gap-4">
                <Link
                  href="#quote"
                  className="bg-theme-blue hover:bg-theme-blueDark text-white font-heading font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow transition-colors flex items-center space-x-2"
                >
                  <span>Request Tank Availability & Rate</span>
                  <ArrowRight className="w-4 h-4 text-theme-orange" />
                </Link>

                <div className="flex items-center space-x-2 text-xs text-theme-body">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Licensed Dangerous Goods (IMO) Forwarder</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

