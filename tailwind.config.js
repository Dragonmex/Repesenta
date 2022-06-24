const withMT = require("@MATERIAL-TAILWIND/REACT/UTILS/withMT")

/** @type {import('tailwindcss').Config} */
module.exports = withMT(
  {
    content: ["./src/**/*.{js,ts,tsx,jsx}"],
    theme: {
      extend: {
        colors: {
          'regal-blue': '#243c5a',
          'laranja': '#FF7A00',
          'cinza_claro': '#A3A3A3',
          'branco': '#F0F0F0',
          'cinza_escuro': '#434343'
        },
        fontFamily: {
          'popins': ['Popins', 'sans-serif'],
          'play': ['Play', 'sans-serif'],
          'roboto': ['Roboto', 'sans-serif']
        }
      },
    },
    plugins: [],
  }
);
