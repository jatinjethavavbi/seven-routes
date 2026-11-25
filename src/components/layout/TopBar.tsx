'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-theme-blue text-white text-xs border-b border-blue-950/20 hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9 font-normal">
          {/* Left: Contact Info */}
          <div className="flex items-center space-x-4 xl:space-x-5 text-slate-200">
            <a
              href="tel:+918128128791"
              className="flex items-center space-x-1.5 hover:text-theme-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-theme-orange" />
              <span>+91 81281 28791</span>
            </a>
            <span className="text-white/20">•</span>
            <a
              href="mailto:kanika@sevenrouteslogistics.com"
              className="flex items-center space-x-1.5 hover:text-theme-orange transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-theme-orange" />
              <span>kanika@sevenrouteslogistics.com</span>
            </a>
            <span className="text-white/20">•</span>
            <a
              href="mailto:neeraj@sevenrouteslogistics.com"
              className="flex items-center space-x-1.5 hover:text-theme-orange transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-theme-orange" />
              <span>neeraj@sevenrouteslogistics.com</span>
            </a>
          </div>

          {/* Right: Key Hubs & Government Registration */}
          <div className="flex items-center space-x-4 text-slate-200">
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-theme-orange" />
              <span>Mumbai (2) • Surat • Ahmedabad</span>
            </div>
            <span className="text-white/20">•</span>
            <span className="bg-white/10 text-white px-2 py-0.5 rounded text-[11px] font-medium tracking-wide">
              Licensed: FMC • MTO • IEC
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
