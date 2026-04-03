/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        green:    '#2D7A3A',
        dark:     '#0F0F0F',
        offwhite: '#F9F8F5',
        amber:    '#E8A020',
        border:   '#E2E2DC',
        muted:    '#6B6B65',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
