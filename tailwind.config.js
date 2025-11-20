/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'agro-yellow': '#ECB417',
        'agro-dark': '#132116',
        'agro-light': '#E9E9E9',
        'agro-black': '#191919',
      }
    },
  },
  plugins: [],
}
