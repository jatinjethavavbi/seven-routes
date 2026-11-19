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
  LayoutGrid
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'sea-freight',
      title: 'Sea Freight (FCL / LCL)',
      shortTitle: 'Sea Freight',
      category: 'Ocean Container Shipping',
      icon: Ship,
      image: '/images/services/sea-freight.jpg',
      summary:
        'Reliable full container load (FCL) bookings and less-than-container load (LCL) consolidation connecting Indian ports to major global destinations.',
      overview:
        'We manage scheduled container shipments with guaranteed vessel space allocations. Whether shipping full 20ft/40ft containers or smaller consolidated cargo, our team handles vessel booking, container pickup, and terminal delivery with complete visibility.',
      highlights: [
        "20' and 40' Standard Dry & High Cube containers",
        'Refrigerated (Reefer) containers for temperature-sensitive cargo',
        'Direct FCL vessel bookings & scheduled LCL consolidation',
        'Port-to-port and complete door-to-door delivery',
      ],
      ports: 'Nhava Sheva (JNPT), Mundra, Hazira, and Chennai',
    },
    {
      id: 'iso-tanks',
      title: 'ISO Tanks & Liquid Bulk',
      shortTitle: 'ISO Tanks',
      category: 'Specialized Liquid Logistics',
      icon: Box,
      image: '/images/services/iso-tanks.jpg',
      summary:
        'Dedicated ISO tank containers engineered for safe international transport of food-grade liquids and hazardous chemical bulk.',
      overview:
        'Seven Routes Logistics specializes in liquid logistics using certified stainless steel ISO tank containers. We handle both food-grade consumables and dangerous goods (IMO classified chemicals) with strict adherence to safety, pressure testing, and sanitization protocols.',
      highlights: [
        'Certified T11 & T14 UN portable ISO tank fleet',
        'Dedicated food-grade only tanks (zero chemical risk)',
        'Class 3, 6, 8 & 9 hazardous chemical handling',
        'Hydrostatic test certification & steam sanitization cleaning',
      ],
      ports: 'Nhava Sheva (JNPT), Mundra Tank Terminals, and Hazira',
    },
    {
      id: 'custom-clearance',
      title: 'Customs Clearance (CHA)',
      shortTitle: 'Customs (CHA)',
      category: 'Licensed Port Documentation',
      icon: FileCheck2,
      image: '/images/services/custom-clearance.jpg',
      summary:
        'Licensed Custom House Agency (CHA) operations ensuring prompt, compliant customs clearance across primary Indian ports.',
      overview:
        'Customs delays can cause heavy demurrage. Our in-house licensed customs brokers are stationed directly at port gates to manage ICEGATE filing, HS code classifications, statutory duty payments, and cargo physical inspections without middleman delays.',
      highlights: [
        'Direct electronic ICEGATE filing with Indian Customs',
        'Accurate HS code classification and duty calculations',
        'Export schemes (RoDTEP, Duty Drawback, EPCG licenses)',
        'In-house customs staff stationed at JNPT, Mundra & Hazira',
      ],
      ports: 'Nhava Sheva (JNPT), Mundra Port, Hazira, and Kandla',
    },
    {
      id: 'freight-forwarding',
      title: 'International Freight Forwarding',
      shortTitle: 'Freight Forwarding',
      category: 'Multimodal Global Logistics',
      icon: Globe2,
      image: '/images/services/freight-forwarding.jpg',
      summary:
        'End-to-end multimodal forwarding designed to streamline international shipping under a single Bill of Lading.',
      overview:
        'We design efficient international shipping routes that combine sea, road, and air transit. As a government-registered Multimodal Transport Operator (MTO), we issue our own Bills of Lading and coordinate with over 100+ worldwide agents.',
      highlights: [
        'Licensed Multimodal Transport Operator (MTO) Bill of Lading',
        'Worldwide agent network in over 100+ countries',
        'Marine cargo insurance and transit risk cover',
        'Customized route planning to optimize transit time & costs',
      ],
      ports: 'All Major Indian Sea Ports & Global Gateways',
    },
    {
      id: 'transportation',
      title: 'Inland Haulage & Transport',
      shortTitle: 'Inland Transport',
      category: 'Container Cartage Fleet',
      icon: Truck,
      image: '/images/services/transportation.jpg',
      summary:
        'Dedicated container trailer fleet providing reliable haulage between factory premises, inland depots, and marine terminals.',
      overview:
        'Our container trailer fleet bridges the gap between your manufacturing plant and the port. We provide timely placement of 20ft and 40ft skeletal trailers, multi-axle chassis for heavy ISO tanks, and real-time tracking from dispatch to terminal gate-in.',
      highlights: [
        'Heavy-duty 20ft & 40ft skeletal container trailers',
        'Multi-axle chassis for heavy cargo and ISO tank containers',
        'GPS-monitored vehicles for real-time tracking',
        'Factory-to-port and CFS-to-terminal container movement',
      ],
      ports: 'Maharashtra, Gujarat, Rajasthan & North Indian ICDs',
    },
    {
      id: 'supply-chain',
      title: 'Supply Chain Management',
      shortTitle: 'Supply Chain',
      category: 'Logistics Optimization',
      icon: Layers,
      image: '/images/services/supply-chain.jpg',
      summary:
        'Strategic shipment planning to eliminate container detention, port demurrage, and turnaround delays.',
      overview:
        'We help exporters and importers streamline their shipping pipelines. By coordinating factory production schedules with shipping line cut-offs and port storage allowances, we minimize container detention fees and transit bottlenecks.',
      highlights: [
        'Container detention and port demurrage reduction strategies',
        'Factory dispatch synchronization with ocean vessel schedules',
        'Buffer storage and Container Freight Station (CFS) management',
        'Single dedicated logistics coordinator for your account',
      ],
      ports: 'Mumbai HQ, Mundra, Hazira, and Ahmedabad Hub',
    },
  ];

  // Default state is 'all' so ALL services appear when visiting the page!
  const [activeTab, setActiveTab] = useState<'all' | string>('all');

  // Handle hash navigation (e.g. /services#iso-tanks)
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
  }, []);

  const selectService = (id: string) => {
    setActiveTab(id);
    if (id === 'all') {
      window.history.replaceState(null, '', '/services');
    } else {
      window.history.replaceState(null, '', `/services#${id}`);
    }
  };

  const selectedService = services.find((s) => s.id === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        
        {/* Simple Page Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-theme-orange mb-2">
                <Link href="/" className="hover:underline text-slate-500">Home</Link>
                <span>/</span>
                <span>Services</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-theme-blue tracking-tight">
                Our Services
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Comprehensive freight forwarding, specialized ISO tank liquid logistics, licensed customs clearance, and inland transport across India and worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Services Showcase Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
              {/* All Services Tab */}
              <button
                type="button"
                onClick={() => selectService('all')}
                className={`px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all inline-flex items-center space-x-1.5 ${
                  activeTab === 'all'
                    ? 'bg-theme-blue text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span>All Services (6)</span>
              </button>

              {/* Individual Service Tabs */}
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = service.id === activeTab;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => selectService(service.id)}
                    className={`px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all inline-flex items-center space-x-1.5 ${
                      isActive
                        ? 'bg-theme-orange text-white shadow-sm'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span>{service.shortTitle}</span>
                  </button>
                );
              })}
            </div>

            {/* VIEW 1: ALL SERVICES GRID (Default when visiting /services) */}
            {activeTab === 'all' && (
              <div className="space-y-12">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.id}
                        className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col group"
                      >
                        {/* Image */}
                        <div className="relative aspect-[16/10] sm:aspect-video md:h-48 w-full bg-slate-100 overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-3.5 sm:p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-semibold text-theme-orange uppercase tracking-wider block mb-1">
                              {service.category}
                            </span>
                            <h3 className="text-sm sm:text-lg font-bold text-theme-blue group-hover:text-theme-orange transition-colors line-clamp-2">
                              {service.title}
                            </h3>
                            <p className="text-[11px] sm:text-sm text-slate-600 mt-1 sm:mt-2 leading-relaxed line-clamp-3">
                              {service.summary}
                            </p>

                            <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-100 flex items-center space-x-1.5 text-[10px] sm:text-xs text-slate-500">
                              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 shrink-0" />
                              <span className="truncate">{service.ports}</span>
                            </div>
                          </div>

                          {/* Action Button: Opens Detail View */}
                          <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-4 border-t border-slate-100">
                            <button
                              type="button"
                              onClick={() => selectService(service.id)}
                              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-theme-orange hover:text-slate-900 transition-colors"
                            >
                              <span>View Full Details</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* VIEW 2: INDIVIDUAL SERVICE DETAIL (When a service is clicked) */}
            {activeTab !== 'all' && selectedService && (
              <div>
                {/* Detail Card */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    
                    {/* Left: Crisp Image */}
                    <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[360px] lg:min-h-full bg-slate-100">
                      <Image
                        src={selectedService.image}
                        alt={selectedService.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Right: Clean & Clear Details */}
                    <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
                      
                      {/* Category & Title */}
                      <div>
                        <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-1">
                          {selectedService.category}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight">
                          {selectedService.title}
                        </h2>
                      </div>

                      {/* Overview */}
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {selectedService.overview}
                      </p>

                      {/* Key Capabilities */}
                      <div className="space-y-3 pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                          Key Capabilities &amp; Equipment
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {selectedService.highlights.map((point, idx) => (
                            <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-theme-orange shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Port Coverage */}
                      <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 flex items-start sm:items-center space-x-2.5 text-xs text-slate-700">
                        <MapPin className="w-4 h-4 text-theme-orange shrink-0 mt-0.5 sm:mt-0" />
                        <span>
                          <strong>Primary Port Hubs:</strong> {selectedService.ports}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="pt-2 flex flex-wrap items-center gap-3.5">
                        <Link
                          href="/#quote"
                          className="bg-theme-orange hover:bg-theme-orangeHover text-white font-medium text-sm px-6 py-3 rounded-md transition-colors shadow-sm inline-flex items-center space-x-2"
                        >
                          <span>Inquire for {selectedService.shortTitle}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>

                        <button
                          type="button"
                          onClick={() => selectService('all')}
                          className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-medium text-sm px-5 py-3 rounded-md transition-colors"
                        >
                          View Other Services
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            )}

            {/* Assistance Banner */}
            <div className="mt-12 p-6 sm:p-8 bg-slate-50 rounded-lg border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Have a custom shipping or ISO tank requirement?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Our central logistics operations desk in Mumbai can evaluate your cargo routes and rates.
                </p>
              </div>
              <Link
                href="/#quote"
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs uppercase tracking-wider px-5 py-3 rounded-md transition-colors shrink-0"
              >
                Request a Freight Quote
              </Link>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
