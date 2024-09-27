/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Sesuaikan dengan direktori proyek kamu
    "./*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
