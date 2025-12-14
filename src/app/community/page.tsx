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
  Tabs,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FiMessageCircle, FiHeart, FiImage, FiVideo, FiLock, FiCheck, FiUsers } from 'react-icons/fi';

const discussions = [
  {
    id: 1,
    title: 'How do you practice self-compassion when you stumble?',
    author: 'Sarah M.',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    stage: 'Stage 3',
    category: 'Support',
    replies: 12,
    likes: 24,
    timeAgo: '2 hours ago',
  },
  {
    id: 2,
    title: 'Just completed Stage 5! Thank you all for your support',
    author: 'Maria R.',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    stage: 'Stage 5',
    category: 'Celebration',
    replies: 18,
    likes: 45,
    timeAgo: '5 hours ago',
  },
  {
    id: 3,
    title: 'Struggling with daily practice consistency - tips?',
    author: 'James T.',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    stage: 'Stage 6',
    category: 'Practice',
    replies: 8,
    likes: 15,
    timeAgo: '1 day ago',
  },
  {
    id: 4,
    title: 'The shadow work is intense. How to stay grounded?',
    author: 'Hannah R.',
    authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
    stage: 'Stage 7',
    category: 'Support',
    replies: 22,
    likes: 38,
    timeAgo: '1 day ago',
  },
];

const stories = [
  {
    id: 1,
    title: 'From Burnout to Balance: My 6-Month Journey',
    author: 'Linda K.',
    authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    excerpt:
      'I started this journey completely burned out, disconnected from myself and my family. Today, I feel whole again...',
    readTime: '5 min read',
    likes: 127,
  },
  {
    id: 2,
    title: 'How Tibetan Wisdom Changed My Leadership Style',
    author: 'Michael B.',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    excerpt:
      'As a CEO, I thought empathy was weakness. The Tonglen practice completely transformed how I lead my team...',
    readTime: '7 min read',
    likes: 94,
  },
];

