'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, Loader2 } from 'lucide-react';

const GOOGLE_SCRIPT_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbyRNx0_mk-8Y5fwANy70K5gVWri-2F7Vi0Ey1SLkxa7YDWHBOVbKG1SJA8SSRIG/exec';

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    route: '',
    service: 'Sea Freight (FCL / LCL)',
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
        company: '',
        branchPreference: '',
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
      console.error('Quote submission error:', err);
      setErrorMessage('Unable to send inquiry right now. Please call us directly at +91 99202 15011.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-theme-orange uppercase tracking-wider block mb-2">
            Quick Inquiry
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-blue tracking-tight">
            Request a Freight Quote
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Fill in your shipment details below and our team will get back to you with competitive rates.
          </p>
        </div>

        {/* Minimalist Card */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm">
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
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name or company"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 99202 15011"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Route */}
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
                    placeholder="email@company.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Ports / Route *
                  </label>
                  <input
                    type="text"
                    name="route"
                    required
                    value={formData.route}
                    onChange={handleChange}
                    placeholder="e.g. Nhava Sheva to Jebel Ali"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Service Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-base sm:text-sm text-slate-900 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors"
                >
                  <option value="Sea Freight (FCL / LCL)">Sea Freight (FCL / LCL)</option>
                  <option value="ISO Tanks & Liquid Bulk">ISO Tanks &amp; Liquid Bulk</option>
                  <option value="Customs Clearance (CHA)">Customs Clearance (CHA)</option>
                  <option value="International Forwarding">International Forwarding</option>
                  <option value="Inland Transport">Inland Transport &amp; Haulage</option>
                </select>
              </div>

              {/* Row 4: Cargo Details & Remarks */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Cargo Details / Remarks
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Container type (20ft / 40ft), weight, hazardous status, or any specific requirements..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors"
                />
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="p-3 rounded bg-red-50 border border-red-200 text-xs text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-theme-orange hover:bg-theme-orangeHover disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium text-sm py-3 px-4 rounded-md transition-colors flex items-center justify-center space-x-2 shadow-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Inquiry to Google Sheets...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Direct Contacts */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-center space-x-6 text-xs text-slate-500">
                <a href="tel:+919920215011" className="hover:text-theme-orange flex items-center space-x-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 99202 15011</span>
                </a>
                <span>•</span>
                <a href="mailto:info@sevenroutes.com" className="hover:text-theme-orange flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>info@sevenroutes.com</span>
                </a>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
