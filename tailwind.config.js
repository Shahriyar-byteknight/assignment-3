 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  module.exports = {
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('c1-assets/cat-big.png')",
          'footer-texture': "url('c1-assets/logo-footer.png')",
        }
      }
    }
  }