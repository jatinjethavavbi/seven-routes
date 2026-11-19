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
  UserCheck,
  Building2,
  Ship,
  FileCheck2,
  Boxes,
  Percent
} from 'lucide-react';

export default function AboutPage() {
  const performanceIndicators = [
    { indicator: 'Historical turnover managed over 3 years', value: '₹350+ crore' },
    { indicator: 'Gross profit margin', value: '9%' },
    { indicator: 'Operating expenses', value: '5%' },
    { indicator: 'Net profit margin', value: '4%' },
    { indicator: 'Chemical business contribution', value: '60%' },
    { indicator: 'Total Shipments Handled', value: '20,000+ TEUs' },
  ];

  const competitiveStrengths = [
    {
      title: 'Experienced Leadership with Global Exposure',
      desc: 'Proven background with top-tier international freight and supply chain giants including DHL, Maersk, Nippon Express, and Globelink.',
    },
    {
      title: 'Specialised Chemical Export Expertise',
      desc: 'Deep domain expertise in chemical logistics contributing 60% of business volume, with robust handling of hazardous and non-hazardous bulk.',
    },
    {
      title: 'Established Customer & Shipping Line Relationships',
      desc: 'Strong volume contracts, carrier allocations, and strategic rapport across premier global container shipping lines.',
    },
    {
      title: 'End-to-End Freight Procurement & Execution',
      desc: 'Integrated logistics coordination from factory dispatch, container booking, customs clearance, and terminal execution to destination port delivery.',
    },
    {
      title: 'Commercial Discipline & Customer Credit Management',
      desc: 'Upfront freight financing to ocean carriers coupled with agreed credit facilities to empower exporters and importers without liquidity bottlenecks.',
    },
  ];

  const values = [
    {
      title: 'Reliability & Execution',
      desc: 'Ensuring your container arrives on time with active carrier tracking, secured space allocations, and zero terminal delays.',
      icon: Clock,
    },
    {
      title: 'Transparency & Integrity',
      desc: 'Straightforward freight quotes with no hidden port demurrage, clear documentation, and ethical trade practices.',
      icon: ShieldCheck,
    },
    {
      title: 'Specialised Safety Standards',
      desc: 'Stringent IMDG code adherence for hazardous chemicals, hydrostatic testing for ISO tanks, and comprehensive risk mitigation.',
      icon: Award,
    },
    {
      title: 'Direct Client Support',
      desc: 'Dedicated single point of contact across our Mumbai, Ahmedabad, and Surat teams for timely milestone updates on your consignments.',
      icon: Headphones,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        
        {/* Page Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-theme-orange mb-2">
                <Link href="/" className="hover:underline text-slate-500">Home</Link>
                <span>/</span>
                <span>About Us</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-theme-blue tracking-tight">
                About Seven Routes Logistics International Pvt. Ltd.
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Connecting Businesses. Moving Possibilities. Freight forwarding expertise with a specialised focus on chemical exports.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview & Story */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Photo */}
              <div className="lg:col-span-5">
                <div className="w-full rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-slate-100">
                  <Image
                    src="/images/about/about-operations.jpg"
                    alt="Seven Routes Logistics International Operations"
                    width={620}
                    height={450}
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Right Story Text */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-2">
                    Company Profile
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight leading-tight">
                    Freight Forwarding Expertise with a Specialised Focus on Chemical Exports
                  </h2>
                </div>

                <div className="text-sm sm:text-base text-slate-600 space-y-3 leading-relaxed">
                  <p>
                    <strong>Seven Routes Logistics International Pvt. Ltd.</strong> is a professionally managed freight forwarding company established by experienced logistics professionals with strong knowledge of international trade and supply chain operations.
                  </p>
                  <p>
                    The company has approximately <strong>30 professionals across Mumbai, Ahmedabad, and Surat</strong>, with most team members bringing more than 10 years of logistics industry experience.
                  </p>
                  <p>
                    The company specialises in international freight forwarding, particularly chemical exports. Approximately <strong>60% of its business volumes</strong> are contributed by the chemical vertical.
                  </p>
                  <p>
                    Seven Routes builds on the business operated under <strong>Pazago Logistics</strong> by the same core team over the last three years. During this period, the team managed cumulative turnover of over <strong>₹350 crore</strong> while maintaining healthy profitability. This historical performance reflects the experience and track record of the team, and is not standalone turnover of the newly formed entity.
                  </p>
                </div>

                {/* Statutory Badges */}
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <span className="px-3 py-1 bg-blue-50 text-theme-blue border border-blue-200 rounded-full">
                    Licensed by FMC
                  </span>
                  <span className="px-3 py-1 bg-orange-50 text-theme-orange border border-orange-200 rounded-full">
                    Licensed Multimodal Transport Operator (MTO)
                  </span>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                    IEC Licensed
                  </span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full">
                    Estd. 2026
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Business Model Section */}
        <section className="py-14 sm:py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-2">
                How We Operate
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight">
                Our Business Model
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                We procure freight capacity from shipping lines, negotiate commercial terms, and provide freight solutions and agreed credit facilities to exporters and importers. We arrange container bookings, make freight payments to shipping lines upfront, manage shipment documentation, and coordinate the process through to completion. This enables customers to focus on their core export and import activities while we manage the logistics process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-theme-blue flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h3 className="text-base font-bold text-theme-blue">Capacity Procurement &amp; Terms</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We secure ocean and air cargo space directly from premier carriers and negotiate optimal commercial rates for client shipments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-theme-orange flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h3 className="text-base font-bold text-theme-blue">Upfront Payment &amp; Credit</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We make freight payments to shipping lines upfront and extend tailored credit facilities to exporters and importers for seamless cash flow.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h3 className="text-base font-bold text-theme-blue">End-to-End Execution</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We coordinate equipment booking, manage documentation (Bill of Lading, regulatory compliance), and track through to discharge and delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Performance Indicators Table */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-2">
                Proven Track Record
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight">
                Business Performance Indicators
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Demonstrated operational and commercial success managed by the core team over the last 3 years.
              </p>
            </div>

            <div className="overflow-hidden border border-slate-200 rounded-2xl shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-6 py-4">Indicator</th>
                    <th scope="col" className="px-6 py-4">Performance Metric</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
                  {performanceIndicators.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="px-6 py-4 font-medium text-slate-900">{row.indicator}</td>
                      <td className="px-6 py-4 font-bold text-theme-blue">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="bg-slate-50 px-6 py-3 text-xs text-slate-500 border-t border-slate-200">
                <em>Note:</em> Historical turnover and profitability figures relate to business managed by the same core team under Pazago Logistics. They do not represent standalone financial performance of Seven Routes Logistics International Pvt. Ltd.
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Strengths */}
        <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-2">
                Why Choose Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight">
                Our Competitive Strengths
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitiveStrengths.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2.5">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-theme-orange flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-theme-blue">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}

              {/* Vision Card */}
              <div className="bg-gradient-to-br from-theme-blue to-[#182238] text-white p-6 rounded-xl shadow-sm space-y-2.5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-theme-orange uppercase tracking-wider block mb-1">
                    Our Vision
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">Sustainable &amp; Technology-Enabled Growth</h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                    &ldquo;To build a professionally managed, scalable and technology-enabled logistics organisation with a strong focus on chemical exports, operational excellence, customer satisfaction and sustainable long-term growth.&rdquo;
                  </p>
                </div>
                <div className="text-[11px] text-theme-orange font-bold uppercase tracking-wider pt-2">
                  Seven Routes — Your Trusted Partner
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROMOTER PROFILES SECTION */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-2">
                Executive Leadership
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-theme-blue tracking-tight">
                Promoter Profiles
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Experienced people. Disciplined execution. A focused platform for sustainable growth.
              </p>
            </div>

            <div className="space-y-12">
              
              {/* Profile 1: Kanika */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Avatar & Badges */}
                  <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-theme-blue to-[#182238] flex flex-col items-center justify-center text-white shadow-md border-2 border-theme-orange/40">
                      <span className="text-5xl sm:text-6xl font-extrabold text-theme-orange">K</span>
                      <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1">Director</span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-theme-blue">Kanika</h3>
                      <p className="text-sm font-semibold text-theme-orange">Director &amp; Promoter</p>
                      <p className="text-xs text-slate-500">Seven Routes Logistics International Pvt. Ltd.</p>
                    </div>

                    <div className="w-full space-y-2 pt-2 border-t border-slate-200">
                      <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center space-x-3">
                        <div className="w-7 h-7 rounded-full bg-blue-100 text-theme-blue flex items-center justify-center shrink-0 font-bold text-xs">
                          14+
                        </div>
                        <div className="text-left text-xs">
                          <span className="font-bold text-slate-800 block">14+ Years Logistics Experience</span>
                          <span className="text-slate-500 text-[11px]">Freight forwarding &amp; international trade</span>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center space-x-3">
                        <div className="w-7 h-7 rounded-full bg-orange-100 text-theme-orange flex items-center justify-center shrink-0 font-bold text-xs">
                          NE
                        </div>
                        <div className="text-left text-xs">
                          <span className="font-bold text-slate-800 block">Global Pedigree</span>
                          <span className="text-slate-500 text-[11px]">Nippon Express &amp; Globelink</span>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center space-x-3">
                        <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs">
                          4+
                        </div>
                        <div className="text-left text-xs">
                          <span className="font-bold text-slate-800 block">4+ Years Leadership</span>
                          <span className="text-slate-500 text-[11px]">Successfully managing logistics business</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Narrative */}
                  <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                    <div className="border-b border-slate-200 pb-3">
                      <span className="text-xs font-bold text-theme-orange uppercase tracking-wider">Promoter Profile</span>
                      <h4 className="text-xl sm:text-2xl font-bold text-theme-blue mt-0.5">Kanika | Director</h4>
                    </div>

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

                    <p>
                      With her extensive domain knowledge and proven track record of managing business operations, Kanika is well positioned to lead the organisation through its next phase of growth and expansion. Her vision is to build a professionally managed, technology-enabled logistics and freight forwarding organisation with a strong focus on customer service, operational excellence, and sustainable long-term growth.
                    </p>

                    <div className="mt-4 bg-white border-l-4 border-theme-orange p-4 rounded-r-lg">
                      <span className="text-xs font-bold uppercase tracking-wider text-theme-orange block mb-1">
                        Promoter&apos;s Vision
                      </span>
                      <blockquote className="text-sm font-medium text-slate-800 italic">
                        &ldquo;To build a professionally managed, technology-enabled logistics and freight forwarding organisation with a strong focus on customer service, operational excellence, and sustainable long-term growth.&rdquo;
                      </blockquote>
                      <span className="block text-xs font-semibold text-theme-blue mt-1.5">
                        — Kanika, Director
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Profile 2: Neeraj */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Avatar & Badges */}
                  <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-theme-blue to-[#182238] flex flex-col items-center justify-center text-white shadow-md border-2 border-theme-orange/40">
                      <span className="text-5xl sm:text-6xl font-extrabold text-theme-orange">N</span>
                      <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1">Director</span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-theme-blue">Neeraj</h3>
                      <p className="text-sm font-semibold text-theme-orange">Director &amp; Promoter</p>
                      <p className="text-xs text-slate-500">Seven Routes Logistics International Pvt. Ltd.</p>
                    </div>

                    <div className="w-full space-y-2 pt-2 border-t border-slate-200">
                      <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center space-x-3">
                        <div className="w-7 h-7 rounded-full bg-blue-100 text-theme-blue flex items-center justify-center shrink-0 font-bold text-xs">
                          20+
                        </div>
                        <div className="text-left text-xs">
                          <span className="font-bold text-slate-800 block">20+ Years Experience</span>
                          <span className="text-slate-500 text-[11px]">16+ years in logistics &amp; forwarding</span>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center space-x-3">
                        <div className="w-7 h-7 rounded-full bg-orange-100 text-theme-orange flex items-center justify-center shrink-0 font-bold text-xs">
                          DM
                        </div>
                        <div className="text-left text-xs">
                          <span className="font-bold text-slate-800 block">Global Pedigree</span>
                          <span className="text-slate-500 text-[11px]">DHL &amp; Maersk</span>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center space-x-3">
                        <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs">
                          4+
                        </div>
                        <div className="text-left text-xs">
                          <span className="font-bold text-slate-800 block">4+ Years Senior Leadership</span>
                          <span className="text-slate-500 text-[11px]">Business growth &amp; strategy</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Narrative */}
                  <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                    <div className="border-b border-slate-200 pb-3">
                      <span className="text-xs font-bold text-theme-orange uppercase tracking-wider">Promoter Profile</span>
                      <h4 className="text-xl sm:text-2xl font-bold text-theme-blue mt-0.5">Neeraj | Director</h4>
                    </div>

                    <p>
                      <strong>Neeraj</strong> is a seasoned business professional with over <strong>20 years of overall professional experience</strong>, including more than <strong>16 years of extensive experience</strong> in the logistics and freight forwarding industry.
                    </p>

                    <p>
                      He has built his career with some of the most reputed global organisations in the logistics and supply chain sector, including <strong>DHL</strong> and <strong>Maersk</strong>. His experience with these leading organisations has provided him with strong exposure to international logistics, freight forwarding operations, supply chain management, customer relationship management, commercial functions, and business strategy.
                    </p>

                    <p>
                      With a proven ability to perform effectively in high-pressure and demanding business environments, Neeraj brings strong leadership, decision-making, operational discipline, and problem-solving capabilities to the organisation. His extensive industry experience has enabled him to develop a deep understanding of market dynamics, customer requirements, vendor management, and operational efficiencies.
                    </p>

                    <p>
                      For the past four years, Neeraj has been successfully leading the organisation in a senior leadership role, contributing significantly towards business development, operational management, strategic decision-making, team building, and overall business growth.
                    </p>

                    <p>
                      His combination of 20+ years of professional experience, 16+ years of specialised logistics industry experience, strong leadership capabilities, and experience with globally recognised logistics organisations provides a strong foundation for the organisation’s continued growth and expansion.
                    </p>

                    <p>
                      Neeraj is committed to building a professionally managed, scalable and sustainable logistics business, with a strong focus on operational excellence, customer satisfaction, financial discipline, and long-term value creation.
                    </p>

                    <div className="mt-4 bg-white border-l-4 border-theme-orange p-4 rounded-r-lg">
                      <span className="text-xs font-bold uppercase tracking-wider text-theme-orange block mb-1">
                        Promoter&apos;s Commitment
                      </span>
                      <blockquote className="text-sm font-medium text-slate-800 italic">
                        &ldquo;Committed to building a professionally managed, scalable and sustainable logistics business, with a strong focus on operational excellence, customer satisfaction, financial discipline, and long-term value creation.&rdquo;
                      </blockquote>
                      <span className="block text-xs font-semibold text-theme-blue mt-1.5">
                        — Neeraj, Director
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 sm:py-16 border-t border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Ready to streamline your chemical and container freight?
            </h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Our teams across Mumbai, Ahmedabad, and Surat are standing by to coordinate your shipments with rate efficiency and statutory compliance.
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
