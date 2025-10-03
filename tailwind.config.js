/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'], 
      },
      colors: {
        primary: "#423FE5",
      },
    },
  },
  plugins: [],
}


