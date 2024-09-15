/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#695c53",
        secondary: "#de5a1d",
      },
    },
  },
  plugins: [],
};
