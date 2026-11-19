import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://sevenroutes.com'),
  title: {
    default: 'Seven Routes Logistics International Pvt Ltd | Connecting Cargo. Delivering Trust.',
    template: '%s | Seven Routes Logistics International Pvt Ltd',
  },
  description:
    'Seven Routes Logistics International Pvt Ltd — Connecting Cargo. Delivering Trust. Leading Indian freight forwarder, licensed Multimodal Transport Operator (MTO), specialized ISO tanks liquid bulk, and direct port customs clearance (CHA).',
  keywords: [
    'Seven Routes Logistics',
    'Seven Routes Logistics International Pvt Ltd',
    'Freight Forwarder India',
    'ISO Tank Logistics',
    'Sea Freight FCL LCL',
    'Customs Clearance CHA JNPT Mundra Hazira',
    'Liquid Bulk Cargo India',
    'Multimodal Transport Operator MTO',
  ],
  authors: [{ name: 'Seven Routes Logistics International Pvt Ltd' }],
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    title: 'Seven Routes Logistics International Pvt Ltd | Global Freight Forwarder',
    description:
      'Seamless international ocean freight, specialized ISO tank containers, and port customs clearance across India.',
    url: 'https://sevenroutes.com',
    siteName: 'Seven Routes Logistics',
    images: [
      {
        url: '/images/slider-1.webp',
        width: 1200,
        height: 630,
        alt: 'Seven Routes Logistics Maritime Shipping',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-white text-[#121212] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
