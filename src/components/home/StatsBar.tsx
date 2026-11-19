'use client';

import React from 'react';

export default function StatsBar() {
  return (
    <section aria-label="Key business statistics" className="bg-white py-8 sm:py-12 box-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[clamp(12px,2vw,24px)] box-border">
        
        {/* 4 Cards Grid: 1 col on <380px, 2 cols on mobile/tablet (<1024px), 4 cols on desktop (>=1024px) */}
        <dl className="grid grid-cols-2 max-[379px]:grid-cols-1 lg:grid-cols-4 gap-[clamp(12px,2vw,24px)] items-stretch m-0 p-0 box-border">
          
          {/* Card 1: 350+ Cr */}
          <div className="bg-[#F6F8FC] rounded-[18px] sm:rounded-[22px] p-[clamp(16px,2.5vw,28px)] border border-[#EBF0F8]/80 shadow-[0_2px_8px_rgba(15,23,42,0.03)] flex flex-col justify-between min-w-0 box-border hover:shadow-md transition-shadow">
            <dd className="m-0 font-black text-[#F05A28] tracking-tight leading-none whitespace-nowrap text-[clamp(2rem,4vw,3.5rem)] flex items-baseline">
              <span>350+</span>
              <span className="text-[0.55em] font-extrabold ml-1.5 align-baseline">Cr</span>
            </dd>
            <dt className="m-0 text-[clamp(0.8rem,1.2vw,0.95rem)] leading-[1.4] font-bold text-[#112347] mt-4 pt-2">
              Turnover managed over 3 years
            </dt>
          </div>

          {/* Card 2: 50% */}
          <div className="bg-[#F6F8FC] rounded-[18px] sm:rounded-[22px] p-[clamp(16px,2.5vw,28px)] border border-[#EBF0F8]/80 shadow-[0_2px_8px_rgba(15,23,42,0.03)] flex flex-col justify-between min-w-0 box-border hover:shadow-md transition-shadow">
            <dd className="m-0 font-black text-[#112347] tracking-tight leading-none whitespace-nowrap text-[clamp(2rem,4vw,3.5rem)] flex items-baseline">
              <span>50%</span>
            </dd>
            <dt className="m-0 text-[clamp(0.8rem,1.2vw,0.95rem)] leading-[1.4] font-bold text-[#112347] mt-4 pt-2">
              Business volumes in chemicals
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

          {/* Card 4: 3 */}
          <div className="bg-[#F6F8FC] rounded-[18px] sm:rounded-[22px] p-[clamp(16px,2.5vw,28px)] border border-[#EBF0F8]/80 shadow-[0_2px_8px_rgba(15,23,42,0.03)] flex flex-col justify-between min-w-0 box-border hover:shadow-md transition-shadow">
            <dd className="m-0 font-black text-[#112347] tracking-tight leading-none whitespace-nowrap text-[clamp(2rem,4vw,3.5rem)] flex items-baseline">
              <span>3</span>
            </dd>
            <dt className="m-0 text-[clamp(0.8rem,1.2vw,0.95rem)] leading-[1.4] font-bold text-[#112347] mt-4 pt-2">
              Strategic office locations
            </dt>
          </div>

        </dl>

        {/* Bottom Sector Mix Banner */}
        <div className="bg-[#0E1E38] text-white rounded-[14px] sm:rounded-[16px] px-[clamp(16px,2.5vw,28px)] py-[clamp(12px,1.5vw,18px)] shadow-sm flex items-center justify-between gap-3 sm:gap-4 min-w-0 box-border">
          <div className="text-[clamp(0.78rem,1.1vw,0.95rem)] leading-relaxed text-slate-100 flex-1 min-w-0">
            <span className="font-normal text-slate-300">Sector Mix:</span>{' '}
            <span className="inline-block whitespace-nowrap font-bold text-white">50% Chemicals</span>
            <span className="inline-block whitespace-nowrap"><span className="mx-1.5 opacity-60">•</span><strong className="font-bold text-white">20% Pharma</strong></span>
            <span className="inline-block whitespace-nowrap"><span className="mx-1.5 opacity-60">•</span><strong className="font-bold text-white">20% FIBC &amp; Non-Woven Bags</strong></span>
            <span className="inline-block whitespace-nowrap"><span className="mx-1.5 opacity-60">•</span><strong className="font-bold text-white">10% Others</strong></span>
          </div>

          {/* Orange Cargo Ship Icon (stays vertically centered and never shrinks) */}
          <div className="shrink-0 text-[#F05A28]" aria-hidden="true">
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 14.5l1.6-4.5h12.8l1.6 4.5c.3.1.6.2.8.4l1.2-4.5c.1-.4-.2-.8-.6-.9L19 9V5.5c0-.3-.2-.5-.5-.5h-4c-.3 0-.5.2-.5.5V9H10V6.5c0-.3-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5V9H5.6c-.4 0-.8.3-.9.7L3.1 14.2c.3.1.6.2.9.3z" />
              <path d="M2.5 16.5c1.2 0 2.2-.4 3-1.1.8.7 1.8 1.1 3 1.1s2.2-.4 3-1.1c.8.7 1.8 1.1 3 1.1s2.2-.4 3-1.1c.8.7 1.8 1.1 3 1.1.5 0 1-.1 1.5-.3v-1.8c-.5.3-1 .4-1.5.4-1.2 0-2.2-.4-3-1.1-.8.7-1.8 1.1-3 1.1s-2.2-.4-3-1.1c-.8.7-1.8 1.1-3 1.1s-2.2-.4-3-1.1c-.8.7-1.8 1.1-3 1.1-.5 0-1-.1-1.5-.4V16c.5.3 1 .5 1.5.5z" />
              <path d="M2.5 19.5c1.2 0 2.2-.4 3-1.1.8.7 1.8 1.1 3 1.1s2.2-.4 3-1.1c.8.7 1.8 1.1 3 1.1s2.2-.4 3-1.1c.8.7 1.8 1.1 3 1.1.5 0 1-.1 1.5-.3v-1.8c-.5.3-1 .4-1.5.4-1.2 0-2.2-.4-3-1.1-.8.7-1.8 1.1-3 1.1s-2.2-.4-3-1.1c-.8.7-1.8 1.1-3 1.1s-2.2-.4-3-1.1c-.8.7-1.8 1.1-3 1.1-.5 0-1-.1-1.5-.4V19c.5.3 1 .5 1.5.5z" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
