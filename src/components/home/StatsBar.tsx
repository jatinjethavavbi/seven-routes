'use client';

import React from 'react';
import { Award, Ship, Globe, CheckCircle, ShieldCheck, Building2, Users } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      value: '₹350+ Cr',
      label: 'Turnover Managed',
      subtext: 'Cumulative volume over 3 years',
      icon: Award,
    },
    {
      value: '60%',
      label: 'Chemical Export Volume',
      subtext: 'Specialized chemical cargo focus',
      icon: Ship,
    },
    {
      value: '20,000+',
      label: 'TEUs Handled',
      subtext: 'Global container & ISO tank freight',
      icon: Globe,
    },
    {
      value: '30+',
      label: 'Logistics Professionals',
      subtext: 'Offices in Mumbai, Ahmedabad & Surat',
      icon: Users,
    },
  ];

  return (
    <section className="bg-slate-50 py-12 sm:py-16 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-theme-orange uppercase tracking-widest block mb-1">
            Operating Strength &amp; Proven Track Record
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-theme-blue">
            Performance Backed by Experience &amp; Execution
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
            Licensed by FMC, MTO, and IEC. Built on a cumulative turnover of over ₹350 crore managed by our core leadership team.
          </p>
        </div>

        {/* 4 Clean Corporate Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-sm hover:border-theme-orange transition-all text-center group"
              >
                <div className="w-11 h-11 mx-auto rounded-full bg-blue-50 group-hover:bg-amber-50 flex items-center justify-center text-theme-blue group-hover:text-theme-orange transition-colors mb-3 sm:mb-4">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-theme-blue tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
