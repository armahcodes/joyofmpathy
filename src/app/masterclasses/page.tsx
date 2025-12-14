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
  Stack,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FiPlay, FiStar, FiCpu, FiSun, FiUsers, FiHeart, FiMessageCircle } from 'react-icons/fi';

const masterclasses = [
  {
    id: 1,
    title: 'The Science of Empathy',
    instructor: 'Dr. Daniel Goleman',
    duration: '6 weeks',
    enrolled: 1248,
    rating: 4.9,
    level: 'All Levels',
    category: 'Neuroscience',
    description:
      'Explore the neuroscience of empathy and emotional intelligence with world-renowned expert Dr. Daniel Goleman.',
  },
  {
    id: 2,
    title: 'Tibetan Wisdom for Modern Life',
    instructor: 'Geshe Lobsang',
    duration: '8 weeks',
    enrolled: 982,
    rating: 4.8,
    level: 'Beginner',
    category: 'Tibetan Wisdom',
    description:
      'Demystify ancient Tibetan practices and integrate them into your daily life with teachings from Geshe Lobsang.',
  },
  {
    id: 3,
    title: 'Leading from the Heart',
    instructor: 'Arthur C. Brooks',
    duration: '6 weeks',
    enrolled: 1567,
    rating: 5.0,
    level: 'Intermediate',
    category: 'Leadership',
    description:
      'Redefine leadership as a force for good with Harvard professor Arthur Brooks. Build empathy-driven teams.',
  },
  {
    id: 4,
    title: 'Healing Trauma with Compassion',
    instructor: 'Dr. Lisa Miller',
    duration: '8 weeks',
    enrolled: 843,
    rating: 4.9,
    level: 'All Levels',
    category: 'Healing',
    description:
      'A gentle, spiritually-integrated approach to healing past wounds with Columbia psychologist Dr. Lisa Miller.',
  },
  {
    id: 5,
    title: 'The Neuroscience of Joy',
    instructor: 'Dr. Richard Davidson',
    duration: '4 weeks',
    enrolled: 1342,
    rating: 4.8,
    level: 'Beginner',
    category: 'Wellbeing',
    description:
      'Learn how happiness works in the brain and proven practices to cultivate sustainable joy.',
  },
  {
    id: 6,
    title: 'Conscious Communication',
    instructor: 'Dr. Marshall Rosenberg',
    duration: '6 weeks',
    enrolled: 756,
    rating: 4.9,
    level: 'All Levels',
    category: 'Communication',
    description:
      'Transform how you communicate with Nonviolent Communication principles. Speak from the heart.',
  },
];

const categoryIcons: Record<string, typeof FiCpu> = {
  Neuroscience: FiCpu,
  'Tibetan Wisdom': FiSun,
  Leadership: FiUsers,
  Healing: FiHeart,
  Wellbeing: FiStar,
  Communication: FiMessageCircle,
};

const categoryImages: Record<string, string> = {
  Neuroscience: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80',
  'Tibetan Wisdom': 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&q=80',
  Leadership: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80',
  Healing: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400&q=80',
  Wellbeing: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80',
  Communication: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
};

