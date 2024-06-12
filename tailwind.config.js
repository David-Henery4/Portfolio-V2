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
      lightNavy: "#0D142D",
    },
    extend: {
      gridTemplateColumns: {
        mobGrid: "24px repeat(10,1fr) 24px",
        tabGrid: "50px repeat(10,1fr) 50px",
        deskGrid: "1fr 50px repeat(10,1fr) 50px",
        xlDeskGrid: "24px 1fr 50px repeat(10,1fr) 50px",
        projectGrid: "repeat(auto-fit, minmax(250px,.75fr))",
        skillsGrid: "repeat(auto-fit, minmax(220px, 1fr))",
      },
      gridTemplateRows: {
        projectCard: "13rem 1fr",
      },
      gridAutoRows: {
        deskRows: "min-content 1fr",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      screens: {
        xtraSm: "33.12em", // min-width: 530px
        smTab: "39.37em", // min-width: 630px
        smDesk: "64em", // min-width: 1024px
        lrgDesk: "76.87em", // min-width: 1230px
        xtraLrgDesk: "81.25em", // min-width: 1300px
      },
    },
  },
  plugins: [],
};
