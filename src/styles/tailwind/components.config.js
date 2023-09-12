/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/components/*.html', './src/data/components/*.mdx'],
  plugins: [require('@tailwindcss/forms')],
}