export default function MasterclassesPage() {
  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={{ base: 6, md: 10 }}>
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <VStack gap={{ base: 8, md: 10 }} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={{ base: 3, md: 4 }}>
              Expert{' '}
              <Text as="span" color="brand.gold">
                Masterclasses
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="fg.muted" maxW="2xl" mx="auto">
              Learn from world-class teachers, neuroscientists, and spiritual leaders
            </Text>
          </Box>

          {/* Featured Masterclass */}
          <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
            <Card.Body p={{ base: 4, md: 6 }}>
              <Grid templateColumns={{ base: '1fr', md: '2fr 3fr' }} gap={{ base: 4, md: 8 }}>
                <Box
                  h={{ base: 48, md: 64 }}
                  borderRadius="lg"
                  overflow="hidden"
                  position="relative"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80"
                    alt="The Science of Empathy"
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w={14}
                    h={14}
                    borderRadius="full"
                    bg="brand.gold"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="brand.black"
                  >
                    <FiPlay size={24} />
                  </Box>
                </Box>
                <VStack align="start" justify="center" gap={{ base: 3, md: 4 }}>
                  <Badge colorScheme="yellow" fontSize="xs">Featured</Badge>
                  <Heading size={{ base: 'lg', md: 'xl' }}>The Science of Empathy</Heading>
                  <Text color="brand.gold" fontWeight="semibold" fontSize={{ base: 'sm', md: 'md' }}>
                    with Dr. Daniel Goleman
                  </Text>
                  <Text color="fg.muted" fontSize={{ base: 'sm', md: 'md' }}>
                    Explore the neuroscience of empathy, emotional intelligence, and compassion.
                    Learn evidence-based practices to strengthen your empathy muscle and transform
                    your relationships.
                  </Text>
                  <HStack gap={{ base: 2, md: 4 }} flexWrap="wrap">
                    <Badge fontSize="2xs">6 weeks</Badge>
                    <Badge fontSize="2xs">All Levels</Badge>
                    <Badge fontSize="2xs">1,248 enrolled</Badge>
                    <Badge fontSize="2xs"><HStack gap={1}><FiStar size={10} /><Text>4.9</Text></HStack></Badge>
                  </HStack>
                  <HStack gap={{ base: 2, md: 4 }} pt={2}>
                    <Button bg="brand.gold" color="brand.black" _hover={{ bg: 'brand.lightGold' }} size={{ base: 'sm', md: 'md' }}>
                      Enroll Now
                    </Button>
                    <Button variant="outline" borderColor="brand.gold" color="brand.gold" size={{ base: 'sm', md: 'md' }}>
                      <HStack gap={1}>
                        <FiPlay size={14} />
                        <Text>Watch Preview</Text>
                      </HStack>
                    </Button>
                  </HStack>
                </VStack>
              </Grid>
            </Card.Body>
          </Card.Root>

          {/* Filters */}
          <Card.Root bg="bg.subtle">
            <Card.Body>
              <HStack gap={4} flexWrap="wrap">
                <Text fontWeight="semibold">Filter by:</Text>
                <Button size="sm" variant="outline" borderColor="brand.gold" color="brand.gold">
                  All
                </Button>
                <Button size="sm" variant="outline" borderColor="brand.charcoal">
                  Neuroscience
                </Button>
                <Button size="sm" variant="outline" borderColor="brand.charcoal">
                  Tibetan Wisdom
                </Button>
                <Button size="sm" variant="outline" borderColor="brand.charcoal">
                  Leadership
                </Button>
                <Button size="sm" variant="outline" borderColor="brand.charcoal">
                  Healing
                </Button>
                <Button size="sm" variant="outline" borderColor="brand.charcoal">
                  Wellbeing
                </Button>
              </HStack>
            </Card.Body>
          </Card.Root>

          {/* Masterclass Grid */}
          <Box>
            <Heading size={{ base: 'md', md: 'lg' }} mb={{ base: 4, md: 6 }}>
              All Masterclasses
            </Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={{ base: 4, md: 6 }}>
              {masterclasses.map((masterclass) => {
                const CategoryIcon = categoryIcons[masterclass.category] || FiStar;
                const categoryImage = categoryImages[masterclass.category] || 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80';
                return (
                <Card.Root
                  key={masterclass.id}
                  bg="bg.subtle"
                  borderTop="3px solid"
                  borderColor="brand.gold"
                  _hover={{ transform: 'translateY(-4px)', transition: 'transform 0.3s' }}
                >
                  <Card.Body p={{ base: 4, md: 6 }}>
                    <VStack align="start" gap={{ base: 3, md: 4 }}>
                      {/* Thumbnail */}
                      <Box
                        w="full"
                        h={{ base: 40, md: 48 }}
                        borderRadius="md"
                        overflow="hidden"
                        position="relative"
                      >
                        <Image
                          src={categoryImage}
                          alt={masterclass.title}
                          w="full"
                          h="full"
                          objectFit="cover"
                        />
                        <Box
                          position="absolute"
                          top={3}
                          right={3}
                          w={10}
                          h={10}
                          borderRadius="full"
                          bg="brand.gold"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          color="brand.black"
                        >
                          <CategoryIcon size={20} />
                        </Box>
                      </Box>

                      {/* Content */}
                      <Box w="full">
                        <Heading size={{ base: 'xs', md: 'sm' }} mb={2}>
                          {masterclass.title}
                        </Heading>
                        <Text fontSize={{ base: 'xs', md: 'sm' }} color="brand.gold" mb={2}>
                          with {masterclass.instructor}
                        </Text>
                        <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted" mb={{ base: 3, md: 4 }}>
                          {masterclass.description}
                        </Text>

                        {/* Meta Info */}
                        <HStack gap={2} mb={{ base: 3, md: 4 }} flexWrap="wrap">
                          <Badge size="sm" fontSize="2xs">{masterclass.duration}</Badge>
                          <Badge size="sm" fontSize="2xs">{masterclass.level}</Badge>
                          <Badge size="sm" fontSize="2xs"><HStack gap={1}><FiStar size={10} /><Text>{masterclass.rating}</Text></HStack></Badge>
                        </HStack>

                        <Text fontSize={{ base: '2xs', md: 'xs' }} color="fg.muted" mb={{ base: 3, md: 4 }}>
                          {masterclass.enrolled.toLocaleString()} students enrolled
                        </Text>

                        {/* Actions */}
                        <Stack gap={2}>
                          <Link href={`/masterclasses/${masterclass.id}`}>
                            <Button
                              bg="brand.gold"
                              color="brand.black"
                              _hover={{ bg: 'brand.lightGold' }}
                              w="full"
                              size="sm"
                            >
                              Learn More
                            </Button>
                          </Link>
                        </Stack>
                      </Box>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              )})}
            </Grid>
          </Box>

          {/* CTA Section */}
          <Card.Root bg="bg.subtle" borderLeft="4px solid" borderColor="brand.gold">
            <Card.Body>
              <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={6}>
                <Box>
                  <Heading size="md" mb={2} color="brand.gold">
                    New Masterclass Every Month
                  </Heading>
                  <Text color="fg.muted">
                    Premium members get unlimited access to all masterclasses. Join live sessions,
                    connect with cohorts, and earn certificates.
                  </Text>
                </Box>
                <VStack justify="center">
                  <Link href="/pricing">
                    <Button bg="brand.gold" color="brand.black" _hover={{ bg: 'brand.lightGold' }}>
                      Upgrade to Premium
                    </Button>
                  </Link>
                </VStack>
              </Grid>
            </Card.Body>
          </Card.Root>
        </VStack>
      </Container>
    </Box>
  );
}
