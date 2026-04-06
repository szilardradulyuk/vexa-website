/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:           '#FFFFFF',
        surface:      '#F9F8F5',
        border:       '#E8E6E0',
        text:         '#0D0D0D',
        muted:        '#6B6B65',
        hint:         '#A8A8A0',
        green:        '#2D7A3A',
        'green-hover':'#236130',
        dark:         '#0D0D0D',
        amber:        '#E8A020',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
