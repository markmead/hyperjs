/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/components/*.html',
    './src/data/components/*.mdx',
    './src/utils/*.js',
  ],
  plugins: [require('@tailwindcss/forms')],
}
