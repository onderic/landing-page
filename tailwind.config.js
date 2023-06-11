/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'bg-card': '#deb887',
      },
      backgroundImage: {
        'card-pattern': "url('./assets/architecture-g0d51376cf_640.jpg')",
      }

    },
  },
  plugins: [],
}