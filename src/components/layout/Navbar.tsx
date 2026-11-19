'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const services = [
    { title: 'International Freight Forwarding', href: '/services#freight-forwarding' },
    { title: 'Chemical Export Logistics (Specialized)', href: '/services#chemical-logistics' },
    { title: 'Freight Procurement', href: '/services#freight-procurement' },
    { title: 'Shipment Execution', href: '/services#shipment-execution' },
    { title: 'Documentation & Compliance', href: '/services#documentation' },
    { title: 'Commercial Management', href: '/services#commercial-management' },
    { title: 'ISO Tanks & Liquid Bulk', href: '/services#iso-tanks' },
  ];

  return (
    <nav className="w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Logo variant="dark" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-9">
            <Link
              href="/"
              className="text-slate-700 hover:text-theme-orange font-medium text-[15px] transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-slate-700 hover:text-theme-orange font-medium text-[15px] transition-colors"
            >
              About
            </Link>

            {/* Services Link & Dropdown */}
            <div
              ref={dropdownRef}
              className="relative py-2 flex items-center space-x-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                onClick={() => setIsServicesOpen(false)}
                className="text-slate-700 hover:text-theme-orange font-medium text-[15px] transition-colors py-1"
              >
                Services
              </Link>
              <button
                type="button"
                className="p-1 text-slate-400 hover:text-theme-orange focus:outline-none"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                aria-label="Toggle services dropdown"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180 text-theme-orange' : 'text-slate-400'
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full -left-4 w-64 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                  <div className="px-4 py-1.5 border-b border-slate-100 flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      All Services
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="text-xs font-semibold text-theme-orange hover:underline"
                    >
                      View All →
                    </Link>
                  </div>
                  {services.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-4 py-2 text-sm text-slate-700 hover:text-theme-orange hover:bg-slate-50 transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-slate-700 hover:text-theme-orange font-medium text-[15px] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right Action: Clean Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#quote"
              className="bg-theme-orange hover:bg-theme-orangeHover text-white font-medium text-sm px-5 py-2.5 rounded-md transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Drawer (Right side slide-in, partial width with backdrop) */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Darkened Backdrop (Click to close) */}
        <div
          onClick={closeMobileMenu}
          className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Side Panel (Right-aligned, ~72% width on phone, max 320px on tablet) */}
        <aside
          className={`absolute top-0 right-0 bottom-0 w-[72%] sm:w-[320px] max-w-sm bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="Mobile navigation"
        >
          {/* Header of Drawer */}
          <div className="flex items-center justify-between p-4 border-b border-slate-100">
            <Link href="/" onClick={closeMobileMenu} className="relative h-9 w-36 block">
              <Image
                src="/images/seven-routes-logo.png"
                alt="Seven Routes Logistics"
                fill
                sizes="144px"
                className="object-contain object-left"
              />
            </Link>
            <button
              type="button"
              onClick={closeMobileMenu}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-theme-orange hover:text-white text-slate-500 flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links (Scrollable area) */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-1">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block py-2.5 text-base font-semibold text-slate-800 hover:text-theme-orange transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="block py-2.5 text-base font-semibold text-slate-800 hover:text-theme-orange transition-colors"
            >
              About Us
            </Link>

            {/* Collapsible Services Accordion */}
            <div className="py-1">
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-slate-800 hover:text-theme-orange transition-colors text-left"
                aria-expanded={isMobileServicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    isMobileServicesOpen ? 'rotate-180 text-theme-orange' : ''
                  }`}
                />
              </button>

              {isMobileServicesOpen && (
                <div className="pl-3 pr-2 py-2 my-1 space-y-1 bg-slate-50 rounded-lg border border-slate-100">
                  <Link
                    href="/services"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between py-1.5 text-xs font-semibold text-theme-orange uppercase tracking-wider hover:underline"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <div className="border-t border-slate-200/70 my-1" />
                  {services.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block py-1.5 text-xs sm:text-sm text-slate-600 hover:text-theme-orange transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block py-2.5 text-base font-semibold text-slate-800 hover:text-theme-orange transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Footer CTA of Drawer */}
          <div className="p-5 border-t border-slate-100 bg-slate-50/60 space-y-3">
            <Link
              href="/#quote"
              onClick={closeMobileMenu}
              className="w-full bg-theme-orange hover:bg-theme-orangeHover text-white font-medium text-sm py-3 rounded-lg text-center block shadow-sm transition-colors"
            >
              Get a Quote
            </Link>

            <div className="text-xs text-slate-500 text-center space-y-1 pt-1">
              <a
                href="tel:+918128128791"
                className="block hover:text-theme-orange transition-colors font-medium text-slate-700"
              >
                📞 +91 81281 28791
              </a>
              <span className="block text-slate-400 text-[11px]">ops@sevenrouteslogistics.com</span>
            </div>
          </div>
        </aside>
      </div>
    </nav>
  );
}
