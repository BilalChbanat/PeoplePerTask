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
        seperator: '#3F444E',
        howitworks1: '#F4E9FD',
        howitworks2: '#F4E9FD',
        howitworks3: '#F4E9FD',
        howitworksdark1: '#1D193A',
        howitworksdark2: '#131C37',
        howitworksdark3: '#152A2D',
        footer: '#1F2131',
      },
      boxShadow: {
        'shadowBox': '5px 5px 25px rgba(1 1 1 / 20%);',
        'shadowBoxDarkMod': '0px 7px 22px 0px #FFFFFF',
      },
      fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'fredoka': ['Fredoka', 'sans-serif'],
        },
    },
  },
  plugins: [],
}

