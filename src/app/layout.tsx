import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://sevenrouteslogistics.com'),
  title: {
    default: 'Seven Routes Logistics International Pvt. Ltd. | Connecting Businesses. Moving Possibilities.',
    template: '%s | Seven Routes Logistics International Pvt. Ltd.',
  },
  description:
    'Seven Routes Logistics International Pvt. Ltd. — Freight forwarding expertise with a specialised focus on pharma and chemicals. Professionally managed, licensed by FMC, MTO, and IEC, with offices across Mumbai, Ahmedabad, and Surat.',
  keywords: [
    'Seven Routes Logistics',
    'Seven Routes Logistics International Pvt Ltd',
    'Pharma and Chemicals Export Logistics',
    'Chemical Export Logistics',
    'Freight Forwarding India',
    'FMC Licensed Forwarder',
    'Multimodal Transport Operator MTO',
    'IEC Licensed',
    'ISO Tank Liquid Bulk',
    'Ocean Freight FCL LCL',
    'Mumbai Logistics',
    'Ahmedabad Logistics',
    'Surat Logistics',
  ],
  authors: [{ name: 'Seven Routes Logistics International Pvt. Ltd.' }],
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    title: 'Seven Routes Logistics International Pvt. Ltd. | Connecting Businesses. Moving Possibilities.',
    description:
      'Freight forwarding expertise with a specialised focus on chemical exports. Licensed by FMC, MTO, and IEC.',
    url: 'https://sevenrouteslogistics.com',
    siteName: 'Seven Routes Logistics International Pvt. Ltd.',
    images: [
      {
        url: '/images/slider-1.webp',
        width: 1200,
        height: 630,
        alt: 'Seven Routes Logistics Maritime & Chemical Freight',
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
