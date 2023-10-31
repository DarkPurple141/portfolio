/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'neutral.hover': 'var(--bg-color-hover)',
      },
      colors: {
        default: 'var(--text-color)',
        subtle: 'var(--text-color-subtle)',
        subtlest: 'var(--text-color-subtlest)',
        brand: 'var(--accent-bg-color)',
        'brand.bold': 'var(--accent-bg-color-bold)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
