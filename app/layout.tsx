import type { Metadata } from 'next';
import { Cormorant_Garamond, Libre_Baskerville, Manrope } from 'next/font/google';
import { FaqChatbot } from '@/components/layout/FaqChatbot';
import { Footer } from '@/components/layout/Footer';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { Navbar } from '@/components/layout/Navbar';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { siteSettings } from '@/lib/content';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap'
});

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
  display: 'swap'
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteSettings.url),
  title: {
    default: 'Ecogen Retreat – BE A BUTTERFLY IN OUR PARADISE!',
    template: '%s | Ecogen Retreat'
  },
  description:
    'Ecogen Retreat is a premium nature stay resort where luxury, greenery, and comfort come together.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Ecogen Retreat',
    description:
      'Ecogen Retreat is a premium nature stay resort where luxury, greenery, and comfort come together.',
    url: siteSettings.url,
    siteName: 'Ecogen Retreat',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecogen Retreat',
    description:
      'Ecogen Retreat is a premium nature stay resort where luxury, greenery, and comfort come together.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${libreBaskerville.variable} ${manrope.variable}`}>
      <body>
        <Navbar />
        <MobileMenu />
        {children}
        <FaqChatbot />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
