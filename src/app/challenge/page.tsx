'use client';

import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
  HStack,
  Card,
  Badge,
  Input,
  Progress,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiHeart, FiMail, FiGift, FiPlay, FiCheck, FiLock, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface ChallengeSignupData {
  email: string;
}

const challengeDays = [
  {
    day: 1,
    title: 'Awareness',
    description: 'Begin with a simple breath awareness practice and self-reflection.',
    practice: 'Morning Breath Meditation',
    duration: '10 min',
    unlocked: true,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
  },
  {
    day: 2,
    title: 'Compassion',
    description: 'Learn the basics of self-compassion and loving-kindness.',
    practice: 'Loving-Kindness for Self',
    duration: '12 min',
    unlocked: false,
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80',
  },
  {
    day: 3,
    title: 'Connection',
    description: 'Expand compassion outward to those you love.',
    practice: 'Loving-Kindness for Others',
    duration: '15 min',
    unlocked: false,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  },
  {
    day: 4,
    title: 'Resilience',
    description: 'Build emotional resilience with grounding techniques.',
    practice: 'Body Scan & Grounding',
    duration: '12 min',
    unlocked: false,
    image: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=600&q=80',
  },
  {
    day: 5,
    title: 'Wisdom',
    description: 'Introduction to Tibetan wisdom and the nature of mind.',
    practice: 'Open Awareness Meditation',
    duration: '15 min',
    unlocked: false,
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&q=80',
  },
  {
    day: 6,
    title: 'Integration',
    description: 'Integrate your practice into daily life moments.',
    practice: 'Mindfulness in Action',
    duration: '10 min',
    unlocked: false,
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80',
  },
  {
    day: 7,
    title: 'Transformation',
    description: "Commit to your hero's journey and next steps.",
    practice: 'Commitment Ceremony',
    duration: '20 min',
    unlocked: false,
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80',
  },
];

