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
  Progress,

} from '@chakra-ui/react';
import Link from 'next/link';

const upcomingCohorts = [
  {
    id: 'cohort-2025-jan',
    title: "The Hero's Journey to Joy",
    type: 'Flagship',
    startDate: 'January 15, 2025',
    duration: '8 weeks',
    enrolledCount: 112,
    maxCapacity: 150,
    status: 'enrolling',
    instructors: ['Dr. Natalie Petouhoff', 'Geshe Lobsang'],
    suggestedPrice: 197,
    description:
      'Our flagship 8-week cohort experience following the complete Hero\'s Journey framework.',
  },
  {
    id: 'cohort-2025-feb',
    title: 'The Neuroscience of Compassion',
    type: 'Specialized',
    startDate: 'February 1, 2025',
    duration: '6 weeks',
    enrolledCount: 45,
    maxCapacity: 100,
    status: 'enrolling',
    instructors: ['Dr. Richard Davidson'],
    suggestedPrice: 97,
    description:
      'Explore the brain science behind compassion with Harvard neuroscientist Dr. Richard Davidson.',
  },
  {
    id: 'cohort-2025-feb-2',
    title: 'Leading from the Heart',
    type: 'Specialized',
    startDate: 'February 15, 2025',
    duration: '4 weeks',
    enrolledCount: 78,
    maxCapacity: 100,
    status: 'enrolling',
    instructors: ['Arthur C. Brooks'],
    suggestedPrice: 97,
    description:
      'Transform your leadership with empathy-driven principles from Harvard professor Arthur Brooks.',
  },
  {
    id: 'cohort-2025-mar',
    title: "The Hero's Journey to Joy",
    type: 'Flagship',
    startDate: 'March 1, 2025',
    duration: '8 weeks',
    enrolledCount: 23,
    maxCapacity: 150,
    status: 'upcoming',
    instructors: ['Dr. Natalie Petouhoff', 'Geshe Lobsang'],
    suggestedPrice: 197,
    description:
      'Join our next flagship cohort and transform through the ancient wisdom of the Hero\'s Journey.',
  },
];

const activeCohorts = [
  {
    id: 'cohort-2024-dec',
    title: "The Hero's Journey to Joy",
    type: 'Flagship',
    currentWeek: 5,
    totalWeeks: 8,
    currentStage: 'The Ordeal',
    nextSession: 'Tonight at 7:00 PM PT',
    memberCount: 142,
    circleCount: 12,
  },
];

