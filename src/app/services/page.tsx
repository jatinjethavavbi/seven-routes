'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Ship, 
  Box, 
  FileCheck2, 
  Globe2, 
  Truck, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  PhoneCall,
  LayoutGrid,
  ShieldCheck,
  TrendingUp,
  Percent,
  CreditCard
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'freight-forwarding',
      title: 'International Freight Forwarding',
      shortTitle: 'Freight Forwarding',
      category: 'Export & Import Logistics',
      icon: Globe2,
      image: '/images/services/freight-forwarding.jpg',
      summary:
        'Comprehensive export and import freight solutions managing international sea and air freight across all major global trade corridors.',
      overview:
        'As a licensed Multimodal Transport Operator (MTO), Seven Routes Logistics delivers reliable end-to-end freight forwarding. We manage full container loads (FCL), consolidated cargo (LCL), and specialized air shipments under our own Multimodal Bills of Lading, backed by strong worldwide partner networks.',
      highlights: [
        'Global FCL container bookings and scheduled LCL consolidation',
        'Licensed Multimodal Transport Operator (MTO) Bill of Lading issuance',
        'Door-to-door and port-to-port multimodal cargo delivery',
        'Coordinated transit tracking across global sea and air routes',
      ],
      ports: 'Nhava Sheva (JNPT), Mundra, Hazira, and Global Gateways',
    },
    {
      id: 'chemical-logistics',
      title: 'Chemical Export Logistics',
      shortTitle: 'Chemical Logistics',
      category: 'Specialised Cargo Vertical (60% Volume)',
      icon: Ship,
      image: '/images/services/iso-tanks.jpg',
      summary:
        'Specialised logistics focus for chemical exports, accounting for approx. 60% of our business volumes across hazardous and non-hazardous cargo.',
      overview:
        'Chemical logistics demands stringent regulatory adherence, technical container readiness, and specialised handling. Our dedicated chemical operations desk possesses deep expertise in handling IMDG-classified dangerous goods (Classes 3, 6, 8, 9) and non-hazardous industrial chemicals with full statutory compliance.',
      highlights: [
        'Dedicated chemical operations desk with 10+ years vertical expertise',
        'Specialised handling of IMDG dangerous goods (Classes 3, 6, 8, and 9)',
        'Container selection, packing inspection, and MSDS verification',
        'Stringent port terminal safety compliance and stowage approvals',
      ],
      ports: 'Nhava Sheva (JNPT), Hazira / Dahej, Mundra, and Global Chem Hubs',
    },
    {
      id: 'freight-procurement',
      title: 'Freight Procurement',
      shortTitle: 'Freight Procurement',
      category: 'Shipping Line Negotiations & Rates',
      icon: TrendingUp,
      image: '/images/services/sea-freight.jpg',
      summary:
        'Strategic capacity procurement from global shipping lines, competitive commercial terms negotiation, and volume rate management.',
      overview:
        'Leveraging our extensive industry relationships with leading container shipping lines and cumulative volume track record of over ₹350 crore, we secure committed vessel space allocations and competitive freight tariffs even during tight market conditions.',
      highlights: [
        'Direct negotiations with Tier-1 ocean container carriers',
        'Committed vessel space allocations and equipment guarantees',
        'Transparent freight pricing with index-linked or fixed tier structures',
        'Proactive monitoring of global freight indices and blank sailings',
      ],
      ports: 'All Indian Container Ports & Major International Carrier Alliances',
    },
    {
      id: 'shipment-execution',
      title: 'Shipment Execution',
      shortTitle: 'Shipment Execution',
      category: 'Operational Booking & Coordination',
      icon: Truck,
      image: '/images/services/transportation.jpg',
      summary:
        'Precision container booking, equipment placement, on-dock terminal handling, and end-to-end shipment execution through to discharge.',
      overview:
        'Our experienced ground operations team ensures error-free container release, survey verification, factory loading coordination, terminal gate-in before cut-off, and active onboard tracking until cargo arrives safely at destination discharge port.',
      highlights: [
        'Rapid booking issuance and equipment release order processing',
        'Factory container placement coordination and terminal gate-in tracking',
        'Continuous monitoring of shipping line cut-offs and feeder schedules',
        'Dedicated single-point coordinator for live milestone status updates',
      ],
      ports: 'Mumbai, Mundra, Hazira, Surat, Ahmedabad, and Hinterland ICDs',
    },
    {
      id: 'documentation',
      title: 'Documentation & Compliance',
      shortTitle: 'Documentation & CHA',
      category: 'Bill of Lading & Statutory Filings',
      icon: FileCheck2,
      image: '/images/services/custom-clearance.jpg',
      summary:
        'Flawless Bill of Lading generation, statutory customs clearance filing, certificate management, and full regulatory trade compliance.',
      overview:
        'Documentation errors create expensive port demurrage and customs delays. Our documentation desk handles accurate Multimodal Bill of Lading issuance, ICEGATE electronic filings, export licenses, COO certificates, and regulatory approvals with maximum accuracy.',
      highlights: [
        'Prompt and accurate Multimodal Bill of Lading (MBL/HBL) issuance',
        'Statutory customs filing and HS code verification under Indian Customs',
        'Regulatory certificates, NOCs, and export incentive documentation',
        'Licensed operations adhering to FMC, MTO, and IEC regulations',
      ],
      ports: 'Nhava Sheva (JNPT), Mundra Port, Hazira, and Central Customs Desks',
    },
    {
      id: 'commercial-management',
      title: 'Commercial Management',
      shortTitle: 'Commercial & Credit',
      category: 'Upfront Payments & Customer Credit',
      icon: CreditCard,
      image: '/images/services/supply-chain.jpg',
      summary:
        'Upfront freight payment to shipping lines and agreed credit facilities to exporters and importers to support working capital.',
      overview:
        'Under our proven business model, Seven Routes Logistics makes upfront freight payments directly to shipping lines, negotiating commercial credit terms that enable exporters and importers to optimize their liquidity and concentrate on core manufacturing and trading.',
      highlights: [
        'Upfront freight payments to ocean carriers ensuring instant BL release',
        'Tailored and agreed commercial credit facilities for regular clients',
        'Transparent invoicing with consolidated disbursement accounts',
        'Financial discipline ensuring seamless liquidity throughout transit',
      ],
      ports: 'Corporate Operations Desk, Mumbai',
    },
    {
      id: 'iso-tanks',
      title: 'ISO Tanks & Liquid Bulk Logistics',
      shortTitle: 'ISO Tanks',
      category: 'Certified Liquid Bulk Fleet',
      icon: Box,
      image: '/images/services/iso-tanks.jpg',
      summary:
        'Certified T11 and T14 ISO tank containers engineered for safe domestic and international transport of liquid chemicals and food-grade bulk.',
      overview:
        'Equipped with 316L stainless steel pressure shells, steam-heating manifolds, and emergency discharge valves, our ISO tank operations provide dependable transport for liquid chemicals, hazardous solvents, and bulk consumables with zero contamination risk.',
      highlights: [
        'Certified T11 & T14 UN portable ISO tank container operations',
        'Handling of hazardous liquid chemicals and dedicated food-grade liquids',
        'Periodic hydrostatic test certifications and steam sanitization reports',
        'Specialised multi-axle skeletal chassis haulage from factory to dock',
      ],
      ports: 'Nhava Sheva, Mundra Liquid Terminals, and Hazira Port',
    },
  ];

  const [activeTab, setActiveTab] = useState<'all' | string>('all');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && services.some((s) => s.id === hash)) {
        setActiveTab(hash);
      } else {
        setActiveTab('all');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [services]);

  const displayedServices =
    activeTab === 'all'
      ? services
      : services.filter((s) => s.id === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        
        {/* Header Section */}
        <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-theme-orange mb-2">
                <Link href="/" className="hover:underline text-slate-500">Home</Link>
                <span>/</span>
                <span>Our Services</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-theme-blue tracking-tight">
                Our Logistics &amp; Freight Services
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Comprehensive freight solutions with a specialised focus on chemical exports. Backed by ₹350+ Cr managed turnover, experienced leadership, and licenses from FMC, MTO, and IEC.
              </p>
            </div>
          </div>
        </section>

        {/* Tab Filter Navigation */}
        <div className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-sm overflow-x-auto py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-max">
              <button
                onClick={() => {
                  setActiveTab('all');
                  window.location.hash = '';
                }}
                className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === 'all'
                    ? 'bg-theme-orange text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>All Capabilities ({services.length})</span>
              </button>

              {services.map((s) => {
                const IconComponent = s.icon;
                const isActive = activeTab === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveTab(s.id);
                      window.location.hash = s.id;
                    }}
                    className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-theme-blue text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{s.shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Services Detail List */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
            {displayedServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:border-slate-300 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Photo Column */}
                  <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:h-full bg-slate-100 min-h-[260px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-theme-blue/90 text-white text-xs font-bold px-3 py-1 rounded shadow">
                      {service.category}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center space-x-2 text-xs font-bold text-theme-orange uppercase tracking-wider mb-2">
                        <span>Service 0{index + 1}</span>
                      </div>
                      
                      <h2 className="text-xl sm:text-2xl font-extrabold text-theme-blue">
                        {service.title}
                      </h2>

                      <p className="text-sm font-medium text-slate-700 mt-2 leading-relaxed">
                        {service.summary}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                        {service.overview}
                      </p>

                      {/* Highlights */}
                      <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                        <span className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                          Key Capabilities:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {service.highlights.map((h, i) => (
                            <div key={i} className="flex items-start space-x-2">
                              <CheckCircle2 className="w-4 h-4 text-theme-orange shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Operational Gateway & CTA */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div className="flex items-center space-x-1.5 text-slate-600">
                        <MapPin className="w-4 h-4 text-theme-orange shrink-0" />
                        <span><strong>Operational Desks:</strong> {service.ports}</span>
                      </div>

                      <Link
                        href="/#quote"
                        className="inline-flex items-center justify-center space-x-2 bg-theme-orange hover:bg-theme-orangeHover text-white font-semibold px-4 py-2 rounded-md transition-colors shadow-sm text-xs shrink-0"
                      >
                        <span>Inquire About Rates</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 sm:py-16 border-t border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Need custom routing or volume freight capacity?
            </h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Our central commercial desk in Mumbai is ready to assist with shipping line negotiations, container allocations, and credit arrangements.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3.5">
              <Link
                href="/#quote"
                className="bg-theme-orange hover:bg-theme-orangeHover text-white font-medium text-sm px-6 py-2.5 rounded-md transition-colors shadow-sm inline-flex items-center space-x-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-medium text-sm px-5 py-2.5 rounded-md transition-colors"
              >
                <span>Contact Our Offices</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
