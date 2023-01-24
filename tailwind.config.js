/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/flowbite/**/*.js"],
  theme: {
    fontFamily: {
    },
    extend: {
      backgroundImage: {
        'main': "url('https://ui-assets-gc.thrillophilia.com/assets/homepage/homepage-banner-2696fc25d8bb0f563e9ff7ae22882ee67cea624e244dfb0bc74316db0ffdcfba.jpg')"
      },
      colors: {
        'soft-black': '#2E343D'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
