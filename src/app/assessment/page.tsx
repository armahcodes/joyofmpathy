'use client';

import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Card,
  Progress,
  Stack,
  Badge,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiStar, FiTarget, FiAward, FiHeart, FiChevronLeft, FiChevronRight, FiCheckCircle } from 'react-icons/fi';

const questions = [
  {
    id: 1,
    category: 'Stress',
    question: 'In the last month, how often have you felt that you were unable to control the important things in your life?',
    options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'],
  },
  {
    id: 2,
    category: 'Stress',
    question: 'In the last month, how often have you felt confident about your ability to handle your personal problems?',
    options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'],
  },
  {
    id: 3,
    category: 'Wellbeing',
    question: 'In most ways my life is close to my ideal.',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 4,
    category: 'Wellbeing',
    question: 'The conditions of my life are excellent.',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 5,
    category: 'Empathy',
    question: 'I often have tender, concerned feelings for people less fortunate than me.',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 6,
    category: 'Empathy',
    question: 'When I see someone being treated unfairly, I sometimes don\'t feel very much pity for them.',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  },
  {
    id: 7,
    category: 'Anxiety',
    question: 'Over the last 2 weeks, how often have you been bothered by feeling nervous, anxious, or on edge?',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
  },
  {
    id: 8,
    category: 'Anxiety',
    question: 'Over the last 2 weeks, how often have you not been able to stop or control worrying?',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
  },
];

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [question.id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (showResults) {
    return (
      <Box bg="bg" minH="calc(100vh - 200px)" py={{ base: 6, md: 10 }}>
        <Container maxW="container.md" px={{ base: 4, md: 6 }}>
          <VStack gap={{ base: 6, md: 8 }} align="stretch">
            <Box textAlign="center">
              <Box
                w={{ base: 16, md: 20 }}
                h={{ base: 16, md: 20 }}
                borderRadius="full"
                bg="brand.gold"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="brand.black"
                mx="auto"
                mb={4}
              >
                <FiCheckCircle size={32} />
              </Box>
              <Heading fontSize={{ base: '2xl', md: '3xl' }} mb={4}>
                Assessment Complete!
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="fg.muted">
                Thank you for taking the time to assess your wellbeing.
              </Text>
            </Box>

            {/* Results Cards */}
            <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
              <Card.Header p={{ base: 4, md: 6 }}>
                <Heading size={{ base: 'sm', md: 'md' }} color="brand.gold">
                  Your Wellbeing Snapshot
                </Heading>
              </Card.Header>
              <Card.Body p={{ base: 4, md: 6 }} pt={0}>
                <VStack gap={{ base: 4, md: 6 }} align="stretch">
                  {/* Stress Score */}
                  <Box>
                    <HStack justify="space-between" mb={2}>
                      <Text fontWeight="semibold" fontSize={{ base: 'sm', md: 'md' }}>Stress Level</Text>
                      <Text fontWeight="bold" color="brand.gold" fontSize={{ base: 'sm', md: 'md' }}>
                        Moderate
                      </Text>
                    </HStack>
                    <Progress.Root value={60} colorScheme="yellow">
                      <Progress.Track bg="bg.muted">
                        <Progress.Range bg="brand.gold" />
                      </Progress.Track>
                    </Progress.Root>
                    <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted" mt={2}>
                      Your stress level is moderate. The Hero's Journey practices can help reduce this by 20-30%.
                    </Text>
                  </Box>

                  {/* Wellbeing Score */}
                  <Box>
                    <HStack justify="space-between" mb={2}>
                      <Text fontWeight="semibold">Life Satisfaction</Text>
                      <Text fontWeight="bold" color="brand.gold">
                        65/100
                      </Text>
                    </HStack>
                    <Progress.Root value={65} colorScheme="yellow">
                      <Progress.Track bg="bg.muted">
                        <Progress.Range bg="brand.gold" />
                      </Progress.Track>
                    </Progress.Root>
                    <Text fontSize="sm" color="fg.muted" mt={2}>
                      Your life satisfaction is in the moderate range. Many members see 25%+ improvement.
                    </Text>
                  </Box>

                  {/* Empathy Score */}
                  <Box>
                    <HStack justify="space-between" mb={2}>
                      <Text fontWeight="semibold">Empathy Capacity</Text>
                      <Text fontWeight="bold" color="brand.gold">
                        Good
                      </Text>
                    </HStack>
                    <Progress.Root value={75} colorScheme="yellow">
                      <Progress.Track bg="bg.muted">
                        <Progress.Range bg="brand.gold" />
                      </Progress.Track>
                    </Progress.Root>
                    <Text fontSize="sm" color="fg.muted" mt={2}>
                      You have a good foundation of empathy. Our practices will help you deepen this further.
                    </Text>
                  </Box>

                  {/* Anxiety Score */}
                  <Box>
                    <HStack justify="space-between" mb={2}>
                      <Text fontWeight="semibold">Anxiety Level</Text>
                      <Text fontWeight="bold" color="brand.gold">
                        Mild
                      </Text>
                    </HStack>
                    <Progress.Root value={35} colorScheme="yellow">
                      <Progress.Track bg="bg.muted">
                        <Progress.Range bg="brand.gold" />
                      </Progress.Track>
                    </Progress.Root>
                    <Text fontSize="sm" color="fg.muted" mt={2}>
                      Your anxiety is in the mild range. Breathwork and meditation can help manage this.
                    </Text>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Recommendations */}
            <Card.Root bg="bg.subtle">
              <Card.Header p={{ base: 4, md: 6 }}>
                <Heading size={{ base: 'sm', md: 'md' }} color="brand.gold">
                  Personalized Recommendations
                </Heading>
              </Card.Header>
              <Card.Body p={{ base: 4, md: 6 }} pt={0}>
                <VStack gap={{ base: 3, md: 4 }} align="stretch">
                  <Box p={{ base: 3, md: 4 }} bg="bg.muted" borderRadius="md" borderLeft="3px solid" borderColor="brand.gold">
                    <HStack mb={2}>
                      <Box color="brand.gold"><FiTarget size={18} /></Box>
                      <Text fontWeight="semibold" fontSize={{ base: 'sm', md: 'md' }}>
                        Start with Stage 1: The Ordinary World
                      </Text>
                    </HStack>
                    <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted">
                      Begin your journey with self-awareness practices and baseline setting.
                    </Text>
                  </Box>

                  <Box p={{ base: 3, md: 4 }} bg="bg.muted" borderRadius="md" borderLeft="3px solid" borderColor="brand.gold">
                    <HStack mb={2}>
                      <Box color="brand.gold"><FiAward size={18} /></Box>
                      <Text fontWeight="semibold" fontSize={{ base: 'sm', md: 'md' }}>
                        Enroll in: The Neuroscience of Joy
                      </Text>
                    </HStack>
                    <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted">
                      Based on your wellbeing scores, this masterclass will be valuable.
                    </Text>
                  </Box>

                  <Box p={{ base: 3, md: 4 }} bg="bg.muted" borderRadius="md" borderLeft="3px solid" borderColor="brand.gold">
                    <HStack mb={2}>
                      <Box color="brand.gold"><FiHeart size={18} /></Box>
                      <Text fontWeight="semibold" fontSize={{ base: 'sm', md: 'md' }}>
                        Practice: Daily Stress Relief Meditation
                      </Text>
                    </HStack>
                    <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted">
                      A 10-minute daily practice to help reduce your stress levels.
                    </Text>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Actions */}
            <HStack gap={{ base: 2, md: 4 }} justify="center" flexWrap="wrap">
              <Button
                bg="brand.gold"
                color="brand.black"
                _hover={{ bg: 'brand.lightGold' }}
                size={{ base: 'md', md: 'lg' }}
                onClick={() => (window.location.href = '/dashboard')}
              >
                Go to Dashboard
              </Button>
              <Button
                variant="outline"
                borderColor="brand.gold"
                color="brand.gold"
                size={{ base: 'md', md: 'lg' }}
                onClick={() => (window.location.href = '/journey')}
              >
                Begin Journey
              </Button>
            </HStack>

            <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted" textAlign="center">
              Your baseline assessment has been saved. We'll remind you to retake this monthly to track your progress.
            </Text>
          </VStack>
        </Container>
      </Box>
    );
  }

  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={{ base: 6, md: 10 }}>
      <Container maxW="container.md" px={{ base: 4, md: 6 }}>
        <VStack gap={{ base: 6, md: 8 }} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading fontSize={{ base: '2xl', md: '3xl' }} mb={{ base: 3, md: 4 }}>
              Wellbeing Assessment
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="fg.muted">
              Help us understand your starting point so we can personalize your journey
            </Text>
          </Box>

          {/* Progress Bar */}
          <Card.Root bg="bg.subtle">
            <Card.Body>
              <VStack gap={3}>
                <HStack justify="space-between" w="full">
                  <Text fontSize="sm" color="fg.muted">
                    Question {currentQuestion + 1} of {questions.length}
                  </Text>
                  <Text fontSize="sm" fontWeight="semibold" color="brand.gold">
                    {Math.round(progress)}% Complete
                  </Text>
                </HStack>
                <Progress.Root value={progress} colorScheme="yellow" w="full">
                  <Progress.Track bg="bg.muted">
                    <Progress.Range bg="brand.gold" />
                  </Progress.Track>
                </Progress.Root>
              </VStack>
            </Card.Body>
          </Card.Root>

          {/* Question Card */}
          <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
            <Card.Body>
              <VStack gap={6} align="stretch">
                <Box>
                  <Badge colorScheme="yellow" mb={4}>
                    {question.category}
                  </Badge>
                  <Heading size="md" mb={4}>
                    {question.question}
                  </Heading>
                </Box>

                <Stack gap={3}>
                  {question.options.map((option, index) => (
                    <Box
                      key={index}
                      p={4}
                      bg={answers[question.id] === option ? 'brand.gold' : 'bg.muted'}
                      borderRadius="md"
                      cursor="pointer"
                      _hover={{ bg: answers[question.id] === option ? 'brand.gold' : 'bg' }}
                      onClick={() => handleAnswer(option)}
                      display="flex"
                      alignItems="center"
                      gap={3}
                    >
                      <Box
                        w={5}
                        h={5}
                        borderRadius="full"
                        border="2px solid"
                        borderColor={answers[question.id] === option ? 'brand.black' : 'fg.muted'}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        {answers[question.id] === option && (
                          <Box
                            w={3}
                            h={3}
                            borderRadius="full"
                            bg="brand.black"
                          />
                        )}
                      </Box>
                      <Text color={answers[question.id] === option ? 'brand.black' : 'fg'}>{option}</Text>
                    </Box>
                  ))}
                </Stack>
              </VStack>
            </Card.Body>
          </Card.Root>

          {/* Navigation */}
          <HStack justify="space-between">
            <Button
              variant="outline"
              borderColor="brand.charcoal"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              size={{ base: 'sm', md: 'md' }}
            >
              <HStack gap={1}>
                <FiChevronLeft />
                <Text display={{ base: 'none', sm: 'inline' }}>Previous</Text>
              </HStack>
            </Button>
            <Button
              bg="brand.gold"
              color="brand.black"
              _hover={{ bg: 'brand.lightGold' }}
              onClick={handleNext}
              disabled={!answers[question.id]}
              size={{ base: 'sm', md: 'md' }}
            >
              <HStack gap={1}>
                <Text>{currentQuestion < questions.length - 1 ? 'Next' : 'View Results'}</Text>
                <FiChevronRight />
              </HStack>
            </Button>
          </HStack>

          <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted" textAlign="center">
            This assessment takes approximately 10-15 minutes. All responses are private and encrypted.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
