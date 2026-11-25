'use client';

import React, { useRef, useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, Loader2, ShieldCheck, AlertCircle } from 'lucide-react';
import {
  ContactFieldErrors,
  ContactFieldName,
  validateContactInquiry,
  validateEmail,
  validatePhone,
} from '../../lib/contactValidation';

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    route: '',
    service: 'International Freight Forwarding',
    message: '',
    website: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [touchedFields, setTouchedFields] = useState<Partial<Record<ContactFieldName, boolean>>>({});
  const [emailHint, setEmailHint] = useState<string | undefined>(undefined);

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const FRIENDLY_SUBMIT_ERROR =
    'We could not send your inquiry. Please call +91 81281 28791 or email ops@sevenrouteslogistics.com';

  const runValidation = (
    nextData: typeof formData,
    fieldsToUpdate?: ContactFieldName[]
  ) => {
    const result = validateContactInquiry(nextData, { requireMessage: false });

    if (fieldsToUpdate) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        for (const f of fieldsToUpdate) {
          if (result.errors[f]) {
            updated[f] = result.errors[f];
          } else {
            delete updated[f];
          }
        }
        return updated;
      });
    } else {
      setFieldErrors(result.errors);
    }

    if (!fieldsToUpdate || fieldsToUpdate.includes('email')) {
      setEmailHint(result.hints.email);
    }

    return result;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldKey = (name === 'service' ? 'subject' : name) as ContactFieldName;
    const nextData = { ...formData, [name]: value };
    setFormData(nextData);

    if (touchedFields[fieldKey]) {
      runValidation(nextData, [fieldKey]);
    } else if (name === 'email') {
      const check = validateEmail(value);
      setEmailHint(check.hint);
    }
  };

  const handleBlur = (field: ContactFieldName) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
    let nextData = formData;
    if (field === 'phone') {
      const phoneCheck = validatePhone(formData.phone);
      if (phoneCheck.valid && phoneCheck.normalized !== formData.phone) {
        nextData = { ...formData, phone: phoneCheck.normalized };
        setFormData(nextData);
      }
    }
    runValidation(nextData, [field]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const validation = validateContactInquiry(formData, { requireMessage: false });
    if (!validation.valid) {
      const fieldOrder: ContactFieldName[] = ['name', 'phone', 'email', 'subject', 'route', 'message'];
      const firstInvalidField = fieldOrder.find((f) => Boolean(validation.errors[f]));
      if (firstInvalidField) {
        setFieldErrors({ [firstInvalidField]: validation.errors[firstInvalidField] });
        setTouchedFields((prev) => ({ ...prev, [firstInvalidField]: true }));
        if (firstInvalidField === 'name') nameRef.current?.focus();
        else if (firstInvalidField === 'phone') phoneRef.current?.focus();
        else if (firstInvalidField === 'email') emailRef.current?.focus();
        else if (firstInvalidField === 'message') messageRef.current?.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const normalized = validation.values;
      const payload = {
        source: 'Homepage Quick Quote',
        name: normalized.name,
        phone: normalized.phone,
        email: normalized.email,
        route: normalized.route,
        service: normalized.service,
        branchPreference: 'Mumbai HQ',
        message: normalized.message,
        website: formData.website,
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
        if (data.errors) {
          setFieldErrors(data.errors);
        }
        throw new Error(data.error || FRIENDLY_SUBMIT_ERROR);
      }

      setFormData((prev) => ({
        ...prev,
        name: normalized.name,
        phone: normalized.phone,
        email: normalized.email,
        route: normalized.route,
        message: normalized.message,
      }));
      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Quote submission error:', err);
      setErrorMessage(FRIENDLY_SUBMIT_ERROR);
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
                onClick={() => {
                  setIsSubmitted(false);
                  setErrorMessage('');
                  setFieldErrors({});
                  setTouchedFields({});
                  setEmailHint(undefined);
                  setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    route: '',
                    service: 'International Freight Forwarding',
                    message: '',
                    website: '',
                  });
                }}
                className="mt-4 text-xs font-semibold text-theme-orange hover:underline uppercase tracking-wider"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="space-y-4">
              <div className="hidden" aria-hidden="true">
                <label htmlFor="quote-website">Website</label>
                <input
                  id="quote-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Name / Company *
                  </label>
                  <input
                    id="quote-name"
                    ref={nameRef}
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? 'quote-name-error' : undefined}
                    placeholder="e.g. Acme Corp / Contact Person"
                    className={`w-full px-3.5 py-2.5 bg-white border ${fieldErrors.name ? 'border-red-400 bg-red-50/30 ring-1 ring-red-200' : 'border-slate-300'} rounded-md text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors`}
                  />
                  {fieldErrors.name && (
                    <p id="quote-name-error" role="alert" className="flex items-start gap-1.5 text-[11px] font-medium text-red-600 mt-1.5 leading-snug">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{fieldErrors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="quote-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone / Mobile Number *
                  </label>
                  <input
                    id="quote-phone"
                    ref={phoneRef}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={20}
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur('phone')}
                    aria-invalid={Boolean(fieldErrors.phone)}
                    aria-describedby={fieldErrors.phone ? 'quote-phone-error' : undefined}
                    placeholder="e.g. +91 81281 28791"
                    className={`w-full px-3.5 py-2.5 bg-white border ${fieldErrors.phone ? 'border-red-400 bg-red-50/30 ring-1 ring-red-200' : 'border-slate-300'} rounded-md text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors`}
                  />
                  {fieldErrors.phone && (
                    <p id="quote-phone-error" role="alert" className="flex items-start gap-1.5 text-[11px] font-medium text-red-600 mt-1.5 leading-snug">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{fieldErrors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="quote-email"
                    ref={emailRef}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoCapitalize="none"
                    spellCheck={false}
                    maxLength={254}
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? 'quote-email-error' : emailHint ? 'quote-email-hint' : undefined}
                    placeholder="e.g. info@yourcompany.com"
                    className={`w-full px-3.5 py-2.5 bg-white border ${fieldErrors.email ? 'border-red-400 bg-red-50/30 ring-1 ring-red-200' : 'border-slate-300'} rounded-md text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors`}
                  />
                  {fieldErrors.email ? (
                    <p id="quote-email-error" role="alert" className="flex items-start gap-1.5 text-[11px] font-medium text-red-600 mt-1.5 leading-snug">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{fieldErrors.email}</span>
                    </p>
                  ) : emailHint ? (
                    <p id="quote-email-hint" className="text-[11px] font-medium text-amber-700 mt-1.5">
                      {emailHint}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="quote-service" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Service Required *
                  </label>
                  <select
                    id="quote-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onBlur={() => handleBlur('subject')}
                    aria-invalid={Boolean(fieldErrors.subject)}
                    aria-describedby={fieldErrors.subject ? 'quote-service-error' : undefined}
                    className={`w-full px-3.5 py-2.5 bg-white border ${fieldErrors.subject ? 'border-red-400 bg-red-50/30 ring-1 ring-red-200' : 'border-slate-300'} rounded-md text-base sm:text-sm text-slate-900 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors`}
                  >
                    <option value="International Freight Forwarding">International Freight Forwarding</option>
                    <option value="Chemical & Pharma Cargo Handling">Chemical &amp; Pharma Cargo Handling</option>
                    <option value="Freight Procurement - Ocean (FCL, LCL) and Air Cargo">Freight Procurement - Ocean (FCL, LCL) &amp; Air Cargo</option>
                    <option value="Special Equipment Handling - OOG, Reefer">Special Equipment Handling - OOG, Reefer</option>
                    <option value="Clearance and Local Transportation">Clearance and Local Transportation</option>
                    <option value="Worldwide Agency Network">Worldwide Agency Network</option>
                    <option value="Textile Machinery Imports">Textile Machinery Imports</option>
                  </select>
                  {fieldErrors.subject && (
                    <p id="quote-service-error" role="alert" className="flex items-start gap-1.5 text-[11px] font-medium text-red-600 mt-1.5 leading-snug">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{fieldErrors.subject}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Route */}
              <div>
                <label htmlFor="quote-route" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Route (Origin &amp; Destination)
                </label>
                <input
                  id="quote-route"
                  type="text"
                  name="route"
                  maxLength={300}
                  value={formData.route}
                  onChange={handleChange}
                  onBlur={() => handleBlur('route')}
                  aria-invalid={Boolean(fieldErrors.route)}
                  aria-describedby={fieldErrors.route ? 'quote-route-error' : undefined}
                  placeholder="e.g. Mumbai / JNPT to Rotterdam, or Hazira to Jebel Ali"
                  className={`w-full px-3.5 py-2.5 bg-white border ${fieldErrors.route ? 'border-red-400 bg-red-50/30 ring-1 ring-red-200' : 'border-slate-300'} rounded-md text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors`}
                />
                {fieldErrors.route && (
                  <p id="quote-route-error" role="alert" className="flex items-start gap-1.5 text-[11px] font-medium text-red-600 mt-1.5 leading-snug">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{fieldErrors.route}</span>
                  </p>
                )}
              </div>

              {/* Row 4: Message */}
              <div>
                <label htmlFor="quote-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Shipment Details (Cargo Type, Volume, Weight, Timeline)
                </label>
                <textarea
                  id="quote-message"
                  ref={messageRef}
                  name="message"
                  rows={3}
                  maxLength={2000}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? 'quote-message-error' : undefined}
                  placeholder="Specify cargo nature (chemical / general / ISO tank), container count, target ready date..."
                  className={`w-full px-3.5 py-2.5 bg-white border ${fieldErrors.message ? 'border-red-400 bg-red-50/30 ring-1 ring-red-200' : 'border-slate-300'} rounded-md text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-theme-orange focus:bg-white transition-colors resize-none`}
                />
                {fieldErrors.message && (
                  <p id="quote-message-error" role="alert" className="flex items-start gap-1.5 text-[11px] font-medium text-red-600 mt-1.5 leading-snug">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{fieldErrors.message}</span>
                  </p>
                )}
              </div>

              {errorMessage && (
                <div role="alert" className="flex items-start gap-2 p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs font-medium text-red-700">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                  <span>{errorMessage}</span>
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
