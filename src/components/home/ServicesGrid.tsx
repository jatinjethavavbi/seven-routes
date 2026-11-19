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
        'Comprehensive export and import freight solutions across major ocean container shipping routes and air freight corridors.',
      href: '/services#freight-forwarding',
    },
    {
      id: 'chemical-logistics',
      title: 'Chemical Export Logistics',
      image: '/images/services/iso-tanks.jpg',
      badge: '60% Business Volume',
      description:
        'Specialised focus on chemical cargo, handling dangerous goods (IMDG classified) and liquid bulk with certified ISO tanks.',
      href: '/services#chemical-logistics',
    },
    {
      id: 'freight-procurement',
      title: 'Freight Procurement',
      image: '/images/services/sea-freight.jpg',
      badge: 'Direct Carrier Contracts',
      description:
        'Proactive shipping line capacity procurement, long-term rate negotiations, and competitive volume tier management.',
      href: '/services#freight-procurement',
    },
    {
      id: 'shipment-execution',
      title: 'Shipment Execution',
      image: '/images/services/transportation.jpg',
      badge: 'End-to-End Coordination',
      description:
        'Container booking, timely depot equipment release, terminal cartage, and complete operational tracking from factory to discharge port.',
      href: '/services#shipment-execution',
    },
    {
      id: 'documentation',
      title: 'Documentation & Compliance',
      image: '/images/services/custom-clearance.jpg',
      badge: 'Statutory Compliance',
      description:
        'Precision issuance of Multimodal Bills of Lading, statutory customs filing, certificate of origin, and full regulatory clearance.',
      href: '/services#documentation',
    },
    {
      id: 'commercial-management',
      title: 'Commercial Management',
      image: '/images/services/supply-chain.jpg',
      badge: 'Credit & Financing',
      description:
        'Upfront freight financing to shipping lines, flexible agreed credit facilities for clients, and seamless commercial coordination.',
      href: '/services#commercial-management',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-2">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight">
            Our Core Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            End-to-end freight solutions and specialised chemical export logistics backed by experienced leadership and proven execution.
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
