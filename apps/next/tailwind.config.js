/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@halyard/tailwind-preset'),
  ],
  content: [
    './{pages,app}/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/*.{js,ts,jsx,tsx}',
  ]
}
