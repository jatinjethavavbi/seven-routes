'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Anchor, 
  MessageSquare, 
  HelpCircle,
  PhoneCall,
  ChevronDown,
  Loader2
} from 'lucide-react';

const GOOGLE_SCRIPT_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbyRNx0_mk-8Y5fwANy70K5gVWri-2F7Vi0Ey1SLkxa7YDWHBOVbKG1SJA8SSRIG/exec';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'Freight & Route Inquiry',
    branchPreference: 'Mumbai (Headquarters)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const payload = {
        source: 'Contact Page Inquiry',
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        contact: formData.phone + (formData.email ? ' / ' + formData.email : ''),
        route: 'General Route / ' + formData.branchPreference,
        service: formData.subject,
        subject: formData.subject,
        branchPreference: formData.branchPreference,
        message: formData.message,
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage('Unable to send inquiry right now. Please call our central desk at +91 99202 15011.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      city: 'Mumbai',
      badge: 'Corporate Headquarters',
      port: 'Nhava Sheva (JNPT) & Mumbai Port',
      address: '2nd Floor, Neelkanth Business Park, "D" Wing, Office No. 208, Nathani Road, Kirol Village, Vidyavihar West, Mumbai - 400086, Maharashtra, India',
      phones: ['+91 99202 15011', '+91 98700 06982'],
      email: 'info@sevenroutes.com',
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM (IST)',
      chaStatus: 'Direct JNPT Port Customs House Agency (CHA)',
    },
    {
      city: 'Mundra & Gandhidham',
      badge: 'Gateway Port Terminal Desk',
      port: 'Mundra Port & Deendayal Port (Kandla)',
      address: 'Ganatra Arcade, Plot No. 121, Office No. F-4, Sector-8, Gandhidham - 370201, Gujarat, India',
      phones: ['+91 98700 06982'],
      email: 'mundra@sevenroutes.com',
      hours: 'Mon - Sat: 9:00 AM - 7:00 PM (IST)',
      chaStatus: 'On-Dock Container & ISO Tank Terminal Supervision',
    },
    {
      city: 'Hazira / Vadodara',
      badge: 'Petrochemical & Gas Logistics Hub',
      port: 'Adani Hazira Port & Dahej Hub',
      address: '302, Fortune Aroma Tower, Bhayli, Vadodara - 391410, Gujarat, India',
      phones: ['+91 99202 15011'],
      email: 'hazira@sevenroutes.com',
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM (IST)',
      chaStatus: 'Hazardous IMO Liquid Cargo & Haulage Operations',
    },
    {
      city: 'Ahmedabad',
      badge: 'Commercial & ICD Trading Desk',
      port: 'ICD Sabarmati, Sanand & Khodiyar Linkages',
      address: 'Ganesh Glory, Jagatpur Road, Near BSNL Office, Off S.G. Highway, Gota, Ahmedabad - 382470, Gujarat, India',
      phones: ['+91 98700 06982'],
      email: 'ahmedabad@sevenroutes.com',
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM (IST)',
      chaStatus: 'Inland Depot Advisory & Export/Import Freight',
    },
  ];

  const faqs = [
    {
      q: 'How fast can I get an ocean freight rate quote?',
      a: 'Our central pricing desk in Mumbai typically provides comprehensive rate indications within 12 to 24 business hours once commodity dimensions, container type, and port routes are specified.',
    },
    {
      q: 'Do you handle hazardous chemicals in ISO tanks?',
      a: 'Yes. Seven Routes Logistics is specialized in Class 3, 6, 8, and 9 dangerous goods (IMO classified), providing certified T11/T14 ISO tanks with periodic inspection and hydrostatic test documentation.',
    },
    {
      q: 'Which ports do your in-house CHA teams cover?',
      a: 'We maintain direct in-house Custom House Agency (CHA) operations at Nhava Sheva (JNPT), Mundra, Hazira, and Kandla ports, avoiding third-party delays.',
    },
    {
      q: 'Can you handle door-to-door factory shipments?',
      a: 'Yes. With our dedicated inland container trailer fleet, we manage container pickup from factory premises, port gate customs clearance, and delivery to the final destination port or inland container depot (ICD).',
    },
    {
      q: 'What documents are required to initiate customs clearance?',
      a: 'Standard export clearance requires Commercial Invoice, Packing List, Shipping Bill/Bill of Lading, and regulatory NOCs/test certificates depending on the commodity.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        
        {/* Contact Page Clean Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-theme-orange mb-2">
                <Link href="/" className="hover:underline text-slate-500">Home</Link>
                <span>/</span>
                <span>Contact Us</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-theme-blue tracking-tight">
                Contact Our Maritime Desks
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Connect directly with our operational headquarters in Mumbai or regional gateway desks at Mundra, Hazira, and Ahmedabad.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Regional Offices Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-2">
                Gateway Presence Across India
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight">
                Our Branch Network &amp; Port Offices
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:border-theme-orange hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider px-2 py-0.5 bg-slate-100 rounded inline-block mb-1.5">
                          {office.badge}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-theme-blue">
                          {office.city} Office
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded bg-blue-50 text-theme-blue flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Controlled Port */}
                    <div className="bg-slate-50 p-3 rounded border border-slate-100 flex items-center space-x-2.5 text-xs text-slate-700">
                      <Anchor className="w-4 h-4 text-theme-blue shrink-0" />
                      <span><strong>Key Gateway:</strong> {office.port}</span>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                      <MapPin className="w-4 h-4 text-theme-orange shrink-0 mt-0.5" />
                      <p className="leading-relaxed text-theme-body text-xs">
                        {office.address}
                      </p>
                    </div>

                    {/* Phone Numbers */}
                    <div className="flex items-start space-x-3 text-xs text-slate-700">
                      <Phone className="w-4 h-4 text-theme-blue shrink-0 mt-0.5" />
                      <div className="flex flex-wrap gap-x-3 gap-y-1">
                        {office.phones.map((p, i) => (
                          <a
                            key={i}
                            href={`tel:${p.replace(/[^0-9+]/g, '')}`}
                            className="font-bold text-theme-title hover:text-theme-orange transition-colors"
                          >
                            {p}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-3 text-xs text-slate-700">
                      <Mail className="w-4 h-4 text-theme-orange shrink-0 mt-0.5" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-theme-blue hover:text-theme-orange font-medium transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-theme-body">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{office.hours}</span>
                    </span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                      Active Port Desk
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Contact Form & Support Strip */}
        <section className="py-20 bg-theme-smoke border-y border-theme-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Direct Inquiry Form */}
              <div className="lg:col-span-7 bg-white rounded border border-theme-border p-6 sm:p-10 shadow-sm">
                <div className="mb-8">
                  <span className="text-xs font-bold text-theme-orange uppercase tracking-wider block mb-1 font-heading">
                    Drop a Message
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-theme-title">
                    Send Direct Inquiry to Our Maritime Team
                  </h3>
                  <p className="text-xs sm:text-sm text-theme-body mt-1">
                    Fill out the form below. Your request will be routed directly to the appropriate regional office.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-10 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-xl font-bold font-heading text-theme-title">
                      Message Received
                    </h4>
                    <p className="text-xs sm:text-sm text-theme-body max-w-md mx-auto">
                      Thank you, <strong className="text-theme-title">{formData.name}</strong>. Our logistics representative from the {formData.branchPreference} will reach out to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-theme-orange font-bold uppercase tracking-wider hover:underline pt-2 block mx-auto"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Patel"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border border-theme-border rounded px-3 py-2.5 text-sm text-theme-title placeholder-slate-400 focus:outline-none focus:border-theme-blue focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Global Exporters Pvt Ltd"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-slate-50 border border-theme-border rounded px-3 py-2.5 text-sm text-theme-title placeholder-slate-400 focus:outline-none focus:border-theme-blue focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. contact@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-theme-border rounded px-3 py-2.5 text-sm text-theme-title placeholder-slate-400 focus:outline-none focus:border-theme-blue focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 99202 15011"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-theme-border rounded px-3 py-2.5 text-sm text-theme-title placeholder-slate-400 focus:outline-none focus:border-theme-blue focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Nature of Inquiry
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-slate-50 border border-theme-border rounded px-3 py-2.5 text-sm text-theme-title focus:outline-none focus:border-theme-blue focus:bg-white"
                        >
                          <option value="Freight & Route Inquiry">Ocean Freight / Container Booking</option>
                          <option value="ISO Tank Specification">ISO Tank (Chemical / Food-Grade)</option>
                          <option value="Customs Clearance CHA">Customs Clearance (CHA Desk)</option>
                          <option value="Inland Transport">Inland Haulage & Warehousing</option>
                          <option value="General Commercial">General Business Cooperation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Preferred Regional Office
                        </label>
                        <select
                          value={formData.branchPreference}
                          onChange={(e) => setFormData({ ...formData, branchPreference: e.target.value })}
                          className="w-full bg-slate-50 border border-theme-border rounded px-3 py-2.5 text-sm text-theme-title focus:outline-none focus:border-theme-blue focus:bg-white"
                        >
                          <option value="Mumbai (Headquarters)">Mumbai (Corporate HQ)</option>
                          <option value="Mundra Port Hub">Mundra Port & Gandhidham</option>
                          <option value="Hazira Hub">Hazira & Vadodara</option>
                          <option value="Ahmedabad Desk">Ahmedabad Commercial Desk</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Cargo & Requirement Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Please include port of loading, destination, cargo type, and any specific turnaround timelines..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-theme-border rounded px-3 py-2.5 text-sm text-theme-title placeholder-slate-400 focus:outline-none focus:border-theme-blue focus:bg-white"
                      />
                    </div>

                    {/* Error Alert */}
                    {errorMessage && (
                      <div className="p-3 rounded bg-red-50 border border-red-200 text-xs text-red-700">
                        {errorMessage}
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-theme-orange hover:bg-theme-orangeHover disabled:opacity-60 disabled:cursor-not-allowed text-white font-heading font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded shadow transition-colors flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending Inquiry to Google Sheets...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message to Operations Desk</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Column: Direct Hotline & Quick FAQ */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Emergency Freight Hotline */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#2E3F62] via-[#243350] to-[#1A253C] text-white p-6 sm:p-8 rounded-2xl shadow-lg border-t-4 border-theme-orange space-y-5">
                  {/* Subtle decorative glow */}
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-theme-orange/15 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative">
                    <div className="inline-flex items-center space-x-2 bg-theme-orange text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Instant Maritime Helpline</span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold font-heading text-white mt-3 leading-snug">
                      Speak Directly With Our Freight Brokers
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed mt-2">
                      Need urgent container booking or slot confirmation at Nhava Sheva or Mundra? Our operations hotlines are active 24/7 during all port terminal shifts.
                    </p>
                  </div>

                  {/* Clean Click-to-Call Buttons */}
                  <div className="space-y-2.5 pt-1 relative">
                    <a
                      href="tel:+919920215011"
                      className="flex items-center space-x-3.5 bg-white/10 hover:bg-white/15 border border-white/15 hover:border-theme-orange/50 rounded-xl p-3.5 transition-all duration-200 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-theme-orange text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <span className="block text-[11px] font-medium text-slate-300">
                          Mumbai Central Desk (JNPT)
                        </span>
                        <span className="block text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-theme-orange transition-colors">
                          +91 99202 15011
                        </span>
                      </div>
                    </a>

                    <a
                      href="tel:+919870006982"
                      className="flex items-center space-x-3.5 bg-white/10 hover:bg-white/15 border border-white/15 hover:border-theme-orange/50 rounded-xl p-3.5 transition-all duration-200 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-theme-orange text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <span className="block text-[11px] font-medium text-slate-300">
                          Mundra &amp; Gujarat Maritime Hub
                        </span>
                        <span className="block text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-theme-orange transition-colors">
                          +91 98700 06982
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Interactive Collapsible FAQs (Accordion) */}
                <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
                    <HelpCircle className="w-4 h-4 text-theme-orange" />
                    <h4 className="text-sm font-bold text-theme-blue uppercase tracking-wider">
                      Frequently Asked Questions
                    </h4>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {faqs.map((faq, i) => {
                      const isOpen = openFaq === i;
                      return (
                        <div key={i} className="py-3 first:pt-1 last:pb-0">
                          <button
                            type="button"
                            onClick={() => setOpenFaq(isOpen ? null : i)}
                            className="w-full flex items-center justify-between text-left group focus:outline-none"
                            aria-expanded={isOpen}
                          >
                            <span className={`text-xs sm:text-sm font-semibold transition-colors pr-3 ${
                              isOpen ? 'text-theme-orange' : 'text-slate-800 group-hover:text-theme-orange'
                            }`}>
                              {faq.q}
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                                isOpen ? 'rotate-180 text-theme-orange' : 'text-slate-400 group-hover:text-slate-600'
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <div className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-0.5 pt-1">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

