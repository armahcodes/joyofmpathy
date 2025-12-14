'use client';

import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
  HStack,
  Card,
  Stack,
  Separator,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
}

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>();

  const onSubmit = async (data: SignupFormData) => {
    // TODO: Implement actual signup logic
    console.log('Signup data:', data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    window.location.href = '/dashboard';
  };

  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={20}>
      <Container maxW="md">
        <VStack gap={8}>
          <VStack gap={2} textAlign="center">
            <Heading fontSize="3xl">Begin Your Journey</Heading>
            <Text color="fg.muted">
              Start your free 14-day trial. No credit card required.
            </Text>
          </VStack>

          <Card.Root w="full" bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
            <Card.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack gap={6}>
                  <Box>
                    <Text mb={2} fontWeight="medium">Full Name</Text>
                    <Input
                      placeholder="Enter your name"
                      bg="bg.muted"
                      borderColor={errors.fullName ? 'red.500' : 'brand.charcoal'}
                      _focus={{ borderColor: 'brand.gold' }}
                      {...register('fullName', {
                        required: 'Full name is required',
                        minLength: {
                          value: 2,
                          message: 'Name must be at least 2 characters',
                        },
                      })}
                    />
                    {errors.fullName && (
                      <Text color="red.500" fontSize="sm" mt={1}>
                        {errors.fullName.message}
                      </Text>
                    )}
                  </Box>

                  <Box>
                    <Text mb={2} fontWeight="medium">Email</Text>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      bg="bg.muted"
                      borderColor={errors.email ? 'red.500' : 'brand.charcoal'}
                      _focus={{ borderColor: 'brand.gold' }}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <Text color="red.500" fontSize="sm" mt={1}>
                        {errors.email.message}
                      </Text>
                    )}
                  </Box>

                  <Box>
                    <Text mb={2} fontWeight="medium">Password</Text>
                    <Input
                      type="password"
                      placeholder="Create a password (min 8 characters)"
                      bg="bg.muted"
                      borderColor={errors.password ? 'red.500' : 'brand.charcoal'}
                      _focus={{ borderColor: 'brand.gold' }}
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must be at least 8 characters',
                        },
                      })}
                    />
                    {errors.password && (
                      <Text color="red.500" fontSize="sm" mt={1}>
                        {errors.password.message}
                      </Text>
                    )}
                  </Box>

                  <Box>
                    <HStack align="flex-start" gap={3}>
                      <input
                        type="checkbox"
                        style={{ accentColor: '#D4AF37', marginTop: '4px' }}
                        {...register('agreeToTerms', {
                          required: 'You must agree to the terms',
                        })}
                      />
                      <Text fontSize="sm" color="fg.muted">
                        I agree to the{' '}
                        <Link href="/terms">
                          <Text as="span" color="brand.gold" _hover={{ textDecoration: 'underline' }}>
                            Terms of Service
                          </Text>
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy">
                          <Text as="span" color="brand.gold" _hover={{ textDecoration: 'underline' }}>
                            Privacy Policy
                          </Text>
                        </Link>
                      </Text>
                    </HStack>
                    {errors.agreeToTerms && (
                      <Text color="red.500" fontSize="sm" mt={1}>
                        {errors.agreeToTerms.message}
                      </Text>
                    )}
                  </Box>

                  <Button
                    type="submit"
                    bg="brand.gold"
                    color="brand.black"
                    _hover={{ bg: 'brand.lightGold' }}
                    size="lg"
                    w="full"
                    fontWeight="bold"
                    loading={isSubmitting}
                  >
                    {isSubmitting ? 'Creating Account...' : 'Start Free Trial'}
                  </Button>

                  <Separator />

                  <VStack gap={3}>
                    <Button
                      variant="outline"
                      borderColor="brand.charcoal"
                      _hover={{ bg: 'bg.muted' }}
                      w="full"
                      type="button"
                    >
                      Sign up with Google
                    </Button>
                    <Button
                      variant="outline"
                      borderColor="brand.charcoal"
                      _hover={{ bg: 'bg.muted' }}
                      w="full"
                      type="button"
                    >
                      Sign up with Facebook
                    </Button>
                  </VStack>
                </Stack>
              </form>
            </Card.Body>
          </Card.Root>

          <Text color="fg.muted">
            Already have an account?{' '}
            <Link href="/login">
              <Text as="span" color="brand.gold" fontWeight="semibold" _hover={{ textDecoration: 'underline' }}>
                Sign In
              </Text>
            </Link>
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