export default function ChallengePage() {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [currentDay, setCurrentDay] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ChallengeSignupData>();

  const onSubmit = async (data: ChallengeSignupData) => {
    console.log('Challenge signup data:', data);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsEnrolled(true);
  };

  if (!isEnrolled) {
    return (
      <Box bg="bg" minH="calc(100vh - 200px)" py={{ base: 6, md: 10 }}>
        <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
          <VStack gap={{ base: 8, md: 12 }} align="stretch">
            {/* Hero */}
            <Box textAlign="center">
              <Badge colorScheme="green" mb={4} fontSize={{ base: 'xs', md: 'sm' }} px={3} py={1}>
                100% Free
              </Badge>
              <Heading fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} mb={4}>
                7-Day{' '}
                <Text as="span" bgGradient="linear(to-r, brand.gold, brand.lightGold)" bgClip="text">
                  Empathy Challenge
                </Text>
              </Heading>
              <Text fontSize={{ base: 'sm', md: 'lg' }} color="fg.muted" maxW="2xl" mx="auto" mb={8} px={{ base: 2, md: 0 }}>
                Experience the foundation of our transformational approach. 10-15 minutes a day for
                7 days. No credit card required.
              </Text>

              {/* Signup Form */}
              <Card.Root maxW="md" mx="auto" bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
                <Card.Body p={{ base: 4, md: 6 }}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <VStack gap={{ base: 4, md: 6 }}>
                      <Heading size={{ base: 'sm', md: 'md' }}>Start Your Free Challenge</Heading>
                      <Box w="full">
                        <Text mb={2} fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }}>Email Address</Text>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          bg="bg.muted"
                          borderColor={errors.email ? 'red.500' : 'brand.charcoal'}
                          _focus={{ borderColor: 'brand.gold' }}
                          size={{ base: 'sm', md: 'md' }}
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            },
                          })}
                        />
                        {errors.email && (
                          <Text color="red.500" fontSize="xs" mt={1}>
                            {errors.email.message}
                          </Text>
                        )}
                      </Box>
                      <Button
                        type="submit"
                        bg="brand.gold"
                        color="brand.black"
                        _hover={{ bg: 'brand.lightGold' }}
                        size={{ base: 'md', md: 'lg' }}
                        w="full"
                        fontWeight="bold"
                        loading={isSubmitting}
                      >
                        {isSubmitting ? 'Starting...' : 'Start Day 1 Now'}
                      </Button>
                      <Text fontSize="xs" color="fg.muted">
                        By signing up, you agree to our Terms and Privacy Policy.
                      </Text>
                    </VStack>
                  </form>
                </Card.Body>
              </Card.Root>
            </Box>

            {/* What You'll Learn */}
            <Box>
              <Heading size={{ base: 'md', md: 'lg' }} mb={6} textAlign="center">
                What You'll Experience
              </Heading>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={{ base: 4, md: 6 }}>
                <Card.Root bg="bg.subtle">
                  <Card.Body p={{ base: 4, md: 6 }}>
                    <VStack gap={3}>
                      <Box color="brand.gold">
                        <FiHeart size={32} />
                      </Box>
                      <Heading size={{ base: 'xs', md: 'sm' }}>Daily Practices</Heading>
                      <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted" textAlign="center">
                        Guided meditations and practices from 10-20 minutes each day.
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
                <Card.Root bg="bg.subtle">
                  <Card.Body p={{ base: 4, md: 6 }}>
                    <VStack gap={3}>
                      <Box color="brand.gold">
                        <FiMail size={32} />
                      </Box>
                      <Heading size={{ base: 'xs', md: 'sm' }}>Daily Emails</Heading>
                      <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted" textAlign="center">
                        Wisdom teachings, insights, and encouragement delivered to your inbox.
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
                <Card.Root bg="bg.subtle">
                  <Card.Body p={{ base: 4, md: 6 }}>
                    <VStack gap={3}>
                      <Box color="brand.gold">
                        <FiGift size={32} />
                      </Box>
                      <Heading size={{ base: 'xs', md: 'sm' }}>Free Resources</Heading>
                      <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted" textAlign="center">
                        Access to exclusive content from our documentary film and teachers.
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              </Grid>
            </Box>

            {/* 7 Days Preview */}
            <Box>
              <Heading size={{ base: 'md', md: 'lg' }} mb={6} textAlign="center">
                Your 7-Day Journey
              </Heading>
              <Grid templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(7, 1fr)' }} gap={{ base: 2, md: 3 }}>
                {challengeDays.map((day) => (
                  <Card.Root key={day.day} bg="bg.subtle" textAlign="center">
                    <Card.Body py={{ base: 3, md: 4 }} px={{ base: 2, md: 4 }}>
                      <VStack gap={{ base: 1, md: 2 }}>
                        <Box
                          w={{ base: 8, md: 10 }}
                          h={{ base: 8, md: 10 }}
                          bg="bg.muted"
                          borderRadius="full"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontWeight="bold"
                          fontSize={{ base: 'xs', md: 'sm' }}
                        >
                          {day.day}
                        </Box>
                        <Text fontSize={{ base: '2xs', md: 'sm' }} fontWeight="semibold">
                          {day.title}
                        </Text>
                        <Text fontSize="2xs" color="fg.muted" display={{ base: 'none', md: 'block' }}>
                          {day.duration}
                        </Text>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                ))}
              </Grid>
            </Box>

            {/* Testimonials */}
            <Box>
              <Heading size={{ base: 'md', md: 'lg' }} mb={6} textAlign="center">
                What Challengers Say
              </Heading>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={{ base: 4, md: 6 }}>
                {[
                  {
                    quote: 'Just 7 days completely shifted my morning routine. I feel more grounded than ever.',
                    name: 'Alex M.',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                  },
                  {
                    quote: "The free challenge gave me a taste of what's possible. I immediately joined the full cohort.",
                    name: 'Jordan K.',
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
                  },
                  {
                    quote: 'I was skeptical, but by day 3, I noticed real changes in how I handle stress.',
                    name: 'Sam R.',
                    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
                  },
                ].map((t, i) => (
                  <Card.Root key={i} bg="bg.muted">
                    <Card.Body p={{ base: 4, md: 6 }}>
                      <VStack gap={3}>
                        <Text fontStyle="italic" fontSize={{ base: 'xs', md: 'sm' }}>
                          "{t.quote}"
                        </Text>
                        <HStack>
                          <Box w={8} h={8} borderRadius="full" overflow="hidden">
                            <Image src={t.image} alt={t.name} w="full" h="full" objectFit="cover" />
                          </Box>
                          <Text fontWeight="semibold" color="brand.gold" fontSize={{ base: 'xs', md: 'sm' }}>
                            {t.name}
                          </Text>
                        </HStack>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                ))}
              </Grid>
            </Box>

            {/* Final CTA */}
            <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
              <Card.Body p={{ base: 4, md: 6 }}>
                <VStack gap={{ base: 4, md: 6 }} textAlign="center" py={{ base: 4, md: 6 }}>
                  <Heading size={{ base: 'md', md: 'lg' }}>Ready to Begin?</Heading>
                  <Text color="fg.muted" fontSize={{ base: 'sm', md: 'md' }}>
                    Over 10,000 people have completed the 7-Day Challenge. Join them today.
                  </Text>
                  <Button
                    bg="brand.gold"
                    color="brand.black"
                    _hover={{ bg: 'brand.lightGold' }}
                    size={{ base: 'md', md: 'lg' }}
                    fontWeight="bold"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Start Free Challenge
                  </Button>
                </VStack>
              </Card.Body>
            </Card.Root>
          </VStack>
        </Container>
      </Box>
    );
  }

  // Enrolled view
  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={{ base: 6, md: 10 }}>
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <VStack gap={{ base: 6, md: 8 }} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Badge colorScheme="green" mb={4}>
              Day {currentDay} of 7
            </Badge>
            <Heading fontSize={{ base: '2xl', md: '3xl' }} mb={2}>
              7-Day Empathy Challenge
            </Heading>
            <Box maxW="md" mx="auto">
              <Progress.Root value={(currentDay / 7) * 100} mt={4}>
                <Progress.Track bg="bg.muted">
                  <Progress.Range bg="brand.gold" />
                </Progress.Track>
              </Progress.Root>
            </Box>
          </Box>

          {/* Today's Practice */}
          <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={{ base: 6, md: 8 }}>
            <Card.Root bg="bg.subtle" borderTop="4px solid" borderColor="brand.gold">
              <Card.Body p={{ base: 4, md: 6 }}>
                <VStack gap={{ base: 4, md: 6 }} align="stretch">
                  <HStack justify="space-between">
                    <Badge colorScheme="yellow">Day {challengeDays[currentDay - 1].day}</Badge>
                    <Text fontSize="sm" color="fg.muted">
                      {challengeDays[currentDay - 1].duration}
                    </Text>
                  </HStack>

                  <Box>
                    <Heading size={{ base: 'md', md: 'lg' }} mb={2}>
                      {challengeDays[currentDay - 1].title}
                    </Heading>
                    <Text color="fg.muted" fontSize={{ base: 'sm', md: 'md' }}>{challengeDays[currentDay - 1].description}</Text>
                  </Box>

                  <Box
                    borderRadius="lg"
                    h={{ base: '200px', md: '300px' }}
                    position="relative"
                    overflow="hidden"
                  >
                    <Image
                      src={challengeDays[currentDay - 1].image}
                      alt={challengeDays[currentDay - 1].title}
                      w="full"
                      h="full"
                      objectFit="cover"
                    />
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bg="blackAlpha.500"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      _hover={{ bg: 'blackAlpha.600' }}
                    >
                      <VStack>
                        <Box
                          w={16}
                          h={16}
                          bg="brand.gold"
                          borderRadius="full"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          color="brand.black"
                        >
                          <FiPlay size={32} />
                        </Box>
                        <Text fontWeight="semibold" color="white">{challengeDays[currentDay - 1].practice}</Text>
                        <Text fontSize="sm" color="whiteAlpha.800">
                          Click to start practice
                        </Text>
                      </VStack>
                    </Box>
                  </Box>

                  <HStack justify="space-between">
                    <Button
                      variant="outline"
                      borderColor="brand.charcoal"
                      disabled={currentDay === 1}
                      onClick={() => setCurrentDay(currentDay - 1)}
                      size={{ base: 'sm', md: 'md' }}
                    >
                      <HStack gap={1}>
                        <FiChevronLeft />
                        <Text display={{ base: 'none', sm: 'inline' }}>Previous</Text>
                      </HStack>
                    </Button>
                    <Button
                      bg="brand.gold"
                      color="brand.black"
                      _hover={{ bg: 'brand.lightGold' }}
                      disabled={currentDay === 7}
                      onClick={() => setCurrentDay(currentDay + 1)}
                      size={{ base: 'sm', md: 'md' }}
                    >
                      <HStack gap={1}>
                        <Text>{currentDay < 7 ? 'Complete & Next' : 'Finish'}</Text>
                        <FiChevronRight />
                      </HStack>
                    </Button>
                  </HStack>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Sidebar */}
            <VStack gap={{ base: 4, md: 6 }} align="stretch">
              {/* All Days */}
              <Card.Root bg="bg.subtle">
                <Card.Header p={{ base: 4, md: 6 }}>
                  <Heading size={{ base: 'xs', md: 'sm' }} color="brand.gold">
                    Challenge Progress
                  </Heading>
                </Card.Header>
                <Card.Body p={{ base: 4, md: 6 }} pt={0}>
                  <VStack gap={2} align="stretch">
                    {challengeDays.map((day) => (
                      <HStack
                        key={day.day}
                        p={{ base: 2, md: 3 }}
                        bg={day.day === currentDay ? 'bg.muted' : 'transparent'}
                        borderRadius="md"
                        borderLeft={day.day === currentDay ? '3px solid' : 'none'}
                        borderColor="brand.gold"
                        cursor={day.day <= currentDay ? 'pointer' : 'default'}
                        onClick={() => day.day <= currentDay && setCurrentDay(day.day)}
                        opacity={day.day > currentDay ? 0.5 : 1}
                      >
                        <Box
                          w={{ base: 6, md: 8 }}
                          h={{ base: 6, md: 8 }}
                          bg={day.day < currentDay ? 'brand.gold' : day.day === currentDay ? 'brand.charcoal' : 'bg.muted'}
                          borderRadius="full"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontSize={{ base: 'xs', md: 'sm' }}
                          fontWeight="bold"
                          color={day.day < currentDay ? 'brand.black' : 'fg'}
                        >
                          {day.day < currentDay ? <FiCheck size={14} /> : day.day}
                        </Box>
                        <Box flex="1">
                          <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight={day.day === currentDay ? 'semibold' : 'normal'}>
                            {day.title}
                          </Text>
                          <Text fontSize="2xs" color="fg.muted">
                            {day.duration}
                          </Text>
                        </Box>
                        {day.day > currentDay && (
                          <Box color="fg.muted">
                            <FiLock size={14} />
                          </Box>
                        )}
                      </HStack>
                    ))}
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Upgrade CTA */}
              <Card.Root bg="bg.muted" borderTop="3px solid" borderColor="brand.gold">
                <Card.Body p={{ base: 4, md: 6 }}>
                  <VStack gap={4}>
                    <Heading size={{ base: 'xs', md: 'sm' }} textAlign="center">
                      Ready for More?
                    </Heading>
                    <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted" textAlign="center">
                      Join our next cohort for the complete 8-week Hero's Journey experience.
                    </Text>
                    <Link href="/cohorts" style={{ width: '100%' }}>
                      <Button
                        bg="brand.gold"
                        color="brand.black"
                        _hover={{ bg: 'brand.lightGold' }}
                        w="full"
                        size="sm"
                      >
                        View Cohorts
                      </Button>
                    </Link>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </VStack>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
