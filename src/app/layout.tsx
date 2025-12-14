import type { Metadata } from 'next';
import { Providers } from './providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Box, Flex } from '@chakra-ui/react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Empathy | 7 Day Challenge - Transform Your Life',
  description: 'Join the Empathy 7 Day Challenge. Discover the path from suffering to joy through ancient Tibetan wisdom and modern neuroscience.',
  keywords: 'empathy, 7 day challenge, transformation, Tibetan wisdom, neuroscience, meditation, mindfulness, documentary film',
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
