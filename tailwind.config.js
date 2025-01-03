/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "offwhite": '#F5F9FC',
        "naturalblack": '#222222',
        "lightgray": '#D1E0E9',
        "gray": '#737376',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(80.25deg, #0071BB 0.38%, #39A3E7 98.6%)',
      },
    },
  },
  plugins: [],
}