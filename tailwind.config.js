module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/**/*.html'],
  theme: {
    extend: {
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
