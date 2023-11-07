/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        surface: 'var(--bg-color)',
        'neutral.hover': 'var(--bg-color-hover)',
        'accent': 'var(--accent-bg-color)',
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
