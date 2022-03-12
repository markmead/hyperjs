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
      boxShadow: {
        offset: "8px 8px 0 0 var(--tw-shadow-color)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
