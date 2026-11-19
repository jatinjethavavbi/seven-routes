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
  const [selectedBranch, setSelectedBranch] = useState<'mumbai_corp' | 'mumbai_mulund' | 'surat' | 'ahmedabad'>('mumbai_corp');

  const branches = {
    mumbai_corp: {
      id: 'mumbai_corp',
      tag: 'Corporate Headquarters',
      city: 'Mumbai (Goregaon)',
      state: 'Maharashtra',
      address: '1501, BLA Business Park, CTS No. 492 A 1 to 4 and 492 B, near Atlanta Center, Goregaon (E), Sonawala Road, Village Pahadi, Mumbai 400063',
      phone: '+91 81281 28791',
      email: 'ops@sevenrouteslogistics.com',
      gatewayPort: 'Nhava Sheva (JNPT) & Mumbai Port Gateway',
      operations: [
        'Central Multimodal Pricing & Ocean Carrier Contracts',
        'Corporate Executive Management & Commercial Credit Desk',
        'Global Freight Forwarding & Vessel Capacity Allocation',
        'Chemical Export Logistics Strategic Planning',
      ],
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM (IST)',
    },
    mumbai_mulund: {
      id: 'mumbai_mulund',
      tag: 'Mumbai Regional Office',
      city: 'Mumbai (Mulund)',
      state: 'Maharashtra',
      address: '1006, The Gateway by Wadhwa, Mulund - Goregaon Link Rd, opp. Registration Office Mulund West, Hira Nagar, Mulund West, Mumbai, Maharashtra 400080',
      phone: '+91 81281 28791',
      email: 'ops@sevenrouteslogistics.com',
      gatewayPort: 'Nhava Sheva & Mumbai Maritime Terminals',
      operations: [
        'Container Booking & Terminal Gate-In Operations',
        'Documentation & Multimodal Bill of Lading Issuance',
        'Shipping Line Coordination & On-Dock Liaison',
        'Client Account Coordination & Shipment Tracking',
      ],
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM (IST)',
    },
    surat: {
      id: 'surat',
      tag: 'Chemical & Industrial Desk',
      city: 'Surat',
      state: 'Gujarat',
      address: '714, Surat Digital Valley, Beside Silver Trade Center, VIP Circle, Mota Varachha, Surat - 394101',
      phone: '+91 81281 28791 / +91 88660 08584',
      email: 'divyesh.t@sevenrouteslogistics.com',
      gatewayPort: 'Hazira Port, Dahej Hub & South Gujarat Industrial Belt',
      operations: [
        'Specialised Chemical & Pharma Export Operations',
        'Dangerous Goods IMDG Class 2, 3, 4, 5, 6, 8, 9 Cargo Handling',
        'ISO Tank Liquid Bulk Technical Verification & Placement',
        'South Gujarat Exporter Freight Coordination',
      ],
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM (IST)',
    },
    ahmedabad: {
      id: 'ahmedabad',
      tag: 'Commercial Trading Desk',
      city: 'Ahmedabad',
      state: 'Gujarat',
      address: 'Office no.: 1120, 11th Floor, Sakar-9, Beside old Reserve Bank of India, Ashram Rd, near City Gold, Muslim Society, Navrangpura, Ahmedabad, Gujarat 380009',
      phone: '+91 73777 09341',
      email: 'ajay.b@sevenrouteslogistics.com',
      gatewayPort: 'Mundra Port & Inland ICD Sanand / Khodiyar / Sabarmati',
      operations: [
        'Exporter & Importer Commercial Consultation',
        'Inland Container Depot (ICD) Multimodal Route Planning',
        'Mundra Port Terminal Dispatch Coordination',
        'Upfront Freight Financing & Customer Credit Arrangements',
      ],
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM (IST)',
    },
  };

  const activeBranch = branches[selectedBranch];

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-theme-orange uppercase tracking-wider block mb-1">
            Operational Footprint
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight">
            Our Branch Network Across Mumbai, Surat &amp; Ahmedabad
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Approximately 30 logistics professionals managing container bookings, chemical exports, and carrier negotiations across India&apos;s leading trade hubs.
          </p>
        </div>

        {/* 4 Interactive Office Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {(Object.keys(branches) as Array<keyof typeof branches>).map((key) => {
            const b = branches[key];
            const isSelected = selectedBranch === key;
            return (
              <button
                key={b.id}
                onClick={() => setSelectedBranch(key)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-blue-50/50 border-theme-orange ring-1 ring-theme-orange shadow-sm'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isSelected ? 'bg-orange-100 text-theme-orange' : 'bg-slate-200/70 text-slate-600'
                  }`}>
                    {b.state}
                  </span>
                  <Building2 className={`w-4 h-4 ${isSelected ? 'text-theme-orange' : 'text-slate-400'}`} />
                </div>
                <div className="font-bold text-sm sm:text-base text-theme-blue">
                  {b.city}
                </div>
                <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                  {b.tag}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Branch Detail Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Address, Contacts & Operating Hours */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-[11px] font-bold text-theme-orange uppercase tracking-wider px-2.5 py-1 bg-orange-50 rounded-full border border-orange-200 inline-block mb-2">
                  {activeBranch.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-theme-blue">
                  {activeBranch.city} Office
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3 text-sm text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-theme-blue flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-0.5">
                    Office Location
                  </span>
                  <p className="leading-relaxed text-slate-600 text-xs sm:text-sm">
                    {activeBranch.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 text-sm text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-theme-orange flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-0.5">
                    Direct Phone / Hotline
                  </span>
                  <a
                    href="tel:+918128128791"
                    className="font-bold text-slate-900 hover:text-theme-orange transition-colors text-sm"
                  >
                    {activeBranch.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 text-sm text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-theme-blue flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-0.5">
                    Operations Email
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
              <div className="flex items-start space-x-3 text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 block">Operational Schedule:</span>
                  <span>{activeBranch.hours}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Key Gateway Port & Functions Handled */}
            <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 space-y-5">
              
              {/* Gateway Port Box */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-theme-blue text-white flex items-center justify-center shrink-0">
                    <Anchor className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-theme-orange uppercase tracking-wider block">
                      Primary Gateway Linkage
                    </span>
                    <span className="font-bold text-slate-800 text-sm">
                      {activeBranch.gatewayPort}
                    </span>
                  </div>
                </div>
                <span className="hidden sm:inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded">
                  Active Desk
                </span>
              </div>

              {/* Operations Handled */}
              <div>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-3">
                  Branch Core Functions:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeBranch.operations.map((op, i) => (
                    <div
                      key={i}
                      className="flex items-start space-x-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                    >
                      <Navigation className="w-3.5 h-3.5 text-theme-orange shrink-0 mt-0.5" />
                      <span>{op}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/#quote"
                  className="bg-theme-orange hover:bg-theme-orangeHover text-white font-medium text-xs px-5 py-2.5 rounded-md transition-colors shadow-sm inline-flex items-center space-x-1.5"
                >
                  <span>Request Rate From This Branch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-medium text-xs px-4 py-2.5 rounded-md transition-colors"
                >
                  <span>View All Offices</span>
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
