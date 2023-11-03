/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {


      },
      colors: {
        mainColorDark: "#111827",
        mainPurple: "#9F7AEA",
        mainBlue: "#6366F1",
        defaultText: "#363848",
        loginBtnBg: "#F0EEFF",
        cardGrey: '#161E2D',
        textGrey: '#8E95A1',
        bluepeople: '#6366F1',
        seperator: '#3F444E',
        darkGrey: '#A9A9A9',,
        cardDarkMod: '#161E2D',
        pColorWightMode: '#363848',
        pColorDarkMode: '#A9A9A9',
        nameTitleColor: '#9F7AEA',
      },
      width: {
        'ss': '69vw',
      },
      boxShadow: {
        'shadowBox': '5px 5px 25px rgba(1 1 1 / 20%);',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fredoka: {
        'fredoka': ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


