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
  Input,
  Separator,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { FiShield, FiLock, FiRefreshCw, FiCheck, FiCreditCard } from 'react-icons/fi';

interface AccountFormData {
  firstName: string;
  lastName: string;
  email: string;
}

interface PaymentFormData {
  cardNumber: string;
  expiry: string;
  cvc: string;
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount') || '197';
  const plan = searchParams.get('plan') || 'flagship';

  const [step, setStep] = useState(1);
  const [accountData, setAccountData] = useState<AccountFormData | null>(null);

  const {
    register: registerAccount,
    handleSubmit: handleAccountSubmit,
    formState: { errors: accountErrors, isSubmitting: isAccountSubmitting },
  } = useForm<AccountFormData>();

  const {
    register: registerPayment,
    handleSubmit: handlePaymentSubmit,
    formState: { errors: paymentErrors, isSubmitting: isPaymentSubmitting },
  } = useForm<PaymentFormData>();

  const planDetails = {
    flagship: {
      name: "The Hero's Journey to Joy",
      duration: '8 weeks',
      starts: 'January 15, 2025',
      features: [
        '8 weekly live sessions with master teachers',
        'Daily guided practices (10-20 min)',
        'Small circle with trained facilitator',
        'Cohort community access',
        'Workbook and resources',
        'Certificate of completion',
        'Lifetime alumni access',
      ],
    },
    specialized: {
      name: 'Specialized Masterclass',
      duration: '4-6 weeks',
      starts: 'February 1, 2025',
      features: [
        'Expert-led live sessions',
        'Specialized practice library',
        'Cohort discussion forums',
        'Certificate of completion',
      ],
    },
  };

  const selectedPlan = planDetails[plan as keyof typeof planDetails] || planDetails.flagship;

  const onAccountSubmit = async (data: AccountFormData) => {
    setAccountData(data);
    setStep(2);
  };

  const onPaymentSubmit = async (data: PaymentFormData) => {
    // TODO: Implement actual payment processing
    console.log('Payment data:', data);
    console.log('Account data:', accountData);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    window.location.href = '/dashboard?enrolled=true';
  };

  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={{ base: 6, md: 10 }}>
      <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
        <VStack gap={{ base: 6, md: 8 }} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading fontSize={{ base: '2xl', md: '3xl' }} mb={2}>
              Complete Your Enrollment
            </Heading>
            <Text color="fg.muted" fontSize={{ base: 'sm', md: 'md' }}>Secure checkout with 256-bit encryption</Text>
          </Box>

