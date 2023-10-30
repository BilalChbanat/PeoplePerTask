/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{,src/**/}*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cardGrey: '#161E2D',
        textGrey: '#8E95A1'
      }
    },
  },
  plugins: [],
}

