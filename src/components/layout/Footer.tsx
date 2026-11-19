'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

function WhatsAppIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export default function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/seven-routes-logistics',
      icon: Linkedin,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/918128128791?text=Hello%20Seven%20Routes%20Logistics%2C%20I%20have%20an%20inquiry%20regarding%20freight%20shipping.',
      icon: WhatsAppIcon,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/sevenrouteslogistics',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/sevenrouteslogistics',
      icon: Instagram,
    },
    {
      name: 'Twitter (X)',
      href: 'https://twitter.com/sevenroutes',
      icon: Twitter,
    },
  ];

  return (
    <footer className="bg-[#182238] text-slate-300 text-xs border-t-2 border-theme-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Col 1: Brand, Credentials & Social Media (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <Link href="/" className="inline-block bg-white px-3 py-1 rounded-md shadow-sm">
              <div className="relative h-9 w-36 sm:h-10 sm:w-40">
                <Image
                  src="/images/seven-routes-logo.png"
                  alt="Seven Routes Logistics International Pvt. Ltd."
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Connecting Businesses. Moving Possibilities. Freight forwarding expertise with a specialised focus on chemical exports.
            </p>

            <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-theme-orange shrink-0" />
              <span>Licensed: FMC • MTO • IEC | Estd. 2026</span>
            </div>

            {/* Social Media Channels */}
            <div className="pt-1">
              <span className="block text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                Connect With Us
              </span>
              <div className="flex items-center space-x-2.5">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit Seven Routes Logistics on ${social.name}`}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-theme-orange border border-white/15 hover:border-theme-orange text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-sm"
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <h5 className="text-[11px] font-bold text-white uppercase tracking-wider">
              Quick Links
            </h5>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-1.5 text-xs">
              <li>
                <Link href="/" className="hover:text-theme-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-theme-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-theme-orange transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#quote" className="hover:text-theme-orange transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-theme-orange transition-colors">
                  Contact &amp; Offices
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Addresses (4 cols) */}
          <div className="md:col-span-4 space-y-2.5">
            <h5 className="text-[11px] font-bold text-white uppercase tracking-wider">
              Offices &amp; Contact
            </h5>
            <div className="space-y-2 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-theme-orange shrink-0 mt-0.5" />
                <div className="text-slate-300 leading-snug">
                  <strong className="text-white block">Corporate Office:</strong>
                  1501, BLA Business Park, CTS No. 492 A 1 to 4 and 492 B, near Atlanta Center, Goregaon (E), Sonawala Road, Village Pahadi, Mumbai 400063
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-theme-orange shrink-0 mt-0.5" />
                <div className="text-slate-300 leading-snug">
                  <strong className="text-white block">Mumbai Office:</strong>
                  1006, The Gateway by Wadhwa, Mulund - Goregaon Link Rd, opp. Registration Office Mulund West, Hira Nagar, Mulund West, Mumbai 400080
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-theme-orange shrink-0" />
                <a href="tel:+918128128791" className="hover:text-theme-orange transition-colors text-white font-medium">
                  +91 81281 28791
                </a>
              </div>

              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-theme-orange shrink-0" />
                  <a href="mailto:ops@sevenrouteslogistics.com" className="hover:text-theme-orange transition-colors text-slate-300">
                    ops@sevenrouteslogistics.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-theme-orange shrink-0" />
                  <a href="mailto:neeraj@sevenrouteslogistics.com" className="hover:text-theme-orange transition-colors text-slate-300">
                    neeraj@sevenrouteslogistics.com
                  </a>
                </div>
              </div>

              <div className="pt-1 text-[11px] text-slate-400">
                <span className="text-theme-orange font-semibold">Branches:</span> Mumbai (2) • Surat • Ahmedabad
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Seven Routes Logistics International Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center space-x-3 text-slate-400">
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <span>•</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
