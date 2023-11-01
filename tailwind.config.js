/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mainColorDark: "#111827",
        mainPurple: "#9F7AEA",
        mainBlue: "#6366F1",
        defaultText: "#363848",
        loginBtnBg: "#F0EEFF",
        cardGrey: '#161E2D',
        textGrey: '#8E95A1',
        seperator: '#3F444E'
        
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


