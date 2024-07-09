/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,tsx, js}"
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Inter',
      }
    },
  },
  plugins: [],
}