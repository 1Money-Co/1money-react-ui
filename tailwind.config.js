/** @type {import('tailwindcss').Config} */

module.exports = {
  prefix: 'tw-',
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    screens: {
      md: '481px',
      lg: '769px',
      xl: '1280px',
    },
    spacing: {
      1: 'var(--space-1, 4px)',
      2: 'var(--space-2, 8px)',
      3: 'var(--space-3, 12px)',
      4: 'var(--space-4, 16px)',
      5: 'var(--space-5, 20px)',
      6: 'var(--space-6, 24px)',
      7: 'var(--space-7, 28px)',
      8: 'var(--space-8, 32px)',
      9: 'var(--space-9, 36px)',
      10: 'var(--space-10, 40px)',
      11: 'var(--space-11, 44px)',
      12: 'var(--space-12, 48px)',
      13: 'var(--space-13, 52px)',
      14: 'var(--space-14, 56px)',
      15: 'var(--space-15, 60px)',
      16: 'var(--space-16, 64px)',
      20: 'var(--space-17, 80px)',
      30: 'var(--space-18, 120px)',
      50: 'var(--space-19, 50%)',
      100: 'var(--space-20, 100%)',
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      primary: {
        100: '#e5efff',
        200: '#ccddff',
        300: '#abc4ff',
        400: '#6491fa',
        500: '#3d73f2',
        600: '#2e59e5',
        700: '#1444cc',
        800: '#183699',
        900: '#142d66',
        1000: '#1c2844'
      },
      neutrals: {
        100: '#fafafc',
        300: '#e0e2ee',
        600: '#808080',
        800: '#404040'
      },
      success: {
        100: '#56dbb3',
        200: '#07b898',
        300: '#56dbb3',
      },
      warning: {
        100: '#faaa48',
        200: '#e58918',
        300: '#c96b06'
      },
      error: {
        100: '#e74878',
        200: '#cc1461',
        300: '#9c184c'
      },
    },
    borderRadius: {
      none: '0',
      xxs: '1px',
      xs: '2px',
      s: '4px',
      sm: '6px',
      m: '10px',
      ml: '16px',
      lg: '24px',
      xl: '32px',
      round: '50%',
    },
    extend: {
      spacing: {
        'base': '16px',
        'xxs': '2px',
        'xs': '4px',
        's': '8px',
        'sm': '10px',
        'm': '14px',
        'ml': '24px',
        'l': '28px',
        'xl': '40px',
        '2xl': '100px',
        '3xl': '140px',
        '4xl': '240px',
      }
    },
  },
  plugins: [],
}