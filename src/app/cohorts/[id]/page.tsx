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
import { use } from 'react';
import { FiCheck, FiLock, FiBook, FiActivity, FiEdit3, FiCircle } from 'react-icons/fi';

export default function CohortDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // Mock cohort data
  const cohort = {
    id,
    title: "The Hero's Journey to Joy",
    type: 'Flagship',
    currentWeek: 5,
    totalWeeks: 8,
    currentStage: 'The Ordeal',
    nextSession: {
      title: 'Surrender and Transformation',
      date: 'Tonight',
      time: '7:00 PM PT',
      instructor: 'Dr. Natalie Petouhoff',
    },
    memberCount: 142,
    circleCount: 12,
    myCircle: {
      name: 'Phoenix Rising',
      facilitator: 'Sarah Chen',
      members: 11,
      nextMeeting: 'Thursday, 6:00 PM PT',
    },
    progress: {
      lessonsCompleted: 18,
      totalLessons: 32,
      practicesCompleted: 28,
      reflectionsSubmitted: 4,
    },
  };

  const weeklySchedule = [
    { day: 'Monday', activity: 'New Lesson Drop', time: '6:00 AM PT' },
    { day: 'Tuesday', activity: 'Cohort Live Q&A', time: '7:00 PM PT' },
    { day: 'Thursday', activity: 'Circle Meeting', time: '6:00 PM PT' },
    { day: 'Saturday', activity: 'Integration Day', time: 'Self-paced' },
  ];

  const weekContent = [
    { week: 1, title: 'The Ordinary World', status: 'completed' },
    { week: 2, title: 'Call to Adventure', status: 'completed' },
    { week: 3, title: 'Refusal of the Call', status: 'completed' },
    { week: 4, title: 'Meeting the Mentor', status: 'completed' },
    { week: 5, title: 'The Ordeal', status: 'current' },
    { week: 6, title: 'Reward', status: 'locked' },
    { week: 7, title: 'The Road Back', status: 'locked' },
    { week: 8, title: 'Return with the Elixir', status: 'locked' },
  ];

  const todaysContent = [
    {
      id: 1,
      type: 'Lesson',
      title: 'Surrender as Strength',
      duration: '18 min',
      completed: false,
    },
    {
      id: 2,
      type: 'Practice',
      title: 'Tonglen Meditation',
      duration: '20 min',
      completed: false,
    },
    {
      id: 3,
      type: 'Reflection',
      title: 'Dark Night Journal',
      duration: '15 min',
      completed: false,
    },
  ];

  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={10}>
      <Container maxW="container.xl">
        <VStack gap={8} align="stretch">
          {/* Breadcrumbs */}
          <HStack fontSize="sm" color="fg.muted">
            <Link href="/dashboard">
              <Text _hover={{ color: 'brand.gold' }}>Dashboard</Text>
            </Link>
            <Text>/</Text>
            <Link href="/cohorts">
              <Text _hover={{ color: 'brand.gold' }}>Cohorts</Text>
            </Link>
            <Text>/</Text>
            <Text color="brand.gold">{cohort.title}</Text>
          </HStack>

          {/* Header */}
          <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
            <Box>
              <HStack mb={4}>
                <Badge colorScheme="green">Active</Badge>
                <Badge colorScheme="yellow">{cohort.type}</Badge>
                <Badge>Week {cohort.currentWeek} of {cohort.totalWeeks}</Badge>
              </HStack>
              <Heading fontSize="3xl" mb={2}>
                {cohort.title}
              </Heading>
              <Text color="fg.muted">
                Current Stage:{' '}
                <Text as="span" color="brand.gold" fontWeight="semibold">
                  {cohort.currentStage}
                </Text>
              </Text>
            </Box>

            {/* Next Session Card */}
            <Card.Root bg="bg.subtle" borderLeft="4px solid" borderColor="brand.gold">
              <Card.Body>
                <VStack align="start" gap={3}>
                  <Text fontSize="sm" color="fg.muted">
                    Next Live Session
                  </Text>
                  <Heading size="sm">{cohort.nextSession.title}</Heading>
                  <HStack>
                    <SimpleAvatar size="xs" name={cohort.nextSession.instructor} />
                    <Text fontSize="sm" color="brand.gold">
                      {cohort.nextSession.instructor}
                    </Text>
                  </HStack>
                  <Text fontSize="sm">
                    {cohort.nextSession.date} at {cohort.nextSession.time}
                  </Text>
                  <Button
                    bg="brand.gold"
                    color="brand.black"
                    _hover={{ bg: 'brand.lightGold' }}
                    size="sm"
                    w="full"
                  >
                    Join Session
                  </Button>
                </VStack>
              </Card.Body>
            </Card.Root>
          </Grid>

          {/* Progress Overview */}
          <Card.Root bg="bg.subtle">
            <Card.Body>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={6}>
                <Box>
                  <Text fontSize="sm" color="fg.muted" mb={2}>
                    Overall Progress
                  </Text>
                  <HStack>
                    <Text fontSize="2xl" fontWeight="bold" color="brand.gold">
                      {Math.round((cohort.currentWeek / cohort.totalWeeks) * 100)}%
                    </Text>
                  </HStack>
                  <Progress.Root value={(cohort.currentWeek / cohort.totalWeeks) * 100} mt={2}>
                    <Progress.Track bg="bg.muted">
                      <Progress.Range bg="brand.gold" />
                    </Progress.Track>
                  </Progress.Root>
                </Box>
                <Box>
                  <Text fontSize="sm" color="fg.muted" mb={2}>
                    Lessons Completed
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.gold">
                    {cohort.progress.lessonsCompleted}/{cohort.progress.totalLessons}
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="sm" color="fg.muted" mb={2}>
                    Practices Done
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.gold">
                    {cohort.progress.practicesCompleted}
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="sm" color="fg.muted" mb={2}>
                    Reflections
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.gold">
                    {cohort.progress.reflectionsSubmitted}
                  </Text>
                </Box>
              </Grid>
            </Card.Body>
          </Card.Root>

          {/* Main Content */}
          <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
            {/* Left Column */}
            <VStack gap={6} align="stretch">
              {/* Today's Content */}
              <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
                <Card.Header>
                  <HStack justify="space-between">
                    <Heading size="md" color="brand.gold">
                      Today's Content
                    </Heading>
                    <Badge>Week {cohort.currentWeek}</Badge>
                  </HStack>
                </Card.Header>
                <Card.Body>
                  <VStack gap={4} align="stretch">
                    {todaysContent.map((item) => (
                      <HStack
                        key={item.id}
                        p={4}
                        bg="bg.muted"
                        borderRadius="md"
                        justify="space-between"
                        _hover={{ bg: 'brand.charcoal' }}
                        cursor="pointer"
                      >
                        <HStack gap={4}>
                          <Box
                            w={10}
                            h={10}
                            bg={item.completed ? 'brand.gold' : 'bg'}
                            borderRadius="full"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            color={item.completed ? 'brand.black' : 'fg'}
                          >
                            {item.completed ? <FiCheck size={18} /> : item.type === 'Lesson' ? <FiBook size={18} /> : item.type === 'Practice' ? <FiActivity size={18} /> : <FiEdit3 size={18} />}
                          </Box>
                          <Box>
                            <Text fontWeight="semibold">{item.title}</Text>
                            <HStack gap={3}>
                              <Badge size="sm">{item.type}</Badge>
                              <Text fontSize="xs" color="fg.muted">
                                {item.duration}
                              </Text>
                            </HStack>
                          </Box>
                        </HStack>
                        <Button
                          size="sm"
                          bg={item.completed ? 'transparent' : 'brand.gold'}
                          color={item.completed ? 'brand.gold' : 'brand.black'}
                          borderColor="brand.gold"
                          variant={item.completed ? 'outline' : 'solid'}
                          _hover={{ bg: item.completed ? 'bg.muted' : 'brand.lightGold' }}
                        >
                          {item.completed ? 'Review' : 'Start'}
                        </Button>
                      </HStack>
                    ))}
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Week Content Tabs */}
              <Tabs.Root defaultValue="week-5">
                <Tabs.List bg="bg.subtle" p={1} borderRadius="md" overflowX="auto">
                  {weekContent.map((week) => (
                    <Tabs.Trigger
                      key={week.week}
                      value={`week-${week.week}`}
                      color={week.status === 'locked' ? 'fg.muted' : 'fg'}
                      _selected={{ bg: 'brand.gold', color: 'brand.black' }}
                      disabled={week.status === 'locked'}
                    >
                      <HStack gap={1}>
                        <Text>W{week.week}</Text>
                        {week.status === 'completed' && <FiCheck size={12} />}
                        {week.status === 'locked' && <FiLock size={12} />}
                      </HStack>
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>

                <Tabs.Content value="week-5">
                  <Card.Root bg="bg.subtle" mt={4}>
                    <Card.Header>
                      <Heading size="sm">Week 5: The Ordeal</Heading>
                      <Text fontSize="sm" color="fg.muted">
                        "Dark Night of the Soul"
                      </Text>
                    </Card.Header>
                    <Card.Body>
                      <VStack gap={4} align="stretch">
                        <Text color="fg.muted">
                          This is the transformational crucible. Surrender to the death-rebirth
                          process as old patterns dissolve and new ways of being emerge.
                        </Text>
                        <Box>
                          <Text fontWeight="semibold" mb={2}>
                            This Week's Content:
                          </Text>
                          <VStack align="start" gap={2}>
                            <HStack>
                              <Box color="brand.gold"><FiCheck size={14} /></Box>
                              <Text fontSize="sm">Lesson: Understanding the Ordeal</Text>
                            </HStack>
                            <HStack>
                              <Box color="brand.gold"><FiCheck size={14} /></Box>
                              <Text fontSize="sm">Practice: Shadow Work Meditation</Text>
                            </HStack>
                            <HStack>
                              <Box color="fg.muted"><FiCircle size={14} /></Box>
                              <Text fontSize="sm">Lesson: Surrender as Strength</Text>
                            </HStack>
                            <HStack>
                              <Box color="fg.muted"><FiCircle size={14} /></Box>
                              <Text fontSize="sm">Practice: Tonglen Meditation</Text>
                            </HStack>
                            <HStack>
                              <Box color="fg.muted"><FiCircle size={14} /></Box>
                              <Text fontSize="sm">Reflection: Dark Night Journal</Text>
                            </HStack>
                          </VStack>
                        </Box>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                </Tabs.Content>
              </Tabs.Root>
            </VStack>

            {/* Right Column */}
            <VStack gap={6} align="stretch">
              {/* My Circle */}
              <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
                <Card.Header>
                  <Heading size="sm" color="brand.gold">
                    My Circle: {cohort.myCircle.name}
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={4} align="stretch">
                    <HStack>
                      <SimpleAvatar size="sm" name={cohort.myCircle.facilitator} />
                      <Box>
                        <Text fontSize="sm" fontWeight="semibold">
                          {cohort.myCircle.facilitator}
                        </Text>
                        <Text fontSize="xs" color="fg.muted">
                          Facilitator
                        </Text>
                      </Box>
                    </HStack>
                    <Box>
                      <Text fontSize="sm" color="fg.muted">
                        {cohort.myCircle.members} members
                      </Text>
                      <Text fontSize="sm">
                        Next meeting:{' '}
                        <Text as="span" color="brand.gold">
                          {cohort.myCircle.nextMeeting}
                        </Text>
                      </Text>
                    </Box>
                    <Link href="/circles">
                      <Button
                        variant="outline"
                        borderColor="brand.gold"
                        color="brand.gold"
                        w="full"
                        size="sm"
                      >
                        View Circle
                      </Button>
                    </Link>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Weekly Schedule */}
              <Card.Root bg="bg.subtle">
                <Card.Header>
                  <Heading size="sm" color="brand.gold">
                    Weekly Schedule
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={3} align="stretch">
                    {weeklySchedule.map((item, i) => (
                      <HStack key={i} justify="space-between">
                        <Box>
                          <Text fontSize="sm" fontWeight="semibold">
                            {item.day}
                          </Text>
                          <Text fontSize="xs" color="fg.muted">
                            {item.activity}
                          </Text>
                        </Box>
                        <Text fontSize="xs" color="brand.gold">
                          {item.time}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Cohort Stats */}
              <Card.Root bg="bg.subtle">
                <Card.Header>
                  <Heading size="sm" color="brand.gold">
                    Cohort Stats
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <VStack>
                      <Text fontSize="2xl" fontWeight="bold" color="brand.gold">
                        {cohort.memberCount}
                      </Text>
                      <Text fontSize="xs" color="fg.muted">
                        Members
                      </Text>
                    </VStack>
                    <VStack>
                      <Text fontSize="2xl" fontWeight="bold" color="brand.gold">
                        {cohort.circleCount}
                      </Text>
                      <Text fontSize="xs" color="fg.muted">
                        Circles
                      </Text>
                    </VStack>
                    <VStack>
                      <Text fontSize="2xl" fontWeight="bold" color="brand.gold">
                        89%
                      </Text>
                      <Text fontSize="xs" color="fg.muted">
                        Active Rate
                      </Text>
                    </VStack>
                    <VStack>
                      <Text fontSize="2xl" fontWeight="bold" color="brand.gold">
                        4.9
                      </Text>
                      <Text fontSize="xs" color="fg.muted">
                        Avg Rating
                      </Text>
                    </VStack>
                  </Grid>
                </Card.Body>
              </Card.Root>

              {/* Quick Links */}
              <Card.Root bg="bg.subtle">
                <Card.Header>
                  <Heading size="sm" color="brand.gold">
                    Quick Links
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={2}>
                    <Link href="/community" style={{ width: '100%' }}>
                      <Button variant="outline" borderColor="brand.charcoal" w="full" size="sm">
                        Cohort Discussion
                      </Button>
                    </Link>
                    <Link href="/library" style={{ width: '100%' }}>
                      <Button variant="outline" borderColor="brand.charcoal" w="full" size="sm">
                        Resource Library
                      </Button>
                    </Link>
                    <Button variant="outline" borderColor="brand.charcoal" w="full" size="sm">
                      Download Workbook
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
