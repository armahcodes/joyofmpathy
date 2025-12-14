import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Black and Gold color palette
        brand: {
          black: { value: '#000000' },
          darkGray: { value: '#1a1a1a' },
          charcoal: { value: '#2d2d2d' },
          gold: { value: '#D4AF37' },
          lightGold: { value: '#F4E4B8' },
          paleGold: { value: '#FFF8DC' },
          bronze: { value: '#CD7F32' },
          white: { value: '#FFFFFF' },
          offWhite: { value: '#F5F5F5' },
        },
      },
      fonts: {
        heading: { value: 'var(--font-geist-sans), system-ui, sans-serif' },
        body: { value: 'var(--font-geist-sans), system-ui, sans-serif' },
      },
    },
    semanticTokens: {
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: { value: '{colors.brand.gold}' },
          solid: { value: '{colors.brand.gold}' },
          contrast: { value: '{colors.brand.black}' },
        },
        // Background colors
        bg: {
          DEFAULT: { value: '{colors.brand.black}' },
          subtle: { value: '{colors.brand.darkGray}' },
          muted: { value: '{colors.brand.charcoal}' },
        },
        // Text colors
        fg: {
          DEFAULT: { value: '{colors.brand.offWhite}' },
          muted: { value: '{colors.gray.400}' },
          subtle: { value: '{colors.gray.500}' },
        },
        // Accent colors
        accent: {
          DEFAULT: { value: '{colors.brand.gold}' },
          emphasis: { value: '{colors.brand.lightGold}' },
          muted: { value: '{colors.brand.paleGold}' },
        },
      },
    },
  },
  globalCss: {
    body: {
      bg: 'bg',
      color: 'fg',
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
