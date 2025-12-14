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
  Slider,
  IconButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import { use, useState } from 'react';
import { FiPlay, FiPause, FiSkipBack, FiSkipForward, FiHeart, FiShare2, FiStar, FiActivity } from 'react-icons/fi';

export default function PracticePlayerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(900); // 15 minutes in seconds

  // Mock practice data
  const practice = {
    id,
    title: 'Loving-Kindness Meditation',
    teacher: 'Geshe Lobsang',
    category: 'Compassion',
    duration: '15 min',
    difficulty: 'Beginner',
    description:
      'This traditional Buddhist meditation cultivates feelings of warmth and goodwill toward yourself and others. It has been shown to increase positive emotions, decrease negative emotions, and increase feelings of social connection.',
    transcript: `
      Welcome to this loving-kindness meditation practice.

      Find a comfortable position, either sitting or lying down.
      Allow your eyes to gently close, or maintain a soft gaze downward.

      Take three deep breaths to settle into this moment...

      We will begin by directing loving-kindness toward ourselves.
      Place your hand on your heart if that feels comfortable.

      Repeat silently after me:
      "May I be happy"
      "May I be healthy"
      "May I be safe"
      "May I live with ease"

      [Practice continues...]
    `,
  };

  const relatedPractices = [
    { id: '2', title: 'Self-Compassion Break', duration: '10 min', teacher: 'Dr. Lisa Miller' },
    { id: '3', title: 'Tonglen Practice', duration: '20 min', teacher: 'Geshe Lobsang' },
    { id: '4', title: 'Heart Coherence', duration: '12 min', teacher: 'Dr. Richard Davidson' },
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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
            <Link href="/library">
              <Text _hover={{ color: 'brand.gold' }}>Library</Text>
            </Link>
            <Text>/</Text>
            <Text color="brand.gold">{practice.title}</Text>
          </HStack>

          <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
            {/* Main Player */}
            <VStack gap={6} align="stretch">
              {/* Video/Audio Player */}
              <Card.Root bg="bg.subtle" overflow="hidden">
                <Box
                  h={{ base: '250px', md: '400px' }}
                  bg="brand.charcoal"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                >
                  {/* Visual Background */}
                  <Box
                    position="absolute"
                    inset={0}
                    bgGradient="radial(brand.charcoal, brand.black)"
                    opacity={0.8}
                  />

                  {/* Animated Circle */}
                  <Box
                    position="relative"
                    w={48}
                    h={48}
                    borderRadius="full"
                    bg="brand.gold"
                    opacity={isPlaying ? 0.3 : 0.1}
                    animation={isPlaying ? 'pulse 4s ease-in-out infinite' : 'none'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      w={32}
                      h={32}
                      borderRadius="full"
                      bg="brand.gold"
                      opacity={isPlaying ? 0.5 : 0.2}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box
                        w={20}
                        h={20}
                        borderRadius="full"
                        bg="brand.gold"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        cursor="pointer"
                        onClick={() => setIsPlaying(!isPlaying)}
                        _hover={{ transform: 'scale(1.1)' }}
                        transition="transform 0.2s"
                      >
                        <Box color="brand.black">
                          {isPlaying ? <FiPause size={28} /> : <FiPlay size={28} />}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* Player Controls */}
                <Card.Body>
                  <VStack gap={4}>
                    {/* Progress Bar */}
                    <Box w="full">
                      <Slider.Root
                        value={[currentTime]}
                        onValueChange={(details) => setCurrentTime(details.value[0])}
                        min={0}
                        max={duration}
                      >
                        <Slider.Control>
                          <Slider.Track bg="bg.muted" h={2}>
                            <Slider.Range bg="brand.gold" />
                          </Slider.Track>
                          <Slider.Thumb
                            index={0}
                            bg="brand.gold"
                            boxSize={4}
                            _focus={{ boxShadow: '0 0 0 3px rgba(212, 175, 55, 0.3)' }}
                          />
                        </Slider.Control>
                      </Slider.Root>
                      <HStack justify="space-between" mt={2}>
                        <Text fontSize="xs" color="fg.muted">
                          {formatTime(currentTime)}
                        </Text>
                        <Text fontSize="xs" color="fg.muted">
                          {formatTime(duration)}
                        </Text>
                      </HStack>
                    </Box>

                    {/* Controls */}
                    <HStack justify="center" gap={6}>
                      <IconButton
                        aria-label="Rewind 15s"
                        variant="ghost"
                        color="fg"
                        onClick={() => setCurrentTime(Math.max(0, currentTime - 15))}
                      >
                        <FiSkipBack size={20} />
                      </IconButton>
                      <IconButton
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                        bg="brand.gold"
                        color="brand.black"
                        size="lg"
                        borderRadius="full"
                        onClick={() => setIsPlaying(!isPlaying)}
                        _hover={{ bg: 'brand.lightGold' }}
                      >
                        {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
                      </IconButton>
                      <IconButton
                        aria-label="Forward 15s"
                        variant="ghost"
                        color="fg"
                        onClick={() => setCurrentTime(Math.min(duration, currentTime + 15))}
                      >
                        <FiSkipForward size={20} />
                      </IconButton>
                    </HStack>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Practice Info */}
              <Card.Root bg="bg.subtle">
                <Card.Body>
                  <VStack align="start" gap={4}>
                    <HStack justify="space-between" w="full">
                      <HStack>
                        <Badge colorScheme="yellow">{practice.category}</Badge>
                        <Badge>{practice.difficulty}</Badge>
                        <Badge>{practice.duration}</Badge>
                      </HStack>
                      <HStack>
                        <Button variant="ghost" size="sm">
                          <HStack gap={1}><FiHeart size={14} /><Text>Save</Text></HStack>
                        </Button>
                        <Button variant="ghost" size="sm">
                          <HStack gap={1}><FiShare2 size={14} /><Text>Share</Text></HStack>
                        </Button>
                      </HStack>
                    </HStack>

                    <Box>
                      <Heading size="lg" mb={2}>
                        {practice.title}
                      </Heading>
                      <Text color="brand.gold">with {practice.teacher}</Text>
                    </Box>

                    <Text color="fg.muted">{practice.description}</Text>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Transcript */}
              <Card.Root bg="bg.subtle">
                <Card.Header>
                  <Heading size="sm" color="brand.gold">
                    Transcript
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <Text color="fg.muted" whiteSpace="pre-line" fontSize="sm">
                    {practice.transcript}
                  </Text>
                </Card.Body>
              </Card.Root>
            </VStack>

            {/* Sidebar */}
            <VStack gap={6} align="stretch">
              {/* Practice Tips */}
              <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
                <Card.Header>
                  <Heading size="sm" color="brand.gold">
                    Practice Tips
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack align="start" gap={3}>
                    <HStack align="start">
                      <Box color="brand.gold"><FiStar size={14} /></Box>
                      <Text fontSize="sm">Find a quiet, comfortable space</Text>
                    </HStack>
                    <HStack align="start">
                      <Box color="brand.gold"><FiStar size={14} /></Box>
                      <Text fontSize="sm">Use headphones for best experience</Text>
                    </HStack>
                    <HStack align="start">
                      <Box color="brand.gold"><FiStar size={14} /></Box>
                      <Text fontSize="sm">It's okay if your mind wanders</Text>
                    </HStack>
                    <HStack align="start">
                      <Box color="brand.gold"><FiStar size={14} /></Box>
                      <Text fontSize="sm">Practice at the same time daily</Text>
                    </HStack>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Mark Complete */}
              <Card.Root bg="bg.muted">
                <Card.Body>
                  <VStack gap={4}>
                    <Heading size="sm">Track Your Practice</Heading>
                    <Button
                      bg="brand.gold"
                      color="brand.black"
                      _hover={{ bg: 'brand.lightGold' }}
                      w="full"
                    >
                      Mark as Complete
                    </Button>
                    <Text fontSize="xs" color="fg.muted" textAlign="center">
                      Completing practices builds your streak and tracks your journey progress.
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Related Practices */}
              <Card.Root bg="bg.subtle">
                <Card.Header>
                  <Heading size="sm" color="brand.gold">
                    Related Practices
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={3} align="stretch">
                    {relatedPractices.map((p) => (
                      <Link key={p.id} href={`/practice/${p.id}`}>
                        <HStack
                          p={3}
                          bg="bg.muted"
                          borderRadius="md"
                          _hover={{ bg: 'brand.charcoal' }}
                          cursor="pointer"
                        >
                          <Box
                            w={10}
                            h={10}
                            bg="brand.gold"
                            borderRadius="md"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            color="brand.black"
                          >
                            <FiActivity size={18} />
                          </Box>
                          <Box flex="1">
                            <Text fontSize="sm" fontWeight="semibold">
                              {p.title}
                            </Text>
                            <Text fontSize="xs" color="fg.muted">
                              {p.teacher} • {p.duration}
                            </Text>
                          </Box>
                        </HStack>
                      </Link>
                    ))}
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
