'use client';

import { SimpleAvatar } from '@/components/ui/SimpleAvatar';
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Input,
  Text,
  VStack,
  HStack,
  Card,
  Stack,
  Badge,
  Tabs,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

// Simple toggle component
function Toggle({ defaultChecked = false }: { defaultChecked?: boolean }) {
  return (
    <input
      type="checkbox"
      defaultChecked={defaultChecked}
      style={{
        width: '40px',
        height: '20px',
        accentColor: '#D4AF37',
        cursor: 'pointer',
      }}
    />
  );
}

interface AccountFormData {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  bio: string;
}

interface PasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function ProfilePage() {
  const [accountSaved, setAccountSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);

  const {
    register: registerAccount,
    handleSubmit: handleAccountSubmit,
    formState: { errors: accountErrors, isSubmitting: isAccountSubmitting },
  } = useForm<AccountFormData>({
    defaultValues: {
      firstName: 'Sarah',
      lastName: 'Mitchell',
      email: 'sarah.mitchell@email.com',
      username: 'sarahm',
      bio: 'On a journey of self-discovery and transformation. Stage 3 explorer',
    },
  });

  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors, isSubmitting: isPasswordSubmitting },
    watch,
    reset: resetPassword,
  } = useForm<PasswordFormData>();

  const newPassword = watch('newPassword');

  const onAccountSubmit = async (data: AccountFormData) => {
    // TODO: Implement actual account update logic
    console.log('Account data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setAccountSaved(true);
    setTimeout(() => setAccountSaved(false), 3000);
  };

  const onPasswordSubmit = async (data: PasswordFormData) => {
    // TODO: Implement actual password update logic
    console.log('Password data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setPasswordSaved(true);
    resetPassword();
    setTimeout(() => setPasswordSaved(false), 3000);
  };

  return (
    <Box bg="bg" minH="calc(100vh - 200px)" py={10}>
      <Container maxW="container.xl">
        <VStack gap={10} align="stretch">
          {/* Header */}
          <Box>
            <Heading fontSize="3xl" mb={2}>
              Profile & Settings
            </Heading>
            <Text color="fg.muted">Manage your account, privacy, and preferences</Text>
          </Box>

          <Grid templateColumns={{ base: '1fr', lg: '1fr 2fr' }} gap={8}>
            {/* Sidebar */}
            <VStack gap={6} align="stretch">
              {/* Profile Card */}
              <Card.Root bg="bg.subtle" borderTop="3px solid" borderColor="brand.gold">
                <Card.Body>
                  <VStack gap={4}>
                    <SimpleAvatar size="2xl" name="Sarah Mitchell" />
                    <VStack gap={1}>
                      <Heading size="md">Sarah Mitchell</Heading>
                      <Text fontSize="sm" color="fg.muted">
                        @sarahm
                      </Text>
                      <Badge colorScheme="yellow">Premium Member</Badge>
                    </VStack>
                    <Text fontSize="sm" color="fg.muted" textAlign="center">
                      On a journey of self-discovery and transformation. Stage 3 explorer
                    </Text>
                    <Button
                      variant="outline"
                      borderColor="brand.gold"
                      color="brand.gold"
                      size="sm"
                      w="full"
                    >
                      Edit Profile Photo
                    </Button>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Quick Stats */}
              <Card.Root bg="bg.subtle">
                <Card.Header>
                  <Heading size="sm" color="brand.gold">
                    Your Stats
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={3} align="stretch">
                    <HStack justify="space-between">
                      <Text fontSize="sm">Journey Stage</Text>
                      <Text fontSize="sm" fontWeight="semibold" color="brand.gold">
                        Stage 3
                      </Text>
                    </HStack>
                    <HStack justify="space-between">
                      <Text fontSize="sm">Practice Streak</Text>
                      <Text fontSize="sm" fontWeight="semibold" color="brand.gold">
                        14 days
                      </Text>
                    </HStack>
                    <HStack justify="space-between">
                      <Text fontSize="sm">Total Practices</Text>
                      <Text fontSize="sm" fontWeight="semibold" color="brand.gold">
                        42
                      </Text>
                    </HStack>
                    <HStack justify="space-between">
                      <Text fontSize="sm">Member Since</Text>
                      <Text fontSize="sm" fontWeight="semibold">
                        Jan 2025
                      </Text>
                    </HStack>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </VStack>

            {/* Main Content */}
            <VStack gap={6} align="stretch">
              <Tabs.Root defaultValue="account">
                <Tabs.List bg="bg.subtle" borderRadius="md" p={1}>
                  <Tabs.Trigger value="account" color="fg" _selected={{ bg: 'brand.gold', color: 'brand.black' }}>
                    Account
                  </Tabs.Trigger>
                  <Tabs.Trigger value="privacy" color="fg" _selected={{ bg: 'brand.gold', color: 'brand.black' }}>
                    Privacy
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="notifications"
                    color="fg"
                    _selected={{ bg: 'brand.gold', color: 'brand.black' }}
                  >
                    Notifications
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="subscription"
                    color="fg"
                    _selected={{ bg: 'brand.gold', color: 'brand.black' }}
                  >
                    Subscription
                  </Tabs.Trigger>
                </Tabs.List>

                {/* Account Tab */}
                <Tabs.Content value="account">
                  <Card.Root bg="bg.subtle" mt={6}>
                    <Card.Header>
                      <Heading size="sm" color="brand.gold">
                        Account Information
                      </Heading>
                    </Card.Header>
                    <Card.Body>
                      <form onSubmit={handleAccountSubmit(onAccountSubmit)}>
                        <Stack gap={6}>
                          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                            <Box>
                              <Text mb={2} fontWeight="medium">First Name</Text>
                              <Input
                                bg="bg.muted"
                                borderColor={accountErrors.firstName ? 'red.500' : 'brand.charcoal'}
                                _focus={{ borderColor: 'brand.gold' }}
                                {...registerAccount('firstName', {
                                  required: 'First name is required',
                                  minLength: {
                                    value: 2,
                                    message: 'First name must be at least 2 characters',
                                  },
                                })}
                              />
                              {accountErrors.firstName && (
                                <Text color="red.500" fontSize="sm" mt={1}>
                                  {accountErrors.firstName.message}
                                </Text>
                              )}
                            </Box>
                            <Box>
                              <Text mb={2} fontWeight="medium">Last Name</Text>
                              <Input
                                bg="bg.muted"
                                borderColor={accountErrors.lastName ? 'red.500' : 'brand.charcoal'}
                                _focus={{ borderColor: 'brand.gold' }}
                                {...registerAccount('lastName', {
                                  required: 'Last name is required',
                                  minLength: {
                                    value: 2,
                                    message: 'Last name must be at least 2 characters',
                                  },
                                })}
                              />
                              {accountErrors.lastName && (
                                <Text color="red.500" fontSize="sm" mt={1}>
                                  {accountErrors.lastName.message}
                                </Text>
                              )}
                            </Box>
                          </Grid>

                          <Box>
                            <Text mb={2} fontWeight="medium">Email</Text>
                            <Input
                              type="email"
                              bg="bg.muted"
                              borderColor={accountErrors.email ? 'red.500' : 'brand.charcoal'}
                              _focus={{ borderColor: 'brand.gold' }}
                              {...registerAccount('email', {
                                required: 'Email is required',
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: 'Invalid email address',
                                },
                              })}
                            />
                            {accountErrors.email && (
                              <Text color="red.500" fontSize="sm" mt={1}>
                                {accountErrors.email.message}
                              </Text>
                            )}
                          </Box>

                          <Box>
                            <Text mb={2} fontWeight="medium">Username</Text>
                            <Input
                              bg="bg.muted"
                              borderColor={accountErrors.username ? 'red.500' : 'brand.charcoal'}
                              _focus={{ borderColor: 'brand.gold' }}
                              {...registerAccount('username', {
                                required: 'Username is required',
                                minLength: {
                                  value: 3,
                                  message: 'Username must be at least 3 characters',
                                },
                                pattern: {
                                  value: /^[a-zA-Z0-9_]+$/,
                                  message: 'Username can only contain letters, numbers, and underscores',
                                },
                              })}
                            />
                            {accountErrors.username && (
                              <Text color="red.500" fontSize="sm" mt={1}>
                                {accountErrors.username.message}
                              </Text>
                            )}
                          </Box>

                          <Box>
                            <Text mb={2} fontWeight="medium">Bio</Text>
                            <textarea
                              style={{
                                width: '100%',
                                minHeight: '100px',
                                backgroundColor: 'var(--chakra-colors-bg-muted)',
                                border: '1px solid var(--chakra-colors-brand-charcoal)',
                                borderRadius: '0.375rem',
                                padding: '0.75rem',
                                color: 'var(--chakra-colors-fg)',
                                resize: 'vertical',
                              }}
                              {...registerAccount('bio', {
                                maxLength: {
                                  value: 200,
                                  message: 'Bio must be 200 characters or less',
                                },
                              })}
                            />
                            {accountErrors.bio && (
                              <Text color="red.500" fontSize="sm" mt={1}>
                                {accountErrors.bio.message}
                              </Text>
                            )}
                          </Box>

                          <HStack justify="flex-end" gap={4}>
                            {accountSaved && (
                              <Text color="green.500" fontSize="sm">
                                Changes saved!
                              </Text>
                            )}
                            <Button variant="outline" borderColor="brand.charcoal" type="button">
                              Cancel
                            </Button>
                            <Button
                              type="submit"
                              bg="brand.gold"
                              color="brand.black"
                              _hover={{ bg: 'brand.lightGold' }}
                              loading={isAccountSubmitting}
                            >
                              {isAccountSubmitting ? 'Saving...' : 'Save Changes'}
                            </Button>
                          </HStack>
                        </Stack>
                      </form>
                    </Card.Body>
                  </Card.Root>

                  <Card.Root bg="bg.subtle" mt={6}>
                    <Card.Header>
                      <Heading size="sm" color="brand.gold">
                        Change Password
                      </Heading>
                    </Card.Header>
                    <Card.Body>
                      <form onSubmit={handlePasswordSubmit(onPasswordSubmit)}>
                        <Stack gap={4}>
                          <Box>
                            <Text mb={2} fontWeight="medium">Current Password</Text>
                            <Input
                              type="password"
                              bg="bg.muted"
                              borderColor={passwordErrors.currentPassword ? 'red.500' : 'brand.charcoal'}
                              _focus={{ borderColor: 'brand.gold' }}
                              {...registerPassword('currentPassword', {
                                required: 'Current password is required',
                              })}
                            />
                            {passwordErrors.currentPassword && (
                              <Text color="red.500" fontSize="sm" mt={1}>
                                {passwordErrors.currentPassword.message}
                              </Text>
                            )}
                          </Box>
                          <Box>
                            <Text mb={2} fontWeight="medium">New Password</Text>
                            <Input
                              type="password"
                              bg="bg.muted"
                              borderColor={passwordErrors.newPassword ? 'red.500' : 'brand.charcoal'}
                              _focus={{ borderColor: 'brand.gold' }}
                              {...registerPassword('newPassword', {
                                required: 'New password is required',
                                minLength: {
                                  value: 8,
                                  message: 'Password must be at least 8 characters',
                                },
                              })}
                            />
                            {passwordErrors.newPassword && (
                              <Text color="red.500" fontSize="sm" mt={1}>
                                {passwordErrors.newPassword.message}
                              </Text>
                            )}
                          </Box>
                          <Box>
                            <Text mb={2} fontWeight="medium">Confirm New Password</Text>
                            <Input
                              type="password"
                              bg="bg.muted"
                              borderColor={passwordErrors.confirmPassword ? 'red.500' : 'brand.charcoal'}
                              _focus={{ borderColor: 'brand.gold' }}
                              {...registerPassword('confirmPassword', {
                                required: 'Please confirm your new password',
                                validate: (value) =>
                                  value === newPassword || 'Passwords do not match',
                              })}
                            />
                            {passwordErrors.confirmPassword && (
                              <Text color="red.500" fontSize="sm" mt={1}>
                                {passwordErrors.confirmPassword.message}
                              </Text>
                            )}
                          </Box>
                          <HStack justify="flex-end" gap={4}>
                            {passwordSaved && (
                              <Text color="green.500" fontSize="sm">
                                Password updated!
                              </Text>
                            )}
                            <Button
                              type="submit"
                              bg="brand.gold"
                              color="brand.black"
                              _hover={{ bg: 'brand.lightGold' }}
                              loading={isPasswordSubmitting}
                            >
                              {isPasswordSubmitting ? 'Updating...' : 'Update Password'}
                            </Button>
                          </HStack>
                        </Stack>
                      </form>
                    </Card.Body>
                  </Card.Root>
                </Tabs.Content>

                {/* Privacy Tab */}
                <Tabs.Content value="privacy">
                  <Card.Root bg="bg.subtle" mt={6}>
                    <Card.Header>
                      <Heading size="sm" color="brand.gold">
                        Privacy Settings
                      </Heading>
                    </Card.Header>
                    <Card.Body>
                      <Stack gap={6}>
                        <HStack justify="space-between">
                          <Box>
                            <Text fontWeight="semibold" mb={1}>
                              Public Profile
                            </Text>
                            <Text fontSize="sm" color="fg.muted">
                              Allow others to view your profile and journey progress
                            </Text>
                          </Box>
                          <Toggle defaultChecked />
                        </HStack>

                        <HStack justify="space-between">
                          <Box>
                            <Text fontWeight="semibold" mb={1}>
                              Show Journey Stage
                            </Text>
                            <Text fontSize="sm" color="fg.muted">
                              Display your current stage on your profile
                            </Text>
                          </Box>
                          <Toggle defaultChecked />
                        </HStack>

                        <HStack justify="space-between">
                          <Box>
                            <Text fontWeight="semibold" mb={1}>
                              Allow Direct Messages
                            </Text>
                            <Text fontSize="sm" color="fg.muted">
                              Let community members send you messages
                            </Text>
                          </Box>
                          <Toggle defaultChecked />
                        </HStack>

                        <HStack justify="space-between">
                          <Box>
                            <Text fontWeight="semibold" mb={1}>
                              Anonymous Posting
                            </Text>
                            <Text fontSize="sm" color="fg.muted">
                              Post to community without showing your name
                            </Text>
                          </Box>
                          <Toggle />
                        </HStack>

                        <HStack justify="space-between">
                          <Box>
                            <Text fontWeight="semibold" mb={1}>
                              Research Data Contribution
                            </Text>
                            <Text fontSize="sm" color="fg.muted">
                              Share anonymized data for scientific research
                            </Text>
                          </Box>
                          <Toggle defaultChecked />
                        </HStack>
                      </Stack>
                    </Card.Body>
                  </Card.Root>
                </Tabs.Content>

                {/* Notifications Tab */}
                <Tabs.Content value="notifications">
                  <Card.Root bg="bg.subtle" mt={6}>
                    <Card.Header>
                      <Heading size="sm" color="brand.gold">
                        Notification Preferences
                      </Heading>
                    </Card.Header>
                    <Card.Body>
                      <Stack gap={6}>
                        <HStack justify="space-between">
                          <Box>
                            <Text fontWeight="semibold" mb={1}>
                              Daily Practice Reminders
                            </Text>
                            <Text fontSize="sm" color="fg.muted">
                              Get reminded to complete your daily practice
                            </Text>
                          </Box>
                          <Toggle defaultChecked />
                        </HStack>

                        <HStack justify="space-between">
                          <Box>
                            <Text fontWeight="semibold" mb={1}>
                              Community Replies
                            </Text>
                            <Text fontSize="sm" color="fg.muted">
                              Notify when someone replies to your posts
                            </Text>
                          </Box>
                          <Toggle defaultChecked />
                        </HStack>

                        <HStack justify="space-between">
                          <Box>
                            <Text fontWeight="semibold" mb={1}>
                              Masterclass Updates
                            </Text>
                            <Text fontSize="sm" color="fg.muted">
                              New masterclass announcements and reminders
                            </Text>
                          </Box>
                          <Toggle defaultChecked />
                        </HStack>

                        <HStack justify="space-between">
                          <Box>
                            <Text fontWeight="semibold" mb={1}>
                              Circle Reminders
                            </Text>
                            <Text fontSize="sm" color="fg.muted">
                              Reminders for upcoming community circles
                            </Text>
                          </Box>
                          <Toggle defaultChecked />
                        </HStack>

                        <HStack justify="space-between">
                          <Box>
                            <Text fontWeight="semibold" mb={1}>
                              Newsletter
                            </Text>
                            <Text fontSize="sm" color="fg.muted">
                              Monthly newsletter with insights and tips
                            </Text>
                          </Box>
                          <Toggle defaultChecked />
                        </HStack>
                      </Stack>
                    </Card.Body>
                  </Card.Root>
                </Tabs.Content>

                {/* Subscription Tab */}
                <Tabs.Content value="subscription">
                  <Card.Root bg="bg.subtle" mt={6} borderTop="3px solid" borderColor="brand.gold">
                    <Card.Header>
                      <Heading size="sm" color="brand.gold">
                        Current Plan
                      </Heading>
                    </Card.Header>
                    <Card.Body>
                      <VStack gap={6} align="stretch">
                        <HStack justify="space-between">
                          <Box>
                            <Heading size="md" mb={2}>
                              Premium Annual
                            </Heading>
                            <Text fontSize="sm" color="fg.muted">
                              Next billing date: January 15, 2026
                            </Text>
                          </Box>
                          <Text fontSize="2xl" fontWeight="bold" color="brand.gold">
                            $149/year
                          </Text>
                        </HStack>

                        <Box>
                          <Text fontWeight="semibold" mb={3}>
                            Your Benefits:
                          </Text>
                          <VStack align="start" gap={2}>
                            <Text fontSize="sm">✓ Unlimited access to all masterclasses</Text>
                            <Text fontSize="sm">✓ All 12 stages of Hero's Journey</Text>
                            <Text fontSize="sm">✓ Full meditation and teaching library</Text>
                            <Text fontSize="sm">✓ Community circles and events</Text>
                            <Text fontSize="sm">✓ Biometric data integration</Text>
                            <Text fontSize="sm">✓ Priority customer support</Text>
                          </VStack>
                        </Box>

                        <HStack gap={4}>
                          <Button variant="outline" borderColor="brand.gold" color="brand.gold">
                            Manage Billing
                          </Button>
                          <Button variant="ghost" colorScheme="red">
                            Cancel Subscription
                          </Button>
                        </HStack>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                </Tabs.Content>
              </Tabs.Root>
            </VStack>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
