/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    animation: {
      spin: "spin 0.8s linear infinite"
    },
    fontFamily: {
      sans: ["roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
