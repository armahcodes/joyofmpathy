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
  Progress,
  Badge,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FiGlobe, FiZap, FiShield, FiUser, FiLogIn, FiTarget, FiCompass, FiMoon, FiAward, FiCornerUpLeft, FiSunrise, FiGift, FiCheck, FiLock } from 'react-icons/fi';

const JOURNEY_STAGES = [
  {
    stage: 1,
    title: 'The Ordinary World',
    theme: 'Where Am I Now?',
    description: 'Begin with honest self-assessment and awareness of your current reality.',
    duration: '1-2 weeks',
    status: 'completed',
    icon: FiGlobe,
  },
  {
    stage: 2,
    title: 'Call to Adventure',
    theme: 'The Invitation to Change',
    description: 'Recognize the call to transformation and envision what is possible.',
    duration: '1-2 weeks',
    status: 'completed',
    icon: FiZap,
  },
  {
    stage: 3,
    title: 'Refusal of the Call',
    theme: 'Facing Fear and Resistance',
    description: 'Name your fears and understand the resistance holding you back.',
    duration: '1-2 weeks',
    status: 'current',
    icon: FiShield,
  },
  {
    stage: 4,
    title: 'Meeting the Mentor',
    theme: 'Finding Guidance',
    description: 'Connect with inner wisdom and build your support system.',
    duration: '1-2 weeks',
    status: 'locked',
    icon: FiUser,
  },
  {
    stage: 5,
    title: 'Crossing the Threshold',
    theme: 'Committing to the Journey',
    description: 'Make a sacred commitment and step into the unknown with courage.',
    duration: '1-2 weeks',
    status: 'locked',
    icon: FiLogIn,
  },
  {
    stage: 6,
    title: 'Tests, Allies, Enemies',
    theme: 'Building Skills',
    description: 'Develop emotional regulation, resilience, and practice consistently.',
    duration: '4-6 weeks',
    status: 'locked',
    icon: FiTarget,
  },
  {
    stage: 7,
    title: 'Approach to the Inmost Cave',
    theme: 'Facing the Deepest Fear',
    description: 'Prepare to confront your shadow and core wounds with compassion.',
    duration: '1-2 weeks',
    status: 'locked',
    icon: FiCompass,
  },
  {
    stage: 8,
    title: 'The Ordeal',
    theme: 'Dark Night of the Soul',
    description: 'Surrender to transformation through the death-rebirth process.',
    duration: '2-3 weeks',
    status: 'locked',
    icon: FiMoon,
  },
  {
    stage: 9,
    title: 'Reward',
    theme: 'Claiming the Treasure',
    description: 'Celebrate your breakthrough and integrate the wisdom gained.',
    duration: '1-2 weeks',
    status: 'locked',
    icon: FiAward,
  },
  {
    stage: 10,
    title: 'The Road Back',
    theme: 'Bringing Wisdom Home',
    description: 'Apply your transformation to daily life and relationships.',
    duration: '2-3 weeks',
    status: 'locked',
    icon: FiCornerUpLeft,
  },
  {
    stage: 11,
    title: 'Resurrection',
    theme: 'The Final Test',
    description: 'Face old patterns with new tools and prove your transformation.',
    duration: '1-2 weeks',
    status: 'locked',
    icon: FiSunrise,
  },
  {
    stage: 12,
    title: 'Return with the Elixir',
    theme: 'Becoming the Mentor',
    description: 'Share your wisdom, mentor others, and complete the cycle.',
    duration: '2-3 weeks',
    status: 'locked',
    icon: FiGift,
  },
];

