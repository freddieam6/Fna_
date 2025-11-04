/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        darkGold: "#FFAA00",
        background: "#0B0B0B",
      },
    },
  },
  plugins: [],
};