          {/* Progress Steps */}
          <HStack justify="center" gap={{ base: 2, md: 4 }}>
            {[1, 2].map((s) => (
              <HStack key={s}>
                <Box
                  w={{ base: 6, md: 8 }}
                  h={{ base: 6, md: 8 }}
                  bg={step >= s ? 'brand.gold' : 'bg.muted'}
                  color={step >= s ? 'brand.black' : 'fg.muted'}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontWeight="bold"
                  fontSize={{ base: 'xs', md: 'sm' }}
                >
                  {step > s ? <FiCheck size={14} /> : s}
                </Box>
                <Text color={step >= s ? 'fg' : 'fg.muted'} fontSize={{ base: 'xs', md: 'sm' }}>
                  {s === 1 ? 'Account' : 'Payment'}
                </Text>
                {s < 2 && (
                  <Box w={{ base: 6, md: 12 }} h={0.5} bg={step > s ? 'brand.gold' : 'bg.muted'} mx={{ base: 1, md: 2 }} />
                )}
              </HStack>
            ))}
          </HStack>

          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 6, md: 8 }}>
            {/* Left - Form */}
            {step === 1 ? (
              <form onSubmit={handleAccountSubmit(onAccountSubmit)}>
                <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
                  <Card.Header p={{ base: 4, md: 6 }}>
                    <Heading size={{ base: 'sm', md: 'md' }} color="brand.gold">
                      Account Information
                    </Heading>
                  </Card.Header>
                  <Card.Body p={{ base: 4, md: 6 }} pt={0}>
                    <VStack gap={{ base: 4, md: 6 }}>
                      <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }} gap={4} w="full">
                        <Box>
                          <Text mb={2} fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }}>First Name</Text>
                          <Input
                            bg="bg.muted"
                            borderColor={accountErrors.firstName ? 'red.500' : 'brand.charcoal'}
                            _focus={{ borderColor: 'brand.gold' }}
                            size={{ base: 'sm', md: 'md' }}
                            {...registerAccount('firstName', {
                              required: 'First name is required',
                              minLength: {
                                value: 2,
                                message: 'First name must be at least 2 characters',
                              },
                            })}
                          />
                          {accountErrors.firstName && (
                            <Text color="red.500" fontSize="xs" mt={1}>
                              {accountErrors.firstName.message}
                            </Text>
                          )}
                        </Box>
                        <Box>
                          <Text mb={2} fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }}>Last Name</Text>
                          <Input
                            bg="bg.muted"
                            borderColor={accountErrors.lastName ? 'red.500' : 'brand.charcoal'}
                            _focus={{ borderColor: 'brand.gold' }}
                            size={{ base: 'sm', md: 'md' }}
                            {...registerAccount('lastName', {
                              required: 'Last name is required',
                              minLength: {
                                value: 2,
                                message: 'Last name must be at least 2 characters',
                              },
                            })}
                          />
                          {accountErrors.lastName && (
                            <Text color="red.500" fontSize="xs" mt={1}>
                              {accountErrors.lastName.message}
                            </Text>
                          )}
                        </Box>
                      </Grid>
                      <Box w="full">
                        <Text mb={2} fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }}>Email</Text>
                        <Input
                          type="email"
                          placeholder="you@email.com"
                          bg="bg.muted"
                          borderColor={accountErrors.email ? 'red.500' : 'brand.charcoal'}
                          _focus={{ borderColor: 'brand.gold' }}
                          size={{ base: 'sm', md: 'md' }}
                          {...registerAccount('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            },
                          })}
                        />
                        {accountErrors.email && (
                          <Text color="red.500" fontSize="xs" mt={1}>
                            {accountErrors.email.message}
                          </Text>
                        )}
                      </Box>
                      <Button
                        type="submit"
                        bg="brand.gold"
                        color="brand.black"
                        _hover={{ bg: 'brand.lightGold' }}
                        size={{ base: 'md', md: 'lg' }}
                        w="full"
                        fontWeight="bold"
                        loading={isAccountSubmitting}
                      >
                        {isAccountSubmitting ? 'Processing...' : 'Continue to Payment'}
                      </Button>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              </form>
            ) : (
              <form onSubmit={handlePaymentSubmit(onPaymentSubmit)}>
                <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
                  <Card.Header p={{ base: 4, md: 6 }}>
                    <HStack justify="space-between" flexWrap="wrap" gap={2}>
                      <Heading size={{ base: 'sm', md: 'md' }} color="brand.gold">
                        Payment Details
                      </Heading>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setStep(1)}
                        color="brand.gold"
                        type="button"
                      >
                        Edit Account
                      </Button>
                    </HStack>
                  </Card.Header>
                  <Card.Body p={{ base: 4, md: 6 }} pt={0}>
                    <VStack gap={{ base: 4, md: 6 }}>
                      <Box w="full" p={3} bg="bg.muted" borderRadius="md">
                        <Text fontSize="sm">
                          {accountData?.firstName} {accountData?.lastName}
                        </Text>
                        <Text fontSize="sm" color="fg.muted">
                          {accountData?.email}
                        </Text>
                      </Box>

                      <Box w="full">
                        <Text mb={2} fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }}>Card Number</Text>
                        <Input
                          placeholder="1234 5678 9012 3456"
                          bg="bg.muted"
                          borderColor={paymentErrors.cardNumber ? 'red.500' : 'brand.charcoal'}
                          _focus={{ borderColor: 'brand.gold' }}
                          size={{ base: 'sm', md: 'md' }}
                          {...registerPayment('cardNumber', {
                            required: 'Card number is required',
                            pattern: {
                              value: /^[\d\s]{13,19}$/,
                              message: 'Invalid card number',
                            },
                          })}
                        />
                        {paymentErrors.cardNumber && (
                          <Text color="red.500" fontSize="xs" mt={1}>
                            {paymentErrors.cardNumber.message}
                          </Text>
                        )}
                      </Box>

                      <Grid templateColumns="repeat(2, 1fr)" gap={4} w="full">
                        <Box>
                          <Text mb={2} fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }}>Expiry</Text>
                          <Input
                            placeholder="MM/YY"
                            bg="bg.muted"
                            borderColor={paymentErrors.expiry ? 'red.500' : 'brand.charcoal'}
                            _focus={{ borderColor: 'brand.gold' }}
                            size={{ base: 'sm', md: 'md' }}
                            {...registerPayment('expiry', {
                              required: 'Expiry date is required',
                              pattern: {
                                value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                                message: 'Invalid format (MM/YY)',
                              },
                            })}
                          />
                          {paymentErrors.expiry && (
                            <Text color="red.500" fontSize="xs" mt={1}>
                              {paymentErrors.expiry.message}
                            </Text>
                          )}
                        </Box>
                        <Box>
                          <Text mb={2} fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }}>CVC</Text>
                          <Input
                            placeholder="123"
                            bg="bg.muted"
                            borderColor={paymentErrors.cvc ? 'red.500' : 'brand.charcoal'}
                            _focus={{ borderColor: 'brand.gold' }}
                            size={{ base: 'sm', md: 'md' }}
                            {...registerPayment('cvc', {
                              required: 'CVC is required',
                              pattern: {
                                value: /^\d{3,4}$/,
                                message: 'Invalid CVC',
                              },
                            })}
                          />
                          {paymentErrors.cvc && (
                            <Text color="red.500" fontSize="xs" mt={1}>
                              {paymentErrors.cvc.message}
                            </Text>
                          )}
                        </Box>
                      </Grid>

                      <Button
                        type="submit"
                        bg="brand.gold"
                        color="brand.black"
                        _hover={{ bg: 'brand.lightGold' }}
                        size={{ base: 'md', md: 'lg' }}
                        w="full"
                        fontWeight="bold"
                        loading={isPaymentSubmitting}
                      >
                        {isPaymentSubmitting ? 'Processing...' : `Complete Enrollment - $${amount}`}
                      </Button>

                      <HStack justify="center" gap={4} fontSize="xs" color="fg.muted">
                        <HStack gap={1}>
                          <FiLock size={12} />
                          <Text>256-bit encryption</Text>
                        </HStack>
                        <HStack gap={1}>
                          <FiCreditCard size={12} />
                          <Text>Secure payment</Text>
                        </HStack>
                      </HStack>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              </form>
            )}

            {/* Right - Order Summary */}
            <VStack gap={{ base: 4, md: 6 }} align="stretch">
              <Card.Root bg="bg.subtle">
                <Card.Header p={{ base: 4, md: 6 }}>
                  <Heading size={{ base: 'sm', md: 'md' }} color="brand.gold">
                    Order Summary
                  </Heading>
                </Card.Header>
                <Card.Body p={{ base: 4, md: 6 }} pt={0}>
                  <VStack gap={4} align="stretch">
                    <Box>
                      <Heading size={{ base: 'xs', md: 'sm' }} mb={1}>
                        {selectedPlan.name}
                      </Heading>
                      <HStack gap={2} flexWrap="wrap">
                        <Badge fontSize="xs">{selectedPlan.duration}</Badge>
                        <Badge colorScheme="green" fontSize="xs">Starts {selectedPlan.starts}</Badge>
                      </HStack>
                    </Box>

                    <Separator />

                    <Box>
                      <Text fontSize="sm" fontWeight="semibold" mb={3}>
                        What's Included:
                      </Text>
                      <VStack align="start" gap={2}>
                        {selectedPlan.features.map((feature, i) => (
                          <HStack key={i} align="start">
                            <Box color="brand.gold" mt={0.5}>
                              <FiCheck size={14} />
                            </Box>
                            <Text fontSize={{ base: 'xs', md: 'sm' }}>{feature}</Text>
                          </HStack>
                        ))}
                      </VStack>
                    </Box>

                    <Separator />

                    <HStack justify="space-between">
                      <Text fontSize={{ base: 'sm', md: 'md' }}>Your Contribution</Text>
                      <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color="brand.gold">
                        ${amount}
                      </Text>
                    </HStack>

                    {parseInt(amount) >= 197 && (
                      <Box bg="brand.gold" color="brand.black" p={3} borderRadius="md">
                        <Text fontSize="sm" fontWeight="semibold">
                          Thank you for supporting our mission!
                        </Text>
                        <Text fontSize="xs">
                          Your contribution above ${plan === 'flagship' ? '197' : '97'} funds
                          scholarships for others.
                        </Text>
                      </Box>
                    )}
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Guarantees */}
              <Card.Root bg="bg.muted">
                <Card.Body p={{ base: 4, md: 6 }}>
                  <VStack gap={3} align="start">
                    <HStack>
                      <Box color="brand.gold">
                        <FiShield size={20} />
                      </Box>
                      <Box>
                        <Text fontWeight="semibold" fontSize={{ base: 'xs', md: 'sm' }}>
                          14-Day Money-Back Guarantee
                        </Text>
                        <Text fontSize="xs" color="fg.muted">
                          Not satisfied? Full refund, no questions asked.
                        </Text>
                      </Box>
                    </HStack>
                    <HStack>
                      <Box color="brand.gold">
                        <FiLock size={20} />
                      </Box>
                      <Box>
                        <Text fontWeight="semibold" fontSize={{ base: 'xs', md: 'sm' }}>
                          Secure Payment
                        </Text>
                        <Text fontSize="xs" color="fg.muted">
                          Your payment info is encrypted and secure.
                        </Text>
                      </Box>
                    </HStack>
                    <HStack>
                      <Box color="brand.gold">
                        <FiRefreshCw size={20} />
                      </Box>
                      <Box>
                        <Text fontWeight="semibold" fontSize={{ base: 'xs', md: 'sm' }}>
                          Lifetime Alumni Access
                        </Text>
                        <Text fontSize="xs" color="fg.muted">
                          Join the community forever after graduation.
                        </Text>
                      </Box>
                    </HStack>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Need Help */}
              <Box textAlign="center">
                <Text fontSize={{ base: 'xs', md: 'sm' }} color="fg.muted">
                  Questions?{' '}
                  <Link href="/support">
                    <Text as="span" color="brand.gold" _hover={{ textDecoration: 'underline' }}>
                      Contact Support
                    </Text>
                  </Link>
                </Text>
              </Box>
            </VStack>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<Box bg="bg" minH="100vh" />}>
      <CheckoutContent />
    </Suspense>
  );
}
