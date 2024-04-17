/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}',
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Dancing Script", "sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

