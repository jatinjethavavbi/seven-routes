'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  Network,
  Cog,
  ChevronLeft,
  ChevronRight
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
        'Specialised logistics focus for chemical and pharmaceutical exports, serving 70+ chemical exporters across hazardous and non-hazardous cargo.',
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
    {
      id: 'textile-machinery-imports',
      title: 'Textile Machinery Imports',
      shortTitle: 'Textile Machinery',
      category: 'China-to-India Import Specialisation',
      icon: Cog,
      image: '/images/services/textile-machinery.jpg',
      summary:
        'We make it easy, safe, and economical to import cutting-edge textile machinery from China to India, cutting machinery import costs by 15–25% with complete compliance management.',
      overview:
        'We make it easy, safe, and economical to import cutting-edge textile machinery from China to India. Our specialized import service, trusted by manufacturers throughout India, is engineered to minimize operational friction and maximize landed value. Backed by vetted supplier networks across China and experienced local logistical partners, we manage everything from Chinese factory pickup to customs clearance in India, routinely reducing the overall cost of importing machinery by 15%–25%.',
      highlights: [
        '15%–25% Cost Reduction: Direct procurement routing, consolidated freight tariffs, and minimized port detention',
        'A Compliance-Centered Method: Complete paperwork, BIS certification, and EPCG eligibility ensuring 100% adherence to Indian trade and legal requirements',
        'China-to-India Import Knowledge: Factory pickup in China, port drayage, containerized sea freight, and express customs clearance in India',
        'Committed Customer Service: End-to-end guidance from machinery evaluation to physical delivery at your production facility',
      ],
      ports: 'Shanghai, Ningbo, Qingdao, Shenzhen to Nhava Sheva (JNPT), Hazira & Mundra',
    },
  ];

  const [activeTab, setActiveTab] = useState<'all' | string>('all');
  const [isStuck, setIsStuck] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // Sync state with URL (?category=... or #hash)
  useEffect(() => {
    const handleUrlState = () => {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category');
      const hash = window.location.hash.replace('#', '');
      const target = cat || hash;
      if (target && services.some((s) => s.id === target)) {
        setActiveTab(target);
      } else {
        setActiveTab('all');
      }
    };

    handleUrlState();
    window.addEventListener('popstate', handleUrlState);
    window.addEventListener('hashchange', handleUrlState);
    return () => {
      window.removeEventListener('popstate', handleUrlState);
      window.removeEventListener('hashchange', handleUrlState);
    };
  }, [services]);

  // Tab selection with URL query update
  const handleSelectTab = useCallback((id: string) => {
    setActiveTab(id);
    const url = new URL(window.location.href);
    if (id === 'all') {
      url.searchParams.delete('category');
      url.hash = '';
    } else {
      url.searchParams.set('category', id);
      url.hash = id;
    }
    window.history.pushState(null, '', url.toString());
  }, []);

  // Sticky detection via Sentinel & IntersectionObserver
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    // The header is 80px high, so sentinel offset aligns with sticky boundary
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '-80px 0px 0px 0px',
        threshold: 0,
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Overflow scroll checking for fade edges & arrow visibility
  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  // Scroll active tab into view centered
  useEffect(() => {
    const activeEl = tabRefs.current[activeTab];
    if (activeEl) {
      activeEl.scrollIntoView({
        inline: 'center',
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [activeTab]);

  // Desktop horizontal scroll arrow helpers (60% width scroll)
  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  // Keyboard navigation for tablist (Left/Right, Home/End)
  const handleKeyDown = (e: React.KeyboardEvent, currentId: string) => {
    const tabs = ['all', ...services.map((s) => s.id)];
    const currentIndex = tabs.indexOf(currentId);
    let nextIndex = currentIndex;

    if (e.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextTabId = tabs[nextIndex];
    handleSelectTab(nextTabId);
    tabRefs.current[nextTabId]?.focus();
  };

  // Drag-to-scroll & mouse wheel horizontal scroll on desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const el = scrollContainerRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    if (Math.abs(e.deltaX) === 0 && Math.abs(e.deltaY) > 0) {
      el.scrollLeft += e.deltaY;
    }
  };

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
                Comprehensive cargo solutions: international freight forwarding, specialised chemical &amp; pharma handling, freight procurement, special equipment (OOG &amp; Reefer), port clearance, textile machinery imports, and a trusted worldwide agency network.
              </p>
            </div>
          </div>
        </section>

        {/* Sentinel for IntersectionObserver sticky detection */}
        <div ref={sentinelRef} className="h-0 w-full pointer-events-none" aria-hidden="true" />

        {/* Sticky Tab Filter Navigation Bar */}
        <nav
          aria-label="Cargo services"
          style={{
            ['--bar-height' as string]: '64px',
            ['--pill-height' as string]: '40px',
            ['--pill-height-mobile' as string]: '32px',
            ['--gap-pill' as string]: '10px',
            ['--gap-icon' as string]: '8px',
            ['--color-accent' as string]: '#F05A28',
            ['--color-pill-bg' as string]: '#EEF1F5',
            ['--color-pill-text' as string]: '#334155',
            ['--radius-pill' as string]: '999px',
            ['--blur-amount' as string]: '12px',
            ['--transition-speed' as string]: '0.2s',
          }}
          className={`sticky top-20 z-40 w-full bg-white/95 backdrop-blur-[12px] border-b border-slate-200/80 transition-shadow duration-300 ${
            isStuck ? 'shadow-[0_4px_16px_rgba(0,0,0,0.06)]' : ''
          }`}
        >
          <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 py-2 sm:py-3 flex items-center gap-1.5 sm:gap-2">

            {/* Left Circular Arrow (Desktop Only - sits beside track, never overlaps pills) */}
            {canScrollLeft && (
              <button
                type="button"
                onClick={() => scrollByAmount('left')}
                aria-label="Scroll categories left"
                className="hidden lg:flex w-8 h-8 rounded-full bg-white border border-slate-200/90 shadow-sm items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all shrink-0 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2]" />
              </button>
            )}

            {/* Pill Track Wrapper with Edge Fade Gradients */}
            <div className="flex-1 min-w-0 relative">
              {/* Left Fade Mask */}
              <div
                className={`pointer-events-none absolute left-0 top-0 bottom-0 w-5 sm:w-8 bg-gradient-to-r from-white via-white/80 to-transparent z-10 transition-opacity duration-200 ${
                  canScrollLeft ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden="true"
              />

              {/* Horizontal Pill Row - Smooth Native Touch on Mobile, Drag/Wheel on Desktop */}
              <div
                ref={scrollContainerRef}
                role="tablist"
                aria-orientation="horizontal"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                onWheel={handleWheel}
                className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto select-none py-1 scrollbar-none [scroll-snap-type:x_proximity] w-full px-0.5 sm:px-1"
                style={{
                  scrollbarWidth: 'none',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                {/* All Cargo Services Tab */}
                <button
                  ref={(el) => { tabRefs.current['all'] = el; }}
                  role="tab"
                  id="tab-all"
                  aria-selected={activeTab === 'all'}
                  aria-controls="services-grid"
                  type="button"
                  tabIndex={activeTab === 'all' ? 0 : -1}
                  onClick={() => handleSelectTab('all')}
                  onKeyDown={(e) => handleKeyDown(e, 'all')}
                  className={`h-[32px] sm:h-[40px] px-2.5 sm:px-4 rounded-full flex items-center gap-1.5 sm:gap-2 whitespace-nowrap text-[11.5px] sm:text-[14px] font-medium tracking-[0.005em] shrink-0 border transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-orange focus-visible:ring-offset-2 active:scale-[0.97] motion-reduce:transition-none motion-reduce:transform-none ${
                    activeTab === 'all'
                      ? 'bg-theme-orange text-white border-transparent shadow-[0_6px_16px_rgba(240,90,40,0.28)]'
                      : 'bg-[#EEF1F5] text-[#334155] border-transparent hover:bg-[#E2E8F0] hover:text-[#0F172A] hover:-translate-y-[1px]'
                  }`}
                >
                  <LayoutGrid className={`w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] stroke-[1.75] shrink-0 ${activeTab === 'all' ? 'text-white' : 'text-[#475569]'}`} />
                  <span>All Cargo Services</span>
                  <span
                    className={`ml-1 px-1.5 py-0.2 rounded-full text-[9.5px] sm:text-[11px] font-semibold transition-colors ${
                      activeTab === 'all'
                        ? 'bg-white/25 text-white'
                        : 'bg-slate-200/90 text-slate-700'
                    }`}
                  >
                    {services.length}
                  </span>
                </button>

                {/* Service Tabs */}
                {services.map((s) => {
                  const IconComponent = s.icon;
                  const isActive = activeTab === s.id;
                  return (
                    <button
                      key={s.id}
                      ref={(el) => { tabRefs.current[s.id] = el; }}
                      role="tab"
                      id={`tab-${s.id}`}
                      aria-selected={isActive}
                      aria-controls={s.id}
                      type="button"
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => handleSelectTab(s.id)}
                      onKeyDown={(e) => handleKeyDown(e, s.id)}
                      className={`h-[32px] sm:h-[40px] px-2.5 sm:px-4 rounded-full flex items-center gap-1.5 sm:gap-2 whitespace-nowrap text-[11.5px] sm:text-[14px] font-medium tracking-[0.005em] shrink-0 border transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-orange focus-visible:ring-offset-2 active:scale-[0.97] motion-reduce:transition-none motion-reduce:transform-none ${
                        isActive
                          ? 'bg-theme-orange text-white border-transparent shadow-[0_6px_16px_rgba(240,90,40,0.28)]'
                          : 'bg-[#EEF1F5] text-[#334155] border-transparent hover:bg-[#E2E8F0] hover:text-[#0F172A] hover:-translate-y-[1px]'
                      }`}
                    >
                      <IconComponent className={`w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] stroke-[1.75] shrink-0 ${isActive ? 'text-white' : 'text-[#475569]'}`} />
                      <span>{s.shortTitle}</span>
                    </button>
                  );
                })}
              </div>

              {/* Right Fade Mask */}
              <div
                className={`pointer-events-none absolute right-0 top-0 bottom-0 w-5 sm:w-8 bg-gradient-to-l from-white via-white/80 to-transparent z-10 transition-opacity duration-200 ${
                  canScrollRight ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden="true"
              />
            </div>

            {/* Right Circular Arrow (Desktop Only - sits beside track, never overlaps pills) */}
            {canScrollRight && (
              <button
                type="button"
                onClick={() => scrollByAmount('right')}
                aria-label="Scroll categories right"
                className="hidden lg:flex w-8 h-8 rounded-full bg-white border border-slate-200/90 shadow-sm items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all shrink-0 active:scale-95"
              >
                <ChevronRight className="w-4 h-4 stroke-[2]" />
              </button>
            )}

          </div>
        </nav>

        {/* Services Detail List */}
        <section id="services-grid" className="py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
            {displayedServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                role="tabpanel"
                aria-labelledby={`tab-${service.id}`}
                className="scroll-mt-[150px] sm:scroll-mt-[170px] rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:border-slate-300 transition-all"
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
