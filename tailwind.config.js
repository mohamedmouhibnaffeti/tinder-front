/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  important: "#root",
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}