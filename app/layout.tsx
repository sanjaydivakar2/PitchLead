import type { Metadata } from 'next';
import { Inter, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Providers } from '@/components/providers';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'PitchLead - High-Signal B2B Stories in 3 Minutes',
    template: '%s | PitchLead',
  },
  description: 'The QVC for B2B. Discover and share compelling business stories through 3-minute micro-webinars.',
  keywords: ['B2B', 'video', 'webinars', 'business stories', 'lead generation', 'sales'],
  authors: [{ name: 'PitchLead Team' }],
  creator: 'PitchLead',
  publisher: 'PitchLead',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'PitchLead - High-Signal B2B Stories in 3 Minutes',
    description: 'The QVC for B2B. Discover and share compelling business stories through 3-minute micro-webinars.',
    siteName: 'PitchLead',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PitchLead - High-Signal B2B Stories in 3 Minutes',
    description: 'The QVC for B2B. Discover and share compelling business stories through 3-minute micro-webinars.',
    creator: '@pitchlead',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <UserProvider>
          <Providers>
            {children}
            <Toaster />
          </Providers>
        </UserProvider>
      </body>
    </html>
  );
}
