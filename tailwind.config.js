/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mainColor: "#111827",
        cardGrey: '#161E2D',
        textGrey: '#8E95A1',
        bluepeople: '#6366F1'
      },
      fontFamily: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif']
        },
      }
    },
  },
  plugins: [],
}
