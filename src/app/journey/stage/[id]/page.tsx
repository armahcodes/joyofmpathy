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
  Stack,
  Badge,
  Tabs,
} from '@chakra-ui/react';
import Link from 'next/link';
import { use } from 'react';

export default function StageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const stageNumber = parseInt(id);

  // Mock stage data
  const stage = {
    stage: stageNumber,
    title: 'Refusal of the Call',
    theme: 'Facing Fear and Resistance',
    description:
      'In this stage, you will gently explore the fears and resistance that may be holding you back from transformation. Through compassionate inquiry, you will name your obstacles and understand them with self-compassion.',
    status: 'current',
    progress: 45,
  };

  const content = [
    { id: 1, title: 'Understanding Resistance', type: 'Video', duration: '18 min', completed: true },
    { id: 2, title: 'The Neuroscience of Fear', type: 'Video', duration: '15 min', completed: true },
    { id: 3, title: 'Self-Compassion Practice', type: 'Reading', duration: '10 min', completed: false },
  ];

  const practices = [
    {
      id: 1,
      title: 'Fear Inventory Meditation',
      type: 'Meditation',
      duration: '15 min',
      completed: false,
    },
    {
      id: 2,
      title: 'Compassionate Inquiry',
      type: 'Journaling',
      duration: '20 min',
      completed: false,
    },
    { id: 3, title: 'Loving-Kindness Practice', type: 'Meditation', duration: '15 min', completed: false },
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
            <Link href="/journey">
              <Text _hover={{ color: 'brand.gold' }}>Journey</Text>
            </Link>
            <Text>/</Text>
            <Text color="brand.gold">Stage {stageNumber}</Text>
          </HStack>

          {/* Stage Header */}
          <Box>
            <HStack mb={4}>
              <Badge colorScheme="yellow">Stage {stage.stage}</Badge>
              <Badge>In Progress</Badge>
            </HStack>
            <Heading fontSize="4xl" mb={2}>
              {stage.title}
            </Heading>
            <Text fontSize="xl" color="brand.gold" fontStyle="italic" mb={4}>
              "{stage.theme}"
            </Text>
            <Text fontSize="lg" color="fg.muted" maxW="3xl">
              {stage.description}
            </Text>
          </Box>

          {/* Progress Card */}
          <Card.Root bg="bg.subtle" borderLeft="4px solid" borderColor="brand.gold">
            <Card.Body>
              <HStack justify="space-between" mb={4}>
                <Text fontWeight="semibold">Stage Progress</Text>
                <Text fontWeight="bold" color="brand.gold">
                  {stage.progress}% Complete
                </Text>
              </HStack>
              <Box>
                <Box h={2} bg="bg.muted" borderRadius="full" overflow="hidden">
                  <Box h="full" w={`${stage.progress}%`} bg="brand.gold" />
                </Box>
              </Box>
            </Card.Body>
          </Card.Root>

          {/* Main Content Grid */}
          <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
            {/* Left Column - Content */}
            <VStack gap={6} align="stretch">
              {/* Teaching Content */}
              <Card.Root bg="bg.subtle">
                <Card.Header>
                  <Heading size="md" color="brand.gold">
                    Teaching Content
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={4} align="stretch">
                    {content.map((item) => (
                      <HStack
                        key={item.id}
                        p={4}
                        bg="bg.muted"
                        borderRadius="md"
                        justify="space-between"
                        _hover={{ bg: 'brand.charcoal' }}
                        cursor="pointer"
                      >
                        <HStack flex="1">
                          {item.completed && <Text color="brand.gold">✓</Text>}
                          <Box>
                            <Text fontWeight="semibold">{item.title}</Text>
                            <HStack gap={3} mt={1}>
                              <Badge size="sm">{item.type}</Badge>
                              <Text fontSize="xs" color="fg.muted">
                                {item.duration}
                              </Text>
                            </HStack>
                          </Box>
                        </HStack>
                        <Button size="sm" variant="outline" borderColor="brand.gold" color="brand.gold">
                          {item.completed ? 'Review' : 'Start'}
                        </Button>
                      </HStack>
                    ))}
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Practices */}
              <Card.Root bg="bg.subtle">
                <Card.Header>
                  <Heading size="md" color="brand.gold">
                    Practices
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={4} align="stretch">
                    {practices.map((practice) => (
                      <HStack
                        key={practice.id}
                        p={4}
                        bg="bg.muted"
                        borderRadius="md"
                        justify="space-between"
                        _hover={{ bg: 'brand.charcoal' }}
                        cursor="pointer"
                      >
                        <HStack flex="1">
                          {practice.completed && <Text color="brand.gold">✓</Text>}
                          <Box>
                            <Text fontWeight="semibold">{practice.title}</Text>
                            <HStack gap={3} mt={1}>
                              <Badge size="sm">{practice.type}</Badge>
                              <Text fontSize="xs" color="fg.muted">
                                {practice.duration}
                              </Text>
                            </HStack>
                          </Box>
                        </HStack>
                        <Button
                          size="sm"
                          bg="brand.gold"
                          color="brand.black"
                          _hover={{ bg: 'brand.lightGold' }}
                        >
                          {practice.completed ? 'Repeat' : 'Start'}
                        </Button>
                      </HStack>
                    ))}
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Reflection Journal */}
              <Card.Root bg="bg.subtle">
                <Card.Header>
                  <Heading size="md" color="brand.gold">
                    Reflection Journal
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <Stack gap={4}>
                    <Text color="fg.muted" fontSize="sm">
                      Reflect on your experience with this stage. What insights have you gained?
                      What challenges are you facing?
                    </Text>
                    <textarea
                      style={{
                        width: '100%',
                        minHeight: '150px',
                        backgroundColor: 'var(--chakra-colors-bg-muted)',
                        border: '1px solid var(--chakra-colors-brand-charcoal)',
                        borderRadius: '0.375rem',
                        padding: '1rem',
                        color: 'var(--chakra-colors-fg)',
                        resize: 'vertical',
                      }}
                      placeholder="Write your reflections here..."
                    />
                    <Button bg="brand.gold" color="brand.black" _hover={{ bg: 'brand.lightGold' }}>
                      Save Reflection
                    </Button>
                  </Stack>
                </Card.Body>
              </Card.Root>
            </VStack>

            {/* Right Column - Sidebar */}
            <VStack gap={6} align="stretch">
              {/* Next Steps */}
              <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
                <Card.Header>
                  <Heading size="sm" color="brand.gold">
                    Next Steps
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={3} align="stretch">
                    <Text fontSize="sm" color="fg.muted">
                      To complete this stage and unlock Stage 4:
                    </Text>
                    <VStack align="start" gap={2} fontSize="sm">
                      <HStack>
                        <Text color="brand.gold">✓</Text>
                        <Text color="fg.muted">Watch all teaching videos</Text>
                      </HStack>
                      <HStack>
                        <Text color="fg.subtle">○</Text>
                        <Text>Complete 3 practices</Text>
                      </HStack>
                      <HStack>
                        <Text color="fg.subtle">○</Text>
                        <Text>Submit reflection</Text>
                      </HStack>
                    </VStack>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Community Support */}
              <Card.Root bg="bg.subtle">
                <Card.Header>
                  <Heading size="sm" color="brand.gold">
                    Community Support
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={4}>
                    <Text fontSize="sm" color="fg.muted">
                      Connect with others on Stage {stageNumber}
                    </Text>
                    <Link href="/community" style={{ width: '100%' }}>
                      <Button variant="outline" borderColor="brand.gold" color="brand.gold" w="full" size="sm">
                        Join Discussion
                      </Button>
                    </Link>
                    <Link href="/circles" style={{ width: '100%' }}>
                      <Button variant="outline" borderColor="brand.gold" color="brand.gold" w="full" size="sm">
                        Find Accountability Partner
                      </Button>
                    </Link>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Resources */}
              <Card.Root bg="bg.subtle">
                <Card.Header>
                  <Heading size="sm" color="brand.gold">
                    Additional Resources
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={3} align="stretch">
                    <Link href="#">
                      <Text fontSize="sm" color="fg.muted" _hover={{ color: 'brand.gold' }}>
                        → Reading: The Gifts of Imperfection
                      </Text>
                    </Link>
                    <Link href="#">
                      <Text fontSize="sm" color="fg.muted" _hover={{ color: 'brand.gold' }}>
                        → Meditation: Self-Compassion Break
                      </Text>
                    </Link>
                    <Link href="#">
                      <Text fontSize="sm" color="fg.muted" _hover={{ color: 'brand.gold' }}>
                        → Article: Understanding Fear
                      </Text>
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
