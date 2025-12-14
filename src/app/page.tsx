'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Text,
  VStack,
  HStack,
  Grid,
  Stack,
  Flex,
  Input,
} from '@chakra-ui/react';
import Link from 'next/link';
import {
  FiPlay,
  FiCalendar,
  FiHeart,
  FiStar,
  FiCheck,
  FiClock,
  FiUsers,
} from 'react-icons/fi';

export default function Home() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      setStatus('error');
      setMessage('Please enter your first and last name');
      return;
    }

    if (!email) {
      setStatus('error');
      setMessage('Please enter your email');
      return;
    }

    setStatus('loading');

    // Mailchimp JSONP endpoint
    const mailchimpUrl = 'https://joyofempathy.us14.list-manage.com/subscribe/post-json?u=4b8b4a83e65695926ae311d87&id=0f44b0a872&c=callback';

    const params = new URLSearchParams({
      EMAIL: email,
      FNAME: firstName,
      LNAME: lastName,
    });

    try {
      // Use JSONP approach for Mailchimp
      const callbackName = 'mc_callback_' + Date.now();

      await new Promise<void>((resolve, reject) => {
        (window as unknown as Record<string, (response: { result: string; msg: string }) => void>)[callbackName] = (response: { result: string; msg: string }) => {
          delete (window as unknown as Record<string, unknown>)[callbackName];
          document.getElementById('mc-script')?.remove();

          if (response.result === 'success') {
            setStatus('success');
            setMessage("You're in! Check your inbox for next steps.");
            setEmail('');
            setFirstName('');
            setLastName('');
            resolve();
          } else {
            // Clean up Mailchimp's error messages
            let errorMsg = response.msg || 'Something went wrong';
            if (errorMsg.includes('already subscribed')) {
              errorMsg = "You're already subscribed!";
            } else if (errorMsg.includes('0 -')) {
              errorMsg = errorMsg.split('0 - ')[1] || errorMsg;
            }
            setStatus('error');
            setMessage(errorMsg);
            reject(new Error(errorMsg));
          }
        };

        const script = document.createElement('script');
        script.id = 'mc-script';
        script.src = `${mailchimpUrl.replace('c=callback', `c=${callbackName}`)}&${params.toString()}`;
        script.onerror = () => {
          setStatus('error');
          setMessage('Failed to connect. Please try again.');
          reject(new Error('Script load failed'));
        };
        document.body.appendChild(script);

        // Timeout after 10 seconds
        setTimeout(() => {
          if ((window as unknown as Record<string, unknown>)[callbackName]) {
            delete (window as unknown as Record<string, unknown>)[callbackName];
            document.getElementById('mc-script')?.remove();
            setStatus('error');
            setMessage('Request timed out. Please try again.');
            reject(new Error('Timeout'));
          }
        }, 10000);
      });
    } catch {
      // Error already handled in the promise
    }
  };

  const features = [
    {
      icon: FiCalendar,
      title: 'Daily Video Lessons',
      description: "Short, powerful videos introducing each day's theme and practice.",
    },
    {
      icon: FiHeart,
      title: 'Guided Meditations',
      description: 'Tibetan-inspired practices to open your heart and quiet your mind.',
    },
    {
      icon: FiStar,
      title: 'Reflection Exercises',
      description: 'Journaling prompts to deepen understanding and track growth.',
    },
    {
      icon: FiClock,
      title: '15 Minutes a Day',
      description: 'Designed to fit your schedule while creating lasting change.',
    },
    {
      icon: FiUsers,
      title: 'Community Support',
      description: 'Connect with fellow challengers and share your journey.',
    },
    {
      icon: FiCheck,
      title: 'Science-Backed',
      description: 'Practices validated by neuroscience from leading institutions.',
    },
  ];

  const journey = [
    { day: '1-2', title: 'Awareness', description: 'Recognize patterns and open to new possibilities' },
    { day: '3-4', title: 'Understanding', description: 'Explore the roots of suffering and joy' },
    { day: '5-6', title: 'Practice', description: 'Embody new ways of being and relating' },
    { day: '7', title: 'Integration', description: 'Commit to lasting change and growth' },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        position="relative"
        overflow="hidden"
        minH={{ base: '100vh', md: '90vh' }}
        display="flex"
        alignItems="center"
        className="spotlight"
      >
        {/* Mandala Pattern - Left */}
        <Box
          className="mandala-pattern"
          left="-400px"
          top="50%"
          transform="translateY(-50%)"
        />
        {/* Mandala Pattern - Right */}
        <Box
          className="mandala-pattern"
          right="-400px"
          top="50%"
          transform="translateY(-50%)"
          style={{ animationDirection: 'reverse' }}
        />

        <Container maxW="container.xl" py={{ base: 20, md: 32 }} pt={{ base: 28, md: 40 }} px={{ base: 5, md: 6 }} position="relative" zIndex={1}>
          <VStack gap={{ base: 5, md: 10 }} textAlign="center" maxW="4xl" mx="auto">
            {/* Eyebrow */}
            <Text
              fontSize={{ base: '2xs', md: 'sm' }}
              fontWeight="500"
              letterSpacing={{ base: '0.15em', md: '0.3em' }}
              textTransform="uppercase"
              color="gold"
              opacity={0}
              className="animate-fade-in-up"
              fontFamily="var(--font-body)"
              px={2}
            >
              A Hero&apos;s Journey Documentary
            </Text>

            {/* Main Heading */}
            <Box opacity={0} className="animate-fade-in-up delay-100">
              <Text
                as="h1"
                fontSize={{ base: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem', xl: '6rem' }}
                fontWeight="400"
                lineHeight="1.1"
                fontFamily="var(--font-display)"
                letterSpacing="-0.02em"
              >
                Transform Your Life
                <br />
                <Text
                  as="span"
                  className="gold-shimmer"
                  fontWeight="600"
                  fontStyle="italic"
                >
                  in 7 Days
                </Text>
              </Text>
            </Box>

            {/* Luxury Divider */}
            <Box opacity={0} className="animate-fade-in delay-200">
              <Box className="luxury-divider">
                <Box className="diamond" />
              </Box>
            </Box>

            {/* Subheading */}
            <Text
              fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}
              color="whiteAlpha.700"
              maxW="2xl"
              px={{ base: 2, md: 0 }}
              lineHeight="1.7"
              fontWeight="300"
              opacity={0}
              className="animate-fade-in-up delay-300"
              fontFamily="var(--font-body)"
            >
              Join the <Text as="span" color="gold" fontWeight="500">Empathy 7 Day Challenge</Text> and
              discover the path from suffering to joy.
            </Text>

            {/* CTA Buttons */}
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              gap={3}
              pt={2}
              w={{ base: 'full', sm: 'auto' }}
              opacity={0}
              className="animate-fade-in-up delay-400"
            >
              <Link href="#subscribe">
                <Button
                  size={{ base: 'md', md: 'lg' }}
                  bg="linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)"
                  color="black"
                  _hover={{
                    transform: 'translateY(-3px)',
                    boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)'
                  }}
                  transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  px={{ base: 6, md: 10 }}
                  py={{ base: 5, md: 7 }}
                  fontSize={{ base: 'sm', md: 'md' }}
                  fontWeight="600"
                  fontFamily="var(--font-body)"
                  letterSpacing="0.05em"
                  borderRadius="full"
                  w={{ base: 'full', sm: 'auto' }}
                >
                  Join the 7 Day Challenge
                </Button>
              </Link>
              <Link href="#film-preview">
                <Button
                  size={{ base: 'md', md: 'lg' }}
                  variant="outline"
                  borderColor="gold"
                  borderWidth="1px"
                  color="gold"
                  _hover={{
                    bg: 'rgba(212, 175, 55, 0.1)',
                    transform: 'translateY(-3px)'
                  }}
                  transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  px={{ base: 6, md: 10 }}
                  py={{ base: 5, md: 7 }}
                  fontSize={{ base: 'sm', md: 'md' }}
                  fontWeight="500"
                  fontFamily="var(--font-body)"
                  letterSpacing="0.05em"
                  borderRadius="full"
                  w={{ base: 'full', sm: 'auto' }}
                >
                  <HStack gap={2}>
                    <FiPlay />
                    <Text>Watch Preview</Text>
                  </HStack>
                </Button>
              </Link>
            </Stack>

            {/* Stats */}
            <Grid
              templateColumns="repeat(3, 1fr)"
              gap={{ base: 4, md: 12 }}
              pt={{ base: 6, md: 16 }}
              w="full"
              maxW="2xl"
              opacity={0}
              className="animate-fade-in-up delay-500"
            >
              {[
                { value: '7', label: 'Days' },
                { value: 'Daily', label: 'Practices' },
                { value: 'Free', label: 'To Join' },
              ].map((stat, i) => (
                <VStack key={i} gap={0}>
                  <Text
                    fontSize={{ base: '2rem', md: '4rem' }}
                    fontWeight="300"
                    fontFamily="var(--font-display)"
                    color="gold"
                    lineHeight="1.2"
                  >
                    {stat.value}
                  </Text>
                  <Text
                    fontSize={{ base: '2xs', md: 'sm' }}
                    color="whiteAlpha.600"
                    textTransform="uppercase"
                    letterSpacing="0.1em"
                    fontFamily="var(--font-body)"
                  >
                    {stat.label}
                  </Text>
                </VStack>
              ))}
            </Grid>
          </VStack>
        </Container>

        {/* Bottom gradient fade */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          h="200px"
          bgGradient="linear(to-t, #0A0A0A, transparent)"
          pointerEvents="none"
        />
      </Box>

      {/* Film Preview Section */}
      <Box id="film-preview" bg="#0A0A0A" py={{ base: 12, md: 24 }} position="relative">
        <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
          <VStack gap={{ base: 6, md: 14 }}>
            <VStack gap={{ base: 3, md: 5 }} textAlign="center">
              <Text
                color="gold"
                fontWeight="500"
                textTransform="uppercase"
                letterSpacing={{ base: '0.15em', md: '0.3em' }}
                fontSize={{ base: '2xs', md: 'xs' }}
                fontFamily="var(--font-body)"
              >
                A Documentary Film
              </Text>
              <Text
                as="h2"
                fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
                fontFamily="var(--font-display)"
                fontWeight="400"
                lineHeight="1.2"
                px={2}
              >
                Empathy: In The{' '}
                <Text as="span" color="gold" fontStyle="italic">
                  Pursuit of Joy
                </Text>
              </Text>
              <Text
                color="whiteAlpha.600"
                maxW="xl"
                fontSize={{ base: 'xs', md: 'md' }}
                lineHeight="1.7"
                fontFamily="var(--font-body)"
                px={2}
              >
                Watch the exclusive preview of our documentary.
              </Text>
            </VStack>

            <Box
              className="video-glow"
              w="full"
              borderRadius="xl"
              overflow="hidden"
              position="relative"
              paddingBottom="56.25%"
              height="0"
            >
              <iframe
                src="https://player.mux.com/Ipof2Bef02N00c85VC02DxSiHaWjBdbRCPlS00EdsV1U63Q?metadata-video-title=Empathy+-+In+The+Pursuit+of+Joy&video-title=Empathy+-+In+The+Pursuit+of+Joy"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '0.75rem',
                }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box id="learn-more" bg="#0F0F0F" py={{ base: 10, md: 24 }} position="relative" overflow="hidden">
        {/* Subtle mandala in background */}
        <Box
          className="mandala-pattern"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
          opacity={0.02}
          w="1200px"
          h="1200px"
          display={{ base: 'none', md: 'block' }}
        />

        <Container maxW="container.xl" px={{ base: 4, md: 6 }} position="relative" zIndex={1}>
          <VStack gap={{ base: 2, md: 4 }} textAlign="center" mb={{ base: 6, md: 20 }}>
            <Text
              as="h2"
              fontSize={{ base: 'lg', md: '3xl', lg: '4xl' }}
              fontFamily="var(--font-display)"
              fontWeight="400"
              px={2}
            >
              What You&apos;ll Experience in{' '}
              <Text as="span" color="gold" fontStyle="italic">7 Days</Text>
            </Text>
            <Text
              color="whiteAlpha.600"
              maxW="xl"
              fontSize={{ base: 'xs', md: 'md' }}
              fontFamily="var(--font-body)"
            >
              Each day brings new insights and breakthroughs.
            </Text>
          </VStack>

          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={{ base: 3, md: 6 }}
          >
            {features.map((feature, i) => (
              <Box
                key={i}
                className="feature-card"
                bg="rgba(26, 26, 26, 0.6)"
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius={{ base: 'xl', md: '2xl' }}
                p={{ base: 4, md: 8 }}
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  h: '3px',
                  bg: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
                }}
              >
                <VStack align="center" gap={{ base: 2, md: 4 }} textAlign="center">
                  <Flex
                    w={{ base: 10, md: 14 }}
                    h={{ base: 10, md: 14 }}
                    bg="linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)"
                    borderRadius={{ base: 'lg', md: 'xl' }}
                    alignItems="center"
                    justifyContent="center"
                    color="black"
                    fontSize={{ base: 'md', md: 'xl' }}
                  >
                    <feature.icon />
                  </Flex>
                  <Text
                    fontSize={{ base: 'sm', md: 'xl' }}
                    fontFamily="var(--font-display)"
                    fontWeight="500"
                    color="white"
                  >
                    {feature.title}
                  </Text>
                  <Text
                    color="whiteAlpha.600"
                    fontSize={{ base: '2xs', md: 'sm' }}
                    lineHeight="1.5"
                    fontFamily="var(--font-body)"
                    display={{ base: 'none', sm: 'block' }}
                  >
                    {feature.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Journey Breakdown */}
      <Box bg="#0A0A0A" py={{ base: 10, md: 24 }} position="relative">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack gap={{ base: 2, md: 4 }} textAlign="center" mb={{ base: 6, md: 20 }}>
            <Text
              as="h2"
              fontSize={{ base: 'lg', md: '3xl', lg: '4xl' }}
              fontFamily="var(--font-display)"
              fontWeight="400"
            >
              Your{' '}
              <Text as="span" color="gold" fontStyle="italic">7 Day Journey</Text>
            </Text>
            <Text
              color="whiteAlpha.600"
              maxW="xl"
              fontSize={{ base: 'xs', md: 'md' }}
              fontFamily="var(--font-body)"
            >
              A path from awareness to transformation
            </Text>
          </VStack>

          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
            gap={{ base: 3, md: 6 }}
          >
            {journey.map((phase, i) => (
              <VStack
                key={i}
                p={{ base: 4, md: 8 }}
                bg="rgba(26, 26, 26, 0.4)"
                borderRadius="xl"
                border="1px solid"
                borderColor="whiteAlpha.100"
                gap={{ base: 3, md: 5 }}
                textAlign="center"
                transition="all 0.4s ease"
                _hover={{
                  borderColor: 'gold',
                  transform: 'translateY(-4px)',
                }}
              >
                <Flex
                  className="day-badge"
                  w={{ base: 12, md: 20 }}
                  h={{ base: 12, md: 20 }}
                  bg="linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)"
                  borderRadius="full"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  color="black"
                >
                  <Text fontSize={{ base: '2xs', md: 'xs' }} fontWeight="600" lineHeight={1} fontFamily="var(--font-body)">
                    DAY
                  </Text>
                  <Text fontSize={{ base: 'md', md: '2xl' }} fontWeight="700" lineHeight={1} fontFamily="var(--font-display)">
                    {phase.day}
                  </Text>
                </Flex>
                <Text
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontFamily="var(--font-display)"
                  fontWeight="500"
                  color="gold"
                >
                  {phase.title}
                </Text>
                <Text
                  color="whiteAlpha.600"
                  fontSize={{ base: '2xs', md: 'sm' }}
                  lineHeight="1.6"
                  fontFamily="var(--font-body)"
                >
                  {phase.description}
                </Text>
              </VStack>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        id="subscribe"
        bg="#0A0A0A"
        py={{ base: 10, md: 24 }}
        position="relative"
        overflow="hidden"
      >
        {/* Mandala background */}
        <Box
          className="mandala-pattern"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
          opacity={0.03}
          w="1000px"
          h="1000px"
          display={{ base: 'none', md: 'block' }}
        />

        <Container maxW="container.md" px={{ base: 4, md: 6 }} position="relative" zIndex={1}>
          <VStack
            gap={{ base: 5, md: 10 }}
            textAlign="center"
            bg="rgba(26, 26, 26, 0.6)"
            backdropFilter="blur(20px)"
            p={{ base: 5, md: 14 }}
            borderRadius={{ base: '2xl', md: '3xl' }}
            border="2px solid"
            borderColor="gold"
            boxShadow="0 0 60px rgba(212, 175, 55, 0.15)"
          >
            <VStack gap={{ base: 2, md: 4 }}>
              <Text
                as="h2"
                fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
                fontFamily="var(--font-display)"
                fontWeight="400"
                lineHeight="1.2"
              >
                Ready to Start Your{' '}
                <Text as="span" color="gold" fontStyle="italic" fontWeight="500">
                  7 Day Challenge?
                </Text>
              </Text>
              <Text
                color="whiteAlpha.600"
                maxW="lg"
                fontSize={{ base: 'xs', md: 'md' }}
                lineHeight="1.6"
                fontFamily="var(--font-body)"
                px={2}
              >
                Sign up to be the first to know when the challenge begins.
              </Text>
            </VStack>

            {status === 'success' ? (
              <VStack gap={3} py={4}>
                <Flex
                  w={{ base: 14, md: 20 }}
                  h={{ base: 14, md: 20 }}
                  bg="linear-gradient(135deg, #22C55E 0%, #16A34A 100%)"
                  borderRadius="full"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="0 0 40px rgba(34, 197, 94, 0.3)"
                >
                  <FiCheck size={28} color="white" />
                </Flex>
                <Text
                  color="#22C55E"
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight="500"
                  fontFamily="var(--font-body)"
                >
                  {message}
                </Text>
              </VStack>
            ) : (
              <Box as="form" onSubmit={handleSubscribe} w="full" maxW="md">
                <VStack gap={{ base: 2, md: 3 }}>
                  {/* Name Fields */}
                  <HStack gap={{ base: 2, md: 3 }} w="full">
                    <Input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      size={{ base: 'md', md: 'lg' }}
                      bg="rgba(10, 10, 10, 0.8)"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      borderRadius="full"
                      px={{ base: 4, md: 6 }}
                      py={{ base: 4, md: 6 }}
                      color="white"
                      fontSize={{ base: 'sm', md: 'md' }}
                      _hover={{ borderColor: 'gold' }}
                      _focus={{ borderColor: 'gold', boxShadow: '0 0 0 1px #D4AF37' }}
                      _placeholder={{ color: 'whiteAlpha.400' }}
                      fontFamily="var(--font-body)"
                      flex={1}
                    />
                    <Input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      size={{ base: 'md', md: 'lg' }}
                      bg="rgba(10, 10, 10, 0.8)"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      borderRadius="full"
                      px={{ base: 4, md: 6 }}
                      py={{ base: 4, md: 6 }}
                      color="white"
                      fontSize={{ base: 'sm', md: 'md' }}
                      _hover={{ borderColor: 'gold' }}
                      _focus={{ borderColor: 'gold', boxShadow: '0 0 0 1px #D4AF37' }}
                      _placeholder={{ color: 'whiteAlpha.400' }}
                      fontFamily="var(--font-body)"
                      flex={1}
                    />
                  </HStack>
                  {/* Email */}
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size={{ base: 'md', md: 'lg' }}
                    bg="rgba(10, 10, 10, 0.8)"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    borderRadius="full"
                    px={{ base: 4, md: 6 }}
                    py={{ base: 4, md: 6 }}
                    color="white"
                    fontSize={{ base: 'sm', md: 'md' }}
                    _hover={{ borderColor: 'gold' }}
                    _focus={{ borderColor: 'gold', boxShadow: '0 0 0 1px #D4AF37' }}
                    _placeholder={{ color: 'whiteAlpha.400' }}
                    fontFamily="var(--font-body)"
                    w="full"
                  />
                  {/* Submit */}
                  <Button
                    type="submit"
                    size={{ base: 'md', md: 'lg' }}
                    bg="linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)"
                    color="black"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
                    }}
                    transition="all 0.3s ease"
                    px={8}
                    py={{ base: 5, md: 6 }}
                    fontWeight="600"
                    fontFamily="var(--font-body)"
                    borderRadius="full"
                    letterSpacing="0.02em"
                    fontSize={{ base: 'sm', md: 'md' }}
                    loading={status === 'loading'}
                    disabled={status === 'loading'}
                    w="full"
                  >
                    Join the Challenge
                  </Button>
                </VStack>
                {status === 'error' && (
                  <Text color="#EF4444" fontSize="xs" mt={2} fontFamily="var(--font-body)">
                    {message}
                  </Text>
                )}
              </Box>
            )}

            <HStack gap={{ base: 3, md: 6 }} flexWrap="wrap" justifyContent="center">
              {['100% Free', 'No Credit Card', 'Unsubscribe Anytime'].map((item, i) => (
                <HStack key={i} gap={1.5}>
                  <Box w={1} h={1} bg="gold" borderRadius="full" />
                  <Text
                    fontSize={{ base: '2xs', md: 'xs' }}
                    color="whiteAlpha.500"
                    textTransform="uppercase"
                    letterSpacing="0.05em"
                    fontFamily="var(--font-body)"
                  >
                    {item}
                  </Text>
                </HStack>
              ))}
            </HStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
