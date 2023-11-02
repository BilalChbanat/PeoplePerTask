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
        block : '#1D1D41',
        ConB : '#9F7AEA',
        fillB : '#141332',
        AddCB : '#FFC700',
        AddCW: '##9F7AEA',
        AddB : '#FE9E0F',
        tab : '#F0F0FF'
      },
      fontFamily: {
          
          'poppins': ['Poppins', 'sans-serif'],
          'fredoka': ['Fredoka', 'sans-serif'],
      },
      backgroundImage: {
        'bg1-image': "url('../images/bg.png')",
      }

    },
  },
  plugins: [],
}


