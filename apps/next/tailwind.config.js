/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: 'var(--accent-bg-color)',
        'brand.bold': 'var(--accent-bg-color-bold)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
