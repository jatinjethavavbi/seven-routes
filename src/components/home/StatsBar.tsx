'use client';

import React from 'react';
import { Award, Ship, Globe, CheckCircle, ShieldCheck } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      value: '14+',
      label: 'Years of Industry Leadership',
      subtext: 'Global freight forwarding pedigree',
      icon: Award,
    },
    {
      value: '50,000+',
      label: 'TEUs Shipped Globally',
      subtext: 'FCL, LCL & ISO Tank Bulk',
      icon: Ship,
    },
    {
      value: '100+',
      label: 'Worldwide Port Networks',
      subtext: 'Direct ocean carrier contracts',
      icon: Globe,
    },
    {
      value: '99.8%',
      label: 'Statutory CHA Accuracy',
      subtext: 'Smooth customs clearance',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-theme-smoke py-14 border-y border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-theme-orange uppercase tracking-widest block mb-1">
            Proven Maritime Track Record
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-theme-title">
            Trusted by Global Importers &amp; Exporters Worldwide
          </h2>
        </div>

        {/* 4 Clean Corporate Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded border border-theme-border shadow-sm hover:border-theme-orange transition-colors text-center group"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 group-hover:bg-amber-50 flex items-center justify-center text-theme-blue group-hover:text-theme-orange transition-colors mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-theme-title tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 font-heading">
                  {stat.label}
                </div>
                <div className="text-xs text-theme-body mt-1">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Trust Badges Strip */}
        <div className="mt-8 bg-white border border-theme-border rounded p-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-theme-body">
          <div className="flex items-center space-x-2 text-theme-title font-bold">
            <span className="w-2.5 h-2.5 bg-theme-orange rounded-full" />
            <span>OPERATIONAL ACCREDITATIONS:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <div className="flex items-center space-x-1.5 text-slate-700">
              <CheckCircle className="w-4 h-4 text-theme-blue shrink-0" />
              <span>Multi-Modal Transport Operator (MTO)</span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-700">
              <CheckCircle className="w-4 h-4 text-theme-blue shrink-0" />
              <span>Licensed Custom House Agent (CHA)</span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-700">
              <CheckCircle className="w-4 h-4 text-theme-blue shrink-0" />
              <span>ISO Tank Hazardous Cargo Compliance</span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-700">
              <CheckCircle className="w-4 h-4 text-theme-blue shrink-0" />
              <span>Direct Gateway Port Footprint</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
