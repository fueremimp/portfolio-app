/** @type {import('tailwindcss').Config} */
export default {
  content: [],content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'iceBlack': '#2E2E48',
        'iceGrey': '#F7F9FC'
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'dmSan' : ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

