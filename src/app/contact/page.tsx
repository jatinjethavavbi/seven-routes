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
    subject: 'International Freight Forwarding',
    branchPreference: 'Corporate Office (Goregaon, Mumbai)',
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
        assignedTo: 'divyesh.t@sevenrouteslogistics.com',
        notifyEmail: 'divyesh.t@sevenrouteslogistics.com',
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
      setErrorMessage('Unable to send inquiry right now. Please call us directly at +91 81281 28791 or email ops@sevenrouteslogistics.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      city: 'Mumbai (Goregaon)',
      badge: 'Corporate Office',
      port: 'Nhava Sheva (JNPT) & Mumbai Port Gateway',
      address: '1501, BLA Business Park, CTS No. 492 A 1 to 4 and 492 B, near Atlanta Center, Goregaon (E), Sonawala Road, Village Pahadi, Mumbai 400063',
      phones: ['+91 81281 28791'],
      emails: ['ops@sevenrouteslogistics.com', 'neeraj@sevenrouteslogistics.com'],
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM (IST)',
      chaStatus: 'Corporate Leadership & Central Pricing Desk',
    },
    {
      city: 'Mumbai (Mulund)',
      badge: 'Mumbai Regional Office',
      port: 'Nhava Sheva & Regional Maritime Logistics',
      address: '1006, The Gateway by Wadhwa, Mulund - Goregaon Link Rd, opp. Registration Office Mulund West, Hira Nagar, Mulund West, Mumbai, Maharashtra 400080',
      phones: ['+91 81281 28791'],
      emails: ['ops@sevenrouteslogistics.com'],
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM (IST)',
      chaStatus: 'Regional Ocean Freight & Carrier Operations',
    },
    {
      city: 'Surat',
      badge: 'Chemical & Industrial Hub',
      port: 'Hazira Port, Dahej & South Gujarat Industrial Belt',
      address: '714, Surat Digital Valley, Beside Silver Trade Center, VIP Circle, Mota Varachha, Surat - 394101, Gujarat, India',
      phones: ['+91 81281 28791', '+91 88660 08584'],
      emails: ['divyesh.t@sevenrouteslogistics.com'],
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM (IST)',
      chaStatus: 'Specialised Chemical & Textile Export Desk',
    },
    {
      city: 'Ahmedabad',
      badge: 'Commercial & ICD Hub',
      port: 'Mundra Port Linkages & Inland ICD Sanand / Khodiyar',
      address: 'Office no.: 1120, 11th Floor, Sakar-9, Beside old Reserve Bank of India, Ashram Rd, near City Gold, Muslim Society, Navrangpura, Ahmedabad, Gujarat 380009',
      phones: ['+91 73777 09341'],
      emails: ['ajay.b@sevenrouteslogistics.com'],
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM (IST)',
      chaStatus: 'Commercial Freight & Inland Container Logistics',
    },
  ];

  const faqs = [
    {
      q: 'How fast can I get a freight rate quote?',
      a: 'Our central pricing desk in Mumbai typically provides competitive freight indications within 12 to 24 business hours once container type, cargo nature, and route ports are specified.',
    },
    {
      q: 'What types of chemical exports do you specialize in?',
      a: 'Chemical exports contribute approximately 60% of our business volume. We handle both hazardous (IMDG Classes 3, 6, 8, 9) and non-hazardous chemicals in dry containers, reefer boxes, and certified ISO tanks.',
    },
    {
      q: 'What statutory licenses does Seven Routes hold?',
      a: 'Seven Routes Logistics International Pvt. Ltd. is licensed by FMC (Federal Maritime Commission), holds a Multimodal Transport Operator (MTO) license, and has an active Import Export Code (IEC).',
    },
    {
      q: 'How does your upfront freight payment model work?',
      a: 'We procure freight capacity, make upfront freight payments directly to shipping lines, and extend agreed credit facilities to exporters and importers, ensuring smooth cash flow and prompt Bill of Lading release.',
    },
    {
      q: 'Where are your office branches located?',
      a: 'We maintain four active operational locations across western India: Corporate Office in Goregaon (Mumbai), Mumbai Office in Mulund, Surat Office, and Ahmedabad Office.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        
        {/* Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-theme-orange mb-2">
                <Link href="/" className="hover:underline text-slate-500">Home</Link>
                <span>/</span>
                <span>Contact Us</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-theme-blue tracking-tight">
                Contact Our Offices &amp; Operations Desks
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Connect directly with our Corporate Office in Goregaon, Mumbai branch in Mulund, or regional desks in Surat and Ahmedabad.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Regional Offices Cards */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-2">
                Branch Footprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight">
                Our Office Locations
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Approximately 30 logistics professionals serving clients across western India&apos;s leading trade hubs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:border-theme-orange hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold text-theme-orange uppercase tracking-wider px-2.5 py-1 bg-orange-50 border border-orange-200/60 rounded-full inline-block mb-1.5">
                          {office.badge}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-theme-blue">
                          {office.city}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-theme-blue flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Operational Gateway */}
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center space-x-2.5 text-xs text-slate-700">
                      <Anchor className="w-4 h-4 text-theme-blue shrink-0" />
                      <span><strong>Gateway Coverage:</strong> {office.port}</span>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                      <MapPin className="w-4 h-4 text-theme-orange shrink-0 mt-0.5" />
                      <p className="leading-relaxed text-slate-600 text-xs sm:text-sm">
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
                            className="font-bold text-slate-900 hover:text-theme-orange transition-colors"
                          >
                            {p}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-3 text-xs text-slate-700">
                      <Mail className="w-4 h-4 text-theme-orange shrink-0 mt-0.5" />
                      <div className="flex flex-col space-y-0.5">
                        {office.emails.map((email, i) => (
                          <a
                            key={i}
                            href={`mailto:${email}`}
                            className="text-theme-blue hover:text-theme-orange font-medium transition-colors"
                          >
                            {email}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{office.hours}</span>
                    </span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                      {office.chaStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Contact Form & Hotline */}
        <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Direct Inquiry Form */}
              <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
                <div className="mb-8">
                  <span className="text-xs font-bold text-theme-orange uppercase tracking-wider block mb-1">
                    Direct Inquiry
                  </span>
                  <h3 className="text-2xl font-bold text-theme-blue">
                    Send a Message to Our Freight Operations Team
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill out the form below. Your request will be routed directly to our operations desk and regional managers.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-10 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-xl font-bold text-theme-blue">
                      Message Successfully Received
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our logistics representative from {formData.branchPreference} will reach out to you within 24 hours.
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
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Chemical Exports Pvt Ltd"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. contact@yourcompany.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 81281 28791"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Nature of Inquiry
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-theme-orange focus:bg-white"
                        >
                          <option value="International Freight Forwarding">International Freight Forwarding</option>
                          <option value="Chemical & Pharma Cargo Handling">Chemical &amp; Pharma Cargo Handling</option>
                          <option value="Freight Procurement - Ocean (FCL, LCL) and Air Cargo">Freight Procurement - Ocean (FCL, LCL) &amp; Air Cargo</option>
                          <option value="Special Equipment Handling - OOG, Reefer">Special Equipment Handling - OOG, Reefer</option>
                          <option value="Clearance and Local Transportation">Clearance and Local Transportation</option>
                          <option value="Worldwide Agency Network">Worldwide Agency Network</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Preferred Office Desk
                        </label>
                        <select
                          value={formData.branchPreference}
                          onChange={(e) => setFormData({ ...formData, branchPreference: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-theme-orange focus:bg-white"
                        >
                          <option value="Corporate Office (Goregaon, Mumbai)">Corporate Office (Goregaon, Mumbai)</option>
                          <option value="Mumbai Office (Mulund)">Mumbai Office (Mulund)</option>
                          <option value="Surat Desk">Surat Office Desk</option>
                          <option value="Ahmedabad Desk">Ahmedabad Office Desk</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Cargo &amp; Requirement Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Please include port of loading, destination, cargo type (e.g. chemicals / general), volume/container count, and target timelines..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                        {errorMessage}
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-theme-orange hover:bg-theme-orangeHover disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg shadow transition-colors flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending Inquiry...</span>
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

              {/* Right Column: Direct Hotline & Key Facts */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Direct Helpline Card */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#182238] via-[#243350] to-[#182238] text-white p-6 sm:p-8 rounded-2xl shadow-lg border-t-4 border-theme-orange space-y-5">
                  <div className="inline-flex items-center space-x-2 bg-theme-orange text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Direct Operations Helpline</span>
                  </div>

                  <div>
                    <span className="block text-xs text-slate-300 mb-1">
                      Call our central operations desk:
                    </span>
                    <a
                      href="tel:+918128128791"
                      className="text-2xl sm:text-3xl font-extrabold text-white hover:text-theme-orange transition-colors tracking-tight block"
                    >
                      +91 81281 28791
                    </a>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-3.5 h-3.5 text-theme-orange shrink-0" />
                      <span><strong>Operations:</strong> ops@sevenrouteslogistics.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-3.5 h-3.5 text-theme-orange shrink-0" />
                      <span><strong>Director:</strong> neeraj@sevenrouteslogistics.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3.5 h-3.5 text-theme-orange shrink-0" />
                      <span>Monday – Saturday: 9:30 AM – 6:30 PM (IST)</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex flex-wrap gap-2 text-[11px]">
                    <span className="bg-white/10 px-2.5 py-1 rounded">FMC Licensed</span>
                    <span className="bg-white/10 px-2.5 py-1 rounded">MTO Licensed</span>
                    <span className="bg-white/10 px-2.5 py-1 rounded">IEC Licensed</span>
                  </div>
                </div>

                {/* FAQ Accordion */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <div className="flex items-center space-x-2 text-theme-blue font-bold text-base">
                    <HelpCircle className="w-5 h-5 text-theme-orange" />
                    <span>Frequently Asked Questions</span>
                  </div>

                  <div className="space-y-3">
                    {faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="border border-slate-100 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className="w-full text-left p-3 bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800 transition-colors"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform ${
                              openFaq === idx ? 'rotate-180 text-theme-orange' : ''
                            }`}
                          />
                        </button>
                        {openFaq === idx && (
                          <div className="p-3 text-xs text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
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
