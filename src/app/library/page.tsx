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
  Input,
  Badge,
  Tabs,
  Image,
} from '@chakra-ui/react';
import { FiPlay, FiHeart, FiFileText, FiVideo } from 'react-icons/fi';

const meditations = [
  {
    id: 1,
    title: 'Morning Intention Setting',
    teacher: 'Dr. Natalie Petouhoff',
    duration: '10 min',
    category: 'Mindfulness',
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80',
  },
  {
    id: 2,
    title: 'Loving-Kindness for Self',
    teacher: 'Geshe Lobsang',
    duration: '15 min',
    category: 'Compassion',
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400&q=80',
  },
  {
    id: 3,
    title: 'Tonglen Practice',
    teacher: 'Geshe Lobsang',
    duration: '20 min',
    category: 'Tibetan Wisdom',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&q=80',
  },
  {
    id: 4,
    title: 'Body Scan for Stress Release',
    teacher: 'Dr. Lisa Miller',
    duration: '15 min',
    category: 'Stress Relief',
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
  },
  {
    id: 5,
    title: 'Heart Coherence Practice',
    teacher: 'Dr. Richard Davidson',
    duration: '12 min',
    category: 'HRV Training',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?w=400&q=80',
  },
  {
    id: 6,
    title: 'Shadow Work Meditation',
    teacher: 'Dr. Natalie Petouhoff',
    duration: '25 min',
    category: 'Shadow Work',
    difficulty: 'Advanced',
    image: 'https://images.unsplash.com/photo-1515894274990-7c4c1e3d3f49?w=400&q=80',
  },
];

const teachings = [
  {
    id: 1,
    title: 'The Neuroscience of Empathy',
    type: 'Article',
    duration: '8 min read',
    category: 'Science',
  },
  {
    id: 2,
    title: 'Tibetan Lojong Mind Training',
    type: 'Video',
    duration: '15 min',
    category: 'Tibetan Wisdom',
  },
  {
    id: 3,
    title: 'Understanding Your Emotional Brain',
    type: 'Article',
    duration: '10 min read',
    category: 'Science',
  },
  {
    id: 4,
    title: 'The Power of Gratitude',
    type: 'Video',
    duration: '12 min',
    category: 'Wellbeing',
  },
];

