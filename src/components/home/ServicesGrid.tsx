'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      id: 'sea-freight',
      title: 'Sea Freight (FCL / LCL)',
      image: '/images/services/sea-freight.jpg',
      description:
        'Full container loads and LCL consolidation connecting Indian ports to 100+ global destinations.',
      href: '/services#sea-freight',
    },
    {
      id: 'iso-tanks',
      title: 'ISO Tanks & Liquid Bulk',
      image: '/images/services/iso-tanks.jpg',
      description:
        'Certified tank containers for safe transport of food-grade liquids and hazardous chemical bulk.',
      href: '/services#iso-tanks',
    },
    {
      id: 'custom-clearance',
      title: 'Customs Clearance (CHA)',
      image: '/images/services/custom-clearance.jpg',
      description:
        'Licensed in-house customs clearance and documentation at Nhava Sheva, Mundra, and Hazira.',
      href: '/services#custom-clearance',
    },
    {
      id: 'freight-forwarding',
      title: 'International Freight Forwarding',
      image: '/images/services/freight-forwarding.jpg',
      description:
        'Multimodal shipping routes tailored for speed, regulatory compliance, and cost efficiency.',
      href: '/services#freight-forwarding',
    },
    {
      id: 'transportation',
      title: 'Inland Haulage & Transport',
      image: '/images/services/transportation.jpg',
      description:
        'Dedicated container trailers connecting factory gates to port terminals and inland depots.',
      href: '/services#transportation',
    },
    {
      id: 'supply-chain',
      title: 'Supply Chain Management',
      image: '/images/services/supply-chain.jpg',
      description:
        'Strategic shipment planning to minimize port detention, demurrage, and turnaround times.',
      href: '/services#supply-chain',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
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
            End-to-end maritime and inland logistics backed by 14+ years of freight forwarding experience.
          </p>
        </div>

        {/* 6 Clean Cards: 2x2 Grid on Mobile/Tablet, 3 Cols on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-theme-orange/40 hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative aspect-[16/10] sm:aspect-video md:h-48 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-3.5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-theme-blue group-hover:text-theme-orange transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-slate-600 mt-1 sm:mt-2 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-4 border-t border-slate-100">
                  <Link
                    href={service.href}
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-theme-orange hover:text-slate-900 transition-colors"
                  >
                    <span>Learn more</span>
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
