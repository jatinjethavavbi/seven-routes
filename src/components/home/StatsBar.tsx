'use client';

import React from 'react';
import { PieChart, FlaskConical, Pill, Package, Layers } from 'lucide-react';

export default function StatsBar() {
  return (
    <section aria-label="Key business statistics" className="bg-white py-8 sm:py-12 box-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[clamp(12px,2vw,24px)] box-border">

        {/* 4 Cards Grid: 1 col on <380px, 2 cols on mobile/tablet (<1024px), 4 cols on desktop (>=1024px) */}
        <dl className="grid grid-cols-2 max-[379px]:grid-cols-1 lg:grid-cols-4 gap-[clamp(12px,2vw,24px)] items-stretch m-0 p-0 box-border">

          {/* Card 1: 350+ Cr */}
          <div className="bg-[#F6F8FC] rounded-[18px] sm:rounded-[22px] p-[clamp(16px,2.5vw,28px)] border border-[#EBF0F8]/80 shadow-[0_2px_8px_rgba(15,23,42,0.03)] flex flex-col justify-between min-w-0 box-border hover:shadow-md transition-shadow">
            <dd className="m-0 font-black text-theme-orange tracking-tight leading-none whitespace-nowrap text-[clamp(2rem,4vw,3.5rem)] flex items-baseline">
              <span>350+</span>
              <span className="text-[0.55em] font-extrabold ml-1.5 align-baseline">Cr</span>
            </dd>
            <dt className="m-0 text-[clamp(0.8rem,1.2vw,0.95rem)] leading-[1.4] font-bold text-[#112347] mt-4 pt-2">
              Turnover managed over 3 years
            </dt>
          </div>

          {/* Card 2: 70+ */}
          <div className="bg-[#F6F8FC] rounded-[18px] sm:rounded-[22px] p-[clamp(16px,2.5vw,28px)] border border-[#EBF0F8]/80 shadow-[0_2px_8px_rgba(15,23,42,0.03)] flex flex-col justify-between min-w-0 box-border hover:shadow-md transition-shadow">
            <dd className="m-0 font-black text-[#112347] tracking-tight leading-none whitespace-nowrap text-[clamp(2rem,4vw,3.5rem)] flex items-baseline">
              <span>70+</span>
            </dd>
            <dt className="m-0 text-[clamp(0.8rem,1.2vw,0.95rem)] leading-[1.4] font-bold text-[#112347] mt-4 pt-2">
              Chemical exporters served
            </dt>
          </div>

          {/* Card 3: 30 */}
          <div className="bg-[#F6F8FC] rounded-[18px] sm:rounded-[22px] p-[clamp(16px,2.5vw,28px)] border border-[#EBF0F8]/80 shadow-[0_2px_8px_rgba(15,23,42,0.03)] flex flex-col justify-between min-w-0 box-border hover:shadow-md transition-shadow">
            <dd className="m-0 font-black text-[#F05A28] tracking-tight leading-none whitespace-nowrap text-[clamp(2rem,4vw,3.5rem)] flex items-baseline">
              <span>30</span>
            </dd>
            <dt className="m-0 text-[clamp(0.8rem,1.2vw,0.95rem)] leading-[1.4] font-bold text-[#112347] mt-4 pt-2">
              Experienced team members
            </dt>
          </div>

          {/* Card 4: 4 */}
          <div className="bg-[#F6F8FC] rounded-[18px] sm:rounded-[22px] p-[clamp(16px,2.5vw,28px)] border border-[#EBF0F8]/80 shadow-[0_2px_8px_rgba(15,23,42,0.03)] flex flex-col justify-between min-w-0 box-border hover:shadow-md transition-shadow">
            <dd className="m-0 font-black text-[#112347] tracking-tight leading-none whitespace-nowrap text-[clamp(2rem,4vw,3.5rem)] flex items-baseline">
              <span>4</span>
            </dd>
            <dt className="m-0 text-[clamp(0.8rem,1.2vw,0.95rem)] leading-[1.4] font-bold text-[#112347] mt-4 pt-2">
              Strategic office locations
            </dt>
          </div>

        </dl>

        {/* Bottom Sector Mix Graphical Card */}
        <div className="bg-[#0E1E38] text-white rounded-[16px] sm:rounded-[20px] p-[clamp(16px,2vw,24px)] border border-[#1A2E50] shadow-md flex flex-col gap-4 box-border">
          {/* Header Row: Title & Ship Icon */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-theme-orange/15 border border-theme-orange/30 flex items-center justify-center text-theme-orange shrink-0">
                <PieChart className="w-4 h-4" />
              </div>
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
                  Sector Mix Breakdown
                </span>
                <span className="text-[11px] text-slate-300 font-normal">
                  (Cargo Portfolio Distribution)
                </span>
              </div>
            </div>

            {/* Cargo Ship Icon */}
            <div className="shrink-0 flex items-center gap-1.5 text-[#F05A28]" aria-hidden="true" title="Maritime & Multimodal Freight">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4 14.5l1.6-4.5h12.8l1.6 4.5c.3.1.6.2.8.4l1.2-4.5c.1-.4-.2-.8-.6-.9L19 9V5.5c0-.3-.2-.5-.5-.5h-4c-.3 0-.5.2-.5.5V9H10V6.5c0-.3-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5V9H5.6c-.4 0-.8.3-.9.7L3.1 14.2c.3.1.6.2.9.3z" />
                <path d="M2.5 16.5c1.2 0 2.2-.4 3-1.1.8.7 1.8 1.1 3 1.1s2.2-.4 3-1.1c.8.7 1.8 1.1 3 1.1s2.2-.4 3-1.1c.8.7 1.8 1.1 3 1.1.5 0 1-.1 1.5-.3v-1.8c-.5.3-1 .4-1.5.4-1.2 0-2.2-.4-3-1.1-.8.7-1.8 1.1-3 1.1s-2.2-.4-3-1.1c-.8.7-1.8 1.1-3 1.1-.5 0-1-.1-1.5-.4V16c.5.3 1 .5 1.5.5z" />
                <path d="M2.5 19.5c1.2 0 2.2-.4 3-1.1.8.7 1.8 1.1 3 1.1s2.2-.4 3-1.1c.8.7 1.8 1.1 3 1.1.5 0 1-.1 1.5-.3v-1.8c-.5.3-1 .4-1.5.4-1.2 0-2.2-.4-3-1.1-.8.7-1.8 1.1-3 1.1s-2.2-.4-3-1.1c-.8.7-1.8 1.1-3 1.1-.5 0-1-.1-1.5-.4V19c.5.3 1 .5 1.5.5z" />
              </svg>
            </div>
          </div>

          {/* Visual Segmented Distribution Bar */}
          <div
            className="h-3 sm:h-3.5 w-full bg-slate-900/90 rounded-full p-0.5 flex gap-1 border border-white/10 overflow-hidden"
            role="progressbar"
            aria-label="Sector distribution"
          >
            <div
              className="h-full bg-gradient-to-r from-[#F05A28] to-[#FF7745] rounded-l-full transition-all duration-300 hover:brightness-110"
              style={{ width: '50%' }}
              title="Chemicals: 50%"
            />
            <div
              className="h-full bg-gradient-to-r from-[#0284C7] to-[#38BDF8] rounded-sm transition-all duration-300 hover:brightness-110"
              style={{ width: '20%' }}
              title="Pharma: 20%"
            />
            <div
              className="h-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] rounded-sm transition-all duration-300 hover:brightness-110"
              style={{ width: '20%' }}
              title="FIBC & Non-Woven Bags: 20%"
            />
            <div
              className="h-full bg-gradient-to-r from-[#475569] to-[#94A3B8] rounded-r-full transition-all duration-300 hover:brightness-110"
              style={{ width: '10%' }}
              title="Others: 10%"
            />
          </div>

          {/* Graphical Sector Cards / Chips */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 pt-0.5">
            {/* Sector 1: Chemicals */}
            <div className="flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] transition-colors border border-white/5 rounded-xl px-3 py-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#F05A28]/20 border border-[#F05A28]/40 flex items-center justify-center text-[#F05A28] shrink-0">
                <FlaskConical className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-base sm:text-lg font-black text-white leading-none">50%</span>
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-300 truncate">Chemicals</div>
              </div>
            </div>

            {/* Sector 2: Pharma */}
            <div className="flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] transition-colors border border-white/5 rounded-xl px-3 py-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 shrink-0">
                <Pill className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-base sm:text-lg font-black text-white leading-none">20%</span>
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-300 truncate">Pharma</div>
              </div>
            </div>

            {/* Sector 3: FIBC & Non-Woven Bags */}
            <div className="flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] transition-colors border border-white/5 rounded-xl px-3 py-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0">
                <Package className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-base sm:text-lg font-black text-white leading-none">20%</span>
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-300 truncate">FIBC &amp; Bags</div>
              </div>
            </div>

            {/* Sector 4: Others */}
            <div className="flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] transition-colors border border-white/5 rounded-xl px-3 py-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-500/20 border border-slate-400/40 flex items-center justify-center text-slate-300 shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-base sm:text-lg font-black text-white leading-none">10%</span>
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-300 truncate">Others</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
