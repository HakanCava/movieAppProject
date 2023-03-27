/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        "sel-gray":"#3C3B3F",
        "main-yellow":"#FFE000",
        "main-green":"#799F0C",
        "form-bg-color":"#61045F"

      }
    },
  },
  darkMode: 'class',
  plugins: [require("tw-elements/dist/plugin")],
}
