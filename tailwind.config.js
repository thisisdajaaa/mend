// File: tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-900": "#0047AB", // Adjusted to match Mend.io brand blue
      },
    },
  },
  plugins: [],
};
