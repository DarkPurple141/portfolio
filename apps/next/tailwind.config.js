/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#A4A4FF',
        'brand.bold': '#5757FF',
      },
    },
  },
  plugins: [],
}
