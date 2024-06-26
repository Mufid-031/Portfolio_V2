/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        mainColor: "#22d3ee",
        dark: "#64748b",
        light: "#f1faee",
        darkGray: "#50586D",
        lightGray: "#f1faee",
      },
    },
  },
  plugins: [],
};
