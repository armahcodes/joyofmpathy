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
  Progress,
  Badge,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FiTrendingUp, FiCheck, FiLock, FiCalendar, FiUsers, FiPlay, FiBook, FiTarget, FiAward } from 'react-icons/fi';

export default function DashboardPage() {
  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={{ base: 6, md: 10 }}>
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <VStack gap={{ base: 6, md: 8 }} align="stretch">
          {/* Welcome Section */}
          <Box>
            <Heading fontSize={{ base: '2xl', md: '3xl' }} mb={2}>
              Welcome back, Sarah
            </Heading>
            <Text color="fg.muted" fontSize={{ base: 'sm', md: 'md' }}>Continue your transformation journey</Text>
          </Box>

          {/* Stats Grid */}
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={{ base: 3, md: 6 }}>
            <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
              <Card.Body p={{ base: 3, md: 5 }}>
                <VStack align="start" gap={2}>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted">
                    Current Stage
                  </Text>
                  <Heading fontSize={{ base: 'xl', md: '2xl' }} color="brand.gold">
                    Stage 3
                  </Heading>
                  <Text fontSize={{ base: '2xs', md: 'xs' }} color="fg.muted">
                    Refusal of the Call
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
              <Card.Body p={{ base: 3, md: 5 }}>
                <VStack align="start" gap={2}>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted">
                    Practice Streak
                  </Text>
                  <HStack>
                    <Heading fontSize={{ base: 'xl', md: '2xl' }} color="brand.gold">
                      14
                    </Heading>
                    <Box color="brand.gold">
                      <FiTrendingUp size={18} />
                    </Box>
                  </HStack>
                  <Text fontSize={{ base: '2xs', md: 'xs' }} color="fg.muted">
                    days in a row
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
              <Card.Body p={{ base: 3, md: 5 }}>
                <VStack align="start" gap={2}>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted">
                    Wellbeing Score
                  </Text>
                  <HStack>
                    <Heading fontSize={{ base: 'xl', md: '2xl' }} color="brand.gold">
                      72
                    </Heading>
                    <Badge colorScheme="green" fontSize={{ base: '2xs', md: 'xs' }}>+15%</Badge>
                  </HStack>
                  <Text fontSize={{ base: '2xs', md: 'xs' }} color="fg.muted">
                    since baseline
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
              <Card.Body p={{ base: 3, md: 5 }}>
                <VStack align="start" gap={2}>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted">
                    Completed
                  </Text>
                  <Heading fontSize={{ base: 'xl', md: '2xl' }} color="brand.gold">
                    2/12
                  </Heading>
                  <Text fontSize={{ base: '2xs', md: 'xs' }} color="fg.muted">
                    journey stages
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          </Grid>

          {/* Main Content Grid */}
          <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={{ base: 6, md: 8 }}>
            {/* Left Column */}
            <VStack gap={{ base: 4, md: 6 }} align="stretch">
              {/* Today's Practice */}
              <Card.Root bg="bg.subtle" borderLeft="4px solid" borderColor="brand.gold">
                <Card.Header p={{ base: 4, md: 6 }}>
                  <HStack>
                    <Box color="brand.gold">
                      <FiPlay size={20} />
                    </Box>
                    <Heading size={{ base: 'sm', md: 'md' }} color="brand.gold">
                      Today's Practice
                    </Heading>
                  </HStack>
                </Card.Header>
                <Card.Body p={{ base: 4, md: 6 }} pt={0}>
                  <Stack gap={4}>
                    <HStack gap={4} align="start">
                      <Box
                        w={{ base: '80px', md: '120px' }}
                        h={{ base: '60px', md: '80px' }}
                        borderRadius="md"
                        overflow="hidden"
                        flexShrink={0}
                      >
                        <Image
                          src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=300&q=80"
                          alt="Meditation"
                          w="full"
                          h="full"
                          objectFit="cover"
                        />
                      </Box>
                      <Box flex="1">
                        <Text fontWeight="semibold" mb={1} fontSize={{ base: 'sm', md: 'md' }}>
                          Fear Inventory Meditation
                        </Text>
                        <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted" mb={2}>
                          A gentle 15-minute practice to name and understand your fears with compassion.
                        </Text>
                        <HStack gap={2} flexWrap="wrap">
                          <Badge fontSize="xs">15 min</Badge>
                          <Badge fontSize="xs">Meditation</Badge>
                          <Badge fontSize="xs">Stage 3</Badge>
                        </HStack>
                      </Box>
                    </HStack>
                    <Button
                      bg="brand.gold"
                      color="brand.black"
                      _hover={{ bg: 'brand.lightGold' }}
                      w="full"
                      size={{ base: 'sm', md: 'md' }}
                    >
                      <HStack gap={2}>
                        <FiPlay />
                        <Text>Start Practice</Text>
                      </HStack>
                    </Button>
                  </Stack>
                </Card.Body>
              </Card.Root>

              {/* Journey Progress */}
              <Card.Root bg="bg.subtle">
                <Card.Header p={{ base: 4, md: 6 }}>
                  <HStack justify="space-between">
                    <HStack>
                      <Box color="brand.gold">
                        <FiTarget size={20} />
                      </Box>
                      <Heading size={{ base: 'sm', md: 'md' }} color="brand.gold">
                        Your Hero's Journey
                      </Heading>
                    </HStack>
                    <Link href="/journey">
                      <Text fontSize={{ base: 'xs', md: 'sm' }} color="brand.gold" _hover={{ textDecoration: 'underline' }}>
                        View All
                      </Text>
                    </Link>
                  </HStack>
                </Card.Header>
                <Card.Body p={{ base: 4, md: 6 }} pt={0}>
                  <Stack gap={4}>
                    <Box>
                      <HStack justify="space-between" mb={2}>
                        <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted">
                          Overall Progress
                        </Text>
                        <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="semibold" color="brand.gold">
                          17%
                        </Text>
                      </HStack>
                      <Progress.Root value={17} colorScheme="yellow">
                        <Progress.Track bg="bg.muted">
                          <Progress.Range bg="brand.gold" />
                        </Progress.Track>
                      </Progress.Root>
                    </Box>

                    {/* Stage List Preview */}
                    <VStack gap={2} align="stretch">
                      {[
                        { stage: 1, title: 'The Ordinary World', status: 'completed' },
                        { stage: 2, title: 'Call to Adventure', status: 'completed' },
                        { stage: 3, title: 'Refusal of the Call', status: 'current' },
                        { stage: 4, title: 'Meeting the Mentor', status: 'locked' },
                      ].map((item) => (
                        <HStack
                          key={item.stage}
                          p={{ base: 2, md: 3 }}
                          bg={item.status === 'current' ? 'bg.muted' : 'transparent'}
                          borderLeft={item.status === 'current' ? '3px solid' : 'none'}
                          borderColor="brand.gold"
                          borderRadius="md"
                        >
                          <Box
                            w={{ base: 6, md: 8 }}
                            h={{ base: 6, md: 8 }}
                            bg={
                              item.status === 'completed'
                                ? 'brand.gold'
                                : item.status === 'current'
                                ? 'brand.charcoal'
                                : 'bg.muted'
                            }
                            borderRadius="full"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize={{ base: 'xs', md: 'sm' }}
                            fontWeight="bold"
                            color={item.status === 'completed' ? 'brand.black' : item.status === 'locked' ? 'fg.muted' : 'fg'}
                          >
                            {item.status === 'completed' ? <FiCheck size={14} /> : item.stage}
                          </Box>
                          <Box flex="1">
                            <Text
                              fontSize={{ base: 'xs', md: 'sm' }}
                              fontWeight={item.status === 'current' ? 'semibold' : 'normal'}
                              color={item.status === 'locked' ? 'fg.muted' : 'fg'}
                            >
                              Stage {item.stage}: {item.title}
                            </Text>
                          </Box>
                          {item.status === 'current' && (
                            <Badge colorScheme="yellow" fontSize="2xs">In Progress</Badge>
                          )}
                          {item.status === 'locked' && (
                            <Box color="fg.muted">
                              <FiLock size={14} />
                            </Box>
                          )}
                        </HStack>
                      ))}
                    </VStack>
                  </Stack>
                </Card.Body>
              </Card.Root>
            </VStack>

            {/* Right Column */}
            <VStack gap={{ base: 4, md: 6 }} align="stretch">
              {/* Upcoming Events */}
              <Card.Root bg="bg.subtle">
                <Card.Header p={{ base: 4, md: 6 }}>
                  <HStack>
                    <Box color="brand.gold">
                      <FiCalendar size={18} />
                    </Box>
                    <Heading size={{ base: 'xs', md: 'sm' }} color="brand.gold">
                      Upcoming Events
                    </Heading>
                  </HStack>
                </Card.Header>
                <Card.Body p={{ base: 4, md: 6 }} pt={0}>
                  <VStack gap={3} align="stretch">
                    <Box
                      p={3}
                      bg="bg.muted"
                      borderRadius="md"
                      borderLeft="3px solid"
                      borderColor="brand.gold"
                    >
                      <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="semibold" mb={1}>
                        Community Circle: Facing Fear
                      </Text>
                      <Text fontSize="xs" color="fg.muted" mb={2}>
                        Tonight at 7:00 PM
                      </Text>
                      <Button size="xs" variant="outline" borderColor="brand.gold" color="brand.gold">
                        Join Circle
                      </Button>
                    </Box>

                    <Box
                      p={3}
                      bg="bg.muted"
                      borderRadius="md"
                      borderLeft="3px solid"
                      borderColor="brand.gold"
                    >
                      <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="semibold" mb={1}>
                        Masterclass: The Science of Empathy
                      </Text>
                      <Text fontSize="xs" color="fg.muted" mb={2}>
                        Tomorrow at 2:00 PM
                      </Text>
                      <Button size="xs" variant="outline" borderColor="brand.gold" color="brand.gold">
                        Register
                      </Button>
                    </Box>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Community Highlights */}
              <Card.Root bg="bg.subtle">
                <Card.Header p={{ base: 4, md: 6 }}>
                  <HStack>
                    <Box color="brand.gold">
                      <FiUsers size={18} />
                    </Box>
                    <Heading size={{ base: 'xs', md: 'sm' }} color="brand.gold">
                      Community Highlights
                    </Heading>
                  </HStack>
                </Card.Header>
                <Card.Body p={{ base: 4, md: 6 }} pt={0}>
                  <VStack gap={4} align="stretch">
                    <Box>
                      <HStack mb={2}>
                        <Box w={8} h={8} borderRadius="full" overflow="hidden">
                          <Image
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
                            alt="Maria"
                            w="full"
                            h="full"
                            objectFit="cover"
                          />
                        </Box>
                        <Text fontSize="xs" color="brand.gold" fontWeight="semibold">Maria R.</Text>
                      </HStack>
                      <Text fontSize={{ base: 'xs', md: 'sm' }}>
                        "I just completed Stage 5! The commitment ceremony was powerful. Thank you all for your support."
                      </Text>
                    </Box>
                    <Box>
                      <HStack mb={2}>
                        <Box w={8} h={8} borderRadius="full" overflow="hidden">
                          <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                            alt="James"
                            w="full"
                            h="full"
                            objectFit="cover"
                          />
                        </Box>
                        <Text fontSize="xs" color="brand.gold" fontWeight="semibold">James T.</Text>
                      </HStack>
                      <Text fontSize={{ base: 'xs', md: 'sm' }}>
                        "Day 30 of my practice streak! The consistency is really changing my life."
                      </Text>
                    </Box>
                    <Link href="/community">
                      <Button
                        variant="outline"
                        borderColor="brand.gold"
                        color="brand.gold"
                        w="full"
                        size="sm"
                      >
                        View Community
                      </Button>
                    </Link>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Quick Actions */}
              <Card.Root bg="bg.subtle">
                <Card.Header p={{ base: 4, md: 6 }}>
                  <Heading size={{ base: 'xs', md: 'sm' }} color="brand.gold">
                    Quick Actions
                  </Heading>
                </Card.Header>
                <Card.Body p={{ base: 4, md: 6 }} pt={0}>
                  <VStack gap={2}>
                    <Link href="/library" style={{ width: '100%' }}>
                      <Button variant="outline" borderColor="brand.charcoal" w="full" size="sm">
                        <HStack gap={2}>
                          <FiBook />
                          <Text>Browse Practices</Text>
                        </HStack>
                      </Button>
                    </Link>
                    <Link href="/masterclasses" style={{ width: '100%' }}>
                      <Button variant="outline" borderColor="brand.charcoal" w="full" size="sm">
                        <HStack gap={2}>
                          <FiAward />
                          <Text>Explore Masterclasses</Text>
                        </HStack>
                      </Button>
                    </Link>
                    <Link href="/assessment" style={{ width: '100%' }}>
                      <Button variant="outline" borderColor="brand.charcoal" w="full" size="sm">
                        <HStack gap={2}>
                          <FiTarget />
                          <Text>Take Assessment</Text>
                        </HStack>
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
