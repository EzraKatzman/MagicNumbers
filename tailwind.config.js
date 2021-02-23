const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tgray: colors.trueGray,
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
