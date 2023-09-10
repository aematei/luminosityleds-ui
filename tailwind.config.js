/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luminosity-blue': '#eefdff'
      }, 
      fontFamily: {
        'inter': ['Inter']
      }
    },
  },
  plugins: [],
}