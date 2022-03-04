module.exports = {
  content: [
    "./posts/*.mdx",
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./public/examples/*.html",
  ],
  theme: {
    extend: {
      keyframes: {
        life: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
      animation: {
        life: "life 4750ms linear forwards",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
