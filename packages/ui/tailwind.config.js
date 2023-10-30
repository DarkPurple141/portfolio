/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundColor: {
        'neutral.hover': 'var(--bg-color-hover)',
      },
      colors: {
        brand: 'var(--accent-bg-color)',
        'brand.bold': 'var(--accent-bg-color-bold)',
      },
    },
  },
  plugins: [],
}
