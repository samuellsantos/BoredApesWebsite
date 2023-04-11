/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["'Overpass'", 'sans-serif'],
        robotoCondensed: ["'Roboto Condensed'", 'sans-serif'],
      },
      backgroundImage: {
        'green-background': "url('/src/assets/backgroundGreen.png')",
      },
    },
  },
  plugins: [],
};
