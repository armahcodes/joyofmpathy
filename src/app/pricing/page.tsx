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
  Stack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

const pricingTiers = [
  { min: 19, suggested: 97, label: 'Scholarship', description: 'For those with limited resources' },
  { min: 97, suggested: 197, label: 'Standard', description: 'Suggested contribution' },
  { min: 197, suggested: 497, label: 'Supporter', description: 'Fund additional scholarships' },
  { min: 497, suggested: 997, label: 'Patron', description: 'Become a transformational partner' },
];

export default function PricingPage() {
  const [selectedAmount, setSelectedAmount] = useState(197);
  const [selectedPlan, setSelectedPlan] = useState<'flagship' | 'specialized'>('flagship');

  const flagshipFeatures = [
    '8-week cohort-based journey',
    'Weekly 60-min live sessions with master teachers',
    'Daily 10-20 min guided practices',
    'Weekly small group circles (10-12 people)',
    'Trained facilitator support',
    'Workbook and reflection exercises',
    'Lifetime alumni community access',
    'Personalized practice recommendations',
    'Progress tracking and wellbeing metrics',
    'Certificate of completion',
  ];

  const specializedFeatures = [
    '4-6 week focused masterclass',
    'Expert-led live sessions',
    'Specialized practice library',
    'Cohort discussion forums',
    'Certificate of completion',
  ];

  const getTierInfo = (amount: number) => {
    if (amount < 97) return { label: 'Scholarship', color: 'green' };
    if (amount < 197) return { label: 'Standard', color: 'yellow' };
    if (amount < 497) return { label: 'Supporter', color: 'blue' };
    return { label: 'Patron', color: 'purple' };
  };

  const tierInfo = getTierInfo(selectedAmount);

  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={10}>
      <Container maxW="container.xl">
        <VStack gap={12} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Badge colorScheme="yellow" mb={4} fontSize="sm" px={3} py={1}>
              Pay What Feels Right
            </Badge>
            <Heading fontSize={{ base: '3xl', md: '5xl' }} mb={4}>
              Transform Your Life,{' '}
              <Text as="span" bgGradient="linear(to-r, brand.gold, brand.lightGold)" bgClip="text">
                Your Way
              </Text>
            </Heading>
            <Text fontSize="lg" color="fg.muted" maxW="3xl" mx="auto">
              We believe everyone deserves access to healing. Choose what feels right for your
              situation. Every contribution supports our mission and funds scholarships for others.
            </Text>
          </Box>

          {/* Plan Toggle */}
          <HStack justify="center" gap={4}>
            <Button
              variant={selectedPlan === 'flagship' ? 'solid' : 'outline'}
              bg={selectedPlan === 'flagship' ? 'brand.gold' : 'transparent'}
              color={selectedPlan === 'flagship' ? 'brand.black' : 'brand.gold'}
              borderColor="brand.gold"
              onClick={() => setSelectedPlan('flagship')}
              _hover={{ bg: selectedPlan === 'flagship' ? 'brand.lightGold' : 'bg.subtle' }}
            >
              Flagship Journey ($197 suggested)
            </Button>
            <Button
              variant={selectedPlan === 'specialized' ? 'solid' : 'outline'}
              bg={selectedPlan === 'specialized' ? 'brand.gold' : 'transparent'}
              color={selectedPlan === 'specialized' ? 'brand.black' : 'brand.gold'}
              borderColor="brand.gold"
              onClick={() => setSelectedPlan('specialized')}
              _hover={{ bg: selectedPlan === 'specialized' ? 'brand.lightGold' : 'bg.subtle' }}
            >
              Specialized Masterclass ($97 suggested)
            </Button>
          </HStack>

          {/* Main Pricing Card */}
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
            {/* Left - Pay What Feels Right */}
            <Card.Root bg="bg.subtle" borderTop="4px solid" borderColor="brand.gold">
              <Card.Body>
                <VStack gap={8} align="stretch">
                  <Box textAlign="center">
                    <Text fontSize="sm" color="fg.muted" mb={2}>
                      Your Contribution
                    </Text>
                    <Heading fontSize="5xl" color="brand.gold">
                      ${selectedAmount}
                    </Heading>
                    <Badge colorScheme={tierInfo.color} mt={2}>
                      {tierInfo.label} Level
                    </Badge>
                  </Box>

                  {/* Slider */}
                  <Box px={4}>
                    <Slider.Root
                      value={[selectedAmount]}
                      onValueChange={(details) => setSelectedAmount(details.value[0])}
                      min={19}
                      max={997}
                      step={1}
                    >
                      <Slider.Control>
                        <Slider.Track bg="bg.muted" h={3}>
                          <Slider.Range bg="brand.gold" />
                        </Slider.Track>
                        <Slider.Thumb
                          index={0}
                          bg="brand.gold"
                          boxSize={6}
                          _focus={{ boxShadow: '0 0 0 3px rgba(212, 175, 55, 0.3)' }}
                        />
                      </Slider.Control>
                    </Slider.Root>
                    <HStack justify="space-between" mt={2}>
                      <Text fontSize="xs" color="fg.muted">
                        $19 min
                      </Text>
                      <Text fontSize="xs" color="brand.gold" fontWeight="semibold">
                        ${selectedPlan === 'flagship' ? '197' : '97'} suggested
                      </Text>
                      <Text fontSize="xs" color="fg.muted">
                        $997+
                      </Text>
                    </HStack>
                  </Box>

                  {/* Quick Amount Buttons */}
                  <HStack justify="center" gap={3} flexWrap="wrap">
                    {[19, 50, 97, 197, 497].map((amount) => (
                      <Button
                        key={amount}
                        size="sm"
                        variant={selectedAmount === amount ? 'solid' : 'outline'}
                        bg={selectedAmount === amount ? 'brand.gold' : 'transparent'}
                        color={selectedAmount === amount ? 'brand.black' : 'brand.gold'}
                        borderColor="brand.gold"
                        onClick={() => setSelectedAmount(amount)}
                        _hover={{ bg: selectedAmount === amount ? 'brand.lightGold' : 'bg.muted' }}
                      >
                        ${amount}
                      </Button>
                    ))}
                  </HStack>

                  {/* Tier Descriptions */}
                  <Box bg="bg.muted" p={4} borderRadius="md">
                    <VStack gap={2} align="start" fontSize="sm">
                      <HStack>
                        <Text color={selectedAmount < 97 ? 'brand.gold' : 'fg.muted'}>
                          $19-96: Scholarship
                        </Text>
                        <Text color="fg.subtle">- For those with limited resources</Text>
                      </HStack>
                      <HStack>
                        <Text color={selectedAmount >= 97 && selectedAmount < 197 ? 'brand.gold' : 'fg.muted'}>
                          $97-196: Standard
                        </Text>
                        <Text color="fg.subtle">- Suggested contribution</Text>
                      </HStack>
                      <HStack>
                        <Text color={selectedAmount >= 197 && selectedAmount < 497 ? 'brand.gold' : 'fg.muted'}>
                          $197-496: Supporter
                        </Text>
                        <Text color="fg.subtle">- Funds 1 scholarship</Text>
                      </HStack>
                      <HStack>
                        <Text color={selectedAmount >= 497 ? 'brand.gold' : 'fg.muted'}>
                          $497+: Patron
                        </Text>
                        <Text color="fg.subtle">- Funds 3+ scholarships</Text>
                      </HStack>
                    </VStack>
                  </Box>

                  {/* CTA */}
                  <Link href={`/checkout?amount=${selectedAmount}&plan=${selectedPlan}`}>
                    <Button
                      bg="brand.gold"
                      color="brand.black"
                      _hover={{ bg: 'brand.lightGold', transform: 'translateY(-2px)' }}
                      transition="all 0.3s"
                      size="lg"
                      w="full"
                      fontWeight="bold"
                    >
                      Join Next Cohort - ${selectedAmount}
                    </Button>
                  </Link>

                  <Text fontSize="xs" color="fg.muted" textAlign="center">
                    Next cohort starts in 5 days. Limited to 150 members.
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Right - Features */}
            <Card.Root bg="bg.subtle">
              <Card.Header>
                <Heading size="md" color="brand.gold">
                  {selectedPlan === 'flagship'
                    ? "The Hero's Journey to Joy - 8 Weeks"
                    : 'Specialized Masterclass - 4-6 Weeks'}
                </Heading>
              </Card.Header>
              <Card.Body>
                <VStack gap={4} align="stretch">
                  <Text color="fg.muted">
                    {selectedPlan === 'flagship'
                      ? 'A complete cohort-based transformation experience combining ancient Tibetan wisdom, modern neuroscience, and genuine community support.'
                      : 'Focused deep-dive into specific wisdom areas with world-class experts.'}
                  </Text>

                  <Box pt={4}>
                    <Text fontWeight="semibold" mb={4} color="brand.gold">
                      What's Included:
                    </Text>
                    <Stack gap={3}>
                      {(selectedPlan === 'flagship' ? flagshipFeatures : specializedFeatures).map(
                        (feature, i) => (
                          <HStack key={i} align="start">
                            <Text color="brand.gold">✓</Text>
                            <Text fontSize="sm">{feature}</Text>
                          </HStack>
                        )
                      )}
                    </Stack>
                  </Box>

                  {selectedPlan === 'flagship' && (
                    <Box bg="bg.muted" p={4} borderRadius="md" mt={4}>
                      <Text fontWeight="semibold" mb={2} fontSize="sm">
                        The Hero's Journey Framework:
                      </Text>
                      <Grid templateColumns="repeat(2, 1fr)" gap={2} fontSize="xs" color="fg.muted">
                        <Text>1. Ordinary World</Text>
                        <Text>2. Call to Adventure</Text>
                        <Text>3. Refusal of Call</Text>
                        <Text>4. Meeting Mentor</Text>
                        <Text>5. Crossing Threshold</Text>
                        <Text>6. Tests & Allies</Text>
                        <Text>7. Inmost Cave</Text>
                        <Text>8. The Ordeal</Text>
                        <Text>9. Reward</Text>
                        <Text>10. Road Back</Text>
                        <Text>11. Resurrection</Text>
                        <Text>12. Return with Elixir</Text>
                      </Grid>
                    </Box>
                  )}
                </VStack>
              </Card.Body>
            </Card.Root>
          </Grid>

          {/* Transparency Section */}
          <Card.Root bg="bg.subtle" borderLeft="4px solid" borderColor="brand.gold">
            <Card.Body>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
                <VStack align="start">
                  <Text fontSize="2xl" fontWeight="bold" color="brand.gold">
                    70%
                  </Text>
                  <Text fontWeight="semibold">Program Delivery</Text>
                  <Text fontSize="sm" color="fg.muted">
                    Teachers, facilitators, technology, and content creation
                  </Text>
                </VStack>
                <VStack align="start">
                  <Text fontSize="2xl" fontWeight="bold" color="brand.gold">
                    20%
                  </Text>
                  <Text fontWeight="semibold">Scholarships</Text>
                  <Text fontSize="sm" color="fg.muted">
                    Making transformation accessible to those in need
                  </Text>
                </VStack>
                <VStack align="start">
                  <Text fontSize="2xl" fontWeight="bold" color="brand.gold">
                    10%
                  </Text>
                  <Text fontWeight="semibold">Research & Impact</Text>
                  <Text fontSize="sm" color="fg.muted">
                    Measuring and validating transformation outcomes
                  </Text>
                </VStack>
              </Grid>
            </Card.Body>
          </Card.Root>

          {/* Social Proof */}
          <Box textAlign="center">
            <Heading size="md" mb={6}>
              What People Are Saying
            </Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
              {[
                {
                  quote:
                    'I paid $50 because that was what I could afford. The transformation was priceless.',
                  name: 'Maria R.',
                  paid: '$50',
                },
                {
                  quote:
                    'Paying $497 meant two other people could join. Worth every penny.',
                  name: 'James T.',
                  paid: '$497',
                },
                {
                  quote:
                    'The scholarship option made this possible for me. Forever grateful.',
                  name: 'Sarah M.',
                  paid: '$25',
                },
              ].map((testimonial, i) => (
                <Card.Root key={i} bg="bg.muted">
                  <Card.Body>
                    <VStack gap={3}>
                      <Text fontStyle="italic" fontSize="sm">
                        "{testimonial.quote}"
                      </Text>
                      <Box>
                        <Text fontWeight="semibold" color="brand.gold">
                          {testimonial.name}
                        </Text>
                        <Text fontSize="xs" color="fg.muted">
                          Paid: {testimonial.paid}
                        </Text>
                      </Box>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </Grid>
          </Box>

          {/* FAQ */}
          <Box>
            <Heading size="md" mb={6} textAlign="center">
              Frequently Asked Questions
            </Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
              {[
                {
                  q: 'What if I can only afford the minimum?',
                  a: 'We welcome you! The $19 minimum exists only to ensure commitment. You receive the same full experience regardless of payment amount.',
                },
                {
                  q: 'Can I pay more to help others?',
                  a: 'Absolutely! Payments above $197 directly fund scholarships for those with limited resources. You become a Supporter or Patron.',
                },
                {
                  q: 'What if I want a refund?',
                  a: "If you're not satisfied within the first 2 weeks, we'll refund your contribution. No questions asked.",
                },
                {
                  q: 'How are cohorts structured?',
                  a: 'Each cohort has ~150 people, divided into small circles of 10-12 for deep connection. You meet weekly with your circle.',
                },
              ].map((faq, i) => (
                <Card.Root key={i} bg="bg.subtle">
                  <Card.Body>
                    <Text fontWeight="semibold" mb={2}>
                      {faq.q}
                    </Text>
                    <Text fontSize="sm" color="fg.muted">
                      {faq.a}
                    </Text>
                  </Card.Body>
                </Card.Root>
              ))}
            </Grid>
          </Box>

          {/* Final CTA */}
          <Card.Root bg="bg.muted" borderTop="3px solid" borderColor="brand.gold">
            <Card.Body>
              <VStack gap={6} textAlign="center" py={6}>
                <Heading size="lg">Ready to Begin Your Transformation?</Heading>
                <Text color="fg.muted" maxW="2xl">
                  Join our next cohort starting in 5 days. Limited spots available.
                </Text>
                <HStack gap={4}>
                  <Link href="/challenge">
                    <Button
                      variant="outline"
                      borderColor="brand.gold"
                      color="brand.gold"
                      size="lg"
                    >
                      Start Free 7-Day Challenge
                    </Button>
                  </Link>
                  <Link href={`/checkout?amount=${selectedAmount}&plan=${selectedPlan}`}>
                    <Button
                      bg="brand.gold"
                      color="brand.black"
                      _hover={{ bg: 'brand.lightGold' }}
                      size="lg"
                      fontWeight="bold"
                    >
                      Join Now - ${selectedAmount}
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
