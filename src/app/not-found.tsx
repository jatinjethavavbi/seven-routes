'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, Ship, Home, PhoneCall } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="w-20 h-20 bg-amber-50 text-theme-orange rounded-full flex items-center justify-center mx-auto">
            <Ship className="w-10 h-10" />
          </div>

          <span className="text-xs font-bold text-theme-orange uppercase tracking-widest font-heading block">
            404 Error • Page Not Found
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-theme-title">
            Waypoint Off Course
          </h1>

          <p className="text-sm text-theme-body leading-relaxed max-w-md mx-auto">
            The page or maritime route you are looking for does not exist or may have been relocated.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="bg-theme-orange hover:bg-theme-orangeHover text-white font-heading font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow transition-colors inline-flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>

            <Link
              href="/contact"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-colors inline-flex items-center space-x-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Port Desk</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

