import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

const DESCRIPTION =
  'An open source Professional Services Automation platform for MSPs. ' +
  'Tickets, contracts, quotes, invoices, projects and time — self-host it ' +
  'yourself, own your data, pay nobody per seat.';

export const metadata: Metadata = {
  metadataBase: new URL('https://vibepsa.net'),
  title: {
    default: 'VibePSA — Open Source PSA for MSPs',
    template: '%s — VibePSA',
  },
  description: DESCRIPTION,
  keywords: [
    'open source PSA',
    'MSP software',
    'professional services automation',
    'self-hosted PSA',
    'Autotask alternative',
    'HaloPSA alternative',
    'ConnectWise alternative',
    'MSP ticketing',
  ],
  openGraph: {
    title: 'VibePSA — Open Source PSA for MSPs',
    description: DESCRIPTION,
    url: 'https://vibepsa.net',
    siteName: 'VibePSA',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VibePSA — Open Source PSA for MSPs',
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
