/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        tomato: "rgb(254, 101, 79)",
        bisque: "rgb(254, 217, 155)",
        darkBisque: "rgb(254, 209, 140)",
        lightblue: "rgb(214, 239, 255)",
        lightblue2: "rgb(254, 254, 255)",
      },
      fontFamily: {
        sans: ["Bangers", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
