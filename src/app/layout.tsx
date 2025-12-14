import type { Metadata } from 'next';
import { Providers } from './providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Box, Flex } from '@chakra-ui/react';
import './globals.css';

const siteUrl = 'https://joyofempathy.com';
const ogImage = 'https://2rdt098dpqdmx48s.public.blob.vercel-storage.com/Empathy_Logo.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Empathy | 7 Day Challenge - Transform Your Life',
    template: '%s | Empathy',
  },
  description: 'Join the Empathy 7 Day Challenge. Discover the path from suffering to joy through ancient Tibetan wisdom and modern neuroscience. A documentary film experience.',
  keywords: ['empathy', '7 day challenge', 'transformation', 'Tibetan wisdom', 'neuroscience', 'meditation', 'mindfulness', 'documentary film', 'self-improvement', 'mental health', 'spiritual growth', 'joy', 'suffering', 'healing'],
  authors: [{ name: 'Empathy' }],
  creator: 'Empathy',
  publisher: 'Empathy',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Empathy',
    title: 'Empathy | 7 Day Challenge - Transform Your Life',
    description: 'Join the Empathy 7 Day Challenge. Discover the path from suffering to joy through ancient Tibetan wisdom and modern neuroscience.',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Empathy - In The Pursuit of Joy | A Documentary Film',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Empathy | 7 Day Challenge - Transform Your Life',
    description: 'Join the Empathy 7 Day Challenge. Discover the path from suffering to joy through ancient Tibetan wisdom and modern neuroscience.',
    images: [ogImage],
    creator: '@joyofempathy',
  },
  icons: {
    icon: ogImage,
    shortcut: ogImage,
    apple: ogImage,
  },
  manifest: '/manifest.json',
  category: 'wellness',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: '100vh' }}>
        <Providers>
          <div className="film-grain" />
          <Flex direction="column" minH="100vh">
            <Header />
            <Box as="main" flex="1">
              {children}
            </Box>
            <Footer />
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
