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
} from '@chakra-ui/react';
import Link from 'next/link';

export default function CirclesPage() {
  const myCircle = {
    name: 'Phoenix Rising',
    cohort: "Hero's Journey to Joy - January 2025",
    facilitator: {
      name: 'Sarah Chen',
      bio: 'Certified facilitator with 5 years of experience in group dynamics and compassion training.',
      avatar: 'SC',
    },
    members: [
      { name: 'Alex M.', stage: 5, joined: '3 weeks ago', avatar: 'AM' },
      { name: 'Jordan K.', stage: 5, joined: '3 weeks ago', avatar: 'JK' },
      { name: 'Sam R.', stage: 5, joined: '3 weeks ago', avatar: 'SR' },
      { name: 'Taylor B.', stage: 4, joined: '3 weeks ago', avatar: 'TB' },
      { name: 'Morgan L.', stage: 5, joined: '3 weeks ago', avatar: 'ML' },
      { name: 'Casey P.', stage: 5, joined: '3 weeks ago', avatar: 'CP' },
      { name: 'Riley W.', stage: 4, joined: '3 weeks ago', avatar: 'RW' },
      { name: 'Jamie D.', stage: 5, joined: '3 weeks ago', avatar: 'JD' },
      { name: 'Drew H.', stage: 5, joined: '3 weeks ago', avatar: 'DH' },
      { name: 'Chris N.', stage: 5, joined: '3 weeks ago', avatar: 'CN' },
    ],
    nextMeeting: {
      date: 'Thursday, January 16, 2025',
      time: '6:00 PM PT',
      topic: 'The Ordeal - Sharing Our Dark Night',
    },
    guidelines: [
      'Confidentiality is sacred - what\'s shared here stays here',
      'Speak from personal experience using "I" statements',
      'Practice deep listening without fixing or advising',
      'Respect time - facilitator will manage flow',
      'Cameras on encouraged but not required',
    ],
  };

  const upcomingCircles = [
    {
      id: 1,
      name: 'Facing Fear Together',
      type: 'Open Circle',
      date: 'Tonight',
      time: '7:00 PM PT',
      spotsLeft: 4,
      facilitator: 'Michael B.',
    },
    {
      id: 2,
      name: 'Gratitude Practice',
      type: 'Open Circle',
      date: 'Tomorrow',
      time: '12:00 PM PT',
      spotsLeft: 8,
      facilitator: 'Lisa K.',
    },
    {
      id: 3,
      name: 'Newcomer Welcome',
      type: 'Orientation',
      date: 'Saturday',
      time: '10:00 AM PT',
      spotsLeft: 15,
      facilitator: 'Dr. Natalie',
    },
  ];

  const pastSessions = [
    { date: 'Jan 9, 2025', topic: 'Meeting the Mentor', attended: true },
    { date: 'Jan 2, 2025', topic: 'Refusal of the Call', attended: true },
    { date: 'Dec 26, 2024', topic: 'Call to Adventure', attended: false },
    { date: 'Dec 19, 2024', topic: 'The Ordinary World', attended: true },
  ];

  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={10}>
      <Container maxW="container.xl">
        <VStack gap={10} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading fontSize={{ base: '3xl', md: '4xl' }} mb={4}>
              Your{' '}
              <Text as="span" bgGradient="linear(to-r, brand.gold, brand.lightGold)" bgClip="text">
                Circle
              </Text>
            </Heading>
            <Text fontSize="lg" color="fg.muted" maxW="2xl" mx="auto">
              Intimate groups of 10-12 people where real transformation happens. Share, support, and
              grow together in a safe space.
            </Text>
          </Box>

          {/* My Circle Card */}
          <Card.Root bg="bg.subtle" borderTop="4px solid" borderColor="brand.gold">
            <Card.Body>
              <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
                <VStack align="start" gap={6}>
                  <HStack>
                    <Badge colorScheme="yellow">Active Circle</Badge>
                    <Badge>Cohort: January 2025</Badge>
                  </HStack>

                  <Box>
                    <Heading size="lg" mb={2}>
                      {myCircle.name}
                    </Heading>
                    <Text fontSize="sm" color="fg.muted">
                      {myCircle.cohort}
                    </Text>
                  </Box>

                  {/* Facilitator */}
                  <Box bg="bg.muted" p={4} borderRadius="md" w="full">
                    <Text fontSize="sm" color="fg.muted" mb={3}>
                      Facilitator
                    </Text>
                    <HStack>
                      <SimpleAvatar size="md" name={myCircle.facilitator.name} />
                      <Box>
                        <Text fontWeight="semibold">{myCircle.facilitator.name}</Text>
                        <Text fontSize="sm" color="fg.muted">
                          {myCircle.facilitator.bio}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>

                  {/* Members Grid */}
                  <Box w="full">
                    <Text fontSize="sm" color="fg.muted" mb={3}>
                      Circle Members ({myCircle.members.length})
                    </Text>
                    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                      {myCircle.members.map((member, i) => (
                        <VStack key={i}>
                          <SimpleAvatar size="md" name={member.name} />
                          <Text fontSize="xs" textAlign="center">
                            {member.name}
                          </Text>
                        </VStack>
                      ))}
                      <VStack>
                        <SimpleAvatar size="md" name="You" bg="brand.gold" color="brand.black" />
                        <Text fontSize="xs" textAlign="center" color="brand.gold">
                          You
                        </Text>
                      </VStack>
                    </Grid>
                  </Box>
                </VStack>

                {/* Next Meeting */}
                <VStack gap={6} align="stretch">
                  <Card.Root bg="bg.muted" borderLeft="4px solid" borderColor="brand.gold">
                    <Card.Body>
                      <VStack align="start" gap={3}>
                        <Text fontSize="sm" color="fg.muted">
                          Next Circle Meeting
                        </Text>
                        <Heading size="md">{myCircle.nextMeeting.topic}</Heading>
                        <Box>
                          <Text fontWeight="semibold">{myCircle.nextMeeting.date}</Text>
                          <Text color="brand.gold">{myCircle.nextMeeting.time}</Text>
                        </Box>
                        <Button
                          bg="brand.gold"
                          color="brand.black"
                          _hover={{ bg: 'brand.lightGold' }}
                          w="full"
                        >
                          Join Circle
                        </Button>
                        <Button variant="outline" borderColor="brand.gold" color="brand.gold" w="full" size="sm">
                          Add to Calendar
                        </Button>
                      </VStack>
                    </Card.Body>
                  </Card.Root>

                  {/* Attendance */}
                  <Card.Root bg="bg.muted">
                    <Card.Body>
                      <VStack align="start" gap={3}>
                        <Text fontWeight="semibold">Your Attendance</Text>
                        <HStack justify="space-between" w="full">
                          <Text fontSize="3xl" fontWeight="bold" color="brand.gold">
                            75%
                          </Text>
                          <Text fontSize="sm" color="fg.muted">
                            3 of 4 sessions
                          </Text>
                        </HStack>
                        <Text fontSize="xs" color="fg.muted">
                          Consistent attendance builds trust and deepens connection.
                        </Text>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                </VStack>
              </Grid>
            </Card.Body>
          </Card.Root>

          {/* Tabs */}
          <Tabs.Root defaultValue="guidelines">
            <Tabs.List bg="bg.subtle" p={1} borderRadius="md">
              <Tabs.Trigger value="guidelines" color="fg" _selected={{ bg: 'brand.gold', color: 'brand.black' }}>
                Circle Guidelines
              </Tabs.Trigger>
              <Tabs.Trigger value="history" color="fg" _selected={{ bg: 'brand.gold', color: 'brand.black' }}>
                Session History
              </Tabs.Trigger>
              <Tabs.Trigger value="open" color="fg" _selected={{ bg: 'brand.gold', color: 'brand.black' }}>
                Open Circles
              </Tabs.Trigger>
            </Tabs.List>

            {/* Guidelines Tab */}
            <Tabs.Content value="guidelines">
              <Card.Root bg="bg.subtle" mt={6}>
                <Card.Header>
                  <Heading size="md" color="brand.gold">
                    Sacred Guidelines
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={4} align="stretch">
                    {myCircle.guidelines.map((guideline, i) => (
                      <HStack key={i} align="start">
                        <Text color="brand.gold" mt={1}>
                          ✦
                        </Text>
                        <Text>{guideline}</Text>
                      </HStack>
                    ))}
                  </VStack>
                </Card.Body>
              </Card.Root>
            </Tabs.Content>

            {/* History Tab */}
            <Tabs.Content value="history">
              <Card.Root bg="bg.subtle" mt={6}>
                <Card.Header>
                  <Heading size="md" color="brand.gold">
                    Past Sessions
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={4} align="stretch">
                    {pastSessions.map((session, i) => (
                      <HStack key={i} justify="space-between" p={3} bg="bg.muted" borderRadius="md">
                        <HStack>
                          <Box
                            w={8}
                            h={8}
                            bg={session.attended ? 'brand.gold' : 'brand.charcoal'}
                            borderRadius="full"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            color={session.attended ? 'brand.black' : 'fg.muted'}
                          >
                            {session.attended ? '✓' : '✕'}
                          </Box>
                          <Box>
                            <Text fontWeight="semibold">{session.topic}</Text>
                            <Text fontSize="xs" color="fg.muted">
                              {session.date}
                            </Text>
                          </Box>
                        </HStack>
                        <Badge colorScheme={session.attended ? 'green' : 'red'}>
                          {session.attended ? 'Attended' : 'Missed'}
                        </Badge>
                      </HStack>
                    ))}
                  </VStack>
                </Card.Body>
              </Card.Root>
            </Tabs.Content>

            {/* Open Circles Tab */}
            <Tabs.Content value="open">
              <Box mt={6}>
                <Text color="fg.muted" mb={4}>
                  Join additional open circles for extra support and connection.
                </Text>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
                  {upcomingCircles.map((circle) => (
                    <Card.Root key={circle.id} bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
                      <Card.Body>
                        <VStack align="stretch" gap={4}>
                          <HStack justify="space-between">
                            <Badge>{circle.type}</Badge>
                            <Text fontSize="xs" color="fg.muted">
                              {circle.spotsLeft} spots left
                            </Text>
                          </HStack>
                          <Heading size="sm">{circle.name}</Heading>
                          <Box>
                            <Text fontWeight="semibold">{circle.date}</Text>
                            <Text fontSize="sm" color="brand.gold">
                              {circle.time}
                            </Text>
                          </Box>
                          <HStack>
                            <SimpleAvatar size="xs" name={circle.facilitator} />
                            <Text fontSize="sm">{circle.facilitator}</Text>
                          </HStack>
                          <Button
                            bg="brand.gold"
                            color="brand.black"
                            _hover={{ bg: 'brand.lightGold' }}
                            size="sm"
                          >
                            Join Circle
                          </Button>
                        </VStack>
                      </Card.Body>
                    </Card.Root>
                  ))}
                </Grid>
              </Box>
            </Tabs.Content>
          </Tabs.Root>

          {/* Accountability Partner */}
          <Card.Root bg="bg.subtle">
            <Card.Body>
              <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={6} alignItems="center">
                <Box>
                  <Heading size="md" mb={2} color="brand.gold">
                    Find an Accountability Partner
                  </Heading>
                  <Text color="fg.muted">
                    Get matched with someone at your stage for one-on-one support. Partners
                    check in weekly to share progress and encourage each other.
                  </Text>
                </Box>
                <VStack>
                  <Button bg="brand.gold" color="brand.black" _hover={{ bg: 'brand.lightGold' }} w="full">
                    Find Partner
                  </Button>
                  <Button variant="outline" borderColor="brand.gold" color="brand.gold" w="full">
                    Learn More
                  </Button>
                </VStack>
              </Grid>
            </Card.Body>
          </Card.Root>
        </VStack>
      </Container>
    </Box>
  );
}
