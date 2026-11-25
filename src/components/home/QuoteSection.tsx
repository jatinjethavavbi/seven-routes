'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, Loader2, ShieldCheck } from 'lucide-react';

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    route: '',
    service: 'International Freight Forwarding',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const payload = {
        source: 'Homepage Quick Quote',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        contact: formData.phone + (formData.email ? ' / ' + formData.email : ''),
        route: formData.route,
        service: formData.service,
        assignedTo: 'divyesh.t@sevenrouteslogistics.com',
        company: '',
        branchPreference: 'Mumbai HQ',
        message: formData.message,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || data.success === false) {
        throw new Error(data.error || 'Failed to record quote in Google Sheet');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Quote submission error:', err);
      setErrorMessage(
        err.message ||
        'Unable to send inquiry right now. Please call us directly at +91 81281 28791 or email ops@sevenrouteslogistics.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-2">
            Quick Inquiry
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight">
            Request a Freight &amp; Rate Quote
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Fill in your shipment details below and our operations team will get back to you with competitive freight options.
          </p>
        </div>

        {/* Minimalist Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900">Thank You!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                We have received your shipment inquiry. Our freight operations team will contact you shortly at{' '}
                <strong>{formData.phone || formData.email}</strong>.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-xs font-semibold text-theme-orange hover:underline uppercase tracking-wider"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Name / Company *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Acme Corp / Contact Person"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 81281 28791"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. info@yourcompany.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-base sm:text-sm text-slate-900 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors"
                  >
                    <option value="International Freight Forwarding">International Freight Forwarding</option>
                    <option value="Chemical & Pharma Cargo Handling">Chemical &amp; Pharma Cargo Handling</option>
                    <option value="Freight Procurement - Ocean (FCL, LCL) and Air Cargo">Freight Procurement - Ocean (FCL, LCL) &amp; Air Cargo</option>
                    <option value="Special Equipment Handling - OOG, Reefer">Special Equipment Handling - OOG, Reefer</option>
                    <option value="Clearance and Local Transportation">Clearance and Local Transportation</option>
                    <option value="Worldwide Agency Network">Worldwide Agency Network</option>
                    <option value="Textile Machinery Imports">Textile Machinery Imports</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Route */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Route (Origin &amp; Destination)
                </label>
                <input
                  type="text"
                  name="route"
                  value={formData.route}
                  onChange={handleChange}
                  placeholder="e.g. Mumbai / JNPT to Rotterdam, or Hazira to Jebel Ali"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors"
                />
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Shipment Details (Cargo Type, Volume, Weight, Timeline)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Specify cargo nature (chemical / general / ISO tank), container count, target ready date..."
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors resize-none"
                />
              </div>

              {errorMessage && (
                <div className="p-3 rounded bg-red-50 border border-red-200 text-xs text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-theme-orange hover:bg-theme-orangeHover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm py-3 px-6 rounded-md shadow-sm transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Freight Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 text-center text-xs text-slate-500">
                Direct hotline: <a href="tel:+918128128791" className="text-theme-orange font-semibold hover:underline">+91 81281 28791</a> • Email: <a href="mailto:ops@sevenrouteslogistics.com" className="text-theme-blue font-semibold hover:underline">ops@sevenrouteslogistics.com</a>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
