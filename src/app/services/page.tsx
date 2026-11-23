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
  TrendingUp,
  LayoutGrid,
  ShieldCheck,
  Network
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'freight-forwarding',
      title: 'International Freight Forwarding',
      shortTitle: 'Freight Forwarding',
      category: 'Multimodal Export & Import Logistics',
      icon: Globe2,
      image: '/images/services/freight-forwarding.jpg',
      summary:
        'Comprehensive export and import freight solutions managing international ocean and air freight across major global trade corridors.',
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
      id: 'chemical-pharma-handling',
      title: 'Chemical & Pharma Cargo Handling',
      shortTitle: 'Chemical & Pharma',
      category: 'Specialised Cargo Vertical',
      icon: Ship,
      image: '/images/services/iso-tanks.jpg',
      summary:
        'Specialised logistics focus for chemical and pharmaceutical exports, accounting for our core business volumes across hazardous and non-hazardous cargo.',
      overview:
        'Chemical and pharmaceutical logistics demand stringent regulatory adherence, cold chain/temperature stability, technical container readiness, and specialised handling. Our dedicated operations desk possesses deep expertise in handling IMDG-classified dangerous goods across Class 2 (Gases), Class 3 (Flammable Liquids), Class 4 (Flammable Solids), Class 5 (Oxidizers), Class 6 (Toxic Substances), Class 8 (Corrosives), and Class 9 (Miscellaneous Hazards) with full statutory compliance.',
      highlights: [
        'Dedicated chemical & pharma operations desk with 10+ years vertical expertise',
        'Specialised handling of IMDG dangerous goods (Classes 2, 3, 4, 5, 6, 8, and 9)',
        'Certified T11 & T14 UN portable ISO tank containers for liquid bulk',
        'Cold-chain temperature management and packaging verification for pharma exports',
      ],
      ports: 'Nhava Sheva (JNPT), Hazira / Dahej, Mundra, and Global Chem Hubs',
    },
    {
      id: 'freight-procurement',
      title: 'Freight Procurement - Ocean (FCL, LCL) and Air Cargo',
      shortTitle: 'Freight Procurement',
      category: 'Shipping Line & Airline Negotiations',
      icon: TrendingUp,
      image: '/images/services/sea-freight.jpg',
      summary:
        'Strategic capacity procurement from global ocean shipping lines and commercial air carriers, competitive terms negotiation, and volume rate management.',
      overview:
        'Leveraging our extensive industry relationships with leading container shipping lines and international air cargo carriers, we secure committed space allocations and competitive freight tariffs for FCL containerized shipments, scheduled LCL consolidation, and expedited air cargo even during tight market conditions.',
      highlights: [
        'Direct volume contracts with Tier-1 ocean container carriers and airlines',
        'Committed vessel space allocations, container guarantees, and peak-season protection',
        'Transparent ocean tariff structures for FCL containerized and scheduled LCL cargo',
        'Express air freight options for high-value, perishable, and time-critical consignments',
      ],
      ports: 'All Indian Container Ports, Major Air Cargo Terminals & Global Carrier Alliances',
    },
    {
      id: 'special-equipment',
      title: 'Special Equipment Handling - OOG, Reefer',
      shortTitle: 'Special Equipment',
      category: 'Project, Out-of-Gauge & Cold Chain',
      icon: Box,
      image: '/images/services/transportation.jpg',
      summary:
        'Technical engineering and handling of Out-of-Gauge (OOG), flat rack, and open-top containers, alongside advanced refrigerated (Reefer) equipment.',
      overview:
        'Specialized cargo demands customized technical equipment and handling protocols. We provide specialized Open Top (OT), Flat Rack (FR), and Platform containers for heavy machinery and over-dimensional project cargo, as well as microprocessor-controlled Refrigerated (Reefer) containers maintaining precise setpoint temperatures (-30°C to +30°C) for pharmaceuticals, chemicals, and perishables.',
      highlights: [
        'Out of Gauge (OOG) and Project Cargo: Flat Rack, Open Top, and Heavy-Duty Platforms',
        'Complete technical route surveys, lashing, chocking, and crane hook-to-hook supervision',
        'Micro-controlled Reefer container fleet with cold-treatment and humidity control',
        'Pre-trip inspection (PTI) certification and round-the-clock temperature data monitoring',
      ],
      ports: 'Nhava Sheva (JNPT), Mundra, Hazira, Chennai, and Major Port Terminals',
    },
    {
      id: 'clearance-transportation',
      title: 'Clearance and Local Transportation',
      shortTitle: 'Clearance & Transport',
      category: 'Customs House Agency (CHA) & Inland Haulage',
      icon: FileCheck2,
      image: '/images/services/custom-clearance.jpg',
      summary:
        'Licensed Custom House Agency (CHA) customs clearance combined with a dedicated container trailer fleet connecting factory gates to port terminals.',
      overview:
        'Customs clearance bottlenecks and inland haulage delays can cause severe demurrage and operational disruption. Our in-house licensed customs brokers are stationed directly at primary port gates to manage electronic ICEGATE filings, HS code classifications, and cargo inspection, while our container trailer fleet bridges the gap between your manufacturing plant, Container Freight Stations (CFS), and marine docks.',
      highlights: [
        'Direct in-house Custom House Agency (CHA) operations at JNPT, Mundra, and Hazira',
        'Fast electronic ICEGATE documentation, Bill of Entry, and Shipping Bill clearance',
        'Heavy-duty 20ft & 40ft skeletal container trailers and multi-axle chassis for heavy loads',
        'Factory-to-port, CFS-to-terminal, and Inland Container Depot (ICD) haulage connectivity',
      ],
      ports: 'Nhava Sheva (JNPT), Mundra, Hazira, Ahmedabad ICDs, Surat & Regional Belts',
    },
    {
      id: 'agency-network',
      title: 'Worldwide Agency Network',
      shortTitle: 'Worldwide Agency Network',
      category: 'Global Reach & Strategic Partnerships',
      icon: Network,
      image: '/images/services/supply-chain.jpg',
      summary:
        'Strategic international agency agreements and partnerships across 100+ countries covering 6 continents, ensuring seamless global logistics execution.',
      overview:
        'Global trade requires reliable execution at both origin and destination. Seven Routes Logistics maintains an extensive worldwide agency network with trusted overseas partners and exclusive agency arrangements across the USA, Europe, Middle East (UAE), Africa, and Latin America (Brazil). This global footprint allows us to offer smooth destination customs clearance, door delivery (DAP/DDP), warehousing, and local inland transport worldwide.',
      highlights: [
        'Access to trusted agency network partners across 100+ countries on 6 continents',
        'Exclusive agency contracts and strategic coverage in USA, Europe, Africa, Brazil, and UAE',
        'Destination customs clearance, DDP/DAP terms, and last-mile international delivery',
        'Single-window visibility and real-time coordination connecting Indian exporters with global buyers',
      ],
      ports: 'Global Maritime Hubs, Major International Airports & Inland Logistics Corridors',
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
                Our Cargo Services
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Comprehensive cargo solutions: international freight forwarding, specialised chemical &amp; pharma handling, freight procurement, special equipment (OOG &amp; Reefer), port clearance, and a trusted worldwide agency network.
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
                <span>All Cargo Services ({services.length})</span>
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
                        <span>Cargo Service 0{index + 1}</span>
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
                        <span><strong>Coverage:</strong> {service.ports}</span>
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
              Need custom cargo routing, OOG equipment, or worldwide door delivery?
            </h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Our central commercial desk and international agency network are ready to coordinate your shipments with rate efficiency and complete regulatory compliance.
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
