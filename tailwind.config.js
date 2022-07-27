/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "menu-item": "url('../public/icons/corner.svg')",
      },
    },
  },
  plugins: [],
};