export default function LibraryPage() {
  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={{ base: 6, md: 10 }}>
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <VStack gap={{ base: 8, md: 10 }} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={{ base: 3, md: 4 }}>
              Resource{' '}
              <Text as="span" color="brand.gold">
                Library
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="fg.muted" maxW="2xl" mx="auto">
              Access guided meditations, teachings, and practices to support your journey
            </Text>
          </Box>

          {/* Search and Filters */}
          <Card.Root bg="bg.subtle">
            <Card.Body>
              <Grid templateColumns={{ base: '1fr', md: '2fr 1fr 1fr' }} gap={4}>
                <Box>
                  <Input
                    placeholder="Search meditations, teachings..."
                    bg="bg.muted"
                    borderColor="brand.charcoal"
                    _focus={{ borderColor: 'brand.gold' }}
                  />
                </Box>
                <Box
                  as="select"
                  bg="bg.muted"
                  borderColor="brand.charcoal"
                  borderWidth="1px"
                  borderRadius="md"
                  p={2}
                  color="fg"
                >
                  <option>All Categories</option>
                  <option>Mindfulness</option>
                  <option>Compassion</option>
                  <option>Tibetan Wisdom</option>
                  <option>Stress Relief</option>
                </Box>
                <Box
                  as="select"
                  bg="bg.muted"
                  borderColor="brand.charcoal"
                  borderWidth="1px"
                  borderRadius="md"
                  p={2}
                  color="fg"
                >
                  <option>All Durations</option>
                  <option>0-10 min</option>
                  <option>10-20 min</option>
                  <option>20+ min</option>
                </Box>
              </Grid>
            </Card.Body>
          </Card.Root>

          {/* Tabs */}
          <Tabs.Root defaultValue="meditations">
            <Tabs.List bg="bg.subtle" borderRadius="md" p={1}>
              <Tabs.Trigger value="meditations" color="fg" _selected={{ bg: 'brand.gold', color: 'brand.black' }}>
                Meditations
              </Tabs.Trigger>
              <Tabs.Trigger value="teachings" color="fg" _selected={{ bg: 'brand.gold', color: 'brand.black' }}>
                Teachings
              </Tabs.Trigger>
              <Tabs.Trigger value="music" color="fg" _selected={{ bg: 'brand.gold', color: 'brand.black' }}>
                Music & Sound
              </Tabs.Trigger>
              <Tabs.Trigger value="favorites" color="fg" _selected={{ bg: 'brand.gold', color: 'brand.black' }}>
                Favorites
              </Tabs.Trigger>
            </Tabs.List>

            {/* Meditations Tab */}
            <Tabs.Content value="meditations">
              <Box py={8}>
                <Heading size="lg" mb={6}>
                  Guided Meditations
                </Heading>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
                  {meditations.map((meditation) => (
                    <Card.Root
                      key={meditation.id}
                      bg="bg.subtle"
                      borderTop="3px solid"
                      borderColor="brand.gold"
                      _hover={{ transform: 'translateY(-4px)', transition: 'transform 0.3s' }}
                    >
                      <Card.Body p={{ base: 4, md: 6 }}>
                        <VStack align="start" gap={{ base: 3, md: 4 }}>
                          <Box w="full" h={{ base: 28, md: 32 }} borderRadius="md" overflow="hidden" position="relative">
                            <Image
                              src={meditation.image}
                              alt={meditation.title}
                              w="full"
                              h="full"
                              objectFit="cover"
                            />
                            <Box
                              position="absolute"
                              top="50%"
                              left="50%"
                              transform="translate(-50%, -50%)"
                              w={10}
                              h={10}
                              borderRadius="full"
                              bg="brand.gold"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              color="brand.black"
                            >
                              <FiPlay size={18} />
                            </Box>
                          </Box>
                          <Box w="full">
                            <Heading size={{ base: 'xs', md: 'sm' }} mb={2}>
                              {meditation.title}
                            </Heading>
                            <Text fontSize={{ base: 'xs', md: 'sm' }} color="brand.gold" mb={2}>
                              {meditation.teacher}
                            </Text>
                            <HStack gap={2} mb={{ base: 3, md: 4 }} flexWrap="wrap">
                              <Badge size="sm" fontSize="2xs">{meditation.duration}</Badge>
                              <Badge size="sm" fontSize="2xs">{meditation.category}</Badge>
                              <Badge size="sm" fontSize="2xs" colorScheme={meditation.difficulty === 'Beginner' ? 'green' : 'yellow'}>
                                {meditation.difficulty}
                              </Badge>
                            </HStack>
                            <HStack gap={2}>
                              <Button
                                bg="brand.gold"
                                color="brand.black"
                                _hover={{ bg: 'brand.lightGold' }}
                                size="sm"
                                flex="1"
                              >
                                <HStack gap={1}>
                                  <FiPlay size={14} />
                                  <Text>Play</Text>
                                </HStack>
                              </Button>
                              <Button variant="outline" borderColor="brand.gold" color="brand.gold" size="sm">
                                <FiHeart size={14} />
                              </Button>
                            </HStack>
                          </Box>
                        </VStack>
                      </Card.Body>
                    </Card.Root>
                  ))}
                </Grid>
              </Box>
            </Tabs.Content>

            {/* Teachings Tab */}
            <Tabs.Content value="teachings">
              <Box py={8}>
                <Heading size="lg" mb={6}>
                  Teachings & Articles
                </Heading>
                <VStack gap={4} align="stretch">
                  {teachings.map((teaching) => (
                    <Card.Root key={teaching.id} bg="bg.subtle" _hover={{ bg: 'bg.muted' }}>
                      <Card.Body p={{ base: 4, md: 6 }}>
                        <HStack justify="space-between" flexWrap="wrap" gap={{ base: 3, md: 4 }}>
                          <HStack gap={{ base: 3, md: 4 }} flex="1">
                            <Box
                              w={{ base: 12, md: 16 }}
                              h={{ base: 12, md: 16 }}
                              bg="brand.gold"
                              borderRadius="md"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              color="brand.black"
                              flexShrink={0}
                            >
                              {teaching.type === 'Video' ? <FiVideo size={24} /> : <FiFileText size={24} />}
                            </Box>
                            <Box flex="1">
                              <Heading size={{ base: 'xs', md: 'sm' }} mb={1}>
                                {teaching.title}
                              </Heading>
                              <HStack gap={{ base: 1, md: 3 }} flexWrap="wrap">
                                <Badge size="sm" fontSize="2xs">{teaching.type}</Badge>
                                <Badge size="sm" fontSize="2xs">{teaching.duration}</Badge>
                                <Badge size="sm" fontSize="2xs">{teaching.category}</Badge>
                              </HStack>
                            </Box>
                          </HStack>
                          <Button
                            variant="outline"
                            borderColor="brand.gold"
                            color="brand.gold"
                            size="sm"
                          >
                            {teaching.type === 'Video' ? 'Watch' : 'Read'}
                          </Button>
                        </HStack>
                      </Card.Body>
                    </Card.Root>
                  ))}
                </VStack>
              </Box>
            </Tabs.Content>

            {/* Music Tab */}
            <Tabs.Content value="music">
              <Box py={8}>
                <Heading size="lg" mb={6}>
                  Music & Sound Healing
                </Heading>
                <Text color="fg.muted">Sound healing content coming soon...</Text>
              </Box>
            </Tabs.Content>

            {/* Favorites Tab */}
            <Tabs.Content value="favorites">
              <Box py={8}>
                <Heading size="lg" mb={6}>
                  Your Favorites
                </Heading>
                <Text color="fg.muted">You haven't added any favorites yet. Click the heart icon on any practice to save it here.</Text>
              </Box>
            </Tabs.Content>
          </Tabs.Root>
        </VStack>
      </Container>
    </Box>
  );
}
