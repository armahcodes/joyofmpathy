'use client';

import { Box, Container, Flex, Button, HStack, Image } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bg="rgba(10, 10, 10, 0.8)"
      backdropFilter="blur(20px)"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Image
              src="https://2rdt098dpqdmx48s.public.blob.vercel-storage.com/Empathy_Logo.png"
              alt="Empathy - A Hero's Journey"
              h={{ base: '36px', md: '44px' }}
              objectFit="contain"
              transition="all 0.3s ease"
              _hover={{ filter: 'brightness(1.2)' }}
            />
          </Link>

          {/* CTA Buttons */}
          <HStack gap={3}>
            <Link href="#film-preview">
              <Button
                variant="ghost"
                color="whiteAlpha.700"
                _hover={{ color: 'gold', bg: 'transparent' }}
                fontSize="sm"
                fontWeight="400"
                fontFamily="var(--font-body)"
                letterSpacing="0.02em"
                display={{ base: 'none', sm: 'flex' }}
              >
                Watch Preview
              </Button>
            </Link>
            <Link href="#subscribe">
              <Button
                bg="linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)"
                color="black"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 25px rgba(212, 175, 55, 0.25)',
                }}
                transition="all 0.3s ease"
                fontWeight="600"
                fontFamily="var(--font-body)"
                fontSize="sm"
                letterSpacing="0.02em"
                borderRadius="full"
                px={6}
                py={5}
              >
                Join Challenge
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
