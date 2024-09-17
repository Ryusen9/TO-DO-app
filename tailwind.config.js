/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    fontFamily: {
      'lobster': ['Lobster', 'sans-serif'],
      'poppins': ['Poppins', 'system-ui']
    },
    extend: {},
  },
  plugins: [require('preline/plugin'), require('taos/plugin'), require('daisyui')],
}