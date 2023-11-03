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
        block : '#1D1D41',
        ConB : '#9F7AEA',
        fillB : '#141332',
        AddCB : '#FFC700',
        AddCW: '#9F7AEA',
        AddB : '#FE9E0F',
        tab : '#F0F0FF',
        popup : '#6366F1',
        confirmB : '#FFD700'
      },
      fontFamily: {
          
          'poppins': ['Poppins', 'sans-serif'],
          'fredoka': ['Fredoka', 'sans-serif'],
        },
    },
  },
  plugins: [],
}

