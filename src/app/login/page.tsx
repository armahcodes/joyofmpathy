'use client';

import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
  Card,
  Stack,
  Separator,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    // TODO: Implement actual login logic
    console.log('Login data:', data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    window.location.href = '/dashboard';
  };

  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={20}>
      <Container maxW="md">
        <VStack gap={8}>
          <VStack gap={2} textAlign="center">
            <Heading fontSize="3xl">Welcome Back</Heading>
            <Text color="fg.muted">
              Sign in to continue your transformation journey
            </Text>
          </VStack>

          <Card.Root w="full" bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
            <Card.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack gap={6}>
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
                      placeholder="Enter your password"
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

                  <Link href="/forgot-password" style={{ alignSelf: 'flex-end' }}>
                    <Text fontSize="sm" color="brand.gold" _hover={{ textDecoration: 'underline' }}>
                      Forgot password?
                    </Text>
                  </Link>

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
                    {isSubmitting ? 'Signing In...' : 'Sign In'}
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
                      Continue with Google
                    </Button>
                    <Button
                      variant="outline"
                      borderColor="brand.charcoal"
                      _hover={{ bg: 'bg.muted' }}
                      w="full"
                      type="button"
                    >
                      Continue with Facebook
                    </Button>
                  </VStack>
                </Stack>
              </form>
            </Card.Body>
          </Card.Root>

          <Text color="fg.muted">
            Don't have an account?{' '}
            <Link href="/signup">
              <Text as="span" color="brand.gold" fontWeight="semibold" _hover={{ textDecoration: 'underline' }}>
                Start Free Trial
              </Text>
            </Link>
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
