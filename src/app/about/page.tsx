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
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FiCpu, FiHeart, FiUsers, FiStar, FiCheck, FiPlay } from 'react-icons/fi';

const team = [
  {
    name: 'Dr. Natalie Petouhoff',
    role: 'Founder & CEO',
    bio: 'Former Accenture consultant turned contemplative practitioner. Natalie bridges ancient wisdom with modern leadership.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
  },
  {
    name: 'Geshe Lobsang',
    role: 'Spiritual Director',
    bio: 'Tibetan Buddhist monk with 30+ years of meditation experience. Geshe brings authentic lineage teachings to modern practitioners.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    name: 'Dr. Richard Davidson',
    role: 'Scientific Advisor',
    bio: 'Founder of the Center for Healthy Minds. Pioneer in affective neuroscience and the study of contemplative practices.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
  {
    name: 'Arthur C. Brooks',
    role: 'Faculty',
    bio: 'Harvard professor and bestselling author of "From Strength to Strength." Expert in the science of happiness.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
  },
];

const values = [
  {
    title: 'Ancient Wisdom, Modern Science',
    description:
      'We validate 2,500 years of contemplative practice with cutting-edge neuroscience research.',
    icon: FiCpu,
  },
  {
    title: 'Accessibility for All',
    description:
      'Our pay-what-feels-right model ensures financial barriers never prevent transformation.',
    icon: FiHeart,
  },
  {
    title: 'Community as Medicine',
    description:
      'Healing happens in connection. Our cohort-based approach prioritizes genuine community.',
    icon: FiUsers,
  },
  {
    title: 'Transformation over Information',
    description:
      'We create experiences that change lives, not just content that fills inboxes.',
    icon: FiStar,
  },
];

const stats = [
  { value: '50K+', label: 'Lives Transformed' },
  { value: '30%', label: 'Avg Stress Reduction' },
  { value: '4.9', label: 'Average Rating' },
  { value: '85%', label: 'Completion Rate' },
];

export default function AboutPage() {
  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={{ base: 6, md: 10 }}>
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <VStack gap={{ base: 10, md: 16 }} align="stretch">
          {/* Hero */}
          <Box textAlign="center">
            <Badge colorScheme="yellow" mb={4} fontSize={{ base: 'xs', md: 'sm' }} px={3} py={1}>
              Our Mission
            </Badge>
            <Heading fontSize={{ base: '2xl', md: '5xl' }} mb={{ base: 4, md: 6 }}>
              Making Transformation{' '}
              <Text as="span" color="brand.gold">
                Accessible to All
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="fg.muted" maxW="3xl" mx="auto">
              We believe everyone deserves access to the profound wisdom that can transform
              suffering into joy. By bridging ancient Tibetan practices with modern neuroscience,
              we create experiences that heal minds and connect hearts.
            </Text>
          </Box>

          {/* Stats */}
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={{ base: 3, md: 6 }}>
            {stats.map((stat, i) => (
              <Card.Root key={i} bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
                <Card.Body textAlign="center" p={{ base: 4, md: 6 }}>
                  <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" color="brand.gold">
                    {stat.value}
                  </Text>
                  <Text color="fg.muted" fontSize={{ base: 'xs', md: 'sm' }}>{stat.label}</Text>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>

          {/* Story */}
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 8, md: 12 }} alignItems="center">
            <Box>
              <Heading size={{ base: 'md', md: 'lg' }} mb={{ base: 4, md: 6 }}>
                Our Story
              </Heading>
              <VStack gap={{ base: 3, md: 4 }} align="start">
                <Text color="fg.muted" fontSize={{ base: 'sm', md: 'md' }}>
                  Empathy began with a documentary film exploring the intersection of Tibetan
                  Buddhist wisdom and modern neuroscience. What we discovered was too important
                  to leave on screen.
                </Text>
                <Text color="fg.muted" fontSize={{ base: 'sm', md: 'md' }}>
                  We saw the Dalai Lama's vision of "secular ethics" come alive in research labs
                  at Harvard, Emory, and Wisconsin. We witnessed ancient practices validated by
                  brain scans. We met people whose lives had been transformed by these teachings.
                </Text>
                <Text color="fg.muted" fontSize={{ base: 'sm', md: 'md' }}>
                  This platform is our answer to a simple question: How can we make this
                  transformation accessible to everyone who needs it?
                </Text>
                <Text fontWeight="semibold" color="brand.gold" fontSize={{ base: 'sm', md: 'md' }}>
                  The answer: cohort-based learning, world-class teachers, genuine community,
                  and a revolutionary pricing model that removes all barriers.
                </Text>
              </VStack>
            </Box>
            <Box
              h={{ base: '280px', md: '400px' }}
              borderRadius="lg"
              overflow="hidden"
              position="relative"
              border="1px solid"
              borderColor="brand.charcoal"
            >
              <Image
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80"
                alt="Documentary"
                w="full"
                h="full"
                objectFit="cover"
              />
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="blackAlpha.600"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <VStack>
                  <Box
                    w={{ base: 12, md: 16 }}
                    h={{ base: 12, md: 16 }}
                    borderRadius="full"
                    bg="brand.gold"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="brand.black"
                  >
                    <FiPlay size={24} />
                  </Box>
                  <Text color="white" fontSize={{ base: 'sm', md: 'md' }}>Documentary Trailer</Text>
                  <Button variant="outline" borderColor="brand.gold" color="brand.gold" size={{ base: 'sm', md: 'md' }}>
                    Watch Film
                  </Button>
                </VStack>
              </Box>
            </Box>
          </Grid>

          {/* Values */}
          <Box>
            <Heading size={{ base: 'md', md: 'lg' }} mb={{ base: 6, md: 8 }} textAlign="center">
              Our Values
            </Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={{ base: 4, md: 6 }}>
              {values.map((value, i) => (
                <Card.Root key={i} bg="bg.subtle">
                  <Card.Body p={{ base: 4, md: 6 }}>
                    <HStack align="start" gap={{ base: 3, md: 4 }}>
                      <Box
                        w={{ base: 10, md: 12 }}
                        h={{ base: 10, md: 12 }}
                        bg="brand.gold"
                        borderRadius="md"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexShrink={0}
                        color="brand.black"
                      >
                        <value.icon size={24} />
                      </Box>
                      <Box>
                        <Heading size={{ base: 'xs', md: 'sm' }} mb={2}>
                          {value.title}
                        </Heading>
                        <Text color="fg.muted" fontSize={{ base: 'xs', md: 'sm' }}>
                          {value.description}
                        </Text>
                      </Box>
                    </HStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </Grid>
          </Box>

          {/* Team */}
          <Box>
            <Heading size={{ base: 'md', md: 'lg' }} mb={{ base: 6, md: 8 }} textAlign="center">
              Our Team & Teachers
            </Heading>
            <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={{ base: 4, md: 6 }}>
              {team.map((member, i) => (
                <Card.Root key={i} bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
                  <Card.Body textAlign="center" p={{ base: 4, md: 6 }}>
                    <VStack gap={{ base: 3, md: 4 }}>
                      <Box
                        w={{ base: 20, md: 24 }}
                        h={{ base: 20, md: 24 }}
                        borderRadius="full"
                        overflow="hidden"
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          w="full"
                          h="full"
                          objectFit="cover"
                        />
                      </Box>
                      <Box>
                        <Heading size={{ base: 'xs', md: 'sm' }}>{member.name}</Heading>
                        <Text color="brand.gold" fontSize={{ base: 'xs', md: 'sm' }}>
                          {member.role}
                        </Text>
                      </Box>
                      <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted">
                        {member.bio}
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </Grid>
          </Box>

          {/* Scientific Advisory */}
          <Card.Root bg="bg.subtle">
            <Card.Body>
              <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8} alignItems="center">
                <Box>
                  <Badge colorScheme="blue" mb={4}>
                    Evidence-Based
                  </Badge>
                  <Heading size="md" mb={4}>
                    Grounded in Science
                  </Heading>
                  <Text color="fg.muted" mb={4}>
                    Our practices aren't just ancient wisdom—they're validated by rigorous
                    scientific research from the world's leading institutions.
                  </Text>
                  <VStack align="start" gap={2}>
                    <HStack>
                      <Box color="brand.gold"><FiCheck size={16} /></Box>
                      <Text fontSize={{ base: 'xs', md: 'sm' }}>Published in peer-reviewed journals</Text>
                    </HStack>
                    <HStack>
                      <Box color="brand.gold"><FiCheck size={16} /></Box>
                      <Text fontSize={{ base: 'xs', md: 'sm' }}>fMRI studies showing brain changes</Text>
                    </HStack>
                    <HStack>
                      <Box color="brand.gold"><FiCheck size={16} /></Box>
                      <Text fontSize={{ base: 'xs', md: 'sm' }}>Randomized controlled trials</Text>
                    </HStack>
                    <HStack>
                      <Box color="brand.gold"><FiCheck size={16} /></Box>
                      <Text fontSize={{ base: 'xs', md: 'sm' }}>Ongoing research partnerships</Text>
                    </HStack>
                  </VStack>
                </Box>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  {['Harvard', 'Emory', 'Wisconsin', 'Stanford'].map((uni, i) => (
                    <Box
                      key={i}
                      p={6}
                      bg="bg.muted"
                      borderRadius="md"
                      textAlign="center"
                    >
                      <Text color="fg.muted" fontSize="sm">
                        {uni}
                      </Text>
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Card.Body>
          </Card.Root>

          {/* Documentary */}
          <Card.Root bg="bg.muted" borderLeft="4px solid" borderColor="brand.gold">
            <Card.Body>
              <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={6} alignItems="center">
                <Box>
                  <Badge colorScheme="yellow" mb={4}>
                    Award-Winning Documentary
                  </Badge>
                  <Heading size="lg" mb={4}>
                    Empathy: The Pursuit of Joy
                  </Heading>
                  <Text color="fg.muted" mb={4}>
                    Our feature documentary explores the science of empathy and compassion,
                    featuring interviews with the Dalai Lama, neuroscientists, and everyday
                    people whose lives have been transformed.
                  </Text>
                  <HStack gap={4}>
                    <Button bg="brand.gold" color="brand.black" _hover={{ bg: 'brand.lightGold' }}>
                      Watch Trailer
                    </Button>
                    <Button variant="outline" borderColor="brand.gold" color="brand.gold">
                      Host a Screening
                    </Button>
                  </HStack>
                </Box>
                <Box
                  h={{ base: '150px', md: '200px' }}
                  borderRadius="lg"
                  overflow="hidden"
                  position="relative"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80"
                    alt="Documentary"
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w={12}
                    h={12}
                    borderRadius="full"
                    bg="brand.gold"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="brand.black"
                  >
                    <FiPlay size={20} />
                  </Box>
                </Box>
              </Grid>
            </Card.Body>
          </Card.Root>

          {/* CTA */}
          <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
            <Card.Body py={12}>
              <VStack gap={6} textAlign="center">
                <Heading size="lg">Ready to Begin Your Journey?</Heading>
                <Text color="fg.muted" maxW="2xl">
                  Join thousands of others who are transforming their lives through ancient
                  wisdom and modern science.
                </Text>
                <HStack gap={4}>
                  <Link href="/challenge">
                    <Button variant="outline" borderColor="brand.gold" color="brand.gold" size="lg">
                      Start Free 7-Day Challenge
                    </Button>
                  </Link>
                  <Link href="/cohorts">
                    <Button bg="brand.gold" color="brand.black" _hover={{ bg: 'brand.lightGold' }} size="lg">
                      View Cohorts
                    </Button>
                  </Link>
                </HStack>
              </VStack>
            </Card.Body>
          </Card.Root>
        </VStack>
      </Container>
    </Box>
  );
}
