/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'hf': "1420px",
        'hs': "1045px",
        'ht': "755px"
      },
      colors: {
        mainColorDark: "#111827",
        mainPurple: "#9F7AEA",
        mainBlue: "#6366F1",
        defaultText: "#363848",
        loginBtnBg: "#F0EEFF",
        cardGrey: '#161E2D',
        textGrey: '#8E95A1',
        seperator: '#3F444E',
        darkGrey: '#A9A9A9',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'fredoka': ['Fredoka', 'sans-serif'],
      },
      backgroundImage: {
        'bg1-image': "url('../images/bg.png')",
      },
    },
  },
  plugins: [],
}


