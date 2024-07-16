/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkModeGray: "#111113",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