export default function CommunityPage() {
  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={{ base: 6, md: 10 }}>
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <VStack gap={{ base: 6, md: 10 }} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={4}>
              Community{' '}
              <Text as="span" bgGradient="linear(to-r, brand.gold, brand.lightGold)" bgClip="text">
                Circle
              </Text>
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'lg' }} color="fg.muted" maxW="2xl" mx="auto">
              Connect with fellow travelers on the hero's journey. Share, support, and grow together.
            </Text>
          </Box>

          {/* Quick Stats */}
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={{ base: 3, md: 6 }}>
            <Card.Root bg="bg.subtle" borderTop="2px solid" borderColor="brand.gold">
              <Card.Body p={{ base: 3, md: 5 }}>
                <VStack>
                  <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="brand.gold">
                    50K+
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted" textAlign="center">
                    Community Members
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
            <Card.Root bg="bg.subtle" borderTop="2px solid" borderColor="brand.gold">
              <Card.Body p={{ base: 3, md: 5 }}>
                <VStack>
                  <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="brand.gold">
                    1.2K
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted" textAlign="center">
                    Active Discussions
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
            <Card.Root bg="bg.subtle" borderTop="2px solid" borderColor="brand.gold">
              <Card.Body p={{ base: 3, md: 5 }}>
                <VStack>
                  <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="brand.gold">
                    3.5K
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted" textAlign="center">
                    Stories Shared
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
            <Card.Root bg="bg.subtle" borderTop="2px solid" borderColor="brand.gold">
              <Card.Body p={{ base: 3, md: 5 }}>
                <VStack>
                  <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="brand.gold">
                    24/7
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted" textAlign="center">
                    Support Available
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          </Grid>

          {/* Main Content */}
          <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={{ base: 6, md: 8 }}>
            {/* Left Column */}
            <VStack gap={{ base: 4, md: 6 }} align="stretch">
              {/* Create Post */}
              <Card.Root bg="bg.subtle">
                <Card.Body p={{ base: 4, md: 6 }}>
                  <VStack gap={4}>
                    <textarea
                      style={{
                        width: '100%',
                        minHeight: '80px',
                        backgroundColor: 'var(--chakra-colors-bg-muted)',
                        border: '1px solid var(--chakra-colors-brand-charcoal)',
                        borderRadius: '0.375rem',
                        padding: '1rem',
                        color: 'var(--chakra-colors-fg)',
                        resize: 'vertical',
                        fontSize: '14px',
                      }}
                      placeholder="Share your thoughts, ask a question, or offer support..."
                    />
                    <HStack justify="space-between" w="full" flexWrap="wrap" gap={2}>
                      <HStack gap={1}>
                        <Button size="xs" variant="ghost">
                          <HStack gap={1}>
                            <FiImage size={14} />
                            <Text display={{ base: 'none', sm: 'inline' }}>Image</Text>
                          </HStack>
                        </Button>
                        <Button size="xs" variant="ghost">
                          <HStack gap={1}>
                            <FiVideo size={14} />
                            <Text display={{ base: 'none', sm: 'inline' }}>Video</Text>
                          </HStack>
                        </Button>
                        <Button size="xs" variant="ghost">
                          <HStack gap={1}>
                            <FiLock size={14} />
                            <Text display={{ base: 'none', sm: 'inline' }}>Anonymous</Text>
                          </HStack>
                        </Button>
                      </HStack>
                      <Button size="sm" bg="brand.gold" color="brand.black" _hover={{ bg: 'brand.lightGold' }}>
                        Post
                      </Button>
                    </HStack>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Tabs */}
              <Tabs.Root defaultValue="discussions">
                <Tabs.List bg="bg.subtle" borderRadius="md" p={1}>
                  <Tabs.Trigger
                    value="discussions"
                    color="fg"
                    _selected={{ bg: 'brand.gold', color: 'brand.black' }}
                    fontSize={{ base: 'xs', md: 'sm' }}
                  >
                    Discussions
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="stories"
                    color="fg"
                    _selected={{ bg: 'brand.gold', color: 'brand.black' }}
                    fontSize={{ base: 'xs', md: 'sm' }}
                  >
                    Stories
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="my-posts"
                    color="fg"
                    _selected={{ bg: 'brand.gold', color: 'brand.black' }}
                    fontSize={{ base: 'xs', md: 'sm' }}
                  >
                    My Posts
                  </Tabs.Trigger>
                </Tabs.List>

                {/* Discussions Tab */}
                <Tabs.Content value="discussions">
                  <VStack gap={{ base: 3, md: 4 }} align="stretch" pt={6}>
                    {discussions.map((discussion) => (
                      <Card.Root
                        key={discussion.id}
                        bg="bg.subtle"
                        _hover={{ bg: 'bg.muted', cursor: 'pointer' }}
                      >
                        <Card.Body p={{ base: 3, md: 5 }}>
                          <HStack align="start" gap={{ base: 3, md: 4 }}>
                            <Box w={{ base: 8, md: 10 }} h={{ base: 8, md: 10 }} borderRadius="full" overflow="hidden" flexShrink={0}>
                              <Image src={discussion.authorImage} alt={discussion.author} w="full" h="full" objectFit="cover" />
                            </Box>
                            <VStack align="start" flex="1" gap={2}>
                              <HStack gap={2} flexWrap="wrap">
                                <Text fontWeight="semibold" fontSize={{ base: 'xs', md: 'sm' }} color="brand.gold">
                                  {discussion.author}
                                </Text>
                                <Badge fontSize="2xs">{discussion.stage}</Badge>
                                <Badge fontSize="2xs" colorScheme="yellow">
                                  {discussion.category}
                                </Badge>
                                <Text fontSize="2xs" color="fg.muted">
                                  {discussion.timeAgo}
                                </Text>
                              </HStack>
                              <Heading size={{ base: 'xs', md: 'sm' }}>{discussion.title}</Heading>
                              <HStack gap={{ base: 4, md: 6 }} pt={2}>
                                <HStack gap={1}>
                                  <FiMessageCircle size={14} />
                                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted">
                                    {discussion.replies} replies
                                  </Text>
                                </HStack>
                                <HStack gap={1}>
                                  <FiHeart size={14} />
                                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted">
                                    {discussion.likes} likes
                                  </Text>
                                </HStack>
                              </HStack>
                            </VStack>
                          </HStack>
                        </Card.Body>
                      </Card.Root>
                    ))}
                  </VStack>
                </Tabs.Content>

                {/* Stories Tab */}
                <Tabs.Content value="stories">
                  <VStack gap={{ base: 4, md: 6 }} align="stretch" pt={6}>
                    {stories.map((story) => (
                      <Card.Root key={story.id} bg="bg.subtle" borderLeft="4px solid" borderColor="brand.gold">
                        <Card.Body p={{ base: 4, md: 6 }}>
                          <VStack align="start" gap={3}>
                            <HStack justify="space-between" w="full" flexWrap="wrap" gap={2}>
                              <HStack>
                                <Box w={8} h={8} borderRadius="full" overflow="hidden">
                                  <Image src={story.authorImage} alt={story.author} w="full" h="full" objectFit="cover" />
                                </Box>
                                <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="semibold" color="brand.gold">
                                  {story.author}
                                </Text>
                              </HStack>
                              <Badge fontSize="2xs">{story.readTime}</Badge>
                            </HStack>
                            <Heading size={{ base: 'sm', md: 'md' }}>{story.title}</Heading>
                            <Text color="fg.muted" fontSize={{ base: 'xs', md: 'sm' }}>{story.excerpt}</Text>
                            <HStack justify="space-between" w="full" pt={2}>
                              <Button variant="outline" borderColor="brand.gold" color="brand.gold" size="sm">
                                Read Full Story
                              </Button>
                              <HStack gap={1}>
                                <FiHeart size={14} />
                                <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted">
                                  {story.likes}
                                </Text>
                              </HStack>
                            </HStack>
                          </VStack>
                        </Card.Body>
                      </Card.Root>
                    ))}
                  </VStack>
                </Tabs.Content>

                {/* My Posts Tab */}
                <Tabs.Content value="my-posts">
                  <Box py={6}>
                    <Text color="fg.muted" fontSize={{ base: 'sm', md: 'md' }}>
                      You haven't posted yet. Share your first thought or question above!
                    </Text>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </VStack>

            {/* Right Column */}
            <VStack gap={{ base: 4, md: 6 }} align="stretch">
              {/* Community Guidelines */}
              <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
                <Card.Header p={{ base: 4, md: 6 }}>
                  <Heading size={{ base: 'xs', md: 'sm' }} color="brand.gold">
                    Community Guidelines
                  </Heading>
                </Card.Header>
                <Card.Body p={{ base: 4, md: 6 }} pt={0}>
                  <VStack align="start" gap={2} fontSize={{ base: 'xs', md: 'sm' }}>
                    <HStack><Box color="brand.gold"><FiCheck size={14} /></Box><Text>Be kind and compassionate</Text></HStack>
                    <HStack><Box color="brand.gold"><FiCheck size={14} /></Box><Text>Respect confidentiality</Text></HStack>
                    <HStack><Box color="brand.gold"><FiCheck size={14} /></Box><Text>Support, don't fix</Text></HStack>
                    <HStack><Box color="brand.gold"><FiCheck size={14} /></Box><Text>No judgement zone</Text></HStack>
                    <HStack><Box color="brand.gold"><FiCheck size={14} /></Box><Text>Report harmful content</Text></HStack>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Upcoming Circles */}
              <Card.Root bg="bg.subtle">
                <Card.Header p={{ base: 4, md: 6 }}>
                  <Heading size={{ base: 'xs', md: 'sm' }} color="brand.gold">
                    Upcoming Circles
                  </Heading>
                </Card.Header>
                <Card.Body p={{ base: 4, md: 6 }} pt={0}>
                  <VStack gap={3} align="stretch">
                    <Box p={3} bg="bg.muted" borderRadius="md">
                      <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="semibold" mb={1}>
                        Facing Fear Together
                      </Text>
                      <Text fontSize="xs" color="fg.muted" mb={1}>
                        Tonight at 7:00 PM PT
                      </Text>
                      <Text fontSize="xs" color="fg.muted" mb={2}>
                        8 spots left
                      </Text>
                      <Button size="xs" w="full" bg="brand.gold" color="brand.black">
                        Join Circle
                      </Button>
                    </Box>
                    <Box p={3} bg="bg.muted" borderRadius="md">
                      <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="semibold" mb={1}>
                        Gratitude Practice
                      </Text>
                      <Text fontSize="xs" color="fg.muted" mb={1}>
                        Tomorrow at 12:00 PM PT
                      </Text>
                      <Text fontSize="xs" color="fg.muted" mb={2}>
                        5 spots left
                      </Text>
                      <Button size="xs" w="full" variant="outline" borderColor="brand.gold" color="brand.gold">
                        Join Circle
                      </Button>
                    </Box>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Find Partner */}
              <Card.Root bg="bg.subtle">
                <Card.Header p={{ base: 4, md: 6 }}>
                  <HStack>
                    <Box color="brand.gold"><FiUsers size={18} /></Box>
                    <Heading size={{ base: 'xs', md: 'sm' }} color="brand.gold">
                      Accountability Partner
                    </Heading>
                  </HStack>
                </Card.Header>
                <Card.Body p={{ base: 4, md: 6 }} pt={0}>
                  <VStack gap={3}>
                    <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted">
                      Get matched with someone at your stage for mutual support
                    </Text>
                    <Button w="full" variant="outline" borderColor="brand.gold" color="brand.gold" size="sm">
                      Find Partner
                    </Button>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Popular Topics */}
              <Card.Root bg="bg.subtle">
                <Card.Header p={{ base: 4, md: 6 }}>
                  <Heading size={{ base: 'xs', md: 'sm' }} color="brand.gold">
                    Popular Topics
                  </Heading>
                </Card.Header>
                <Card.Body p={{ base: 4, md: 6 }} pt={0}>
                  <HStack gap={2} flexWrap="wrap">
                    <Badge fontSize="2xs">Self-Compassion</Badge>
                    <Badge fontSize="2xs">Daily Practice</Badge>
                    <Badge fontSize="2xs">Shadow Work</Badge>
                    <Badge fontSize="2xs">Relationships</Badge>
                    <Badge fontSize="2xs">Stress Relief</Badge>
                    <Badge fontSize="2xs">Work-Life Balance</Badge>
                  </HStack>
                </Card.Body>
              </Card.Root>
            </VStack>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
