'use client';

import React from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="sticky top-0 lg:top-[-40px] z-50 w-full transition-all duration-200">
      <TopBar />
      <Navbar />
    </header>
  );
}
