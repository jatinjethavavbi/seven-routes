'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      id: 'freight-forwarding',
      title: 'International Freight Forwarding',
      image: '/images/services/freight-forwarding.jpg',
      badge: 'Multimodal Solutions',
      description:
        'Comprehensive export and import freight solutions managing international ocean container shipping routes and air freight corridors.',
      href: '/services#freight-forwarding',
    },
    {
      id: 'chemical-pharma-handling',
      title: 'Chemical & Pharma Cargo Handling',
      image: '/images/services/iso-tanks.jpg',
      badge: 'Specialised Vertical',
      description:
        'Specialised handling of hazardous chemicals (IMDG Classes 2, 3, 4, 5, 6, 8, 9), certified ISO tanks, and temperature-controlled pharma cargo.',
      href: '/services#chemical-pharma-handling',
    },
    {
      id: 'freight-procurement',
      title: 'Freight Procurement - Ocean & Air Cargo',
      image: '/images/services/sea-freight.jpg',
      badge: 'Ocean (FCL/LCL) & Air',
      description:
        'Proactive capacity procurement from global shipping lines, Tier-1 carrier volume allocations, competitive FCL/LCL ocean freight, and scheduled air cargo.',
      href: '/services#freight-procurement',
    },
    {
      id: 'special-equipment',
      title: 'Special Equipment Handling - OOG, Reefer',
      image: '/images/services/transportation.jpg',
      badge: 'OOG & Reefer Containers',
      description:
        'Specialised Out-of-Gauge (OOG), flat rack, and open-top containers for heavy machinery, alongside advanced Reefer units (-30°C to +30°C) for sensitive perishables.',
      href: '/services#special-equipment',
    },
    {
      id: 'clearance-transportation',
      title: 'Clearance and Local Transportation',
      image: '/images/services/custom-clearance.jpg',
      badge: 'CHA & Inland Haulage',
      description:
        'Licensed Custom House Agency (CHA) port clearance with direct ICEGATE electronic filing and dedicated container trailer fleet for factory-to-port haulage.',
      href: '/services#clearance-transportation',
    },
    {
      id: 'agency-network',
      title: 'Worldwide Agency Network',
      image: '/images/services/supply-chain.jpg',
      badge: 'Global Network & Partners',
      description:
        'Extensive international partner offices across 100+ countries, offering seamless destination customs clearance, DAP/DDP deliveries, and global end-to-end visibility.',
      href: '/services#agency-network',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-2">
            Our Cargo Services
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight">
            Comprehensive Cargo Logistics Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Specialised freight solutions, dedicated chemical &amp; pharma handling, and worldwide network coverage backed by experienced leadership and disciplined execution.
          </p>
        </div>

        {/* 6 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-theme-orange/50 hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative aspect-[16/10] sm:h-48 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-theme-blue/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded shadow">
                  {service.badge}
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-theme-blue group-hover:text-theme-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    href={service.href}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-theme-orange group-hover:text-slate-900 transition-colors"
                  >
                    <span>View details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
