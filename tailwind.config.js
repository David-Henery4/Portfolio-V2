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
    extend: {
      gridTemplateColumns: {
        mobGrid: "24px repeat(10,1fr) 24px",
        tabGrid: "36px repeat(10,1fr) 36px",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      screens: {
        xtraSm: "33.12em", // min-width: 530px
        smTab: "39.37em", // min-width: 630px
        
      },
    },
  },
  plugins: [],
};
