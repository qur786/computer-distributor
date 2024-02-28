/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "Helvetica"],
      },
      animation: {
        "slide-bottom": "slide-bottom 225ms cubic-bezier(0, 0, 0.2, 1)",
      },
      keyframes: {
        "slide-bottom": {
          "0%": {
            top: -100,
          },
          "100%": {
            top: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
