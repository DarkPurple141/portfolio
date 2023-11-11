/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '../../packages/ui/src/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('@portfolio/tailwind-preset')],
  theme: {
    extend: {},
  },
  plugins: [],
}
