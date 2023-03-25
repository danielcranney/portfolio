// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
    extend: {
      fontFamily: {
        display: ['"acumin-pro-wide"', "sans-serif"],
        body: ['"acumin-pro"', "sans-serif"],
      },
      width: {
        "30pc": "30%",
        "31pc": "31%",
        "32pc": "32%",
        "49pc": "49%",
        "48pc": "48%",
        "1/8": "12.5%",
        "2/8": "25%",
        "3/8": "37.5%",
        "4/8": "50%",
        "5/8": "65.8%",
        "6/8": "75%",
        "7/8": "87.5%",
      },
      transitionProperty: {
        width: "width",
      },
      colors: {
        soft: "#f0f0f0",
        brand: "#7364d0",
        brandAlt: "#867dd8",
        darker: "#1d1d23",
        dark: "#22222b",
        mid: "#282833",
        light: "#a2a1a6",
        lightest: "#ffffff",
      },
      backgroundImage: (theme) => ({
        "header-img": "url('/bg.svg')",
      }),
    },
  },
  plugins: [],
};
