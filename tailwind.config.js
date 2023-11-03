/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./scripts/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'hero': "1030px",
        'hf': "1430px",
        'hs': "1070px",
        'ht': "760px",
      },
      colors: {
        cardGrey: '#161E2D',
        textGrey: '#8E95A1',
        mainColorDark: "#111827",
        mainPurple: "#9F7AEA",
        mainBlue: "#6366F1",
        defaultText: "#363848",
        loginBtnBg: "#F0EEFF",
        cardGrey: '#161E2D',
        textGrey: '#8E95A1',
        seperator: '#3F444E',
        darkGrey: '#A9A9A9',
        seperator: '#3F444E'
      },
      fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'fredoka': ['Fredoka', 'sans-serif'],
        },

        backgroundImage: {
          'body-bg': "url('../images/bg.png')",
        }
    },
  },
  plugins: [],
}

