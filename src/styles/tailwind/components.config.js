/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/code/*.html', './src/data/components/*.mdx'],
  plugins: [require('@tailwindcss/forms')],
}
