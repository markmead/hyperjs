module.exports = {
  content: [
    "./posts/*.mdx",
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./public/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
