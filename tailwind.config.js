/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "Helvetica"],
      },
      boxShadow: {
        "top-shadow": "0 3px 10px rgb(0 0 0 / 0.2)",
      },
    },
  },
  plugins: [],
};
