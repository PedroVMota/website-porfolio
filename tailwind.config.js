/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container-link': {
          '@apply text-white hover:text-gray-400 text-gray-500 text-2xl p-2': {},
        }
      });
    }
  ]
}