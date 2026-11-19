'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Award,
  Headphones,
  Briefcase,
  Globe2,
  TrendingUp,
  UserCheck
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      title: 'Reliability',
      desc: 'Ensuring your container arrives on time with active carrier tracking and zero terminal delays.',
      icon: Clock,
    },
    {
      title: 'Transparency',
      desc: 'Straightforward freight quotes with no hidden port demurrage or unexpected charges.',
      icon: ShieldCheck,
    },
    {
      title: 'Safety & Standards',
      desc: 'Strict hydrostatic testing and steam sanitization for all ISO tanks and hazardous cargo.',
      icon: Award,
    },
    {
      title: 'Direct Client Support',
      desc: 'Dedicated single point of contact for timely milestone updates on your consignments.',
      icon: Headphones,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        
        {/* Simple Normal Page Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-theme-orange mb-2">
                <Link href="/" className="hover:underline text-slate-500">Home</Link>
                <span>/</span>
                <span>About Us</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-theme-blue tracking-tight">
                About Seven Routes Logistics
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Led by seasoned logistics professional Kanika with over 14 years of industry excellence. A trusted Indian freight forwarder, licensed Multimodal Transport Operator (MTO), and specialized ISO tank logistics provider.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Photo: Full natural proportions, zero awkward cropping */}
              <div className="lg:col-span-5">
                <div className="w-full rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-slate-100">
                  <Image
                    src="/images/about/about-operations.jpg"
                    alt="Seven Routes Logistics International Multimodal Operations"
                    width={620}
                    height={450}
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-2">
                    Our Story
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight leading-tight">
                    14+ Years of Industry Leadership &amp; Freight Expertise
                  </h2>
                </div>

                <div className="text-sm sm:text-base text-slate-600 space-y-3 leading-relaxed">
                  <p>
                    <strong>Seven Routes Logistics International Pvt Ltd</strong> combines over 14 years of logistics domain expertise with dynamic entrepreneurial leadership under promoter <strong>Kanika</strong>. Over the years, we have built a reputation for reliable, transparent, and prompt logistics solutions for Indian exporters and importers.
                  </p>
                  <p>
                    With our corporate office in Mumbai and active operational desks at <strong>Nhava Sheva (JNPT), Mundra, Hazira, and Ahmedabad</strong>, our team manages container shipments, liquid bulk in ISO tanks, and in-house customs clearance directly at India&apos;s primary maritime gateways.
                  </p>
                </div>

                {/* 3 Simple Facts */}
                <div className="grid grid-cols-3 gap-4 pt-2 border-t border-slate-100">
                  <div>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-theme-blue">14+</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Years Experience</span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-theme-blue">4</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Port Gateways</span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-theme-blue">100+</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Global Ports</span>
                  </div>
                </div>

                {/* Statutory Checkpoints */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 pt-1">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-theme-orange shrink-0" />
                    <span>Govt. Registered Multimodal Transport Operator (MTO)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-theme-orange shrink-0" />
                    <span>Direct In-House Custom House Agency (CHA)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mission & Vision (Clean & Balanced) */}
        <section className="py-14 sm:py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-3.5">
                <div className="w-11 h-11 rounded-lg bg-orange-50 text-theme-orange flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-theme-blue">
                  Our Mission
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To provide practical, reliable, and cost-effective freight forwarding and liquid bulk transport solutions that keep global supply chains moving without delay.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-3.5">
                <div className="w-11 h-11 rounded-lg bg-orange-50 text-theme-orange flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-theme-blue">
                  Our Vision
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To be recognized as a dependable and transparent Indian logistics partner through consistent service quality, statutory compliance, and lasting client relationships.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Core Principles / Our Values (Clean Touch-Up With Tasteful Icons) */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-2">
                Our Values
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight">
                What We Stand For
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
              {values.map((v, idx) => {
                const IconComponent = v.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-7 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Tasteful Icon Container */}
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-orange-50 text-theme-orange flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-theme-orange group-hover:text-white transition-colors duration-200">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-theme-blue mb-1 sm:mb-2 leading-snug">
                        {v.title}
                      </h4>
                      <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Promoter & Leadership Profile (Kanika) */}
        <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-2">
                Executive Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight">
                Promoter Profile – Kanika
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Seasoned logistics leader bringing over 14 years of international freight forwarding pedigree, global industry exposure, and entrepreneurial vision.
              </p>
            </div>

            {/* Executive Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left: Executive Identity & Highlights */}
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-5">
                  {/* Executive Monogram Avatar */}
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-gradient-to-br from-theme-blue via-[#243350] to-[#182238] flex flex-col items-center justify-center text-white shadow-md border-2 border-theme-orange/30">
                    <span className="text-5xl sm:text-6xl font-extrabold tracking-wider text-theme-orange">K</span>
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1">
                      Promoter &amp; Director
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-theme-blue">Kanika</h3>
                    <p className="text-sm font-semibold text-theme-orange">
                      Promoter &amp; Managing Director
                    </p>
                    <p className="text-xs text-slate-500">
                      Seven Routes Logistics International Pvt Ltd
                    </p>
                  </div>

                  {/* Pedigree Highlights */}
                  <div className="w-full space-y-2.5 pt-3 border-t border-slate-100">
                    <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-theme-blue flex items-center justify-center shrink-0 font-bold text-xs">
                        14+
                      </div>
                      <div className="text-left">
                        <span className="block text-xs font-bold text-slate-800">Years Experience</span>
                        <span className="block text-[11px] text-slate-500">Freight Forwarding &amp; Global Trade</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 text-theme-orange flex items-center justify-center shrink-0 font-bold text-xs">
                        GL
                      </div>
                      <div className="text-left">
                        <span className="block text-xs font-bold text-slate-800">Global Pedigree</span>
                        <span className="block text-[11px] text-slate-500">Nippon Express &amp; Globelink</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs">
                        4+
                      </div>
                      <div className="text-left">
                        <span className="block text-xs font-bold text-slate-800">Business Leadership</span>
                        <span className="block text-[11px] text-slate-500">Steering Seven Routes Growth</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Detailed Narrative */}
                <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  
                  <p>
                    <strong>Kanika</strong> is a seasoned logistics and freight forwarding professional with over <strong>14 years of experience</strong> in the logistics industry, encompassing extensive exposure to freight forwarding, international trade, customer management, and business operations.
                  </p>

                  <p>
                    She has gained valuable industry experience with prominent global logistics and freight forwarding organisations, including <strong>Nippon Express</strong> and <strong>Globelink</strong>, both well-established names in the logistics and supply chain industry. Her experience with these organisations has provided her with a strong understanding of international logistics, freight movement, customer requirements, and industry best practices.
                  </p>

                  <p>
                    Over the years, Kanika has evolved into a young, dynamic, and result-oriented business leader with a strong entrepreneurial mindset. For the past four years, she has been successfully leading and managing a logistics business, overseeing key aspects of business operations, customer relationships, business development, team management, and overall growth.
                  </p>

                  <p>
                    Her combination of 14+ years of industry experience, strong operational understanding, established industry relationships, and entrepreneurial leadership has enabled her to build and manage a sustainable business in a competitive logistics environment.
                  </p>

                  {/* Vision Quote Card */}
                  <div className="mt-6 bg-gradient-to-r from-blue-50/70 via-slate-50 to-orange-50/50 border-l-4 border-theme-orange p-5 sm:p-6 rounded-r-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-theme-orange block mb-1">
                      Promoter&apos;s Vision
                    </span>
                    <blockquote className="text-sm sm:text-base font-medium text-slate-800 italic leading-relaxed">
                      &ldquo;To build a professionally managed, technology-enabled logistics and freight forwarding organisation with a strong focus on customer service, operational excellence, and sustainable long-term growth.&rdquo;
                    </blockquote>
                    <span className="block text-xs font-semibold text-theme-blue mt-2">
                      — Kanika, Promoter &amp; Managing Director
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Bottom Simple CTA */}
        <section className="py-14 sm:py-16 border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Have questions about your shipping or customs clearance?
            </h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Our central operations desk in Mumbai is ready to assist with route planning and rate quotes.
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
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-medium text-sm px-5 py-2.5 rounded-md transition-colors"
              >
                <span>Contact Port Desks</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