export default function CohortsPage() {
  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={10}>
      <Container maxW="container.xl">
        <VStack gap={12} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Badge colorScheme="yellow" mb={4} fontSize="sm" px={3} py={1}>
              Cohort-Based Learning
            </Badge>
            <Heading fontSize={{ base: '3xl', md: '5xl' }} mb={4}>
              Transform{' '}
              <Text as="span" bgGradient="linear(to-r, brand.gold, brand.lightGold)" bgClip="text">
                Together
              </Text>
            </Heading>
            <Text fontSize="lg" color="fg.muted" maxW="3xl" mx="auto">
              Join a cohort of fellow seekers on a structured journey with live sessions, small
              circles, and dedicated facilitators. Real transformation happens in community.
            </Text>
          </Box>

          {/* Active Cohorts (if user is enrolled) */}
          {activeCohorts.length > 0 && (
            <Box>
              <Heading size="lg" mb={6} color="brand.gold">
                Your Active Cohorts
              </Heading>
              <Grid templateColumns={{ base: '1fr' }} gap={6}>
                {activeCohorts.map((cohort) => (
                  <Card.Root
                    key={cohort.id}
                    bg="bg.subtle"
                    borderLeft="4px solid"
                    borderColor="brand.gold"
                  >
                    <Card.Body>
                      <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={6}>
                        <VStack align="start" gap={4}>
                          <HStack>
                            <Badge colorScheme="green">Active</Badge>
                            <Badge>{cohort.type}</Badge>
                          </HStack>
                          <Heading size="md">{cohort.title}</Heading>
                          <Box w="full">
                            <HStack justify="space-between" mb={2}>
                              <Text fontSize="sm">
                                Week {cohort.currentWeek} of {cohort.totalWeeks}
                              </Text>
                              <Text fontSize="sm" fontWeight="semibold" color="brand.gold">
                                {Math.round((cohort.currentWeek / cohort.totalWeeks) * 100)}%
                              </Text>
                            </HStack>
                            <Progress.Root
                              value={(cohort.currentWeek / cohort.totalWeeks) * 100}
                              colorScheme="yellow"
                            >
                              <Progress.Track bg="bg.muted">
                                <Progress.Range bg="brand.gold" />
                              </Progress.Track>
                            </Progress.Root>
                          </Box>
                          <HStack gap={6} fontSize="sm" color="fg.muted">
                            <Text>
                              <Text as="span" color="brand.gold">
                                {cohort.memberCount}
                              </Text>{' '}
                              members
                            </Text>
                            <Text>
                              <Text as="span" color="brand.gold">
                                {cohort.circleCount}
                              </Text>{' '}
                              circles
                            </Text>
                          </HStack>
                        </VStack>
                        <VStack align={{ base: 'start', md: 'end' }} justify="center" gap={4}>
                          <Box
                            bg="bg.muted"
                            p={4}
                            borderRadius="md"
                            textAlign={{ base: 'left', md: 'right' }}
                          >
                            <Text fontSize="sm" color="fg.muted">
                              Current Stage
                            </Text>
                            <Text fontWeight="semibold" color="brand.gold">
                              {cohort.currentStage}
                            </Text>
                            <Text fontSize="xs" color="fg.muted" mt={2}>
                              Next session: {cohort.nextSession}
                            </Text>
                          </Box>
                          <Link href={`/cohorts/${cohort.id}`}>
                            <Button bg="brand.gold" color="brand.black" _hover={{ bg: 'brand.lightGold' }}>
                              Enter Cohort
                            </Button>
                          </Link>
                        </VStack>
                      </Grid>
                    </Card.Body>
                  </Card.Root>
                ))}
              </Grid>
            </Box>
          )}

          {/* Enrolling Now */}
          <Box>
            <Heading size="lg" mb={6}>
              Enrolling Now
            </Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
              {upcomingCohorts
                .filter((c) => c.status === 'enrolling')
                .map((cohort) => (
                  <Card.Root
                    key={cohort.id}
                    bg="bg.subtle"
                    borderTop="3px solid"
                    borderColor="brand.gold"
                    _hover={{ transform: 'translateY(-4px)', transition: 'transform 0.3s' }}
                  >
                    <Card.Body>
                      <VStack align="stretch" gap={5}>
                        <HStack justify="space-between">
                          <HStack>
                            <Badge colorScheme="yellow">{cohort.type}</Badge>
                            <Badge colorScheme="green">Enrolling</Badge>
                          </HStack>
                          <Text fontSize="sm" color="fg.muted">
                            {cohort.duration}
                          </Text>
                        </HStack>

                        <Box>
                          <Heading size="md" mb={2}>
                            {cohort.title}
                          </Heading>
                          <Text fontSize="sm" color="fg.muted">
                            {cohort.description}
                          </Text>
                        </Box>

                        <HStack>
                          {cohort.instructors.map((instructor, i) => (
                            <HStack key={i} gap={2}>
                              <SimpleAvatar size="xs" name={instructor} />
                              <Text fontSize="xs" color="brand.gold">
                                {instructor}
                              </Text>
                            </HStack>
                          ))}
                        </HStack>

                        <Box>
                          <HStack justify="space-between" mb={2}>
                            <Text fontSize="sm" color="fg.muted">
                              {cohort.enrolledCount} / {cohort.maxCapacity} enrolled
                            </Text>
                            <Text fontSize="sm" fontWeight="semibold" color="brand.gold">
                              {cohort.maxCapacity - cohort.enrolledCount} spots left
                            </Text>
                          </HStack>
                          <Progress.Root
                            value={(cohort.enrolledCount / cohort.maxCapacity) * 100}
                            colorScheme="yellow"
                          >
                            <Progress.Track bg="bg.muted">
                              <Progress.Range bg="brand.gold" />
                            </Progress.Track>
                          </Progress.Root>
                        </Box>

                        <Box bg="bg.muted" p={3} borderRadius="md">
                          <HStack justify="space-between">
                            <Box>
                              <Text fontSize="xs" color="fg.muted">
                                Starts
                              </Text>
                              <Text fontWeight="semibold">{cohort.startDate}</Text>
                            </Box>
                            <Box textAlign="right">
                              <Text fontSize="xs" color="fg.muted">
                                Suggested
                              </Text>
                              <Text fontWeight="semibold" color="brand.gold">
                                ${cohort.suggestedPrice}
                              </Text>
                            </Box>
                          </HStack>
                        </Box>

                        <Link href={`/pricing?cohort=${cohort.id}`}>
                          <Button
                            bg="brand.gold"
                            color="brand.black"
                            _hover={{ bg: 'brand.lightGold' }}
                            w="full"
                            fontWeight="bold"
                          >
                            Enroll Now
                          </Button>
                        </Link>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                ))}
            </Grid>
          </Box>

          {/* Upcoming Cohorts */}
          <Box>
            <Heading size="lg" mb={6}>
              Coming Soon
            </Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
              {upcomingCohorts
                .filter((c) => c.status === 'upcoming')
                .map((cohort) => (
                  <Card.Root key={cohort.id} bg="bg.subtle" opacity={0.8}>
                    <Card.Body>
                      <VStack align="stretch" gap={4}>
                        <HStack>
                          <Badge>{cohort.type}</Badge>
                          <Badge colorScheme="blue">Coming Soon</Badge>
                        </HStack>
                        <Heading size="sm">{cohort.title}</Heading>
                        <Text fontSize="sm" color="fg.muted">
                          {cohort.description}
                        </Text>
                        <HStack justify="space-between">
                          <Text fontSize="sm">{cohort.startDate}</Text>
                          <Text fontSize="sm" color="brand.gold">
                            ${cohort.suggestedPrice} suggested
                          </Text>
                        </HStack>
                        <Button variant="outline" borderColor="brand.charcoal" w="full" disabled>
                          Notify Me
                        </Button>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                ))}
            </Grid>
          </Box>

          {/* How Cohorts Work */}
          <Card.Root bg="bg.subtle">
            <Card.Header>
              <Heading size="md" color="brand.gold">
                How Cohorts Work
              </Heading>
            </Card.Header>
            <Card.Body>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={8}>
                <VStack align="start">
                  <Box
                    w={12}
                    h={12}
                    bg="brand.gold"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="xl"
                    fontWeight="bold"
                    color="brand.black"
                  >
                    1
                  </Box>
                  <Heading size="sm">Enroll Together</Heading>
                  <Text fontSize="sm" color="fg.muted">
                    Join a cohort with 100-150 members starting on the same day. Everyone begins the
                    journey together.
                  </Text>
                </VStack>
                <VStack align="start">
                  <Box
                    w={12}
                    h={12}
                    bg="brand.gold"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="xl"
                    fontWeight="bold"
                    color="brand.black"
                  >
                    2
                  </Box>
                  <Heading size="sm">Join Your Circle</Heading>
                  <Text fontSize="sm" color="fg.muted">
                    Get matched into a small circle of 10-12 people with a trained facilitator for
                    deep connection.
                  </Text>
                </VStack>
                <VStack align="start">
                  <Box
                    w={12}
                    h={12}
                    bg="brand.gold"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="xl"
                    fontWeight="bold"
                    color="brand.black"
                  >
                    3
                  </Box>
                  <Heading size="sm">Learn & Practice</Heading>
                  <Text fontSize="sm" color="fg.muted">
                    Weekly live sessions with teachers, daily practices, and integration exercises
                    throughout.
                  </Text>
                </VStack>
                <VStack align="start">
                  <Box
                    w={12}
                    h={12}
                    bg="brand.gold"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="xl"
                    fontWeight="bold"
                    color="brand.black"
                  >
                    4
                  </Box>
                  <Heading size="sm">Transform & Graduate</Heading>
                  <Text fontSize="sm" color="fg.muted">
                    Complete the journey, receive your certificate, and join the alumni community for
                    life.
                  </Text>
                </VStack>
              </Grid>
            </Card.Body>
          </Card.Root>

          {/* CTA */}
          <Box textAlign="center" py={8}>
            <Heading size="md" mb={4}>
              Not sure which cohort is right for you?
            </Heading>
            <HStack justify="center" gap={4}>
              <Link href="/challenge">
                <Button variant="outline" borderColor="brand.gold" color="brand.gold">
                  Try Free 7-Day Challenge
                </Button>
              </Link>
              <Link href="/assessment">
                <Button bg="brand.gold" color="brand.black" _hover={{ bg: 'brand.lightGold' }}>
                  Take Assessment
                </Button>
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
