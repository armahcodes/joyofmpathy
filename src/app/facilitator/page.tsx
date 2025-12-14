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
  Tabs,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function FacilitatorPage() {
  const facilitator = {
    name: 'Sarah Chen',
    circles: 2,
    totalMembers: 23,
    completionRate: 92,
    rating: 4.9,
  };

  const myCircles = [
    {
      id: 1,
      name: 'Phoenix Rising',
      cohort: 'January 2025',
      members: 11,
      currentWeek: 5,
      nextSession: 'Thursday, 6:00 PM PT',
      attendance: 88,
    },
    {
      id: 2,
      name: 'Golden Light',
      cohort: 'January 2025',
      members: 12,
      currentWeek: 5,
      nextSession: 'Friday, 7:00 PM PT',
      attendance: 91,
    },
  ];

  const upcomingSessions = [
    {
      circle: 'Phoenix Rising',
      date: 'Thursday, Jan 16',
      time: '6:00 PM PT',
      topic: 'The Ordeal - Sharing Our Dark Night',
    },
    {
      circle: 'Golden Light',
      date: 'Friday, Jan 17',
      time: '7:00 PM PT',
      topic: 'The Ordeal - Sharing Our Dark Night',
    },
  ];

  const resources = [
    { title: 'Facilitator Handbook', type: 'PDF', updated: 'Jan 2025' },
    { title: 'Week 5 Session Guide', type: 'PDF', updated: 'Jan 2025' },
    { title: 'Difficult Emotions Guide', type: 'PDF', updated: 'Dec 2024' },
    { title: 'Circle Rituals Template', type: 'DOC', updated: 'Nov 2024' },
  ];

  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={10}>
      <Container maxW="container.xl">
        <VStack gap={8} align="stretch">
          {/* Header */}
          <HStack justify="space-between" flexWrap="wrap" gap={4}>
            <Box>
              <Badge colorScheme="yellow" mb={2}>
                Facilitator Portal
              </Badge>
              <Heading fontSize="3xl">Welcome, {facilitator.name}</Heading>
            </Box>
            <HStack>
              <Button variant="outline" borderColor="brand.gold" color="brand.gold">
                Facilitator Training
              </Button>
              <Button bg="brand.gold" color="brand.black" _hover={{ bg: 'brand.lightGold' }}>
                Start Session
              </Button>
            </HStack>
          </HStack>

          {/* Stats Overview */}
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={6}>
            <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
              <Card.Body textAlign="center">
                <Text fontSize="3xl" fontWeight="bold" color="brand.gold">
                  {facilitator.circles}
                </Text>
                <Text color="fg.muted">Active Circles</Text>
              </Card.Body>
            </Card.Root>
            <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
              <Card.Body textAlign="center">
                <Text fontSize="3xl" fontWeight="bold" color="brand.gold">
                  {facilitator.totalMembers}
                </Text>
                <Text color="fg.muted">Total Members</Text>
              </Card.Body>
            </Card.Root>
            <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
              <Card.Body textAlign="center">
                <Text fontSize="3xl" fontWeight="bold" color="brand.gold">
                  {facilitator.completionRate}%
                </Text>
                <Text color="fg.muted">Completion Rate</Text>
              </Card.Body>
            </Card.Root>
            <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
              <Card.Body textAlign="center">
                <Text fontSize="3xl" fontWeight="bold" color="brand.gold">
                  {facilitator.rating}
                </Text>
                <Text color="fg.muted">Avg Rating</Text>
              </Card.Body>
            </Card.Root>
          </Grid>

          {/* Main Content */}
          <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
            <VStack gap={6} align="stretch">
              {/* My Circles */}
              <Card.Root bg="bg.subtle">
                <Card.Header>
                  <Heading size="md" color="brand.gold">
                    My Circles
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={4} align="stretch">
                    {myCircles.map((circle) => (
                      <Card.Root key={circle.id} bg="bg.muted">
                        <Card.Body>
                          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={4} alignItems="center">
                            <Box>
                              <Heading size="sm">{circle.name}</Heading>
                              <Text fontSize="sm" color="fg.muted">
                                {circle.cohort} Cohort
                              </Text>
                            </Box>
                            <VStack align="start" gap={1}>
                              <HStack>
                                <Text fontSize="sm">{circle.members} members</Text>
                                <Text fontSize="sm" color="fg.muted">
                                  • Week {circle.currentWeek}
                                </Text>
                              </HStack>
                              <HStack>
                                <Text fontSize="sm" color="fg.muted">
                                  Attendance:
                                </Text>
                                <Text fontSize="sm" color="brand.gold">
                                  {circle.attendance}%
                                </Text>
                              </HStack>
                            </VStack>
                            <HStack justify={{ base: 'start', md: 'end' }}>
                              <Button
                                size="sm"
                                variant="outline"
                                borderColor="brand.gold"
                                color="brand.gold"
                              >
                                View Members
                              </Button>
                              <Button
                                size="sm"
                                bg="brand.gold"
                                color="brand.black"
                                _hover={{ bg: 'brand.lightGold' }}
                              >
                                Start Session
                              </Button>
                            </HStack>
                          </Grid>
                        </Card.Body>
                      </Card.Root>
                    ))}
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Tabs */}
              <Tabs.Root defaultValue="sessions">
                <Tabs.List bg="bg.subtle" p={1} borderRadius="md">
                  <Tabs.Trigger value="sessions" color="fg" _selected={{ bg: 'brand.gold', color: 'brand.black' }}>
                    Upcoming Sessions
                  </Tabs.Trigger>
                  <Tabs.Trigger value="members" color="fg" _selected={{ bg: 'brand.gold', color: 'brand.black' }}>
                    Member Check-ins
                  </Tabs.Trigger>
                  <Tabs.Trigger value="notes" color="fg" _selected={{ bg: 'brand.gold', color: 'brand.black' }}>
                    Session Notes
                  </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="sessions">
                  <Card.Root bg="bg.subtle" mt={4}>
                    <Card.Body>
                      <VStack gap={4} align="stretch">
                        {upcomingSessions.map((session, i) => (
                          <HStack
                            key={i}
                            p={4}
                            bg="bg.muted"
                            borderRadius="md"
                            justify="space-between"
                            borderLeft="3px solid"
                            borderColor="brand.gold"
                          >
                            <Box>
                              <Text fontWeight="semibold">{session.circle}</Text>
                              <Text fontSize="sm" color="fg.muted">
                                {session.topic}
                              </Text>
                            </Box>
                            <Box textAlign="right">
                              <Text fontWeight="semibold">{session.date}</Text>
                              <Text fontSize="sm" color="brand.gold">
                                {session.time}
                              </Text>
                            </Box>
                          </HStack>
                        ))}
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                </Tabs.Content>

                <Tabs.Content value="members">
                  <Card.Root bg="bg.subtle" mt={4}>
                    <Card.Body>
                      <VStack gap={4} align="stretch">
                        <Text color="fg.muted">
                          Members who may need additional support:
                        </Text>
                        {[
                          { name: 'Taylor B.', issue: 'Missed 2 sessions', priority: 'high' },
                          { name: 'Riley W.', issue: 'Low engagement', priority: 'medium' },
                        ].map((member, i) => (
                          <HStack key={i} p={4} bg="bg.muted" borderRadius="md" justify="space-between">
                            <HStack>
                              <SimpleAvatar size="sm" name={member.name} />
                              <Box>
                                <Text fontWeight="semibold">{member.name}</Text>
                                <Text fontSize="sm" color="fg.muted">
                                  {member.issue}
                                </Text>
                              </Box>
                            </HStack>
                            <HStack>
                              <Badge colorScheme={member.priority === 'high' ? 'red' : 'yellow'}>
                                {member.priority}
                              </Badge>
                              <Button size="sm" variant="outline" borderColor="brand.gold" color="brand.gold">
                                Reach Out
                              </Button>
                            </HStack>
                          </HStack>
                        ))}
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                </Tabs.Content>

                <Tabs.Content value="notes">
                  <Card.Root bg="bg.subtle" mt={4}>
                    <Card.Body>
                      <VStack gap={4} align="stretch">
                        <Text color="fg.muted">
                          Document important moments and insights from each session.
                        </Text>
                        <Button variant="outline" borderColor="brand.gold" color="brand.gold">
                          Add Session Notes
                        </Button>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                </Tabs.Content>
              </Tabs.Root>
            </VStack>

            {/* Sidebar */}
            <VStack gap={6} align="stretch">
              {/* This Week's Focus */}
              <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
                <Card.Header>
                  <Heading size="sm" color="brand.gold">
                    This Week's Focus
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack align="start" gap={4}>
                    <Box>
                      <Badge colorScheme="yellow" mb={2}>
                        Week 5
                      </Badge>
                      <Heading size="sm">The Ordeal</Heading>
                      <Text fontSize="sm" color="fg.muted">
                        "Dark Night of the Soul"
                      </Text>
                    </Box>
                    <Text fontSize="sm" color="fg.muted">
                      This week focuses on surrender and transformation. Members may experience
                      intense emotions. Hold space with extra compassion.
                    </Text>
                    <Box w="full">
                      <Text fontSize="sm" fontWeight="semibold" mb={2}>
                        Key Points:
                      </Text>
                      <VStack align="start" gap={1} fontSize="sm">
                        <Text>• Normalize difficult emotions</Text>
                        <Text>• Create extra safety</Text>
                        <Text>• Allow silence and tears</Text>
                        <Text>• Celebrate vulnerability</Text>
                      </VStack>
                    </Box>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Resources */}
              <Card.Root bg="bg.subtle">
                <Card.Header>
                  <Heading size="sm" color="brand.gold">
                    Facilitator Resources
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={3} align="stretch">
                    {resources.map((resource, i) => (
                      <HStack key={i} p={3} bg="bg.muted" borderRadius="md" cursor="pointer" _hover={{ bg: 'brand.charcoal' }}>
                        <Box
                          w={8}
                          h={8}
                          bg="brand.gold"
                          borderRadius="md"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontSize="xs"
                          color="brand.black"
                          fontWeight="bold"
                        >
                          {resource.type}
                        </Box>
                        <Box flex="1">
                          <Text fontSize="sm" fontWeight="semibold">
                            {resource.title}
                          </Text>
                          <Text fontSize="xs" color="fg.muted">
                            Updated {resource.updated}
                          </Text>
                        </Box>
                      </HStack>
                    ))}
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Support */}
              <Card.Root bg="bg.muted">
                <Card.Body>
                  <VStack gap={4}>
                    <Heading size="sm">Need Support?</Heading>
                    <Text fontSize="sm" color="fg.muted" textAlign="center">
                      Connect with our facilitator support team or peer facilitators.
                    </Text>
                    <Button variant="outline" borderColor="brand.gold" color="brand.gold" w="full" size="sm">
                      Facilitator Slack
                    </Button>
                    <Button variant="outline" borderColor="brand.charcoal" w="full" size="sm">
                      Schedule Supervision
                    </Button>
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
