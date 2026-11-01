import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

const DESCRIPTION =
  'An open source Professional Services Automation platform designed '
  + 'specifically for smaller MSPs. ' +
  'Tickets, contracts, quotes, invoices, projects and time - self-host it ' +
  'yourself, own your data, pay nobody per seat.';

export const metadata: Metadata = {
  metadataBase: new URL('https://xantypsa.com'),
  title: {
    default: 'Xanty PSA - Open Source PSA for Smaller MSPs',
    template: '%s - Xanty PSA',
  },
  description: DESCRIPTION,
  keywords: [
    'open source PSA',
    'MSP software',
    'PSA for small MSPs',
    'professional services automation',
    'self-hosted PSA',
    'Autotask alternative',
    'HaloPSA alternative',
    'ConnectWise alternative',
    'MSP ticketing',
  ],
  openGraph: {
    title: 'Xanty PSA - Open Source PSA for Smaller MSPs',
    description: DESCRIPTION,
    url: 'https://xantypsa.com',
    siteName: 'Xanty PSA',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xanty PSA - Open Source PSA for Smaller MSPs',
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
