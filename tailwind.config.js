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
        'hero': "1110px",
        'heromax': {'max': "1110px"},
        'herosecond': {'max': "770px"},
        'herothird': {'max': "628px"},
        'hf': "1430px",
        'hs': "1070px",
        'ht': "770px",
        'hl': {'max': "770px"},
        'ff': "1040px",
        'fs': "1003px",
        'ft': "860px",
        'fff': "688px",
        'ffff': "816px"
      },
      colors: {
        cardGrey: '#161E2D',
        textGrey: '#8E95A1',
        mainColorDark: "#111827",
        mainPurple: "#9F7AEA",
        mainBlue: "#6366F1",
        defaultText: "#363848",
        loginBtnBg: "#F0EEFF",
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

