/** @type {import('tailwindcss').Config} */

module.exports = {
  prefix: 'tw-',
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
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
    extend: {},
  },
  plugins: [],
}