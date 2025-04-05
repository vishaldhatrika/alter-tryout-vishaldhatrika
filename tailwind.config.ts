import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        ModernGothic: ['var(--modern-gothic)', 'sans-serif'],
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'alter-black': '#1A1818',
      'alter-black-80': 'rgba(26, 24, 24, 0.8)',
      'alter25-black-a': '#283042',
      'alter25-black-b': '#121A16',
      'alter25-black-c': '#2A373B',
      'alter25-button-dark': '#1A1818',
      'alter25-button-dark-outline': '#7f8685',
      'alter25-button-light': '#F5F4EF',
      'alter25-button-light-hover': '#EBEBE7',
      'alter25-button-light-outline': '#DDDCDC',
      'alter25-cream-a': '#EBEBE7',
      'alter25-cream-b': '#F5F4EF',
      'alter25-red': '#E0432E',
      'badge-gray': '#D5D7D8',
      'highlight-green': '#DEECDD',
      'checkmark-green': '#33912E',
    },
  },
  plugins: [],
} satisfies Config;
