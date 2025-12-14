'use client';

import { Box, Container, VStack, Text, HStack, Image, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';

export function Footer() {
  return (
    <Box
      as="footer"
      bg="#000000"
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
      position="relative"
      overflow="hidden"
    >
      {/* Subtle mandala pattern */}
      <Box
        className="mandala-pattern"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        opacity={0.015}
        w="600px"
        h="600px"
      />

      <Container maxW="container.xl" py={{ base: 12, md: 16 }} position="relative" zIndex={1}>
        <VStack gap={10}>
          {/* Logo */}
          <Image
            src="https://2rdt098dpqdmx48s.public.blob.vercel-storage.com/Empathy_Logo.png"
            alt="Empathy - A Hero's Journey"
            h={{ base: '50px', md: '60px' }}
            objectFit="contain"
          />

          {/* Tagline */}
          <Text
            fontSize="sm"
            color="whiteAlpha.500"
            textAlign="center"
            maxW="md"
            fontFamily="var(--font-body)"
            lineHeight="1.8"
          >
            A transformational journey bridging ancient Tibetan wisdom
            with modern neuroscience.
          </Text>

          {/* Luxury Divider */}
          <Box className="luxury-divider" maxW="200px">
            <Box className="diamond" />
          </Box>

          {/* Social Links */}
          <HStack gap={6}>
            {[
              { icon: FiInstagram, href: '#', label: 'Instagram' },
              { icon: FiFacebook, href: '#', label: 'Facebook' },
              { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
            ].map((social, i) => (
              <Link key={i} href={social.href} aria-label={social.label}>
                <Flex
                  w={10}
                  h={10}
                  borderRadius="full"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  alignItems="center"
                  justifyContent="center"
                  color="whiteAlpha.600"
                  transition="all 0.3s ease"
                  _hover={{
                    borderColor: 'gold',
                    color: 'gold',
                    transform: 'translateY(-2px)',
                  }}
                >
                  <social.icon size={18} />
                </Flex>
              </Link>
            ))}
          </HStack>

          {/* Copyright */}
          <Text
            fontSize="xs"
            color="whiteAlpha.400"
            fontFamily="var(--font-body)"
            letterSpacing="0.05em"
          >
            © 2025 Empathy. All rights reserved.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