export default function JourneyPage() {
  const completedStages = JOURNEY_STAGES.filter((s) => s.status === 'completed').length;
  const progressPercentage = (completedStages / JOURNEY_STAGES.length) * 100;

  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={{ base: 6, md: 10 }}>
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <VStack gap={{ base: 8, md: 10 }} align="stretch">
          {/* Hero Section */}
          <Box textAlign="center">
            <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={{ base: 3, md: 4 }}>
              Your{' '}
              <Text as="span" color="brand.gold">
                Hero's Journey
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="fg.muted" maxW="2xl" mx="auto" mb={{ base: 4, md: 6 }}>
              Follow Joseph Campbell's proven transformation framework through 12 stages
              of growth, from suffering to wisdom.
            </Text>

            {/* Progress Overview */}
            <Card.Root maxW="2xl" mx="auto" bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
              <Card.Body p={{ base: 4, md: 6 }}>
                <VStack gap={{ base: 3, md: 4 }}>
                  <HStack justify="space-between" w="full" flexWrap="wrap" gap={2}>
                    <Text fontWeight="semibold" fontSize={{ base: 'sm', md: 'md' }}>Overall Progress</Text>
                    <Text fontWeight="bold" color="brand.gold" fontSize={{ base: 'sm', md: 'md' }}>
                      {completedStages} of {JOURNEY_STAGES.length} Stages Complete
                    </Text>
                  </HStack>
                  <Progress.Root value={progressPercentage} colorScheme="yellow" w="full">
                    <Progress.Track bg="bg.muted">
                      <Progress.Range bg="brand.gold" />
                    </Progress.Track>
                  </Progress.Root>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted">
                    Estimated completion: 4-6 months at your current pace
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          </Box>

          {/* Journey Map */}
          <Box>
            <Heading size={{ base: 'md', md: 'lg' }} mb={{ base: 4, md: 6 }}>
              The 12 Stages
            </Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={{ base: 4, md: 6 }}>
              {JOURNEY_STAGES.map((stage) => (
                <Card.Root
                  key={stage.stage}
                  bg={stage.status === 'current' ? 'bg.muted' : 'bg.subtle'}
                  borderTop="3px solid"
                  borderColor={
                    stage.status === 'completed'
                      ? 'brand.gold'
                      : stage.status === 'current'
                      ? 'brand.lightGold'
                      : 'brand.charcoal'
                  }
                  opacity={stage.status === 'locked' ? 0.7 : 1}
                  _hover={{
                    transform: stage.status !== 'locked' ? 'translateY(-4px)' : 'none',
                    transition: 'transform 0.3s',
                  }}
                >
                  <Card.Body p={{ base: 4, md: 6 }}>
                    <VStack align="start" gap={{ base: 3, md: 4 }}>
                      <HStack justify="space-between" w="full">
                        <HStack>
                          <Box
                            w={{ base: 8, md: 10 }}
                            h={{ base: 8, md: 10 }}
                            bg={
                              stage.status === 'completed'
                                ? 'brand.gold'
                                : stage.status === 'current'
                                ? 'brand.charcoal'
                                : 'bg.muted'
                            }
                            borderRadius="full"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            color={stage.status === 'completed' ? 'brand.black' : stage.status === 'locked' ? 'fg.muted' : 'fg'}
                          >
                            {stage.status === 'completed' ? <FiCheck size={18} /> : <stage.icon size={18} />}
                          </Box>
                          <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="semibold" color="fg.muted">
                            Stage {stage.stage}
                          </Text>
                        </HStack>
                        {stage.status === 'current' && <Badge colorScheme="yellow" fontSize="2xs">Current</Badge>}
                        {stage.status === 'completed' && <Badge colorScheme="green" fontSize="2xs">Complete</Badge>}
                        {stage.status === 'locked' && <Box color="fg.muted"><FiLock size={16} /></Box>}
                      </HStack>

                      <Box>
                        <Heading size={{ base: 'xs', md: 'sm' }} mb={2} color={stage.status === 'locked' ? 'fg.muted' : 'fg'}>
                          {stage.title}
                        </Heading>
                        <Text fontSize={{ base: '2xs', md: 'xs' }} color="brand.gold" fontStyle="italic" mb={2}>
                          "{stage.theme}"
                        </Text>
                        <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted" mb={{ base: 2, md: 3 }}>
                          {stage.description}
                        </Text>
                        <Text fontSize={{ base: '2xs', md: 'xs' }} color="fg.subtle">
                          Duration: {stage.duration}
                        </Text>
                      </Box>

                      {stage.status === 'completed' && (
                        <Link href={`/journey/stage/${stage.stage}`} style={{ width: '100%' }}>
                          <Button
                            variant="outline"
                            borderColor="brand.gold"
                            color="brand.gold"
                            size="sm"
                            w="full"
                          >
                            Review Stage
                          </Button>
                        </Link>
                      )}
                      {stage.status === 'current' && (
                        <Link href={`/journey/stage/${stage.stage}`} style={{ width: '100%' }}>
                          <Button bg="brand.gold" color="brand.black" size="sm" w="full" fontWeight="bold">
                            Continue Stage
                          </Button>
                        </Link>
                      )}
                      {stage.status === 'locked' && (
                        <Button variant="outline" borderColor="brand.charcoal" size="sm" w="full" disabled>
                          Locked
                        </Button>
                      )}
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </Grid>
          </Box>

          {/* Journey Info */}
          <Card.Root bg="bg.subtle">
            <Card.Header>
              <Heading size="md" color="brand.gold">
                About the Hero's Journey
              </Heading>
            </Card.Header>
            <Card.Body>
              <VStack align="start" gap={4}>
                <Text color="fg.muted">
                  The Hero's Journey is a universal pattern of transformation identified by mythologist
                  Joseph Campbell. This framework has guided billions of people through stories,
                  religions, and personal growth for thousands of years.
                </Text>
                <Text color="fg.muted">
                  Our adaptation integrates Tibetan wisdom practices, modern neuroscience, and
                  community support to create a proven pathway from suffering to wisdom, disconnection
                  to belonging, and fear to joy.
                </Text>
                <HStack gap={4} pt={2}>
                  <Link href="/about">
                    <Button variant="outline" borderColor="brand.gold" color="brand.gold">
                      Learn More
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button bg="brand.gold" color="brand.black" fontWeight="bold">
                      Return to Dashboard
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
