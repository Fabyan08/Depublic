/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#9B51E0",
        second: "#FDF9F0",
        third: "#C4C4C4",
        darkPurple: "#360146",
        gray: "#4D4D4D",
      },
    },
  },
  plugins: [],
};
