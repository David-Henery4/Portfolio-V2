/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    colors: {
      primaryBlack: "#020614",
      primaryWhite: "#F5F8FA",
      secondaryRed: "#DF4E57",
      accentOrangeYellow: "#FF9D00",
      darkShade: "#060B1D",
      lightShade: "#DBE8F0",
    },
    extend: {},
  },
  plugins: [],
};
