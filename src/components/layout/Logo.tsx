import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const isWhite = variant === 'light';

  return (
    <Link href="/" className={`inline-block ${className}`}>
      <div className="relative h-14 w-56 sm:h-16 sm:w-64">
        <Image
          src="/images/seven-routes-logo.png"
          alt="Seven Routes Logistics International Pvt Ltd"
          fill
          priority
          sizes="(max-width: 768px) 224px, 256px"
          className="object-contain object-left"
        />
      </div>
    </Link>
  );
}
