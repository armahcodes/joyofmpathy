'use client';

import { SimpleAvatar } from '@/components/ui/SimpleAvatar';

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
  Tabs,
  Accordion,
} from '@chakra-ui/react';
import Link from 'next/link';
import { use } from 'react';
import { FiCheck, FiStar, FiVideo, FiHeadphones, FiBook, FiMessageCircle, FiAward, FiRefreshCw } from 'react-icons/fi';

export default function MasterclassDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // Mock masterclass data
  const masterclass = {
    id,
    title: 'The Neuroscience of Compassion',
    subtitle: 'How Your Brain Builds Empathy',
    instructor: {
      name: 'Dr. Richard Davidson',
      title: 'Founder, Center for Healthy Minds',
      bio: 'Dr. Richard Davidson is the William James and Vilas Professor of Psychology and Psychiatry at the University of Wisconsin-Madison. He has published more than 400 scientific articles and is a New York Times bestselling author.',
      credentials: ['PhD, Harvard University', 'Founder, Center for Healthy Minds', '30+ years of research'],
    },
    duration: '6 weeks',
    format: 'Cohort-based',
    level: 'All Levels',
    enrolled: 1248,
    rating: 4.9,
    reviews: 342,
    nextCohort: 'February 1, 2025',
    suggestedPrice: 97,
    description:
      'Discover how compassion physically changes your brain and learn evidence-based practices to strengthen your empathy muscle. This groundbreaking masterclass combines cutting-edge neuroscience with ancient contemplative practices.',
    outcomes: [
      'Understand the neural circuits underlying empathy and compassion',
      'Learn 6 evidence-based practices to increase compassionate response',
      'Develop a personalized compassion training program',
      'Connect with a cohort of fellow learners for support',
      'Receive certificate of completion',
    ],
    curriculum: [
      {
        week: 1,
        title: 'The Science of Compassion',
        topics: ['What is compassion?', 'Brain regions involved in empathy', 'Compassion vs. empathy fatigue'],
      },
      {
        week: 2,
        title: 'Neuroplasticity and Training',
        topics: ['How practice changes the brain', 'Research findings from the lab', 'Your compassion baseline'],
      },
      {
        week: 3,
        title: 'Self-Compassion Foundations',
        topics: ['Why self-compassion comes first', 'Common humanity', 'Mindful awareness of suffering'],
      },
      {
        week: 4,
        title: 'Compassion for Others',
        topics: ['Loving-kindness practice', 'Expanding the circle', 'Difficult people practice'],
      },
      {
        week: 5,
        title: 'Compassion in Action',
        topics: ['Tonglen practice', 'Compassionate action', 'Overcoming barriers'],
      },
      {
        week: 6,
        title: 'Integration and Beyond',
        topics: ['Building a sustainable practice', 'Compassion in relationships', 'Becoming a force for good'],
      },
    ],
  };

  const testimonials = [
    {
      name: 'Maria K.',
      role: 'Healthcare Professional',
      quote: 'This masterclass transformed how I care for my patients. The science behind it gave me confidence that these practices really work.',
    },
    {
      name: 'James T.',
      role: 'Executive',
      quote: 'Dr. Davidson is a master teacher. The combination of hard science and practical wisdom is unmatched.',
    },
  ];

  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={10}>
      <Container maxW="container.xl">
        <VStack gap={10} align="stretch">
          {/* Header */}
          <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
            <VStack align="start" gap={6}>
              <HStack>
                <Badge colorScheme="yellow">Masterclass</Badge>
                <Badge>{masterclass.level}</Badge>
                <Badge colorScheme="green">Cohort-Based</Badge>
              </HStack>

              <Box>
                <Heading fontSize={{ base: '3xl', md: '4xl' }} mb={2}>
                  {masterclass.title}
                </Heading>
                <Text fontSize="xl" color="brand.gold">
                  {masterclass.subtitle}
                </Text>
              </Box>

              <Text fontSize="lg" color="fg.muted">
                {masterclass.description}
              </Text>

              {/* Instructor */}
              <HStack gap={4}>
                <SimpleAvatar size="lg" name={masterclass.instructor.name} />
                <Box>
                  <Text fontWeight="semibold">{masterclass.instructor.name}</Text>
                  <Text fontSize="sm" color="fg.muted">
                    {masterclass.instructor.title}
                  </Text>
                </Box>
              </HStack>

              {/* Meta */}
              <HStack gap={6} flexWrap="wrap">
                <Box>
                  <Text fontSize="sm" color="fg.muted">
                    Duration
                  </Text>
                  <Text fontWeight="semibold">{masterclass.duration}</Text>
                </Box>
                <Box>
                  <Text fontSize="sm" color="fg.muted">
                    Format
                  </Text>
                  <Text fontWeight="semibold">{masterclass.format}</Text>
                </Box>
                <Box>
                  <Text fontSize="sm" color="fg.muted">
                    Rating
                  </Text>
                  <HStack>
                    <Text fontWeight="semibold">★ {masterclass.rating}</Text>
                    <Text fontSize="sm" color="fg.muted">
                      ({masterclass.reviews} reviews)
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  <Text fontSize="sm" color="fg.muted">
                    Enrolled
                  </Text>
                  <Text fontWeight="semibold">{masterclass.enrolled.toLocaleString()}</Text>
                </Box>
              </HStack>
            </VStack>

            {/* Enrollment Card */}
            <Card.Root bg="bg.subtle" borderTop="4px solid" borderColor="brand.gold" position="sticky" top={100}>
              <Card.Body>
                <VStack gap={6}>
                  <Box textAlign="center" w="full">
                    <Text fontSize="sm" color="fg.muted">
                      Pay What Feels Right
                    </Text>
                    <Text fontSize="3xl" fontWeight="bold" color="brand.gold">
                      ${masterclass.suggestedPrice}
                    </Text>
                    <Text fontSize="xs" color="fg.muted">
                      suggested • $19 minimum
                    </Text>
                  </Box>

                  <Box bg="bg.muted" p={4} borderRadius="md" w="full">
                    <VStack gap={2}>
                      <Text fontSize="sm" fontWeight="semibold">
                        Next Cohort Starts
                      </Text>
                      <Text color="brand.gold" fontWeight="bold">
                        {masterclass.nextCohort}
                      </Text>
                      <Text fontSize="xs" color="fg.muted">
                        12 spots remaining
                      </Text>
                    </VStack>
                  </Box>

                  <Link href={`/checkout?plan=specialized&amount=${masterclass.suggestedPrice}`} style={{ width: '100%' }}>
                    <Button
                      bg="brand.gold"
                      color="brand.black"
                      _hover={{ bg: 'brand.lightGold' }}
                      size="lg"
                      w="full"
                      fontWeight="bold"
                    >
                      Enroll Now
                    </Button>
                  </Link>

                  <Button variant="outline" borderColor="brand.gold" color="brand.gold" w="full">
                    Watch Preview
                  </Button>

                  <Text fontSize="xs" color="fg.muted" textAlign="center">
                    14-day money-back guarantee
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          </Grid>

          {/* Tabs */}
          <Tabs.Root defaultValue="curriculum">
            <Tabs.List bg="bg.subtle" p={1} borderRadius="md">
              <Tabs.Trigger value="curriculum" color="fg" _selected={{ bg: 'brand.gold', color: 'brand.black' }}>
                Curriculum
              </Tabs.Trigger>
              <Tabs.Trigger value="instructor" color="fg" _selected={{ bg: 'brand.gold', color: 'brand.black' }}>
                Instructor
              </Tabs.Trigger>
              <Tabs.Trigger value="reviews" color="fg" _selected={{ bg: 'brand.gold', color: 'brand.black' }}>
                Reviews
              </Tabs.Trigger>
              <Tabs.Trigger value="faq" color="fg" _selected={{ bg: 'brand.gold', color: 'brand.black' }}>
                FAQ
              </Tabs.Trigger>
            </Tabs.List>

            {/* Curriculum Tab */}
            <Tabs.Content value="curriculum">
              <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8} mt={6}>
                <VStack gap={6} align="stretch">
                  <Heading size="md" color="brand.gold">
                    What You'll Learn
                  </Heading>
                  <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                    {masterclass.outcomes.map((outcome, i) => (
                      <HStack key={i} align="start">
                        <Box color="brand.gold"><FiCheck size={16} /></Box>
                        <Text fontSize="sm">{outcome}</Text>
                      </HStack>
                    ))}
                  </Grid>

                  <Heading size="md" color="brand.gold" pt={6}>
                    Weekly Curriculum
                  </Heading>
                  <Accordion.Root multiple>
                    {masterclass.curriculum.map((week) => (
                      <Accordion.Item key={week.week} value={`week-${week.week}`}>
                        <Accordion.ItemTrigger>
                          <HStack flex="1" py={4}>
                            <Box
                              w={8}
                              h={8}
                              bg="brand.gold"
                              color="brand.black"
                              borderRadius="full"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              fontWeight="bold"
                            >
                              {week.week}
                            </Box>
                            <Text fontWeight="semibold">Week {week.week}: {week.title}</Text>
                          </HStack>
                          <Accordion.ItemIndicator />
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                          <Box pb={4}>
                            <VStack align="start" gap={2} pl={12}>
                              {week.topics.map((topic, i) => (
                                <Text key={i} fontSize="sm" color="fg.muted">
                                  • {topic}
                                </Text>
                              ))}
                            </VStack>
                          </Box>
                        </Accordion.ItemContent>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>
                </VStack>

                <VStack gap={6} align="stretch">
                  <Card.Root bg="bg.subtle">
                    <Card.Header>
                      <Heading size="sm" color="brand.gold">
                        This Masterclass Includes
                      </Heading>
                    </Card.Header>
                    <Card.Body>
                      <VStack align="start" gap={3}>
                        <HStack>
                          <Box color="brand.gold"><FiVideo size={16} /></Box>
                          <Text fontSize="sm">6 hours of video content</Text>
                        </HStack>
                        <HStack>
                          <Box color="brand.gold"><FiHeadphones size={16} /></Box>
                          <Text fontSize="sm">12 guided practices</Text>
                        </HStack>
                        <HStack>
                          <Box color="brand.gold"><FiBook size={16} /></Box>
                          <Text fontSize="sm">Downloadable workbook</Text>
                        </HStack>
                        <HStack>
                          <Box color="brand.gold"><FiMessageCircle size={16} /></Box>
                          <Text fontSize="sm">Cohort discussion forum</Text>
                        </HStack>
                        <HStack>
                          <Box color="brand.gold"><FiAward size={16} /></Box>
                          <Text fontSize="sm">Certificate of completion</Text>
                        </HStack>
                        <HStack>
                          <Box color="brand.gold"><FiRefreshCw size={16} /></Box>
                          <Text fontSize="sm">Lifetime access</Text>
                        </HStack>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                </VStack>
              </Grid>
            </Tabs.Content>

            {/* Instructor Tab */}
            <Tabs.Content value="instructor">
              <Card.Root bg="bg.subtle" mt={6}>
                <Card.Body>
                  <Grid templateColumns={{ base: '1fr', md: '200px 1fr' }} gap={8}>
                    <VStack>
                      <SimpleAvatar size="2xl" name={masterclass.instructor.name} />
                      <Button variant="outline" borderColor="brand.gold" color="brand.gold" size="sm">
                        View Profile
                      </Button>
                    </VStack>
                    <VStack align="start" gap={4}>
                      <Heading size="lg">{masterclass.instructor.name}</Heading>
                      <Text color="brand.gold">{masterclass.instructor.title}</Text>
                      <Text color="fg.muted">{masterclass.instructor.bio}</Text>
                      <Box>
                        <Text fontWeight="semibold" mb={2}>
                          Credentials
                        </Text>
                        <VStack align="start" gap={1}>
                          {masterclass.instructor.credentials.map((cred, i) => (
                            <HStack key={i}>
                              <Box color="brand.gold"><FiCheck size={14} /></Box>
                              <Text fontSize="sm">{cred}</Text>
                            </HStack>
                          ))}
                        </VStack>
                      </Box>
                    </VStack>
                  </Grid>
                </Card.Body>
              </Card.Root>
            </Tabs.Content>

            {/* Reviews Tab */}
            <Tabs.Content value="reviews">
              <VStack gap={6} align="stretch" mt={6}>
                <HStack justify="space-between">
                  <Heading size="md">Student Reviews</Heading>
                  <HStack>
                    <HStack gap={1}>
                      <Box color="brand.gold"><FiStar size={20} /></Box>
                      <Text fontSize="2xl" fontWeight="bold" color="brand.gold">
                        {masterclass.rating}
                      </Text>
                    </HStack>
                    <Text color="fg.muted">({masterclass.reviews} reviews)</Text>
                  </HStack>
                </HStack>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
                  {testimonials.map((t, i) => (
                    <Card.Root key={i} bg="bg.subtle" borderLeft="4px solid" borderColor="brand.gold">
                      <Card.Body>
                        <VStack align="start" gap={3}>
                          <Text fontStyle="italic">"{t.quote}"</Text>
                          <HStack>
                            <SimpleAvatar size="sm" name={t.name} />
                            <Box>
                              <Text fontWeight="semibold" fontSize="sm" color="brand.gold">
                                {t.name}
                              </Text>
                              <Text fontSize="xs" color="fg.muted">
                                {t.role}
                              </Text>
                            </Box>
                          </HStack>
                        </VStack>
                      </Card.Body>
                    </Card.Root>
                  ))}
                </Grid>
              </VStack>
            </Tabs.Content>

            {/* FAQ Tab */}
            <Tabs.Content value="faq">
              <Card.Root bg="bg.subtle" mt={6}>
                <Card.Body>
                  <VStack gap={6} align="stretch">
                    {[
                      {
                        q: 'How does the cohort-based format work?',
                        a: 'You join a cohort of 50-100 learners all starting on the same day. This creates accountability and community.',
                      },
                      {
                        q: 'What if I miss a live session?',
                        a: 'All live sessions are recorded and available within 24 hours. You can catch up at your own pace.',
                      },
                      {
                        q: 'Is there a refund policy?',
                        a: 'Yes, we offer a full refund within 14 days if you\'re not satisfied.',
                      },
                    ].map((faq, i) => (
                      <Box key={i}>
                        <Text fontWeight="semibold" mb={2}>
                          {faq.q}
                        </Text>
                        <Text color="fg.muted">{faq.a}</Text>
                      </Box>
                    ))}
                  </VStack>
                </Card.Body>
              </Card.Root>
            </Tabs.Content>
          </Tabs.Root>
        </VStack>
      </Container>
    </Box>
  );
}
