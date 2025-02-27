/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xsm': {'max': '760px'},
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
};
