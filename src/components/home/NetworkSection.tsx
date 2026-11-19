'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Building2, 
  Anchor, 
  ArrowRight, 
  Navigation,
  Clock,
  ShieldCheck
} from 'lucide-react';

export default function NetworkSection() {
  const [selectedCity, setSelectedCity] = useState<'mumbai' | 'mundra' | 'hazira' | 'ahmedabad'>('mumbai');

  const branches = {
    mumbai: {
      id: 'mumbai',
      tag: 'Headquarters & Primary Hub',
      city: 'Mumbai',
      state: 'Maharashtra',
      address: '2nd Floor, Neelkanth Business Park, "D" Wing, Office No. 208, Nathani Road, Kirol Village, Vidyavihar West, Mumbai - 400086, India',
      phone: '+91 99202 15011 / +91 98700 06982',
      email: 'info@sevenroutes.com',
      gatewayPort: 'Nhava Sheva (JNPT) & Mumbai Port',
      operations: [
        'Central Multimodal Pricing & Ocean Carrier Contracts',
        'Direct JNPT Port Customs House Agency (CHA)',
        'Global Freight Forwarding & Vessel Scheduling',
        'ISO Tank Technical Management & Approvals',
      ],
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM (IST)',
    },
    mundra: {
      id: 'mundra',
      tag: 'Port Operations Gateway',
      city: 'Mundra & Gandhidham',
      state: 'Gujarat',
      address: 'Ganatra Arcade, Plot No. 121, Office No. F-4, Sector-8, Gandhidham - 370201, Gujarat, India',
      phone: '+91 98700 06982',
      email: 'mundra@sevenroutes.com',
      gatewayPort: 'Mundra Port & Deendayal Port (Kandla)',
      operations: [
        'Port-Side Container Terminal Clearance',
        'ISO Tank Liquid Bulk Terminal Supervision',
        'CFS Deconsolidation & Inland Rail Linkages',
        'Specialized Bulk Cargo Handling Operations',
      ],
      hours: 'Mon - Sat: 9:00 AM - 7:00 PM (IST)',
    },
    hazira: {
      id: 'hazira',
      tag: 'Industrial Logistics Hub',
      city: 'Hazira / Vadodara',
      state: 'Gujarat',
      address: '302, Fortune Aroma Tower, Bhayli, Vadodara - 391410, Gujarat, India',
      phone: '+91 99202 15011',
      email: 'hazira@sevenroutes.com',
      gatewayPort: 'Adani Hazira Port & Dahej Hub',
      operations: [
        'Petrochemical & Industrial Chemical Logistics',
        'Hazardous IMO Liquid Cargo Terminal Clearance',
        'Factory-to-Port Container Trailer Haulage',
        'Heavy Machinery & Multimodal Project Cargo',
      ],
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM (IST)',
    },
    ahmedabad: {
      id: 'ahmedabad',
      tag: 'Commercial Trading Desk',
      city: 'Ahmedabad',
      state: 'Gujarat',
      address: 'Ganesh Glory, Jagatpur Road, Near BSNL Office, Off S.G. Highway, Gota, Ahmedabad - 382470, Gujarat, India',
      phone: '+91 98700 06982',
      email: 'ahmedabad@sevenroutes.com',
      gatewayPort: 'Direct ICD Sabarmati, Sanand & Khodiyar Linkages',
      operations: [
        'Exporter & Importer Supply Chain Consultation',
        'Inland Container Depot (ICD) Bill of Lading',
        'Demurrage & Storage Reduction Advisory',
        'Commercial Freight Brokerage & Tracking',
      ],
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM (IST)',
    },
  };

  const activeBranch = branches[selectedCity];

  const allGatewayPorts = [
    { name: 'Nhava Sheva (JNPT)', state: 'Maharashtra', code: 'INNSA' },
    { name: 'Mundra Port', state: 'Gujarat', code: 'INMUN' },
    { name: 'Hazira Port', state: 'Gujarat', code: 'INHZA' },
    { name: 'Kandla / Deendayal', state: 'Gujarat', code: 'INIXY' },
    { name: 'Pipavav Port', state: 'Gujarat', code: 'INPAV' },
    { name: 'Chennai Port', state: 'Tamil Nadu', code: 'INMAA' },
    { name: 'Kolkata / Haldia', state: 'West Bengal', code: 'INCCU' },
    { name: 'Cochin Port', state: 'Kerala', code: 'INCOK' },
  ];

  return (
    <section id="network" className="py-20 bg-theme-smoke border-b border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-theme-orange uppercase tracking-widest block mb-2 font-heading">
              Strategic Gateway Presence
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-theme-title tracking-tight leading-tight">
              Our Port Network & Regional Branch Offices
            </h2>
            <p className="text-sm sm:text-base text-theme-body mt-2">
              With offices strategically stationed at India&apos;s primary maritime gates and trading hubs, Seven Routes Logistics ensures on-the-ground cargo supervision and expedited clearance.
            </p>
          </div>

          <div className="mt-4 md:mt-0 shrink-0">
            <Link
              href="#quote"
              className="inline-flex items-center space-x-2 bg-theme-blue hover:bg-theme-blueDark text-white font-heading font-bold text-xs uppercase tracking-wider px-5 py-3 rounded shadow transition-colors"
            >
              <span>Connect with Local Desk</span>
              <ArrowRight className="w-4 h-4 text-theme-orange" />
            </Link>
          </div>
        </div>

        {/* 4 Interactive City Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {(['mumbai', 'mundra', 'hazira', 'ahmedabad'] as const).map((cityKey) => {
            const b = branches[cityKey];
            const isSelected = selectedCity === cityKey;
            return (
              <button
                key={cityKey}
                type="button"
                onClick={() => setSelectedCity(cityKey)}
                className={`p-4 rounded border text-left transition-all ${
                  isSelected
                    ? 'bg-white border-theme-orange shadow-md ring-2 ring-theme-orange/20'
                    : 'bg-white border-theme-border hover:border-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isSelected ? 'bg-amber-100 text-amber-900' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {b.state}
                  </span>
                  <Building2 className={`w-4 h-4 ${isSelected ? 'text-theme-orange' : 'text-slate-400'}`} />
                </div>
                <div className="font-heading font-bold text-base text-theme-title">
                  {b.city}
                </div>
                <div className="text-xs text-theme-body line-clamp-1 mt-0.5">
                  {b.gatewayPort.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Branch Detail Card */}
        <div className="bg-white rounded border border-theme-border shadow-sm p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Address, Contacts & Operating Hours */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[11px] font-bold text-theme-orange uppercase tracking-wider px-2.5 py-1 bg-amber-50 rounded border border-amber-200 inline-block mb-2">
                  {activeBranch.tag}
                </span>
                <h3 className="text-2xl font-bold font-heading text-theme-title">
                  {activeBranch.city} Office
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3 text-sm text-slate-700">
                <div className="w-8 h-8 rounded bg-blue-50 text-theme-blue flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-theme-title uppercase tracking-wider block mb-0.5 font-heading">
                    Registered Office Address
                  </span>
                  <p className="leading-relaxed text-theme-body text-xs sm:text-sm">
                    {activeBranch.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 text-sm text-slate-700">
                <div className="w-8 h-8 rounded bg-amber-50 text-theme-orange flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-theme-title uppercase tracking-wider block mb-0.5 font-heading">
                    Direct Phone / WhatsApp
                  </span>
                  <a
                    href="tel:+919920215011"
                    className="font-bold text-theme-title hover:text-theme-orange transition-colors text-sm"
                  >
                    {activeBranch.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 text-sm text-slate-700">
                <div className="w-8 h-8 rounded bg-blue-50 text-theme-blue flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-theme-title uppercase tracking-wider block mb-0.5 font-heading">
                    Electronic Mail
                  </span>
                  <a
                    href={`mailto:${activeBranch.email}`}
                    className="text-theme-blue hover:text-theme-orange transition-colors text-sm font-medium"
                  >
                    {activeBranch.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-3 text-xs text-theme-body bg-slate-50 p-3 rounded border border-slate-100">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 block">Operational Desk Schedule:</span>
                  <span>{activeBranch.hours}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Key Gateway Port & Functions Handled */}
            <div className="lg:col-span-7 bg-slate-50 p-6 rounded border border-theme-border space-y-6">
              
              {/* Gateway Port Box */}
              <div className="bg-white p-4 rounded border border-theme-border shadow-sm flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded bg-theme-blue text-white flex items-center justify-center shrink-0">
                    <Anchor className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-theme-body uppercase tracking-wider block">
                      Primary Gateway Port Controlled
                    </span>
                    <h4 className="text-base font-bold font-heading text-theme-title">
                      {activeBranch.gatewayPort}
                    </h4>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
                  Active Port Terminal
                </span>
              </div>

              {/* Key Branch Operations */}
              <div>
                <span className="text-xs font-bold text-theme-title uppercase tracking-wider block mb-3 font-heading flex items-center space-x-1.5">
                  <Navigation className="w-3.5 h-3.5 text-theme-orange" />
                  <span>On-Site Operational Scope & Capabilities</span>
                </span>

                <div className="space-y-2.5">
                  {activeBranch.operations.map((op, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2.5 bg-white p-3 rounded border border-slate-200 text-xs sm:text-sm text-slate-700"
                    >
                      <ShieldCheck className="w-4 h-4 text-theme-orange shrink-0 mt-0.5" />
                      <span>{op}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA footer for this branch */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-theme-body">
                  Need direct clearance at {activeBranch.city}?
                </span>
                <Link
                  href="#quote"
                  className="bg-theme-orange hover:bg-theme-orangeHover text-white font-heading font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded shadow transition-colors flex items-center space-x-1.5"
                >
                  <span>Inquire for {activeBranch.city}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* Major Indian Gateway Ports Grid Strip */}
        <div className="mt-12 bg-white rounded border border-theme-border p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-theme-border">
            <div className="flex items-center space-x-2">
              <Anchor className="w-4 h-4 text-theme-blue" />
              <h4 className="text-sm font-bold font-heading text-theme-title uppercase tracking-wider">
                All Major Indian Sea Ports & Gateways Serviced
              </h4>
            </div>
            <span className="text-xs text-theme-body">Regular Vessel Sailing Schedule</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
            {allGatewayPorts.map((port, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-amber-50/70 p-2.5 rounded border border-slate-200 hover:border-theme-orange transition-colors"
              >
                <span className="text-[10px] font-bold text-theme-blue block">{port.code}</span>
                <span className="text-xs font-bold text-theme-title block truncate">{port.name}</span>
                <span className="text-[10px] text-theme-body block">{port.state}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

